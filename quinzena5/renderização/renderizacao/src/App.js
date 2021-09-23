import React from "react";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Botao = styled.button`
  margin-top: 20px;
`

export class App extends React.Component {
  state = {
    etapa: 1,
  }

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
        break
      case 2:
        return <Etapa2 />;
        break
      case 3:
        return <Etapa3 />;
        break
      case 4:
        return <Final />
        break
      default:
        alert("[ERRO] página não encontrada")
        break
    }
  }

  apagaBotao = () => {
    switch (this.state.etapa) {
      case 1:
        return <Botao onClick={this.irParaProximaEtapa}>Próxima etapa</Botao>;
        break
      case 2:
        return <Botao onClick={this.irParaProximaEtapa}>Próxima etapa</Botao>;
        break
      case 3:
        return <Botao onClick={this.irParaProximaEtapa}>Próxima etapa</Botao>;
        break
      case 4:
        return ''
        break
      default:
        alert("[ERRO] botão fora do ar")
        break
    }
  }



  irParaProximaEtapa = () => {
    this.setState({
      state: this.state.etapa += 1
    })

  }

  render() {
    return (
      <Div>
        {this.renderizaEtapa()}
        {this.apagaBotao()}
      </Div>
    );
  }
}
export default App;