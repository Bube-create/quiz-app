import React from "react";
import styled from "styled-components";
import Notif from "./Notif";

const Question = ({ question, questionHandler, correct }) => {
	return (
		<QuestionCard>
			<StyledH2>{question.questionText}</StyledH2>
			<StyledUl>
				{question.options.map((option) => (
					<li onClick={questionHandler}>{option}</li>
				))}
			</StyledUl>
			<Notif correct={correct} />
		</QuestionCard>
	);
};

export default Question;

const QuestionCard = styled.div`
max-width: 700px;
margin: 64px auto 0 ;
border: solid;
border-radius 8px;
padding: 32px;
`;

const StyledH2 = styled.h2`
	font-size: 1.8rem;
	font-weight: 800;
`;

const StyledUl = styled.ul`
	margin: 0;
	padding: 0;
	list-style-type: none;

	li {
		border: solid;
		padding: 16px;
		background-color: #218380;
		color: #ffffff;
		border-radius: 16px;
		font-size: 1.2rem;
	}
`;
