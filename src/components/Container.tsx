import styled from "styled-components";

interface ContainerProps {
    maxWidth?: string; // Optional prop to customize the maxWidth
}

const Container = styled.div<ContainerProps>`
    max-width: ${({ maxWidth }) => maxWidth || "var(--content-max-width)"};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    min-height: fit-content;
    padding: 20px 0;
    width: 100%;
`;

export default Container;

