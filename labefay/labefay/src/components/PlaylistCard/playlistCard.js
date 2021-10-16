import React from "react";
import styled from "styled-components";

const PlaylistCardContainer = styled.div`
    margin: 15px;
    display:flex;
    flex-direction: column;
    align-items: center;

`

const NameContainer = styled.p`
    margin: 5px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 23px;
`

const DeleteButton = styled.p`
    color: #191414;
    margin: .1em 13vh 0;
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
const AbrirButton = styled.button`
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
const PlaylistCard = (props) => {
    return (
        <PlaylistCardContainer>
            <AbrirButton onClick={() => props.changePage("playlistDetail", props.playlistId)}>Abrir playlist</AbrirButton>
            <NameContainer>{props.name}</NameContainer>
            <DeleteButton onClick={() => props.deletePlaylist(props.playlistId)} >X</DeleteButton>
        </PlaylistCardContainer>
    )
}

export default PlaylistCard