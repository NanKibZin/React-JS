import {
  Facebook,
  Instagram,
  MailOutline,
  PaymentOutlined,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";

import styled from "styled-components";
const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
gap: 8px;
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50px;
  color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #${(props) => props.color};
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const Listitem = styled.li`
  width: 50%;
  margin-bottom: 1rem;
`;
const Right = styled.div`
  padding: 20px;
  flex: 1;
`;
const ContactItem = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`;
const Payment = styled.div`
width: 50%;
`;
const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>LAMA..</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quas
          reprehenderit assumenda voluptatibus dolore possimus voluptatum, illo
          sed porro mollitia natus! Ipsam, incidunt eligendi.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3b5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Pinterest />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <Listitem>Home</Listitem>
          <Listitem>Cart</Listitem>
          <Listitem>Man Fashion</Listitem>
          <Listitem>Woman Fashion</Listitem>
          <Listitem>My Account</Listitem>
          <Listitem>Accessories</Listitem>
          <Listitem>Wishlist</Listitem>
          <Listitem>Terms</Listitem>
        </List>
      </Center>
      <Right>
        <Title>container</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/>
          622 Dixie Path ,South Tobichester 9335
        </ContactItem>

        <ContactItem>
          <Phone style={{marginRight:"10px"}} />
          +855 10 368 450
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} />
          contact@iama.div
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
