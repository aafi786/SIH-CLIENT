import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Icon } from "antd";
import { Link } from "react-router-dom";

class DraftItem extends Component {
  constructor() {
    super();
    this.state = {};
    this.print = this.print.bind(this);
  }
  print() {
    console.log(this.props.bill.title);
  }

  edit() {
    //redirect or popup edit screen  @ankush
  }

  delete() {
    //make delete route @shubham
  }

  send() {}

  render() {
    const { bill } = this.props;

    return (
      <div>
        <div class="uk-card uk-card-default uk-card-body uk-width-1-1@m">
          <h3 class="uk-card-title">
            <a href="#">#{bill._id.substr(16, 22)}</a>
          </h3>
          <div className="mt-4 leading-none">
            <p className="text-sm">Title :{bill.title}</p>
            <p>Created On : {bill.date}</p>
          </div>
          <button class="uk-button uk-button-default cover-btn">
            <Link
              to={`/edit/${bill._id}`}
              // style={{ color: "white" }}
            >
              <Icon className="ic-size" type="edit" />
            </Link>
          </button>
          <button
            onClick={this.print}
            class="uk-button uk-button-default cover-btn-outline"
          >
            <Icon className="ic-size" type="delete" />
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(DraftItem);
