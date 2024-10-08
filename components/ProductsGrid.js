import styled from "styled-components";
import ProductContainer from "./ProductContainer";


const StyledProductsGrid = styled.div`
    display: grid;
    gap: 40px;
    grid-template-columns: 1fr 1fr;
    @media screen and (min-width: 768px){
        grid-template-columns: 1fr 1fr 1fr 1fr;
    
    }
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