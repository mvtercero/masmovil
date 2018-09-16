import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions/index-actions.js";

const mapStateToProps = state => {
  return {
    phones: state.phones
  }
}

class PhoneListContainer extends React.Component {
  componentWillMount() {
    console.log(this)
    this.props.loadApi()
  }

  render() {
    return (
      <ul data={this.props.phones}>
        {this.props.phones.map(phone =>
          <li key={phone.id}>
            {phone.title}
          </li>
        )}
      </ul>
    )
  }
}

export default PhoneListContainer;