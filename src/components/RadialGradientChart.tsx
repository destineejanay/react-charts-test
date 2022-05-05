import React from "react";
import ReactApexChart from "react-apexcharts";

export default class RadialChart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            series: [80],
            options: {
                chart: {
                    height: 400,
                    type: "radialBar",
                    toolbar: {
                        show: true,
                    },
                },
                plotOptions: {
                    radialBar: {
                        startAngle: 0,
                        endAngle: 360,
                        hollow: {
                            margin: 0,
                            size: "80%",
                            background: "#330000",
                            image: undefined,
                            imageOffsetX: 0,
                            imageOffsetY: 0,
                            position: "front",
                            dropShadow: {
                                enabled: true,
                                top: 3,
                                left: 0,
                                blur: 4,
                                opacity: 0.30,
                            },
                        },
                        track: {
                            background: "#fff",
                            strokeWidth: "67%",
                            margin: 0, // margin is in pixels
                            dropShadow: {
                                enabled: true,
                                top: -3,
                                left: 0,
                                blur: 4,
                                opacity: 0.35,
                            },
                        },

                        dataLabels: {
                            show: true,
                            name: {
                                offsetY: -10,
                                show: true,
                                color: "#391313",
                                fontSize: "17px",
                            },
                            value: {
                                formatter: function (val: string) {
                                    return parseInt(val);
                                },
                                color: "#111",
                                fontSize: "36px",
                                show: true,
                            },
                        },
                    },
                },
                fill: {
                    type: "gradient",
                    gradient: {
                        color: "#660000",
                        shade: "dark",
                        type: "horizontal",
                        shadeIntensity: 0.5,
                        gradientToColors: ["#990033"],
                        inverseColors: true,
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 100],
                    },
                },
                stroke: {
                    lineCap: "round",
                },
                labels: ["Percent"],
            },
        };
    }

    render() {
        return (
            <div id="card">
                <div id="chart">
                    <ReactApexChart
                        options={this.state.options}
                        series={this.state.series}
                        type="radialBar"
                        height={350}
                    />
                </div>
            </div>
        );
    }
}