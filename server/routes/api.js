const express = require("express");
const router = express.Router();
const axios = require("axios");
const ccxt = require("ccxt");
let orderBook = [];
// router.get("/switchRelayMode/:interval", function(req, res) {
//   talkToShelly.switchRelayMode(parseInt(req.params.interval));
//   res.end();
// });

//

router.get("/getbook/:exchangeName", async function (req, response) {
    
    
  let exchange = new ccxt[req.params.exchangeName]();
  let orderBook = await exchange.fetchOrderBook("BTC/USD");
  response.send(orderBook);
});

router.get("/getbuyroi/:exchangeName/:sum", async function (req, response) {
  let orderBook = ["empty"];
  console.log(req.params.exchangeName);
  let x = new ccxt.bitstamp();
  let data = await x.fetchOrderBook("BTC/USD");
  response.send(data);

  // .then(() => {
  //   chartValues = [];
  //   for (let candle of chartCandles) {
  //     c = calcRoiFromBook(candle, this.state.data, true);
  //     chartValues.push(c);
  //   }
  //   this.setState({ chartValues: chartValues });
  // });

  response.send("moshe");
});

module.exports = router;
