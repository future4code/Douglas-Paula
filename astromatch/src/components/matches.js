import { ContainerMatch, ContainerPhoto, MatchName } from "./Constants/styles"

const Match = (props) => {
    return(
        <ContainerMatch>
            <ContainerPhoto src={props.photo}/>
            <MatchName>{props.name}</MatchName>
        </ContainerMatch>
    )
}

export default Match;