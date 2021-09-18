import React, { useState } from "react";
import EntryLogTable from "../components/dashboard/tables/EntryLogTable";
import LogSlideOver from "../components/dashboard/LogSlideOver";

const entries = [
	{
		id: 1,
		name: "Jane Cooper",
		email: "jane.cooper@covalid.tech",
		groups: ["Ms. Smith's Class", "Mr. Jones's Class"],
		dateCreated: new Date("2021-01-17T09:44:10"),
		cleared: true,
		answers: {
			vaccinated_or_had_covid: false,
			recently_travelled: false,
			doctor_told_to_quarantine: false,
			has_symptoms: false,
			tested_positive: false,
		},
	},
	{
		id: 2,
		name: "James Cooper",
		email: "jane.cooper@covalid.tech",
		groups: ["Ms. Smith's Class", "Mr. Jones's Class"],
		dateCreated: new Date("2021-01-17T09:44:10"),
		cleared: true,
		answers: {
			vaccinated_or_had_covid: false,
			recently_travelled: false,
			doctor_told_to_quarantine: false,
			has_symptoms: false,
			tested_positive: false,
		},
	},
	{
		id: 3,
		name: "Adam Cooper",
		email: "jane.cooper@covalid.tech",
		groups: ["Ms. Smith's Class", "Mr. Jones's Class"],
		dateCreated: new Date("2021-01-17T09:44:10"),
		cleared: true,
		answers: {
			vaccinated_or_had_covid: false,
			recently_travelled: false,
			doctor_told_to_quarantine: false,
			has_symptoms: false,
			tested_positive: false,
		},
	},
	{
		id: 4,
		name: "Adam Blooper",
		email: "jane.cooper@covalid.tech",
		groups: ["Ms. Smith's Class", "Mr. Jones's Class"],
		dateCreated: new Date("2021-01-17T09:44:10"),
		cleared: true,
		answers: {
			vaccinated_or_had_covid: false,
			recently_travelled: false,
			doctor_told_to_quarantine: false,
			has_symptoms: false,
			tested_positive: false,
		},
	},
];

const EntryLogs: React.FC = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<div className="flex flex-col w-full h-[fit-content] justify-center mx-16 my-8 gap-y-8">
				<h1 className="text-2xl leading-8 font-semibold">Entry Logs</h1>
				<EntryLogTable entries={entries} toggleSlideOver={setOpen} />
			</div>
			<LogSlideOver log={entries[2]} open={open} setOpen={setOpen} />
		</>
	);
};
export default EntryLogs;
