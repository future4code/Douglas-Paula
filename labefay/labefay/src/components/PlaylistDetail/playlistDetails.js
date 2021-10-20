import React from "react";
import styled from "styled-components";
import axios from "axios";
import TrackCard from "../TrackCard/TrackCard";
import { baseUrl, axiosConfig } from "../../constants/axiosConst";

const PlaylistDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: antiquewhite;

`
const Input = styled.input`
    border: none;
    border-bottom: 3px solid #1DB954;
    background: none;
`


const TrackCreationForm = styled.form`
    width: 100vw;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    div {
        display: flex;
        flex-direction: column;
        
    }
`
const Buttons = styled.button`
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

class PlaylistDetail extends React.Component {
    state = {
        tracks: [],
        trackName: "",
        artist: "",
        url: ""
    };

    componentDidMount = () => {
        this.fetchTracks()
    };

    fetchTracks = () => {
        axios.get(`${baseUrl}/${this.props.playlistId}/tracks`, axiosConfig).then(response => {
            this.setState({tracks: response.data.result.tracks})
        }).catch(err => {
            console.log(err)
        });
    };

    removeTrackFromPlaylist = (trackId) => {
        axios.delete(`${baseUrl}/${this.props.playlistId}/tracks/${trackId}`, axiosConfig).then(() => {
            this.fetchTracks();
        }).catch(err => {
            console.log(err);
        });
    };

    changeInputValues = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    addTrackToPlaylist = (e) => {
        e.preventDefault()
        const body = {
            name: this.state.trackName,
            artist: this.state.artist,
            url: this.state.url
        };

        axios.post(`${baseUrl}/${this.props.playlistId}/tracks`,
            body,
            axiosConfig
        ).then(() => {
            this.fetchTracks();
        }).catch(err => {
            console.log(err);
        });

        this.setState({
            trackName: "",
            artist: "",
            url: ""
        })
    };

    render () {
        const tracks = this.state.tracks.map(track => {
            return <TrackCard 
                key={track.id}
                trackName={track.name}
                artist={track.artist}
                url={track.url}
                trackId={track.id}
                removeTrackFromPlaylist={this.removeTrackFromPlaylist}
            />
        })

        return (
            <PlaylistDetailContainer>
                <TrackCreationForm onSubmit={this.addTrackToPlaylist} >
                    <div>
                        <label>Nome da música:</label>
                        <Input 
                            placeholder="Nome da música"
                            name="trackName"
                            value={this.state.trackName}
                            onChange={this.changeInputValues}
                        />
                    </div>
                    <div>
                        <label>Artista:</label>
                        <Input 
                            placeholder="Nome do Artista"
                            name="artist"
                            value={this.state.artist}
                            onChange={this.changeInputValues}
                        />
                    </div>
                    <div>
                        <label>URL da música:</label>
                        <Input 
                            placeholder="URL da música"
                            name="url"
                            value={this.state.url}
                            onChange={this.changeInputValues}
                        />
                    </div>
                    <Buttons type="submit">Adicionar música</Buttons>
                </TrackCreationForm>
                {tracks}
                <Buttons type="submit" onClick={() => this.props.changePage("playlists", "")} >Voltar para playlists</Buttons>
            </PlaylistDetailContainer>
        )
    };
};

export default PlaylistDetail