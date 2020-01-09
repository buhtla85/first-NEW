import React from "react";

interface IPropTitle {
    title: string,
    styling: string
}

export const SectionTitle = (props: IPropTitle): JSX.Element => {
    return (
        <div className={props.styling}>
            <h2>{props.title}</h2>
            <div></div>
        </div>
    )
};