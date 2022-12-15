import Chart from "react-apexcharts";
import React from "react";

const chartOptions = {
    series: [
      {
        name: "Online Customers",
        data: [48, 70, 20, 90, 36, 80, 30, 91, 60]
      },
      {
        name: "Store Customers",
        data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
      }
    ],
    options: {
      chart: {
        background: "white"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep"
        ]
      },
      legend: {
        position: "bottom"
      },
      grid: {
        show: true
      }
    }
  };

  const StackedColChart = () => {
    return (
        <Chart
            type="line"
            height="100%"
            className="card fullHeight"
        />
        );
    };
    
    export default StackedColChart;
    