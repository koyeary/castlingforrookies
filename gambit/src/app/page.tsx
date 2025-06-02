"use client";
import React from "react";
import BylineAnimation from "./components/Animations/BylineAnimation";
import IconAnimation from "./components/Animations/IconAnimation";
import Navbar from "./components/Navbar";
import TitleAnimation from "./components/Animations/TitleAnimation";

const Page: React.FC = () => {
  return (
    <div className="app-container">
      <Navbar user={{ userName: "Guest", isLoggedIn: true }} />
      <main
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <div
          style={{
            height: "fit-content",
            margin: "auto",
          }}
        >
          <div
            style={{
              width: "fit-content",
              margin: "auto",
              display: "flex",
              flexDirection: "row",
              gap: "10px",
            }}
          >
            <TitleAnimation />
            <IconAnimation />
          </div>
          <BylineAnimation />
        </div>
      </main>
    </div>
  );
};

export default Page;
