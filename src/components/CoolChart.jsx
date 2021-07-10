import React from "react";
import ReactApexChart from "react-apexcharts";

class ApexChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [5, 18, 34, 25, 18],
            options: {
                chart: {
                    width: 380,
                    type: "pie",
                },
                labels: ["HD", "DN", "CR", "PS", "FL"],
                colors: ["#ae34eb", "#005eff", "#06ba27", "#5c5c5c", "#ba8500"],
                title: {
                    text: "COMP2521 Results",
                    style: {
                        fontSize: "14px",
                        fontWeight: "bold",
                        fontFamily: undefined,
                        color: "#263238",
                    },
                },
                responsive: [
                    {
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200,
                            },
                            legend: {
                                position: "bottom",
                            },
                        },
                    },
                ],
            },
        };
    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart
                    options={this.state.options}
                    series={this.state.series}
                    type="pie"
                    width={380}
                />
            </div>
        );
    }
}

export default ApexChart;
