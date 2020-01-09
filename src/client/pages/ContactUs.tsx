import React from "react";
import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";
import {SectionStaff} from "../components/SectionStaff";

export const ContactUs = (): JSX.Element => (
    <React.Fragment>
        <Navbar />
        <SectionStaff />
        <Footer content="Copyright &copy; 2020, Tamara"/>
    </React.Fragment>
);