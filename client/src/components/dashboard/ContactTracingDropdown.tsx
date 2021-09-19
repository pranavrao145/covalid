import React, { Dispatch, Fragment, SetStateAction } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

const timeframeOptions = ["1 day", "7 days", "14 days", "30 days"] as const;

const classNames = (...classes: string[]) => classes.filter(Boolean).join(" ");

const ContactTracingDropdown: React.FC<{
	tracingTimeframe: string;
	setTracingTimeframe: Dispatch<SetStateAction<string>>;
}> = ({ tracingTimeframe, setTracingTimeframe }) => (
	<Listbox value={tracingTimeframe} onChange={setTracingTimeframe}>
		{({ open }) => (
			<div className="mt-1 relative">
				<Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 sm:text-sm">
					<span className="block truncate">{tracingTimeframe}</span>
					<span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
						<SelectorIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
					</span>
				</Listbox.Button>

				<Transition
					show={open}
					as={Fragment}
					leave="transition ease-in duration-100"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
						{timeframeOptions.map((option) => (
							<Listbox.Option
								key={option}
								className={({ active }) =>
									classNames(
										active ? "text-white bg-teal-600" : "text-gray-900",
										"cursor-default select-none relative py-2 pl-3 pr-9",
									)
								}
								value={option}
							>
								{({ selected, active }) => (
									<>
										<span className={classNames(selected ? "font-semibold" : "font-normal", "block truncate")}>
											{option}
										</span>

										{selected ? (
											<span
												className={classNames(
													active ? "text-white" : "text-teal-600",
													"absolute inset-y-0 right-0 flex items-center pr-4",
												)}
											>
												<CheckIcon className="h-5 w-5" aria-hidden="true" />
											</span>
										) : null}
									</>
								)}
							</Listbox.Option>
						))}
					</Listbox.Options>
				</Transition>
			</div>
		)}
	</Listbox>
);

export default ContactTracingDropdown;
