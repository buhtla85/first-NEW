import React from "react";
import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";
import {SectionTitle} from "../components/SectionTitle";
import Reservation from "../components/Reservation";

export const Bookings = (): JSX.Element => (
    <React.Fragment>
        <Navbar />
        <section className="bookings">
            <div className="customContainer">
                <SectionTitle title="book a stay" styling="section-title1"/>
                <Reservation />
            </div>
        </section>
        <Footer content="Copyright &copy; 2020, Tamara" />
    </React.Fragment>
);