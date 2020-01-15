import React from "react";
import {SectionTitle} from "../components/SectionTitle";

export const SectionContacts = (): JSX.Element => {
    return (
        <section className="contacts">
            <SectionTitle title="contact us" styling="section-title2"/>
            <div className="pt-4">
                <div className="container">
                    <div className="row" id="override">
                        <div className="col-sm">
                            <img src="https://media.istockphoto.com/photos/cute-dog-picture-id533229488?k=6&m=533229488&s=612x612&w=0&h=gtG2t9AwvN6tKRvdaE_zkSSnounMJ2ZVU2DJ9RfxTjw=" className="img-fluid" alt="Responsive image" />
                        </div>
                        <div className="col-sm text-white pt-3" id="addPadding">
                            <span className="fa-stack fa-lg ">
                                <i className="fa fa-twitter-square fa-stack-2x pr-3 mb-1" id="green"></i>
                            </span>
                            Follow us on Twitter!<br />
                            <span className="fa-stack fa-lg ">
                                <i className="fa fa-facebook-official fa-stack-2x pr-3 mb-1" id="green"></i>
                            </span>
                            Check out our Facebook page!<br />
                            <span className="fa-stack fa-lg">
                                <i className="fa fa-snapchat fa-stack-2x pr-3 mb-1" id="green"></i>
                            </span>
                            Visit our Snapchat!<br />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}