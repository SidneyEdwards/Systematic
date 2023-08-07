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
            from: 0,
            to: 15,
            color: "#4caf50",
            name: "Completed"
        },
        {
          from: 16,
          to: 50,
          color: "#db1f7a",
          name: "Not Completed"
        }
      ]
    }
  }
  },

dataLabels: {
    enabled: false
},
title: {
    text: "Weekly Habit Tracker"
}
};

var series = [
{
    name: "Call Mom",
    data: formatData([
      0,
      40,
      35,
      10,
      40,
      25,
      40

    ])
},
{
    name: "4 Hours of Coding",
    data: formatData([
    0,
    37,
    15,
    40,
    40,
    25,
    35
    

    ])
},
{
    name: "Run 3 Miles",
    data: formatData([
    40,
    40,
    5,
    10,
    35,
    25,
    30

    ])
},
{
    name: "20 Minutes of Meditation",
    data: formatData([
    0,
    0,
    4,
    0,
    28,
    28,
    12

    ])
},
{
    name: "Learn to Polka",
    data: formatData([
    0,
    4,
    0,
    4,
    4,
    0,
    4
    ])
}
];

function formatData(data) {
let newData = [];
let categories = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"

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

