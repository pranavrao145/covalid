import React from "react";
import { DataGrid as MUIDataGrid } from "@mui/x-data-grid";
import "./DataGrid.css";

type DataGridProps = React.ComponentProps<typeof MUIDataGrid>;
const DataGrid: React.FC<DataGridProps> = (props) => <MUIDataGrid {...props} />;

export default DataGrid;
