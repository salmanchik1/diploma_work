import React from "react";
import styled from "styled-components";
import NavMenu from "./NavMenu";

const FooterWrapper = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    background-color: var(--color-text);
    color: var(--color-text2);
    padding: 0 20px;
`;

const Footer: React.FC = () => {
    return (
        <FooterWrapper>
            <NavMenu upperborder={true} />
        </FooterWrapper>
    );
};

export default Footer;
