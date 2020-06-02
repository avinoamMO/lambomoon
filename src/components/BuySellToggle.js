import React, { Component } from "react";

export default class BuySellToggle extends Component {
  state = {
    checked: false,
  };
  componentDidMount() {}

  handleClick = () => {
    alert("click");
  };
  render() {
    return (
      <div id="BuySellToggle">
        <input
          id="type_buy"
          name="type"
          value="buy"
          checked="checked"
          type="radio"
        />
        <input id="type_sell" name="type" value="sell" type="radio" />
      </div>
    );
  }
}
