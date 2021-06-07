import React from "react";
import { Row, Col,Space } from 'antd';
import styled from "styled-components";



import Item from "./Card"
const CardGroup = () =>{

    return (
        <Container>
        <Row style= {{margin:"20px"}}>
          <Col span={6}><Item/></Col>
          <Col span={6}><Item/></Col>
          <Col span={6}><Item/></Col>
          <Col span={6}><Item/></Col>
        </Row>
        <Row style= {{margin:"20px"}}>
          <Col span={6}><Item/></Col>
          <Col span={6}><Item/></Col>
          <Col span={6}><Item/></Col>
          <Col span={6}><Item/></Col>
        </Row>
        <Row style= {{margin:"20px"}}>
          <Col span={6}><Item/></Col>
          <Col span={6}><Item/></Col>
          <Col span={6}><Item/></Col>
          <Col span={6}><Item/></Col>
        </Row>
        <Row style= {{margin:"20px"}}>
          <Col span={6}><Item/></Col>
          <Col span={6}><Item/></Col>
          <Col span={6}><Item/></Col>
          <Col span={6}><Item/></Col>
        </Row>
        
      </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    margin-right: 20px;
    margin-legf: 20px;
`



export default CardGroup;