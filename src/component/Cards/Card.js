import {  Card } from "antd";

const Item = ({hit}) => {
    const { Meta } = Card;
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={
        <img
          alt="example"
          src={hit ? hit._source.basicImage :"https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" }
        />
      }
    >
      <Meta title={hit? hit._source.prd_name :"Europe Street beat"} description={hit? hit._source.mall_id :"Europe Street beat"} />
    </Card>
  );
};

export default Item;
