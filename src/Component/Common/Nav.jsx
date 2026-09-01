"use client";
import React, { useState } from "react";
import style from "./common.module.css";
import Link from "next/link";


export const Nav = () => {
  const [isopen, setOpen] = useState(false);

  const scroller = (id) => {
    var target = document.querySelector(`#${id}`).getBoundingClientRect().top;
    const scr_container = document.querySelector("#smooth-wrapper");
    if (id === "how_it_work") {
      let per = window.visualViewport.height * 0.18;
      // console.log(per)
      target = target - per;
    }
    window.scrollTo(0, target);
  };
  return (
    <nav className={style.nav + " "}>
      <div className="d-flex justify-content-between align-items-center">
        <div className={style.logo + " d-flex align-items-center gap-1"}>
          <img
            src="/logo.jpg"
            width="30px"
            alt=""
            style={{ borderRadius: "50px" }}
          />
          <span>Meep</span>
        </div>
        <div
          className={
            style.center +
            " d-none d-sm-flex align-items-center gap-2 gap-mds-4"
          }
        >
          <button
            onClick={() => {
              scroller("features");
            }}
          >
            Features
          </button>
          <button
            onClick={() => {
              scroller("how_it_work");
            }}
          >
            How it Works
          </button>
          <button
            onClick={() => {
              scroller("why_meep");
            }}
          >
            Use Cases
          </button>
          <a href="https://memecoinist.com/" target="_blank">
            Memecoinist
          </a>
          <a
            href="https://memecoinist.com/wp-content/uploads/2025/04/Meep-AI-Pitch-deck.pdf"
            target="_blank"
            className="text-decoration-none mx-2 md:mx-3"
          >
            Pitch Deck
          </a>  
          <button
            onClick={() => {
              scroller("pricing");
            }}
          >
            Pricing
          </button>
        </div>
        <div className={style.right + " d-none d-sm-block"}>
          {/* <a href="https://memecoinist.com/wp-content/uploads/2025/04/Meep-AI-Pitch-deck.pdf"
                        target='_blank'
                        className='text-decoration-none mx-2 md:mx-3 text-black'
                    >
                        Pitch Deck
                    </a> */}
          <a
            href="https://form.typeform.com/to/GsMdiv0o"
            className="text-decoration"
            target="_blank"
          >
            <button className="border-0 bg-transparent">Get Started</button>
          </a>
        </div>
        <button
          className={`${style.menubtn} ${
            isopen && style.active
          } d-block d-sm-none`}
          onClick={() => {
            setOpen(!isopen);
          }}
        >
          <span></span>
          <span></span>
        </button>
        <div
          className={`${style.sm_menu} d-sm-none position-absolute top-100 start-0 w-100`}
          style={{ height: isopen ? "233px" : "0" }}
        >
          <ul className="list-unstyled">
            <li>
              <button
                onClick={() => {
                  scroller("features");
                  setOpen(false);
                }}
              >
                Features
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scroller("how_it_work");
                  setOpen(false);
                }}
              >
                How it Works
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scroller("why_meep");
                  setOpen(false);
                }}
              >
                Use Cases
              </button>
            </li>
            <li>
              <a
                href="https://memecoinist.com/"
                onClick={() => {
                  setOpen(false);
                }}
                target="_blank"
              >
                Memecoinist
              </a>
            </li>
            <li>
              <a
                href="https://memecoinist.com/wp-content/uploads/2025/04/Meep-AI-Pitch-deck.pdf"
                target="_blank"
                className="text-decoration-none"
              >
                Pitch Deck
              </a>
            </li>
            <li>
              <a
                href="https://form.typeform.com/to/GsMdiv0o"
                className="text-decoration-none opacity-100"
                target="_blank"
              >
                <button className="border-0 bg-transparent text-start opacity-100">
                  Get Started
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
