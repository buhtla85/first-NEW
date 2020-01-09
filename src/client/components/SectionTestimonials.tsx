import React from "react";
import {SectionTitle} from "../components/SectionTitle";
import {SingleTestimonial} from "../components/SingleTestimonial";

export const SectionTestimonials = () => {
    return (
        <section className="testimonials">
            <div className="customContainer">
                <SectionTitle title="testimonials" styling="section-title1"/>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <SingleTestimonial name="Anna" styling="carousel-item active"/>
                        <SingleTestimonial name="Jack" styling="carousel-item"/>
                        <SingleTestimonial name="Kate" styling="carousel-item"/>
                    </div>
                </div>
            </div>
        </section>
    )
}