import React, {useRef} from 'react';
import './Carts.css';
import './pages/Home.css'
import {
    RiInstagramLine,
    RiLinkedinBoxLine,
    RiTwitterXLine
} from "@remixicon/react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

function Team() {
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
            <section className="sectionBlock" id='team' ref={container}>
                <div className="title">Meet the team</div>

                <div className="carts">
                    <div className="cart">
                        <div className="cover">
                            <img src="/images/close-up-smiley-senior-man_23-2149196165.avif"
                                 alt="Project Manager"/>
                        </div>
                        <div className="details">
                            <div className="bigTitle">
                                Drake Lobren
                            </div>

                            <div className="description">
                                Project Manager
                            </div>

                            <div className="social">
                                <a href="https://www.linkedin.com/"><RiLinkedinBoxLine/></a>
                                <a href="https://www.instagram.com/"><RiInstagramLine/></a>
                                <a href="https://x.com/"><RiTwitterXLine/></a>
                            </div>
                        </div>
                    </div>

                    <div className="cart">
                        <div className="cover">
                            <img src="/images/Kayla-Person.jpg" alt="Human Resources"/>
                        </div>

                        <div className="details">
                            <div className="bigTitle">
                                Claris Melson
                            </div>

                            <div className="description">
                                Human Resources
                            </div>

                            <div className="social">
                                <a href="https://www.linkedin.com/"><RiLinkedinBoxLine/></a>
                                <a href="https://www.instagram.com/"><RiInstagramLine/></a>
                                <a href="https://x.com/"><RiTwitterXLine/></a>
                            </div>
                        </div>
                    </div>

                    <div className="cart">
                        <div className="cover">
                            <img
                                src="/images/depositphotos_28333859-stock-photo-happy-smiling-portrait.jpg"
                                alt="Lead Programmer"/>
                        </div>

                        <div className="details">
                            <div className="bigTitle">
                                Jares Mennistion
                            </div>

                            <div className="description">
                                Lead Programmer
                            </div>

                            <div className="social">
                                <a href="https://www.linkedin.com/"><RiLinkedinBoxLine/></a>
                                <a href="https://www.instagram.com/"><RiInstagramLine/></a>
                                <a href="https://x.com/"><RiTwitterXLine/></a>
                            </div>
                        </div>
                    </div>

                    <div className="cart">
                        <div className="cover">
                            <img
                                src="/images/mobile-01.jpg"
                                alt="Sales Manager"/>
                        </div>

                        <div className="details">
                            <div className="bigTitle">
                                Klevinsi Plusken
                            </div>

                            <div className="description">
                                Sales Manager
                            </div>

                            <div className="social">
                                <a href="https://www.linkedin.com/"><RiLinkedinBoxLine/></a>
                                <a href="https://www.instagram.com/"><RiInstagramLine/></a>
                                <a href="https://x.com/"><RiTwitterXLine/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Team;
