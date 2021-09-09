import React from "react";

class Historial extends React.Component{
    render(){
        return (
        <div className= "recordatorio">
            <p>
            Selección anterior {this.props.historial[this.props.historial.length -1]}
            </p>
            <p>Historial de opciones elegidas: </p>
            <ul>{this.props.historial.slice(0, -1).map( (item, i) => <li key={i}>{item}</li> )}
                
                
               
            </ul>
        </div>
        )}
}
export default Historial;