import React from "react";
import { ScreeningPropsInterface } from "./ScreeningPropsInterface";

const ScreeningCovidTesting: React.FC<ScreeningPropsInterface> = (props: ScreeningPropsInterface) => {
	const { prevStep } = props;

	return (
		<div className="px-16 lg:px-32 mb-24">
			<h1 className="text-4xl leading-10 font-bold mb-4">
				In the last 10 days, have you tested positive on a rapid antigen test or home-based self-testing kit?
			</h1>
			<p className="mt-6 text-gray-700 font-medium text-center">
				If you have since tested negative on a lab-based PCR test, select &ldquo;No.&rdquo;
			</p>
			<div className="flex items-center justify-center pt-6">
				<button
					type="button"
					className="mr-2 bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-300"
					onClick={prevStep}
				>
					Go Back
				</button>
				<button type="submit" className="mr-2 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
					No
				</button>
				<button type="submit" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
					Yes
				</button>
			</div>
		</div>
	);
};

export default ScreeningCovidTesting;
