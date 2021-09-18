import React, { useState } from "react";
import ScreeningBegin from "./ScreeningBegin";
import ScreeningUserInfo from "./ScreeningUserInfo";
import ScreeningVaccination from "./ScreeningVaccination";
import ScreeningTravelQuarantine from "./ScreeningTravelQuarantine";
import ScreeningDoctor from "./ScreeningDoctor";
import ScreeningSymptoms from "./ScreeningSymptoms";
import ScreeningCovidTesting from "./ScreeningCovidTesting";

const QuestionnaireData = {
	fullName: "",
	email: "",
	vaccinatedOrPositive: false,
	travelledOutside: false,
	doctorIsolating: false,
	feversOrChills: false,
	coughing: false,
	shortnessOfBreath: false,
	lossOfTasteSmell: false,
	muscleJointPain: false,
	extremeTiredness: false,
	noneOfTheAbove: false,
};

const Questionnaire: React.FC = () => {
	const [, setFormData] = useState(QuestionnaireData);
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
		<>
			<form onSubmit={onSubmit} className="bg-gray-100">
				{step === 1 && <ScreeningBegin nextStep={nextStep} />}
				{step === 2 && <ScreeningUserInfo prevStep={prevStep} nextStep={nextStep} onChange={onChange} />}
				{step === 3 && <ScreeningVaccination prevStep={prevStep} nextStep={nextStep} onChange={onChange} />}
				{step === 4 && <ScreeningTravelQuarantine prevStep={prevStep} nextStep={nextStep} onChange={onChange} />}
				{step === 5 && <ScreeningDoctor prevStep={prevStep} nextStep={nextStep} onChange={onChange} />}
				{step === 6 && <ScreeningSymptoms prevStep={prevStep} nextStep={nextStep} onChange={onChange} />}
				{step === 7 && (
					<ScreeningCovidTesting prevStep={prevStep} nextStep={nextStep} onChange={onChange} onSubmit={onSubmit} />
				)}
			</form>
		</>
	);
};

export default Questionnaire;
