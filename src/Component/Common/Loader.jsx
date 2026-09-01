"use client";

import { useEffect, useState, memo, useRef } from "react";
import style from "./loader.module.css";
import { useAssets } from "../context/AssetContext";
// import Lottie from "react-lottie-player";
import Animation from "/public/data.json";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('react-lottie-player'), {
  ssr: false,
});
// Dynamically import the Lottie component with SSR disabled




gsap.registerPlugin(TextPlugin);

// Memoized Lottie component so it doesn't re-render unnecessarily
const LottieAnimation = memo(() => (
  <Lottie
    animationData={Animation}
    loop={true}
    play
    autoPlay={true}
    style={{ width: "50px" }}
  />
));

export const Loader = () => {
  const [isLoading, setLoading] = useState(true);
  const textRef = useRef(null);
  const loaderRef = useRef(null);
  const iconRef = useRef(null);
  const backRef = useRef(null);
  const progressRef = useRef(null);
  const { progress } = useAssets();
  const [displayedProgress, setDisplayedProgress] = useState(0);

  useEffect(() => {
    if (!isLoading) {
      const t1 = gsap.timeline();

      t1.add("start");

      // Animation A and B start at "start"
      t1.to(
        loaderRef.current,
        { y: "-110%", duration: 2, ease: "power2.out" },
        "start"
      );
      t1.to(
        [progressRef.current, iconRef.current],
        { opacity: 0, duration: 0.5 },
        "start"
      );

      // Animation C starts 1s (50%) after "start"
      t1.to(backRef.current, { y: "-110%", duration: 1 }, "start+=0.5");
      t1.play();
    }
  }, [isLoading]);

  useEffect(() => {
    // Animate text first
    gsap.to(textRef.current, {
      duration: 1,
      text: "Meep is getting Loaded",
      ease: "none",
      onComplete: () => {
        // Once the text is typed out, start pulse effect
        gsap.fromTo(
          textRef.current,
          { opacity: 0.7 },
          {
            opacity: 0.3,
            duration: 0.5,
            repeat: -1,
            yoyo: true, // So it fades back and forth
            ease: "power1.inOut",
          }
        );
      },
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setDisplayedProgress((prev) => {
        if (prev < progress) return prev + 1;
        return prev;
      });
    }, 20);

    return () => clearInterval(timer); // Clean up interval
  }, [progress]);

  useEffect(() => {
    if (displayedProgress >= 100) {
      const timeout = setTimeout(() => setLoading(false), 1000);
      return () => clearTimeout(timeout);
    }
  }, [displayedProgress, setLoading]);

  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <div ref={loaderRef} className={style.loaderContainer}>
          <div className={style.content}>
            <div className={style.text}>
              <p ref={textRef}></p>
            </div>
            <div className="flex-column flex-sm-row"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <div ref={iconRef}>
                <LottieAnimation />
              </div>
              <div ref={progressRef} className={style.progress}>
                {displayedProgress}%
              </div>
            </div>
          </div>
        </div>
        <div ref={backRef} className={style.backContainer}></div>
      </div>
    </div>
  );
};
