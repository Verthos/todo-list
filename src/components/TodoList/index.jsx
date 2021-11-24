import React, {useState}from "react";
import { Todo } from "../Todo";

export function TodoList(){

    const [todos, setTodos] = useState([
        "eu sou um todo 1",
        "eu sou um todo 2",
        "eu sou um todo 3"
    ])



    return(
        <ul>
            {
                todos.map(todo => {
                    return(<Todo value={todo}/>)
                })
            }
        </ul>
    )
}