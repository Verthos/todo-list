import React from "react";
import { StyledHeader } from "./styles"
import sun from "../../assets/icon-sun.svg"


export function Header(){
    return(
        <StyledHeader>
            <h1>
                T O D O
            </h1>

            <img src={sun} alt="theme_icon" />
        </StyledHeader>
    )
}