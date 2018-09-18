import React from "react";
import "../css/PhoneDetailComponent.css";

class PhoneDetailComponent extends React.Component {
  render() {
    return (

      <div className="phone-card__container hidden">
        <div className="phone__container--detail">
          <h2 className="phone_item--detail--title">{this.props.phone.title}</h2>
          <div className="phone_item--detail--card">
            <h3 className="phone_item--detail--price">{`Desde ` + this.props.phone.price}</h3>
            <p>{`Pantalla:${this.props.phone.screen}`}</p>
            <p>{`Cámara:${this.props.phone.camera}`}</p>
            <p>{`Capacidad:${this.props.phone.storage}`}</p>
            <p>{`Sim:${this.props.phone.sim}`}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default PhoneDetailComponent;