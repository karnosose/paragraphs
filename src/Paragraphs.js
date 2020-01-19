import React, { Component } from "react";
import logo from "./logo.svg";
import "./paragraphs.css";

class Paragraphs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
      backgroundcolor: ""
    };
  }

  is_hexadecimal(str) {
    const regexp = /^[0-9a-fA-F]+$/;

    if (regexp.test(str)) {
      return true;
    } else {
      return false;
    }
  }

  changeTextColor = ({ target }) => {
    if (target.value && this.is_hexadecimal(target.value)) {
      console.log(target.value);

      this.setState({ color: `#` + target.value });
    } else {
      this.setState({ color: "" });
    }
  };

  changeBackgroundColor = ({ target }) => {
    if (target.value) {
      console.log(target.value);
      this.setState({ backgroundcolor: `#` + target.value });
    } else {
      this.setState({ backgroundcolor: "" });
    }
  };

  render() {
    const { backgroundcolor, color } = this.state;
    const STYLE = {
      backgroundColor: backgroundcolor,
      color: color
    };
    return (
      <div className="paragraphs">
        <p style={STYLE}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <p style={STYLE}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <input onChange={this.changeTextColor} />
        <br />
        <input onChange={this.changeBackgroundColor} />
      </div>
    );
  }
}

export default Paragraphs;
