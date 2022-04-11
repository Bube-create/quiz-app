import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import { questions } from "../assets/script.js";
import Question from "./Question";
import QuizForm from "./QuizForm";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
	const [time, setTime] = useState(50);
	const [correct, setCorrect] = useState(null);
	const [qIndex, setQIndex] = useState(0);
	const [score, setScore] = useState(0);
	const navigate = useNavigate();
	// console.log(history);
	useEffect(() => {
		const counter = setTimeout(() => {
			if (time > 0) {
				setTime(time - 1);
				// console.log("hello");
			}
		}, 1000);

		return () => {
			clearTimeout(counter);
		};
	}, [time]);

	// {
	// 	questionText: "Commonly used data types DO NOT include:",
	// 	options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
	// 	answer: "3. alerts",
	// },
	function questionHandler(e, question) {
		let correct = e.target.innerText === question.answer;
		console.log(correct);
		if (!correct) {
			if (time - 10 < 1) {
				setTime(0);
			} else {
				setTime(time - 10);
			}
			setCorrect(false);
		} else {
			setCorrect(true);
			setScore(score + 1);
		}

		setTimeout(() => {
			setCorrect(null);
			if (correct) {
				setQIndex(qIndex + 1);
			}
		}, 1000);
	}

	function q(index) {
		return (
			<Question
				question={questions[index]}
				questionHandler={(e) => questionHandler(e, questions[index])}
				correct={correct}
			/>
		);
	}
	console.log(qIndex, questions.length);
	return (
		<div>
			<Heading time={time} />

			{time > 0 && qIndex < questions.length
				? q(qIndex)
				: navigate(`/quiz-form?score=${score}`)}

			{/* <button onClick={() => setTime(time - 1)}>reduce</button> */}
		</div>
	);
};

export default Quiz;
