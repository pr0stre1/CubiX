import React, {useRef} from 'react';
import './Carts.css';
import './pages/Home.css'
import {
    RiArrowUpDoubleFill,
    RiBubbleChartLine,
    RiDragMoveLine,
} from "@remixicon/react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

function Targets() {
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
            <section className="sectionBlock" id='targets' ref={container}>
                <div className="title">What is the targets?</div>

                <div className="carts">
                    <div className="cart">
                        <div className="cover">
                            <img src="/images/3025960.webp" alt="Promote"/>

                        </div>

                        <div className="details">
                            <div className="bigTitle">
                                Promote <RiArrowUpDoubleFill/>
                            </div>

                            <div className="description">
                                Advertising companies are always having to think up new ways to promote products
                            </div>
                        </div>
                    </div>

                    <div className="cart">
                        <div className="cover">
                            <img src="/images/3025971.webp" alt="Improve"/>
                        </div>

                        <div className="details">
                            <div className="bigTitle">
                                Improve <RiDragMoveLine/>
                            </div>

                            <div className="description">
                                The company is hoping to improve on something in doing or making it better
                            </div>
                        </div>
                    </div>

                    <div className="cart">
                        <div className="cover">
                            <img src="/images/3025953.webp" alt="Analyze"/>
                        </div>

                        <div className="details">
                            <div className="bigTitle">
                                Analyze <RiBubbleChartLine/>
                            </div>

                            <div className="description">
                                In order to analyze the relative importance of the significant values
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Targets;
