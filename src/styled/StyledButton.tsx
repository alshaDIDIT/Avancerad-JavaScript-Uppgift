import styled from "styled-components";

interface IStyledButton {
    color?: string;
    background?: string;
    show?: string;
}

export const StyledButton = styled.button.attrs({
    type: "button",
})`
    margin: 2rem;
    border-radius: 5px;
    padding: 1rem;
    font-size: x-large;
    cursor: pointer;
    min-width: 30%;
    margin: auto;

    color: ${(props: IStyledButton) => props.color || "black"};
    background-color: ${(props: IStyledButton) => props.background || "white"};
    display: ${(props: IStyledButton) => props.show || "none"};
`;