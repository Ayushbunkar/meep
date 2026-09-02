"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/* =========================================================
   PRICING DATA
========================================================= */

const plans = [
  {
    name: "STARTER",
    price: "$99",
    period: "/month",
    description:
      "Perfect for individuals and small projects getting started with AI-powered content.",
    features: [
      "AI Content Generation",
      "Basic SEO Tools",
      "1 Website Connection",
      "Community Access",
      "Email Support",
    ],
    button: "Get Started",
    popular: false,
  },
  {
    name: "PRO",
    price: "$400",
    period: "/month",
    description:
      "Ideal for growing teams that want to scale content and visibility.",
    features: [
      "Everything in Starter",
      "Advanced SEO & PR Tools",
      "5 Website Connections",
      "Performance Analytics",
      "Priority Support",
    ],
    button: "Get Started",
    popular: false,
  },
  {
    name: "GROWTH",
    price: "$1000",
    period: "/month",
    description:
      "Best for businesses focused on aggressive growth and brand authority.",
    features: [
      "Everything in Pro",
      "AI Press Releases",
      "Unlimited Website Connections",
      "Real-time Monitoring",
      "Dedicated Success Manager",
    ],
    button: "Get Started",
    popular: true,
  },
  {
    name: "ENTERPRISE",
    price: "Custom",
    period: "",
    description:
      "Built for large organizations with custom needs and dedicated support.",
    features: [
      "Everything in Growth",
      "Custom Integrations",
      "Advanced Reporting",
      "SLA & Compliance",
      "Dedicated Team",
    ],
    button: "Contact Sales",
    popular: false,
  },
];

const trustItems = [
  {
    title: "Cancel Anytime",
    description: "No long-term contracts.",
    icon: "shield",
  },
  {
    title: "Secure & Reliable",
    description: "Your data is safe with us.",
    icon: "lock",
  },
  {
    title: "Real Results",
    description: "Track, optimize, and grow.",
    icon: "clock",
  },
  {
    title: "DAO Community",
    description: "Collaborate, earn rewards, grow together.",
    icon: "users",
  },
];

/* =========================================================
   ICONS
========================================================= */

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      className="h-[15px] w-[15px] shrink-0"
      aria-hidden="true"
    >
      <circle
        cx="10"
        cy="10"
        r="7.3"
        stroke="currentColor"
        strokeWidth="1.65"
      />
      <path
        d="M6.8 10.1 8.8 12.15 13.2 7.85"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-[17px] w-[17px]"
      aria-hidden="true"
    >
      <path
        d="M12 3.5 13.6 8.4 18.5 10 13.6 11.6 12 16.5 10.4 11.6 5.5 10 10.4 8.4 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M19 15.5 19.7 17.3 21.5 18 19.7 18.7 19 20.5 18.3 18.7 16.5 18 18.3 17.3 19 15.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      <path
        d="M12 3.5 19 6v5.8c0 4.4-2.7 7.3-7 9.2-4.3-1.9-7-4.8-7-9.2V6l7-2.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="m8.8 11.8 2.1 2.1 4.4-4.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      <rect
        x="5"
        y="10"
        width="14"
        height="10.5"
        rx="2.2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8.2 10V7.6a3.8 3.8 0 0 1 7.6 0V10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="12" cy="15.2" r="1.1" fill="currentColor" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="8.6"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 7.5v4.9l3.2 2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-[18px] w-[18px]"
      aria-hidden="true"
    >
      <circle
        cx="9"
        cy="8.2"
        r="3"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M3.8 19.4c.7-3.1 2.3-4.7 5.2-4.7s4.5 1.6 5.2 4.7"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M15.1 6.2c.6-.5 1.3-.8 2.2-.8 2 0 3.4 1.4 3.4 3.3 0 1.3-.7 2.4-1.8 3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M17.1 15.1c1.8.4 3 1.7 3.5 3.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TrustIcon({ type }) {
  if (type === "shield") return <ShieldIcon />;
  if (type === "lock") return <LockIcon />;
  if (type === "clock") return <ClockIcon />;
  return <UsersIcon />;
}

/* =========================================================
   PRICING CARD
========================================================= */

