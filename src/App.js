import React, { Component } from 'react';
import { Row, Col, Alert } from 'antd';

import './App.css';
import { view as AddForm } from "./add_form";
import Display from './display';
import TokensList from "./list/index";
import Footer from "./footer/index";

class App extends Component {
  render() {
    return (
      <div className="App">

        <Row type="flex" justify="center">

          <Col md={12} sm={24} xs={22}>
            <Alert
                message="说明"
                description="数据保存在您的设备上，除了您自己，任何人无法得知您的加密货币资产状况。"
                type="info"
                closable
            />
            <AddForm/>
            <Display/>
            <TokensList/>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col>
            <Footer/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
