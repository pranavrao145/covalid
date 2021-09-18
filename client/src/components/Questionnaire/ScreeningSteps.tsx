import React from "react";
import { CheckIcon } from "@heroicons/react/solid";
import { ScreeningStepsInterface } from "./ScreeningPropsInterface";

const ScreeningSteps: React.FC<ScreeningStepsInterface> = (props: ScreeningStepsInterface) => {
	const { step, nextStep, prevStep } = props;

	return (
		<nav aria-label="Progress">
			<ol className="flex items-center">
				<li className="pr-8 sm:pr-20 relative">
					{step === 1 && (
						<>
							<div className="absolute inset-0 flex items-center" aria-hidden="true">
								<div className="h-0.5 w-full bg-gray-200" />
							</div>
							<div
								className="relative w-8 h-8 flex items-center justify-center bg-white border-2 border-green-600 rounded-full"
								aria-current="step"
							>
								<span className="h-2.5 w-2.5 bg-green-600 rounded-full" aria-hidden="true" />
							</div>
						</>
					)}
					{step > 1 && (
						<>
							<div className="absolute inset-0 flex items-center" aria-hidden="true">
								<div className="h-0.5 w-full bg-green-600" />
							</div>
							<div className="relative w-8 h-8 flex items-center justify-center bg-green-600 rounded-full hover:bg-green-900">
								<CheckIcon className="w-5 h-5 text-white" aria-hidden="true" />
							</div>
						</>
					)}
				</li>
				<li className="pr-8 sm:pr-20 relative">
					{step === 2 && (
						<>
							<div className="absolute inset-0 flex items-center" aria-hidden="true">
								<div className="h-0.5 w-full bg-gray-200" />
							</div>
							<div
								className="relative w-8 h-8 flex items-center justify-center bg-white border-2 border-green-600 rounded-full"
								aria-current="step"
							>
								<span className="h-2.5 w-2.5 bg-green-600 rounded-full" aria-hidden="true" />
							</div>
						</>
					)}
					{step > 2 && (
						<>
							<div className="absolute inset-0 flex items-center" aria-hidden="true">
								<div className="h-0.5 w-full bg-green-600" />
							</div>
							<div className="relative w-8 h-8 flex items-center justify-center bg-green-600 rounded-full hover:bg-green-900">
								<CheckIcon className="w-5 h-5 text-white" aria-hidden="true" />
							</div>
						</>
					)}
					{step < 2 && (
						<>
							<div className="absolute inset-0 flex items-center" aria-hidden="true">
								<div className="h-0.5 w-full bg-gray-200" />
							</div>
							<div className="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400">
								<span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" aria-hidden="true" />
							</div>
						</>
					)}
				</li>
				<li className="pr-8 sm:pr-20 relative">
					{step === 3 && (
						<>
							<div className="absolute inset-0 flex items-center" aria-hidden="true">
								<div className="h-0.5 w-full bg-gray-200" />
							</div>
							<div
								className="relative w-8 h-8 flex items-center justify-center bg-white border-2 border-green-600 rounded-full"
								aria-current="step"
							>
								<span className="h-2.5 w-2.5 bg-green-600 rounded-full" aria-hidden="true" />
							</div>
						</>
					)}
					{step > 3 && (
						<>
							<div className="absolute inset-0 flex items-center" aria-hidden="true">
								<div className="h-0.5 w-full bg-green-600" />
							</div>
							<div className="relative w-8 h-8 flex items-center justify-center bg-green-600 rounded-full hover:bg-green-900">
								<CheckIcon className="w-5 h-5 text-white" aria-hidden="true" />
							</div>
						</>
					)}
					{step < 3 && (
						<>
							<div className="absolute inset-0 flex items-center" aria-hidden="true">
								<div className="h-0.5 w-full bg-gray-200" />
							</div>
							<div className="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400">
								<span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" aria-hidden="true" />
							</div>
						</>
					)}
				</li>
				<li className="pr-8 sm:pr-20 relative">
					{step === 4 && (
						<>
							<div className="absolute inset-0 flex items-center" aria-hidden="true">
								<div className="h-0.5 w-full bg-gray-200" />
							</div>
							<div
								className="relative w-8 h-8 flex items-center justify-center bg-white border-2 border-green-600 rounded-full"
								aria-current="step"
							>
								<span className="h-2.5 w-2.5 bg-green-600 rounded-full" aria-hidden="true" />
							</div>
						</>
					)}
					{step > 4 && (
						<>
							<div className="absolute inset-0 flex items-center" aria-hidden="true">
								<div className="h-0.5 w-full bg-green-600" />
							</div>
							<div className="relative w-8 h-8 flex items-center justify-center bg-green-600 rounded-full hover:bg-green-900">
								<CheckIcon className="w-5 h-5 text-white" aria-hidden="true" />
							</div>
						</>
					)}
					{step < 4 && (
						<>
							<div className="absolute inset-0 flex items-center" aria-hidden="true">
								<div className="h-0.5 w-full bg-gray-200" />
							</div>
							<div className="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400">
								<span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" aria-hidden="true" />
							</div>
						</>
					)}
				</li>
				<li className="pr-8 sm:pr-20 relative">
					{step === 5 && (
						<>
							<div className="absolute inset-0 flex items-center" aria-hidden="true">
								<div className="h-0.5 w-full bg-gray-200" />
							</div>
							<div
								className="relative w-8 h-8 flex items-center justify-center bg-white border-2 border-green-600 rounded-full"
								aria-current="step"
							>
								<span className="h-2.5 w-2.5 bg-green-600 rounded-full" aria-hidden="true" />
							</div>
						</>
					)}
					{step > 5 && (
						<>
							<div className="absolute inset-0 flex items-center" aria-hidden="true">
								<div className="h-0.5 w-full bg-green-600" />
							</div>
							<div className="relative w-8 h-8 flex items-center justify-center bg-green-600 rounded-full hover:bg-green-900">
								<CheckIcon className="w-5 h-5 text-white" aria-hidden="true" />
							</div>
						</>
					)}
					{step < 5 && (
						<>
							<div className="absolute inset-0 flex items-center" aria-hidden="true">
								<div className="h-0.5 w-full bg-gray-200" />
							</div>
							<div className="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400">
								<span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" aria-hidden="true" />
							</div>
						</>
					)}
				</li>
				<li className="pr-8 sm:pr-20 relative">
					{step === 6 && (
						<>
							<div className="absolute inset-0 flex items-center" aria-hidden="true">
								<div className="h-0.5 w-full bg-gray-200" />
							</div>
							<div
								className="relative w-8 h-8 flex items-center justify-center bg-white border-2 border-green-600 rounded-full"
								aria-current="step"
							>
								<span className="h-2.5 w-2.5 bg-green-600 rounded-full" aria-hidden="true" />
							</div>
						</>
					)}
					{step > 6 && (
						<>
							<div className="absolute inset-0 flex items-center" aria-hidden="true">
								<div className="h-0.5 w-full bg-green-600" />
							</div>
							<div className="relative w-8 h-8 flex items-center justify-center bg-green-600 rounded-full hover:bg-green-900">
								<CheckIcon className="w-5 h-5 text-white" aria-hidden="true" />
							</div>
						</>
					)}
					{step < 6 && (
						<>
							<div className="absolute inset-0 flex items-center" aria-hidden="true">
								<div className="h-0.5 w-full bg-gray-200" />
							</div>
							<div className="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400">
								<span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" aria-hidden="true" />
							</div>
						</>
					)}
				</li>
				<li className="relative">
					{step === 7 && (
						<>
							<div className="absolute inset-0 flex items-center" aria-hidden="true">
								<div className="h-0.5 w-full bg-gray-200" />
							</div>
							<div
								className="relative w-8 h-8 flex items-center justify-center bg-white border-2 border-green-600 rounded-full"
								aria-current="step"
							>
								<span className="h-2.5 w-2.5 bg-green-600 rounded-full" aria-hidden="true" />
							</div>
						</>
					)}
					{step > 7 && (
						<>
							<div className="absolute inset-0 flex items-center" aria-hidden="true">
								<div className="h-0.5 w-full bg-green-600" />
							</div>
							<div className="relative w-8 h-8 flex items-center justify-center bg-green-600 rounded-full hover:bg-green-900">
								<CheckIcon className="w-5 h-5 text-white" aria-hidden="true" />
							</div>
						</>
					)}
					{step < 7 && (
						<>
							<div className="absolute inset-0 flex items-center" aria-hidden="true">
								<div className="h-0.5 w-full bg-gray-200" />
							</div>
							<div className="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400">
								<span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" aria-hidden="true" />
							</div>
						</>
					)}
				</li>
			</ol>
		</nav>
	);
};

export default ScreeningSteps;
