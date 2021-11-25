import styled from "styled-components";


export const StyledLi = styled.li`

    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 3rem;
    background: var(--list-background);
    color: white;

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