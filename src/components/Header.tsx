import React from "react";
import styled from "styled-components";
import NavMenu from "./NavMenu";

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-bg);
    color: var(--color-text2);
    padding: 0 20px;
`;

const Header: React.FC = () => {
    return (
        <HeaderWrapper>
            <NavMenu showCart={true} lowerborder={true} />
        </HeaderWrapper>
    );
};

export default Header;
