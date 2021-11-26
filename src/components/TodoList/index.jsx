import React, {useState}from "react";
import { Todo } from "../Todo";
import { Container } from "./styles"

const filters = [
    "Todos",
    "Ativos",
    "Completos"
]

export function TodoList(){

    const handleAddNewTask = () => {
        setTodos(
            [...todos, 
                {
                    id: Math.round(Math.random()*100),
                    title: newTitle,
                    complete: false,
                    subtasks: [
                        "subtask 1"
                    ]
                }
            ]
        )
        setNewTitle("")
    }

    const handleClearCompleted =  () => {
        let newTodoList = todos.filter(todo => todo.complete === false)
        setTodos(newTodoList)
    }

    const handleCompleteTask = (id) => {
        setTodos(prevState => 
            {
                const newState = prevState.map(todo => 
                todo.id === id ? {...todo, complete: !todo.complete} : todo 
            ) 
            return newState
        }
        )};
    
    const handleDeleteTodo = (id) => {
        let newTodoList = todos.filter(todo => todo.id !== id)
        setTodos(newTodoList)
    }

    const [todos, setTodos] = useState([
        {
            id: 1,
            title: "eu sou um todo 1",
            complete: false, 
            subtasks: [
                "subtask 1"
            ]
        },
        {
            id: 2,
            title: "eu sou um todo 2",
            complete: true, 
            subtasks: [
                "subtask 1"
            ]
        }
    ])

    const [newTitle, setNewTitle] = useState("")

    const [filterIndex, setFilterIndex] = useState(0)

    return(


        <Container>
            <div className="content">
                <form onSubmit={event => event.preventDefault()}>
                    <button className="formSubmit" onClick={() => handleAddNewTask()/*ocult button using display none*/}></button>
                    <input value={newTitle} type="text" className="taskInput" placeholder="Criar uma nova tarefa" onChange={event => setNewTitle(event.target.value)}/>
                </form>
                <ul>
                    {   filterIndex === 1 ?
                        todos.map(todo => {if(todo.complete === false) return(<Todo onClick={() => handleCompleteTask(todo.id)} key={todo.id} isComplete={todo.complete} value={todo.title}/>)}) // eslint-disable-line
                        : filterIndex === 2 ?
                        todos.map(todo => {if(todo.complete === true) return(<Todo onClick={() => handleCompleteTask(todo.id)} key={todo.id} isComplete={todo.complete} value={todo.title}/>)}) // eslint-disable-line
                        : 
                        todos.map(todo => { return(<Todo onClick={() => handleCompleteTask(todo.id)} deleteTodo={() => handleDeleteTodo(todo.id)} key={todo.id} isComplete={todo.complete} value={todo.title}/>)})
                    }
                    <li className="stats">
                        <button>{todos?.length} {todos?.length > 1 ? "itens pendentes" : "item pendente"}</button>
                        <button onClick={() => handleClearCompleted()}>Limpar completos</button>
                    </li>
                </ul>
                <section className="filters">
                    <ul>
                        {
                        filters.map((filter, i) => {
                            return(
                                <li key={filter} className={filterIndex === i ? "active" : ""} onClick={() => setFilterIndex(i)}>
                                    {filter}
                                </li>
                            )
                        })}
                    </ul>
                </section>    
                
            </div>
            
        </Container>

    )
}