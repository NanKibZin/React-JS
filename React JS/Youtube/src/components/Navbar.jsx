import { Badge, Search,ShoppingCartOutlined } from "@mui/icons-material"
import styled from "styled-components";
import {mobile} from "../responsive"
const Container = styled.div`
  color: #1d1a1a;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  align-items: center;
  ${mobile({padding:"10px 0px"})}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Language=styled.div`
    flex: 1;
    font-size:14px;
    ${mobile({display:"none"})}
`
const SearchContainer=styled.div`
position: absolute;
    border: 1px solid lightgray;
    left: 0;
    display: flex;
    align-items: center;
    margin-left: 25px;
    ${mobile({marginLeft: "7px",marginBottom:"10px"})}
`
const Input=styled.input`
     border: none;
`
const Left = styled.div`
position: relative;
display: flex;
  flex: 1;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
  
`;
const Logo=styled.h1`
   font-weight: bold;
   ${mobile({fontSize:"20px",marginLeft:"100px",alignItems: "center"})}
`

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: 25px;
  flex: 1;
  gap: 1rem;
  ${mobile({flex:2,justifyContent:"center",marginBottom:"10px"})}
`;
const MenuItem=styled.div`
   font-size: 1.2rem;
`
const Navbar = () => {
  return (
    <Container>
      <Left>
      <Language>En</Language>
      <SearchContainer>
        <Input placeholder="Search"/>
      <Search style={{color:"gray"}}/>
      </SearchContainer>
      </Left>
      <Center><Logo>LAMA...</Logo></Center>
      <Right>
       
       <MenuItem>Resgister</MenuItem>
       <MenuItem>Sign In</MenuItem>
       <MenuItem>
       <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge> 
       </MenuItem>
      </Right>
      <Wrapper />
    </Container>
  );
};

export default Navbar;
