import React from "react";
import "./Header.css";

function Header({ onRestart, currentPage }) {
	const userName = sessionStorage.getItem("username")
		? sessionStorage.getItem("username")
		: "User";

	return (
		<header>
			<div className="container">
				<div className="logo">
					<img src="/images/QUIZMania.svg" alt="QUIZMania" />
				</div>
				{currentPage === "category" && <span className="hidden-username">{userName}</span>}
				{currentPage === "quiz" && (
					<div className="exit-quiz">
						<button onClick={onRestart}>Exit Quiz</button>
					</div>
				)}
			</div>
		</header>
	);
}

export default Header;
