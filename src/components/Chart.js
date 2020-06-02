import React, { Component } from "react";
import { Bar, Pie, Line } from "react-chartjs-2";

export default class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: this.props.chartCandles,
        datasets: [
          {
            label: "Exchange",
            data: this.props.chartValues,
            backgroundColor: ["rgba(0, 62, 255)", "rgba(50,20,32,0.5)"],
          },
          {
            label: "Broker",
            data: this.props.bogValues,
          },
        ],
      },
    };
  }
  componentDidMount() {}
  render() {
    console.log(this.props.chartValues);
    console.log(this.props.bogValues);
    if (
      this.props.chartValues.length === 0 ||
      this.props.bogValues.length === 0
    )
      return (
        <div className="App">
          <header className="App-header">
            <p>Find the best ROI for your crypto trade now.</p>
            <img
              width="200"
              src="https://media1.tenor.com/images/d7021db36d9df5dd76ce46d1e12846a8/tenor.gif?itemid=10721102"
            />
          </header>
        </div>
      );

    return (
      <div className="chart">
        <Line
          data={this.state.chartData}
          height={250}
          width={250}
          options={{ maintainAspectRatio: false }}
        />
      </div>
    );
  }
}
