import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PriceSlider from "../../components/PriceSlider";
import Wrapper from "../../components/Wrapper";
import Container from "../../components/Container";
import GenderSelection from "../../components/GenderSelection";
import SizeSelection from "../../components/SizeSelection";
import axios from "axios";

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
    max-width: 300px;
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

interface Sneaker {
    id: number;
    vendorCode: string;
    inStock: number;
    title: string;
    description: string;
    imgUrl: string;
    stars: number;
    sizes: number[];
    price: number;
    oldPrice: number;
    gender: string;
    color: string;
    compound: string;
    country: string;
}

const CatalogPage: React.FC = () => {
    const [man, setMan] = useState<boolean>(true);
    const [woman, setWoman] = useState<boolean>(true);
    const [sneakers, setSneakers] = React.useState<Sneaker[] | null>(null);
    const [minPrice, setMinPrice] = useState<number>(0);
    const [maxPrice, setMaxPrice] = useState<number>(0);
    const [minMin, setMinMin] = useState<number>(0);
    const [maxMax, setMaxMax] = useState<number>(0);
    const [selectedSizes, setSelectedSizes] = useState<number[]>([]);
    const [sizes, setSizes] = useState<number[]>([]);

    async function fetchData(url: string) {
        try {
            const response = await axios.get(url);
            setSneakers(response.data);
            // Update min and max prices based on fetched data
            if (response.data && response.data.length > 0) {
                // Set initial slider values after fetching data
                if (minMin === 0 && maxMax === 0) {
                    const min = findMinMin(response.data);
                    const max = findMaxMax(response.data);
                    setMinMin(min);
                    setMaxMax(max);
                    setMinPrice(min);
                    setMaxPrice(max);
                }
                if (sizes.length === 0) {
                    setSizes(findAvailableSizes(response.data));
                }
            } else {
                console.error("Invalid data format received from API.");
            }
        } catch (error) {
            // Handle different types of errors
            if (axios.isAxiosError(error)) {
                console.error(
                    "Axios error:",
                    error.message || "An unknown error occurred."
                );
            } else {
                console.error(
                    "Unknown error:",
                    error instanceof Error
                        ? error.message
                        : "An unknown error occurred."
                );
            }
        }
    }

    function findAvailableSizes(sneakers: Sneaker[]): number[] {
        const availableSizes: number[] = [];
        sneakers.forEach((sneaker) => {
            sneaker.sizes.forEach((size) => {
                if (!availableSizes.includes(size)) {
                    availableSizes.push(size);
                }
            });
        });
        return availableSizes;
    }

    function findMinMin(sneakers: Sneaker[]): number {
        if (!sneakers || sneakers.length === 0) return Infinity;
        let min = Infinity;
        sneakers.forEach((sneaker) => {
            if (sneaker.price < min) {
                min = sneaker.price;
            }
        });
        return min;
    }

    function findMaxMax(sneakers: Sneaker[]): number {
        if (!sneakers || sneakers.length === 0) return -Infinity;
        let max = -Infinity;
        sneakers.forEach((sneaker) => {
            if (sneaker.price > max) {
                max = sneaker.price;
            }
        });
        return max;
    }

    useEffect(() => {
        const url = "https://4cced3eab36d5870.mokky.dev/sneakers";
        fetchData(url);
    }, []);

    if (!sneakers) {
        return <div>Loading...</div>;
    } else if (sneakers.length === 0) {
        return <div>No sneakers found.</div>;
    }

    const filter = () => {
        let gender = "";
        if (man && woman) {
            gender = "";
        } else if (man && !woman) {
            gender = "&gender=Мужской";
        } else if (woman && !man) {
            gender = "&gender=Женский";
        } else {
            gender = "&gender=Null";
        }
        const sizesQuery = selectedSizes.map((size) => `&sizes[]=${size}`).join("");
        const url = `https://4cced3eab36d5870.mokky.dev/sneakers?price[from]=${minPrice}&price[to]=${maxPrice}${gender}${sizesQuery}`;
        fetchData(url);
    };

    const reset = () => {
        setMinPrice(minMin);
        setMaxPrice(maxMax);
        setMan(true);
        setWoman(true);
        setSelectedSizes([]);
        const url = "https://4cced3eab36d5870.mokky.dev/sneakers";
        fetchData(url);
    };

    // Function to handle button click
    const handleSizeClick = (size: number) => {
        if (selectedSizes.includes(size)) {
            // If size is already selected, remove it
            setSelectedSizes(selectedSizes.filter((s) => s !== size));
        } else {
            // Otherwise, add it to the selected sizes
            setSelectedSizes([...selectedSizes, size]);
        }
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
                                start={[minPrice, maxPrice]} // Initialize with current minPrice and maxPrice
                                range={{ min: minMin, max: maxMax }}
                                connect
                                onUpdate={(slider) => {
                                    setMinPrice(Number(slider[0]));
                                    setMaxPrice(Number(slider[1]));
                                }}
                            />
                            <h3>Пол</h3>
                            <GenderSelection
                                man={man}
                                woman={woman}
                                setMan={setMan}
                                setWoman={setWoman}
                            />
                            <h3>Размер</h3>
                            <SizeSelection
                                sizes={sizes}
                                selectedSizes={selectedSizes}
                                onSizeClick={handleSizeClick}
                            />
                            <button className="button2" onClick={filter}>
                                Применить фильтры
                            </button>
                            <button className="button3" onClick={reset}>Сбросить</button>
                        </SidebarContent>
                    </Sidebar>
                    <Content>
                        <h2>Кроссовки</h2>
                        {sneakers &&
                            sneakers.map((item) => (
                                <div key={item.id}>
                                    {item.id} | {item.price} | {item.title} | {item.sizes.join(", ")}
                                </div>
                            ))}
                    </Content>
                </CatalogWrapper>
            </Container>
        </Wrapper>
    );
};

export default CatalogPage;
