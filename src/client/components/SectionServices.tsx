import React from "react";
import {SectionTitle} from "../components/SectionTitle";
import {CardService} from "../components/CardService";

export const SectionServices = (): JSX.Element => {
    return (
        <section className="services">
            <div className="customContainer">
                <SectionTitle title="what we offer" styling="section-title2"/>
                <div className="flex-container">
                    <CardService serviceName="organic food" iconProp="fa fa-cutlery fa-3x text-white" />
                    <CardService serviceName="grooming" iconProp="fa fa-scissors fa-3x text-white" />
                    <CardService serviceName="veterinarian" iconProp="fa fa-medkit fa-3x text-white" />
                </div>
            </div>
        </section>
    )
};