
import { Radio,Space } from 'antd';

const RadioGroup = () =>{

    return (
    <>
    <Radio.Group defaultValue="a" size="large">
        <Space size="large">
      <Radio.Button value="a">전체</Radio.Button>
      <Radio.Button value="b">아우터</Radio.Button>
      <Radio.Button value="c">상의</Radio.Button>
      <Radio.Button value="d">원피스/세트</Radio.Button>
      <Radio.Button value="e">바지</Radio.Button>
      <Radio.Button value="f">스커트</Radio.Button>
      <Radio.Button value="g">슈즈</Radio.Button>
      <Radio.Button value="h">가방</Radio.Button>
      </Space>
    </Radio.Group>
  </>
    );
}


export default RadioGroup;