import React, { Component } from "react";
import PropTypes from "prop-types";
import DraftItem from "./DraftItem";

class DraftLoop extends Component {
  render() {
    const { bills } = this.props;
    // console.log("Bills:" + bills);
    return bills.map(bill => <DraftItem key={bill._id} bill={bill} />);
  }
}

DraftLoop.propTypes = {
  bills: PropTypes.array.isRequired
};

export default DraftLoop;
