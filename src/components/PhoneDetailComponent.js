import React from "react";


class PhoneDetailComponent extends React.Component {
  render() {
    return (
      <li key={this.props.id}>
        <h2>FICHA TÉCNICA</h2>
        <p>{this.props.phone.title}</p>
        <div>
          <p>{`precio: ` + this.props.phone.price}</p>
        </div>
      </li>
    )
  }
}

export default PhoneDetailComponent;