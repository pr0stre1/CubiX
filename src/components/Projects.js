import React, {useRef} from 'react';
import './Carts.css';
import './pages/Home.css'
import {
    RiLinksFill
} from "@remixicon/react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

function Projects() {
    const container = useRef();

    useGSAP((context, contextSafe) => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo('.carts', {
            scale: 0.9
        }, {
            scale: 1,
            duration: 1,
            // refreshPriority: -1,
            scrollTrigger: {
                // refreshPriority: -1,
                trigger: '.carts',
                start: "0% center",
                end: "100% center",
                // markers: true,
                // scrub: 10,
                toggleActions: "play reverse play reverse"
            }
        });
    }, {scope: container});

    return (
        <>
            <section className="sectionBlock" id='projects' ref={container}>
                <div className="title">Our projects</div>

                <div className="carts">
                    <div className="cart">
                        <div className="cover">
                            <img
                                src="/images/level-1-foundation-project.png"
                                alt="Cubes"/>
                        </div>

                        <div className="details">
                            <div className="bigTitle">
                                Cubes
                            </div>

                            <div className="social">
                                <a href="/">View demo <RiLinksFill/></a>
                            </div>
                        </div>
                    </div>

                    <div className="cart">
                        <div className="cover">
                            <img
                                src="/images/stock-vector-blocks-blue-gradient-vector-icon.jfif"
                                alt="Blocks"/>
                        </div>

                        <div className="details">
                            <div className="bigTitle">
                                Blocks
                            </div>

                            <div className="social">
                                <a href="/">View demo <RiLinksFill/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projects;
