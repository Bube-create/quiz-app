import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Heading from "./Heading";

const WelcomePage = () => {
	return (
		<>
			<Heading />
			<main>
				<StyledDiv>
					<h2>Coding Quiz Challenge</h2>
					<p>
						Try to answer to following code-related questions within
						the time limit.
					</p>
					<p>
						Keep in mind that incorrect answers will penalize your
						score/time by ten seconds
					</p>

					<StyledLink to="/quiz">Start Quiz</StyledLink>
				</StyledDiv>
			</main>
		</>
	);
};

export default WelcomePage;

const StyledDiv = styled.div`
	border-radius: 8px;
	max-width: 800px;
	padding: 32px;
	font-size: 1.5rem;
	font-weight: 600;
	border: solid;
	margin: 32px auto 0;
`;

const StyledLink = styled(Link)`
	background-color: #218380;
	color: #ffffff;
	padding: 16px;
	border-radius: 8px;
`;
