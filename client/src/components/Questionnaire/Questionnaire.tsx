import React, { useState } from "react";
import ScreeningBegin from "./ScreeningBegin";
import ScreeningUserInfo from "./ScreeningUserInfo";
import ScreeningVaccination from "./ScreeningVaccination";
import ScreeningTravelQuarantine from "./ScreeningTravelQuarantine";
import ScreeningDoctor from "./ScreeningDoctor";
import ScreeningSymptoms from "./ScreeningSymptoms";
import ScreeningCovidTesting from "./ScreeningCovidTesting";

const QuestionnaireData = {
	stuff: "",
};

const Questionnaire: React.FC = () => {
	const [formData, setFormData] = useState(QuestionnaireData);
	const [step, setStep] = useState<number>(1);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData((prevFormData) => ({
			...prevFormData,
			[e.target.id]: e.target.value,
		}));
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	const nextStep = () => {
		setStep((oldStep) => oldStep + 1);
	};

	const prevStep = () => {
		setStep((oldStep) => oldStep - 1);
	};

	return (
		<form onSubmit={onSubmit}>
			{step === 1 && <ScreeningBegin nextStep={nextStep} onChange={onChange} />}
			{step === 2 && <ScreeningUserInfo />}
			{step === 3 && <ScreeningVaccination />}
			{step === 4 && <ScreeningTravelQuarantine />}
			{step === 5 && <ScreeningDoctor />}
			{step === 6 && <ScreeningSymptoms />}
			{step === 7 && <ScreeningCovidTesting />}
		</form>
	);
};

export default Questionnaire;
