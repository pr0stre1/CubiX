import React, {useRef} from 'react';
import './Blocks.css';
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
// import {ScrollTrigger} from "gsap/ScrollTrigger";

// function getRandomInt(max) {
//   return Math.floor(Math.random() * max);
// }

function Blocks() {
    const blocks = useRef();
    useGSAP((context, contextSafe) => {
        // gsap.registerPlugin(ScrollTrigger);

        const timeline = gsap.timeline({});

        document.querySelectorAll('.blocks > div').forEach((element) => {
            timeline.fromTo(element, {
                // opacity: 0,
                // scale: 0,
            },{
                // opacity: 1,
                scale: 1,
                duration: 0.05,
                ease: 'power3.inOut',
            }, 0);
        });

        // gsap.fromTo(document.querySelectorAll('.blocks'), {
        //     // opacity: 0,
        //     scale: 1.05,
        // }, {
        //     // opacity: 1,
        //     // duration: 1,
        //     scale: 1,
        // })
    }, { scope: blocks });

    return (
        <>
            <section className="blocks" ref={blocks}>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
            </section>
        </>
    );
}

export default Blocks;
