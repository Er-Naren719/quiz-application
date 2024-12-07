import React, { useState } from "react";
import "./App.css";
import CategorySelection from "./components/CategorySelection/CategorySelection";
import Header from "./components/Header/Header";
import QuizPage from "./components/QuizPage/QuizPage";
import ResultsPage from "./components/ResultsPage/ResultsPage";

function App() {
	const [currentPage, setCurrentPage] = useState("category");
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [quizResults, setQuizResults] = useState(null);

	const handleCategorySelect = (category) => {
		setSelectedCategory(category);
		setCurrentPage("quiz");
	};

	const handleQuizComplete = (results) => {
		setQuizResults({
			...results,
			totalQuestions: selectedCategory.questions.length,
		});
		setCurrentPage("results");
	};

	const handleRestart = () => {
		setCurrentPage("category");
		setSelectedCategory(null);
		setQuizResults(null);
	};

	return (
		<div className="App">
			<Header onRestart={handleRestart} currentPage={currentPage} />

			<div className="wrapper">
				{currentPage === "category" && (
					<CategorySelection onSelectCategory={handleCategorySelect} />
				)}

				{currentPage === "quiz" && selectedCategory && (
					<QuizPage
						category={selectedCategory}
						onQuizComplete={handleQuizComplete}
					/>
				)}

				{currentPage === "results" && quizResults && (
					<ResultsPage {...quizResults} onRestart={handleRestart} />
				)}
			</div>
		</div>
	);
}

export default App;
