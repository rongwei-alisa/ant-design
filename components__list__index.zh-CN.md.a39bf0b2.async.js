"use strict";(self.webpackChunk_maycur_design=self.webpackChunk_maycur_design||[]).push([[315],{397642:function(m,r,n){n.r(r);var p=n(502143),v=n(968521),_=n(720719),g=n(28840),Z=n(759907),a=n(828089),h=n(825673),f=n(902068),b=n(574399),D=n(863942),L=n(316073),x=n(24628),y=n(719260),k=n(956140),o=n(127179),s=n(905388),I=n(104979),E=n(606965),T=n(268696),l=n(424128),A=n(249706),P=n(795127),M=n(116846),C=n(73024),i=n(606641),c=n(667294),t=n(370917);function d(){var u=(0,i.eL)(),e=u.texts;return(0,t.tZ)(i.dY,null,(0,t.tZ)(c.Fragment,null,(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("p",null,e[0].value),(0,t.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,t.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528",sourceType:"a"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,t.tZ)("p",null,e[1].value),(0,t.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,t.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A",sourceType:"a"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,t.tZ)(s.Z,{items:[{demo:{id:"components-list-demo-simple"},previewerProps:{title:"\u7B80\u5355\u5217\u8868",filename:"components/list/demo/simple.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.9.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.0.0","rc-collapse":"~3.5.2","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.2.0","rc-menu":"~9.8.3","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.4.2","rc-picker":"~3.7.4","rc-progress":"~3.4.1","rc-rate":"~2.10.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.6.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { Divider, List, Typography } from 'antd';
const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];
const App = () => (
  <>
    <Divider orientation="left">Default Size</Divider>
    <List
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Typography.Text mark>[ITEM]</Typography.Text> {item}
        </List.Item>
      )}
    />
    <Divider orientation="left">Small Size</Divider>
    <List
      size="small"
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
    <Divider orientation="left">Large Size</Divider>
    <List
      size="large"
      header={<div>Header</div>}
      footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  </>
);
export default App;
`,description:`<p>\u5217\u8868\u62E5\u6709\u5927\u3001\u4E2D\u3001\u5C0F\u4E09\u79CD\u5C3A\u5BF8\u3002</p>
<p>\u901A\u8FC7\u8BBE\u7F6E <code>size</code> \u4E3A <code>large</code> <code>small</code> \u5206\u522B\u628A\u6309\u94AE\u8BBE\u4E3A\u5927\u3001\u5C0F\u5C3A\u5BF8\u3002\u82E5\u4E0D\u8BBE\u7F6E <code>size</code>\uFF0C\u5219\u5C3A\u5BF8\u4E3A\u4E2D\u3002</p>
<p>\u53EF\u901A\u8FC7\u8BBE\u7F6E <code>header</code> \u548C <code>footer</code>\uFF0C\u6765\u81EA\u5B9A\u4E49\u5217\u8868\u5934\u90E8\u548C\u5C3E\u90E8\u3002</p>`}},{demo:{id:"components-list-demo-basic"},previewerProps:{title:"\u57FA\u7840\u5217\u8868",filename:"components/list/demo/basic.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.9.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.0.0","rc-collapse":"~3.5.2","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.2.0","rc-menu":"~9.8.3","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.4.2","rc-picker":"~3.7.4","rc-progress":"~3.4.1","rc-rate":"~2.10.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.6.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { Avatar, List } from 'antd';
const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];
const App = () => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={\`https://xsgames.co/randomusers/avatar.php?g=pixel&key=\${index}\`} />}
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    )}
  />
);
export default App;
`,description:"<p>\u57FA\u7840\u5217\u8868\u3002</p>"}},{demo:{id:"components-list-demo-loadmore"},previewerProps:{title:"\u52A0\u8F7D\u66F4\u591A",filename:"components/list/demo/loadmore.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.9.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.0.0","rc-collapse":"~3.5.2","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.2.0","rc-menu":"~9.8.3","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.4.2","rc-picker":"~3.7.4","rc-progress":"~3.4.1","rc-rate":"~2.10.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.6.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { Avatar, Button, List, Skeleton } from 'antd';
import { useEffect, useState } from 'react';
const count = 3;
const fakeDataUrl = \`https://randomuser.me/api/?results=\${count}&inc=name,gender,email,nat,picture&noinfo\`;
const App = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        setInitLoading(false);
        setData(res.results);
        setList(res.results);
      });
  }, []);
  const onLoadMore = () => {
    setLoading(true);
    setList(
      data.concat(
        [...new Array(count)].map(() => ({
          loading: true,
          name: {},
          picture: {},
        })),
      ),
    );
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((res) => {
        const newData = data.concat(res.results);
        setData(newData);
        setList(newData);
        setLoading(false);
        // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
        // In real scene, you can using public method of react-virtualized:
        // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
        window.dispatchEvent(new Event('resize'));
      });
  };
  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;
  return (
    <List
      className="demo-loadmore-list"
      loading={initLoading}
      itemLayout="horizontal"
      loadMore={loadMore}
      dataSource={list}
      renderItem={(item) => (
        <List.Item
          actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
        >
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              avatar={<Avatar src={item.picture.large} />}
              title={<a href="https://ant.design">{item.name?.last}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
            <div>content</div>
          </Skeleton>
        </List.Item>
      )}
    />
  );
};
export default App;
`,description:"<p>\u53EF\u901A\u8FC7 <code>loadMore</code> \u5C5E\u6027\u5B9E\u73B0\u52A0\u8F7D\u66F4\u591A\u529F\u80FD\u3002</p>",style:`.demo-loadmore-list {
  min-height: 350px;
}`}},{demo:{id:"components-list-demo-vertical"},previewerProps:{title:"\u7AD6\u6392\u5217\u8868\u6837\u5F0F",filename:"components/list/demo/vertical.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.9.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.0.0","rc-collapse":"~3.5.2","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.2.0","rc-menu":"~9.8.3","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.4.2","rc-picker":"~3.7.4","rc-progress":"~3.4.1","rc-rate":"~2.10.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.6.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { Avatar, List, Space } from 'antd';
import React from 'react';
const data = Array.from({
  length: 23,
}).map((_, i) => ({
  href: 'https://ant.design',
  title: \`ant design part \${i}\`,
  avatar: \`https://xsgames.co/randomusers/avatar.php?g=pixel&key=\${i}\`,
  description:
    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));
const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);
const App = () => (
  <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={data}
    footer={
      <div>
        <b>ant design</b> footer part
      </div>
    }
    renderItem={(item) => (
      <List.Item
        key={item.title}
        actions={[
          <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
          <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
          <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
        ]}
        extra={
          <img
            width={272}
            alt="logo"
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        }
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href={item.href}>{item.title}</a>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  />
);
export default App;
`,description:"<p>\u901A\u8FC7\u8BBE\u7F6E <code>itemLayout</code> \u5C5E\u6027\u4E3A <code>vertical</code> \u53EF\u5B9E\u73B0\u7AD6\u6392\u5217\u8868\u6837\u5F0F\u3002</p>"}},{demo:{id:"components-list-demo-pagination"},previewerProps:{title:"\u5206\u9875\u8BBE\u7F6E",filename:"components/list/demo/pagination.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.9.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.0.0","rc-collapse":"~3.5.2","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.2.0","rc-menu":"~9.8.3","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.4.2","rc-picker":"~3.7.4","rc-progress":"~3.4.1","rc-rate":"~2.10.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.6.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { Avatar, List, Radio, Space } from 'antd';
import { useState } from 'react';
const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];
const positionOptions = ['top', 'bottom', 'both'];
const alignOptions = ['start', 'center', 'end'];
const App = () => {
  const [position, setPosition] = useState('bottom');
  const [align, setAlign] = useState('center');
  return (
    <>
      <Space
        direction="vertical"
        style={{
          marginBottom: '20px',
        }}
        size="middle"
      >
        <Space>
          <span>Pagination Position:</span>
          <Radio.Group
            optionType="button"
            value={position}
            onChange={(e) => {
              setPosition(e.target.value);
            }}
          >
            {positionOptions.map((item) => (
              <Radio.Button key={item} value={item}>
                {item}
              </Radio.Button>
            ))}
          </Radio.Group>
        </Space>
        <Space>
          <span>Pagination Align:</span>
          <Radio.Group
            optionType="button"
            value={align}
            onChange={(e) => {
              setAlign(e.target.value);
            }}
          >
            {alignOptions.map((item) => (
              <Radio.Button key={item} value={item}>
                {item}
              </Radio.Button>
            ))}
          </Radio.Group>
        </Space>
      </Space>
      <List
        pagination={{
          position,
          align,
        }}
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar src={\`https://xsgames.co/randomusers/avatar.php?g=pixel&key=\${index}\`} />
              }
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
    </>
  );
};
export default App;
`,description:"<p>\u53EF\u901A\u8FC7 <code>pagination</code> \u5C5E\u6027\u4F7F\u7528\u5217\u8868\u5206\u9875\uFF0C\u5E76\u8FDB\u884C\u8BBE\u7F6E\u3002</p>"}},{demo:{id:"components-list-demo-grid"},previewerProps:{title:"\u6805\u683C\u5217\u8868",filename:"components/list/demo/grid.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.9.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.0.0","rc-collapse":"~3.5.2","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.2.0","rc-menu":"~9.8.3","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.4.2","rc-picker":"~3.7.4","rc-progress":"~3.4.1","rc-rate":"~2.10.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.6.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { Card, List } from 'antd';
const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
];
const App = () => (
  <List
    grid={{
      gutter: 16,
      column: 4,
    }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <Card title={item.title}>Card content</Card>
      </List.Item>
    )}
  />
);
export default App;
`,description:"<p>\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E <code>List</code> \u7684 <code>grid</code> \u5C5E\u6027\u6765\u5B9E\u73B0\u6805\u683C\u5217\u8868\uFF0C<code>column</code> \u53EF\u8BBE\u7F6E\u671F\u671B\u663E\u793A\u7684\u5217\u6570\u3002</p>"}},{demo:{id:"components-list-demo-grid-test"},previewerProps:{debug:!0,title:"\u6D4B\u8BD5\u6805\u683C\u5217\u8868",filename:"components/list/demo/grid-test.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.9.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.0.0","rc-collapse":"~3.5.2","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.2.0","rc-menu":"~9.8.3","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.4.2","rc-picker":"~3.7.4","rc-progress":"~3.4.1","rc-rate":"~2.10.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.6.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { Card, List } from 'antd';
const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
];
const ListItem = () => (
  <List.Item>
    <Card title="title">Card content</Card>
  </List.Item>
);
const App = () => (
  <>
    <List
      grid={{
        gutter: 16,
        column: 4,
      }}
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Card title={item.title}>Card content</Card>
        </List.Item>
      )}
    />
    <List
      grid={{
        gutter: 16,
        column: 4,
      }}
      dataSource={data}
      renderItem={() => <ListItem />}
    />
    <List
      grid={{
        gutter: 16,
        column: 4,
      }}
      dataSource={data}
      renderItem={() => (
        <>
          <ListItem />
          <div />
        </>
      )}
    />
  </>
);
export default App;
`,description:"<p>List <code>grid</code> \u5728\u5404\u79CD\u60C5\u51B5\u4E0B\u7684\u6837\u5F0F\u8868\u73B0\uFF0C\u5982 Fragment \u548C\u5C01\u88C5\u4E86 List.Item.</p>"}},{demo:{id:"components-list-demo-responsive"},previewerProps:{title:"\u54CD\u5E94\u5F0F\u7684\u6805\u683C\u5217\u8868",filename:"components/list/demo/responsive.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.9.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.0.0","rc-collapse":"~3.5.2","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.2.0","rc-menu":"~9.8.3","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.4.2","rc-picker":"~3.7.4","rc-progress":"~3.4.1","rc-rate":"~2.10.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.6.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { Card, List } from 'antd';
const data = [
  {
    title: 'Title 1',
  },
  {
    title: 'Title 2',
  },
  {
    title: 'Title 3',
  },
  {
    title: 'Title 4',
  },
  {
    title: 'Title 5',
  },
  {
    title: 'Title 6',
  },
];
const App = () => (
  <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 6,
      xxl: 3,
    }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <Card title={item.title}>Card content</Card>
      </List.Item>
    )}
  />
);
export default App;
`,description:'<p>\u54CD\u5E94\u5F0F\u7684\u6805\u683C\u5217\u8868\u3002\u5C3A\u5BF8\u4E0E <a href="/components/grid/#col">Layout Grid</a> \u4FDD\u6301\u4E00\u81F4\u3002</p>'}},{demo:{id:"components-list-demo-infinite-load"},previewerProps:{title:"\u6EDA\u52A8\u52A0\u8F7D",filename:"components/list/demo/infinite-load.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.9.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.0.0","rc-collapse":"~3.5.2","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.2.0","rc-menu":"~9.8.3","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.4.2","rc-picker":"~3.7.4","rc-progress":"~3.4.1","rc-rate":"~2.10.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.6.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { Avatar, Divider, List, Skeleton } from 'antd';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
const App = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
      .then((res) => res.json())
      .then((body) => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  useEffect(() => {
    loadMoreData();
  }, []);
  return (
    <div
      id="scrollableDiv"
      style={{
        height: 400,
        overflow: 'auto',
        padding: '0 16px',
        border: '1px solid rgba(140, 140, 140, 0.35)',
      }}
    >
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < 50}
        loader={
          <Skeleton
            avatar
            paragraph={{
              rows: 1,
            }}
            active
          />
        }
        endMessage={<Divider plain>It is all, nothing more \u{1F910}</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item.email}>
              <List.Item.Meta
                avatar={<Avatar src={item.picture.large} />}
                title={<a href="https://ant.design">{item.name.last}</a>}
                description={item.email}
              />
              <div>Content</div>
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};
export default App;
`,description:'<p>\u7ED3\u5408 <a href="https://github.com/ankeetmaini/react-infinite-scroll-component">react-infinite-scroll-component</a> \u5B9E\u73B0\u6EDA\u52A8\u81EA\u52A8\u52A0\u8F7D\u5217\u8868\u3002</p>'}},{demo:{id:"components-list-demo-virtual-list"},previewerProps:{title:"\u6EDA\u52A8\u52A0\u8F7D\u65E0\u9650\u957F\u5217\u8868",filename:"components/list/demo/virtual-list.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.9.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.0.0","rc-collapse":"~3.5.2","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.2.0","rc-menu":"~9.8.3","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.4.2","rc-picker":"~3.7.4","rc-progress":"~3.4.1","rc-rate":"~2.10.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.6.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { Avatar, List, message } from 'antd';
import VirtualList from 'rc-virtual-list';
import { useEffect, useState } from 'react';
const fakeDataUrl =
  'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';
const ContainerHeight = 400;
const App = () => {
  const [data, setData] = useState([]);
  const appendData = () => {
    fetch(fakeDataUrl)
      .then((res) => res.json())
      .then((body) => {
        setData(data.concat(body.results));
        message.success(\`\${body.results.length} more items loaded!\`);
      });
  };
  useEffect(() => {
    appendData();
  }, []);
  const onScroll = (e) => {
    if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === ContainerHeight) {
      appendData();
    }
  };
  return (
    <List>
      <VirtualList
        data={data}
        height={ContainerHeight}
        itemHeight={47}
        itemKey="email"
        onScroll={onScroll}
      >
        {(item) => (
          <List.Item key={item.email}>
            <List.Item.Meta
              avatar={<Avatar src={item.picture.large} />}
              title={<a href="https://ant.design">{item.name.last}</a>}
              description={item.email}
            />
            <div>Content</div>
          </List.Item>
        )}
      </VirtualList>
    </List>
  );
};
export default App;
`,description:'<p>\u7ED3\u5408 <a href="https://github.com/react-component/virtual-list">rc-virtual-list</a> \u5B9E\u73B0\u6EDA\u52A8\u52A0\u8F7D\u65E0\u9650\u957F\u5217\u8868\uFF0C\u80FD\u591F\u63D0\u9AD8\u6570\u636E\u91CF\u5927\u65F6\u5019\u957F\u5217\u8868\u7684\u6027\u80FD\u3002</p>'}}]}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"api"},(0,t.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a"},(0,t.tZ)("span",{className:"icon icon-link"})),"API"),(0,t.tZ)("p",null,e[2].value,(0,t.tZ)(l.Z,{href:"https://procomponents.ant.design/components/list",sourceType:"a"},e[3].value),e[4].value,(0,t.tZ)("code",null,e[5].value),e[6].value),(0,t.tZ)("h3",{id:"list"},(0,t.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#list",sourceType:"a"},(0,t.tZ)("span",{className:"icon icon-link"})),"List"),(0,t.tZ)(a.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[7].value),(0,t.tZ)("th",null,e[8].value),(0,t.tZ)("th",null,e[9].value),(0,t.tZ)("th",null,e[10].value),(0,t.tZ)("th",null,e[11].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[12].value),(0,t.tZ)("td",null,e[13].value),(0,t.tZ)("td",null,e[14].value),(0,t.tZ)("td",null,e[15].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[16].value),(0,t.tZ)("td",null,e[17].value),(0,t.tZ)("td",null,e[18].value),(0,t.tZ)("td",null,e[19].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[20].value),(0,t.tZ)("td",null,e[21].value),(0,t.tZ)("td",null,e[22].value),(0,t.tZ)("td",null,e[23].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[24].value),(0,t.tZ)("td",null,e[25].value),(0,t.tZ)("td",null,(0,t.tZ)(l.Z,{to:"#list-grid-props",sourceType:"Link"},e[26].value)),(0,t.tZ)("td",null,e[27].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[28].value),(0,t.tZ)("td",null,e[29].value),(0,t.tZ)("td",null,e[30].value),(0,t.tZ)("td",null,e[31].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[32].value),(0,t.tZ)("td",null,e[33].value,(0,t.tZ)("code",null,e[34].value),e[35].value,(0,t.tZ)("code",null,e[36].value),e[37].value),(0,t.tZ)("td",null,e[38].value),(0,t.tZ)("td",null,e[39].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[40].value),(0,t.tZ)("td",null,e[41].value,(0,t.tZ)("code",null,e[42].value),e[43].value),(0,t.tZ)("td",null,e[44].value,(0,t.tZ)(l.Z,{to:"/components/spin-cn#api",sourceType:"Link"},e[45].value),e[46].value,(0,t.tZ)(l.Z,{href:"https://github.com/ant-design/ant-design/issues/8659",sourceType:"a"},e[47].value),e[48].value),(0,t.tZ)("td",null,e[49].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[50].value),(0,t.tZ)("td",null,e[51].value),(0,t.tZ)("td",null,e[52].value),(0,t.tZ)("td",null,e[53].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[54].value),(0,t.tZ)("td",null,e[55].value),(0,t.tZ)("td",null,e[56].value),(0,t.tZ)("td",null,e[57].value,(0,t.tZ)("code",null,e[58].value),e[59].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[60].value),(0,t.tZ)("td",null,e[61].value,(0,t.tZ)("code",null,e[62].value),e[63].value),(0,t.tZ)("td",null,e[64].value),(0,t.tZ)("td",null,e[65].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[66].value),(0,t.tZ)("td",null,e[67].value,(0,t.tZ)("code",null,e[68].value),e[69].value),(0,t.tZ)("td",null,e[70].value),(0,t.tZ)("td",null,e[71].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[72].value),(0,t.tZ)("td",null,e[73].value,(0,t.tZ)("code",null,e[74].value),e[75].value,(0,t.tZ)("code",null,e[76].value),e[77].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[78].value),e[79].value,(0,t.tZ)("code",null,e[80].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[81].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[82].value),(0,t.tZ)("td",null,e[83].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[84].value),e[85].value,(0,t.tZ)("code",null,e[86].value),e[87].value,(0,t.tZ)("code",null,e[88].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[89].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[90].value),(0,t.tZ)("td",null,e[91].value),(0,t.tZ)("td",null,e[92].value),(0,t.tZ)("td",null,e[93].value),(0,t.tZ)("td",null)))),(0,t.tZ)("h3",{id:"pagination"},(0,t.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#pagination",sourceType:"a"},(0,t.tZ)("span",{className:"icon icon-link"})),"pagination"),(0,t.tZ)("p",null,e[94].value),(0,t.tZ)(a.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[95].value),(0,t.tZ)("th",null,e[96].value),(0,t.tZ)("th",null,e[97].value),(0,t.tZ)("th",null,e[98].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[99].value),(0,t.tZ)("td",null,e[100].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[101].value),e[102].value,(0,t.tZ)("code",null,e[103].value),e[104].value,(0,t.tZ)("code",null,e[105].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[106].value))),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[107].value),(0,t.tZ)("td",null,e[108].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[109].value),e[110].value,(0,t.tZ)("code",null,e[111].value),e[112].value,(0,t.tZ)("code",null,e[113].value)),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[114].value))))),(0,t.tZ)("p",null,e[115].value,(0,t.tZ)(l.Z,{to:"/components/pagination-cn",sourceType:"Link"},(0,t.tZ)("code",null,e[116].value)),e[117].value),(0,t.tZ)("h3",{id:"list-grid-props"},(0,t.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#list-grid-props",sourceType:"a"},(0,t.tZ)("span",{className:"icon icon-link"})),"List grid props"),(0,t.tZ)(a.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[118].value),(0,t.tZ)("th",null,e[119].value),(0,t.tZ)("th",null,e[120].value),(0,t.tZ)("th",null,e[121].value),(0,t.tZ)("th",null,e[122].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[123].value),(0,t.tZ)("td",null,e[124].value),(0,t.tZ)("td",null,e[125].value),(0,t.tZ)("td",null,e[126].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[127].value),(0,t.tZ)("td",null,e[128].value),(0,t.tZ)("td",null,e[129].value),(0,t.tZ)("td",null,e[130].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[131].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[132].value),e[133].value),(0,t.tZ)("td",null,e[134].value),(0,t.tZ)("td",null,e[135].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[136].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[137].value),e[138].value),(0,t.tZ)("td",null,e[139].value),(0,t.tZ)("td",null,e[140].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[141].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[142].value),e[143].value),(0,t.tZ)("td",null,e[144].value),(0,t.tZ)("td",null,e[145].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[146].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[147].value),e[148].value),(0,t.tZ)("td",null,e[149].value),(0,t.tZ)("td",null,e[150].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[151].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[152].value),e[153].value),(0,t.tZ)("td",null,e[154].value),(0,t.tZ)("td",null,e[155].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[156].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[157].value),e[158].value),(0,t.tZ)("td",null,e[159].value),(0,t.tZ)("td",null,e[160].value),(0,t.tZ)("td",null)))),(0,t.tZ)("h3",{id:"listitem"},(0,t.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#listitem",sourceType:"a"},(0,t.tZ)("span",{className:"icon icon-link"})),"List.Item"),(0,t.tZ)(a.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[161].value),(0,t.tZ)("th",null,e[162].value),(0,t.tZ)("th",null,e[163].value),(0,t.tZ)("th",null,e[164].value),(0,t.tZ)("th",null,e[165].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[166].value),(0,t.tZ)("td",null,e[167].value,(0,t.tZ)("code",null,e[168].value),e[169].value),(0,t.tZ)("td",null,e[170].value),(0,t.tZ)("td",null,e[171].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[172].value),(0,t.tZ)("td",null,e[173].value,(0,t.tZ)("code",null,e[174].value),e[175].value,(0,t.tZ)("code",null,e[176].value),e[177].value,(0,t.tZ)("code",null,e[178].value),e[179].value),(0,t.tZ)("td",null,e[180].value),(0,t.tZ)("td",null,e[181].value),(0,t.tZ)("td",null)))),(0,t.tZ)("h3",{id:"listitemmeta"},(0,t.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#listitemmeta",sourceType:"a"},(0,t.tZ)("span",{className:"icon icon-link"})),"List.Item.Meta"),(0,t.tZ)(a.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[182].value),(0,t.tZ)("th",null,e[183].value),(0,t.tZ)("th",null,e[184].value),(0,t.tZ)("th",null,e[185].value),(0,t.tZ)("th",null,e[186].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[187].value),(0,t.tZ)("td",null,e[188].value),(0,t.tZ)("td",null,e[189].value),(0,t.tZ)("td",null,e[190].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[191].value),(0,t.tZ)("td",null,e[192].value),(0,t.tZ)("td",null,e[193].value),(0,t.tZ)("td",null,e[194].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[195].value),(0,t.tZ)("td",null,e[196].value),(0,t.tZ)("td",null,e[197].value),(0,t.tZ)("td",null,e[198].value),(0,t.tZ)("td",null)))),(0,t.tZ)("h2",{id:"design-token"},(0,t.tZ)(l.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a"},(0,t.tZ)("span",{className:"icon icon-link"})),"Design Token")),(0,t.tZ)(o.Z,{component:"List"})))}r.default=d}}]);
