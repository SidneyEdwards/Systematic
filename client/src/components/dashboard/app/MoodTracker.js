import React from "react";
import ReactApexChart from "react-apexcharts";
import { Card, CardHeader, Box } from '@mui/material';




var options = {
  chart: {
    height: 350,
    type: "heatmap"
  },
  plotOptions: {
    heatmap: {
      colorScale: {
        ranges: [
          {
            from: -1,
            to: 10,
            color: "#1e90ff",
            name: "Awful"
          },
          {
            from: 11,
            to: 20,
            color: "#4b0082",
            name: "Bad"
          },
          {
            from: 21,
            to: 30,
            color: "#008000",
            name: "Meh"
          },
          {
            from: 31,
            to: 40,
            color: "#ffa500",
            name: "Good"
          },
          {
            from: 31,
            to: 50,
            color: "#c71585",
            name: "Fantastic!"
          }
        ]
      }
    }
  },
  
  dataLabels: {
    enabled: false
  },
  title: {
    text: "Daily Mood Tracker"

  }
};

var series = [
  {
    name: "Mood",
    data: formatData([
      0,
      0,
      1,
      2,
      5,
      6,
      8,
      9,
      11,
      13,
      15,
      16,
      17,
      20,
      21,
      23,
      25,
      26,
      34,
      35,
      38,
      43,
      45,
      47,
      49,
      50,
      50,
      50,
      38,
      39,
      50

    ])
  },

];

function formatData(data) {
  let newData = [];
  let categories = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31"
  ];

  for (var i = 0; i < categories.length; i++) {
    newData.push({
      x: categories[i],
      y: data[i]
    });
  }
  console.log(newData);
  return newData;
}

export default function HabitTracker() {
  return (
    <Card>
    <CardHeader/>
    <Box sx={{ p: 3, pb: 1 }} dir="ltr">
      <ReactApexChart
        options={options}
        series={series}
        type="heatmap"
        height="400"
      />
</Box>
    </Card>
  );
}

