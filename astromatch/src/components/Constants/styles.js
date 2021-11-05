import styled from 'styled-components'

const MainContainer = styled.div`
display: flex;
flex-direction: column;
width: 400px;
background-color: antiquewhite;
border-radius: 20px;
`
const Astromatch = styled.h1`
    font-family: 'Great Vibes', cursive;
    font-size: 70px;
`

const ClearButton = styled.button`
    background-color: navajowhite;
    border: 1px solid salmon;
    border-radius: 10px;
    color: black;
    padding: 7px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;

    :hover{
        background-color: salmon;
        color: white;
        }
`


const ImgContainer = styled.div`
width: 400px;
margin-bottom: 10px;
height: 400px;
background-image: url(${({url})=>url});
background-repeat: no-repeat;
background-position: top center;
background-size: cover;
border-radius: 10px;
display:flex;
flex-direction:column;
align-items: center;
justify-content: flex-end;
`

const Infos = styled.div`
background-color: rgba(0,0,0,0.3);
width: 400px;
border-radius: 10px;
`

const ChooseButtonsDiv = styled.div`
display: flex;
justify-content: center;
margin-top: 15px;
padding: 50px 0px;
`

const StyledButtonLike = styled.button`
    width: 70px;
    height: 70px;
    margin: 10px 50px;
    font-size: 40px;
    border-radius: 40px;
    color: green;
    border: none;
    background-color: navajowhite;
    
    :hover{
        cursor:pointer;
        background-color: salmon;
    }
`
const StyledButtonDisLike = styled.button`
    width: 70px;
    height: 70px;
    margin: 10px 50px;
    font-size: 40px;
    border-radius: 40px;
    color: red;
    border:none;
    background-color: navajowhite;
    
    :hover{
        cursor:pointer;
        background-color: salmon;
    }
`
const LikeDislikeProfile = styled.div`
    border: 1px;
    border-style: groove;
    border-radius: 10px;
    border-color: salmon;
` 

const Name = styled.p`
font-size: 20px;
text-align: center;
font-family: system-ui;
color: white;
margin-bottom: 5px;
`
const Bio = styled.p`
font-size: 15px;
text-align: center;
font-family: system-ui;
color: white;
`
const ContainerMatch = styled.div`
    display: flex;
    padding: 10px;
    justify-items: center;
    font-size: 25px;
    font-family: sans-serif;
    border:3px solid salmon;
    border-radius: 10px;
    cursor: pointer;
    margin-bottom: 10px;
    :hover{
        cursor:pointer;
        background-color: salmon;
    }

`
const MatchName = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left:20px;
`

const ContainerPhoto = styled.img`
    border-radius: 80px;
    width: 100px;
    height: 100px;
`

const StyledLink = styled.a`
    text-decoration: none;
    color: white;
    :hover{
        cursor:pointer;
        color: red;
    }
`

export {
    MainContainer,
    Infos,
    ChooseButtonsDiv,
    Name,
    Bio,
    StyledButtonLike,
    StyledButtonDisLike,
    ImgContainer,
    LikeDislikeProfile,
    Astromatch,
    ClearButton,
    ContainerMatch,
    ContainerPhoto,
    MatchName,
    StyledLink
}