"use strict";(self.webpackChunk_maycur_design=self.webpackChunk_maycur_design||[]).push([[2443],{266047:function(u,i,t){t.r(i);var m=t(502143),p=t(968521),Z=t(720719),D=t(28840),_=t(759907),o=t(828089),h=t(825673),E=t(902068),g=t(574399),v=t(863942),P=t(316073),x=t(24628),M=t(719260),O=t(956140),l=t(127179),W=t(905388),T=t(104979),U=t(606965),f=t(268696),s=t(424128),C=t(249706),I=t(795127),A=t(116846),b=t(73024),a=t(606641),d=t(667294),e=t(370917);function c(){var r=(0,a.eL)(),n=r.texts;return(0,e.tZ)(a.dY,null,(0,e.tZ)(d.Fragment,null,(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("p",null,n[0].value),(0,e.tZ)("h2",{id:"when-to-use"},(0,e.tZ)(s.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,e.tZ)("p",null,n[1].value),(0,e.tZ)("h2",{id:"examples"},(0,e.tZ)(s.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#examples",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,e.tZ)(a.Dl,{demo:{id:"components-app-demo-basic"},previewerProps:{title:"basic",filename:"components/app/demo/basic.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.9.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.0.0","rc-collapse":"~3.5.2","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.2.0","rc-menu":"~9.8.3","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.4.2","rc-picker":"~3.7.4","rc-progress":"~3.4.1","rc-rate":"~2.10.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.6.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { App, Button, Space } from 'antd';

// Sub page
const MyPage = () => {
  const { message, modal, notification } = App.useApp();
  const showMessage = () => {
    message.success('Success!');
  };
  const showModal = () => {
    modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  };
  const showNotification = () => {
    notification.info({
      message: \`Notification topLeft\`,
      description: 'Hello, Ant Design!!',
      placement: 'topLeft',
    });
  };
  return (
    <Space>
      <Button type="primary" onClick={showMessage}>
        Open message
      </Button>
      <Button type="primary" onClick={showModal}>
        Open modal
      </Button>
      <Button type="primary" onClick={showNotification}>
        Open notification
      </Button>
    </Space>
  );
};

// Entry component
export default () => (
  <App>
    <MyPage />
  </App>
);
`,description:"<p>Static method for <code>message</code>, <code>notification</code>, <code>modal</code>.</p>"}}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"how-to-use"},(0,e.tZ)(s.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#how-to-use",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"How to use"),(0,e.tZ)("h3",{id:"basic-usage"},(0,e.tZ)(s.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#basic-usage",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"Basic usage"),(0,e.tZ)("p",null,n[2].value,(0,e.tZ)("code",null,n[3].value),n[4].value),(0,e.tZ)(_.Z,{lang:"tsx"},n[5].value),(0,e.tZ)("p",null,n[6].value),(0,e.tZ)("h3",{id:"sequence-with-configprovider"},(0,e.tZ)(s.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#sequence-with-configprovider",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"Sequence with ConfigProvider"),(0,e.tZ)("p",null,n[7].value,(0,e.tZ)("code",null,n[8].value),n[9].value),(0,e.tZ)(_.Z,{lang:"tsx"},n[10].value),(0,e.tZ)("h3",{id:"embedded-usage-scenarios-if-not-necessary-try-not-to-do-nesting"},(0,e.tZ)(s.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#embedded-usage-scenarios-if-not-necessary-try-not-to-do-nesting",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"Embedded usage scenarios (if not necessary, try not to do nesting)"),(0,e.tZ)(_.Z,{lang:"tsx"},n[11].value),(0,e.tZ)("h3",{id:"global-scene-redux-scene"},(0,e.tZ)(s.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#global-scene-redux-scene",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"Global scene (redux scene)"),(0,e.tZ)(_.Z,{lang:"tsx"},n[12].value),(0,e.tZ)(_.Z,{lang:"tsx"},n[13].value),(0,e.tZ)("h2",{id:"api"},(0,e.tZ)(s.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"API"),(0,e.tZ)("h3",{id:"app"},(0,e.tZ)(s.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#app",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"App"),(0,e.tZ)(o.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,n[14].value),(0,e.tZ)("th",null,n[15].value),(0,e.tZ)("th",null,n[16].value),(0,e.tZ)("th",null,n[17].value),(0,e.tZ)("th",null,n[18].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[19].value),(0,e.tZ)("td",null,n[20].value),(0,e.tZ)("td",null,(0,e.tZ)(s.Z,{to:"/components/message/#messageconfig",sourceType:"Link"},n[21].value)),(0,e.tZ)("td",null,n[22].value),(0,e.tZ)("td",null,n[23].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[24].value),(0,e.tZ)("td",null,n[25].value),(0,e.tZ)("td",null,(0,e.tZ)(s.Z,{to:"/components/notification/#notificationconfig",sourceType:"Link"},n[26].value)),(0,e.tZ)("td",null,n[27].value),(0,e.tZ)("td",null,n[28].value)))),(0,e.tZ)("h2",{id:"design-token"},(0,e.tZ)(s.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"Design Token")),(0,e.tZ)(l.Z,{component:"App"})))}i.default=c}}]);
