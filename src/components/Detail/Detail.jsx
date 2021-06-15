import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import LineChart from "./LineChart";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Detail = () => {
  const classes = useStyles();

  const { id } = useParams();
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");

  const history = useHistory();

  const updateTitle = () => {
    axios
      .post(`http://localhost:8000/api/write/${id}`, {
        title: title,
      })
      .then(function (response) {
        console.log(response.data);
      });
    history.goBack();
  };

  const deleteItem = () => {
    axios.post(`http://localhost:8000/api/delete/${id}`).then((res) => {
      console.log(res.data);
    });
    history.goBack();
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`http://localhost:8000/api/getItem/${id}`);
      setData(result.data.logs[0]);
      setTitle(data.title);
    };

    fetchData();
  }, [data.title, id]);

  return (
    <Paper>
      <Container component="main">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            {id}
          </Typography>
          {/* <form className={classes.form} noValidate> */}
          <Grid container>
            <Grid item xs>
              <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                id="title"
                label="title"
                name="title"
                autoFocus
                value={title || ""}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Grid>
            <Grid item>　</Grid>
            <Grid item>
              <Button
                onClick={updateTitle}
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Upadate
              </Button>
            </Grid>
            <Grid item>　</Grid>
            <Grid item>
              <Button
                onClick={deleteItem}
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
              >
                Delete
              </Button>
            </Grid>
          </Grid>
          {/* </form> */}
          <Typography component="h1" variant="subtitle1">
            stime: {data.stime}
          </Typography>

          <LineChart acceleration={data.acceleration || null} />
        </div>
      </Container>
    </Paper>
  );
};

export default Detail;
