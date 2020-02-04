import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Icon } from "antd";
// import { Link } from 'react-router-dom';

class DraftItem extends Component {
  render() {
    const { bill } = this.props;

    return (
      <div>
        <div class="uk-card uk-card-default uk-card-body uk-width-1-1@m">
          <h3 class="uk-card-title">
            <a href="#">#23457899</a>
          </h3>
          <div className="mt-4 leading-none">
            <p className="text-sm">Title :{bill.title}</p>
            <p>Created On : 20 Jan,2020 </p>
          </div>
          <button class="uk-button uk-button-default cover-btn">
            <Icon className="ic-size" type="edit" />
          </button>
          <button class="uk-button uk-button-default cover-btn-outline">
            <Icon className="ic-size" type="delete" />
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(DraftItem);
