import React from "react";
import { StyledLi } from "./styles"
import {MdDone} from "react-icons/md"


export function Todo(props){


    return(
        <StyledLi className={props.isComplete ? "complete" : ""} onClick={props.onClick}>
            <span className="check"><MdDone/></span>
            <h4>{props.value}</h4>
            <button onClick={() => props.deleteTodo()}>x</button>
        </StyledLi>
    )
}