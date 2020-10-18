import React from 'react';
import styled from"styled-components";

const Container = styled.div`
  background:#7216af;
  width:80%;
  margin: 20px auto;
  height: 600px;
  display: flex;
  flex-direction: column;
`
const Row = styled.div`
  background: coral;
  width: 100px;
  height: 100px;
  margin :10px
`
const Index = () => {
    return(
        <>
            <Container>
               <Row>1</Row>
                <Row>2</Row>
                <Row>3</Row>
            </Container>
        </>
    )
}
export default Index