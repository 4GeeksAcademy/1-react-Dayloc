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
		<div className="container1  justify-content-center max-width">
		<Navbar/>
		<Jumbotron/>
		<div className="text-center">
			
			<div className="row">
			<div className="col-sm-3 col-md-6 col-xl-3"><Card /></div>
			<div className="col-sm-3 col-md-6 col-xl-3"><Card /></div>
			<div className="col-sm-3 col-md-6 col-xl-3"><Card /></div>
			<div className="col-sm-3 col-md-6 col-xl-3"><Card /></div>
						
			</div>
			<Futer/>
		</div>
		</div>
	);
};

export default Home;
