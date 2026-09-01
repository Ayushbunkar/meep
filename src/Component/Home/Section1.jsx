"use client";

import React, { useEffect, useRef } from "react";
import style from "@/app/page.module.css";
import gsap from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Section1 = () => {
  const frame = useRef();
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2; // 2x speed
    }
  }, []);

  useGSAP(() => {
    gsap.set(frame.current, {
      clipPath: "inset(40% 38% 35% 38% round 20px)",
      borderRadius: "100%",
    });
    gsap.fromTo(
      frame.current,
      {
        clipPath: "inset(40% 38% 35% 38% round 20px)",
        borderRadius: "100%",
      },

      {
        clipPath: "inset(0% 0% 0% 0% round 20px)",
        borderRadius: "100%",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#secondSection",
          start: "center center",
          end: "bottom center",
          scrub: true,
          pin: true,
          markers: false,
        },
      }
    );
  }, []);
  //   useGSAP(() => {
  //     gsap.fromTo(
  //       ".sec1 .heading",
  //       { x: "-100%", opacity: "0" },
  //       {
  //         x: 0,
  //         opacity: 1,
  //         duration: 1.5,
  //         scrollTrigger: {
  //           trigger: ".sec1 .heading",
  //           scroller: ".maincontainer",
  //           start: "top 100%",
  //           end: "+=2%",
  //           scrub: true,
  //         },
  //       }
  //     );
  //     gsap.fromTo(
  //       ".sec1 .para",
  //       { y: 200, opacity: "0" },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         duration: 1.5,
  //         scrollTrigger: {
  //           trigger: ".sec1 .heading",
  //           scroller: ".maincontainer",
  //           start: "top 90%",
  //           end: "+=2%",
  //           scrub: true,
  //         },
  //       }
  //     );
  //   });

  return (
    <div id="secondSection" className={style.section1 + "  mb-4 "}>
      <div className={style.content+" px-2"}
        style={{
          position: "absolute",
          left: "50%",
          transform: " translateX(-50%)",
          width:"100%"
        }}
      >
        <h2 className="grdtext text-center heading">Partnered with the Best</h2>
        <p
          className="text-center opacity-50 para"
          style={{ fontSize: "20px", marginTop: "2rem" }}
        >
          Not just words—Meep crafts stories, strategies
          <br />and statements that make the world listen, love, and click.
        </p>
      </div>

        

      <div
        ref={frame}
        style={{
          width: "100%",
          height: "100%",
          display: "flex",

          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: "0",
          }}
        >
          <video
            ref={videoRef}
            style={{ scale: "150%" }}
            src="/unchained.mp4"
            loop={true}
            autoPlay={true}
            muted
          />
        </div>

        <div className={style.content+ " px-2"}
          style={{
            position: "absolute",
            left: "50%",
            transform: " translateX(-50%)",
            width:"100%"
          }}
        >
          <h2 className="white-text text-center heading">
            Partnered with the Best
          </h2>
          <p
            className="text-center opacity-50 para"
            style={{ fontSize: "20px", color: "white", marginTop: "2rem" }}
          >
            Not just words—Meep crafts stories, strategies
            <br />and statements that make the world listen, love, and click.
          </p>
        </div>

        
      </div>
    </div>
  );
};
