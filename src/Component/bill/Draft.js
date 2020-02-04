import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../common/Spinner";
import { getAllBills } from "../../actions/billActions";

import DraftLoop from "./DraftLoop";

class Draft extends Component {
  componentDidMount() {
    this.props.getAllBills();
  }
  render() {
    const { bills, loading } = this.props.bill;
    let billContent;

    if (bills === null || loading) {
      billContent = <Spinner />;
    } else {
      billContent = <DraftLoop bills={bills} />;
    }

    return (
      <div>
        <div class="uk-child-width-1-2@s uk-child-width-1-3@m" uk-grid="true">
          {/* Looping for display Starts Here */}
          {billContent}
          {/* Looping ENDS HERE */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  bill: state.bill
});

export default connect(mapStateToProps, { getAllBills })(Draft);
