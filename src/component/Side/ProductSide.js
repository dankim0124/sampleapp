import { Menu } from "antd";
import { TagOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

const Sider = () => {
  const handleClick = (e) => {
    console.log("click ", e);
  };

  return (
    <Menu
      onClick={handleClick}
      style={{ width: 256 }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
    >
      <SubMenu key="sub1" icon={<TagOutlined />} title="CDN Category">
        <Menu.ItemGroup key="g1" title="출산/유아동">
          <SubMenu key="g1_sub3" title="외출용품">
            <Menu.Item key="g1_sub3_1">기저귀가방</Menu.Item>
            <Menu.Item key="g1_sub3_2">망토/워머</Menu.Item>
            <Menu.Item key="g1_sub3_3">아기띠</Menu.Item>
            <Menu.Item key="g1_sub3_4">기타외출 용품</Menu.Item>
          </SubMenu>
          <SubMenu key="g1_sub2" title="유아용언더웨어/잠옷">
            <Menu.Item key="g1_sub2_1">내의</Menu.Item>
            <Menu.Item key="g1_sub2_2">러닝</Menu.Item>
            <Menu.Item key="g1_sub2_3">수면조끼</Menu.Item>
            <Menu.Item key="g1_sub2_4">팬티</Menu.Item>
          </SubMenu>
          <SubMenu key="g1_sub1" title="유아동의류">
            <Menu.Item key="g1_sub1_1">교복</Menu.Item>
            <Menu.Item key="g1_sub1_2">바지</Menu.Item>
            <Menu.Item key="g1_sub1_3">재킷</Menu.Item>
            <Menu.Item key="g1_sub1_4">조끼</Menu.Item>
            <Menu.Item key="g1_sub1_5">정장</Menu.Item>
          </SubMenu>
        </Menu.ItemGroup>
        <Menu.ItemGroup key="g2" title="패션의류">
          <SubMenu key="g2_sub1" title="남성의류">
            <Menu.Item key="g2_sub1_1">니트</Menu.Item>
            <Menu.Item key="g2_sub1_2">바지</Menu.Item>
            <Menu.Item key="g2_sub1_3">재킷</Menu.Item>
            <Menu.Item key="g2_sub1_4">정장</Menu.Item>
            <Menu.Item key="g2_sub1_5">트레이닝</Menu.Item>
          </SubMenu>
          <SubMenu key="g2_sub2" title="남성언더웨어">
            <Menu.Item key="g2_sub2_1">보정속옷</Menu.Item>
            <Menu.Item key="g2_sub2_2">잠옷</Menu.Item>
            <Menu.Item key="g2_sub2_3">팬티</Menu.Item>
            <Menu.Item key="g2_sub2_4">러닝</Menu.Item>
            <Menu.Item key="g2_sub2_5">시즌성내의</Menu.Item>
          </SubMenu>
          <SubMenu key="g2_sub3" title="여성의류">
            <Menu.Item key="g2_sub3_1">니트</Menu.Item>
            <Menu.Item key="g2_sub3_2">레깅스</Menu.Item>
            <Menu.Item key="g2_sub3_3">바지</Menu.Item>
            <Menu.Item key="g2_sub3_4">조끼</Menu.Item>
            <Menu.Item key="g2_sub3_5">청바지</Menu.Item>
          </SubMenu>
        </Menu.ItemGroup>
      </SubMenu>
      <SubMenu key="sub2" icon={<TagOutlined />} title="TAG">
        <Menu.Item key="1">럭셔리</Menu.Item>
        <Menu.Item key="2">빈티지</Menu.Item>
        <Menu.Item key="3">캐주얼</Menu.Item>
        <Menu.Item key="4">러블리</Menu.Item>
        <Menu.Item key="5">심플베이직</Menu.Item>
        <Menu.Item key="6">오피스룩</Menu.Item>
        <Menu.Item key="7">유니크</Menu.Item>
        <Menu.Item key="8">모던시크</Menu.Item>
        <Menu.Item key="9">캠퍼스룩</Menu.Item>
        <Menu.Item key="10">로맨틱</Menu.Item>
        <Menu.Item key="11">키치</Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default Sider;
