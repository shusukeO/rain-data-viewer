import React from 'react';
import Button from "@material-ui/core/Button";
import { DataGrid, GridColDef,
  GridApi,
  GridCellValue } from '@material-ui/data-grid';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";

const columns = [
  {
    field: "",
    headerName: "詳細",
    sortable: false,
    width: 100,
    disableClickEventBubbling: true,
    renderCell: (params) => (
      <strong>
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
          component={Link}
          to={`Detail?id=${params.id}`}
        >
          Open
        </Button>
      </strong>
      )
  },
  { field: 'id', headerName: 'ID', width: 70 },

  { field: 'stime', headerName: 'タイムスタンプ', width: 250 },
  { field: 'title', headerName: 'タイトル', width: 250, sortable: false, },

];

const rows = [
  { id: 1, stime: '1621739240165', title: '30.2'},
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];


const Home = () => {

    return (
        <Paper>
          <div style={{ height: 600, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} pageSize={10}  />
          </div>
        </Paper>
    )
}

export default Home
