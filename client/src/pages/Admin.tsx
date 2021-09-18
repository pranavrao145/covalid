import React from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import Sidebar from "../components/dashboard/Sidebar";
import EntryLogs from "./EntryLogs";
import ManageUsers from "./ManageUsers";
import ManageGroups from "./ManageGroups";
import AccessControl from "./AccessControl";

const Admin: React.FC = () => (
	<ThemeProvider
		theme={createTheme({
			typography: {
				fontFamily:
					'Inter var, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
			},
			palette: {
				primary: {
					main: "#0BA89A",
				},
			},
		})}
	>
		<div className="flex flex-row w-screen h-screen bg-gray-100">
			<Sidebar />
			<Switch>
				<Route path="/admin/logs">
					<EntryLogs />
				</Route>
				<Route path="/admin/users">
					<ManageUsers />
				</Route>
				<Route path="/admin/groups">
					<ManageGroups />
				</Route>
				<Route path="/admin/access">
					<AccessControl />
				</Route>
			</Switch>
		</div>
	</ThemeProvider>
);

export default Admin;
