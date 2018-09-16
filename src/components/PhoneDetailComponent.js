import React from "react";
import "./PhoneDetailComponent.css";

class PhoneDetailComponent extends React.Component {
  render() {
    return (
      <div onClick={this.props.onClick}>
        <div className="phone-card" key={this.props.id}>
          <h2>FICHA TÉCNICA</h2>
          <p>{this.props.phone.title}</p>
          <div>
            <p>{`precio: ` + this.props.phone.price}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default PhoneDetailComponent;