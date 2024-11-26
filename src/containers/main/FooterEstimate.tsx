"use client";
import React, { useState, FormEvent, ChangeEvent } from "react";
import Image from "next/image";
import styles from "./FooterEstimate.module.scss";

import PrivacyConsent from "components/Policy/PrivacyConsent";

interface FormData {
  name: string;
  location: string;
  firstPhone: string;
  middlePhone: string;
  lastPhone: string;
  services: string;
}

const EstimateForm = ({}) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    location: "",
    firstPhone: "",
    middlePhone: "",
    lastPhone: "",
    services: "",
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [status, setStatus] = useState<string>("");
  const [checkBoxActiveTwo, setCheckboxActiveTwo] = useState(true);
  const isCheckBoxClickedTwo = () => {
    setCheckboxActiveTwo(!checkBoxActiveTwo);
  };
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const getIsActiveTwo = checkBoxActiveTwo === true;

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
    { id: 1, name: "상가 인테리어", num:"service_radio_11" },
		{ id: 2, name: "주거 인테리어", num:"service_radio_12"},
    { id: 3, name: "종합 인테리어", num:"service_radio_13" },
    { id: 4, name: "부분 인테리어", num:"service_radio_14" },
    { id: 5, name: "기타 상담", num:"service_radio_15" },
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
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
      });

      alert("문의가 성공적으로 등록 되었습니다.");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setStatus(`Error: ${error.message}`);
      alert(`문의등록에 실패하였습니다.`);
    }
  };

  return (
    <>
      <div id="FooterEstimate" className={styles.section}>
        <form id="formElem" onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.top_flex}>
            <div className={styles.flex}>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="성함"
                defaultValue={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className={styles.flex}>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="지역"
                defaultValue={formData.location}
                onChange={handleChange}
              />
            </div>
            <div className={styles.flex}>
              <div className={styles.phoneFlex}>
                <input
                  type="text"
                  id="firstPhone"
                  name="firstPhone"
                  placeholder="010"
                  defaultValue={formData.firstPhone}
                  onChange={handleChange}
                />
                -
                <input
                  type="text"
                  id="middlePhone"
                  name="middlePhone"
                  placeholder="1234"
                  defaultValue={formData.middlePhone}
                  onChange={handleChange}
                />
                -
                <input
                  type="text"
                  id="lastPhone"
                  name="lastPhone"
                  placeholder="5678"
                  defaultValue={formData.lastPhone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={styles.flex} style={{width:'100%'}}>
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
          </div>
          <div className={styles.bottom_flex}>
            <button
              type="submit"
              className={
                getIsActiveTwo ? styles.buttonAction : styles.buttonDone
              }
            >
              문의하기
            </button>
            <div className={styles.checkboxFlex}>
              <input
                onClick={isCheckBoxClickedTwo}
                type="checkbox"
                id="privacyConsent"
                name="privacyConsent_2"
                defaultChecked={checkBoxActiveTwo}
              />
              <label htmlFor="privacyConsent_2">
                개인정보 수집 및 이용에 동의합니다.
                <span onClick={openModal}>보기</span>
              </label>
            </div>
          </div>
        </form>
      </div>
      {isOpen && (
        <div className={styles.modal}>
          <div>
            <h6>
              개인정보 수집 및 이용 동의
              <Image
                onClick={closeModal}
                src="/images/icon-close.png"
                width={15}
                height={15}
                alt=""
              />
            </h6>
            <PrivacyConsent />
          </div>
        </div>
      )}
    </>
  );
};

export default EstimateForm;
