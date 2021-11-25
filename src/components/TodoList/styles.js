import styled from "styled-components";

export const Container = styled.main`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: var(--very-dark-blue);
    min-height: 75vh;
    

    span{
            width: 25px;
            height: 25px;
            border-radius: 50%;
            background: white;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 1.5rem;
            
        }

    ul{
        list-style: none;
        display: flex;
        flex-direction: column;
        width: 100%;
        box-shadow: 0px 1px 1rem 1px black;
        border-radius: 0.5rem;

        button{
            background: none;
            border: none;
        }
    }

    div.content{
        top: -7rem;
        position: relative;
        width: 80%;
        max-width: 800px;
        min-height: 76vh;
    }
    
    li.complete{

        span{
            width: 25px;
            height: 25px;
            border-radius: 50%;
            background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
            display: flex;
            align-items: center;
            justify-content: center;
            h2{
                display: block;
            }
        }
        
        h4{
            opacity: 0.5;
            text-decoration: line-through;
        }
        
    }

    li.stats{
        display: flex;
        justify-content: space-between;
        padding: 0 1rem;
        background: var(--list-background);
        border-bottom-left-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;

        button{
            background: none;
            border: none;
            color: gray;
            height: 4rem;
        }
    }


    input.taskInput{
        width: 100%;
        height: 4rem;
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
        position: absolute;
        width: 100%;
        margin-top: 1rem;
        bottom: -5rem;
        border-radius: 0.5rem;
        background: white;
        display: flex;
        height: 4rem;
        align-items: center;
        color: gray;
        font-weight: bold;

        background: var(--list-background);
        

        ul{
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
            

            li{
                color: gray;
                transition: all 0.2s;
                transform: scale(1);
                cursor: pointer;

                

            }

            li.active, li:hover{
                color: var(--bright-blue);
                transition: all 0.2s;
                transform: scale(1.2);
            }

        }
    }

`