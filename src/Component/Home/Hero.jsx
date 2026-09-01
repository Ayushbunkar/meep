"use client";
import style from "@/app/page.module.css";
import { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import dynamic from "next/dynamic";
import { useAssets } from "../context/AssetContext";
// const LazySplineScene = dynamic(() => import("./SplineScene"), { ssr: false })

export const Hero = ({ handleLoad }) => {
  const [isblock, setBlock] = useState(true);

  const { registerAsset, markAssetLoad } = useAssets();

  useEffect(() => {
    registerAsset(
      "https://prod.spline.design/eXGXxmlmpOYMPklu/scene.splinecode"
    );
  }, []);

  const onload = () => {
    setLoad(false);
  };

  return (
    <div
      className={`${style.hero} position-relative section d-flex flex-column justify-content-between mb-4 overflow-hidden`}
    >
      <div className="d-flex flex-column justify-content-between align-items-center align-items-md-end gap-5  ">
        <div
          className={
            style.right +
            " mt-3 mt-xxl-5 position-relative me-xxl-5 pe-md-5 ps-3"
          }
          style={{ zIndex: "2" }}
        >
          <h1>Meep, the </h1>
          <a
            href="https://form.typeform.com/to/GsMdiv0o"
            className="text-decoration-none"
            target="_blank"
          >
            <button className="d-flex align-items-center justify-content-between gap-5 ">
              <span className="grdtext">Magic</span>
              <img
                src="/assets/arrow.svg"
                style={{ transform: "rotate(-90deg)" }}
                alt=""
              />
            </button>
          </a>
        </div>
        <div
          className={
            style.bottom +
            " d-flex flex-wrap flex-xl-nowrap justify-content-between align-items-center gap-xl-5 position-relative"
          }
        >
          <h3 className="text-center text-sm-start">
            The AI Writer <br className="d-none d-xl-block" /> do{" "}
            <span className="grdtext">Magic for you.</span>
          </h3>
          <div>
            <h4 className="text-center text-sm-start">Now or Never</h4>
            <p className="text-center text-sm-start mb-2 mb-md-0">
              We live in a digital era where attention is currency. With Meep,
              you’re not just tossing words onto a page—you’re delivering
              experiences that captivate, inform, and convert.
            </p>
          </div>
          <div>
            <h4 className="d-flex justify-content-center justify-content-sm-start align-items-center gap-2">
              <span>Your PR & SEO</span> Genius
            </h4>
            <p className="mb-0 text-center text-sm-start">
              Why settle for one-dimensional content? Meep’s algorithm mines
              trending topics, identifies prime SEO opportunities, and crafts
              compelling narratives that rank higher and engage longer.
            </p>
          </div>

          <div
            className={
              style.social +
              " d-flex justify-content-between aling-items-center gap-4 gap-sm-5 position-absolute"
            }
          >
            <p className="mb-0">Join our Community</p>
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
      </div>

      <div
        className={
          style.scene +
          " position-absolute top-50 start-0 h-100 translate-middle-y w-100 scene1"
        }
      >
        {/*----- LazySplineScene component load spline sence ----*/}
        {/* <LazySplineScene />    */}
        <Spline
          // scene="https://prod.spline.design/eXGXxmlmpOYMPklu/scene.splinecode"
          scene="https://prod.spline.design/eXGXxmlmpOYMPklu/scene.splinecode" //temp link
          onLoad={() => markAssetLoad()}
        />
      </div>
      {/* <img src="/assets/hero.png" className='position-absolute bottom-0 start-0' width={"100%"} alt="" /> */}
      {/* <div className={style.bottom + " d-flex flex-wrap flex-xl-nowrap justify-content-between align-items-center gap-xl-5"}>
        <h3>The AI Writer <br className='d-none d-xl-block' /> do <span className='grdtext'>Magic for you.</span></h3>
        <div>
          <h4>New Era, now or never</h4>
          <p className='mb-2 mb-md-0'>Not just words—Meep crafts stories, strategies, and statements that make the world listen, love, and click.</p>
        </div>
        <div>
          <h4 className='d-flex align-items-center gap-2'><span>PR & SEO</span> Expert</h4>
          <p className='mb-0'>Not just words—Meep crafts stories, strategies, and statements that make the world listen, love, and click.</p>
        </div>
      </div> */}
    </div>
  );
};

/*
<div className={style.slider + " position-relative d-none d-xl-block"}>
          <div className={style.card + " position-relative"}>
            <div className='d-flex gap-2'>
              <h2>80%</h2>
              <p>more  user engagement</p>
            </div>
            <p className='mb-0'>Not just words Meep crafts stories, strategies just,  just words Meep crafts stories</p>
            <img src="/assets/corner.svg" className='position-absolute start-0 top-0' alt="" />
            <img src="/assets/corner.svg" className='position-absolute end-0 top-0' alt="" style={{ transform: "scaleX(-1)" }} />
            <img src="/assets/corner.svg" className='position-absolute start-0 bottom-0' alt="" style={{ transform: "scaleY(-1)" }} />
            <img src="/assets/corner.svg" className='position-absolute end-0  bottom-0' alt="" style={{ transform: "scale(-1, -1)" }} />
          </div>
          <div className={style.card + " position-relative"}>
            <div className='d-flex gap-2'>
              <h2>80%</h2>
              <p>more  user engagement</p>
            </div>
            <p className='mb-0'>Not just words Meep crafts stories, strategies just,  just words Meep crafts stories</p>
            <img src="/assets/corner.svg" className='position-absolute start-0 top-0' alt="" />
            <img src="/assets/corner.svg" className='position-absolute end-0 top-0' alt="" style={{ transform: "scaleX(-1)" }} />
            <img src="/assets/corner.svg" className='position-absolute start-0 bottom-0' alt="" style={{ transform: "scaleY(-1)" }} />
            <img src="/assets/corner.svg" className='position-absolute end-0  bottom-0' alt="" style={{ transform: "scale(-1, -1)" }} />
          </div> 
           <div className={style.card + " position-relative"}>
            <div className='d-flex gap-2'>
              <h2>80%</h2>
              <p>more  user engagement</p>
            </div>
            <p className='mb-0'>Not just words Meep crafts stories, strategies just,  just words Meep crafts stories</p>
            <img src="/assets/corner.svg" className='position-absolute start-0 top-0' alt="" />
            <img src="/assets/corner.svg" className='position-absolute end-0 top-0' alt="" style={{ transform: "scaleX(-1)" }} />
            <img src="/assets/corner.svg" className='position-absolute start-0 bottom-0' alt="" style={{ transform: "scaleY(-1)" }} />
            <img src="/assets/corner.svg" className='position-absolute end-0  bottom-0' alt="" style={{ transform: "scale(-1, -1)" }} />
          </div> 
        </div>
*/
