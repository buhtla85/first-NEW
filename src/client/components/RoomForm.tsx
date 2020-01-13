import React from "react";
import {DogForm} from "./DogForm";

export interface IDog {
    name: string,
    breed: string,
    food: boolean,
    grooming: boolean,
    foodPrice: number,
    groomPrice: number
}

export interface IRoom {
    startDate: string,
    endDate: string,
    dogs: IDog[], 
    dropDownText: string,
    days: number,
    errMessageDate: string,
    errMessageDogs: string,
    counter: number,
    roomPrice: number, 
}

export interface IRoomProp {
    singleRoom: {
        startDate: string,
        endDate: string,
        dogs: IDog[], 
        dropDownText: string,
        days: number,
        errMessageDate: string,
        errMessageDogs: string,
        counter: number,
        roomPrice: number, 
    },
    index: number,
    changeDates: (event: React.ChangeEvent<HTMLInputElement>) => void,
    changeSelected: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    handleDogName: (index:number) => (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleDogBreed: (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleFood: (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleGrooming: (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => void,
    handleAddingDogs: (event: React.MouseEvent<HTMLButtonElement>) => void,
    handleRemovingDogs: (index: number) => (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const RoomForm = (props: IRoomProp): JSX.Element => {
    return (
        <div className="container pt-3">
                <h4>{`Room #${props.index + 1}`}</h4>
                <div className="form-row align-items-center">
                    <div className="col-auto">
                        <label htmlFor="" className="mr-2">Staying from:</label>
                        <input type="date" value={props.singleRoom.startDate} onChange={props.changeDates} name="startDate" className="mr-2 p-1"/>
                    </div>
                    {props.singleRoom.startDate === "" ? "" : <div className="col-auto">
                        <label htmlFor="" className="mr-2">To:</label>
                        <input type="date" value={props.singleRoom.endDate} onChange={props.changeDates} name="endDate" className="mr-2 p-1"/>
                    </div>}
                    <p className="text-danger">{props.singleRoom.errMessageDate}</p>
                    <div className="col-auto">
                        <select className="custom-select mr-sm-2" onChange={props.changeSelected}>
                            <option>{props.singleRoom.dropDownText}</option>
                            <option value="1">Single dog room</option>
                            <option value="2">Two dogs room</option>
                            <option value="3">Three dogs room </option>
                            <option value="4">Four dogs room</option>
                        </select>
                    </div>
                </div>
                {props.singleRoom.dogs.map((dog: IDog, idx: number) => {
                    return (
                        <div key={idx}>
                            <DogForm singleDog={dog} index={idx} changeName={props.handleDogName(idx)} changeBreed={props.handleDogBreed(idx)} foodCheck={props.handleFood(idx)} groomCheck={props.handleGrooming(idx)}/>
                            <button type="button" className="btn btn-danger" onClick={props.handleRemovingDogs(idx)}>Remove Dog</button>
                        </div>
                )})}
                <button type="button" className="btn btn-success mt-1" onClick={props.handleAddingDogs}>Add New Dog</button>
                <p className="text-danger">{props.singleRoom.errMessageDogs}</p>
            </div>
    )
};