import styled from "styled-components";

const Formulario = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`

function Etapa3() {
    return (
      <Formulario>
          <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
          <p>5. Por que você não terminou um curso de graduação?</p>
          <input></input>
          <p>você fez algum curso complementar?</p>
          <select name="cursoComplementar">
          <option value="Nenhum">Nenhum</option>
          <option value="tecnico">Curso técnico</option>
          <option value="ingles">Curso de inglês</option>
          </select>
      </Formulario>
    );
}
export default Etapa3;