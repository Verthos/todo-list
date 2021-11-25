import React, {useState}from "react";
import { Todo } from "../Todo";
import { Container } from "./styles"

export function TodoList(){

    const [newTitle, setNewTitle] = useState("")

    const addNewTask = () => {
        setTodos(
            [...todos, 
                {
                    title: newTitle,
                    subtasks: [
                        "subtask 1"
                    ]
                }
            ]
        )
        console.log(newTitle);
        console.log(todos)
    }

    const [todos, setTodos] = useState([
        {
            title: "eu sou um todo 1",
            subtasks: [
                "subtask 1"
            ]
        },
        {
            title: "eu sou um todo 2",
            subtasks: [
                "subtask 1"
            ]
        },
        {
            title: "eu sou um todo 3",
            subtasks: [
                "subtask 1"
            ]
        }
    ])


    return(


        <Container>
            <div className="content">
                <form onSubmit={event => event.preventDefault()}>
                    <button className="formSubmit" onClick={() => addNewTask()}></button>
                    <input type="text" className="taskInput" placeholder="Criar uma nova tarefa" onChange={event => setNewTitle(event.target.value)}/>
                </form>
                <ul>
                    {
                        todos.map((todo, i) => {
                            return(<Todo key={todo.title} onClick={() => console.log(i)} value={todo.title}/>)  
                        })
                    }
                </ul>
                <section className="filters">
                    <ul>
                        <li>All</li>
                        <li>Active</li>
                        <li>Completed</li>
                    </ul>
                </section>    

            </div>
            
        </Container>

    )
}