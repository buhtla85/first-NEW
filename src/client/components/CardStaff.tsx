import React from "react";

interface IPropStaffCard {
    source: string,
    alternative: string,
    name: string,
    job: string
}

export const CardStaff = (props: IPropStaffCard): JSX.Element => {
    return (
        <div className="card">
            <img src={props.source} className="card-img-top" alt={props.alternative}/>
            <div className="card-body">
                <h4 className="card-title">{props.name}</h4>
                <h5>{props.job}</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam nam quibusdam vitae beatae! Voluptates, aliquam.</p>
            </div>
        </div>  
    )
};