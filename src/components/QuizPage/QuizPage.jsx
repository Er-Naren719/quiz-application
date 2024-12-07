import React, { useState, useEffect } from 'react';
import './QuizPage.css';

const QuizPage = ({ category, onQuizComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(10);
  const [score, setScore] = useState(0);
  const [unansweredQuestions, setUnansweredQuestions] = useState(0);

  const questions = category.questions;

  useEffect(() => {
    // Reset timer for each question
    setTimeLeft(10);
    setSelectedAnswer(null);

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 0) {
          moveToNextQuestion();
          return 10;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentQuestionIndex]);

  const moveToNextQuestion = () => {
    // If no answer selected, increment unanswered questions
    if (!selectedAnswer) {
      setUnansweredQuestions(prev => prev + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      onQuizComplete({ score, unansweredQuestions });
    }
  };

  const handleAnswerSelect = (option) => {
    setSelectedAnswer(option);
    
    // Check if answer is correct
    if (option === questions[currentQuestionIndex].correctAnswer) {
      setScore(prev => prev + 1);
    }

    // Wait a moment before moving to next question
    setTimeout(moveToNextQuestion, 500);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-page">
      <div className="timer">{timeLeft} seconds left</div>
      <h2>{currentQuestion.question}</h2>
      <div className="options-grid">
        {currentQuestion.options.map(option => (
          <button 
            key={option}
            onClick={() => handleAnswerSelect(option.charAt(0))}
            className={`option-button ${
              selectedAnswer 
                ? (option.charAt(0) === currentQuestion.correctAnswer 
                    ? 'correct' 
                    : 'incorrect')
                : ''
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizPage;