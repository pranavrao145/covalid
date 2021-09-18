import React, { useState } from "react";
import EntryLogTable from "../components/dashboard/tables/EntryLogTable";
import LogSlideOver from "../components/dashboard/LogSlideOver";

const questionMapping = {
	vaccinated_or_had_covid: "Do any of the following apply to you?",
	recently_travelled:
		"In the last 14 days, have you travelled outside of Canada and been told to quarantine (per the federal quarantine requirements)?",
	doctor_told_to_quarantine:
		"Has a doctor, health care provider, or public health unit told you that you should currently be isolating (staying at home)?",
	has_symptoms: "Are you currently experiencing any of these symptoms?",
	tested_positive:
		"In the last 10 days, have you tested positive on a rapid antigen test or home-based self-testing kit?",
};

const entries = [
	{
		id: 1,
		name: "Jane Cooper",
		email: "jane.cooper@covalid.tech",
		groups: ["Ms. Smith's Class", "Mr. Jones's Class"],
		dateCreated: new Date("2021-01-17T09:44:10"),
		cleared: true,
	},
	{
		id: 2,
		name: "James Cooper",
		email: "jane.cooper@covalid.tech",
		groups: ["Ms. Smith's Class", "Mr. Jones's Class"],
		dateCreated: new Date("2021-01-17T09:44:10"),
		cleared: true,
	},
	{
		id: 3,
		name: "Adam Cooper",
		email: "jane.cooper@covalid.tech",
		groups: ["Ms. Smith's Class", "Mr. Jones's Class"],
		dateCreated: new Date("2021-01-17T09:44:10"),
		cleared: true,
	},
	{
		id: 4,
		name: "Adam Blooper",
		email: "jane.cooper@covalid.tech",
		groups: ["Ms. Smith's Class", "Mr. Jones's Class"],
		dateCreated: new Date("2021-01-17T09:44:10"),
		cleared: true,
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
