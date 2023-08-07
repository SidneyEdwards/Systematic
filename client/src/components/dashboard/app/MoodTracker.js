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
    text: "Weekly Mood Tracker"

  }
};

var series = [
  {
    name: "Mood",
    data: formatData([
      5,
      15,
      30,
      50,
      45,
      26,
      8

    ])
  },

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

export default function MoodTracker() {
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

