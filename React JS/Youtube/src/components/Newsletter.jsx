import { Send } from '@mui/icons-material'
import styled from 'styled-components'
const Container=styled.div`
   height: 60vh;
   background-color: #e2bbc4;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`
const Title=styled.h1`
  font-size: 50px;
  font-weight: bold;
  
  margin-bottom: 1rem;
`
const Description=styled.div`
   font-size: 24px ;
   /* font-weight: 300; */
   margin-bottom: 20px;
`
const InputContainer=styled.div`
width: 50%;
height: 40px;
background-color: white;
 display: flex;
 justify-content: space-between;
 border: 1px solid lightgray;
`
const Button=styled.div`
display: flex;
justify-content: center;
align-items: center;
  flex: 1;
  background-color: teal;
  color: aliceblue;
`
const Input=styled.input`
 border: none;
 padding-left: 1rem;
 flex: 8;
`
const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely update from your favorite Product.</Description>
      <InputContainer>
          <Input placeholder="Your email"/>
          <Button>
            <Send/>
          </Button>
      </InputContainer>
    </Container>
  )
}

export default Newsletter
