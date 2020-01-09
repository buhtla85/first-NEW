import React from "react";
import {SectionTitle} from "../components/SectionTitle";
import {CardStaff} from "../components/CardStaff";

export const SectionStaff = (): JSX.Element => {
    return (
        <section className="staff">
            <div className="container">
                <SectionTitle title="meet our staff" styling="section-title1"/>
                <div className="flex-container card-deck">
                    <CardStaff source="https://www.w3schools.com/bootstrap4/img_avatar3.png" alternative="founder" name="John Doe" job="Founder"/>
                    <CardStaff source="https://kursor.kiev.ua/images/icons/teacher_woman.png" alternative="vetrenarian" name="Jane Doe" job="Veterinarien"/>
                    <CardStaff source="https://www.ei-conf.com/img/girl.jpg" alternative="groomer" name="Lisa Smith" job="Groomer"/>
                </div>
            </div>
        </section>
    )
}