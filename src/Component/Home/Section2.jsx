"use client";

import React, { useEffect, useRef, useState } from "react";
import style from "@/app/page.module.css";
import Spline from "@splinetool/react-spline";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAssets } from "../context/AssetContext";

// gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger, useGSAP);

export const Section2 = ({ section, sectionOut }) => {
  const { registerAsset, markAssetLoad } = useAssets();
  const secTwo = useRef();
  const canvasRef = useRef(null);
  const images = useRef([]);
  const imageSequence = useRef({ frame: 0 });
  const frameCount = 72;

  const imgRef = useRef(null);

  useEffect(() => {
    // List of static assets to register and track
    const staticAssets = [
      "/assets/arrow.svg",
      "/assets/magic.svg",
      "/assets/dashboard.svg",
      "/assets/corner2.svg",
    ];

    // Register static assets
    staticAssets.forEach((asset) => registerAsset(asset));

    // Register and track image sequence
    for (let i = 0; i <= frameCount; i++) {
      const path = getFramePath(i);
      registerAsset(path);

      const img = new Image();
      img.src = path;
      img.onload = () => markAssetLoad();
      img.onerror = () => markAssetLoad(); // Handle errors
      if (img.complete) markAssetLoad(); // Handle cached images
      images.current.push(img);
    }

    // Cleanup if necessary
    return () => {
      images.current.forEach((img) => (img.onload = img.onerror = null));
    };
  }, [registerAsset, markAssetLoad, frameCount]);

  // const imgRef = useRef(null)
  // const hideNum  = ()=>{
  //   let taget = document.querySelectorAll(".hideSpan")
  //   setTimeout(() => {
  //     taget[0].style.display= "inline-flex";
  //     taget[1].style.display= "none";
  //   }, 7000);
  // }
  // const showNum =()=>{
  //   let taget = document.querySelectorAll(".hideSpan")
  //   taget[0].style.display = "none";
  //   taget[1].style.display = "inline-flex"
  // }

  // useEffect(()=>{
  //   if(section===2){
  //     hideNum()
  //   }else{
  //     showNum()
  //   }
  // },[section])

  const getFramePath = (index) => {
    let str = `/img_sequence2/00${index >= 10 ? index : "0" + index}.webp`;
    return str;
  };

  useGSAP(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    let taget = document.querySelector(".scene2");
    canvas.width = taget.clientHeight * 0.72797527;
    canvas.height = taget.clientHeight;

    for (var i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      images.current.push(img);
    }

    images.current[0].onload = () => {
      // console.log(images.current[0])
      context.drawImage(images.current[0], 0, 0, canvas.width, canvas.height);
    };

    const render = () => {
      const img = images.current[Math.floor(imageSequence.current.frame)];

      if (img) {
        if (imageSequence.current.frame >= 72) {
          canvas.style.opacity = 0;
          imgRef.current.style.opacity = "1";
          imgRef.current.style.width = canvas.width;
          imgRef.current.style.height = canvas.height;
        } else {
          canvas.style.opacity = 1;
          imgRef.current.style.opacity = "0";
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.drawImage(img, 0, 0, canvas.width, canvas.height);
          // console.log(imageSequence.current.frame)
        }
      }
    };

    const mm = gsap.matchMedia();

    mm.add("(min-width:575px)", () => {
      gsap.to(imageSequence.current, {
        frame: frameCount - 1,
        snap: "frame",
        scrollTrigger: {
          trigger: canvas,
          scroller: ".maincontainer",
          start: "top top",
          end: "+=100%",
          scrub: 1,
          // markers: true,
        },
        onUpdate: render,
      });

      gsap.from("#sectwo_container", {
        scrollTrigger: {
          trigger: "#sectwo_container",
          pin: true,
          pinSpacing: false,
          scroller: ".maincontainer",
          start: "top 16",
          end: "+500%",
        },
      });

      gsap.fromTo(
        ".secTwo",
        { opacity: 0.3 },
        {
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: ".secTwo",
            scroller: ".maincontainer",
            start: "top 100%",
            end: "top 0%",
            scrub: true,
            // markers:true
          },
        }
      );

      gsap.fromTo(
        ".secTwo .heading1",
        { x: "-100%" },
        {
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".secTwo",
            // onEnter: animateIn(),
            scroller: ".maincontainer",
            start: "top 100%",
            end: "top 0%",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        ".secTwo .left",
        { x: "-100%" },
        {
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".secTwo",
            // onEnter: animateIn(),
            scroller: ".maincontainer",
            start: "top 100%",
            end: "top 0%",
            scrub: 1,
          },
        }
      );
    });
    mm.add("(max-width:575px)", () => {
      gsap.to(imageSequence.current, {
        frame: frameCount - 1,
        snap: "frame",
        scrollTrigger: {
          trigger: canvas,
          scroller: ".maincontainer",
          start: "top 30%",
          end: "+=400",
          scrub: 1,
          // markers: true,
        },
        onUpdate: render,
      });
    });

    //universal Heading1 in  =====================================

    //universal left in  =====================================

    mm.add("(min-width:992px)", () => {
      // heading1 in & out ===================================

      gsap.fromTo(
        ".secTwo .heading1",
        { x: "0%", opacity: 1 },
        {
          x: "-100%",
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".secTwo",
            // onEnter: animateIn(),
            scroller: ".maincontainer",
            start: "top -20%",
            end: "+=82%",
            scrub: 1,
            // markers:true
          },
        }
      );

      // left out =====================================

      gsap.fromTo(
        ".secTwo .left",
        { x: "0%", opacity: 1 },
        {
          x: "-100%",
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".secTwo",
            scroller: ".maincontainer",
            start: "top -20%",
            end: "+=82%",
            scrub: 1,
            // markers:true
          },
        }
      );

      // for right enter and  out ==========================
      gsap.fromTo(
        ".secTwo .right",
        { x: "100%" },
        {
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".secTwo",
            scroller: ".maincontainer",
            start: "top 100%",
            end: "top 0%",
            scrub: 1,
            // markers: true
          },
        }
      );
      gsap.fromTo(
        ".secTwo .right",
        { x: "0%", opacity: 1 },
        {
          x: "100%",
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".secTwo",
            scroller: ".maincontainer",
            start: "top -20%",
            end: "+=82%",
            scrub: 1,
            // markers:true
          },
        }
      );

      // Heading2 in =========================

      gsap.fromTo(
        ".secTwo .heading2",
        { x: "50%", opacity: 0 },
        {
          x: "0%",
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".secTwo",
            scroller: ".maincontainer",
            start: "top -20%",
            end: "+=82%",
            scrub: 1,
            // markers:true
          },
        }
      );
      // Secene left =============================
      gsap.to(".secTwo .scene2", {
        x: "0%",
        duration: 1,
        scrollTrigger: {
          trigger: ".secTwo",
          scroller: ".maincontainer",
          start: "top 100%",
          end: "top 0%",
          scrub: 0.3,
          // markers:true
        },
      });
      gsap.fromTo(
        ".secTwo .scene2",
        { x: "0%", opacity: 1 },
        {
          x: "25%",
          opacity: 0.9,
          duration: 1,
          scrollTrigger: {
            trigger: ".secTwo",
            scroller: ".maincontainer",
            start: "top 0%",
            end: "+=82%",
            scrub: 0.3,
            // markers:true
          },
        }
      );

      // gsap.fromTo(
      //   ".secTwo .scene2",
      //   { x: "25%" },
      //   {
      //     x: "50%",
      //     duration: 1,
      //     scrollTrigger: {
      //       trigger: ".secTwo",
      //       scroller: ".maincontainer",
      //       start: "top -100%",
      //       end: "+=100%",
      //       scrub: 0.1,
      //       // markers:true
      //     },
      //   }
      // );

      //-------------------------- Section2 Out ----------------
      gsap.fromTo(
        ".secTwo",
        { opacity: 1 },
        {
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".secTwo",
            // pin:true,
            scroller: ".maincontainer",
            start: "top -100%",
            end: "+=100%",
            scrub: true,
            // markers:true
          },
        }
      );
    });

    //--------------------- For section 2 -------------------------

    //---------------------------Out Animation -------------------

    mm.add("(max-width: 991px) and (min-width: 575px)", () => {
      // heading 1 Out =============================
      gsap.fromTo(
        ".secTwo .heading1",
        { x: "0%", opacity: 1 },
        {
          x: "-100%",
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".secTwo",
            // onEnter: animateIn(),
            scroller: ".maincontainer",
            start: "top -120%",
            end: "+=82%",
            scrub: 1,
            // markers:true
          },
        }
      );
      // heading 2 In ====================================
      gsap.fromTo(
        ".secTwo .heading2",
        { x: "50%", opacity: 0 },
        {
          x: "0%",
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".secTwo",
            scroller: ".maincontainer",
            start: "top -120%",
            end: "+=82%",
            scrub: 1,
            // markers:true
          },
        }
      );
      // left out ==========================
      gsap.fromTo(
        ".secTwo .left",
        { opacity: 1 },
        {
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".secTwo",
            scroller: ".maincontainer",
            start: "top -30%",
            end: "+=10%",
            scrub: 1,
            // markers:true
          },
        }
      );

      //Right in & Out ================================
      gsap.to(
        ".secTwo .right",
        // { opacity: 0, top: 400 },
        {
          opacity: 0,
          // top: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".secTwo",
            // onEnter: animateIn(),
            scroller: ".maincontainer",
            start: "top 100%",
            end: "+=10%",
            scrub: 1,
            // markers: true
          },
        }
      );
      gsap.fromTo(
        ".secTwo .right",
        { opacity: 0, y: 400 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".secTwo",
            // onEnter: animateIn(),
            scroller: ".maincontainer",
            start: "top -30%",
            end: "+=10%",
            scrub: 1,
            // markers: true
          },
        }
      );
      gsap.fromTo(
        ".secTwo .right",
        { opacity: 1, x: 0 },
        {
          opacity: 0,
          x: "-100%",
          duration: 1,
          scrollTrigger: {
            trigger: ".secTwo",
            // onEnter: animateIn(),
            scroller: ".maincontainer",
            start: "top -120%",
            end: "+=82%",
            scrub: 1,
            // markers: true
          },
        }
      );
      //-------------------------- Section2 Out ----------------
      gsap.fromTo(
        ".secTwo",
        { opacity: 1 },
        {
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".secTwo",
            scroller: ".maincontainer",
            start: "top -200%",
            end: "+=100%",
            scrub: 1,
            // markers:true
          },
        }
      );
    });
  });

  // useEffect(()=>{
  // },[])

  return (
    <div id="sectwo_container">
      <div
        ref={secTwo}
        className={`${style.section2} section mb-sm-5  secTwo`}
        id="features"
      >
        <div
          className={
            style.top +
            " d-flex justify-content-center justify-content-sm-between align-items-center mb-0 mb-xxl-3"
          }
        >
          <h2
            className={`grdtext text-center text-sm-start ${
              section === 1 && !sectionOut && style.active
            } heading1`}
          >
            Meet, Meep AI
          </h2>
          <h2
            className={`grdtext d-none d-sm-block position-absolute start-0 ${
              section === 2 && !sectionOut && style.active
            } heading2`}
          >
            3 Steps to Unlock the Magic
          </h2>
          <img
            src="/assets/arrow.svg"
            className="position-absolute d-none d-sm-block  end-0 faderightin"
            alt=""
          />
        </div>
        <div
          className={
            style.bottom +
            " d-flex flex-column flex-lg-row justify-content-between align-items-lg-center"
          }
        >
          <div className={`${style.left} left`}>
            <div>
              <h3 className="grdtext d-flex justify-content-center justify-content-sm-start align-items-center gap-2">
                <span>PR</span> Perfection
              </h3>
              <p className="text-center text-sm-start">
                Dominate search engines with laser-focused keywords and
                cutting-edge SEO strategies that captivate your target audience.
              </p>
            </div>
            <div className="position-relative">
              <div className={style.internal_card + " pb-3 pb-xxl-4"}>
                <div className="d-flex align-items-center gap-3 mb-2 mb-xxl-3">
                  <img src="/assets/magic.svg" alt="" />
                  <p className="mb-0">AI-Crafted Press Releases</p>
                </div>
                <p className="mb-0">
                  Transform every announcement into a riveting brand
                  story—Meep’s AI ensures maximum impact and reach.
                </p>
              </div>

              <div className={style.internal_card + " pt-3 pt-xxl-4"}>
                <div className="d-flex align-items-center gap-3 mb-2 mb-xxl-3">
                  <img src="/assets/dashboard.svg" alt="" />
                  <p className="mb-0">Real-Time Media Monitoring</p>
                </div>
                <p className="mb-0">
                  Stay ahead of the curve with immediate alerts on brand
                  mentions and industry shifts, ensuring you always lead the
                  conversation.
                </p>
              </div>
              <img
                src="/assets/corner2.svg"
                className="position-absolute top-0 start-0"
                alt=""
              />
              <img
                src="/assets/corner2.svg"
                className="position-absolute top-0 end-0"
                style={{ transform: "scaleX(-1)" }}
                alt=""
              />
              <img
                src="/assets/corner2.svg"
                className="position-absolute bottom-0 start-0"
                style={{ transform: "scaleY(-1)" }}
                alt=""
              />
              <img
                src="/assets/corner2.svg"
                className="position-absolute bottom-0 end-0"
                style={{ transform: "scale(-1, -1)" }}
                alt=""
              />
            </div>
            <div className="mt-4 d-sm-block d-none">
              <h3 className="grdtext">User-Friendly</h3>
              <p className="mb-0">
                Not just words—Meep crafts stories, strategies, and statements
                that make the world listen, love, and click.
              </p>
            </div>
          </div>
          {/* <div className={`${style.left2} ${section === 2 && !sectionOut && style.active}`}>
          <div className={style.card + ' d-flex gap-3'}>
            <div className='d-flex flex-column align-items-center gap-3'>
              <span className='d-inline-flex justify-content-center align-items-center'>1</span>
              <div></div>
            </div>
            <div>
              <h3 className='grdtext'>Connect Your Website</h3>
              <p>Meep connects seamlessly with your website, analytics tools, and other platforms, ensuring hassle-free integration.</p>
            </div>
          </div>
          <div className={style.card + ' d-flex gap-3'}>
            <div className='d-flex flex-column align-items-center gap-3'>
              <span className='d-inline-flex justify-content-center align-items-center'>2</span>
              <div></div>
            </div>
            <div>
              <h3 className='grdtext'>Define Your Goals</h3>
              <p>Meep connects seamlessly with your website, analytics tools, and other platforms, ensuring hassle-free integration.</p>
            </div>
          </div>
          <div className={style.card + ' d-flex gap-3'}>
            <div className='d-flex flex-column align-items-center gap-3'>
              <span className='d-inline-flex justify-content-center align-items-center'>
                <svg className='hideSpan' style={{display:"none"}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                </svg>
                <strong className='hideSpan fw-normal' style={{display:"block"}}>3</strong>
              </span>
            </div>
            <div>
              <h3 className='grdtext'>Define Your Goals</h3>
              <p>Meep connects seamlessly with your website, analytics tools, and other platforms, ensuring hassle-free integration.</p>
            </div>
          </div>
        </div> */}
          {/* <div></div> */}
          <div
            className={`${style.center} d-flex justify-content-center justify-content-md-end justify-content-lg-center align-items-center flex-grow-1 position-absolute start-lg-0 scene2`}
          >
            <canvas ref={canvasRef} />
            <img
              ref={imgRef}
              src={getFramePath(72)}
              className="position-absolute top-0"
              alt=""
              style={{ height: "100%" }}
            />
            {/* <img src="/assets/demo.png" alt="" /> */}
            {/* <Spline scene='https://prod.spline.design/rE2X58YBaFGEjN8S/scene.splinecode' /> */}
          </div>
          <div className={`${style.right} right`}>
            <div>
              <h3 className="grdtext d-flex justify-content-center justify-content-sm-start align-items-center gap-2">
                <span>SEO</span> Mastery
              </h3>
              <p className="text-center text-sm-start">
                Dominate search results with precisely engineered keywords and
                data-driven strategies that captivate your audience.
              </p>
            </div>
            <div className="position-relative">
              <div className={style.internal_card + " pb-3 pb-xxl-4"}>
                <div className="d-flex gap-3 mb-2 mb-xxl-3">
                  <img src="/assets/magic.svg" alt="" />
                  <p className="mb-0">AI-Crafted Press Releases</p>
                </div>
                <p className="mb-0">
                  Transform every announcement into a compelling brand
                  story—crafted by AI for maximum reach and impact.
                </p>
              </div>
              <div className={style.internal_card + " pt-3 pt-xxl-4"}>
                <div className="d-flex gap-3 mb-2 mb-xxl-3">
                  <img src="/assets/dashboard.svg" alt="" />
                  <p className="mb-0">Real-Time Media Monitoring</p>
                </div>
                <p className="mb-0">
                  Stay ahead of the curve with instant alerts on brand mentions,
                  competitor moves, and trending topics that shape your
                  industry.
                </p>
              </div>
              <img
                src="/assets/corner2.svg"
                className="position-absolute top-0 start-0"
                alt=""
              />
              <img
                src="/assets/corner2.svg"
                className="position-absolute top-0 end-0"
                style={{ transform: "scaleX(-1)" }}
                alt=""
              />
              <img
                src="/assets/corner2.svg"
                className="position-absolute bottom-0 start-0"
                style={{ transform: "scaleY(-1)" }}
                alt=""
              />
              <img
                src="/assets/corner2.svg"
                className="position-absolute bottom-0 end-0"
                style={{ transform: "scale(-1, -1)" }}
                alt=""
              />
            </div>
            <div className="mt-4 d-block d-sm-none">
              <h3 className="grdtext text-center text-sm-start">
                User-Friendly
              </h3>
              <p className="mb-0 text-center text-sm-start">
                Not just words—Meep crafts stories, strategies, and statements
                that make the world listen, love, and click.
              </p>
            </div>
            <div className="mt-4">
              <h3 className="grdtext text-center text-sm-start">
                Real-Time Insights
              </h3>
              <p className="mb-0 text-center text-sm-start">
                Leverage up-to-the-second analytics to refine campaigns, engage
                audiences, and propel your growth—faster than ever.
              </p>
            </div>
          </div>
          <div className={style.gaper + " d-sm-none"}></div>
        </div>
      </div>
    </div>
  );
};
