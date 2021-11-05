import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../Constants/url";
import Match from "../matches";
import { ClearButton } from "../Constants/styles";

const MatchesPage = (props) => {

    const [matches, setMatches] = useState([])

    const getMatches = () =>{
        axios
        .get(`${BASE_URL}/matches`)
        .then((response) =>{
            setMatches(response.data.matches)
        })
        .catch((error)=>{
            alert(error)
        })
    }

    useEffect(() =>{
        getMatches()
    },[])

    return(
        <div>
            <ClearButton onClick={ () => {props.changePage('mainPage')}}>Voltar a pagina principal ➤</ClearButton>
            <h1>matches</h1>
            {matches.map(match =>{
                return(
                    <Match
                        key={match.id}
                        name={match.name}
                        photo={match.photo}
                    />
                )
            })}
        </div>
    )
}

export default MatchesPage