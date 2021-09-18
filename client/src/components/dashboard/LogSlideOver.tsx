import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { TableEntry } from "./tables/EntryLogTable";

const LogSlideOver: React.FC<{
	log: TableEntry;
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ log, open, setOpen }) => (
	<Transition.Root show={open} as={Fragment}>
		<Dialog as="div" className="fixed inset-0 overflow-hidden" onClose={setOpen}>
			<div className="absolute inset-0 overflow-hidden">
				<Dialog.Overlay className="absolute inset-0" />

				<div className="fixed inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
					<Transition.Child
						as={Fragment}
						enter="transform transition ease-in-out duration-500 sm:duration-700"
						enterFrom="translate-x-full"
						enterTo="translate-x-0"
						leave="transform transition ease-in-out duration-500 sm:duration-700"
						leaveFrom="translate-x-0"
						leaveTo="translate-x-full"
					>
						<div className="w-screen max-w-md">
							<div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
								<div className="px-4 py-6 sm:px-6">
									<div className="flex items-start justify-between">
										<h2 id="slide-over-heading" className="text-lg font-medium text-gray-900">
											{`Log Entry - ${new Intl.DateTimeFormat("en-US", {
												month: "short",
												year: "numeric",
												day: "numeric",
												hour: "numeric",
												minute: "numeric",
												second: "numeric",
											}).format(log.dateCreated)}`}
										</h2>
										<div className="ml-3 h-7 flex items-center">
											<button
												type="button"
												className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500"
												onClick={() => setOpen(false)}
											>
												<span className="sr-only">Close panel</span>
												<XIcon className="h-6 w-6" aria-hidden="true" />
											</button>
										</div>
									</div>
								</div>
								{/* Main */}
								<div>
									<div className="pb-1 sm:pb-6">
										<div className="mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6">
											<div className="sm:flex-1">
												<div>
													<div className="flex items-center">
														<h3 className="font-bold text-xl text-gray-900 sm:text-2xl">{log.name}</h3>
													</div>
													<p className="text-sm text-gray-500">{log.email}</p>
												</div>
												<div className="mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3">
													<button
														type="button"
														className="flex-shrink-0 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:flex-1"
													>
														Print results
													</button>
													<button
														type="button"
														className="flex-1 w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
													>
														Save as PDF
													</button>
												</div>
											</div>
										</div>
									</div>
									<div className="px-4 pt-5 pb-5 sm:px-0 sm:pt-0">
										<dl className="space-y-8 px-4 sm:px-6 sm:space-y-6">
											<div>
												<dt className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0">Bio</dt>
												<dd className="mt-1 text-sm text-gray-900 sm:col-span-2">
													<p>
														Enim feugiat ut ipsum, neque ut. Tristique mi id elementum praesent. Gravida in tempus
														feugiat netus enim aliquet a, quam scelerisque. Dictumst in convallis nec in bibendum aenean
														arcu.
													</p>
												</dd>
											</div>
										</dl>
									</div>
								</div>
							</div>
						</div>
					</Transition.Child>
				</div>
			</div>
		</Dialog>
	</Transition.Root>
);

export default LogSlideOver;
