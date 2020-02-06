import React, { Component } from "react";
import { Input, Button, message, Table, Divider } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";

const { Column } = Table;

export default class CreateUser extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      username: '',
      email: '',
      password: '',
      users: []
    }
  }
  componentDidMount() {
    this.fetchUser();
  }
  fetchUser = () => {
    axios.post('http://localhost:5000/auth/get-alluser')
      .then(res => {
        console.log(res.data);
        this.setState({
          users: res.data.msg
        })
      })
      .catch(err => {
        message.error(err)
      })
  }
  onChangeText = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
    console.log(this.state.email);
  }
  onSubmit = () => {

    axios.post('http://localhost:5000/auth/register', {
      name: this.state.name,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    })
      .then(res => {
        if (res.data.sucsess) {
          message.success('User Created !');
          this.setState({
            username: '',
            email: '',
            password: '',
            name: ''
          })
          this.fetchUser();
        } else {
          message.error('Some error occur try again !');
        }

      })

  }
  render() {
    return (
      <div>
        <h1>Create User</h1>
        <div class="mt-8" uk-grid="true">
          <div class="uk-width-1-3@m">
            <div class="uk-card uk-card-default uk-card-body">
              <label className="label-title">Name</label>
              <Input
                value={this.state.name}
                placeholder="Your Name"
                type="text"
                id="name"
                onChange={this.onChangeText}
              />
              <br />
              <br />
              <label className="label-title">Email</label>
              <Input
                value={this.state.email}
                type="email"
                placeholder="Your Email xyz@xyz.com"
                id="email"
                onChange={this.onChangeText}
              />
              <br />
              <br />
              <label className="label-title">Username</label>
              <Input
                value={this.state.username}
                type="text"
                placeholder="Your Nickname"
                id="username"
                onChange={this.onChangeText}
              />
              <br />
              <br />
              <label className="label-title">Password</label>
              <Input
                value={this.state.password}
                type="password"
                placeholder="Your Secret Key "
                id="password"
                onChange={this.onChangeText}
              />
              <br />
              <br />
              <Button
                className="cover-btn-purple uk-margin-left"
                type="primary"
                onClick={this.onSubmit}
              >
                Create User
              </Button>
            </div>
          </div>
          <div class="uk-width-expand@m">
            <div class="uk-card uk-card-default uk-card-body">
              <Table dataSource={this.state.users}>
                <Column title="Name" dataIndex="name" key="name" />
                <Column title="Username" dataIndex="username" key="username" />
                <Column title="Email" dataIndex="email" key="email" />

                <Column
                  title="Action"
                  key="_id"
                  render={(text, record) => (
                    <span>
                      <Divider type="vertical" />
                      <Link to="#">Delete</Link>
                    </span>
                  )}
                />
              </Table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
