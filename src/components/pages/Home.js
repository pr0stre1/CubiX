import React from 'react';
import '../../App.css';
import './Home.css';
import Footer from '../Footer';
import FAQ from '../FAQ';
import Blocks from "../Blocks";
import Targets from "../Targets";
import Team from "../Team";
import Projects from "../Projects";

export default function Home() {

    return (
        <>
            <div className="emptyBlock"></div>
            <Blocks/>
            <Targets/>
            <Team/>
            <Projects/>
            <FAQ/>
            <Footer/>
        </>
    );
}
