import React, { Component } from "react";
import styles from "./MergeSort.module.css";
import { Button } from "antd";
export default class MergeSort extends Component {
  constructor() {
    super();
    this.state = {
      array: []
    };
  }

  componentDidMount() {
    let array = this.randomArray(60, 40);
    this.setState({ array });
  }

  generateRandom = () => {
    let array = [];
    array = this.randomArray(60, 40);
    this.setState({ array });
  };

  mergeSort = () => {};

  randomArray = (length, max) =>
    [...new Array(length)].map(() => Math.round(Math.random() * max));

  render() {
    const { array } = this.state;

    return (
      <>
        <div className={styles.grid}>
          {array.map((value, index) => {
            return (
              <div key={index} style={{ height: `${value * 10}px` }}></div>
            );
          })}
        </div>
        <Button type="primary" onClick={this.generateRandom}>
          Generate Random
        </Button>
        <Button type="ghost" onClick={this.mergeSort}>
          Merge Sort
        </Button>
      </>
    );
  }
}
