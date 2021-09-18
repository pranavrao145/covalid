import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import Sidebar from "./components/dashboard/Sidebar";
import EntryLogs from "./pages/EntryLogs";
import ManageUsers from "./pages/ManageUsers";
import ManageGroups from "./pages/ManageGroups";

const App: React.FC = () => (
	<Router>
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
				</Switch>
			</div>
		</ThemeProvider>
	</Router>
);

export default App;
