import styled from "styled-components";

interface WrapperProps {
    bgColor?: string;
    textColor?: string;
}

const Wrapper = styled.div<WrapperProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: fit-content;
    color: ${props => (props.textColor || "var(--color-text2)")};
    background-color: ${props => props.bgColor || "var(--color-bg)"};
    width: 100%;
    padding: 0 20px;
`;

export default Wrapper;
