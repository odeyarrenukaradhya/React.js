import React from 'react'
import styled from "styled-components";

function ProductCard() {
    const Card=styled.div`
    background-color:#e7b2ab;
    border-radius:10px;
    padding:20px;
    text-align:center;
    box-shadow:0 2px 5px #e7b2ab1a;`;

    const Title=styled.h3`
    color:#433;`;
    return(
        <Card>
            <Title>Product Name</Title>
            <p style={{color:"black"}}>$25.99</p>
        </Card>
    );
}

export default ProductCard;
