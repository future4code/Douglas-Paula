import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #191414;
    color: #1DB954;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
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
const Labefay = styled.h1`
    color: #1DB954;
`

const Header = (props) => {
    return (
        <HeaderContainer>
            <Labefay>Labefay   <img alt="fay" src="https://emoji.slack-edge.com/TLAVDH7C2/fayra/ac457996171eadef.gif"/></Labefay>
            <ButtonsContainer onClick={() => props.changePage("playlistCreationPage")} >Cadastrar Playlist</ButtonsContainer>
            <ButtonsContainer onClick={() => props.changePage("playlistManagerPage")} >Gerenciar Playlists</ButtonsContainer>
        </HeaderContainer>
    )
}

export default Header