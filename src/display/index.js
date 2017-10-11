import React, { Component } from 'react';
import { connect } from 'react-redux';

import './index.css';

class Display extends Component {

    render() {
        return (
            <div className='display'>
                <h1>
                    {this.props.value}
                </h1>
            </div>
        )
    }
};

const sumOfTokens = (items) => {
    let sum = 0;
    for(const item of items) {
        sum += item['totalPrice'];
    }
    return sum;
}

const mapStateToProps = (state) => {
    return {
        value: sumOfTokens(state['tokens'])
    }
}

export default connect(mapStateToProps)(Display);