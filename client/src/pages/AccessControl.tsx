import React from "react";
import AccessControlTable from "../components/dashboard/tables/AccessControlTable";

const entries = [
	{
		id: 1,
		name: "Jane Cooper",
		email: "jane.cooper@covalid.tech",
		groups: ["Ms. Smith's Class", "Mr. Jones's Class"],
	},
	{
		id: 2,
		name: "James Cooper",
		email: "jane.cooper@covalid.tech",
		groups: ["Ms. Smith's Class", "Mr. Jones's Class"],
	},
	{
		id: 3,
		name: "Adam Cooper",
		email: "jane.cooper@covalid.tech",
		groups: ["Ms. Smith's Class", "Mr. Jones's Class"],
	},
	{
		id: 4,
		name: "Adam Blooper",
		email: "jane.cooper@covalid.tech",
		groups: ["Ms. Smith's Class", "Mr. Jones's Class", "M. Max's Class"],
	},
];

const AccessControl = () => (
	<div className="flex flex-col w-full h-[fit-content] justify-center mx-16 my-8 gap-y-8">
		<h1 className="text-2xl leading-8 font-semibold">Access Control</h1>
		<AccessControlTable entries={entries} />
	</div>
);

export default AccessControl;
