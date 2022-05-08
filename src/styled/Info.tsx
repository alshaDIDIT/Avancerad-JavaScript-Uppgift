import styled from "styled-components";

export const Info = styled.p`
    background-color: #574dad;
    color: #e1e2ee;
    margin: .5rem;
    padding: .5rem;
    border-radius: 5px;
    font-size: .75rem;
    position: absolute;

    bottom: 0;
`;

export const LongInfo = styled.p`
    background-color: #574dad;
    color: #e1e2ee;
    margin: .5rem;
    padding: .5rem;
    font-size: 1.1rem;
    border-radius: 5px;
    max-width: 80%;
    margin: .5rem auto;
    display: flex;
    gap: 2rem;
    align-items: center;
    padding: 1rem;

    span {
        background-color: black;
        padding: .5rem 1rem;
        border-radius: 5px;
        font-size: 1rem;
    }
`;