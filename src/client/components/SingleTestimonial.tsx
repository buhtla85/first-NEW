import React from "react";

interface IPropTestimonial {
    styling: string,
    name: string
}

export const SingleTestimonial = (props: IPropTestimonial): JSX.Element => {
    return (
        <div className={props.styling}>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, cumque? Quis aliquid illo velit earum quasi. Quo vitae voluptas odit quasi qui eaque accusamus, inventore sunt ullam temporibus repellat explicabo repudiandae? Rerum, eius dolores. At assumenda omnis alias ipsum voluptatum deserunt labore. Eius magni aperiam, ex fuga consectetur id quod.</p>
            <cite>-{props.name}</cite>
        </div>
    )
};