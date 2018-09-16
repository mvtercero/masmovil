import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../actions/index-actions.js";
import PhoneDetailComponent from "./PhoneDetailComponent.js";
// import "./PhoneListContainer.css";

const mapStateToProps = state => {
  return {
    phones: state.phones
  }
}

class PhoneListContainer extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  componentWillMount() {
    this.props.loadAPI()
  }

  handleClick(event) {
    this.props.showPhoneCard(event);
  }

  render() {
    return (
      <ul className="phone__container--list">{
        this.props.phones
          .map(phone =>
            <li className="phone__container-list-item" key={phone.id} >
              <h2 className="phone_item--title">{phone.title}</h2>
              <div className="phone_item_container">
                <img className="phone_item--img" src={phone.url_image} alt={phone.title} />
                <div className="phone_item_container--text">
                  <p className="phone_item--description">{phone.description}</p>
                  <p>{`precio: ` + phone.price}</p>
                  <p>{phone.color}</p>
                </div>
              </div>

              <div onClick={this.handleClick}>
                <button>Me interesa</button>
                <PhoneDetailComponent phone={phone} key={phone.id}></PhoneDetailComponent>
              </div>
            </li>
          )}
      </ul>


    );
  }
}

export default connect(mapStateToProps, actionCreators)(PhoneListContainer);

