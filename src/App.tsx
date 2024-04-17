import { Component } from 'react';

interface State {
  produccion: 'inactiva' | 'activa';
}

class ProduccionElemento extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      produccion: 'inactiva'
    };
  }

  componentDidMount() {
    // Simulación de inicio de producción después de que el componente ha sido montado
    setTimeout(() => {
      this.setState({ produccion: 'activa' });
    }, 2000);
  }

  componentDidUpdate() {
    // Verificar si el estado de producción ha cambiado y realizar acciones necesarias
    const { produccion } = this.state;
    console.log('El estado de producción ha cambiado a:', produccion);
  }

  componentWillUnmount() {
    // Limpieza de recursos o acciones antes de que el componente sea desmontado
    console.log('El componente está siendo desmontado.');
  }

  render() {
    return (
      <div>
        <h1>Estado de producción del elemento: {this.state.produccion}</h1>
      </div>
    );
  }
}

export default ProduccionElemento;
