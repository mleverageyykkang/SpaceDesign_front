"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "./Estimate.module.scss";

import PrivacyConsent from "components/Policy/PrivacyConsent";

interface FormData {
  name: string;
  location: string;
  firstPhone: string;
  middlePhone: string;
  lastPhone: string;
  services: string;
	content: string;
}

const Estimate = ({}) => {

  const [formData, setFormData] = useState<FormData>({
    name: "",
    location: "",
    firstPhone: "",
    middlePhone: "",
    lastPhone: "",
    services: "",
		content: "",
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [status, setStatus] = useState<string>("");

  const [checkBoxActive, setCheckboxActive] = useState(true);
  const isCheckBoxClicked = () => {
    setCheckboxActive(!checkBoxActive);
  };

  const getIsActive = checkBoxActive === true;

  const handleOnChangeServiceSelectValue = (
    e: React.MouseEvent<HTMLInputElement>
  ) => {
    const serviceValue = (e.target as HTMLDivElement).getAttribute("data-value");

    setFormData((prev: FormData) => ({
      ...prev,
      services: serviceValue || prev.services,
    }));
  };


	const serviceList = [
    { id: 1, name: "상가 인테리어", num:"service_radio_6" },
		{ id: 2, name: "주거 인테리어", num:"service_radio_7"},
    { id: 3, name: "종합 인테리어", num:"service_radio_8" },
    { id: 4, name: "부분 인테리어", num:"service_radio_9" },
    { id: 5, name: "기타 상담", num:"service_radio_10" },
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("Submitting...");
    try {
      const response = await fetch("/api/client/inquire", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form.");
      }

      const data: { message: string } = await response.json();
      setStatus(`Success: ${data.message}`);

      setFormData({
        name: "",
        location: "",
        firstPhone: "",
        middlePhone: "",
        lastPhone: "",
        services: "",
				content:"",
      });

			console.log(formData)

      alert("문의가 성공적으로 등록 되었습니다.");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setStatus(`Error: ${error.message}`);
      alert(`문의등록에 실패하였습니다.`);
			console.log(formData)
    }
  };

  return (
    <div id="estimate" className={styles.section}>
      <h6>견적 문의</h6>
      <form id="formElem" onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.flex}>
          <div>
            <p>
              성함 혹은 업체명<span>*</span>
            </p>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <p>
              지역<span>*</span>
            </p>
            <input
              type="text"
              id="location"
              name="location"
              defaultValue={formData.location}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <p>
            연락처<span>*</span>
          </p>
          <div className={styles.phoneFlex}>
            <input
              type="text"
              id="firstPhone"
              name="firstPhone"
              defaultValue={formData.firstPhone}
              onChange={handleChange}
            />
            -
            <input
              type="text"
              id="middlePhone"
              name="middlePhone"
              defaultValue={formData.middlePhone}
              onChange={handleChange}
            />
            -
            <input
              type="text"
              id="lastPhone"
              name="lastPhone"
              defaultValue={formData.lastPhone}
              onChange={handleChange}
            />
          </div>
        </div>

        <div>
          <p>
            서비스 유형<span>*</span>
          </p>
          <input
                type="text"
                id="services"
                name="services"
                defaultValue={formData.services}
                onChange={handleChange}
                style={{ display: "none" }}
              />
            <div className={styles.radioFlex}>
							{serviceList.map((data) => (
								<div className={styles.radio} key={data.id}>
									<input
										type="radio"
										name="service_radio"
										id={data.num}
										onClick={handleOnChangeServiceSelectValue}
										data-value={data.id}
										data-name={data.name}
									/>
									<label htmlFor={data.num}>{data.name}</label>
									</div>
								))}
							</div>
        </div>

				<div>
					<p>
						자세한 문의사항을 남겨주시면 더욱 신속하고 정확한 상담/견적이 가능합니다!
					</p>
					<textarea id="content" name="content" defaultValue={formData.content}
              onChange={handleChange} />
				</div>

        <div>
          <p>
            개인정보 수집 및 이용 동의<span>*</span>
          </p>
          <PrivacyConsent />
        </div>

        <div className={styles.checkboxFlex}>
          <input
            onClick={isCheckBoxClicked}
            type="checkbox"
            id="privacyConsent_1"
            defaultChecked={checkBoxActive}
          />
          <label htmlFor="privacyConsent_1">
            개인정보 수집 및 내용에 동의합니다.
          </label>
        </div>
        <button
          type="submit"
          className={getIsActive ? styles.buttonAction : styles.buttonDone}
        >
          제출하기
        </button>
      </form>
    </div>
  );
};

export default Estimate;
