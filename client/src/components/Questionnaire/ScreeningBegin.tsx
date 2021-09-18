import React from "react";
import { ExclamationIcon } from "@heroicons/react/solid";
import { ScreeningPropsInterface } from "./ScreeningPropsInterface";

const ScreeningBegin: React.FC<ScreeningPropsInterface> = (props: ScreeningPropsInterface) => {
	const { nextStep } = props;

	return (
		<div className="px-16 lg:px-32 mb-24">
			<h1 className="text-4xl leading-10 font-bold mb-4">Covalid COVID-19 Screening</h1>
			<div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
				<div className="flex">
					<div className="flex-shrink-0">
						<ExclamationIcon className="h-5 w-5 text-yellow-400" aria-hidden="true" />
					</div>
					<div className="ml-3">
						<p className="text-sm text-yellow-700 font-bold">
							You must stay home if you have COVID-19 symptoms or are waiting for test results after experiencing
							symptoms. symptoms.
							<br />
							<br />
							Everyone in your household (unless they are fully vaccinated) must also stay home until you get a negative
							COVID-19 test result, or you are cleared by public health, or you are diagnosed with another illness.
						</p>
					</div>
				</div>
			</div>
			<p className="mt-6 text-gray-700 font-medium">
				This screening cannot diagnose you. If you have medical questions, consult a health care provider or your local
				public health unit. Listen to the advice of your local public health unit first, as their advice overrules the
				advice in this screening.
			</p>
			<div className="flex items-center justify-center pt-6">
				<button
					type="button"
					className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
					onClick={nextStep}
				>
					Begin Screening
				</button>
			</div>
		</div>
	);
};

export default ScreeningBegin;
