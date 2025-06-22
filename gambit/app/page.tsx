"use client";

import React from "react";

import TitleAnimation from "@/app/components/Animations/TitleAnimation";
import IconAnimation from "@/app/components/Animations/IconAnimation";
import BylineAnimation from "@/app/components/Animations/BylineAnimation";

const Page: React.FC = () => {
  return (
    <>
      <div className="title-animation-container">
        <TitleAnimation />
        <IconAnimation />
      </div>
      <BylineAnimation />
    </>
  );
};

export default Page;
