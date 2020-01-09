import React from "react";

export interface IDogProp {
    singleDog: {name: string, breed: string, food: boolean, grooming: boolean, foodPrice: number, groomPrice: number},
    index: number,
    changeName: (event: React.ChangeEvent<HTMLInputElement>) => void,
    changeBreed: (event: React.ChangeEvent<HTMLInputElement>) => void,
    foodCheck: (event: React.ChangeEvent<HTMLInputElement>) => void,
    groomCheck: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const DogForm = (props: IDogProp): JSX.Element => {
    return (
        <div className="pt-3">
            <div className="form-group">
                <label htmlFor="name">{`Dog #${props.index + 1} name:`}</label>
                <input type="text" name="name" value={props.singleDog.name} onChange={props.changeName} className="form-control"/>
            </div>
            <div className="form-group">
                <label htmlFor="breed">Breed: </label>
                <input type="text" name="breed" value={props.singleDog.breed} onChange={props.changeBreed} className="form-control"/>
            </div>
            <div className="form-group form-check">
                <input type="checkbox" checked={props.singleDog.food} name="food" onChange={props.foodCheck} className="form-check-label"/>
                <label htmlFor="food">Our Food (2$ per day)</label>
            </div>
            <div className="form-group form-check">
                <input type="checkbox" checked={props.singleDog.grooming} name="grooming" onChange={props.groomCheck} className="form-check-label"/>
                <label htmlFor="grooming">Grooming (10$ per stay)</label>
            </div>
        </div>
    )
};
