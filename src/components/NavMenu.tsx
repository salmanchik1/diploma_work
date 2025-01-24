import { Link } from "react-router";
import styled from "styled-components";
import CartIcon from "./CartIcon";
import Container from "./Container";

interface NavMenuProps {
    showCart?: boolean;
    upperborder?: boolean;
    lowerborder?: boolean;
}

const MenuWrapper = styled(Container).withConfig({
    shouldForwardProp: (prop) =>
        !["upperborder", "lowerborder"].includes(prop),
})<NavMenuProps>`
    display: flex;
    justify-content: space-between;
    border-top: ${(props) =>
        props.upperborder ? "1px solid var(--color-text2)" : "none"};
    border-bottom: ${(props) =>
        props.lowerborder ? "1px solid var(--color-text2)" : "none"};
`;

const Nav = styled.nav`
    display: flex;
    gap: 20px;

    & ul {
        list-style: none;
        display: flex;
        gap: 20px;
        margin: 0;
        padding: 0;
        align-items: center;
    }

    & li {
        margin: 0;
        padding: 0;
    }

    & a {
        text-decoration: none;
        color: var(--color-text2);
    }
`;

const Logo = styled.div`
    font-family: "Intro-Bold", sans-serif;
    font-size: 30px;

    & a {
        text-decoration: none;
        color: var(--color-text2);
    }
`;

const NavMenu: React.FC<NavMenuProps> = ({
    showCart = false,
    upperborder = false,
    lowerborder = false,
}) => {
    return (
        <MenuWrapper upperborder={upperborder} lowerborder={lowerborder}>
            <Logo>
                <Link to="/">SneakMax</Link>
            </Logo>
            <Nav>
                <ul className="nav-list">
                    <li>
                        <Link to="/catalog">Каталог</Link>
                    </li>
                    <li>
                        <Link to="/about-us">О нас</Link>
                    </li>
                    <li>
                        <Link to="/product-selection">Подбор товара</Link>
                    </li>
                    <li>
                        <Link to="/our-team">Наша команда</Link>
                    </li>
                    <li>
                        <Link to="/delivery-and-payment">
                            Доставка и оплата
                        </Link>
                    </li>
                    <li>
                        <Link to="/contacts">Контакты</Link>
                    </li>
                    {showCart && (
                        <li>
                            <Link to="/cart">
                                Корзина
                                <CartIcon itemCount={1} />
                            </Link>
                        </li>
                    )}
                </ul>
            </Nav>
        </MenuWrapper>
    );
};

export default NavMenu;
