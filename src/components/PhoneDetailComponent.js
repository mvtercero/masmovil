import React from "react";
// import "./PhoneDetailComponent.css";

class PhoneDetailComponent extends React.Component {
  render() {
    return (

      <div className="phone-card hidden" key={this.props.id}>
        <div className="prueba">
          <h2>GRATIS</h2>
          <p>{`precio: ` + this.props.phone.price}</p>
        </div>
      </div>
    )
  }
}

export default PhoneDetailComponent;