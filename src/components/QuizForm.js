import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

const QuizForm = () => {
	const [input, setInput] = useState("");
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();
	const score = searchParams.get("score");
	function inputHandler(e) {
		setInput(e.target.value);
	}

	function checkValExists(input, prevValues) {
		for (const i in prevValues) {
			if (prevValues[i].name === input) {
				return true;
			}
		}
		return false;
	}

	function submitForm(e) {
		e.preventDefault();
		const prevValues = JSON.parse(localStorage.getItem("users")) || [];
		if (input === "") {
			alert(`username can not be empty`);
		} else if (checkValExists(input, prevValues)) {
			alert(
				`${input} username already in use please use another username`
			);
		} else {
			let newEntry = { name: input, score };
			const scores = [...prevValues, newEntry];
			localStorage.setItem("users", JSON.stringify(scores));
			setInput("");
			navigate("/highscores");
		}
	}

	return (
		<StyledForm onSubmit={submitForm}>
			<h2>All done!</h2>

			<p>your final score is {score}.</p>
			<label htmlFor="initials">Enter initals: </label>
			<input value={input} id="initials" onChange={inputHandler} />

			<button type="submit">Submit</button>
		</StyledForm>
	);
};

export default QuizForm;

const StyledForm = styled.form`
	border: solid;
	max-width: 600px;
	margin: 80px auto 0;
	padding: 32px;
	border-radius: 8px;

	h2 {
		font-size: 2rem;
	}

	button {
		background-color: #218380;
		padding: 8px;
		border-radius: 8px;
		color: white;
		margin-top: 16px;
	}
`;
