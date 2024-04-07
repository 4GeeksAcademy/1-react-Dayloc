import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from"./card";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
//create your first component
const Home = () => {
	return (
		<div className="container  justify-content-center">
		<Navbar/>
		<Jumbotron/>
		<div className="text-center">
			
			<div className="row">
			<div className="col-3"><Card /></div>
			<div className="col-3"><Card /></div>
			<div className="col-3"><Card /></div>
			<div className="col-3"><Card /></div>
						
			</div>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
		</div>
	);
};

export default Home;
