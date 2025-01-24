import React from "react";
import styled from "styled-components";
import Slider from "../components/Slider";
import Wrapper from "../components/Wrapper";
import Container from "../components/Container";

const CatalogWrapper = styled.div`
    display: flex;
    width: 100%;
`;

const CatalogPage: React.FC = () => {
    return (
        <Wrapper bgColor="var(--color-sec-bg)" textColor="var(--color-text)">
            <Container>
                <CatalogWrapper>
                    <div>
                        <p>Каталог</p>
                        <p>Подбор по параметрам</p>
                        <p>Цена, руб</p>
                        <Slider
                            start={[1850, 25768]}
                            range={{ min: 1850, max: 25768 }}
                        />
                    </div>
                </CatalogWrapper>
            </Container>
        </Wrapper>
    );
};

export default CatalogPage;
