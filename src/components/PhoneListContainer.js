import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions/index-actions.js";
import AlertModal from "./Modals/AlertModal.js";
import ModalRoot from "./Modals/ModalRoot.js";

// import * as actionCreators from "../actions/modal-actions.js";
import PhoneDetailComponent from "./PhoneDetailComponent.js";

const mapStateToProps = state => {
  return {
    phones: state.phones
  }
}

const mapDispatchToProps = dispatch => ({
  hideModal: () => dispatch(hideModal()),
  showModal: (modalProps, modalType) => {
    dispatch(showModal({ modalProps, modalType }))
  }
})

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
              <p>{`precio: ` + phone.price}</p>
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

