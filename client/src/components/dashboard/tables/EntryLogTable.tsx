import React from "react";
import {
	GridColDef,
	GridRenderCellParams,
	GridRenderEditCellParams,
	GridRowModel,
	GridRowParams,
} from "@mui/x-data-grid";
import { Autocomplete, TextField } from "@mui/material";
import Badge from "../../ui/Badge";
import Button from "../../ui/Button";
import DataGrid from "../../ui/DataGrid";
import "./CustomTable.css";

export interface TableEntry {
	id: number;
	name: string;
	email: string;
	groups: string[];
	dateCreated: Date;
	cleared: boolean;
	answers: {
		vaccinated_or_had_covid: boolean;
		recently_travelled: boolean;
		doctor_told_to_quarantine: boolean;
		has_symptoms: boolean;
		tested_positive: boolean;
	};
}

const renderClearedBadge = ({ value }: { value: boolean }) => (
	<Badge className={value ? "" : "bg-rose-100 text-rose-800"}>{value ? "Yes" : "No"}</Badge>
);

const renderGroupsInput = ({ value }: GridRenderCellParams | GridRenderEditCellParams, editable: boolean) => (
	<Autocomplete
		multiple
		disabled={!editable}
		limitTags={1} // @ts-ignore
		defaultValue={value.split("|,")}
		renderInput={(params) => <TextField {...params} variant="standard" />}
		options={(value as string).split("|,")}
	/>
);

const EntryLogTable: React.FC<{
	entries: TableEntry[];
	toggleSlideOver: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ entries, toggleSlideOver }) => {
	const columns = (
		[
			{
				field: "id",
				hide: true,
				sortable: false,
				filterable: false,
			},
			{
				field: "name",
				headerName: "Name",
				flex: 1,
			},
			{
				field: "groups",
				headerName: "Groups",
				flex: 2,
				editable: true,
				renderCell: (params) => renderGroupsInput(params, false),
				renderEditCell: (params) => renderGroupsInput(params, true),
			},
			{
				field: "entryTime",
				headerName: "Entry Time",
				type: "dateTime",
				flex: 1.25,
			},
			{
				field: "cleared",
				headerName: "Cleared",
				type: "boolean",
				flex: 1,
				renderCell: renderClearedBadge,
			},
			{
				field: "actions",
				headerName: "Actions",
				type: "actions",
				flex: 2,
				getActions: () => [
					<Button onClick={() => toggleSlideOver(true)}>View full log</Button>,
					<Button className="bg-orange-600 hover:bg-orange-700">Trace contacts</Button>,
				],
				align: "center",
				headerAlign: "center",
			},
		] as GridColDef[]
	).map((c) => ({
		align: "left",
		headerAlign: "left",
		...c,
	})) as GridColDef[];

	const rows: GridRowModel[] = entries.map((entry) => ({
		...entry,
		groups: entry.groups.join("|,"),
		entryTime: entry.dateCreated,
	}));

	return <DataGrid columns={columns} rows={rows} />;
};

export default EntryLogTable;
