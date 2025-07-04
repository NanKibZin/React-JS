import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
   width: 100vw;
   height: 100vh;
   background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),  url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
   background-size: cover;
   
   display: flex;
   justify-content: center;
   align-items: center;
`;
const Wrapper = styled.div`
   width: 25%;
   padding: 20px;
   background-color: white;
`;
const Title = styled.h1`
   font-size: 24px;
   font-weight: 200;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0 0;
  padding: 10px 0;
  padding-left: 10px;
`;

const Button = styled.button`
   width: 40%;
   border: none;
   padding: 15px 20px;
   background-color: teal;
   color: white;
   cursor: pointer;
   margin-top: 10px;
   margin-bottom: 10px;
`;
const Link=styled.a`
  margin: 5px 0;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`
const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGNIN</Button>
          <Link>DO NOT YOU REMMEBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login
