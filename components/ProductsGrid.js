import styled from "styled-components";
import ProductContainer from "./ProductContainer";


const StyledProductsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 40px;
`;

export default function ProductsGrid({products}){

return (
    <StyledProductsGrid>
        {products?.length > 0 && products.map((product, idx) => (
                    <ProductContainer key={idx} {...product} />
                ))}
    </StyledProductsGrid>
)
}