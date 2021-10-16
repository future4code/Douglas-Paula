import React from "react";
import styled from "styled-components";
import axios from "axios"
import { baseUrl, axiosConfig } from "../../constants/axiosConst";

const PlaylistCreationFormContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: antiquewhite;
    
`

const PlaylistCreationForm = styled.form`   
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`
const ButtonsContainer = styled.div`
    color: #191414;
    margin: .75em 2vh 0;
    font-size: 1em;
    padding: 0.5vh 5vh;
    border-radius: 10vh;
    display: grid;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: .05em;
    border: 2px solid rgba(0, 0, 0, 0);
    background-color: #1DB954;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    cursor: pointer;
    :active{
        color:#1DB900;
    };
`

const Input = styled.input`
    border: none;
    border-bottom: 3px solid #1DB954;
    background: none;
`

class PlaylistCreationPage extends React.Component {
    state = {
        inputNameValue: ""
    }

    changeInputnameValue = (e) => {
        this.setState({inputNameValue: e.target.value})
    }

    createPlaylist = (e) => {
        e.preventDefault();
        const body = {
            name: this.state.inputNameValue
        };

        axios.post(baseUrl, body, axiosConfig).then(() => {
            alert('Playlist cadastrada com sucesso')
        }).catch(err => [
            console.log(err)
        ]);
        this.setState({inputNameValue: ""});
    };
    
    render () {
        return (
            <PlaylistCreationFormContainer>
                <h1>Crie sua Playlist</h1>
                <h3>É facil e rapido!</h3>
                <PlaylistCreationForm onSubmit={this.createPlaylist} >
                    <label>Insira o nome da playlist</label>
                    <Input 
                        placeholder="Nome da Playlist"
                        type="text"
                        value={this.state.inputNameValue}
                        onChange={this.changeInputnameValue}
                    />
                    <ButtonsContainer type="submit">Cadastrar nova Playlist</ButtonsContainer>
                </PlaylistCreationForm>
            </PlaylistCreationFormContainer>
        );
    };
};

export default PlaylistCreationPage