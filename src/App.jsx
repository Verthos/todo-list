import React from "react";
import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";
import { Footer } from "./components/Footer";
import { GlobalStyle } from "./styles/global";


export function App() {
  return (
    <>
      <Header/>
      <TodoList/>
      <Footer/>


      <GlobalStyle/>
    </>
  );
}
