import React, { Component } from "react";
import "../App.css";
import { Layout, Menu, Icon } from "antd";
import Bill from "../Design/Bill";
import Payment from "../Design/Payment";
import Sent from "../Design/Sent";
import CreateUser from "../Design/CreateUser";
import { Route, Switch } from "react-router-dom";
import temp from "./bill/temp";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

var selectedKey = ["1"];
class App extends Component {
  state = {
    collapsed: false,
    selectedIndex: 0
  };
  componentWillMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      console.log("on route change", location);
      // this.selectMenu(location.pathname)
    });
  }
  componentWillUnmount() {
    this.unlisten();
  }

  // selectMenu = e => {
  //     var routeArray = [
  //         {
  //             route: '/',
  //             key: 1
  //         },
  //         {
  //             route: '/sent',
  //             key: 10
  //         },
  //         {
  //             route: '/payment',
  //             key: 2
  //         }
  //     ]
  //     var getAns = routeArray.filter((data) => {
  //         return data.route === e;
  //     })
  //     console.log('yeh ans mila', getAns)
  //     if (getAns.length !== 0) {
  //         selectedKey = [];
  //         let keyToString = getAns[0].key.toString();
  //         selectedKey.push(keyToString);
  //         console.log(selectedKey)
  //     }
  // }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  handleClick = e => {
    console.log(e);
  };
  handleChange = e => {
    console.log("Changed route", e);
  };
  selectKey = e => {
    console.log("Selected ", e);
  };
  render() {
    return (
      <div className="App">
        <Layout style={{ minHeight: "100vh", background: "#333178" }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            style={{ background: "#333178" }}
          >
            <div className="logo">
              {this.state.collapsed ? (
                <h4 className="pt-4 pl-2 text-white tracking-wide app-title-sm">
                  BU
                </h4>
              ) : (
                <h4 className="pt-4 pl-2 text-white tracking-wide app-title">
                  Bill - U
                </h4>
              )}
            </div>
            <Menu
              className="tracking-wide"
              onClick={this.handleClick}
              theme="dark"
              defaultSelectedKeys={["1"]}
              mode="inline"
              style={{ background: "#333178" }}
            >
              <Menu.Item key="1">
                <Link to="/">
                  <Icon type="container" />
                  <span>Billing</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="10">
                <Link to="/sent">
                  <Icon type="desktop" />
                  <span>Sent Bills</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/payment">
                  <Icon type="desktop" />
                  <span>Payment</span>
                </Link>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />
                    <span>Summary</span>
                  </span>
                }
              >
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="team" />
                    <span>Bill Design</span>
                  </span>
                }
              >
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
              </SubMenu>
              <Menu.Item key="9">
                <Link to="/create-user">
                  <Icon type="file" />
                  <span>Create User</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ background: "#fff" }}>
            <Content>
              <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
                <Switch onChange={this.handleChange}>
                  <Route
                    exact
                    path="/"
                    key="1"
                    component={Bill}
                    onChange={this.handleChange}
                  />
                  <Route
                    exact
                    path="/payment"
                    key="2"
                    component={Payment}
                    onChange={this.handleChange}
                  />
                  <Route
                    exact
                    path="/sent"
                    key="10"
                    component={Sent}
                    onChange={this.handleChange}
                  />
                  <Route
                    exact
                    path="/create-user"
                    key="10"
                    component={CreateUser}
                    onChange={this.handleChange}
                  />
                </Switch>
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              Copyright ©2020 Created by PINKFRY
            </Footer>
          </Layout>
        </Layout>
      </div>
    );
  }
}

export default withRouter(App);
