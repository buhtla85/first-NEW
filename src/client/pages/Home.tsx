import React from "react";
import {Navbar} from "../components/Navbar";
import {Hero} from "../components/Hero";
import {SectionMission} from "../components/SectionMission";
import {SectionServices} from "../components/SectionServices";
import {SectionTestimonials} from "../components/SectionTestimonials";
import {Footer} from "../components/Footer";

export const Home = (): JSX.Element => (
    <React.Fragment>
        <Navbar />
        <Hero />
        <SectionMission />
        <SectionServices />
        <SectionTestimonials />
        <Footer content="Copyright &copy; 2020, Tamara"/>
    </React.Fragment>
);