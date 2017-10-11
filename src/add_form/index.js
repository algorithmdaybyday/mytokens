import React, { Component } from 'react';
import { Form, Input, Button, Icon } from 'antd';

const Item = Form.Item;


class AddForm extends Component {

    componentDidMount() {
        this.props.form.validateFields();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.from.validateFields((err, values) => {
            if(!err) {
                console.log('Received values of from', values);
            }
        })
    }

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        return (
            <div>
                <Form layout='inline' onSubmit={this.handleSubmit}>
                    <Item>
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: '请输入代币名称' }],
                        })(
                            <Input size="large" prefix={<Icon type="flag" style={{ fontSize: 13 }} />} placeholder="代币名称" />
                        )}
                    </Item>

                    <Item>
                        {
                            getFieldDecorator('count', {
                                rules: [{required: true, message: '请输入持币数量'}]
                            })(
                                <Input size="large" prefix={<Icon type="rocket" style={{fontSize: 13 }} />} placeholder="代币数量" />
                            )
                        }
                    </Item>
                    <Item>
                        <Button type='primary' htmlType="submit">提交</Button>
                    </Item>
                </Form>
            </div>
        )
    }
};

export default Form.create()(AddForm);