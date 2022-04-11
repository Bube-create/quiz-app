import React from "react";
import styled from "styled-components";

const Notif = ({ correct }) => {
	if (correct === true) {
		return <StyledCorrect>Correct!</StyledCorrect>;
	} else if (correct === false) {
		return <StyledIncorrect>Incorrect!</StyledIncorrect>;
	}
	return "";
};

export default Notif;

const StyledCorrect = styled.p`
	color: green;
	font-size: 1.5rem;
	border-top: 1px solid black;
`;

const StyledIncorrect = styled.p`
	color: red;
	font-size: 1.5rem;
	border-top: 1px solid black;
`;
