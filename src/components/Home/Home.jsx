import React, { useState, useEffect } from 'react';
import Button from "@material-ui/core/Button";
import { DataGrid} from '@material-ui/data-grid';
import Paper from '@material-ui/core/Paper';
import { Link } from "react-router-dom";
import axios from 'axios'

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
          to={`Detail/${params.id}`}
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


const Home = () => {

    const [data, setData] = useState([]);
    const [update, setUpdate] = useState("no data");

    useEffect(() => {
      const fetchData = async () => {
        let readRows = [];
        const result = await axios(
          'http://localhost:8000/api/getItems',
        );
        result.data.logs.map((row) => {
          readRows.push({id: row._id, stime: row.stime, title: row.title});
        });

        setData(readRows);
        setUpdate("");
      };

      fetchData();
      
    });


    return (
        <Paper>
          <div style={{ height: 600, width: '100%' }}>
            {update}
            <DataGrid rows={data} columns={columns} pageSize={10}  />
          </div>
        </Paper>
    )
}

export default Home
