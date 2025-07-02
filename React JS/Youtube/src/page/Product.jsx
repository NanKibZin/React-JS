import styled from "styled-components";
import Navbar from "../components/Navbar";
import Annuouncement from "../components/Annuouncement";
import Footer from "../components/footer";
import { Add, Remove } from "@mui/icons-material";


const Container = styled.div``;
const Wrapper=styled.div`
  padding: 50px;
  display: flex;
`
const ImgContainer=styled.div`
 flex: 1;
 `
const InfoContainer=styled.div`
   flex: 1;
   padding: 0px 50px;
   margin: 1rem -1rem;
`
const Image=styled.img`
   width: 100%;
   height: 60vh;
   margin-left: 5rem;
   /* object-fit: cover; */
`
const Title=styled.h1`
   font-weight: 200;
`
const Desc=styled.p`
  margin: 20px 0px;
`
const Price=styled.span`
  font-weight: 100;
  font-size: 40px;
`
const FilterContainer=styled.div`
  display: flex;
  width: 50%;
  margin: 30px 0;
  justify-content: center;
`
const FilterTitle=styled.span`
  font-size: 20px;
  font-weight: 200;
`
const Filter=styled.div`
   display: flex;
   align-items: center;
`
const FilterColor=styled.div`
   width: 20px;
   height: 20px;
   border-radius: 50%;
   margin: 0 5px;
   background-color: ${props=>props.color};
`
const FilterSize=styled.select`
  margin-left: 6px;
`
const FilterSizeOption=styled.option`

`
const AddContainer=styled.div`
   display: flex;
   align-items: center;
   width: 50%;
   justify-content: center;
`
const AmountContainer=styled.span`
   display: flex;
   align-items: center;
   font-weight: 700;
`
const Amount=styled.span`
   width: 30px;
   height: 30px;
   border-radius: 10px;
   border: 1px solid teal;
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 0 5px;
`
const Button=styled.button`
   padding: 15px;
   border: 2px solid teal;
   background-color: white;
   cursor: pointer;
   font-weight: 500;
   &:hover{
    background-color: #c6c0c0 ;
   }
`
// const FilterContainer=styled.div``
const Product = () => {
  return (
    <Container>
      <Navbar />
      <Annuouncement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/DG69bQ4/2.png" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quo
            numquam minus animi veniam quasi hic rerum consequatur, praesentium
            voluptas iusto obcaecati illum reprehenderit? Odit quasi pariatur
            odio cupiditate nemo!
          </Desc>
          <Price>$20</Price>
          <FilterContainer>
            <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color="black"/>
                <FilterColor color="darkblue"/>
                <FilterColor color="gray"/>
            </Filter>
            <Filter>
                <FilterTitle>Size</FilterTitle>
            <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
            </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>

            <Remove/>
            <Amount>1</Amount>
            <Add/>
            </AmountContainer>
            <Button>Add to Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Product;
