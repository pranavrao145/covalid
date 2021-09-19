import React, { useState } from "react";
import { ScreeningStepsInterface } from "./ScreeningPropsInterface";
import ScreeningBegin from "./ScreeningBegin";
import ScreeningUserInfo from "./ScreeningUserInfo";
import ScreeningVaccination from "./ScreeningVaccination";
import ScreeningTravelQuarantine from "./ScreeningTravelQuarantine";
import ScreeningDoctor from "./ScreeningDoctor";
import ScreeningSymptoms from "./ScreeningSymptoms";
import ScreeningCovidTesting from "./ScreeningCovidTesting";
import ScreeningSteps from "./ScreeningSteps";
import ScreeningApproved from "./ScreeningApproved";

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

const Questionnaire: React.FC<ScreeningStepsInterface> = (props: ScreeningStepsInterface) => {
	const { step, nextStep, prevStep } = props;
	const [, setFormData] = useState(QuestionnaireData);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData((prevFormData) => ({
			...prevFormData,
			[e.target.id]: e.target.value,
		}));
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				{step === 1 && <ScreeningBegin nextStep={nextStep} />}
				{step === 2 && <ScreeningUserInfo prevStep={prevStep} nextStep={nextStep} onChange={onChange} />}
				{step === 3 && <ScreeningVaccination prevStep={prevStep} nextStep={nextStep} onChange={onChange} />}
				{step === 4 && <ScreeningTravelQuarantine prevStep={prevStep} nextStep={nextStep} onChange={onChange} />}
				{step === 5 && <ScreeningDoctor prevStep={prevStep} nextStep={nextStep} onChange={onChange} />}
				{step === 6 && <ScreeningSymptoms prevStep={prevStep} nextStep={nextStep} onChange={onChange} />}
				{step === 7 && (
					<ScreeningCovidTesting prevStep={prevStep} nextStep={nextStep} onChange={onChange} onSubmit={onSubmit} />
				)}
				{step === 8 && <ScreeningApproved />}
			</form>
			{step <= 7 && <ScreeningSteps step={step} />}
		</>
	);
};

export default Questionnaire;
