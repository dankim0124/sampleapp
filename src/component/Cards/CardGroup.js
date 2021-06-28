import React, { useEffect, useState } from "react";
import { Row, Col, Space } from "antd";
import styled from "styled-components";

import Item from "./Card";
const CardGroup = ({hits}) => {

  useEffect(()=>{
    console.log("CardGroup");
    console.log("cardGroup hits :",hits)
  })


  if (hits) {
    console.log("SADASDASDSADASDADSASFASFGAS")
    return (
      <Container>
        <Item hit = {hits[0]}/>
        <Item hit = {hits[1]}/>
        <Item hit = {hits[2]}/>
        <Item hit = {hits[3]}/>
        <Item hit = {hits[4]}/>
        <Item hit = {hits[5]}/>
        <Item hit = {hits[6]}/>
        <Item hit = {hits[7]}/>
        <Item hit = {hits[8]}/>
        <Item hit = {hits[9]}/>
        <Item hit = {hits[10]}/>
        

      </Container>
    );
  } else {
    return null;
  }
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-right: 20px;
  margin-legf: 20px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
`;

export default CardGroup;
