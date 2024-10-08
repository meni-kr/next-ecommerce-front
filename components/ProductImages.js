import { useState } from "react";
import styled from "styled-components";

const Image = styled.img`
    max-width: 100%;
    max-height: 100%;
`;

const BigImage = styled.img`
    max-width: 100%;
    max-height: 200px;
`;

const BigImageWrapper = styled.div`
    text-align: center;
`;

const ImageButtons = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 10px;
`;

const ImageButton = styled.div`
    border:2px solid #ccc;
        ${props => props.$active ? `
            border-color:#ccc;
            scale:1.1;
            `: `
            border-color:transparent;
            
            `
    }
    height: 40px;
    padding: 2px;
    cursor: pointer;
    border-radius:5px

`;

export default function ProductImages({ images }) {
    const [activeImage, setActiveImage] = useState(images?.[0])
    return (
        <>
            <BigImageWrapper>
                <BigImage src={activeImage} alt={''} />
            </BigImageWrapper>
            <ImageButtons>
                {
                    images?.map((img, idx) => (
                        <ImageButton key={idx}
                            $active={img === activeImage}
                            onClick={() => setActiveImage(img)} >
                            <Image src={img} alt={''} />
                        </ImageButton>
                    ))
                }
            </ImageButtons>
        </>
    )
}