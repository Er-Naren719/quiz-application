import React from "react";
import "./ResultsPage.css";

const ResultsPage = ({
	totalQuestions,
	score,
	unansweredQuestions,
	onRestart,
}) => {
	const getPerformanceFeedback = () => {
		const correctAnswers = score;
		const percentageScore = (correctAnswers / totalQuestions) * 100;

		if (percentageScore >= 80) return "Great job! 🎉";
		if (percentageScore >= 50) return "Good effort! Keep practicing! 👍";
		return "Keep practicing! You can do better! 💪";
	};

	return (
		<div className="results-page">
			<h1>Quiz Results</h1>
			<div className="results-details">
				<p>Total Questions: {totalQuestions}</p>
				<p>Correct Answers: {score}</p>
				<p>Unanswered Questions: {unansweredQuestions}</p>
				<h2>{getPerformanceFeedback()}</h2>
			</div>
			<button onClick={onRestart} className="restart-button">
				Take Another Quiz
			</button>
		</div>
	);
};

export default ResultsPage;
