import styled from "styled-components";


export const StyledLi = styled.li`

    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 4rem;
    background: var(--list-background);
    color: lightgray;
    font-size: 1.1rem;

    button{
        position: absolute;
        right: 3rem;
        color: gray;
        font-size: 1.3rem;
    }

    h4{
        width: 60%;
        text-align: left;
    }

    &+li{
        border-top: 1px solid var(--light-grayish-blue);

    }

    &:first-child{
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
    }

    &:last-child{
        border-bottom: 1px solid var(--light-grayish-blue);
        border-bottom-left-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
    }

    input.check{
        
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }


    

`