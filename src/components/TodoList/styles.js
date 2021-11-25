import styled from "styled-components";

export const Container = styled.main`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: var(--very-dark-blue);
    min-height: 50vh;


    ul{
        list-style: none;
        display: flex;
        flex-direction: column;
        width: 100%;
        box-shadow: 0px 1px 1rem 1px black;
        border-radius: 0.5rem;
    }

    div.content{
        top: -7rem;
        position: relative;
        width: 80%;
    }




    input.taskInput{
        width: 100%;
        height: 3rem;
        margin: 1rem 0rem;
        border: none;
        box-shadow: 1px 1px 0.5rem 1px black;
        background: var(--list-background);
        padding: 0 2rem;
        border-radius: 0.5rem;
        color: white;
        ::placeholder{
            color: gray;
            opacity: 0.5;
        }

    }

    button.formSubmit{
        display: none;
    }
    
    section.filters{
        margin-top: 1rem;
        border-radius: 0.5rem;
        background: white;
        display: flex;
        height: 3rem;
        align-items: center;
        color: white;

        background: var(--list-background);
        

        ul{
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
        }
    }

`