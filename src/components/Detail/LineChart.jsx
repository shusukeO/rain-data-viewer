import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = (parms) => {
  let mylabels;
  if (parms.acceleration) {
    let readRows = [];
    parms.acceleration.map((item) => {
      return readRows.push(item.id);
    });
    mylabels = readRows;
  }
  let dataX;
  if (parms.acceleration) {
    let readRows = [];
    parms.acceleration.forEach((item) => {
      readRows.push(item.x);
    });
    dataX = readRows;
  }
  let dataY;
  if (parms.acceleration) {
    let readRows = [];
    parms.acceleration.forEach((item) => {
      readRows.push(item.y);
    });
    dataY = readRows;
  }
  let dataZ;
  if (parms.acceleration) {
    let readRows = [];
    parms.acceleration.forEach((item) => {
      readRows.push(item.z);
    });
    dataZ = readRows;
  }

  const data = {
    labels: mylabels,
    datasets: [
      {
        label: "x",
        data: dataX,
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        label: "y",
        data: dataY,
        fill: false,
        backgroundColor: "rgb(99, 255, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
      {
        label: "z",
        data: dataZ,
        fill: false,
        backgroundColor: "rgb(255, 132, 99)",
        borderColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
  };
  return (
    <div>
      <Line data={data} options={options} height="400px" />
    </div>
  );
};

export default LineChart;
