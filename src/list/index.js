import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';

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
        const { dataSource } = this.props;

        return (
            <div className='tokenList'>
                <Table dataSource={dataSource} columns={columns} pagination={false} />
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        dataSource: state.tokens
    }
}

export default connect(mapStateToProps, null)(TokensList);