import styled from "styled-components";

export const Container = styled.div`
    max-width: 95rem;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;

`;

export const AnimalContainer = styled.div`
    max-width: 15rem;

    img {
        width: 100%;
        max-height: 10rem;
        object-fit: cover;
    }
`;