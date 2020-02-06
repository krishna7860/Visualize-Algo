import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Select, Layout, Button, Drawer, List } from "antd";
import styles from "./Navbar.module.css";

const { Option } = Select;
const { Header } = Layout;
const data = ["Bubble Sort", "Merge Sort", "Quick Sort", "Heap Sort"];
export default () => {
  const [drawer, setDrawer] = useState({
    visible: false
  });
  const history = useHistory();
  const handleChange = value => {
    history.replace(`/${value}`);
  };

  const showDrawer = () => {
    setDrawer({
      visible: true
    });
  };

  const onClose = () => {
    setDrawer({
      visible: false
    });
  };

  const changeAlgo = () => {
    onClose();
  };
  return (
    <div>
      <Header className={styles.header}>
        <div className={styles.logo}>ALGORITHM VISUALIZER</div>
        <Button onClick={showDrawer}>Change Algorithm</Button>
        <div style={{ float: "right" }}>
          <label className={styles.brand}>Select Algorithm</label>
          <Select
            defaultValue="Choose Algorithm"
            style={{ width: 230 }}
            onChange={handleChange}
          >
            <Option value="">Choose Algorithm</Option>
            <Option value="sorting">Sorting</Option>
          </Select>
        </div>
        <Drawer
          title="Choose Algorithm"
          placement="left"
          closable={false}
          onClose={onClose}
          visible={drawer.visible}
        >
          <List
            size="large"
            bordered
            dataSource={data}
            renderItem={item => (
              <List.Item
                className={styles.listItem}
                onClick={() => {
                  changeAlgo(item);
                }}
              >
                {item}
              </List.Item>
            )}
          />
        </Drawer>
      </Header>
    </div>
  );
};
