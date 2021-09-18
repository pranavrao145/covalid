import React from "react";
import {
	DataGrid as MUIDataGrid,
	GridToolbarColumnsButton,
	GridToolbarContainer,
	GridToolbarExport,
	GridToolbarFilterButton,
} from "@mui/x-data-grid";
import "./DataGrid.css";

const DataGridToolbar = () => (
	<GridToolbarContainer>
		<GridToolbarColumnsButton />
		<GridToolbarFilterButton />
		<GridToolbarExport />
	</GridToolbarContainer>
);

type DataGridProps = React.ComponentProps<typeof MUIDataGrid>;
const DataGrid: React.FC<DataGridProps> = (props) => (
	<div className="flex h-full w-full">
		<div className="flex-grow">
			<MUIDataGrid
				disableSelectionOnClick
				autoHeight
				rowsPerPageOptions={[10, 25, 50, 100]}
				getCellClassName={() => "MuiDataGrid-cell"}
				components={{ Toolbar: DataGridToolbar }}
				{...props}
			/>
		</div>
	</div>
);

export default DataGrid;
