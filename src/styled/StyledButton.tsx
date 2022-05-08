import styled from "styled-components";

interface IStyledButton {
    color?: string;
    background?: string;
}

export const StyledButton = styled.button.attrs({
    type: "button",
})`
    margin: 2rem;
    border-radius: 5px;
    padding: 1rem;
    font-size: x-large;

    color: ${(props: IStyledButton) => props.color || "black"};
    background-color: ${(props: IStyledButton) => props.background || "white"};
`;