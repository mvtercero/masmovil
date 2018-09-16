import React from "react";
import "./PhoneDetailComponent.css";

class PhoneDetailComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="phone-card hidden" key={this.props.id}>
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