import styled from "styled-components";

const Formulario = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`

function Etapa1() {
return(
    <Formulario>
       <h1>ETAPA 1 - DADOS GERAIS</h1>
        <p>1. Qual o seu nome?</p>
        <input></input>
        <p>2. Qual sua idade?</p>
        <input></input>
        <p>3. Qual o seu email?</p>
        <input></input>
        <p>4. Qual sua escolaridade?</p>
        <select name="escolaridade">
          <option value="EMI">Ensino médio incompleto</option>
          <option value="EMC">Ensino médio completo</option>
          <option value="ESI">Ensino superior incompleto</option>
          <option value="ESC">Ensino superior completo</option>
        </select>
    </Formulario>
);
}


export default Etapa1;