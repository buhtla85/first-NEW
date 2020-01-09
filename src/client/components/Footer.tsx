import React from "react";

interface IPropFooter {
    content: string
}

export const Footer = (props: IPropFooter): JSX.Element => {
    return (
        <footer className="my-footer">
            <div className="customContainer">
                <p>{props.content}</p>
            </div>
        </footer>
    )
};