import React from "react";
import {
	GridColDef,
	GridRenderCellParams,
	GridRenderEditCellParams,
	GridRowModel,
	GridRowParams,
} from "@mui/x-data-grid";
import { Autocomplete, TextField, Chip } from "@mui/material";
import Button from "../../ui/Button";
import DataGrid from "../../ui/DataGrid";
import "./CustomTable.css";

interface TableEntry {
	id: number;
	name: string;
	email: string;
	groups: string[];
}

const renderGroupsInput = ({ value }: GridRenderCellParams | GridRenderEditCellParams, editable: boolean) => (
	<Autocomplete
		multiple
		disabled={!editable}
		limitTags={3} // @ts-ignore
		defaultValue={value.split("|,")}
		renderInput={(params) => <TextField {...params} variant="standard" />}
		options={(value as string).split("|,")}
	/>
);

const UserListTable: React.FC<{
	entries: TableEntry[];
}> = ({ entries }) => {
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
				field: "email",
				headerName: "Email",
				type: "string",
				flex: 1.25,
			},
			{
				field: "groups",
				headerName: "Groups",
				flex: 2.5,
				editable: true,
				renderCell: (params) => renderGroupsInput(params, false),
				renderEditCell: (params) => renderGroupsInput(params, true),
			},
			{
				field: "actions",
				headerName: "Actions",
				type: "actions",
				flex: 1,
				getActions: (params: GridRowParams) => [
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
	}));

	return <DataGrid columns={columns} rows={rows} />;
};

export default UserListTable;
