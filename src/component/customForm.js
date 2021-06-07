import { Form, Input, Button,Space} from 'antd';


import styled from "styled-components";
import React from "react"
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const CustomForm  = () =>{

  const formStyle = {
    display:"flex",
    flexDirection :"row",
    width: "80%",
    maxWidth : "600px"
  }

  return (
  <FormContainer>
  <Form style={formStyle}>
   
    <Input name ="검색"  rules={[{ required: true }]}></Input>
    
    <Button type="primary" htmlType="submit" style={{marginLeft:"30px"}}>Submit</Button>
    
  </Form>
  <SortingMenu/>
  
  </FormContainer>
  )
}

const SortingMenu = () =>{

  const handleClick = e => {
    console.log('click ', e);
  };


  return (
    <Menu onClick={handleClick}  mode="horizontal">
     
      <SubMenu key="SubMenu" icon={<SettingOutlined />} title="SORTING">
        <Menu.ItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </Menu.ItemGroup>
        <Menu.ItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>
      
    </Menu>
  );
}




const FormContainer = styled.div`
  display:flex;
  flex-direction: column;

`

export default CustomForm



