import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Paragraphs extends Component {
  constructor(props){
    super(props);
    this.state = {
      color: "",
      backgroundcolor: ""
    }
  }

  changeTextColor = ({target}) => {
    if(target.value){
      this.setState({color : target.value})
    }
  }

  changeBackgroundColor = ({target}) => {
    if(target.value){
      console.log(target.value)
      this.setState({backgroundcolor : target.value})
    }
  }

  render() {
    const {backgroundcolor, color} = this.state;
    const STYLE = {
      backgroundColor: backgroundcolor,
      color: color
    }
    return (
      <div className="Paragraphs">
        <p style={STYLE}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <p style={STYLE}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <input onChange={this.changeTextColor}></input>
        <input onChange={this.changeBackgroundColor}></input>
      </div>
    );
  }
}

export default Paragraphs;
