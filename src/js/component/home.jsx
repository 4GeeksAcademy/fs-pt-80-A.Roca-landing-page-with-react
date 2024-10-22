import React from "react";

import { Navbar } from "./navbar.jsx";
import { WelcomeCard } from "./welcomecard.jsx";
import { Card } from "./card.jsx";
import { Footer } from "./footer.jsx";


const Home = () => {
	let arr = [1, 2, 3, 4];
	return (
			<div>
				<Navbar/>
				<div className="container m-auto">
					<WelcomeCard/>
					<div className="d-flex justify-content-center flex-wrap m-4">
					{arr.map((item) => (
						<Card key={item} />
					))}
					</div>
				</div>
				<Footer/>
			</div>
	)
};

export default Home;
