"use strict";(self.webpackChunk_maycur_design=self.webpackChunk_maycur_design||[]).push([[9653],{17343:function(m,l,n){n.r(l);var _=n(502143),Z=n(968521),b=n(720719),v=n(28840),a=n(759907),o=n(828089),h=n(825673),g=n(902068),x=n(574399),f=n(863942),D=n(316073),k=n(24628),E=n(719260),y=n(956140),s=n(127179),i=n(905388),P=n(104979),A=n(606965),L=n(268696),r=n(424128),T=n(249706),O=n(795127),U=n(116846),M=n(73024),c=n(606641),d=n(667294),e=n(370917);function u(){var p=(0,c.eL)(),t=p.texts;return(0,e.tZ)(c.dY,null,(0,e.tZ)(d.Fragment,null,(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("p",null,t[0].value),(0,e.tZ)("h2",{id:"when-to-use"},(0,e.tZ)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,t[1].value),(0,e.tZ)("li",null,t[2].value),(0,e.tZ)("li",null,t[3].value)),(0,e.tZ)(a.Z,{lang:"jsx"},t[4].value),(0,e.tZ)("h2",{id:"examples"},(0,e.tZ)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,e.tZ)(i.Z,{items:[{demo:{id:"components-breadcrumb-demo-basic"},previewerProps:{title:"Basic Usage",filename:"components/breadcrumb/demo/basic.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.9.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.0.0","rc-collapse":"~3.5.2","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.2.0","rc-menu":"~9.8.3","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.4.2","rc-picker":"~3.7.4","rc-progress":"~3.4.1","rc-rate":"~2.10.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.6.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { Breadcrumb } from 'antd';
const App = () => (
  <Breadcrumb
    items={[
      {
        title: 'Home',
      },
      {
        title: <a href="">Application Center</a>,
      },
      {
        title: <a href="">Application List</a>,
      },
      {
        title: 'An Application',
      },
    ]}
  />
);
export default App;
`,description:"<p>The simplest use.</p>"}},{demo:{id:"components-breadcrumb-demo-withicon"},previewerProps:{title:"With an Icon",filename:"components/breadcrumb/demo/withIcon.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.9.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.0.0","rc-collapse":"~3.5.2","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.2.0","rc-menu":"~9.8.3","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.4.2","rc-picker":"~3.7.4","rc-progress":"~3.4.1","rc-rate":"~2.10.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.6.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
const App = () => (
  <Breadcrumb
    items={[
      {
        href: '',
        title: <HomeOutlined />,
      },
      {
        href: '',
        title: (
          <>
            <UserOutlined />
            <span>Application List</span>
          </>
        ),
      },
      {
        title: 'Application',
      },
    ]}
  />
);
export default App;
`,description:"<p>The icon should be placed in front of the text.</p>"}},{demo:{id:"components-breadcrumb-demo-react-router"},previewerProps:{iframe:"200",title:"react-router V6",filename:"components/breadcrumb/demo/react-router.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.9.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.0.0","rc-collapse":"~3.5.2","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.2.0","rc-menu":"~9.8.3","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.4.2","rc-picker":"~3.7.4","rc-progress":"~3.4.1","rc-rate":"~2.10.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.6.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { Alert, Breadcrumb } from 'antd';
import { HashRouter, Link, Route, Routes, useLocation } from 'react-router-dom';
const Apps = () => (
  <ul className="app-list">
    <li>
      <Link to="/apps/1">Application1</Link>\uFF1A<Link to="/apps/1/detail">Detail</Link>
    </li>
    <li>
      <Link to="/apps/2">Application2</Link>\uFF1A<Link to="/apps/2/detail">Detail</Link>
    </li>
  </ul>
);
const breadcrumbNameMap = {
  '/apps': 'Application List',
  '/apps/1': 'Application1',
  '/apps/2': 'Application2',
  '/apps/1/detail': 'Detail',
  '/apps/2/detail': 'Detail',
};
const Home = () => {
  const location = useLocation();
  const pathSnippets = location.pathname.split('/').filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = \`/\${pathSnippets.slice(0, index + 1).join('/')}\`;
    return {
      key: url,
      title: <Link to={url}>{breadcrumbNameMap[url]}</Link>,
    };
  });
  const breadcrumbItems = [
    {
      title: <Link to="/">Home</Link>,
      key: 'home',
    },
  ].concat(extraBreadcrumbItems);
  return (
    <div className="demo">
      <div className="demo-nav">
        <Link to="/">Home</Link>
        <Link to="/apps">Application List</Link>
      </div>
      <Routes>
        <Route path="/apps" element={<Apps />} />
        <Route path="*" element={<span>Home Page</span>} />
      </Routes>
      <Alert
        style={{
          margin: '16px 0',
        }}
        message="Click the navigation above to switch:"
      />
      <Breadcrumb items={breadcrumbItems} />
    </div>
  );
};
const App = () => (
  <HashRouter>
    <Home />
  </HashRouter>
);
export default App;
`,description:"<p>Used together with <code>react-router@6+</code>.</p>",style:`.demo {
  margin: 16px;
}
.demo-nav {
  height: 30px;
  margin-bottom: 16px;
  line-height: 30px;
  background: #f8f8f8;
}
.demo-nav a {
  padding: 0 8px;
  line-height: 30px;
}
.app-list {
  margin-top: 16px;
}`}},{demo:{id:"components-breadcrumb-demo-separator"},previewerProps:{title:"Configuring the Separator",filename:"components/breadcrumb/demo/separator.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.9.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.0.0","rc-collapse":"~3.5.2","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.2.0","rc-menu":"~9.8.3","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.4.2","rc-picker":"~3.7.4","rc-progress":"~3.4.1","rc-rate":"~2.10.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.6.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { Breadcrumb } from 'antd';
const App = () => (
  <Breadcrumb
    separator=">"
    items={[
      {
        title: 'Home',
      },
      {
        title: 'Application Center',
        href: '',
      },
      {
        title: 'Application List',
        href: '',
      },
      {
        title: 'An Application',
      },
    ]}
  />
);
export default App;
`,description:'<p>The separator can be customized by setting the separator property: <code>separator=">"</code>.</p>'}},{demo:{id:"components-breadcrumb-demo-overlay"},previewerProps:{title:"Bread crumbs with drop down menu",filename:"components/breadcrumb/demo/overlay.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.9.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.0.0","rc-collapse":"~3.5.2","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.2.0","rc-menu":"~9.8.3","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.4.2","rc-picker":"~3.7.4","rc-progress":"~3.4.1","rc-rate":"~2.10.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.6.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { Breadcrumb } from 'antd';
const menuItems = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        General
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        Layout
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        Navigation
      </a>
    ),
  },
];
const App = () => (
  <Breadcrumb
    items={[
      {
        title: 'Ant Design',
      },
      {
        title: <a href="">Component</a>,
      },
      {
        title: <a href="">General</a>,
        menu: {
          items: menuItems,
        },
      },
      {
        title: 'Button',
      },
    ]}
  />
);
export default App;
`,description:"<p>Breadcrumbs support drop down menu.</p>"}},{demo:{id:"components-breadcrumb-demo-separator-component"},previewerProps:{title:"Configuring the Separator Independently",filename:"components/breadcrumb/demo/separator-component.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.9.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.0.0","rc-collapse":"~3.5.2","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.2.0","rc-menu":"~9.8.3","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.4.2","rc-picker":"~3.7.4","rc-progress":"~3.4.1","rc-rate":"~2.10.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.6.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { Breadcrumb } from 'antd';
const App = () => (
  <Breadcrumb
    separator=""
    items={[
      {
        title: 'Location',
      },
      {
        type: 'separator',
        separator: ':',
      },
      {
        href: '',
        title: 'Application Center',
      },
      {
        type: 'separator',
      },
      {
        href: '',
        title: 'Application List',
      },
      {
        type: 'separator',
      },
      {
        title: 'An Application',
      },
    ]}
  />
);
export default App;
`,description:"<p>Customize separator for each other.</p>"}},{demo:{id:"components-breadcrumb-demo-debug-routes"},previewerProps:{title:"Debug Routes",filename:"components/breadcrumb/demo/debug-routes.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.9.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.0.0","rc-collapse":"~3.5.2","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.2.0","rc-menu":"~9.8.3","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.4.2","rc-picker":"~3.7.4","rc-progress":"~3.4.1","rc-rate":"~2.10.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.6.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { Breadcrumb } from 'antd';
export default () => (
  <Breadcrumb
    routes={[
      {
        path: '/home',
        breadcrumbName: 'Home',
      },
      {
        path: '/user',
        breadcrumbName: 'User',
        children: [
          {
            path: '/user1',
            breadcrumbName: 'User1',
          },
          {
            path: '/user2',
            breadcrumbName: 'User2',
          },
        ],
      },
    ]}
  />
);
`,description:"<p>Origin <code>routes</code> debug.</p>"}}]}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"api"},(0,e.tZ)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"API"),(0,e.tZ)("h3",{id:"breadcrumb"},(0,e.tZ)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#breadcrumb",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"Breadcrumb"),(0,e.tZ)(o.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,t[5].value),(0,e.tZ)("th",null,t[6].value),(0,e.tZ)("th",null,t[7].value),(0,e.tZ)("th",null,t[8].value),(0,e.tZ)("th",null,t[9].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[10].value),(0,e.tZ)("td",null,t[11].value),(0,e.tZ)("td",null,t[12].value),(0,e.tZ)("td",null,t[13].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[14].value),(0,e.tZ)("td",null,t[15].value),(0,e.tZ)("td",null,t[16].value),(0,e.tZ)("td",null,t[17].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[18].value),(0,e.tZ)("td",null,t[19].value),(0,e.tZ)("td",null,(0,e.tZ)(r.Z,{to:"#ItemType",sourceType:"Link"},t[20].value)),(0,e.tZ)("td",null,t[21].value),(0,e.tZ)("td",null,t[22].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[23].value),(0,e.tZ)("td",null,t[24].value),(0,e.tZ)("td",null,t[25].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,t[26].value)),(0,e.tZ)("td",null)))),(0,e.tZ)("h3",{id:"itemtype"},(0,e.tZ)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#itemtype",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"ItemType"),(0,e.tZ)("blockquote",null,(0,e.tZ)("p",null,t[27].value,(0,e.tZ)(r.Z,{to:"#RouteItemType",sourceType:"Link"},t[28].value),t[29].value,(0,e.tZ)(r.Z,{to:"#SeparatorType",sourceType:"Link"},t[30].value))),(0,e.tZ)("h3",{id:"routeitemtype"},(0,e.tZ)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#routeitemtype",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"RouteItemType"),(0,e.tZ)(o.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,t[31].value),(0,e.tZ)("th",null,t[32].value),(0,e.tZ)("th",null,t[33].value),(0,e.tZ)("th",null,t[34].value),(0,e.tZ)("th",null,t[35].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[36].value),(0,e.tZ)("td",null,t[37].value),(0,e.tZ)("td",null,t[38].value),(0,e.tZ)("td",null,t[39].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[40].value),(0,e.tZ)("td",null,t[41].value),(0,e.tZ)("td",null,(0,e.tZ)(r.Z,{to:"/components/dropdown",sourceType:"Link"},t[42].value)),(0,e.tZ)("td",null,t[43].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[44].value),(0,e.tZ)("td",null,t[45].value,(0,e.tZ)("code",null,t[46].value)),(0,e.tZ)("td",null,t[47].value),(0,e.tZ)("td",null,t[48].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[49].value),(0,e.tZ)("td",null,t[50].value,(0,e.tZ)("code",null,t[51].value)),(0,e.tZ)("td",null,t[52].value),(0,e.tZ)("td",null,t[53].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[54].value),(0,e.tZ)("td",null,t[55].value),(0,e.tZ)("td",null,(0,e.tZ)(r.Z,{to:"/components/menu/#api",sourceType:"Link"},t[56].value)),(0,e.tZ)("td",null,t[57].value),(0,e.tZ)("td",null,t[58].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[59].value),(0,e.tZ)("td",null,t[60].value),(0,e.tZ)("td",null,t[61].value),(0,e.tZ)("td",null,t[62].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[63].value),(0,e.tZ)("td",null,t[64].value),(0,e.tZ)("td",null,t[65].value),(0,e.tZ)("td",null,t[66].value),(0,e.tZ)("td",null)))),(0,e.tZ)("h3",{id:"separatortype"},(0,e.tZ)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#separatortype",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"SeparatorType"),(0,e.tZ)(a.Z,{lang:"ts"},t[67].value),(0,e.tZ)(o.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,t[68].value),(0,e.tZ)("th",null,t[69].value),(0,e.tZ)("th",null,t[70].value),(0,e.tZ)("th",null,t[71].value),(0,e.tZ)("th",null,t[72].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[73].value),(0,e.tZ)("td",null,t[74].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,t[75].value)),(0,e.tZ)("td",null),(0,e.tZ)("td",null,t[76].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,t[77].value),(0,e.tZ)("td",null,t[78].value),(0,e.tZ)("td",null,t[79].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,t[80].value)),(0,e.tZ)("td",null,t[81].value)))),(0,e.tZ)("h3",{id:"use-with-browserhistory"},(0,e.tZ)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#use-with-browserhistory",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"Use with browserHistory"),(0,e.tZ)("p",null,t[82].value,(0,e.tZ)("code",null,t[83].value),t[84].value,(0,e.tZ)("code",null,t[85].value),t[86].value,(0,e.tZ)("code",null,t[87].value),t[88].value),(0,e.tZ)(a.Z,{lang:"jsx"},t[89].value),(0,e.tZ)("h2",{id:"design-token"},(0,e.tZ)(r.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"Design Token")),(0,e.tZ)(s.Z,{component:"Breadcrumb"})))}l.default=u}}]);
