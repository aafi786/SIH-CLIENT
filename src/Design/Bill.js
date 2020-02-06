import React, { Component } from "react";
import { Modal, Input } from "antd";

import bill from "../icons/bill.jpg";
import { Tabs, Icon } from "antd";
import { Popover, Button } from "antd";
import Today from "../Component/bill/Today";
import Draft from "../Component/bill/Draft";
import { Table, Divider, message } from "antd";

import PropTypes from "prop-types";
import { addBill } from "../actions/billActions";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { Select } from 'antd';
import axios from 'axios';

const { Column } = Table;

const { TabPane } = Tabs;
const { Option } = Select;
const { TextArea } = Input;

function callback(key) {
  // console.log(key);
}

class Bill extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      visiblePop: false,
      p_name: '',
      p_amount: '',
      p_quantity: '',
      productArray: [],
      title: '',
      descp: '',
      tnc: '',
      amount: 1000,
      result: [],
      customerId: null,
      customer_name: ''
    };

    this.onChange = this.onChange.bind(this);
    this.saveBill = this.saveBill.bind(this);
  }
  componentDidMount() {
    this.fetchAllBills();
  }
  fetchAllBills = () => {
    axios.post('http://localhost:5000/auth/get-alluser')
      .then(res => {
        this.setState({
          result: res.data.msg
        })
      })
      .catch(err => console.log(err))
  }
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  hide = () => {
    this.setState({
      visiblePop: false
    });
  };

  handleVisibleChange = visible => {
    this.setState({ visiblePop: visible });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  onChangeText = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
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
  saveBill(e) {
    e.preventDefault();
    const newBill = {
      customerName: "1",
      title: this.state.title,
      product: "1",
      totAmount: "1",
      paid: "1",
      due: "1"
    };
    console.log(newBill);

    // let ab = {};
    // let arrb = [];
    // ab.product_name = this.state.p_name;
    // ab.amount = this.state.p_amount;
    // ab.p_quantity = this.state.p_quantity;
    // arrb.push(ab);
    // this.setState(
    //   {
    //     productArray: [...this.state.productArray, ...arrb]
    //   },
    //   () => {
    //     console.log(this.state.productArray);
    //   }
    // );
    this.props.addBill(newBill, this.props.history);
  }
  sendBill = () => {
    var title = this.state.title;
    var descp = this.state.descp;
    var tnc = this.state.tnc;
    var prodArray = this.state.productArray;
    var amount = this.state.amount;
    var customerId = this.state.customerId;

    axios.post('http://localhost:5000/bill/savebill', {
      customer_id: customerId,
      title,
      product: prodArray,
      totAmnt: amount,
      paid: 0,
      due: amount,
      tac: tnc,
      descp: descp,
      customerName: this.state.customer_name
    })
      .then(res => {
        if (res.data.msg) {
          axios.post('http://localhost:5000/middle/send', {
            customer_id: res.data.msg.customer_id,
            bill_id: res.data.msg.invoiceNo
          })
            .then(res => {
              if (res.data) {
                this.setState({
                  productArray: [],
                  title: '',
                  descp: '',
                  tnc: '',
                  visible: false
                })

                message.success('Bill Added');
                this.componentDidMount();
              }


            })
            .catch(err => console.log(err))
        }
        console.log(res.data.msg)
      })
      .catch(err => console.log(err));

  }
  onChange = (value) => {
    var custname = this.state.result.filter((data, key) => {
      return data._id === value
    })
    console.log(custname)
    this.setState({
      customerId: value,
      customer_name: custname[0].name
    })
  }



  onSearch = (val) => {
    console.log('search:', val);
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
            <Input placeholder="Invoice Title" id="title" value={this.state.title} onChange={this.onChangeText} />
            <br />
            <br />
            <label className="label-title">Descp</label>
            <TextArea rows={4} placeholder="Invoice Descp" id="descp" value={this.state.descp} onChange={this.onChangeText} />
            <br />
            <br />
            <label className="label-title">Terms & Conditions</label>
            <TextArea rows={4} placeholder="Terms & Conditions" id="tnc" value={this.state.tnc} onChange={this.onChangeText} />
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
            <Input placeholder="Amount" value="1000" disabled={true} />
            <br />
            <br />
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="Select a person"
              optionFilterProp="children"
              onChange={this.onChange}
              onSearch={this.onSearch}
              filterOption={(input, option) =>
                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {
                this.state.result.map((data, key) => (
                  <Option value={data._id} key={key}>{data.email}</Option>
                ))
              }


            </Select>
            <br />
            <br />
            <button class="uk-button uk-button-default cover-btn">
              <Icon className="ic-size" type="edit" /> Preview
                            </button>
            <button class="uk-button uk-button-default cover-btn-outline">
              <Icon className="ic-size" type="delete" /> Draft
                            </button>
            <button class="uk-button uk-button-default cover-btn uk-margin-left" onClick={this.sendBill}>
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
            <button
              className="uk-button uk-button-default cover-btn"
              onClick={this.showModal}
            >
              Get Started
            </button>
          </div>
        </div>
        <nav
          className="uk-navbar-container"
          style={{ background: "#fff" }}
          uk-navbar="true"
        >
          <div className="uk-navbar-left">
            <ul className="uk-navbar-nav">
              <li className="uk-active">
                <a href="#">Active</a>
              </li>
            </ul>
          </div>

          <div className="uk-navbar-right">
            <ul className="uk-navbar-nav">
              <li>
                <button
                  className="uk-button uk-button-default cover-btn"
                  onClick={this.showModal}
                >
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
    );
  }
}

Bill.propTypes = {
  addBill: PropTypes.func.isRequired
  // auth: PropTypes.object.isRequired
};

//this.props.errors
const mapStateToProps = state => ({});

export default connect(mapStateToProps, { addBill })(withRouter(Bill));
