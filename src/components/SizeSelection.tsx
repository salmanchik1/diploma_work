import React from "react";
import styled from "styled-components";

// Define the size type
type Size = number;

// Define the props for the SizeSelection component
interface SizeSelectionProps {
    sizes: Size[];
    selectedSizes: Size[];
    onSizeClick: (size: Size) => void;
}

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

// Define the SizeSelection component
const SizeSelection: React.FC<SizeSelectionProps> = ({
    sizes,
    selectedSizes,
    onSizeClick,
}) => {
    return (
        <SizesGridContainer>
            {sizes.map((size, index) => (
                <SizeButton
                    key={String(size) + index}
                    isSelected={selectedSizes.includes(size)}
                    onClick={() => onSizeClick(size)}
                >
                    {size}
                </SizeButton>
            ))}
        </SizesGridContainer>
    );
};

export default SizeSelection;
