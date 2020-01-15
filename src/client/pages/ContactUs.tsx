import React from "react";
import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";
import {SectionStaff} from "../components/SectionStaff";
import {SectionContacts} from "../components/SectionContacts";

export const ContactUs = (): JSX.Element => (
    <React.Fragment>
        <Navbar />
        <SectionStaff />
        <SectionContacts />
        <Footer content="Copyright &copy; 2020, Tamara"/>
    </React.Fragment>
);