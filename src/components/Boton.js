import React from "react";

class Boton extends React.Component {
  render() {
    return (
      <div className= "opcion">
        <p className= "cajita">
          <button id="a" className="botones" onClick={this.props.handlerClick}>
            A
          </button>
          { this.props.opciones.a}
        </p>
        
        <p className= "cajita">
          <button id="b" className="botones" onClick={this.props.handlerClick}>
            B
          </button>
          { this.props.opciones.b}
        </p>
      </div>
    );
  }
}

export default Boton;
