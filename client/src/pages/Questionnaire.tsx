import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import Questionnaire from "../components/Questionnaire/Questionnaire";
import TopBar from "../components/TopBar";

const QuestionnairePage: React.FC = () => (
	<ThemeProvider
		theme={createTheme({
			typography: {
				fontFamily:
					'Inter var, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
			},
		})}
	>
		<>
			<TopBar />
			<div className="h-screen w-full flex flex-col items-center justify-center bg-gray-100">
				<Questionnaire />
			</div>
		</>
	</ThemeProvider>
);

export default QuestionnairePage;
