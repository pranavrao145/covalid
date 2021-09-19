import React from "react";
import { CheckCircleIcon } from "@heroicons/react/solid";

const ScreeningApproved: React.FC = () => {
	const currentDate = new Date().toDateString();
	const timeStamps = [new Date().toTimeString(), new Date().toTimeString()];

	return (
		<div className="px-16 lg:px-32 mb-24 bg-green-600 text-white">
			<h1 className="text-4xl leading-10 font-bold mb-2 text-center">You&apos;re good to go!</h1>
			<div className="flex items-center justify-center pt-6">
				<CheckCircleIcon className="h-24 w-24 text-white" aria-hidden="true" />
			</div>
			<p className="mt-6 text-lg font-medium text-center">{currentDate}</p>
			<p className="mt-6 text-lg font-medium text-center">
				From {timeStamps[0]} to {timeStamps[1]}
			</p>
		</div>
	);
};

export default ScreeningApproved;
