import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Highscores = () => {
	const [userResults, setUserResults] = useState([]);
	useEffect(() => {
		setUserResults(JSON.parse(localStorage.getItem("users")) || []);
	}, []);

	function clearScores() {
		localStorage.removeItem("users");
		setUserResults([]);
	}
	return (
		<StyledDiv>
			<h2>HighScores</h2>

			<ol>
				{userResults
					.sort((a, b) => {
						if (a.score < b.score) {
							return 1;
						}
						if (a.score > b.score) {
							return -1;
						}
						return 0;
					})
					.map((items) => (
						<li key={items.name}>
							{items.name} - {items.score}
						</li>
					))}
			</ol>
			<div>
				<Link to="/">
					<button>Go Back</button>
				</Link>

				<button onClick={clearScores}>Clear HighScores</button>
			</div>
		</StyledDiv>
	);
};

export default Highscores;

const StyledDiv = styled.div`
	max-width: 600px;
	margin: 10% auto 0;
	border: solid;
	border-radius: 8px;
	padding: 16px;
	display: flex;
	flex-direction: column;
	align-items: center;

	h2 {
		font-size: 2rem;
		color: #218380;
	}

	button {
		background-color: #218380;
		padding: 8px;
		border-radius: 8px;
		color: white;
		margin-top: 16px;
		margin-right: 16px;
	}
`;
