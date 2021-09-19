import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Menu, Transition } from "@headlessui/react";
import { UserGroupIcon, DotsVerticalIcon } from "@heroicons/react/solid";

const randomBgColor = () =>
	["bg-pink-600", "bg-purple-600", "bg-yellow-500", "bg-orange-500", "bg-green-500", "bg-rose-600"][
		Math.floor(Math.random() * 5)
	];

const groups = [
	{ name: "Staff", href: "#", members: 16 },
	{ name: "Mx.j Johnson's Class", href: "#", members: 12 },
	{ name: "Ms. jSmith's Class", href: "#", members: 16 },
	{ name: "Mr.oo Jones's Class", href: "#", members: 8 },
	{ name: "Stmaff", href: "#", members: 16 },
	{ name: "Mxn. Johnson's Class", href: "#", members: 12 },
	{ name: "Ms. pSmith's Class", href: "#", members: 16 },
	{ name: " Mr. Jones's Class", href: "#", members: 8 },
	{ name: "Stnaff", href: "#", members: 16 },
	{ name: "Mx. Johnspon's Class", href: "#", members: 12 },
	{ name: "Ms. Smithj's Class", href: "#", members: 16 },
	{ name: "Mrn. Jones's Class", href: "#", members: 8 },
	{ name: "St-aff", href: "#", members: 16 },
	{ name: "Mxn Johnson's Class", href: "#", members: 12 },
	{ name: "Ms. nSmith's Class", href: "#", members: 16 },
	{ name: "Mr. Joones's Class", href: "#", members: 8 },
	{ name: "Stfaff", href: "#", members: 16 },
	{ name: "Mx. Johnsoghn's Class", href: "#", members: 12 },
	{ name: "Ms. Smith'98s Class", href: "#", members: 16 },
	{ name: "Mr. Jones's ghClass", href: "#", members: 8 },
].map((p) => ({
	...p,
	initials: p.name
		.split(" ")
		.map((w) => w[0]?.toUpperCase() || "")
		.join(""),
	bgColor: randomBgColor(),
}));

const Portal: React.FC<{ hoistTo: string }> = ({ children, hoistTo }) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;
	return createPortal(children, document.getElementById(hoistTo)!);
};

const ManageGroups: React.FC = () => {
	const [filter, setFilter] = useState("");
	return (
		<div className="flex flex-col w-auto h-[fit-content] justify-center mx-16 my-8 gap-y-8">
			<h1 className="text-2xl leading-8 font-semibold">Manage Groups</h1>
			<div className="flex flex-col gap-y-8">
				<div className="w-48 lg:w-96">
					{/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
					<label htmlFor="groups" className="block text-sm font-medium text-gray-700">
						Search groups
					</label>
					<div className="mt-1 relative rounded-md shadow-sm">
						<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
							<UserGroupIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
						</div>
						<input
							type="text"
							name="groups"
							id="groups"
							className="focus:ring-teal-500 focus:border-teal-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
							placeholder="My Fancy Group"
							value={filter}
							onChange={({ target: { value } }) => setFilter(value)}
						/>
					</div>
				</div>
				<ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{groups
						.filter((group) => group.name.toLowerCase().includes(filter.toLowerCase()))
						.map((group) => (
							<li id={group.name} key={group.name} className="col-span-1 flex shadow-sm rounded-md">
								<div
									className={`flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-l-md ${group.bgColor}`}
								>
									{group.initials}
								</div>
								<div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
									<div className="flex-1 px-4 py-2 text-sm truncate">
										<a href={group.href} className="text-gray-900 font-medium hover:text-gray-600">
											{group.name}
										</a>
										<p className="text-gray-500">{group.members} Members</p>
									</div>
									<Menu as="div" className="flex-shrink-0 pr-2">
										<Menu.Button
											type="button"
											className="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
										>
											<span className="sr-only">Open options</span>
											<DotsVerticalIcon className="w-5 h-5" aria-hidden="true" />
										</Menu.Button>
										<Portal hoistTo={group.name}>
											<Transition
												as={React.Fragment}
												enter="transition ease-out duration-100"
												enterFrom="transform opacity-0 scale-95"
												enterTo="transform opacity-100 scale-100"
												leave="transition ease-in duration-75"
												leaveFrom="transform opacity-100 scale-100"
												leaveTo="transform opacity-0 scale-95"
											>
												<Menu.Items className="mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
													<div className="py-1">
														<Menu.Item>
															{({ active }) => (
																// eslint-disable-next-line jsx-a11y/anchor-is-valid
																<a
																	href="#"
																	className={`${
																		active ? "bg-gray-100 text-gray-900" : "text-gray-700"
																	} block px-4 py-2 text-sm`}
																>
																	View members
																</a>
															)}
														</Menu.Item>
														<Menu.Item>
															{({ active }) => (
																<button
																	type="button"
																	className={`${
																		active ? "bg-gray-100 text-gray-900" : "text-gray-700"
																	} block px-4 py-2 text-sm w-full text-left text-red-600`}
																>
																	Delete
																</button>
															)}
														</Menu.Item>
													</div>
												</Menu.Items>
											</Transition>
										</Portal>
									</Menu>
								</div>
							</li>
						))}
				</ul>
			</div>
		</div>
	);
};

export default ManageGroups;
