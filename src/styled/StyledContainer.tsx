import styled from "styled-components";

export const Container = styled.div`
    max-width: 1024px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
`;

export const AnimalContainer = styled.div`
    max-width: 20rem;
    position: relative;
    margin: 1rem 0 -1rem 0;

    h2 {
        position: absolute;
        top: 2.5px;
        left: 2.5px;
        background-color: white;
        padding: .2rem .5rem;
        border-radius: 5px;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4);
    }

    img {
        min-width: 20rem;
        max-width: 40rem;
        max-height: 10rem;
        object-fit: cover;
        border-radius: 5px;
        box-shadow: 1px 2px rgba(0, 0, 0, 0.2);
    }
`;

export const AnimalInfo = styled.div`
    position: relative;
    max-width: 80rem;
    min-height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    margin-top: 2rem;
    
    h1 {
        position: absolute;
        top: 0;
        left: 25px;
        background-color: white;
        border-radius: 25px;
        padding: 5px 20px 10px 0;
    }

    h3 {
        text-align: center;
        font-size: 2rem;
        font-weight: 200;
        margin: .5rem 0;
    }

    img {
        width: 90%;
        border-radius: 15px;
        margin: auto;
    }

    div {
        position: absolute;
        bottom: -15rem;
        width: 100%;
        display: flex;
        flex-direction: column;
    }
`;