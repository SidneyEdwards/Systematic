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
            to: 15,
            color: "#4caf50",
            name: "low"
        }
        ]
    }
    }
},
dataLabels: {
    enabled: false
},
title: {
    text: "Daily Habit Tracker"
}
};

var series = [
{
    name: "Habit1",
    data: formatData([
    0,
    0,
    0,
    0,
    5,
    6,
    45,
    45,
    30,
    20,
    5,
    5,
    15,
    35,
    5,
    20,
    45,
    40,
    25,
    5,
    20,
    25,
    40,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5

    ])
},
{
    name: "Habit2",
    data: formatData([
    0,
    0,
    15,
    10,
    40,
    25,
    35,
    25,
    30,
    10,
    5,
    5,
    5,
    20,
    30,
    30,
    10,
    15,
    15,
    5,
    55,
    20,
    20,
    5,
    10,
    9,
    5,
    7,
    15,
    5,
    4

    ])
},
{
    name: "Habit3",
    data: formatData([
    0,
    0,
    5,
    10,
    35,
    25,
    30,
    30,
    5,
    20,
    0,
    0,
    15,
    10,
    20,
    5,
    40,
    25,
    20,
    30,
    45,
    20,
    15,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5

    ])
},
{
    name: "Habit4",
    data: formatData([
    0,
    0,
    4,
    0,
    28,
    28,
    12,
    28,
    44,
    28,
    28,
    8,
    0,
    8,
    16,
    32,
    20,
    36,
    36,
    44,
    28,
    32,
    4,
    4,
    5,
    5,
    5,
    5,
    5,
    5,
    5

    ])
},
{
    name: "Habit5",
    data: formatData([
    0,
    4,
    0,
    4,
    4,
    0,
    4,
    12,
    16,
    24,
    16,
    8,
    16,
    4,
    20,
    32,
    48,
    44,
    36,
    36,
    90,
    28,
    8,
    16,
    5,
    5,
    5,
    5,
    5,
    5,
    5
    ])
}
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

