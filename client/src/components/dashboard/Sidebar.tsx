import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { DocumentSearchIcon, UserCircleIcon, UserGroupIcon, TableIcon } from "@heroicons/react/solid";
import Logo from "../../Logo.svg";

const navigation = [
	{
		name: "Entry Logs",
		icon: DocumentSearchIcon,
		href: "/admin/logs",
	},
	{
		name: "Manage Users",
		icon: UserCircleIcon,
		href: "/admin/users",
	},
	{
		name: "Manage Groups",
		icon: UserGroupIcon,
		href: "/admin/groups",
	},
	{
		name: "Access Control",
		icon: TableIcon,
		href: "/admin/access",
	},
] as Array<any>;

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(" ");
}

// eslint-disable-next-line react/no-unused-prop-types
const Sidebar: React.FC = () => {
	const { pathname } = useLocation();
	return (
		<div className="flex flex-col w-64 xl:w-96 border-r border-gray-200 pt-5 bg-white overflow-y-auto">
			<div className="flex items-center flex-shrink-0 px-4 space-y-5">
				<img className="h-8 w-auto" src={Logo} alt="Workflow" />
			</div>
			<div className="mt-5 flex-grow flex flex-col">
				<nav className="flex-1 bg-white space-y-1" aria-label="Sidebar">
					{navigation.map((item) => (
						<Link
							key={item.name}
							to={item.href}
							className={classNames(
								item.href === pathname
									? "bg-teal-50 border-teal-600 text-teal-600"
									: "border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900",
								"group flex items-center px-3 py-2 text-sm font-medium border-l-4",
							)}
						>
							<item.icon
								className={classNames(
									item.href === pathname ? "text-teal-500" : "text-gray-400 group-hover:text-gray-500",
									"mr-3 flex-shrink-0 h-6 w-6",
								)}
								aria-hidden="true"
							/>
							{item.name}
						</Link>
					))}
				</nav>
			</div>
			<div className="flex-shrink-0 flex self-end w-full border-t border-gray-200 p-4">
				<a href="#" className="flex-shrink-0 w-full group block">
					<div className="flex items-center">
						<div>
							<img
								className="inline-block h-9 w-9 rounded-full"
								src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
								alt=""
							/>
						</div>
						<div className="ml-3">
							<p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">Tom Cook</p>
							<p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">Sign out</p>
						</div>
					</div>
				</a>
			</div>
		</div>
	);
};
export default Sidebar;
