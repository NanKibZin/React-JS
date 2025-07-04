import styled from "styled-components";
import Navbar from "../components/Navbar";
import Annuouncement from "../components/Annuouncement";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";


const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;
const TopText = styled.div``;
const Bottom = styled.div`
   display: flex;
   justify-content: center;
`;

const Info = styled.div`
  flex: 3;
`;
const Product=styled.div`
  display: flex;
  justify-content: space-between;
`
const ProductDetail=styled.div`
   flex: 2;
   display: flex;
`
const Image=styled.img`
   width: 200px;

`
const Details=styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  
`
const ProductName=styled.span``
const ProductId=styled.span``
const ProductColor=styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props)=>props.color};
`
const ProductSize=styled.span``
const PriceDetail=styled.div`
   display: flex;
   flex: 1;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`
const ProductAmountContainer=styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

`
const ProductAmount=styled.div`
  font-size: 24px;
  margin: 5px;
`
const ProductPrice=styled.div`
  font-size: 30px;
  font-weight: 200;
`
const Hr=styled.hr`
  background-color:white;
  margin: 2px;

`
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  padding: 20px;
  height: 50vh;
  /* background-color: red; */
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Annuouncement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>Continue shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bage</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
              <Image src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
              <Details>
                <ProductName><b>Product:</b>JESSIE THUNER SHOSE</ProductName>
                <ProductId><b>ID:</b>891066487</ProductId>
                <ProductColor color="black"/>
                <ProductSize><b>Size:</b>36.3</ProductSize>
              </Details>
              </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add/>
                    <ProductAmount>2</ProductAmount>
                    <Remove/>
                  </ProductAmountContainer>
                     <ProductPrice>$30</ProductPrice>
                </PriceDetail>
            </Product>
            <Hr/>
            <Product>
              <ProductDetail>
              <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
              <Details>
                <ProductName><b>Product:</b>JESSIE THUNER SHOSE</ProductName>
                <ProductId><b>ID:</b>891066487</ProductId>
                <ProductColor color="gray"/>
                <ProductSize><b>Size:</b>36.3</ProductSize>
              </Details>
              </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add/>
                    <ProductAmount>2</ProductAmount>
                    <Remove/>
                  </ProductAmountContainer>
                     <ProductPrice>$30</ProductPrice>
                </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>

                 <SummaryItemText>Subtotal</SummaryItemText>
                 <SummaryItemPrice>$80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>

                 <SummaryItemText>Estimated Shipping</SummaryItemText>
                 <SummaryItemPrice>$-50</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>

                 <SummaryItemText>Subtotal</SummaryItemText>
                 <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem  type="total">Total>

                 <SummaryItemText type="total">Total</SummaryItemText>
                 <SummaryItemPrice>$ 80</SummaryItemPrice>
            </SummaryItem>
            <Button>CheckOut Now</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
