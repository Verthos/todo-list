import React from "react";
import { StyledLi } from "./styles"

export function Todo(props){
    return(
        <StyledLi>
            <input type="checkbox" className="check"/>
            {props.value}
            <span>x</span>
        </StyledLi>
    )
}