
import React from "react";
import styled from "styled-components";


const Tags = () =>{

    return (
       <CustomNav>
           <Slot>럭셔리</Slot>
           <Slot>빈티지</Slot>
           <Slot>캐주얼</Slot>
           <Slot>러블리</Slot>
           <Slot>심플베이직</Slot>
           <Slot>오피스룩</Slot>
           <Slot>유니크</Slot>
           <Slot>모던시크</Slot>
           <Slot>캠퍼스룩</Slot>
       </CustomNav>
    )
}

const CustomNav = styled.nav`
    display:flex;
    justify-content: space-between;
    transform: translate3d(0px,0px,0px);
    align-self: baseline;

`
const Slot = styled.a`
    display: block;
    position: relative;
    margin: 0;
    padding: 10px 12px;
    color: #202429;
    font-size: 15px;
    font-weight: bold;
    line-height: 23px;
    width: auto;
`

export default Tags;