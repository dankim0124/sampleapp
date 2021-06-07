import React from "react";
import styled from "styled-components";

import { Layout, Menu, Breadcrumb, PageHeader, Divider } from "antd";
import Space from "../material/Space";
import CustomForm from "./customForm";
import RadioGroup from "./Radio/RadioGroup";
import CardGroup from "./Cards/CardGroup";
import Slot from "../component/tags/Tags"

import Sider from "./Side/Side";
import Tags from "../component/tags/Tags";

const { Content, Footer } = Layout;

const Container = () => {
  return (
    <Layout className="layout">

      <PageHeader
        className="site-page-header"
        title="Cafe24 Display Network"
        backIcon="false"
        subTitle="CDN 테스트 페이지 , 숍 검색"
        style = {{"margin-left":"40px"}}
      />

      <Content style={{ padding: "0 50px", display:"flex", flexDirection:"row" }}>

        <div style ={{display:"block", marginTop:"95px", marginRight:"20px"}}>
          <Sider/>
        </div>

        <Main style={{display:"flex" , flexDirection:"column"}}>

          <Space size="30" />
          <Tags/>
          <Divider/>
          <CustomForm/>
          <Space size="50"/>
            <CardGroup/>
          
        </Main>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default Container;

const Main = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
