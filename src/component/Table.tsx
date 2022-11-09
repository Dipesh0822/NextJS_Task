import { Container } from "@mui/material";
import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  CHECKBOX_SELECTION_ALLOWED,
  MAX_ROW_COUNT,
  PAGE_SIZE,
} from "../config/table.config";

function Table({ data, columns, isLoading, ...rest }) {
  return (
    <Container maxWidth="lg" sx={{ mt: 20 }}>
      <DataGrid
        autoHeight
        rows={data}
        rowCount={MAX_ROW_COUNT}
        checkboxSelection={CHECKBOX_SELECTION_ALLOWED}
        pageSize={PAGE_SIZE}
        disableSelectionOnClick
        columns={columns}
        paginationMode="server"
        getRowId={(row) => row["id"]}
        rowsPerPageOptions={[10, 25, 50]}
        pagination
        loading={isLoading}
        {...rest}
      />
    </Container>
  );
}

export default Table;
