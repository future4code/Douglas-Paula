import React from "react";
import { ImgContainer, Infos, Name, Bio } from "./Constants/styles"

const Profile = (props) => {
    return(
        <ImgContainer url={props.photo}>
            <Infos>
                <Name>{props.name}, {props.age}</Name>
                <Bio>{props.bio}</Bio>
            </Infos>
        </ImgContainer>
    )
}

export default Profile;