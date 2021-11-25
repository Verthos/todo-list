import React from "react";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";
import { GlobalStyle } from "./styles/global";


export function App() {
  return (
    <>
      <Header/>
      <TodoList/>
     
      <GlobalStyle/>
    </>
  );
}
