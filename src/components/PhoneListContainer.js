import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions/index-actions.js";
import PhoneDetailComponent from "./PhoneDetailComponent.js";

const mapStateToProps = state => {
  return {
    phones: state.phones
  }
}

class PhoneListContainer extends React.Component {
  componentWillMount() {
    console.log(this)
    this.props.loadAPI()
  }

  render() {
    return (

      <ul data={this.props.phones}>{

        this.props.phones

          .map(phone =>
            <li key={phone.id}>
              <h2>{phone.title}</h2>
              <h3>{phone.description}</h3>
              <p>{phone.color}</p>
              <img src={phone.url_image} alt={phone.title} />
              <button onClick={() => (this.handleClick)} >Me interesa</button>
              <PhoneDetailComponent phone={phone} key={phone.id}></PhoneDetailComponent>
            </li>
          )}
      </ul>


    );
  }
}

export default connect(mapStateToProps, actionCreators)(PhoneListContainer);

