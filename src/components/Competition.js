import React, { useState } from "react";
import Navbar from "./HomeNavbar";
import Footer from "./Footer";

function QuizForm() {
    const questions = [
        {
            question: "What is the capital of France?",
            options: ["Paris", "Madrid", "London", "Berlin"],
            answer: "Paris",
        },
        {
            question: "What is the largest continent by land area?",
            options: ["Africa", "Asia", "North America", "Europe"],
            answer: "Asia",
        },
        {
            question: "What is the highest mountain in the world?",
            options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
            answer: "Mount Everest",
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswerOptionClick = (selectedAnswer) => {
        if (selectedAnswer === questions[currentQuestion].answer) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div className="signupHero">
            <Navbar></Navbar>
            <div className="quiz">
                {showScore ? (
                    <div className="score-section">
                        You scored {score} out of {questions.length}
                    </div>
                ) : (
                    <>
                        <div className="question-section">
                            <div className="question-count">
                                <span>Question {currentQuestion + 1}</span>/{questions.length}
                            </div>
                            <div className="question-text">
                                {questions[currentQuestion].question}
                            </div>
                        </div>
                        <div className="answer-section">
                            {questions[currentQuestion].options.map((option) => (
                                <button onClick={() => handleAnswerOptionClick(option)}>
                                    {option}
                                </button>
                            ))}
                        </div>
                    </>
                )}
            </div>
            <Footer></Footer>
        </div>
    );
}

export default QuizForm;
