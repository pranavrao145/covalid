import React from "react";
import { ScreeningPropsInterface } from "./ScreeningPropsInterface";

const ScreeningSymptoms: React.FC<ScreeningPropsInterface> = (props: ScreeningPropsInterface) => {
	const { nextStep, prevStep, onChange } = props;

	return (
		<div className="px-16 lg:px-32 mb-24">
			<h1 className="text-4xl leading-10 font-bold mb-4">Are you currently experiencing any of these symptoms?</h1>
			<p className="mt-6 text-gray-700 font-medium">
				Choose any/all that are new, worsening, and not related to other known causes or conditions you already have.
			</p>
			<fieldset className="space-y-5">
				<legend className="sr-only">Symptoms</legend>
				<div className="relative flex items-start">
					<div className="flex items-center h-5">
						<input
							onChange={onChange}
							id="feversOrChills"
							aria-describedby="feversOrChills-description"
							name="feversOrChills"
							type="checkbox"
							className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
						/>
					</div>
					<div className="ml-3 text-sm">
						<label htmlFor="feversOrChills" className="font-bold text-gray-700">
							Fever and/or chills
						</label>
						<p id="feversOrChills-description" className="text-gray-500">
							Temperature of 37.8 degrees Celsius/100 degrees Fahrenheit or higher
						</p>
					</div>
				</div>
				<div className="relative flex items-start">
					<div className="flex items-center h-5">
						<input
							onChange={onChange}
							id="coughing"
							aria-describedby="coughing-description"
							name="coughing"
							type="checkbox"
							className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
						/>
					</div>
					<div className="ml-3 text-sm">
						<label htmlFor="coughing" className="font-bold text-gray-700">
							Cough or barking cough (croup)
						</label>
						<p id="coughing-description" className="text-gray-500">
							Continuous, more than usual, making a whistling noise when breathing (not related to asthma,
							post-infectious reactive airways, COPD, or other known causes or conditions you already have)
						</p>
					</div>
				</div>
				<div className="relative flex items-start">
					<div className="flex items-center h-5">
						<input
							onChange={onChange}
							id="shortnessOfBreath"
							aria-describedby="shortnessOfBreath-description"
							name="shortnessOfBreath"
							type="checkbox"
							className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
						/>
					</div>
					<div className="ml-3 text-sm">
						<label htmlFor="shortnessOfBreath" className="font-bold text-gray-700">
							Shortness of breath
						</label>
						<p id="shortnessOfBreath-description" className="text-gray-500">
							Out of breath, unable to breathe deeply (not related to asthma or other known causes or conditions you
							already have)
						</p>
					</div>
				</div>
				<div className="relative flex items-start">
					<div className="flex items-center h-5">
						<input
							onChange={onChange}
							id="lossOfTasteSmell"
							aria-describedby="lossOfTasteSmell-description"
							name="lossOfTasteSmell"
							type="checkbox"
							className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
						/>
					</div>
					<div className="ml-3 text-sm">
						<label htmlFor="lossOfTasteSmell" className="font-bold text-gray-700">
							Decrease or loss of taste or smell
						</label>
						<p id="lossOfTasteSmell-description" className="text-gray-500">
							Not related to seasonal allergies, neurological disorders, or other known causes or conditions you already
							have
						</p>
					</div>
				</div>
				<div className="relative flex items-start">
					<div className="flex items-center h-5">
						<input
							onChange={onChange}
							id="muscleJointPain"
							aria-describedby="muscleJointPain-description"
							name="muscleJointPain"
							type="checkbox"
							className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
						/>
					</div>
					<div className="ml-3 text-sm">
						<label htmlFor="muscleJointPain" className="font-bold text-gray-700">
							Muscle aches/joint pain
						</label>
						<p id="muscleJointPain-description" className="text-gray-500">
							Unusual, long-lasting (not related to getting a COVID-19 vaccine in the last 48 hours, a sudden injury,
							fibromyalgia, or other known causes or conditions you already have)
						</p>
					</div>
				</div>
				<div className="relative flex items-start">
					<div className="flex items-center h-5">
						<input
							onChange={onChange}
							id="extremeTiredness"
							aria-describedby="extremeTiredness-description"
							name="extremeTiredness"
							type="checkbox"
							className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
						/>
					</div>
					<div className="ml-3 text-sm">
						<label htmlFor="extremeTiredness" className="font-bold text-gray-700">
							Extreme tiredness
						</label>
						<p id="extremeTiredness-description" className="text-gray-500">
							Unusual, fatigue, lack of energy (not related to getting a COVID-19 vaccine in the last 48 hours,
							depression, insomnia, thyroid dysfunction, or other known causes or conditions you already have)
						</p>
					</div>
				</div>
				<div className="relative flex items-start">
					<div className="flex items-center h-5">
						<input
							onChange={onChange}
							id="noneOfTheAbove"
							name="noneOfTheAbove"
							type="checkbox"
							className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
						/>
					</div>
					<div className="ml-3 text-sm">
						<label htmlFor="noneOfTheAbove" className="font-bold text-gray-700">
							None of the above
						</label>
					</div>
				</div>
			</fieldset>
			<div className="flex items-center justify-center pt-6">
				<button
					type="button"
					className="mr-2 bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-300"
					onClick={prevStep}
				>
					Go Back
				</button>
				<button
					type="button"
					className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
					onClick={nextStep}
				>
					Continue
				</button>
			</div>
		</div>
	);
};

export default ScreeningSymptoms;
