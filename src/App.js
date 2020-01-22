import React, { Component } from 'react';
import './App.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import bill from './icons/bill.jpg'


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;






class App extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {

    return (
      <div className="App">
        <Layout style={{ minHeight: '100vh', background: '#333178' }}>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} style={{ background: '#333178' }}>
            <div className="logo">
              <h4 className="pt-4 pl-2 text-white tracking-wide">Billing Co</h4>
            </div>
            <Menu className="tracking-wide" theme="dark" defaultSelectedKeys={['1']} mode="inline" style={{ background: '#333178' }}>
              <Menu.Item key="1">
                <Icon type="pie-chart" />
                <span>Option 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop" />
                <span>Option 2</span>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />
                    <span>User</span>
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
                    <span>Team</span>
                  </span>
                }
              >
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
              </SubMenu>
              <Menu.Item key="9">
                <Icon type="file" />
                <span>File</span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ background: '#fff' }}>

            <Content>

              <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                <div className="w-full backg mt-8 flex rounded-lg">
                  <div className="flex-1">
                    <img className="h-64 img-at" src={bill} alt="bill" />
                  </div>

                  <div className="flex-1">
                    <h3 className="cover-heading">Welcome to the Future of Billing</h3>
                    <button class="uk-button uk-button-default cover-btn">
                      Get Started
                    </button>

                  </div>

                </div>
                <nav class="uk-navbar-container" style={{ background: '#fff' }} uk-navbar="true">

                  <div class="uk-navbar-left">

                    <ul class="uk-navbar-nav">
                      <li class="uk-active"><a href="#">Active</a></li>

                    </ul>

                  </div>

                  <div class="uk-navbar-right">

                    <ul class="uk-navbar-nav">

                      <li>
                        <button class="uk-button uk-button-default cover-btn">
                          <span>+</span> Generate
                    </button>
                      </li>
                    </ul>

                  </div>

                </nav>

              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
          </Layout>
        </Layout>
      </div>
    );
  }

}

export default App;
