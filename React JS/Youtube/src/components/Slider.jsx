import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";
import { slideData } from "../data";
import {mobile} from "../responsive"
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #c08a27;
  position: relative;
  overflow: hidden;
  ${mobile({display:"none"})}
`;
const Arrow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  background-color: #bbb4b4;
  border-radius: 50%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  transform: translateY(-50%);
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  transition:  all 1.5s ease ;
  transform: translateX(${(props)=>props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  width: 100vw;
  display: flex;
  height: 100vh;
  align-items: center;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Imge = styled.img`
  height: 80%;
  margin-left: 2.3rem;
  flex: 1;

`;
const Title = styled.h1`
  font-size: 70px;
`;
const Des = styled.h1`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.h1`
  padding: 10px;
  font-size: 20px;
  width: 150px;
  border-radius: 10px;

  border: 1px solid;
  background-color: transparent;
`;
const Inforcontainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Slider = () => {
  const [slideIndex,setSlideIndex]=useState(0)
  const handleClick=(direction)=>{
        if(direction==="left"){
          setSlideIndex(slideIndex>0?slideIndex-1:2)
        }else{
          setSlideIndex(slideIndex<2?slideIndex+1:0);
        }
  }
  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("lift")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {slideData.map(item=>(

          <Slide bg={item.bg} key={item.id}>
          <ImgContainer>
            <Imge src={item.img} />
          </ImgContainer>
          <Inforcontainer>
            <Title>{item.title}</Title>
            <Des>{item.desc}</Des>
            <Button>SHOE NOW</Button>
          </Inforcontainer>
        </Slide>
        ))}
        
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
