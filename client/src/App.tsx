import React from "react";
import { GridColDef, GridRowModel, GridRowParams } from "@mui/x-data-grid";
import DataGrid from "./components/DataGrid";

const App: React.FC = () => {
	const columns = [
		{
			field: "id",
		},
		{
			field: "name",
			headerName: "Name",
			flex: 1,
		},
		{
			field: "groups",
			headerName: "Groups",
			flex: 1,
		},
		{
			field: "entryTime",
			headerName: "Entry Time",
			type: "dateTime",
			flex: 1,
		},
		{
			field: "cleared",
			headerName: "Cleared",
			type: "boolean",
			flex: 1,
		},
		{
			field: "actions",
			headerName: "Actions",
			type: "actions",
			flex: 2,
			getActions: (params: GridRowParams) => [<button>hi</button>],
		},
	] as GridColDef[];

	const rows: GridRowModel[] = [
		{
			id: 1,
			name: "Jane Cooper",
			groups: "Ms. Smith's Class, Mr. Jones's Class",
			entryTime: new Date("2021-01-17T09:44:10"),
			cleared: true,
		},
		{
			id: 2,
			name: "Jane Cooper",
			groups: "Ms. Smith's Class, Mr. Jones's Class",
			entryTime: new Date("2021-01-17T09:44:10"),
			cleared: true,
		},
		{
			id: 3,
			name: "Jane Cooper",
			groups: "Ms. Smith's Class, Mr. Jones's Class",
			entryTime: new Date("2021-01-17T09:44:10"),
			cleared: true,
		},
		{
			id: 4,
			name: "Jane Cooper",
			groups: "Ms. Smith's Class, Mr. Jones's Class",
			entryTime: new Date("2021-01-17T09:44:10"),
			cleared: true,
		},
	];

	return (
		<div className="flex h-96 w-[80vw] m-32">
			<div className="flex-grow">
				<DataGrid disableSelectionOnClick columns={columns} rows={rows} />
			</div>
		</div>
	);
};

export default App;
