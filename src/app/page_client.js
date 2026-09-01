"use client";
import { Hero } from "@/Component/Home/Hero";
import styles from "./page.module.css";
import { Section2 } from "@/Component/Home/Section2";
import { Section21 } from "@/Component/Home/Section21";
import { Section3 } from "@/Component/Home/Section3";
import { Section4 } from "@/Component/Home/Section4";
import React, { useLayoutEffect, useRef, useState } from "react";
import { Loader } from "@/Component/Common/Loader";
import gsap from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Nav } from "@/Component/Common/Nav";
import { Ai_Dao } from "@/Component/Home/Ai_Dao";
import { Section1 } from "@/Component/Home/Section1";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { AssetProvider } from "@/Component/context/AssetContext";



gsap.registerPlugin(ScrollTrigger, useGSAP, ScrollSmoother);

export default function Home() {
  const [per, setPer] = useState(10);
  const scroll_height = useRef();
  const scrollRef = useRef(null);

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1.5,
      effects: true,
      normalizeScroll: true,
    });
    const mm = gsap.matchMedia();

    mm.add("(min-width:575px)", () => {
      gsap.fromTo(
        ".hero",
        { opacity: 1 },
        {
          opacity: 0.3,
          delay: 2,
          duration: 1.5,
          scrollTrigger: {
            trigger: ".hero",
            scroller: ".maincontainer",
            start: "top top",
            end: "+=800",
            scrub: true,
            // markers:true
          },
        }
      );
    });
    gsap.fromTo(
      ".hero .scene1",
      { display: "block" },
      {
        display: "none",
        scrollTrigger: {
          trigger: ".hero",
          scroller: ".maincontainer",
          start: "top -90%",
          end: "+=10%",
          scrub: true,
        },
      }
    );
  });

  const handleScroll = () => {
    let target = document.querySelector(".hero").clientHeight;
    let tr_hieght = target * 0.6;
    let scroll_el = document.querySelector(".maincontainer");
    let scroll = scroll_el.scrollTop;
    console.log(tr_hieght, scroll);
    if (scroll < tr_hieght) return (scroll_height.current = scroll);
    if (scroll < tr_hieght || scroll > target) return;

    if (scroll_height.current > scroll) return;
  };

  const handleLoad = () => {
    setPer(100);
    setTimeout(() => {
      setLoad(false);
    }, 1000);
  };

  useLayoutEffect(() => {
    let interval;
    if (per < 100) {
      interval = setInterval(() => {
        setPer((prev) => {
          if (prev < 100) return prev + 10;
          return prev;
        });
      }, 30); // Speed of animation
    }

    return () => clearInterval(interval);
  }, [per]);
  return (
    <>
      <AssetProvider>
        {true && <Loader />}
        <main
          onLoad={() => {
            console.log("i execute");
          }}
          ref={scrollRef}
          data-scroll-container
          className={styles.container + " maincontainer"}
          id="smooth-wrapper"
        >
          <div id="smooth-content">
            <Nav />
            <div className="hero">
              <Hero handleLoad={handleLoad} />
            </div>
            <Section1 />
            <Section2 />
            <Section21 />
            <Section3 />
            <div
              className="d-none d-sm-block"
              style={{ height: "100vh" }}
            ></div>
            <Ai_Dao />
            <Section4 />
          </div>
        </main>
      </AssetProvider>
    </>
  );
}
