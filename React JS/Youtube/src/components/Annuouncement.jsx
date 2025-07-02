import styled from 'styled-components'
const Container=styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    justify-content: center;
    font-size: 14px;
    align-items: center;
`
const Annuouncement = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Orders Over $50
    </Container>
  )
}

export default Annuouncement
