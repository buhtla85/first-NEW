import React from "react";

interface IPropCard {
    iconProp: string,
    serviceName: string
}

export const CardService = (props: IPropCard) => {
    return (
        <>
            <div>
                <i className={props.iconProp}></i>
                <div>
                    <h4 className="text-white">{props.serviceName}</h4>
                    <p className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim tempora error omnis dicta, ex incidunt.</p>
                </div>
            </div>
        </>
    )
};

