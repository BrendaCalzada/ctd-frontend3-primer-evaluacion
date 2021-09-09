import React from "react";
import Boton from "./Boton";

class Opciones extends React.Component {
  render() {
    return (
      <div className= "opciones">
        <Boton opciones= {this.props.opciones} handlerClick={this.props.handlerClick} />
      </div>
    );
  }
}
export default Opciones;
