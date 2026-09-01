import React from 'react'
import style from "@/app/page.module.css"
import gsap from "gsap/gsap-core";
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export const Ai_Dao = () => {


    useGSAP(() => {
        const mm = gsap.matchMedia();
        mm.add("(min-width: 575px)", () => {

            gsap.from(
                "#secfive_container",
                {
                    scrollTrigger: {
                        trigger: "#secfive_container",
                        pin: true,
                        pinSpacing: false,
                        scroller: ".maincontainer",
                        start: "top 16",
                        end: "+120%",
                    }
                }
            )
            gsap.fromTo(
                ".ai_dao .heading",
                { opacity: 0, x: "-100%" },
                {
                    opacity: 1,
                    x: 0,
                    scrollTrigger: {
                        trigger: ".ai_dao",
                        scroller: ".maincontainer",
                        start: 'top 100%',
                        end: "top 0%",
                        scrub: true,
                        // markers:true
                    }
                }
            )
            gsap.fromTo(
                ".ai_dao .arrow",
                { opacity: 0, x: "200%" },
                {
                    opacity: 1,
                    x: 0,
                    scrollTrigger: {
                        trigger: ".ai_dao",
                        scroller: ".maincontainer",
                        start: 'top 100%',
                        end: "top 0%",
                        scrub: true,
                        // markers:true
                    }
                }
            )
            gsap.fromTo(
                ".ai_dao .card-left",
                { opacity: 0, x: "100%" },
                {
                    opacity: 1,
                    x: 0,
                    scrollTrigger: {
                        trigger: ".ai_dao",
                        scroller: ".maincontainer",
                        start: 'top 50%',
                        end: "top 0%",
                        scrub: true,
                        // markers:true
                    }
                }
            )
            gsap.fromTo(
                ".ai_dao .card-right",
                { opacity: 0, x: "100%" },
                {
                    opacity: 1,
                    x: 0,
                    scrollTrigger: {
                        trigger: ".ai_dao",
                        scroller: ".maincontainer",
                        start: 'top 50%',
                        end: "top 0%",
                        scrub: true,
                        // markers:true
                    }
                }
            )

            gsap.fromTo(
                ".ai_dao .aiDao_img",
                { y: "-90%", opacity: .3 },
                {
                    y: 0,
                    opacity: 1,
                    scrollTrigger: {
                        trigger: ".ai_dao",
                        scroller: ".maincontainer",
                        start: 'top 95%',
                        end: "top 0%",
                        scrub: true,
                        // markers: true
                    }

                }
            )




            gsap.fromTo(
                ".ai_dao .heading",
                { opacity: 1, x: 0 },
                {
                    opacity: 0,
                    x: "-100%",
                    scrollTrigger: {
                        trigger: ".ai_dao",
                        scroller: ".maincontainer",
                        start: 'top -20%',
                        end: "+=80%",
                        scrub: true,
                        // markers:true
                    }
                }
            )
            gsap.fromTo(
                ".ai_dao .arrow",
                { opacity: 1, x: 0 },
                {
                    opacity: 0,
                    x: "200%",
                    scrollTrigger: {
                        trigger: ".ai_dao",
                        scroller: ".maincontainer",
                        start: 'top -20%',
                        end: "+=80%",
                        scrub: true,
                        // markers:true
                    }
                }
            )
            gsap.fromTo(
                ".ai_dao .card-left",
                { opacity: 1, x: 0 },
                {
                    opacity: 0,
                    x: "-100%",
                    scrollTrigger: {
                        trigger: ".ai_dao",
                        scroller: ".maincontainer",
                        start: 'top -20%',
                        end: "+=80%",
                        scrub: true,
                        // markers:true
                    }
                }
            )
            gsap.fromTo(
                ".ai_dao .card-right",
                { opacity: 1, x: 0 },
                {
                    opacity: 0,
                    x: "100%",
                    scrollTrigger: {
                        trigger: ".ai_dao",
                        scroller: ".maincontainer",
                        start: 'top -20%',
                        end: "+=80%",
                        scrub: true,
                        // markers:true
                    }
                }
            )
        })
    })
    return (
        <div id='secfive_container'>
            <div className={style.ai_dao + " mb-3 ai_dao d-sm-flex"}>

                <div className={style.top + " position-relative "}>
                    <video loop autoPlay muted playsInline preload='none' className='position-sm-absolute top-0 start-0 h-100' >
                        <source src="/short_video.mp4" type="video/mp4"></source>
                    </video>
                </div>
                <div className={style.bottom + '  gap-xl-5 gap-3 position-relative'}>
                    <span className='arrow d-none d-sm-block position-absolute' style={{top:'2rem', right:"2rem"}}>
                        <img src="/assets/white-arrow.svg" alt="" />
                    </span>
                    <h2 className='heading text-center text-sm-start grdtext'>
                        <span className='text-uppercase  '>ai</span> & <span className='text-uppercase '>DAO</span>
                    </h2>
                    <h2 className='text-black heading'> in Harmony</h2>
                    <div className={style.card + " card-left"}>
                        <h3 className='grdtext text-center text-sm-start'>The Harmony!</h3>
                        <p className=' text-center text-sm-start'>Meep is an innovative platform that seamlessly integrates cutting-edge AI technology with a dynamic DAO (Decentralized Autonomous Organization). Our advanced SEO and PR tools elevate your search rankings and craft powerful digital strategies, while the DAO fosters a collaborative community for shared innovation and rewarding participation. This harmonious blend of AI precision and community-driven governance ensures your brand thrives in the ever-evolving digital landscape.</p>
                    </div>
                    <div className={style.card + " card-right"}>
                        <h3 className='grdtext text-center text-sm-start'>The Effect</h3>
                        <p className=' text-center text-sm-start'>Meep's AI-powered tools elevate your online presence, giving you a significant competitive edge. Simultaneously, our DAO cultivates a collaborative community ecosystem, offering shared rewards, partnership opportunities, and continuous innovation. This powerful combination ensures your brand not only thrives but also leads in the ever-evolving digital landscape.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
