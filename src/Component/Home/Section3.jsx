"use client";
import React, { useEffect, useRef } from "react";
import style from "@/app/page.module.css";
import Spline from "@splinetool/react-spline";
import gsap from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAssets } from "../context/AssetContext";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const Section3 = ({ section, sectionOut }) => {
  const { registerAsset, markAssetLoad } = useAssets();
  const canvasRef = useRef(null);
  const frameCount = 50;

  const images = useRef([]);
  const imageSequence = useRef({ frame: 0 });

  const getFramePath = (index) => {
    let str = `/img_sequence/00${index >= 10 ? index : "0" + index}.webp`;
    return str;
  };

  useEffect(() => {
    // Register assets
    for (let i = 5; i <= frameCount + 4; i++) {
      const path = getFramePath(i);
      registerAsset(path);
    }
    registerAsset("/assets/arrow.svg");

    // Track image sequence loading
    images.current = [];
    for (let i = 5; i <= frameCount + 4; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => markAssetLoad();
      img.onerror = () => markAssetLoad(); // Handle errors
      if (img.complete) markAssetLoad(); // Handle cached images
      images.current.push(img);
    }

    // Track arrow.svg
    const arrowImg = new Image();
    arrowImg.src = "/assets/arrow.svg";
    arrowImg.onload = () => markAssetLoad();
    arrowImg.onerror = () => markAssetLoad();
    if (arrowImg.complete) markAssetLoad();
  }, [registerAsset, markAssetLoad]);

  useGSAP(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    let taget = document.querySelector(".scene3");
    let addUp = window.innerWidth > 1400 ? 1.3 : 1;
    canvas.width = taget.clientHeight * addUp * 1.77777777777;
    canvas.height = taget.clientHeight * addUp;

    for (var i = 5; i <= frameCount + 4; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      images.current.push(img);
    }

    images.current[0].onload = () => {
      context.drawImage(images.current[0], 0, 0, canvas.width, canvas.height);
    };

    const render = () => {
      const img = images.current[Math.floor(imageSequence.current.frame)];

      if (img) {
        // console.log(canvas.width, canvas.height)
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, 0, 0, canvas.width, canvas.height);
      }
    };

    const mm = gsap.matchMedia();

    mm.add("(min-width:575px)", () => {
      gsap.to(imageSequence.current, {
        frame: frameCount - 1,
        snap: "frame",
        scrollTrigger: {
          trigger: ".secFour",
          scroller: ".maincontainer",
          start: "top 0%",
          end: "+=82%",
          scrub: 1,
          // markers:true
        },
        onUpdate: render,
      });

      gsap.from("#secfour_container", {
        scrollTrigger: {
          trigger: "#secfour_container",
          pin: true,
          pinSpacing: false,
          scroller: ".maincontainer",
          start: "top 16",
          end: "+500%",
        },
      });
      gsap.fromTo(
        ".secFour",
        { opacity: 0.3 },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".secFour",
            scroller: ".maincontainer",
            start: "top 80%",
            end: "top 0%",
            scrub: true,
            // markers:true
          },
        }
      );

      gsap.fromTo(
        ".secFour .bottom",
        { y: 400 },
        {
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".secFour",
            scroller: ".maincontainer",
            start: "top 50%",
            end: "top 0%",
            scrub: true,
            // markers:true
          },
        }
      );
      gsap.fromTo(
        ".secFour .bottom .left",
        { x: "-100%", opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".secFour",
            scroller: ".maincontainer",
            start: "top 50%",
            end: "top 0%",
            scrub: true,
            // markers:true
          },
        }
      );
      gsap.fromTo(
        ".secFour .bottom .right",
        { x: "100%", opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".secFour",
            scroller: ".maincontainer",
            start: "top 50%",
            end: "top 0%",
            scrub: true,
            // markers:true
          },
        }
      );

      gsap.fromTo(
        ".secFour .bottom .scene3",
        { y: 200, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".secFour",
            scroller: ".maincontainer",
            start: "top 50%",
            end: "top 0%",
            scrub: true,
            // markers:true
          },
        }
      );

      // ------------------ Section Out -------------

      gsap.fromTo(
        ".secFour .top",
        { opacity: 1 },
        {
          opacity: 0,
          scrollTrigger: {
            trigger: ".secFour",
            scroller: ".maincontainer",
            start: "top -100%",
            end: "+=100%",
            scrub: true,
          },
        }
      );
    });

    mm.add("(min-width:768px)", () => {
      gsap.fromTo(
        ".secFour .bottom .heading1",
        { opacity: 1 },
        {
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".secFour",
            scroller: ".maincontainer",
            start: "top -35%",
            end: "+=5%",
            scrub: true,
            // markers:true
          },
        }
      );
      gsap.fromTo(
        ".secFour .bottom .heading2",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".secFour",
            scroller: ".maincontainer",
            start: "top -35%",
            end: "+=5%",
            scrub: true,
            // markers:true
          },
        }
      );

      // ---------------------------para ------------------
      gsap.fromTo(
        ".secFour .bottom  .para1",
        { display: "block" },
        {
          display: "none",
          duration: 1,
          scrollTrigger: {
            trigger: ".secFour",
            scroller: ".maincontainer",
            start: "top -35%",
            end: "+=1",
            scrub: true,
            // markers:true
          },
        }
      );
      gsap.fromTo(
        ".secFour .bottom  .para2",
        { display: "none" },
        {
          display: "block",
          duration: 1,
          scrollTrigger: {
            trigger: ".secFour",
            scroller: ".maincontainer",
            start: "top -35%",
            end: "+=1",
            scrub: true,
            // markers:true
          },
        }
      );

      // ------------------ Section Out -------------
      gsap.fromTo(
        ".secFour .bottom .left",
        { x: "0%", opacity: 1 },
        {
          x: "-100%",
          opacity: 0,
          scrollTrigger: {
            trigger: ".secFour",
            scroller: ".maincontainer",
            start: "top -100%",
            end: "+=100%",
            scrub: true,
          },
        }
      );
      gsap.fromTo(
        ".secFour .bottom .right",
        { x: "0%", opacity: 1 },
        {
          x: "100%",
          opacity: 0,
          scrollTrigger: {
            trigger: ".secFour",
            scroller: ".maincontainer",
            start: "top -100%",
            end: "+=100%",
            scrub: true,
          },
        }
      );
    });

    mm.add("(max-width:767px) and (min-width:575px)", () => {
      gsap.fromTo(
        ".secFour .bottom .heading1",
        { opacity: 1 },
        {
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: ".secFour",
            scroller: ".maincontainer",
            start: "top -100%",
            end: "+=5%",
            scrub: true,
            // markers:true
          },
        }
      );
      gsap.fromTo(
        ".secFour .bottom .heading2",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: ".secFour",
            scroller: ".maincontainer",
            start: "top -100%",
            end: "+=5%",
            scrub: true,
            // markers:true
          },
        }
      );

      // ---------------------------para ------------------
      gsap.fromTo(
        ".secFour .bottom  .para1",
        { display: "block" },
        {
          display: "none",
          duration: 1,
          scrollTrigger: {
            trigger: ".secFour",
            scroller: ".maincontainer",
            start: "top -100%",
            end: "+=1",
            scrub: true,
            // markers:true
          },
        }
      );
      gsap.fromTo(
        ".secFour .bottom  .para2",
        { display: "none" },
        {
          display: "block",
          duration: 1,
          scrollTrigger: {
            trigger: ".secFour",
            scroller: ".maincontainer",
            start: "top -100%",
            end: "+=1",
            scrub: true,
            // markers:true
          },
        }
      );

      gsap.fromTo(
        ".secFour .bottom .left",
        { x: "0%", opacity: 1 },
        {
          x: "-100%",
          opacity: 0,
          scrollTrigger: {
            trigger: ".secFour",
            scroller: ".maincontainer",
            start: "top -200%",
            end: "+=80%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        ".secFour .bottom .right",
        { x: "0%", opacity: 1 },
        {
          x: "100%",
          opacity: 0,
          scrollTrigger: {
            trigger: ".secFour",
            scroller: ".maincontainer",
            start: "top -160%",
            end: "+=60%",
            scrub: true,
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
          start: "top 40%",
          end: "top 0%",
          scrub: 1,
          // markers:true
        },
        onUpdate: render,
      });
    });
  });

  return (
    <>
      <div id="secfour_container">
        <div
          className={`${style.section3} section flex-column secFour`}
          id="why_meep"
        >
          <div
            className={
              style.top +
              " d-flex flex-wrap flex-md-nowrap justify-content-between align-items-center top"
            }
          >
            <h2 className="text-center text-sm-start">
              {" "}
              <span className="grdtext">Meep</span> For Everyone
            </h2>
            <p className="d-sm-none d-md-block text-center text-sm-start">
              Don’t let outdated methods hold you back.{" "}
              <span className="text-black">Embrace Meep’s AI </span> to thrive
              in today’s digital landscape and conquer search engine rankings.
            </p>
            <a
              href="https://form.typeform.com/to/GsMdiv0o"
              className="text-decoration-none"
              target="_blank"
            >
              <button>Get Started</button>
            </a>
            <p className="d-none d-sm-block d-md-none">
              Don’t let outdated methods hold you back.{" "}
              <span className="text-black">Embrace Meep’s AI </span> to thrive
              in today’s digital landscape and conquer search engine rankings.
            </p>
          </div>
          <div
            className={`${style.bottom} d-flex flex-column flex-md-row justify-content-between align-items-end align-items-lg-center flex-grow-1 bottom position-relative`}
          >
            <div className={`${style.left} left`}>
              <div
                className={
                  style.card + "  d-flex flex-column justify-content-between"
                }
              >
                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-end gap-sm-5 gap-3 position-relative">
                  <h3
                    className={` grdtext text-center text-sm-start start-0 heading1`}
                  >
                    Small Business Owners
                  </h3>
                  <h3 className={` grdtext start-0 heading2 ${style.second_h}`}>
                    Intelligent Automation
                  </h3>
                  <img
                    src="/assets/arrow.svg"
                    alt=""
                    style={{ transform: "rotate(-90deg)" }}
                  />
                </div>
                <p className=" text-center text-sm-start para1">
                  Build a robust online presence without hiring a full tech
                  team—Meep does the heavy lifting.
                </p>
                <p className={style.para2 + " para2"}>
                  Expand your online presence effortlessly—Meep handles the
                  heavy lifting, no tech team required.
                </p>
              </div>
              <div
                className={
                  style.card +
                  " mt-3 mt-xxl-5 d-flex flex-column justify-content-between"
                }
              >
                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-end gap-sm-5 gap-3 position-relative">
                  <h3
                    className={
                      " grdtext text-center text-sm-start start-0 heading1"
                    }
                  >
                    Digital Marketers
                  </h3>
                  <h3
                    className={` grdtext heading2  start-0 ${style.second_h}`}
                  >
                    Customizable Solutions
                  </h3>
                  <img
                    src="/assets/arrow.svg"
                    alt=""
                    style={{ transform: "rotate(-90deg)" }}
                  />
                </div>
                <p className=" text-center text-sm-start mb-0 para1">
                  {" "}
                  Expand your campaign capacity with automated support that
                  handles the daily grind, so you can focus on strategy.
                </p>
                <p className={style.para2 + " para2"}>
                  Tailor Meep’s powerful features to fit your brand’s goals,
                  free of complex setup or coding.
                </p>
              </div>
            </div>
            <div
              className={
                style.center +
                " d-flex justify-content-center align-items-center "
              }
            >
              {/* <img src="/assets/demo2.png" className='position-absolute top-50 start-50' alt="" /> */}
              <div className="position-absolute d-flex justify-content-center scene3">
                <canvas ref={canvasRef} />
                {/* <Spline scene='https://prod.spline.design/7Y1AmITmldpRzKMl/scene.splinecode'/> */}
              </div>
            </div>
            <div className={`${style.right} right`}>
              <div
                className={
                  style.card + "  d-flex flex-column justify-content-between"
                }
              >
                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-end gap-sm-5 gap-3 position-relative">
                  <h3
                    className={
                      " grdtext text-center text-sm-start start-0 heading1"
                    }
                  >
                    Content Creators
                  </h3>
                  <h3 className={`grdtext start-0 heading2 ${style.second_h}`}>
                    Real-Time Reporting
                  </h3>
                  <img
                    src="/assets/arrow.svg"
                    alt=""
                    style={{ transform: "rotate(-90deg)" }}
                  />
                </div>
                <p className=" text-center text-sm-start para1">
                  Tap into real-time APIs and data analysis to uncover trending
                  topics before anyone else.
                </p>
                <p className={style.para2 + " para2"}>
                  Stay ahead with instant performance updates, all without
                  specialized in-house expertise.
                </p>
              </div>
              <div
                className={
                  style.card +
                  " mt-3 mt-xxl-5  d-flex flex-column justify-content-between"
                }
              >
                <div className="d-flex flex-column flex-sm-row align-items-center justify-content-end gap-sm-5 gap-3 position-relative">
                  <h3
                    className={
                      " grdtext text-center text-sm-start start-0 heading1"
                    }
                  >
                    Enterprises
                  </h3>
                  <h3 className={`grdtext start-0 heading2 ${style.second_h}`}>
                    Cost Effective
                  </h3>
                  <img
                    src="/assets/arrow.svg"
                    alt=""
                    style={{ transform: "rotate(-90deg)" }}
                  />
                </div>
                <p className=" text-center text-sm-start para1">
                  Supercharge editorial and marketing operations, automating
                  tasks for faster, high-quality output.
                </p>
                <p className={style.para2 + " para2"}>
                  Achieve standout results and scale your visibility—without
                  breaking the bank on extra staff.
                </p>
              </div>
            </div>
            <div className={style.gaper + " d-sm-none"}></div>
          </div>
        </div>
      </div>

      <div
        className={`${style.section3} d-sm-none section flex-column secFour`}
      >
        <div
          className={
            style.top +
            " d-flex flex-wrap flex-md-nowrap justify-content-between align-items-center top"
          }
        >
          <h2 className="text-center text-sm-start">
            {" "}
            <span className="grdtext">Meep</span> At its Best
          </h2>
          <p className="text-center text-sm-start">
            Not just words—Meep crafts stories, strategies, and statements that
            make the world listen, love, and click.{" "}
          </p>
          {/* <button>Get Started</button>
                <p className='d-none d-sm-block d-md-none'>Don’t let outdated strategies hold you back. <span>Embrace the power of Meep</span> and watch your brand thrive in the digital space. Whether it’s conquering search engine rankings</p> */}
        </div>
        <div
          className={`${style.bottom} d-flex flex-column flex-md-row justify-content-between align-items-end align-items-lg-center flex-grow-1 bottom position-relative`}
        >
          <div className={`${style.left} left`}>
            <div
              className={
                style.card + "  d-flex flex-column justify-content-between"
              }
            >
              <div className="d-flex flex-column align-items-center justify-content-end gap-sm-5 gap-3 position-relative">
                <h3 className={` grdtext text-center text-sm-start start-0`}>
                  Intelligent Automation
                </h3>
                {/* <h3 className={` grdtext start-0 heading2 ${style.second_h}`}>Intelligent Automation</h3> */}
                <img
                  src="/assets/arrow.svg"
                  alt=""
                  style={{ transform: "rotate(-90deg)" }}
                />
              </div>
              <p className=" text-center text-sm-start">
                Expand your online presence effortlessly—Meep handles the heavy
                lifting, no tech team required.
              </p>
            </div>
            <div
              className={
                style.card + " mt-5 d-flex flex-column justify-content-between"
              }
            >
              <div className="d-flex flex-column align-items-center justify-content-end gap-sm-5 gap-3 position-relative">
                <h3 className={" grdtext text-center text-sm-start start-0"}>
                  Customizable Solutions
                </h3>
                {/* <h3 className={` grdtext heading2  start-0 ${style.second_h}`}>Costomizable Solutions</h3> */}
                <img
                  src="/assets/arrow.svg"
                  alt=""
                  style={{ transform: "rotate(-90deg)" }}
                />
              </div>
              <p className=" text-center text-sm-start">
                Tailor Meep’s powerful features to fit your brand’s goals, free
                of complex setup or coding.
              </p>
            </div>
          </div>
          <div className={`${style.right} right`}>
            <div
              className={
                style.card + "  d-flex flex-column justify-content-between"
              }
            >
              <div className="d-flex flex-column align-items-center justify-content-end gap-sm-5 gap-3 position-relative">
                <h3
                  className={
                    " grdtext text-center text-sm-start start-0 heading1"
                  }
                >
                  Real-Time Reporting
                </h3>
                {/* <h3 className={`grdtext start-0 heading2 ${style.second_h}`}>Real-Time Reporting</h3> */}
                <img
                  src="/assets/arrow.svg"
                  alt=""
                  style={{ transform: "rotate(-90deg)" }}
                />
              </div>
              <p className=" text-center text-sm-start">
                Stay ahead with instant performance updates, all without
                specialized in-house expertise.
              </p>
            </div>
            <div
              className={
                style.card + " mt-5  d-flex flex-column justify-content-between"
              }
            >
              <div className="d-flex flex-column align-items-center justify-content-end gap-sm-5 gap-3 position-relative">
                <h3
                  className={
                    " grdtext text-center text-sm-start start-0 heading1"
                  }
                >
                  Cost Effective
                </h3>
                {/* <h3 className={`grdtext start-0 heading2 ${style.second_h}`}></h3> */}
                <img
                  src="/assets/arrow.svg"
                  alt=""
                  style={{ transform: "rotate(-90deg)" }}
                />
              </div>
              <p className=" text-center text-sm-start">
                Achieve standout results and scale your visibility—without
                breaking the bank on extra staff.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
