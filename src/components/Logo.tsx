import React from "react";
import styled from "styled-components";

const LogoWrapper = styled.div`
    font-family: "Intro", sans-serif;
    font-weight: bold;
    font-size: 30px;

    & a {
        text-decoration: none;
        color: var(--color-text2);
    }
`;

const Logo: React.FC = () => {
    return (
        <LogoWrapper>
            <a>SneakMax</a>
        </LogoWrapper>
    );
}

export default Logo;
