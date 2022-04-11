import React from "react";
import Heading from "./components/Heading";
import WelcomePage from "./components/WelcomePage";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Highscores from "./components/HighScores";
import Quiz from "./components/Quiz";
import QuizForm from "./components/QuizForm";
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<WelcomePage />} exact />
				<Route path="/highscores" element={<Highscores />} />
				<Route path="/quiz" element={<Quiz />} />
				<Route path="/quiz-form" element={<QuizForm />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
