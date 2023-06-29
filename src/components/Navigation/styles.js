import { styled } from "styled-components";
import { lightGray, midGray } from "../../colors/colors";

export const NavigationContainer = styled.nav`
    display: flex;
    width: 600px;
    height: 35px;
    background-color: ${midGray};
    justify-content: space-between;
    align-items: center;



    @media screen and (max-width: 800px) {
        width: 500px;
    }

    @media screen and (max-width: 500px) {
        width: 400px;
    }

    @media screen and (max-width: 400px) {
        width: 300px;
    }

    @media screen and (max-width: 300px) {
        width: 200px;
    }
`;

export const NavigationButton = styled.button`

        background-color: ${props => props.value === props.actualPage ? "white" : midGray};
        border: none;
        height: 100%;
        color: ${lightGray};

    
`;