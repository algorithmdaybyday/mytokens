import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Input, Button, Icon, Row, Col } from 'antd';
import { fetchToken } from '../actions';

import './index.css';

const Item = Form.Item;

class AddTokenForm extends Component {

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
                        <Col md={10} sm={12}>
                            <Item>
                                {
                                    getFieldDecorator('name', {
                                        rules: [{ required: false, message: '请输入代币名称' }],
                                    })(
                                        <Input size="large" prefix={<Icon type="flag" style={{ fontSize: 13 }} />} placeholder="代币名称" />
                                    )
                                }
                            </Item>
                        </Col>
                        <Col md={10} sm={12}>
                            <Item>
                                {
                                    getFieldDecorator('count', {
                                        rules: [{required: false, message: '请输入持币数量'}]
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
            dispatch(fetchToken(name, count));
        }
    }
}

const WrapperAddForm = Form.create()(AddTokenForm);

export default connect(null, mapStateToDispatch)(WrapperAddForm);