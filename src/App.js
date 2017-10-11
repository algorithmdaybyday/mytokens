import React, { Component } from 'react';
import { Row, Col } from 'antd';

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
