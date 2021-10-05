import styled from "styled-components";

const Formulario = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`

function Final() {
    return (
        <Formulario>
            <h1>O FORMULÁRIO ACABOU</h1>
            <p>Muito obrigado por participar! Entraremos em contato!</p>
        </Formulario>
    );
}
export default Final;