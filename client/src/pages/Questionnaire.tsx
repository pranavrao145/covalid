import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import Questionnaire from "../components/Questionnaire/Questionnaire";
import TopBar from "../components/TopBar";

const QuestionnairePage: React.FC = () => {
	const [step, setStep] = useState<number>(1);

	const nextStep = () => {
		setStep((oldStep) => oldStep + 1);
	};

	const prevStep = () => {
		setStep((oldStep) => oldStep - 1);
	};

	return (
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
				<div
					className={
						step <= 7
							? "h-screen w-full flex flex-col items-center justify-center bg-gray-100"
							: "h-screen w-full flex flex-col items-center justify-center bg-green-600"
					}
				>
					<Questionnaire step={step} nextStep={nextStep} prevStep={prevStep} />
				</div>
			</>
		</ThemeProvider>
	);
};

export default QuestionnairePage;
