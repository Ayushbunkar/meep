"use client";

import React, { useEffect } from "react";
import style from "@/app/page.module.css";
import Spline from "@splinetool/react-spline";
import gsap from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAssets } from "../context/AssetContext";

gsap.registerPlugin(ScrollTrigger, useGSAP);
// gsap.registerPlugin(useGSAP);

export const Section4 = ({ section, sectionOut }) => {
  const { registerAsset, markAssetLoad } = useAssets();

  useEffect(() => {
    // List of assets to register and track
    const assets = [
      "/assets/arrow.svg",
      "/assets/twitter.svg",
      "https://prod.spline.design/sVjdKjOLYunsqO8m/scene.splinecode",
    ];

    // Register all assets
    assets.forEach((asset) => registerAsset(asset));

    // Track asset loading
    const images = [];
    assets.forEach((asset) => {
      const img = new Image();
      img.src = asset;
      img.onload = () => markAssetLoad();
      img.onerror = () => markAssetLoad(); // Handle errors
      if (img.complete) markAssetLoad(); // Handle cached images
      images.push(img);
    });

    return () => {
      // Cleanup if necessary
      images.forEach((img) => (img.onload = img.onerror = null));
    };
  }, [registerAsset, markAssetLoad]);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 575px)", () => {
      gsap.fromTo(
        ".secFive .heading",
        { opacity: 0, x: "-100%" },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: ".secFive",
            scroller: ".maincontainer",
            start: "top 50%",
            end: "top 0%",
            scrub: true,
            // markers:true
          },
        }
      );
      gsap.fromTo(
        ".secFive .card1",
        { opacity: 0, x: "100%" },
        {
          opacity: 1,
          x: 0,
          scrollTrigger: {
            trigger: ".secFive",
            scroller: ".maincontainer",
            start: "top 50%",
            end: "top 0%",
            scrub: true,
            // markers:true
          },
        }
      );

      gsap.fromTo(
        ".secFive .scene4",
        { display: "none" },
        {
          display: "block",
          scrollTrigger: {
            trigger: ".secFive",
            scroller: ".maincontainer",
            top: "top 100%",
            end: "top 90%",
            scrub: true,
          },
        }
      );
    });
  });

  const copy = () => {
    navigator.clipboard.writeText("xAef38fBFBF932D1Ae...808Bc8fBd8Cd8E1f8BC5");
    let conf = document.querySelector(".copied_tooltip");
    conf.style.display = "inline";
    setTimeout(() => {
      conf.style.display = "none";
    }, 500);
  };

  return (
    <div
      className={`${style.section4} position-relative section overflow-hidden secFive`}
      style={{ zIndex: "1" }}
    >
      <h2
        className={`d-flex justify-content-center align-items-center gap-3 heading`}
      >
        Meep Ready
        <img src="/assets/arrow.svg" alt="" />
        Are You?
      </h2>
      <div className="d-flex align-items-start align-items-sm-end align-items-xxl-center justify-content-sm-end justify-content-center pt-5">
        {/* <div>

                </div> */}
        <div
          className={`${
            style.card +
            " d-lg-flex d-xxl-block justify-content-between align-items-center"
          }  mt-sm-5 pex-xl-3 card1`}
        >
          <p className="ps-xl-4 text-center text-sm-start">
            The era of AI,
            <br /> Adapt now or never
          </p>
          <a
            href="https://form.typeform.com/to/GsMdiv0o"
            className="text-decoration-none"
            target="_blank"
          >
            <button className="d-flex align-items-center gap-5">
              <span className="grdtext">Magic</span>
              <img
                src="/assets/arrow.svg"
                style={{ transform: "rotate(-90deg)" }}
                alt=""
              />
            </button>
          </a>
        </div>
      </div>
      <div
        className={
          style.scene + " position-absolute w-100 bottom-0  start-0 scene4"
        }
        style={{ zIndex: "-1" }}
      >
        <Spline
          scene="https://prod.spline.design/sVjdKjOLYunsqO8m/scene.splinecode"
          onLoad={() => markAssetLoad()}
        />
      </div>
      <div
        className={
          style.social +
          " d-flex justify-content-between aling-items-center gap-5 position-absolute"
        }
      >
        <p className="mb-0">Follow on our Socials</p>
        <div className="d-flex gap-3 align-items-center">
          <a href="https://t.me/meepcommunity" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-telegram"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09" />
            </svg>
          </a>
          <a href="https://x.com/MemecoinistNews" target="_blank">
            <img src="/assets/twitter.svg" alt="" />
          </a>
          {/* <a href="#" target='_blank'>
                        <img src="/assets/intagram.svg" alt="" />
                    </a>
                    <a href="#" target='_blank'>
                        <img src="/assets/facebook.svg" alt="" />
                    </a>
                    <a href="#" target='_blank'>
                        <img src="/assets/discord.svg" alt="" />
                    </a> */}
          {/* <a href="#" target='_blank'>
                        <img src="/assets/intagram.svg" alt="" />
                    </a> */}
        </div>
      </div>
    </div>
  );
};
