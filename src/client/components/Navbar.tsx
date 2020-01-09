import React from "react";
import {Link} from "react-router-dom";

interface INavState {
    isOpen: boolean
}

interface INavProps {}

export class Navbar extends React.Component<INavProps, INavState> {
    constructor(props: INavProps) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    handleToggle = () => this.setState({isOpen: !this.state.isOpen});

    render() {
        return (
            <React.Fragment>
                <div className={this.state.isOpen ? "topnav responsive" : "topnav"}>
                    <Link to="/"><h6 className="logo"><span className="customTextPrimary">FurBall</span>Hotel</h6></Link>
                    <Link to="/"><h6>Home</h6></Link>
                    <Link to="/bookings/"><h6>Bookings</h6></Link>
                    <Link to="/contact/"><h6>Contact</h6></Link>
                    <button type="button" className="icon" onClick={this.handleToggle}><i className="fa fa-bars"></i></button>
                </div>
            </React.Fragment>
        )
    }
}