import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { GridColDef, GridRowModel, GridRowParams } from "@mui/x-data-grid";
import DataGrid from "./components/DataGrid";
import Questionnaire from "./components/Questionnaire/Questionnaire";

const App: React.FC = () => {
	const columns = [
		{
			field: "id",
			hide: true,
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
			getActions: (params: GridRowParams) => [<button type="button">hi</button>],
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
		<ThemeProvider
			theme={createTheme({
				typography: {
					fontFamily:
						'Inter var, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
				},
			})}
		>
			<div className="h-[40vh] w-[60vw] m-16">
				<Questionnaire />
				<DataGrid columns={columns} rows={rows} />
			</div>
		</ThemeProvider>
	);
};

export default App;
