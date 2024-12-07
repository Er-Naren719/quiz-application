import React, { useState } from "react";
import quizData from "../../quizData.json";
import "./CategorySelection.css";

const CategorySelection = ({ onSelectCategory }) => {
	const [category, setCategory] = useState("");

	const handleInputChange = (event) => {
    sessionStorage.setItem("username", event.target.value);
	};

	const onRulesClick = () => {
		console.log("rules modal opened");
	};

	const onCategorySelection = (value) => {
		setCategory(value);
	};

	return (
		<div className="category-selection">
			<h1>
				Welcome to
				<span className="thin"> QUIZ</span>
				<span className="thik">Mania</span>
			</h1>
			<div className="rules-container">
				<p>Please read all the rules about this quiz before you start.</p>
				<button onClick={onRulesClick}>Quiz rules</button>
			</div>
			<div className="username">
				<label>
					{" "}
					Full name
					<input type="text" onChange={handleInputChange} />
				</label>
			</div>
			<h6>Please select topic to continue</h6>
			<div className="category-grid">
				{quizData.categories.map((category) => (
					<button
						key={category.id}
						className="category-button"
						onClick={() => onCategorySelection(category)}
					>
						{category.name}
					</button>
				))}
				<button className="start-quiz" onClick={() => onSelectCategory(category)}>Start Quiz</button>
			</div>
		</div>
	);
};

export default CategorySelection;
