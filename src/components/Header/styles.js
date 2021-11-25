import styled from "styled-components";
import bgMobileDark from "../../assets/images/bg-mobile-dark.jpg"

export const StyledHeader = styled.header`
    min-height: 15rem;
    width: 100vw;
    background: black;
    background-image: url(${bgMobileDark});
    background-repeat: round;
    padding: 2.5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    color: white;
    
    h1{
        font-weight: normal;
    }
    


`