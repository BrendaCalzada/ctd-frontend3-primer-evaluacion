import React from "react";
import Opciones from "./Opciones";
import Historial from "./Historial";

class Historia extends React.Component {
  render() {
    return (
      <>
        <div className="layout">
          <div className="historia">
            <h1>{this.props.inicial.historia}</h1>
          </div>
          <div>
            <Opciones opciones= {this.props.inicial.opciones} handlerClick={this.props.handlerClick} />
          </div>
          <div>
            <Historial historial= {this.props.historial} />
          </div>
        </div>
      </>
    );
  }
}
export default Historia;
