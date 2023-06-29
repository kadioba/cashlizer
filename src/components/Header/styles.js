import styled from "styled-components";

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70px;
    background-color: black;
    
    @media screen and (max-width: 800px) {
        height: 60px;
        padding: 10px;
    }

    @media screen and (max-width: 500px) {
        height: 50px;
        padding: 10px;
    }

    @media screen and (max-width: 400px) {
        height: 40px;
        padding: 10px;
    }

    @media screen and (max-width: 300px) {
        height: 30px;
        padding: 10px;
    }
`;
