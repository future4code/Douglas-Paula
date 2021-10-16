import React from "react";
import styled from "styled-components";
import axios from "axios"
import PlaylistCard from "../PlaylistCard/playlistCard";
import { baseUrl, axiosConfig } from "../../constants/axiosConst";

const PlaylistsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: antiquewhite;
    height:44.5vw;

`

class Playlists extends React.Component {
    state = {
        playlists: []
    }

    componentDidMount = () => {
        this.fetchPlaylists()
    }

    fetchPlaylists = () => {
        axios.get(baseUrl, axiosConfig).then(response => {
            this.setState({playlists: response.data.result.list})
        }).catch(err => {
            console.log(err)
        })
    };

    deletePlaylist = (playlistId) => {
        axios.delete(`${baseUrl}/${playlistId}`, axiosConfig).then(response => {
            this.fetchPlaylists()
        }).catch(err => {
            console.log(err)
        });
    };

    render () {
        const playlists = this.state.playlists.map(playlist => {
            return <PlaylistCard 
                key={playlist.id}
                changePage={this.props.changePage}
                name={playlist.name}
                playlistId={playlist.id}
                deletePlaylist={this.deletePlaylist}
            />
        })

        return (
            <PlaylistsContainer>
                {playlists}
            </PlaylistsContainer>
        )
    };
};

export default Playlists