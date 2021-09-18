import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import QuestionnairePage from "./pages/Questionnaire";

const App: React.FC = () => (
	<Router>
		<Switch>
			<Route path="/admin">
				<Admin />
			</Route>
			<Route path="*">
				<QuestionnairePage />
			</Route>
		</Switch>
	</Router>
);

export default App;
