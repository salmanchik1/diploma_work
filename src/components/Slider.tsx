import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import noUiSlider, { API } from "nouislider";
import "nouislider/dist/nouislider.css";

interface SliderProps {
    start: number[]; // Initial values for the slider
    range: { min: number; max: number }; // Range for the slider
    step?: number; // Optional step size
    onUpdate?: (values: string[]) => void; // Callback for slider value changes
    connect?: boolean | boolean[]; // Connect options
}

// Styled slider container
const SliderContainer = styled.div`
    background-color: none; /* Soft background */
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
`;

// Styled wrapper for the slider
const SliderWrapper = styled.div`
    width: 100%;
    position: relative;
    height: 6px;

    .noUi-base {
        background-color: var(--color-gray);
        border-radius: 2px;
    }

    .noUi-connect {
        background-color: var(--color-text); /* Connected segment color */
    }

    .noUi-handle {
        width: 6px;
        height: 20px;
        background-color: var(--color-text);
        border-radius: 3px;
        border: none;
        top: -8px;
        right: -4px;
    }

    .noUi-handle::after,
    .noUi-handle::before {
        display: none;
    }
`;

// Styled value display above the slider
const ValueDisplay = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-radius: 6px 6px 0 0;
    border: 1px solid var(--color-gray);
    border-bottom: none;
    height: 50px;


    span {
        color: var(--color-text);
        font-size: 16px;
        font-weight: 500;
        width: 50%;
        text-align: center;
        margin: 0 30px;
    }

    .divider {
        height: 34px;
        width: 1px;
        background-color: var(--color-gray);
    }
`;

const Slider: React.FC<SliderProps> = ({
    start,
    range,
    step = 1,
    onUpdate,
    connect = true,
}) => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const sliderInstance = useRef<API | null>(null);
    const [values, setValues] = useState<number[]>(start); // Track current slider values

    useEffect(() => {
        if (sliderRef.current) {
            // Initialize the slider
            sliderInstance.current = noUiSlider.create(sliderRef.current, {
                start,
                range,
                step,
                connect,
            });

            // Update local state and invoke the onUpdate callback when values change
            if (sliderInstance.current) {
                sliderInstance.current.on("update", (newValues) => {
                    const numericValues = newValues.map((value) =>
                        Math.round(parseFloat(value as string))
                    );
                    setValues(numericValues); // Update displayed values
                    if (onUpdate) onUpdate(numericValues.map(String)); // Call user-defined callback
                });
            }
        }

        // Cleanup on unmount
        return () => {
            sliderInstance.current?.destroy();
        };
    }, [start, range, step, connect, onUpdate]);

    return (
        <SliderContainer>
            {/* Value labels */}
            <ValueDisplay>
                <span>{values[0]}</span>
                <div className="divider" />
                <span>{values[1]}</span>
            </ValueDisplay>

            {/* Slider */}
            <SliderWrapper ref={sliderRef} />
        </SliderContainer>
    );
};

export default Slider;
