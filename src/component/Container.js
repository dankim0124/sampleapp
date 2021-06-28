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
  const [hits, setHits] = useState();

  useEffect(() => {
    console.log("hits changed: ", hits);
  }, [hits]);

  const onSearch = () => {
    const searchQ = searchWord ;
    const searchForm = category
      ? {
          query: {
            bool: {
              filter: [{ match: { prd_name: searchWord } }],
              should: [{ match: { prd_cate_name: category } }],
            },
          },
        }
      : {};
    alert("search: " + searchWord + "\ncategory : " + category);

    console.log(searchForm);

    const options = {
      uri: "http://211.37.172.11:9200/test.allproduct/_search",
      method: "POST",
      json: searchForm,
    };

    request.post(options, (error, response, body) => {
      if (error) {
        console.log(error);
      } else {
        console.log(response);
        console.log(body);
        setHits(body.hits.hits);
        
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
          <CardGroup hits = {hits} />
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
