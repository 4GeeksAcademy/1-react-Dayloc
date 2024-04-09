import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from"./card";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Futer from "./futer.jsx";
//create your first component
const Home = () => {
	return (
		<div className="container1   max-width">
		<Navbar/>
		<div className="container">
		<Jumbotron/>
		
			
			<div className="row">
			<div className="col-sm-auto col-md-6 col-xl-3"><Card /></div>
			<div className="col-sm-auto col-md-6 col-xl-3"><Card /></div>
			<div className="col-sm-auto col-md-6 col-xl-3"><Card /></div>
			<div className="col-sm-auto col-md-6 col-xl-3"><Card /></div>
						
			</div>
			
		</div>
		<Futer/>
		</div>
	);
};

export default Home;
