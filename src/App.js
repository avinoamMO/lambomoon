import React, { Component } from "react";
import "./App.css";
// import orderbook from "./mockData/orderbook";
import { calcRoiFromBook } from "./logic/calcRoiFromOrderBook";
import { calcRoiFromBog } from "./logic/calcRoiFromBog";
import Chart from "./components/Chart";
import ccxt from "ccxt";

const chartCandles = [1000, 2500, 5000, 10000, 25000, 50000, 75000];

let chartValues = [];
let bogValues = [];
let c = 0;
let bitstamp = new ccxt.bitstamp();

class App extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  componentDidMount() {
    // bitstamp
    //   .fetchOrderBook("BTC/USD")
    //   .then((response) => this.setState({ data: response }))
    //   .then(() => {
    //     chartValues = [];
    //     for (let candle of chartCandles) {
    //       c = calcRoiFromBook(candle, this.state.data, true);
    //       chartValues.push(c);
    //     }
    //     this.setState({ chartValues: chartValues });
    //   });

    fetch("http://localhost:3007/getbook/bit2c")
      .then((res) => res.json())
      .then((response) => this.setState({ data: response }))
      .then((result) => {
        chartValues = [];
        for (let candle of chartCandles) {
          c = calcRoiFromBook(candle, this.state.data, true);
          chartValues.push(c);
        }
        this.setState({ chartValues: chartValues });
      });

    fetch("https://webapi.bitsofgold.co.il/v1/rates")
      .then((res) => res.json())
      .then((result) => {
        console.log(result.btc_spot.ILS);
        //calcRoiFromBog = (amount, rate, buyOrSell)
        bogValues = [];
        for (let candle of chartCandles) {
          c = calcRoiFromBog(candle, result.btc_spot.ILS, true);
          bogValues.push(c);
        }
        this.setState({ bogValues: bogValues });
      });
  }

  render() {
    if (chartValues.length === 0 || bogValues.length === 0)
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
      <div className="App">
        <header className="App-header">
          <p>Find the best ROI for your crypto trade now.</p>
          <Chart
            chartCandles={chartCandles}
            bogValues={bogValues}
            chartValues={chartValues}
          />
        </header>
      </div>
    );
  }
}

export default App;
