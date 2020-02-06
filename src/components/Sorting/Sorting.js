import React, { Component } from "react";
import bubbleSort from "../../algorithms/sorting/BubbleSort";
import mergeSort from "../../algorithms/sorting/MergeSort";
import styles from "./Sorting.module.css";
import { Layout, Button } from "antd";
const { Sider, Content } = Layout;
export default class Sorting extends Component {
  constructor() {
    super();
    this.state = {
      array: [],
      sortedArray: []
    };
  }

  componentDidUpdate(prevProp, prevState) {
    if (this.state.array != prevState.array) {
      this.forceUpdate();
    }
  }
  componentDidMount() {
    let array = this.randomArray(60, 30);
    this.setState({ array });
  }

  changeState = array => {
    this.setState({ array });
  };

  changeOutputState = sortedArray => {
    this.setState({ sortedArray });
  };

  randomArray = (length, max) =>
    [...new Array(length)].map(() => Math.round(Math.random() * max));

  render() {
    let output = [];
    let sortedOutput = [];
    for (let i = 0; i < this.state.array.length; i++) {
      output.push(
        <div
          key={i}
          style={{
            margin: "5px",
            padding: "5px",
            width: "10px",
            height: this.state.array[i] * 10,
            background: "green"
          }}
        ></div>
      );
    }

    return (
      <Layout style={{ height: "90vh", padding: "3rem" }}>
        <Content>
          <div className={styles.grid}>{output}</div>
          <Button
            type="danger"
            style={{ margin: "0px 10px" }}
            onClick={() => bubbleSort(this.state.array, this.changeOutputState)}
            // onClick={() => mergeSort(this.state.array, this.changeOutputState)}
          >
            Sort
          </Button>
          <Button
            type="primary"
            onClick={() => {
              let array = this.randomArray(60, 40);
              this.setState({ array });
              console.log(array);
            }}
          >
            Generate Random Array
          </Button>
        </Content>
      </Layout>
    );
  }
}