function PricingCard({ plan }) {
  return (
    <article
      className={[
        "pricing-card-item",
        /*
          FIXED CARD SIZE
          All cards are identical.
        */
        "relative h-[326px] min-w-0 overflow-visible",
        "rounded-[21px]",

        /*
          BLUE OUTLINE FOR EVERY CARD
        */
        "border-[1.25px]",
        "bg-white/[0.88]",
        "backdrop-blur-[18px]",

        /*
          Hover
        */
        "transition-all duration-200 ease-out",
        "hover:-translate-y-[2px]",

        plan.popular
          ? [
              "border-[#476cff]",
              "bg-white/[0.93]",
              "shadow-[0_18px_42px_rgba(48,83,221,0.18)]",
              "hover:shadow-[0_23px_49px_rgba(48,83,221,0.23)]",
            ].join(" ")
          : [
              "border-[#8ca8ff]",
              "shadow-[0_12px_30px_rgba(51,83,168,0.09)]",
              "hover:border-[#5d7cff]",
              "hover:shadow-[0_18px_37px_rgba(51,83,168,0.13)]",
            ].join(" "),
      ].join(" ")}
    >
      {/* ===================================================
          MOST POPULAR
      ==================================================== */}

      {plan.popular && (
        <div
          style={{ borderRadius: "9999px", paddingLeft: "36px", paddingRight: "36px" }}
          className="
            pricing-card-inner-text
            absolute
            left-1/2
            top-0
            z-[100]

            -translate-x-1/2
            -translate-y-1/2

            flex
            h-[34px]
            items-center
            justify-center

            whitespace-nowrap

            rounded-full

            border
            border-[#7a9aff]

            bg-gradient-to-b
            from-[#4f73ff]
            to-[#2d55f0]

            text-[10px]
            font-extrabold
            uppercase
            tracking-[1.2px]
            text-white

            shadow-[0_8px_22px_rgba(45,78,232,0.45)]
          "
        >
          MOST POPULAR
        </div>
      )}

      {/* ===================================================
          CARD BODY

          Extra top padding makes sure GROWTH never hits
          the popularity badge.
      ==================================================== */}

      <div
        style={{ paddingLeft: "28px", paddingRight: "20px", paddingTop: "20px", paddingBottom: "18px" }}
        className="pricing-card-inner-text flex h-full min-h-0 flex-col"
      >
        {/* PLAN NAME */}

        <div
          className="
            flex
            h-[18px]
            shrink-0
            items-center
            justify-center

            text-center

            text-[13px]
            font-bold
            leading-none

            text-[#3159ed]
          "
        >
          {plan.name}
        </div>

        {/* PRICE */}

        <div
          className="
            mt-[9px]
            flex
            h-[50px]
            shrink-0
            items-end
            gap-[7px]
            whitespace-nowrap
          "
        >
          <span
            className={[
              "font-bold leading-none text-[#2d59ef]",
              plan.price === "Custom"
                ? "text-[40px] tracking-[-2px]"
                : "text-[45px] tracking-[-2.5px]",
            ].join(" ")}
          >
            {plan.price}
          </span>

          {plan.period && (
            <span
              className="
                mb-[4px]
                text-[12px]
                font-normal
                leading-none
                text-[#737d95]
              "
            >
              {plan.period}
            </span>
          )}
        </div>

        {/* DESCRIPTION */}

        <p
          className="
            mt-[9px]
            h-[48px]
            shrink-0

            max-w-[255px]

            text-[11.5px]
            font-normal
            leading-[1.38]

            text-[#62708c]
          "
        >
          {plan.description}
        </p>

        {/* DIVIDER */}

        <div
          className="
            my-[12px]
            h-px
            w-full
            shrink-0
            bg-[#e2e8f3]
          "
        />

        {/* FEATURES */}

        <ul
          className="
            m-0
            flex
            min-h-0
            flex-1
            list-none
            flex-col
            gap-[7px]
            overflow-hidden
            p-0
          "
        >
          {plan.features.map((feature) => (
            <li
              key={feature}
              className="
                flex
                min-h-[15px]
                shrink-0
                items-center
                gap-[7px]

                text-[11px]
                font-normal
                leading-[1.15]

                text-[#556580]
              "
            >
              <span className="shrink-0 text-[#4770ff]">
                <CheckIcon />
              </span>

              <span className="min-w-0 truncate">
                {feature}
              </span>
            </li>
          ))}
        </ul>

        {/* BUTTON */}

        <div className="mt-auto flex w-full justify-center">
          <button
            type="button"
            style={{ borderRadius: "9999px" }}
            className={[
              "flex h-[44px] w-full shrink-0 items-center justify-center",
              "rounded-full",
              "text-[12px] font-bold leading-none tracking-wide",
              "transition-all duration-200",
              "hover:-translate-y-px",
              "active:translate-y-0",
              "focus:outline-none",
              "focus:ring-2 focus:ring-[#4e6dff]/30",
              plan.name === "ENTERPRISE"
                ? "border-[1.5px] border-[#6c84ff] bg-white/55 text-[#365cff] hover:bg-[#1a3acc] hover:text-white hover:border-[#1a3acc]"
                : "border-0 bg-gradient-to-b from-[#3763ff] to-[#244df0] text-white shadow-[0_7px_15px_rgba(47,83,240,0.20)] hover:from-[#1a3acc] hover:to-[#1230bb] hover:shadow-[0_10px_24px_rgba(20,50,180,0.40)]",
            ].join(" ")}
          >
            {plan.button}
          </button>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   HERO ARTWORK + MOUSE PARALLAX
========================================================= */

function HeroArtwork() {
  const artworkRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const artwork = artworkRef.current;
    const glow = glowRef.current;

    if (!artwork || !glow) {
      return;
    }

    const section = artwork.closest("[data-pricing-page]");

    if (!section) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (reducedMotion.matches) {
      return;
    }

    let frame = null;

    let targetX = 0;
    let targetY = 0;

    let currentX = 0;
    let currentY = 0;

    const handlePointerMove = (event) => {
      const rect = section.getBoundingClientRect();

      const x =
        ((event.clientX - rect.left) / rect.width) * 2 - 1;

      const y =
        ((event.clientY - rect.top) / rect.height) * 2 - 1;

      targetX = Math.max(-1, Math.min(1, x));
      targetY = Math.max(-1, Math.min(1, y));
    };

    const handlePointerLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const animate = () => {
      currentX += (targetX - currentX) * 0.075;
      currentY += (targetY - currentY) * 0.075;

      const moveX = currentX * 9;
      const moveY = currentY * 6;

      const rotateX = currentY * -0.55;
      const rotateY = currentX * 0.95;

      artwork.style.transform = `
        translate3d(${moveX}px, ${moveY}px, 0)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
      `;

      glow.style.transform = `
        translate3d(${currentX * 3}px, ${currentY * 2}px, 0)
      `;

      frame = requestAnimationFrame(animate);
    };

    section.addEventListener("pointermove", handlePointerMove);
    section.addEventListener("pointerleave", handlePointerLeave);

    frame = requestAnimationFrame(animate);

    return () => {
      section.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      section.removeEventListener(
        "pointerleave",
        handlePointerLeave
      );

      if (frame) {
        cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <div
      className="
        pointer-events-auto
        absolute
        right-0
        top-0
        z-[1]

        h-[445px]
        w-[72%]

        [perspective:1200px]

        max-xl:w-[73%]
        max-lg:w-[74%]

        max-md:relative
        max-md:right-auto
        max-md:top-auto
        max-md:h-[280px]
        max-md:w-full
      "
    >
      {/* ARTWORK FADE */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          z-[30]

          h-full
          w-[330px]

          bg-gradient-to-r
          from-[#edf3ff]
          via-[#edf3ff]/80
          to-transparent

          max-md:w-[145px]
        "
      />

      {/* ARTWORK GLOW */}

      <div
        ref={glowRef}
        className="
          pointer-events-none
          absolute
          right-[4%]
          top-[4%]

          h-[73%]
          w-[68%]

          rounded-full

          bg-[#536eff]/20

          blur-[70px]
        "
      />

      {/* IMAGE */}

      <div
        ref={artworkRef}
        className="
          absolute

          right-[24px]
          top-[-8px]

          h-[448px]
          w-[965px]

          [transform-style:preserve-3d]
          will-change-transform

          max-[1600px]:right-[-5px]
          max-[1600px]:w-[920px]

          max-xl:right-[-70px]
          max-xl:w-[860px]

          max-lg:right-[-120px]
          max-lg:w-[800px]

          max-md:right-[-95px]
          max-md:top-0
          max-md:h-[295px]
          max-md:w-[535px]
        "
      >
        <Image
          src="/pricing-hero.png"
          alt="Meep AI 3D pricing illustration"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 72vw"
          className="select-none object-cover object-right-top"
          draggable="false"
        />
      </div>
    </div>
  );
}

/* =========================================================
   MAIN PAGE
========================================================= */

export default function PricingPage() {
  useGSAP(() => {
    const scrollerEl = document.querySelector(".maincontainer") ? ".maincontainer" : window;

    // 1. Pricing cards animate in FIRST (smooth side entrance)
    gsap.fromTo(
      ".pricing-card-item",
      {
        opacity: 0,
        x: 90,
        y: 15,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-pricing-page]",
          scroller: scrollerEl,
          start: "top 75%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Card inner text progressive settling
    gsap.fromTo(
      ".pricing-card-inner-text",
      { opacity: 0, y: 12 },
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        stagger: 0.04,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "[data-pricing-page]",
          scroller: scrollerEl,
          start: "top 75%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // 2. Short delay -> Top Hero text section slides in from LEFT
    gsap.fromTo(
      ".pricing-hero-content",
      {
        opacity: 0,
        x: -70,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.85,
        delay: 0.45,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "[data-pricing-page]",
          scroller: scrollerEl,
          start: "top 75%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // 3. Trust strip smooth entrance
    gsap.fromTo(
      ".pricing-trust-strip",
      { opacity: 0, y: 25 },
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        delay: 0.65,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "[data-pricing-page]",
          scroller: scrollerEl,
          start: "top 75%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <main
      data-pricing-page
      className="
        h-[703px]
        w-full
        overflow-hidden
        bg-[#edf3ff]
      "
    >
      <section
        className="
          relative
          isolate
          h-full
          w-full
          overflow-hidden

          rounded-b-[24px]

          border
          border-white/70

          bg-[radial-gradient(circle_at_86%_2%,rgba(61,90,255,0.50)_0%,rgba(89,116,255,0.28)_22%,transparent_51%),radial-gradient(circle_at_7%_35%,rgba(255,255,255,0.98)_0%,transparent_43%),linear-gradient(132deg,#f5f8ff_0%,#eaf0ff_39%,#dae5ff_68%,#cad8ff_100%)]
        "
      >
        {/* BACKGROUND LIGHTS */}

        <div
          className="
            pointer-events-none
            absolute
            -left-[230px]
            top-[70px]
            -z-10
            h-[500px]
            w-[500px]
            rounded-full
            bg-white
            blur-[105px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            right-[90px]
            top-[-50px]
            -z-10
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#536eff]/20
            blur-[110px]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-[190px]
            top-[290px]
            -z-10
            h-[430px]
            w-[430px]
            rounded-full
            bg-[#9eb8ff]/20
            blur-[105px]
          "
        />

        {/* SUBTLE GRID */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            -z-10
            opacity-[0.04]

            [background-image:linear-gradient(rgba(255,255,255,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.9)_1px,transparent_1px)]

            [background-size:80px_80px]
          "
        />

        {/* ARTWORK */}

        <HeroArtwork />

        {/* =================================================
            CONTENT WIDTH

            Wide enough for the four cards while keeping
            equal outer spacing.
        ================================================== */}

        <div
          className="
            relative
            z-[5]
            mx-auto

            h-full
            min-h-[703px]

            w-[calc(100%-140px)]

            max-[1100px]:w-[calc(100%-70px)]
            max-md:w-[calc(100%-40px)]
          "
        >
          {/* =================================================
              HERO CONTENT
          ================================================== */}

          <div
            className="
              pricing-hero-content
              absolute
              left-0
              top-0
              z-[10]

              w-[750px]

              pt-[18px]

              max-xl:w-[680px]
              max-lg:w-[600px]

              max-md:relative
              max-md:w-full
              max-md:pt-[16px]
            "
          >
            {/* PRICING */}

            <div
            
              className=" 
                inline-flex
                h-[24px]
                items-center
                justify-center

                rounded-full

                border
                border-white/95

                bg-white/40

                px-[18px]

                text-[11px]
                font-bold
                uppercase
                tracking-[1.15px]

                text-[#3455eb]

                shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_5px_18px_rgba(70,91,190,0.06)]

                backdrop-blur-xl
              "
            >
              PRICING
            </div>

            {/* HEADING */}

            <h1
              style={{ fontSize: "70px", lineHeight: "0.94", letterSpacing: "-3px" }}
              className="
                mb-[15px]
                mt-[17px]
                font-bold
                text-[#10172f]
              "
            >
              Plans that{" "}
              <span className="font-bold text-[#2d5fff]">
                scale.
              </span>

              <br />

              <span className="font-bold text-[#2d67ff]">
                Results
              </span>{" "}
              that speak.
            </h1>

            {/* DESCRIPTION */}

            <p
              className="
                m-0
                w-[720px]
                max-w-full

                text-[16px]
                font-normal
                leading-[1.45]

                text-[#5d6882]

                max-md:text-[14px]
              "
            >
              From individual creators to large enterprises, Meep AI has the
              perfect plan to grow your brand&apos;s visibility and authority.
            </p>

            {/* INCLUDED */}

            <div
              className="
                mt-[17px]

                inline-flex
                min-h-[40px]
                max-w-full

                items-center
                gap-[10px]

                rounded-[11px]

                border
                border-white/95

                bg-white/42

                px-[14px]
                py-1
                pl-1

                text-[12px]
                leading-[1.3]
                text-[#5e6a84]

                shadow-[inset_0_1px_0_rgba(255,255,255,0.88),0_7px_22px_rgba(67,89,168,0.05)]

                backdrop-blur-xl

                max-md:w-full
                max-md:text-[11px]
              "
            >
              <span
                className="
                  flex
                  h-8
                  w-8
                  shrink-0

                  items-center
                  justify-center

                  rounded-[8px]

                  bg-white/70

                  text-[#3157ee]
                "
              >
                <SparkleIcon />
              </span>

              <span>
                All plans include{" "}
                <strong className="font-semibold text-[#3157ee]">
                  AI Writing, SEO Tools &amp; DAO Community
                </strong>
              </span>
            </div>
          </div>

          {/* =================================================
              PRICING CARDS
          ================================================== */}

          <section
            className="
              absolute
              left-0
              top-[258px]

              z-[20]

              w-[calc(100%-45px)]

              max-xl:relative
              max-xl:left-auto
              max-xl:top-auto
              max-xl:w-full
              max-xl:mt-[58px]

              max-md:mt-[28px]
            "
          >
            <div
              ref={cardsGridRef}
              className="
                grid
                grid-cols-4
                gap-[30px]

                max-xl:grid-cols-2
                max-md:grid-cols-1
                will-change-transform
              "
            >
              {plans.map((plan) => (
                <PricingCard
                  key={plan.name}
                  plan={plan}
                />
              ))}
            </div>
          </section>

          {/* =================================================
              TRUST STRIP
          ================================================== */}

          <section
            className="
              pricing-trust-strip
              absolute
              left-0
              top-[597px]

              z-[25]

              grid

              h-[58px]

              w-[calc(100%-45px)]

              grid-cols-4
              items-center

              gap-[18px]

              rounded-[18px]

              border
              border-[#b9c9ea]

              bg-white/40

              px-[22px]
              py-[7px]

              shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_7px_20px_rgba(51,79,155,0.045)]

              backdrop-blur-xl

              max-xl:relative
              max-xl:left-auto
              max-xl:top-auto
              max-xl:h-auto
              max-xl:w-full
              max-xl:mt-[15px]

              max-xl:grid-cols-2
              max-md:grid-cols-1
            "
          >
            {trustItems.map((item) => (
              <div
                key={item.title}
                className="
                  flex
                  min-w-0
                  items-center
                  gap-[10px]
                "
              >
                <div
                  className="
                    flex
                    h-[31px]
                    w-[31px]
                    shrink-0

                    items-center
                    justify-center

                    rounded-[8px]

                    bg-gradient-to-b
                    from-[#4266f7]
                    to-[#274de1]

                    text-white

                    shadow-[0_5px_11px_rgba(50,81,225,0.17)]
                  "
                >
                  <TrustIcon type={item.icon} />
                </div>

                <div className="min-w-0">
                  <div
                    className="
                      text-[11px]
                      font-semibold
                      leading-[1.15]
                      text-[#47577c]
                    "
                  >
                    {item.title}
                  </div>

                  <div
                    className="
                      mt-[2px]
                      overflow-hidden
                      text-ellipsis
                      whitespace-nowrap
                      text-[9.5px]
                      leading-[1.15]
                      text-[#8791a7]

                      max-md:whitespace-normal
                    "
                  >
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </section>
    </main>
  );
}