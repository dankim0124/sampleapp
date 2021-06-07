import { Form, Input, Button, Space } from "antd";

import styled from "styled-components";
import React from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  SettingOutlined,
  TagOutlined,
  CalendarOutlined,
  SkinOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

const CustomForm = () => {
  const formStyle = {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    maxWidth: "800px",
  };

  return (
    <FormContainer>
      <Form style={formStyle}>
        <Input name="검색" rules={[{ required: true }]}></Input>
        <Button type="primary" htmlType="submit" style={{ marginLeft: "30px" }}>
          Submit
        </Button>
      </Form>
      <SortingMenu />
    </FormContainer>
  );
};

const SortingMenu = () => {
  const handleClick = (e) => {
    console.log("click ", e);
  };

  return (
    <Menu
      style={{ background: "#f0f2f5" }}
      onClick={handleClick}
      mode="horizontal"
    >
      <SubMenu key="sub-sorting" icon={<SettingOutlined />} title="Sorting">
        <Menu.Item key="1">가격순</Menu.Item>
        <Menu.Item key="2">판매순</Menu.Item>
        <Menu.Item key="3">인기순</Menu.Item>
      </SubMenu>
      <SubMenu key="sub-date" icon={<CalendarOutlined />} title="Date">
        <Menu.Item key="5">주간</Menu.Item>
        <Menu.Item key="6">월간</Menu.Item>
      </SubMenu>
      <SubMenu key="sub-category" icon={<SkinOutlined />} title="CDN category">
        <Menu.ItemGroup key="g1" title="패션의류">
          <Menu.Item key="g1_1">남성언더웨어/잠옷</Menu.Item>
          <Menu.Item key="g1_2">남성의류</Menu.Item>
          <Menu.Item key="g1_3">여성언더웨어/잠옷</Menu.Item>
          <Menu.Item key="g1_4">여성의류</Menu.Item>
          <Menu.Item key="g1_5">캐주얼</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="g2" title="패션잡화">
          <Menu.Item key="g2_1">남성신발</Menu.Item>
          <Menu.Item key="g2_2">여성가방</Menu.Item>
          <Menu.Item key="g2_3">남성잡화</Menu.Item>
          <Menu.Item key="g2_4">여성잡화</Menu.Item>
          <Menu.Item key="g2_5">여성신발</Menu.Item>
          <Menu.Item key="g2_6">남성신발</Menu.Item>
          <Menu.Item key="g2_7">여행용 가방/소풍</Menu.Item>
          <Menu.Item key="g2_8">주얼리/시계</Menu.Item>
          <Menu.Item key="g2_9">헤어악세사리</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="g4" title="출산/유아">
          <Menu.Item key="g4_1">임부복</Menu.Item>
          <Menu.Item key="g4_2">유아동의류</Menu.Item>
          <Menu.Item key="g4_3">언더웨어</Menu.Item>
          <Menu.Item key="g4_4">시즌웨어/용품</Menu.Item>
          <Menu.Item key="g4_5">신발</Menu.Item>
          <Menu.Item key="g4_6">유아용잡화</Menu.Item>
          <Menu.Item key="g4_7">침구</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="g3" title="기타">
          <Menu.Item key="cate_g3_1">남성화장품</Menu.Item>
          <Menu.Item key="cate_g3_2">스킨케어</Menu.Item>
          <Menu.Item key="cate_g3_3">메이크업</Menu.Item>
          <Menu.Item key="cate_g3_4">바디케어</Menu.Item>
          <Menu.Item key="cate_g3_5">헤어케어</Menu.Item>
          <Menu.Item key="cate_g3_6">향수</Menu.Item>
          <Menu.Item key="cate_g2_7">기타</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      <SubMenu key="sub-tag" icon={<TagOutlined />} title="TAG">
        <Menu.Item key="tag-1">럭셔리</Menu.Item>
        <Menu.Item key="tag-2">빈티지</Menu.Item>
        <Menu.Item key="tag-3">캐주얼</Menu.Item>
        <Menu.Item key="tag-4">러블리</Menu.Item>
        <Menu.Item key="tag-5">심플베이직</Menu.Item>
        <Menu.Item key="tag-6">오피스룩</Menu.Item>
        <Menu.Item key="tag-7">유니크</Menu.Item>
        <Menu.Item key="tag-8">모던시크</Menu.Item>
        <Menu.Item key="tag-9">캠퍼스룩</Menu.Item>
        <Menu.Item key="tag-10">로맨틱</Menu.Item>
        <Menu.Item key="tag-11">키치</Menu.Item>
      </SubMenu>
    </Menu>
  );
};

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default CustomForm;
