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
  Hr,
  SummaryItem,
  SummaryItemText,
  SummaryTitle,
  SummaryItemPrice,
  Button,
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
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://images4.alphacoders.com/122/122964.jpg" />
                <Details>
                  <ProductName>
                    <b>Product: </b> Awesome Sniper
                  </ProductName>
                  <ProductId>
                    <b>ID: </b> 92384293485
                  </ProductId>
                  <ProductColor color="tomato" />
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
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>

            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$80.49</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total: </SummaryItemText>
              <SummaryItemPrice>$95.90</SummaryItemPrice>
            </SummaryItem>
            <Button>Checkout Now</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
