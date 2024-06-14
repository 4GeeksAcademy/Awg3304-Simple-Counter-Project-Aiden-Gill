import React from "react";
import { Card } from "./card";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const messageList = ["Good morning!",
  "How are you?",
  "What's up?",
  "Have a great day!",
  "See you soon.",
  "Take care.",
  "Happy Birthday!",
  "Congrats!",
  "Thank you!",
  "Well done!",
  "Let's meet up.",
  "I'm sorry.",
  "Good night!",
  "Call me.",
  "Miss you.",
  "Good luck!",
  "Stay safe.",
  "Cheers!",
  "All the best!",
  "Enjoy your day!"]
	return (
		<div className="text-center row">
			{messageList.map((item,index)=>(<Card message={item} color="bg-dark" textColor="text-white"/>))}
		</div>
	);
};

export default Home;
