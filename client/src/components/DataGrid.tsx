import React from "react";
import { DataGrid as MUIDataGrid } from "@mui/x-data-grid";
import "./DataGrid.css";

type DataGridProps = React.ComponentProps<typeof MUIDataGrid>;
const DataGrid: React.FC<DataGridProps> = (props) => (
	<div className="flex h-full w-full">
		<div className="flex-grow">
			<MUIDataGrid
				disableSelectionOnClick
				rowsPerPageOptions={[10, 25, 50, 100]}
				getCellClassName={() => "MuiDataGrid-cell"}
				{...props}
			/>
		</div>
	</div>
);

export default DataGrid;
