import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';

const dataSource = [{
    key: '1',
    name: 'OMG',
    price: 54,
    count: 2060,
    totalPrice: 2312
}, {
    key: '2',
    name: 'PAY',
    price: 32,
    count: 2060,
    totalPrice: 2312
}];

const columns = [{
    title: '代币名称',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '代币价格',
    dataIndex: 'price',
    key: 'price',
}, {
    title: '代币数量',
    dataIndex: 'count',
    key: 'count',
}, {
    title: '代币价值',
    dataIndex: 'totalPrice',
    key: 'totalPrice',
}];

class TokensList extends Component {

    render() {
        return (
            <div className='tokenList'>
                <Table dataSource={dataSource} columns={columns} pagination={false} />
            </div>
        )
    }
};

export default connect(null, null)(TokensList);