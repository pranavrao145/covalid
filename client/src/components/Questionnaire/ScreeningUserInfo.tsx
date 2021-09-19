import React, { MouseEventHandler } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { ScreeningPropsInterface } from "./ScreeningPropsInterface";

initializeApp({
	apiKey: "...",
	authDomain: "...",
	projectId: "...",
	storageBucket: "...",
	messagingSenderId: "...",
	appId: "...",
	measurementId: "...",
});

const ScreeningUserInfo: React.FC<ScreeningPropsInterface> = (props: ScreeningPropsInterface) => {
	const { nextStep, prevStep, onChange } = props;

	const provider = new GoogleAuthProvider();
	provider.addScope("https://www.googleapis.com/auth/userinfo.profile");

	const auth = getAuth();

	const onClick: MouseEventHandler<HTMLButtonElement> = () => {
		signInWithPopup(auth, provider).then(({ user }) => {
			// API stuff
			user.email;
			user.displayName;
		});
	};

	return (
		<div className="px-16 lg:px-32 w-full mb-24">
			<h1 className="text-4xl leading-10 font-bold mb-4">Let&apos;s get to know you.</h1>
			<div>
				<div className="mb-8">
					<label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
						Full Name
						<div className="mt-1">
							<input
								onChange={onChange}
								type="text"
								name="fullName"
								id="fullName"
								className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
								placeholder="John Smith"
								aria-describedby="full-name-description"
							/>
						</div>
					</label>
					<p className="mt-2 text-sm text-gray-500" id="full-name-description">
						So that we know you are.
					</p>
				</div>
				<div>
					<label htmlFor="email" className="block text-sm font-medium text-gray-700">
						Email
						<div className="mt-1">
							<input
								onChange={onChange}
								type="text"
								name="email"
								id="email"
								className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
								placeholder="example@example.com"
								aria-describedby="email-description"
							/>
						</div>
					</label>
					<p className="mt-2 text-sm text-gray-500" id="email-description">
						So that we can reach out if we need to.
					</p>
				</div>
			</div>
			<div className="mt-6">
				<div className="relative">
					<div className="absolute inset-0 flex items-center">
						<div className="w-full border-t border-gray-300" />
					</div>
					<div className="relative flex justify-center text-sm">
						<span className="px-2 bg-gray-100 text-gray-500">Or continue with</span>
					</div>
				</div>

				<div className="mt-6 flex flex-col sm:flex-row items-center justify-center">
					<button type="button" onClick={onClick}>
						<div className="cursor-pointer w-48 mr-2 inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
							<span className="sr-only">Sign in with Facebook</span>
							<svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
								<path
									fillRule="evenodd"
									d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
					</button>

					<div>
						<div className="cursor-pointer w-48 mr-2 inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
							<span className="sr-only">Sign in with Twitter</span>
							<svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
								<path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
							</svg>
						</div>
					</div>

					<div>
						<div className="cursor-pointer w-48 mr-2 inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
							<span className="sr-only">Sign in with GitHub</span>
							<svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
								<path
									fillRule="evenodd"
									d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
			<p className="mt-6 text-gray-700 font-medium text-center">
				We recommend using one of these third-party providers for faster logins and better security.
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
					className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
					onClick={nextStep}
				>
					Continue
				</button>
			</div>
		</div>
	);
};

export default ScreeningUserInfo;
