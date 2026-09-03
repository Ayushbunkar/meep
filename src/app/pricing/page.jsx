"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  CircleCheck,
  Sparkles,
  ShieldCheck,
  LockKeyhole,
  Clock3,
  UsersRound,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const plans = [
  {
    name: "STARTER",
    price: "$99",
    period: "/month",
    description: "Perfect for individuals and small projects getting started with AI-powered content.",
    features: ["AI Content Generation", "Basic SEO Tools", "1 Website Connection", "Community Access", "Email Support"],
    button: "Get Started",
    popular: false,
  },
  {
    name: "PRO",
    price: "$400",
    period: "/month",
    description: "Ideal for growing teams that want to scale content and visibility.",
    features: ["Everything in Starter", "Advanced SEO & PR Tools", "5 Website Connections", "Performance Analytics", "Priority Support"],
    button: "Get Started",
    popular: false,
  },
  {
    name: "GROWTH",
    price: "$1000",
    period: "/month",
    description: "Best for businesses focused on aggressive growth and brand authority.",
    features: ["Everything in Pro", "AI Press Releases", "Unlimited Website Connections", "Real-time Monitoring", "Dedicated Success Manager"],
    button: "Get Started",
    popular: true,
  },
  {
    name: "ENTERPRISE",
    price: "Custom",
    period: "",
    description: "Built for large organizations with custom needs and dedicated support.",
    features: ["Everything in Growth", "Custom Integrations", "Advanced Reporting", "SLA & Compliance", "Dedicated Team"],
    button: "Contact Sales",
    popular: false,
  },
];

const trustItems = [
  { title: "Cancel Anytime", description: "No long-term contracts.", icon: "shield" },
  { title: "Secure & Reliable", description: "Your data is safe with us.", icon: "lock" },
  { title: "Real Results", description: "Track, optimize, and grow.", icon: "clock" },
  { title: "DAO Community", description: "Collaborate, earn rewards, grow together.", icon: "users" },
];

function TrustIcon({ type }) {
  const props = { size: 14, strokeWidth: 1.8 };

  if (type === "shield") return <ShieldCheck {...props} />;
  if (type === "lock") return <LockKeyhole {...props} />;
  if (type === "clock") return <Clock3 {...props} />;
  return <UsersRound {...props} />;
}

