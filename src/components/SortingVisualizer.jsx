import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Navbar from "./Navbar";
import "./SortingVisualizer.css";

class SortingVisualizer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      arrayLength: 95,
      intervalMin: 1,
      intervalMax: 100,
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    const { arrayLength, intervalMax, intervalMin } = this.state;
    for (let i = 1; i < arrayLength; i++) {
      array.push(randomIntFromInterval(intervalMin, intervalMax));
    }
    array[randomIntFromInterval(intervalMin, intervalMax)] = intervalMax;
    this.setState({ array: array });
  }

  render() {
    const { array, intervalMax, arrayLength } = this.state;
    const arrayBarStyle = (value) => {
      return {
        height: `${(value / intervalMax) * 100}%`,
        width: `calc(${(arrayLength - 1) / 90}% - ${5}px)`,
        fallbacks: [{ width: `-moz-calc(${arrayLength / 90}% - ${5}px)` }, { width: `-webkit-calc(${arrayLength / 90}% - ${5}px)` }, { width: `-o-calc(${arrayLength / 90}% - ${5}px)` }],
      };
    };
    return (
      <div className="SortingVisualizer">
        <Navbar className="header" />
        <div className="array-container">
          {array.map((value, idx) => (
            <span className="array-bar" key={idx} style={arrayBarStyle(value)}></span>
          ))}
        </div>

        <div className="footer">
          <Button variant="danger" onClick={() => this.resetArray()}>
            Reset Array
          </Button>
          <Button onClick={() => this.resetArray()}>Bubble sort</Button>
          <Button onClick={() => this.resetArray()}>Selection sort</Button>
          <Button onClick={() => this.resetArray()}>Insertion sort</Button>
          <Button onClick={() => this.resetArray()}>Merge sort</Button>
          <Button onClick={() => this.resetArray()}>Quick sort</Button>
        </div>
      </div>
    );
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default SortingVisualizer;
