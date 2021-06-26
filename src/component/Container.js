import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Layout, Menu, Breadcrumb, PageHeader, Divider } from "antd";
import Space from "../material/Space";
import CustomForm from "./customForm";
import CardGroup from "./Cards/CardGroup";

import request from "request";

import Sider from "./Side/Side";
import Tags from "../component/tags/Tags";

const { Content, Footer } = Layout;

const Container = () => {
  const [searchWord, setSearchWord] = useState();
  const [category, setCategory] = useState();

  const onSearch = () => {
    const searchQ = searchWord ? "?q=" + searchWord : "";
    const searchForm = category
      ? {
          query: { match: { "category": "Men's" } },
        }
      : {};
    alert("search: " + searchWord + "\ncategory : " + category);

    const options = {
      uri: "http://localhost:9200/kibana_sample_data_ecommerce/_search",
      method: "POST",
      json: searchForm
    };

    const options2 = {
      uri: "http://localhost:9200/kibana_sample_data_ecommerce/_search",
      method: "GET",
      json: true,
    };
    

    request.post(options, (error, response, body) => {
      if (error) {
        console.log(error);
      } else {
        console.log(response);
        console.log(body);
      }
    });
  };

  return (
    <Layout className="layout">
      <PageHeader
        className="site-page-header"
        title="Cafe24 Display Network"
        backIcon="false"
        subTitle="CDN 테스트 페이지 , 숍 검색"
        style={{ marginLeft: "40px" }}
      />

      <Content
        style={{ padding: "0 50px", display: "flex", flexDirection: "row" }}
      >
        <Main style={{ display: "flex", flexDirection: "column" }}>
          <Divider />
          <CustomForm
            setSearchWord={setSearchWord}
            onSearch={onSearch}
            setCategory={setCategory}
            category={category}
          />
          <Space size="50" />
          <CardGroup />
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
