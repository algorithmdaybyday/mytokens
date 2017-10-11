import React, { Component } from 'react';
import { connect } from 'react-redux';
import reducer from './reducer';

import {
    add_token
} from '../actions';
import { Form, Input, Button, Icon, Row, Col } from 'antd';

const Item = Form.Item;


class AddForm extends Component {

    componentDidMount() {
        this.props.form.validateFields();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if(!err) {
                console.log('Received values of from', values);
                this.props.onSubmit(values['name'], values['count']);
            }
        });
    }

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        return (
            <div className='addForm'>
                <Form layout='vertical' onSubmit={this.handleSubmit}>
                    <Row gutter={40}>
                    <Col span={10}>
                    <Item>
                        {
                            getFieldDecorator('name', {
                                rules: [{ required: true, message: '请输入代币名称' }],
                            })(
                                <Input size="large" prefix={<Icon type="flag" style={{ fontSize: 13 }} />} placeholder="代币名称" />
                            )
                        }
                    </Item>
                    </Col>
                    <Col span={10}>
                    <Item>
                        {
                            getFieldDecorator('count', {
                                rules: [{required: true, message: '请输入持币数量'}]
                            })(
                                <Input size="large" prefix={<Icon type="rocket" style={{fontSize: 13 }} />} placeholder="代币数量" />
                            )
                        }
                    </Item>
                    </Col>
                    <Col span={4}>
                    <Item>
                        <Button type='primary' htmlType="submit">提交</Button>
                    </Item>
                    </Col>
                    </Row>
                </Form>

            </div>
        )
    }
};

const mapStateToDispatch = (dispatch) => {
    return {
        onSubmit: (name, count) => {
            dispatch(add_token(name, count));
        }
    }
}

const WrapperAddForm = Form.create()(AddForm);

export default connect(null, mapStateToDispatch)(WrapperAddForm);