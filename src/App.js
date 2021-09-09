import React from "react";
import data from "./components/data.json";
import Historia from "./components/Historia";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataJson: {},
      loading: true,
      inicial: {},
      historial: [],
      id: 1,
    };
  }
  handlerClick = (e) => {
    const idBoton = e.target.id;
    let id = this.state.id + 1;
    let historialAux = this.state.historial;
    let proxHistoria = this.state.dataJson.find(
      (item) => item.id === id + idBoton
    );
    if (proxHistoria != null) {
      historialAux.push(idBoton.toUpperCase());
      console.log(historialAux);
      this.setState({ inicial: proxHistoria, id: id, historial: historialAux });
    } else {
      alert("Fin de esta historia 😁");
    }
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ dataJson: data, inicial: data[0], loading: false });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <div className="fondo">
          {this.state.loading ? (
            <div>Loading...</div>
          ) : (
            <Historia
              inicial={this.state.inicial}
              historial={this.state.historial}
              handlerClick={this.handlerClick}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
