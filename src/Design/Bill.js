import React, { Component } from 'react';
import { Modal, Input } from 'antd';

import bill from '../icons/bill.jpg';
import { Tabs, Icon } from 'antd';
import { Popover, Button } from 'antd';
import Today from '../Component/bill/Today';
import Draft from '../Component/bill/Draft';
import { Table, Divider, Tag } from 'antd';

const { Column, ColumnGroup } = Table;


const { TabPane } = Tabs;
const { TextArea } = Input;

function callback(key) {
    console.log(key);
}

export default class Bill extends Component {
    state = {
        visible: false,
        visiblePop: false,
        p_name: '',
        p_amount: '',
        p_quantity: '',
        productArray: []
    };

    showModal = () => {
        this.setState({
            visible: true
        });
    };
    hide = () => {
        this.setState({
            visiblePop: false,
        });
    };

    handleVisibleChange = visible => {
        this.setState({ visiblePop: visible });
    };
    handleOk = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };
    onChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    addPro = () => {
        let ab = {};
        let arrb = [];
        ab.product_name = this.state.p_name;
        ab.amount = this.state.p_amount;
        ab.p_quantity = this.state.p_quantity
        arrb.push(ab);
        this.setState({
            productArray: [...this.state.productArray, ...arrb]
        }, () => {
            console.log(this.state.productArray);
        })

        this.setState({
            p_amount: '',
            p_name: '',
            p_quantity: ''
        })
    }
    render() {
        return (
            <div>

                <Modal
                    title="Generate Invoice"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <div>
                        <label className="label-title">Title</label>
                        <Input placeholder="Invoice Title" />
                        <br />
                        <br />
                        <label className="label-title">Descp</label>
                        <TextArea rows={4} placeholder="Invoice Descp" />
                        <br />
                        <br />
                        <label className="label-title">Terms & Conditions</label>
                        <TextArea rows={4} placeholder="Terms & Conditions" />
                        <br />
                        <br />
                        <label className="label-title">Add Product</label>
                        <Popover
                            content={
                                <div>
                                    <Input placeholder="Product Name" value={this.state.p_name} id="p_name" onChange={this.onChangeText} />
                                    <br />
                                    <br />
                                    <Input placeholder="Amount" value={this.state.p_amount} id="p_amount" onChange={this.onChangeText} />
                                    <br />
                                    <br />
                                    <Input placeholder="Quantity" value={this.state.p_quantity} id="p_quantity" onChange={this.onChangeText} />
                                    <br />
                                    <br />
                                    <Button type="primary" onClick={this.addPro}>Add</Button>
                                </div>
                            }
                            title="Add Product"
                            trigger="click"
                            visible={this.state.visiblePop}
                            onVisibleChange={this.handleVisibleChange}
                        >
                            <Button className="cover-btn-purple uk-margin-left" type="primary">Click to add product</Button>
                        </Popover>
                        <br />
                        <br />
                        <Table dataSource={this.state.productArray}>

                            <Column title="Product Name" dataIndex="product_name" key="product_name" />
                            <Column title="Amount" dataIndex="amount" key="quantity" />
                            <Column title="Quantity" dataIndex="p_quantity" key="p_quantity" />

                            <Column
                                title="Action"
                                key="action"
                                render={(text, record) => (
                                    <span>

                                        <Divider type="vertical" />
                                        <a>Delete</a>
                                    </span>
                                )}
                            />
                        </Table>
                        <br />
                        <br />
                        <label className="label-title">Total</label>
                        <Input placeholder="Amount" value="0" disabled="true" />
                        <br />
                        <br />
                        <button class="uk-button uk-button-default cover-btn">
                            <Icon className="ic-size" type="edit" /> Preview
                            </button>
                        <button class="uk-button uk-button-default cover-btn-outline">
                            <Icon className="ic-size" type="delete" /> Draft
                            </button>
                        <button class="uk-button uk-button-default cover-btn uk-margin-left">
                            <Icon className="ic-size" type="edit" /> Send
                            </button>

                    </div>
                </Modal>
                <div className="w-full backg mt-8 flex rounded-lg">
                    <div className="flex-1">
                        <img className="h-64 img-at" src={bill} alt="bill" />
                    </div>

                    <div className="flex-1">
                        <h3 className="cover-heading">Welcome to the Future of Billing</h3>
                        <button className="uk-button uk-button-default cover-btn" onClick={this.showModal}>
                            Get Started
                    </button>

                    </div>

                </div>
                <nav className="uk-navbar-container" style={{ background: '#fff' }} uk-navbar="true">

                    <div className="uk-navbar-left">

                        <ul className="uk-navbar-nav">
                            <li className="uk-active"><a href="#">Active</a></li>

                        </ul>

                    </div>

                    <div className="uk-navbar-right">

                        <ul className="uk-navbar-nav">

                            <li>
                                <button className="uk-button uk-button-default cover-btn" onClick={this.showModal}>
                                    <span>+</span> Generate
                    </button>
                            </li>
                        </ul>

                    </div>

                </nav>
                <div className="mt-4">
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane className="p-8" tab="Generated Today" key="1">
                            <Today />

                        </TabPane>
                        <TabPane className="p-8" tab="Drafts" key="2">
                            <Draft />
                        </TabPane>
                        <TabPane tab="Todo List" key="3">
                            Content of Tab Pane 3
    </TabPane>
                    </Tabs>
                </div>

            </div>
        )
    }
}
