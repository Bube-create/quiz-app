import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Heading = ({ time = null }) => {
	return (
		<StyledHeading>
			<Link to="/highscores">View Highscores</Link>
			<span>Time: {time}</span>
		</StyledHeading>
	);
};

export default Heading;

const StyledHeading = styled.header`
	display: flex;
	justify-content: space-between;
	background-color: #218380;
	color: #ffffff;
	padding: 16px 64px;
	font-size: 1.4rem;
`;
