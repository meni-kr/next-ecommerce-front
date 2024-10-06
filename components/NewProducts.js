import styled from "styled-components"
import Center from "./Center";
import ProductContainer from "./ProductContainer";

const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 40px;
    padding-top: 30px;
`;

export default function NewProducts({ products: newProducts }) {

    return (
        <Center>
            <ProductsGrid>
                {newProducts?.length > 0 && newProducts.map((product, idx) => (
                    <ProductContainer key={idx} {...product} />
                ))}
            </ProductsGrid>
        </Center>
    )
}