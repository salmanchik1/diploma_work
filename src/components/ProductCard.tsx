import React from "react";
import styled from "styled-components";

interface Product {
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

interface ProductCardProps {
    product: Product;
}

const Card = styled.div`
    position: relative;
    width: 280px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
    transition: box-shadow 0.3s ease;

    &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
`;

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 300px;
    overflow: hidden;

    &:hover .hover-buttons {
        opacity: 1;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const HoverButtons = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    gap: 10px;
    opacity: 0;
    transition: opacity 0.3s ease;
`;

const Button = styled.button`
    padding: 10px 20px;
    background-color: rgba(255, 255, 255, 0.9);
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: rgba(255, 255, 255, 1);
    }
`;

const Info = styled.div`
    padding: 16px;
`;

const Title = styled.h3`
    margin: 0;
    font-size: 18px;
    color: #333;
`;

const Price = styled.p`
    margin: 8px 0;
    font-size: 16px;
    color: #e53935;
`;

const OldPrice = styled.span`
    text-decoration: line-through;
    color: #999;
    margin-left: 8px;
`;

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <Card>
            <ImageContainer>
                <Image src={product.imgUrl} alt={product.title} />
                <HoverButtons className="hover-buttons">
                    <Button>Preview</Button>
                    <Button>Add to Cart</Button>
                </HoverButtons>
            </ImageContainer>
            <Info>
                <Title>{product.title}</Title>
                <Price>
                    {product.price} ₽
                    {product.oldPrice && (
                        <OldPrice>{product.oldPrice} ₽</OldPrice>
                    )}
                </Price>
            </Info>
        </Card>
    );
};

export default ProductCard;
