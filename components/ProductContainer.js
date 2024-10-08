import styled from "styled-components"
import Button from "./Button";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const ContainerWrapper = styled.div`
    font-family: 'Poppins', sans-serif;
`;

const WhiteContainer = styled(Link)`
    background-color: #fff;
    padding: 20px;
    height:120px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    img{
    max-width:100%;
    max-height: 80px;
    }
`;

const Title = styled(Link)`
    font-weight: normal;
    font-size:0.9rem;
    margin:0;
    color: inherit;
    text-decoration: none;
`;

const ProductInfoContainer = styled.div`
    margin-top: 5px;
`;

const PriceRow = styled.div`
    display: block;
    
    @media screen and (min-width: 768px){
        display: flex;
        gap: 5px;
    }

    align-items: center;
    justify-content: space-between;
    margin-top: 3px;
`;

const Price = styled.div`
    font-size: 1rem;
    font-weight: 500;
    text-align: right;
    @media screen and (min-width: 768px){
        font-size: 1.2rem;
        font-weight: 500;
        text-align: left;
    }
`;

export default function ProductContainer({ _id, title, description, price, images }) {

    const { addProduct } = useContext(CartContext)
    const url = 'product/' + _id

    return (
        <ContainerWrapper>
            <WhiteContainer href={url}>
                <div>
                    <img src={images?.[0]} alt={title} />
                </div>
            </WhiteContainer>
            <ProductInfoContainer>
                <Title href={url}>{title}</Title>
                <PriceRow>
                    <Price>
                        ${price}
                    </Price>
                    <Button $block onClick={() => addProduct(_id)} $primary $outline>Add to cart</Button>
                </PriceRow>
            </ProductInfoContainer>
        </ContainerWrapper>
    )
}