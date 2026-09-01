"use client";

import React, { useEffect } from "react";
import style from "@/app/page.module.css";
import gsap from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAssets } from "../context/AssetContext";

// gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger, useGSAP);

export const Section21 = ({ section, sectionOut }) => {
  const { registerAsset, markAssetLoad } = useAssets();

  useEffect(() => {
    // List of assets to register and track
    const assets = [
      "/assets/arrow.svg",
      "/assets/magic.svg",
      "/assets/dashboard.svg",
      "/assets/corner2.svg",
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
        ".secThree",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: ".secThree",
            scroller: ".maincontainer",
            start: "top 100%",
            end: "top 18%",
            scrub: true,
            // markers:true
          },
        }
      );

      gsap.from("#secthree_container", {
        scrollTrigger: {
          trigger: "#secthree_container",
          pin: true,
          pinSpacing: false,
          scroller: ".maincontainer",
          start: "top 18%",
          end: "+500%",
        },
      });

      // ------------------------Section Out --------------
      gsap.fromTo(
        ".secThree",
        { opacity: 1 },
        {
          opacity: 0,
          duration: 1.5,
          scrollTrigger: {
            trigger: ".secThree",
            scroller: ".maincontainer",
            start: "top 17%",
            end: "+=100%",
            scrub: true,
            // markers:true
          },
        }
      );

      gsap.to(".secThree .card2", {
        color: "#ffffff",
        background: "#185EFF",
        scrollTrigger: {
          trigger: ".secThree",
          scroller: ".maincontainer",
          start: "top 50%",
          end: "top 30%",
          scrub: 1,
          // markers: true
        },
      });

      gsap.to(".secThree .card3_sp1", {
        opacity: 0,
        scrollTrigger: {
          trigger: ".secThree",
          scroller: ".maincontainer",
          start: "top 30%",
          end: "top 18%",
          scrub: 1,
          // markers: true
        },
      });
      gsap.to(".secThree .card3_sp2", {
        opacity: 1,
        color: "#ffffff",
        background: "#185EFF",
        scrollTrigger: {
          trigger: ".secThree",
          scroller: ".maincontainer",
          start: "top 30%",
          end: "top 18%",
          scrub: 1,
          // markers: true
        },
      });
    });

    mm.add("(max-width: 575px)", () => {
      gsap.to(".secThree .card2", {
        color: "#ffffff",
        background: "#185EFF",
        scrollTrigger: {
          trigger: ".secThree",
          scroller: ".maincontainer",
          start: "top 10%",
          end: "+=10%",
          scrub: 1,
          // markers: true
        },
      });

      gsap.to(".secThree .card3_sp1", {
        opacity: 0,
        scrollTrigger: {
          trigger: ".secThree",
          scroller: ".maincontainer",
          start: "top 0%",
          end: "+=10%",
          scrub: 1,
          // markers: true
        },
      });
      gsap.to(".secThree .card3_sp2", {
        opacity: 1,
        color: "#ffffff",
        background: "#185EFF",
        scrollTrigger: {
          trigger: ".secThree",
          scroller: ".maincontainer",
          start: "top 0%",
          end: "+=10%",
          scrub: 1,
          // markers: true
        },
      });
    });
  });

  //   setTimeout(()=>{},1000)
  //   setTimeout(()=>{},2000)
  // }

  // useEffect(() => {

  // }, [])
  return (
    <div id="secthree_container">
      <div
        className={`${style.section2} ${style.section21} section mb-4 d-sm-flex align-items-md-center secThree`}
        id="how_it_work"
      >
        <div
          className={
            style.top +
            " d-sm-none d-flex justify-content-between align-items-center mb-5"
          }
        >
          <h2 className="grdtext text-center">3 Steps to Unlock the Magic</h2>
          {/* <img src="/assets/arrow.svg" className='faderightin' alt="" /> */}
        </div>
        <div className={style.bottom + " w-100"}>
          {/* <div className={`${style.left} `}>
            <div>
              <h3 className='grdtext d-flex align-items-center gap-2'><span>PR</span> Perfection</h3>
              <p>Rank higher on search engines with precision-engineered keywords and strategies.</p>
            </div>
            <div className='p-4 position-relative'>
              <div className={style.internal_card+" pb-4"}>
                <div className='d-flex align-items-center gap-3 mb-3'>
                  <img src="/assets/magic.svg" alt="" />
                  <p className='mb-0'>AI-Crafted Press Releases</p>
                </div>
                <p className='mb-0'>Not just words Meep crafts stories, strategies just,  just words Meep crafts stories</p>
              </div>
              
              <div className={style.internal_card+" pt-4"}>
                <div className='d-flex align-items-center gap-3 mb-3'>
                  <img src="/assets/dashboard.svg" alt="" />
                  <p className='mb-0'>AI-Crafted Press Releases</p>
                </div>
                <p className='mb-0'>Not just words Meep crafts stories, strategies just,  just words Meep crafts stories</p>
              </div>
              <img src="/assets/corner2.svg" className='position-absolute top-0 start-0' alt="" />
              <img src="/assets/corner2.svg" className='position-absolute top-0 end-0' style={{transform:"scaleX(-1)"}} alt="" />
              <img src="/assets/corner2.svg" className='position-absolute bottom-0 start-0' style={{transform:"scaleY(-1)"}} alt="" />
              <img src="/assets/corner2.svg" className='position-absolute bottom-0 end-0' style={{transform:"scale(-1, -1)"}} alt="" />
            </div>
            <div className='mt-4'>
              <h3 className='grdtext'>User-Friendly</h3>
              <p>Not just words—Meep crafts stories, strategies, and statements that make the world listen, love, and click.</p>
            </div>
          </div> */}
          <div className={style.left2}>
            <div className={style.card + " d-flex gap-3"}>
              <div className="d-flex flex-column align-items-center gap-3">
                <span className="d-inline-flex justify-content-center align-items-center">
                  1
                </span>
                <div></div>
              </div>
              <div>
                <h3 className="grdtext">Connect Your Website</h3>
                <p>
                  Meep connects seamlessly with your website, analytics tools,
                  and other platforms, ensuring hassle-free integration.
                  <br />
                  <i>Start your journey with zero technical barriers.</i>
                </p>
              </div>
            </div>
            <div className={style.card + " d-flex gap-3"}>
              <div className="d-flex flex-column align-items-center gap-3">
                <span className="d-inline-flex justify-content-center align-items-center card2">
                  2
                </span>
                <div></div>
              </div>
              <div>
                <h3 className="grdtext">Define Your Goals</h3>
                <p>
                  Meep helps you set clear objectives, aligning your SEO and PR
                  strategy with your business growth.
                  <br />
                  <i>Set your sights on success with clear objectives.</i>
                </p>
              </div>
            </div>
            <div className={style.card + " d-flex gap-3"}>
              <div className="d-flex flex-column position-relative align-items-center gap-3">
                <span className="d-inline-flex justify-content-center align-items-center card3_sp1">
                  3
                </span>
                <span
                  className="d-inline-flex position-absolute top-0 left-0 justify-content-center align-items-center card3_sp2"
                  style={{ opacity: 0 }}
                >
                  <svg
                    className="hideSpan bi bi-check-lg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                  </svg>
                </span>
              </div>
              <div>
                <h3 className="grdtext">Optimize & Grow</h3>
                <p className="mb-0">
                  Meep continuously refines your content and strategy, ensuring
                  maximum visibility and long-term success.
                  <br />
                  <i>
                    Watch your vision take shape as Meep fine-tunes your path to
                    growth.
                  </i>
                </p>
              </div>
            </div>
          </div>
          {/*<div className={`${style.center} d-flex justify-content-center align-items-center flex-grow-1 ${section===1&&"fadedown"}`}>
        </div>*/}
          {/* <div className={`${style.right} `}>
            <div>
              <h3 className='grdtext d-flex align-items-center gap-2'><span>SEO</span> Mastery</h3>
              <p>Rank higher on search engines with precision-engineered keywords and strategies.</p>
            </div>
            <div className='p-4 position-relative'>
              <div className={style.internal_card+" pb-4"}>
                <div className='d-flex gap-3 mb-3'>
                  <img src="/assets/magic.svg" alt="" />
                  <p className='mb-0'>AI-Crafted Press Releases</p>
                </div>
                <p className='mb-0'>Not just words Meep crafts stories, strategies just,  just words Meep crafts stories</p>
              </div>
              <div className={style.internal_card+" pt-4"}>
                <div className='d-flex gap-3 mb-3'>
                  <img src="/assets/dashboard.svg" alt="" />
                  <p className='mb-0'>AI-Crafted Press Releases</p>
                </div>
                <p className='mb-0'>Not just words Meep crafts stories, strategies just,  just words Meep crafts stories</p>
              </div>
              <img src="/assets/corner2.svg" className='position-absolute top-0 start-0' alt="" />
              <img src="/assets/corner2.svg" className='position-absolute top-0 end-0' style={{transform:"scaleX(-1)"}} alt="" />
              <img src="/assets/corner2.svg" className='position-absolute bottom-0 start-0' style={{transform:"scaleY(-1)"}} alt="" />
              <img src="/assets/corner2.svg" className='position-absolute bottom-0 end-0' style={{transform:"scale(-1, -1)"}} alt="" />
            </div>
            <div className='mt-4'>
              <h3 className='grdtext'>Real-Time Insights</h3>
              <p>Not just words—Meep crafts stories, strategies, and statements that make the world listen, love, and click.</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
