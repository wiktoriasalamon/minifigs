import styled from "styled-components"

export enum ButtonColor {
    Blue = "#038dec",
    Orange = "#feaf6e",
}

interface Props extends React.HTMLProps<HTMLButtonElement> {
    label: string;
    color: ButtonColor;
}

const StyledButton = styled.button<{color: ButtonColor}>`
    border: none;
    border-radius: 20px;
    margin: 0;
    padding: 10px;
    width: 10rem;
    background-color: ${({color}) => color};
    text-transform: uppercase;
    color: white;
    font-weight: bold;

    :not(:disabled):hover {
        opacity: 80%;
    }

    &:disabled {
        background-color: grey;
        opacity: 50%;
    }
`

const Button: React.FC<Props> = ({
    label,
    color,
    disabled,
    ...props
}) => {
    return (
        <StyledButton disabled={disabled} color={color} type="button">
            {label}
        </StyledButton>
    )
}

export default Button
