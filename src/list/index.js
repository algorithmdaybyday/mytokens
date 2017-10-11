import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';
import {fetchToken} from "../add_form/actions";

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

    tick() {
        const { dataSource } = this.props;

        for(const item of dataSource) {
            this.props.onTick(item.name, item.count);
        }
    }

    componentDidMount() {
        clearInterval(this.timer);
        this.timer = setInterval(() => {
            this.tick();
        }, 60000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

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
};

const mapStateToDispatch = (dispatch) => {
    return {
        onTick: (name, count) => {
            dispatch(fetchToken(name, count));
        }
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(TokensList);