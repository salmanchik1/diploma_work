import React, { useState } from "react";
import styled from "styled-components";
import PriceSlider from "../components/PriceSlider";
import Wrapper from "../components/Wrapper";
import Container from "../components/Container";
import GenderSelection from "../components/GenderSelection";
import SizeSelection from "../components/SizeSelection";


type Gender = "male" | "female" | null;

const CatalogWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    width: 100%;
`;

const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;
`;

const SidebarContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: var(--color-sec-bg);
    gap: 20px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

const CatalogPage: React.FC = () => {
    const [selectedGender, setSelectedGender] = useState<Gender>(null); // Start with no gender selected

    const handleGenderChange = (gender: Gender) => {
        setSelectedGender(gender);
        console.log("Selected gender:", gender);
    };
    return (
        <Wrapper bgColor="var(--color-text2)" textColor="var(--color-text)">
            <Container>
                <CatalogWrapper>
                    <Sidebar>
                        <h1>Каталог</h1>
                        <SidebarContent>
                            <h2>Подбор по параметрам</h2>
                            <h3>Цена, руб</h3>
                            <PriceSlider
                                start={[1850, 25768]}
                                range={{ min: 1850, max: 25768 }}
                            />
                            <h3>Пол</h3>
                            <GenderSelection
                                selectedGender={selectedGender}
                                onGenderChange={handleGenderChange}
                            />
                            <h3>Размер</h3>
                            <SizeSelection sizes={[36, 37, 38, 39, 40, 41]} />
                            <button className="button2">Применить</button>
                            <button className="button3">Сбросить</button>
                        </SidebarContent>
                    </Sidebar>
                    <Content>
                        <h2>Кроссовки</h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet eaque doloribus pariatur commodi enim doloremque eligendi aliquam aperiam tempore, nam et harum ad, qui ipsam modi sapiente aliquid nulla atque?</p>
                    </Content>
                </CatalogWrapper>
            </Container>
        </Wrapper>
    );
};

export default CatalogPage;
