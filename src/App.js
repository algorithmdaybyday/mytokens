import React, { Component } from 'react';
import { Row, Col } from 'antd';

import './App.css';
import { view as AddForm } from "./add_form";
import Display from './display';
import TokensList from "./list/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row type="flex" justify="center">
          <Col span={12}>
            <AddForm/>
            <Display/>
            <TokensList/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
