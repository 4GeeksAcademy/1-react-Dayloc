import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Card from "./card";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Futer from "./futer.jsx";
import { alumnos, owner } from './../data';
//create your first component
const Home = () => {
	return (
		<div className="container1   max-width">
			<Navbar />
			<div className="container">
				<Jumbotron />

				<div className="row ">
					
						{
							alumnos.map((item, index) => (
								<div className="col-sm-auto col-md-6 col-xl-3">
								<Card key={index} nombre={item.nombre} apellido={item.apellido} cta={item.cta} />
								</div>
							))
						}
					
				</div>

			</div>
			<Futer owner={owner} />
		</div>
	);
};

export default Home;
