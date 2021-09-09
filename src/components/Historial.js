import React from "react";

class Historial extends React.Component{
    render(){
        return (
        <div className= "recordatorio">
            <p>
            Selección Anterior {this.props.historial[this.props.historial.length -1]}
            </p>
            <p>Historial de opciones elegias: </p>
            <ul>{this.props.historial.slice(0, -1).map( (item, i) => <li key={i}>{item}</li> )}
                {/* {this.props.historial.map((item, i)=><li key={i}>{item}</li>)} */}
                {/* .slice(0, this.props.historial.length -1) */}
                
               
            </ul>
        </div>
        )}
}
export default Historial;