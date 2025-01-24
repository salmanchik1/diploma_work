import React, { useState } from "react";
import styled from "styled-components";

// Type for available shoe sizes
type ShoeSize = string | number;

const SizesGridContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`;

const SizeButton = styled.button<{ isSelected: boolean }>`
    padding: 8px 25px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: ${({ isSelected }) => (isSelected ? "#007bff" : "white")};
    color: ${({ isSelected }) => (isSelected ? "white" : "black")};
    cursor: pointer;
    transition: background-color 0.2s, color 0.2s;
    &:hover {
        border-color: #999;
    }
    &:focus {
        outline: none;
        border-color: #007bff;
        box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
`;

interface SizeSelectionProps {
    sizes: ShoeSize[];
}

const SizeSelection: React.FC<SizeSelectionProps> = ({ sizes }) => {
    const [selectedSize, setSelectedSize] = useState<ShoeSize | null>(null);

    const handleSizeClick = (size: ShoeSize) => {
        setSelectedSize(size);
        console.log("Selected shoe size:", size);
    };

    return (
        <SizesGridContainer>
            {sizes.map((size) => (
                <SizeButton
                    key={String(size)}
                    isSelected={selectedSize === size}
                    onClick={() => handleSizeClick(size)}
                >
                    {size}
                </SizeButton>
            ))}
        </SizesGridContainer>
    );
};

export default SizeSelection;
