import React, { Component, useEffect, useState } from "react";
import Chart from "react-apexcharts";
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

function RadialBar() {
  const [num, setNum] = useState(0);

  useEffect(() => {
    const val = 94;
    setNum((val / 188) * 100);
  });

  const state1 = {
    options: {
      plotOptions: {
        radialBar: {
          size: undefined,
          inverseOrder: false,
          startAngle: -45,
          endAngle: 45,
          offsetX: 0,
          offsetY: 0,

          track: {
            show: true,
            startAngle: undefined,
            endAngle: undefined,
            background: "#f2f2f2",
            strokeWidth: "17%",

            opacity: 1,
            margin: 5,
            dropShadow: {
              enabled: false,
              top: 0,
              left: 0,
              blur: 3,
              opacity: 0.5
            }
          },
          dataLabels: {
            show: false,
            name: {
              show: true,
              fontSize: "22px",
              fontFamily: undefined,
              color: undefined,
              offsetY: -10
            },
            value: {
              show: false,
              fontSize: "16px",
              fontFamily: undefined,
              color: undefined,
              offsetY: 16
              // formatter: function () {
              //   return  + "%";
              // }
            },
            total: {
              show: false,
              label: "Today",
              color: "#373d3f",
              formatter: function (w) {
                return (
                  w.globals.seriesTotals.reduce((a, b) => {
                    return a + b;
                  }, 0) /
                    w.globals.series.length +
                  "%"
                );
              }
            }
          }
        }
      }
    },

    series: []
  };

  const state = {
    options: {
      plotOptions: {
        radialBar: {
          size: undefined,
          inverseOrder: false,
          startAngle: -45,
          endAngle: 45,
          offsetX: 0,
          offsetY: 0,

          track: {
            show: true,
            startAngle: undefined,
            endAngle: undefined,
            background: "#f2f2f2",
            strokeWidth: "97%",
            opacity: 1,
            margin: 5,
            dropShadow: {
              enabled: false,
              top: 0,
              left: 0,
              blur: 3,
              opacity: 0.5
            }
          },
          dataLabels: {
            show: true,
            name: {
              show: true,
              fontSize: "22px",
              fontFamily: undefined,
              color: undefined,
              offsetY: -10
            },
            value: {
              show: true,
              fontSize: "16px",
              fontFamily: undefined,
              color: undefined,
              offsetY: 16
              // formatter: function () {
              //   return  + "%";
              // }
            },
            total: {
              show: true,
              label: "Today",
              color: "#373d3f",
              formatter: function (w) {
                return (
                  w.globals.seriesTotals.reduce((a, b) => {
                    return a + b;
                  }, 0) /
                    w.globals.series.length +
                  "%"
                );
              }
            }
          }
        }
      }
    },

    series: [num]
  };

  return (
    <div className="donut">
      <Chart
        options={state1.options}
        series={state1.series}
        type="radialBar"
        width="550"
        style={{ position: "relative" }}
      />
      <Chart
        options={state.options}
        series={state.series}
        type="radialBar"
        width="400"
        style={{ position: "relative", bottom: "30em", left: "4.7em" }}
      />
      {/* <input type="number" onChange={(e=>{cal(e.target.value)})}
        /> */}
    </div>
  );
}

export default RadialBar;
