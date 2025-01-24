import React, { useState } from "react";
import styled from "styled-components";

// Type for the gender
type Gender = "male" | "female" | null;

const GenderSelectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const CheckboxWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
`;

const StyledCheckbox = styled.input`
    appearance: none;
    width: 20px;
    height: 20px;
    border: 1px solid var(--color-gray);
    border-radius: 3px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:checked {
        background-color: var(
            --color-sec-bg
        ); // Light gray background when checked
        &::after {
            content: "";
            width: 20px;
            height: 20px;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23dbbba9' d='M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z'/%3E%3C/svg%3E");
            background-size: contain; // Ensure it fits inside the div
            background-repeat: no-repeat;
            display: block;
        }
    }
    &:hover {
        border-color: var(--color-text);
    }

    &:focus {
        outline: none;
        border-color: var(--color-small-text);
    }
`;

const Label = styled.label`
    font-size: 16px;
    cursor: pointer;
`;

interface GenderSelectionProps {
    selectedGender: Gender;
    onGenderChange: (gender: Gender) => void;
}

const GenderSelection: React.FC<GenderSelectionProps> = ({
    selectedGender,
    onGenderChange,
}) => {
    const handleCheckboxChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = event.target.value as Gender;
        onGenderChange(value);
    };

    return (
        <GenderSelectionContainer>
            <CheckboxWrapper>
                <StyledCheckbox
                    type="checkbox"
                    id="male"
                    value="male"
                    checked={selectedGender === "male"}
                    onChange={handleCheckboxChange}
                />
                <Label htmlFor="male">Мужской</Label>
            </CheckboxWrapper>
            <CheckboxWrapper>
                <StyledCheckbox
                    type="checkbox"
                    id="female"
                    value="female"
                    checked={selectedGender === "female"}
                    onChange={handleCheckboxChange}
                />
                <Label htmlFor="female">Женский</Label>
            </CheckboxWrapper>
        </GenderSelectionContainer>
    );
};

export default GenderSelection;
