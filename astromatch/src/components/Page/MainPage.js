import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL } from "../Constants/url";
import Profile from '../Profiles'
import { ClearButton, StyledButtonLike, StyledButtonDisLike, LikeDislikeProfile } from "../Constants/styles"


const MainPage = (props) => {

    const [profile, setProfile] = useState([]) 

    const getProfile = () => {
        axios
        .get(`${BASE_URL}/person`)
        .then((response) => {
            setProfile(response.data.profile)
            console.log(response.data.profile)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const choosePerson = (choice) => { 

        const body = {
            id: profile.id,
            choice: choice
        }
        if(!profile.id){
            return
        }
        axios
            .post(`${BASE_URL}/choose-person`, body)
            .then(() => {
                getProfile()
            })
            .catch((error) => {
                alert(error.response)
            })
    }

    const clear = () =>{
        axios
        .put(`${BASE_URL}/clear`)
        .then((response) =>{
            console.log(response.data)
        }).catch((error) => {
            console.log(error.data)
        })
    }

    useEffect(() =>{
        getProfile();
        clear();
    },[])

    return(
        <LikeDislikeProfile>
            {profile ?
            <Profile 
            photo={profile.photo}
            key={profile.id}
            name={profile.name}
            age={profile.age}
            bio={profile.bio}
            /> : <p>💔O cardápio acabou, volte mais tarde!😿</p>}
            <div>
                <StyledButtonDisLike onClick={profile && profile.id ? () => choosePerson(false): null}>❌</StyledButtonDisLike>
                <StyledButtonLike onClick={profile && profile.id ? () => choosePerson(true): null}>💕</StyledButtonLike>
            </div>
            <div>
                <ClearButton onClick={() =>{clear()}}> Limpar Matches </ClearButton>
                <ClearButton onClick={ () => {props.changePage('matchesPage')}}>Pagina de Matches</ClearButton>
            </div>   
        </LikeDislikeProfile>
    )

}

export default MainPage;



