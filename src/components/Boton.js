import React from "react";

class Boton extends React.Component {
  render() {
    return (
      <div className= "opcion">
        <div className= "cajaBoton">
          <button id="a" className="botones" onClick={this.props.handlerClick}>
            A
          </button>
          <h3>{ this.props.opciones.a}</h3>
        </div>
        
        <div className= "cajaBoton">
          <button id="b" className="botones" onClick={this.props.handlerClick}>
            B
          </button>
          <h3>{ this.props.opciones.b}</h3>
        </div>
      </div>
    );
  }
}

export default Boton;
