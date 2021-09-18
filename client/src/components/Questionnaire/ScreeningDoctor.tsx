import React from "react";
import { ScreeningPropsInterface } from "./ScreeningPropsInterface";

const ScreeningDoctor: React.FC<ScreeningPropsInterface> = (props: ScreeningPropsInterface) => {
	const { nextStep, prevStep } = props;

	return (
		<div className="px-16 lg:px-32 mb-24">
			<h1 className="text-4xl leading-10 font-bold mb-4">
				Has a doctor, health care provider, or public health unit told you that you should currently be isolating
				(staying at home)?
			</h1>
			<p className="mt-6 text-gray-700 font-medium text-center">
				This can be because of an outbreak or contact tracing.
			</p>
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
					className="mr-2 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
					onClick={nextStep}
				>
					No
				</button>
				<button
					type="button"
					className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
					onClick={nextStep}
				>
					Yes
				</button>
			</div>
		</div>
	);
};

export default ScreeningDoctor;
