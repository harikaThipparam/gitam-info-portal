import React, { useEffect, useState } from "react";
import AlertSection from "../AlertSection";
import Footer from "../FooterSection";
import NoticeBoard from "../noticeBoard/notice";
import Header from "../header/header";
import "./index.css";
import Gallery from "../Gallery/gallery";
import MyGallery from "../Gallery/gallery2";
import Carousal from "../carousal/carousal";
import FindHallTicket from "../halltickect/hall";
import SecondSemImportant from "../SecondSemImportant";
import Results from "../results/results";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); // Turn off loading after 5 seconds
    }, 3000);
  }, []);

  if (isLoading) {
    return (
      <div className="loadin-main-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="200px"
          width="200px"
          viewBox="0 0 200 200"
          class="pencil"
        >
          <defs>
            <clipPath id="pencil-eraser">
              <rect height="30" width="30" ry="5" rx="5"></rect>
            </clipPath>
          </defs>
          <circle
            transform="rotate(-113,100,100)"
            stroke-linecap="round"
            stroke-dashoffset="439.82"
            stroke-dasharray="439.82 439.82"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            r="70"
            class="pencil__stroke"
          ></circle>
          <g transform="translate(100,100)" class="pencil__rotate">
            <g fill="none">
              <circle
                transform="rotate(-90)"
                stroke-dashoffset="402"
                stroke-dasharray="402.12 402.12"
                stroke-width="30"
                stroke="hsl(223,90%,50%)"
                r="64"
                class="pencil__body1"
              ></circle>
              <circle
                transform="rotate(-90)"
                stroke-dashoffset="465"
                stroke-dasharray="464.96 464.96"
                stroke-width="10"
                stroke="hsl(223,90%,60%)"
                r="74"
                class="pencil__body2"
              ></circle>
              <circle
                transform="rotate(-90)"
                stroke-dashoffset="339"
                stroke-dasharray="339.29 339.29"
                stroke-width="10"
                stroke="hsl(223,90%,40%)"
                r="54"
                class="pencil__body3"
              ></circle>
            </g>
            <g transform="rotate(-90) translate(49,0)" class="pencil__eraser">
              <g class="pencil__eraser-skew">
                <rect
                  height="30"
                  width="30"
                  ry="5"
                  rx="5"
                  fill="hsl(223,90%,70%)"
                ></rect>
                <rect
                  clip-path="url(#pencil-eraser)"
                  height="30"
                  width="5"
                  fill="hsl(223,90%,60%)"
                ></rect>
                <rect height="20" width="30" fill="hsl(223,10%,90%)"></rect>
                <rect height="20" width="15" fill="hsl(223,10%,70%)"></rect>
                <rect height="20" width="5" fill="hsl(223,10%,80%)"></rect>
                <rect
                  height="2"
                  width="30"
                  y="6"
                  fill="hsla(223,10%,10%,0.2)"
                ></rect>
                <rect
                  height="2"
                  width="30"
                  y="13"
                  fill="hsla(223,10%,10%,0.2)"
                ></rect>
              </g>
            </g>
            <g transform="rotate(-90) translate(49,-30)" class="pencil__point">
              <polygon
                points="15 0,30 30,0 30"
                fill="hsl(33,90%,70%)"
              ></polygon>
              <polygon points="15 0,6 30,0 30" fill="hsl(33,90%,50%)"></polygon>
              <polygon
                points="15 0,20 10,10 10"
                fill="hsl(223,10%,10%)"
              ></polygon>
            </g>
          </g>
        </svg>
        <p className="text">Loading....</p>
      </div>
    );
  }

  return (
    <>
      <div className="main-container">
        <Header />
        <div className="quations-container">
          <Carousal />
          {/* <FindHallTicket /> */}
          {/* <Results /> */}
          <NoticeBoard />
          <AlertSection />
          <SecondSemImportant />
          {/* <Gallery /> */}
          <MyGallery/>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
