import React from "react";

const TopBar: React.FC = () => (
	<nav className="shadow bg-white flex items-center justify-center py-3">
		<img
			className="block h-8 w-auto"
			src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
			alt="Workflow"
		/>
		<h1 className="font-bold text-2xl ml-2">Covalid</h1>
	</nav>
);

export default TopBar;
