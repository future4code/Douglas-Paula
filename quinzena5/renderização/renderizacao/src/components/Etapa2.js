import styled from "styled-components";

const Formulario = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`
function Etapa2() {
    return (
        <Formulario>
            <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPEIOR</h1>
            <p>5. Qual curso?</p>
            <input></input>
            <p>6. Qual a unidade de ensino?</p>
            <input></input>
        </Formulario>
    );
}
export default Etapa2;