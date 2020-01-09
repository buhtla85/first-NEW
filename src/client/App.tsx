import * as React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import {Home} from "./pages/Home";
import {Bookings} from "./pages/Bookings";
import {ContactUs} from "./pages/ContactUs";
import {ErrorPage} from "./pages/ErrorPage";
import {Route, Switch} from "react-router-dom";

const App = (): JSX.Element => {
	return (
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route exact path="/bookings/" component={Bookings}/>
			<Route exact path="/contact/" component={ContactUs}/>
			<Route component={ErrorPage} />
		</Switch>
	);	
}

export default App;


// async componentDidMount() {
// 	try {
// 		let r = await fetch('/api/hello');
// 		let name = await r.json();
// 		this.setState({ name });
// 	} catch (error) {
// 		console.log(error);
// 	}
// }