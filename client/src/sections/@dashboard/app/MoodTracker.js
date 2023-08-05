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
    text: "Daily Mood Tracker"
  }
};

var series = [
  {
    name: "Mood",
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
      35,
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

