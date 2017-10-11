import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'antd';
import { fetchToken } from "../add_form/actions";
import { removeToken, changePrice } from "./actions";

import EditableCell from './editable_cell';


const { Column } = Table;

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
        }, 30000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    onClick(e) {
        e.preventDefault();
        this.props.onDelete(e.target.dataset.name);
    }

    onCellChange = (key, dataIndex) => {
        const onCellChange = this.props.onCellChange;
        return (value) => {
            onCellChange(key, value);
        }
    }

    render() {
        const { dataSource } = this.props;

        return (
            <div className='tokenList'>
                <Table dataSource={dataSource} pagination={false}>
                    <Column title='代币名称' dataIndex='name' key='name' />
                    <Column 
                        title='代币价格' 
                        dataIndex='price' 
                        key='price' 
                        render={(text, record) => (
                            <EditableCell
                                value={text}
                                onChange={this.onCellChange(record.name, 'price')}
                            />
                        )}
                    />
                    <Column title='代币数量' dataIndex='count' key='count' />
                    <Column title='代币价值' dataIndex='totalPrice' key='totalPrice' />
                    <Column
                        title='操作'
                        key='action'
                        render={(text, record) => (
                            <span>
                                <a href="#" onClick={this.onClick.bind(this)} data-name={record.name}>删除</a>
                            </span>
                        )}
                    />
                </Table>
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
        },
        onDelete: (name) => {
            dispatch(removeToken(name));
        },
        onCellChange: (name, price) => {
            dispatch(changePrice(name, price))
        }
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(TokensList);