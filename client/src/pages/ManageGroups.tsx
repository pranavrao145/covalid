import React from "react";
import { UserGroupIcon } from "@heroicons/react/solid";

const ManageGroups = () => (
	<div className="flex flex-col w-full h-[fit-content] justify-center mx-16 my-8 gap-y-8">
		<h1 className="text-2xl leading-8 font-semibold">Manage Groups</h1>
		<div className="flex flex-col gap-y-8">
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
					className="shadow-sm focus:ring-teal-500 focus:border-teal-500 block w-full sm:text-sm border-gray-300 rounded-md"
					placeholder="My Fancy Group"
				/>
			</div>
		</div>
	</div>
);

export default ManageGroups;