function PricingCard({ plan }) {
  return (
    <article
      className={[
        "pricing-card-item relative flex flex-col h-[285px] max-md:h-auto max-md:min-h-[340px] min-w-0 overflow-visible rounded-[21px] border-[1.25px] bg-white/[0.88] backdrop-blur-[18px] transition-all duration-200 ease-out hover:-translate-y-[2px]",
        plan.popular
          ? "border-[#476cff] bg-white/[0.93] shadow-[0_18px_42px_rgba(48,83,221,0.18)] hover:shadow-[0_23px_49px_rgba(48,83,221,0.23)]"
          : "border-[#8ca8ff] shadow-[0_12px_30px_rgba(51,83,168,0.09)] hover:border-[#5d7cff] hover:shadow-[0_18px_37px_rgba(51,83,168,0.13)]",
        "px-5 py-4 min-[560px]:px-6 min-[560px]:py-4 min-[1280px]:px-6 min-[1280px]:pt-4 min-[1280px]:pb-4"
      ].join(" ")}
    >
      {plan.popular && (
        <div
          style={{
            borderRadius: "9999px",
            paddingLeft: "36px",
            paddingRight: "36px",
          }}
          className="pricing-card-inner-text absolute left-1/2 top-0 z-[100] flex h-[30px] -translate-x-1/2 -translate-y-1/2 items-center justify-center whitespace-nowrap rounded-full border border-[#7a9aff] bg-gradient-to-b from-[#4f73ff] to-[#2d55f0] text-[9px] font-extrabold uppercase tracking-[1.2px] text-white shadow-[0_8px_22px_rgba(45,78,232,0.45)]"
        >
          MOST POPULAR
        </div>
      )}

      <div className="pricing-card-inner-text flex flex-col flex-grow min-h-0">
        <div className="flex h-[14px] shrink-0 items-center justify-center text-center text-[12px] font-bold leading-none text-[#3159ed]">
          {plan.name}
        </div>

        <div className="mt-1 flex h-[38px] shrink-0 items-end justify-start gap-[5px] whitespace-nowrap">
          <span
            className={[
              "font-bold leading-none text-[#2d59ef]",
              plan.price === "Custom"
                ? "text-[32px] tracking-[-1.5px]"
                : "text-[34px] tracking-[-2px]",
            ].join(" ")}
          >
            {plan.price}
          </span>

          {plan.period && (
            <span className="mb-[2px] text-[10px] font-normal leading-none text-[#737d95]">
              {plan.period}
            </span>
          )}
        </div>

        <p className="mt-1 h-[36px] shrink-0 text-left text-[10.5px] font-normal leading-[1.3] text-[#62708c]">
          {plan.description}
        </p>

        <div className="my-1.5 h-px w-full shrink-0 bg-[#e2e8f3]" />

        <ul className="m-0 flex flex-col gap-[4px] p-0 flex-grow min-h-0 overflow-hidden">
          {plan.features.map((feature) => (
            <li
              key={feature}
              className="flex min-h-[14px] shrink-0 items-center gap-[6px] text-[10px] font-normal leading-[1.1] text-[#556580]"
            >
              <span className="flex shrink-0 items-center justify-center text-[#4770ff]">
                <CircleCheck size={14} strokeWidth={1.8} />
              </span>

              <span className="min-w-0 truncate">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-3 flex w-full justify-center">
          <button
            type="button"
            style={{ borderRadius: "9999px" }}
            className={[
              "flex h-[34px] w-full shrink-0 items-center justify-center rounded-full text-[11px] font-bold leading-none tracking-wide transition-all duration-200 hover:-translate-y-px active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-[#4e6dff]/30",
              plan.name === "ENTERPRISE"
                ? "border-[1.5px] border-[#6c84ff] bg-white/55 text-[#365cff] hover:border-[#1b44eb] hover:bg-gradient-to-b hover:from-[#1b44eb] hover:to-[#1033d6] hover:text-white hover:shadow-[0_8px_18px_rgba(15,35,150,0.25)]"
                : "border-0 bg-gradient-to-b from-[#3763ff] to-[#244df0] text-white shadow-[0_7px_15px_rgba(47,83,240,0.20)] hover:from-[#1b44eb] hover:to-[#1033d6] hover:shadow-[0_10px_24px_rgba(15,35,150,0.35)]",
            ].join(" ")}
          >
            {plan.button}
          </button>
        </div>
      </div>
    </article>
  );
}

function HeroArtwork() {
  const artworkRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    const artwork = artworkRef.current;
    const glow = glowRef.current;

    if (!artwork || !glow) return;

    const section = artwork.closest("[data-pricing-page]");
    if (!section) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = null;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handlePointerMove = (event) => {
      const rect = section.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((event.clientY - rect.top) / rect.height) * 2 - 1;

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

      artwork.style.transform = `translate3d(${currentX * 9}px, ${currentY * 6}px, 0) rotateX(${currentY * -0.55}deg) rotateY(${currentX * 0.95}deg)`;
      glow.style.transform = `translate3d(${currentX * 3}px, ${currentY * 2}px, 0)`;

      frame = requestAnimationFrame(animate);
    };

    section.addEventListener("pointermove", handlePointerMove);
    section.addEventListener("pointerleave", handlePointerLeave);
    frame = requestAnimationFrame(animate);

    return () => {
      section.removeEventListener("pointermove", handlePointerMove);
      section.removeEventListener("pointerleave", handlePointerLeave);

      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute right-0 top-0 z-[0] hidden h-[240px] min-[1280px]:h-[260px] min-[1400px]:h-[280px] w-[50%] md:block min-[1400px]:w-[48%]">
      <div className="pointer-events-none absolute left-0 top-0 z-[1] h-full w-[45%] max-w-[330px] bg-gradient-to-r from-[#edf3ff] via-[#edf3ff]/80 to-transparent" />

      <div
        ref={glowRef}
        className="pointer-events-none absolute right-[4%] top-[4%] h-[73%] w-[68%] rounded-full bg-[#536eff]/20 blur-[70px]"
      />

      <div
        ref={artworkRef}
        className="absolute inset-x-0 top-0 h-full [perspective:1200px] [transform-style:preserve-3d] will-change-transform"
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

export default function PricingPage() {
  useGSAP(() => {
    const scrollerEl = document.querySelector(".maincontainer")
      ? ".maincontainer"
      : window;

    gsap.fromTo(
      ".pricing-card-item",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
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

    gsap.fromTo(
      ".pricing-hero-content",
      { opacity: 0, x: -30 },
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
    <main data-pricing-page className="w-full overflow-x-clip bg-[#edf3ff] pt-[16px] min-[560px]:pt-[24px] min-[1280px]:pt-[30px]">
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 559px) {
          .pricing-main-section {
            margin-left: 16px !important;
            margin-right: 16px !important;
            width: calc(100% - 32px) !important;
          }
          .pricing-inner-wrapper {
            padding-left: 20px !important;
            padding-right: 20px !important;
            padding-top: 18px !important;
            padding-bottom: 24px !important;
          }
          .pricing-trust-strip {
            padding-left: 0 !important;
            padding-right: 0 !important;
            column-gap: 12px !important;
            padding-top: 10px !important;
            padding-bottom: 10px !important;
          }
          .pricing-trust-item {
            padding-left: 20px !important;
            padding-right: 20px !important;
            column-gap: 10px !important;
          }
        }
        @media (min-width: 560px) and (max-width: 1279px) {
          .pricing-main-section {
            margin-left: 24px !important;
            margin-right: 24px !important;
            width: calc(100% - 48px) !important;
          }
          .pricing-inner-wrapper {
            padding-left: 32px !important;
            padding-right: 32px !important;
            padding-top: 24px !important;
            padding-bottom: 32px !important;
          }
          .pricing-trust-strip {
            padding-left: 0 !important;
            padding-right: 0 !important;
            column-gap: 26px !important;
            padding-top: 12px !important;
            padding-bottom: 12px !important;
          }
          .pricing-trust-item {
            padding-left: 24px !important;
            padding-right: 16px !important;
            column-gap: 12px !important;
          }
        }
        @media (min-width: 1280px) {
          .pricing-main-section {
            margin-left: 32px !important;
            margin-right: 32px !important;
            width: calc(100% - 64px) !important;
          }
          .pricing-inner-wrapper {
            padding-left: 36px !important;
            padding-right: 36px !important;
            padding-top: 30px !important;
            padding-bottom: 36px !important;
          }
          .pricing-trust-strip {
            padding-left: 0 !important;
            padding-right: 0 !important;
            column-gap: 36px !important;
            padding-top: 12px !important;
            padding-bottom: 12px !important;
          }
          .pricing-trust-item {
            padding-left: 24px !important;
            padding-right: 16px !important;
            column-gap: 14px !important;
          }
        }
      `}} />
      <section className="pricing-main-section relative isolate overflow-x-clip rounded-b-[24px] border border-white/70 bg-[radial-gradient(circle_at_86%_2%,rgba(61,90,255,0.50)_0%,rgba(89,116,255,0.28)_22%,transparent_51%),radial-gradient(circle_at_7%_35%,rgba(255,255,255,0.98)_0%,transparent_43%),linear-gradient(132deg,#f5f8ff_0%,#eaf0ff_39%,#dae5ff_68%,#cad8ff_100%)]">
        <div className="pointer-events-none absolute -left-[230px] top-[70px] -z-10 h-[500px] w-[500px] rounded-full bg-white blur-[105px]" />
        <div className="pointer-events-none absolute right-[90px] top-[-50px] -z-10 h-[500px] w-[500px] rounded-full bg-[#536eff]/20 blur-[110px]" />
        <div className="pointer-events-none absolute -right-[190px] top-[290px] -z-10 h-[430px] w-[430px] rounded-full bg-[#9eb8ff]/20 blur-[105px]" />
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] [background-image:linear-gradient(rgba(255,255,255,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.9)_1px,transparent_1px)] [background-size:80px_80px]" />

        <HeroArtwork />

        <div className="pricing-inner-wrapper relative z-[5] w-full pt-[36px] min-[560px]:pt-[46px] min-[1280px]:pt-[56px] pb-[60px] min-[560px]:pb-[74px] min-[1280px]:pb-[88px]">
    <div className="w-full md:pr-[45%]">
  <div className="pricing-hero-content relative z-[10] w-full max-w-[750px] pt-[4px] max-md:pt-0">
              <div className="inline-flex h-[24px] items-center justify-center rounded-full border border-white/95 bg-white/40 px-[18px] text-[11px] font-bold uppercase tracking-[1.15px] text-[#3455eb] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_5px_18px_rgba(70,91,190,0.06)] backdrop-blur-xl">
                PRICING
              </div>

              <h1
                style={{ fontSize: "42px", lineHeight: "1.0", letterSpacing: "-2px" }}
                className="mb-[8px] mt-[12px] font-bold text-[#10172f] max-2xl:text-[38px] max-xl:text-[34px] max-lg:text-[30px] max-md:text-[24px]"
              >
                Plans that <span className="font-bold text-[#2d5fff]">scale.</span><br />
                <span className="font-bold text-[#2d67ff]">Results</span> that speak.
              </h1>

              <p className="m-0 w-full max-w-[720px] text-[14.5px] font-normal leading-[1.4] text-[#5d6882] max-xl:text-[13.5px] max-md:text-[13px]">
                From individual creators to large enterprises, Meep AI has the perfect plan to grow your brand&apos;s visibility and authority.
              </p>

              <div className="mt-[10px] inline-flex min-h-[36px] max-w-full items-center gap-[10px] rounded-[11px] border border-white/95 bg-white/42 px-[14px] py-1 pl-1 text-[11.5px] leading-[1.3] text-[#5e6a84] shadow-[inset_0_1px_0_rgba(255,255,255,0.88),0_7px_22px_rgba(67,89,168,0.05)] backdrop-blur-xl max-md:w-full max-md:justify-center max-md:text-[10.5px]">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[8px] bg-white/70 text-[#3157ee]">
                  <Sparkles size={14} strokeWidth={1.7} />
                </span>

                <span>
                  All plans include{" "}
                  <strong className="font-semibold text-[#3157ee]">
                    AI Writing, SEO Tools &amp; DAO Community
                  </strong>
                </span>
              </div>
            </div>
          </div>

          <div className="h-[32px] max-md:h-[28px]" aria-hidden="true" />

          <section className="relative z-[20] mt-0">
            <div className="grid grid-cols-1 gap-[26px] min-[560px]:grid-cols-2 min-[1280px]:grid-cols-4 min-[1280px]:gap-[36px]">
              {plans.map((plan) => (
                <PricingCard key={plan.name} plan={plan} />
              ))}
            </div>
          </section>

          <div className="h-[8px] max-md:h-[6px]" aria-hidden="true" />

        <section className="pricing-trust-strip relative z-[25] mb-[12px] grid grid-cols-1 gap-y-6 rounded-[18px] border border-[#b9c9ea] bg-white/40 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_7px_20px_rgba(51,79,155,0.045)] backdrop-blur-xl min-[560px]:grid-cols-2 min-[560px]:py-3 min-[560px]:gap-x-8 min-[1280px]:grid-cols-4 min-[1280px]:py-3.5">
  {trustItems.map((item) => (
    <div
      key={item.title}
      className="pricing-trust-item group flex min-w-0 items-center rounded-[12px] py-1 pr-4 transition-all duration-200 hover:bg-[#edf3ff] hover:shadow-[0_6px_18px_rgba(63,95,190,0.08)]"
    >
      <div className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-[8px] bg-gradient-to-b from-[#4266f7] to-[#274de1] text-white shadow-[0_5px_11px_rgba(50,81,225,0.17)] transition-all duration-200 group-hover:from-[#4d72f8] group-hover:to-[#3159e8] group-hover:shadow-[0_5px_14px_rgba(50,81,225,0.18)]">
        <TrustIcon type={item.icon} />
      </div>

      <div className="min-w-0">
        <div className="text-[10.5px] font-semibold leading-[1.15] text-[#47577c] transition-colors duration-200 group-hover:text-[#3159ed] max-md:truncate">
          {item.title}
        </div>

        <div className="mt-[2px] text-[9px] leading-[1.25] text-[#8791a7] transition-colors duration-200 group-hover:text-[#6f7c9a]">
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
