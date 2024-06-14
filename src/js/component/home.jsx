import React from "react";
import { Card } from "./card";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({counter}) => {

	return (
		<div className="text-center row">
			<h1>{counter}</h1>
		</div>
	);
};

export default Home;
