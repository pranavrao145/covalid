import React from "react";
import EntryLogTable from "../components/dashboard/tables/EntryLogTable";

const entries = [
	{
		id: 1,
		name: "Jane Cooper",
		groups: ["Ms. Smith's Class", "Mr. Jones's Class"],
		dateCreated: new Date("2021-01-17T09:44:10"),
		cleared: true,
	},
	{
		id: 2,
		name: "James Cooper",
		groups: ["Ms. Smith's Class", "Mr. Jones's Class"],
		dateCreated: new Date("2021-01-17T09:44:10"),
		cleared: true,
	},
	{
		id: 3,
		name: "Adam Cooper",
		groups: ["Ms. Smith's Class", "Mr. Jones's Class"],
		dateCreated: new Date("2021-01-17T09:44:10"),
		cleared: true,
	},
	{
		id: 4,
		name: "Adam Blooper",
		groups: ["Ms. Smith's Class", "Mr. Jones's Class"],
		dateCreated: new Date("2021-01-17T09:44:10"),
		cleared: true,
	},
];

const EntryLogs = () => (
	<div className="flex flex-col w-full h-[fit-content] justify-center mx-16 my-8 gap-y-8">
		<h1 className="text-2xl leading-8 font-semibold">Entry Logs</h1>
		<EntryLogTable entries={entries} />
	</div>
);

export default EntryLogs;
