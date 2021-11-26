import styled from "styled-components";
import bgMobileDark from "../../assets/images/bg-mobile-dark.jpg"
import bgDesktopDark from "../../assets/images/bg-desktop-dark.jpg"


export const StyledHeader = styled.header`
    min-height: 15rem;
    width: 100vw;
    background: black;
    background-image: url(${bgMobileDark});
    background-repeat: round;
    padding: 4rem 3rem;

    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    color: white;
    
    h1{
        font-weight: normal;
    }


    @media(min-width: 550px){
        background-image: url(${bgDesktopDark});
    }
    


`