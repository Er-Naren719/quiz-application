import React from "react";
import "./Header.css";

function Header() {
	const onExit = () => {
		console.log("Exit quiz");
	};
	return (
		<header>
			<div className="container">
				<div className="logo">
					<img src="/images/QUIZMania.svg" alt="QUIZMania" />
				</div>
				<div className="exit-quiz">
					<button onClick={onExit}>Exit Quiz</button>
				</div>
			</div>
		</header>
	);
}

export default Header;
