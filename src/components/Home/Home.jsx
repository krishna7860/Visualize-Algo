import React, { Component } from "react";
import { Typography } from "antd";
const { Title } = Typography;
export default class Home extends Component {
  render() {
    return (
      <div style={{ padding: "10rem 0" }}>
        <Title level={1}>Choose Any Alogorithm .</Title>
      </div>
    );
  }
}
