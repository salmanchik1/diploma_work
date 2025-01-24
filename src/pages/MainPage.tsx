import React from "react";
import styled from "styled-components";
import Container from "../components/Container";
import Wrapper from "../components/Wrapper";

const BgLabel = styled.h1`
    color: var(--color-text2);
    opacity: 12%;
    position: absolute;
    font-size: 14vw;
    font-weight: 700;
    z-index: 0;
    left: 20vw;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    max-width: 40%;
    gap: 20px;
    height: 80vh;

    & p {
        text-align: left;
    }

    & .title {
        font-size: 36px;
        font-weight: 700;
    }
`;

const MainPage: React.FC = () => {
    return (
        <Wrapper>
            <Container>
                <BgLabel>SneakMax</BgLabel>
                <Content>
                    <p className="title">
                        Кроссовки известных брендов с доставкой по России и СНГ
                    </p>
                    <p>
                        Мы продаем кроссовки брендов Nike, Adidas, Puma, Reebok,
                        Converse и многие другие по низким ценам
                    </p>
                    <button>Перейти к покупкам</button>
                </Content>
            </Container>
        </Wrapper>
    );
};

export default MainPage;
