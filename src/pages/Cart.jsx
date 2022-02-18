import { Add, Remove } from "@mui/icons-material";
import React from "react";
import Announcement from "../components/Accouncement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  Container,
  Wrapper,
  Title,
  Top,
  Bottom,
  TopButton,
  TopTexts,
  TopText,
  Info,
  Summary,
  ProductDetail,
  Image,
  Details,
  Product,
  ProductName,
  ProductId,
  ProductColor,
  ProductSize,
  PriceDetail,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
} from "./styles/cartPage";

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your bag</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlist (2)</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://images5.alphacoders.com/641/641999.jpg" />
                <Details>
                  <ProductName>
                    <b>Product: </b> Awesome Rain
                  </ProductName>
                  <ProductId>
                    <b>ID: </b> 92384293485
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size</b> 23.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$30.99</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>Summary</Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
