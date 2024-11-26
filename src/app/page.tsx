"use client"; // this is a client component
import React from "react";
import Intro from "containers/main/Intro";
import About from "containers/main/About";
import Service from "containers/main/Service";
import Review from "containers/main/Review";
import Success from "containers/main/Success";
import Estimate from "containers/main/Estimate";
import EstimateForm from "containers/main/EstimateForm";
import MiddleBanner from "containers/main/MiddleBanner";
import FooterEstimate from "containers/main/FooterEstimate";

const Page = ({}) => {
  return (
    <>
      <div className="m-pt-50" />
      <EstimateForm />
      <Intro />
      <About />
      <Service />
      <Review />
      <Success />
      <Estimate />
      <MiddleBanner />
      <FooterEstimate />
    </>
  );
};

export default Page;
