"use strict";(self.webpackChunk_maycur_design=self.webpackChunk_maycur_design||[]).push([[4646],{657977:function(te,h,t){t.r(h);var R=t(805574),r=t.n(R),a=t(513669),P=t(218537),Z=t(605042),x=t(704650),I=t(606641),o=t(667294),j=t(302559),e=t(370917);function ne(){return"You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."}var A=o.lazy(function(){return Promise.all([t.e(3459),t.e(2494)]).then(t.bind(t,192494))});function L(c){return Object.prototype.toString.call(c)==="[object Object]"}var U={cn:{title:"\u4E3B\u9898\u7F16\u8F91\u5668",save:"\u4FDD\u5B58",edit:"\u7F16\u8F91",export:"\u5BFC\u51FA",editModelTitle:"\u7F16\u8F91\u4E3B\u9898\u914D\u7F6E",editJsonContentTypeError:"\u4E3B\u9898 JSON \u683C\u5F0F\u9519\u8BEF",editSuccessfully:"\u7F16\u8F91\u6210\u529F",saveSuccessfully:"\u4FDD\u5B58\u6210\u529F",initialEditor:"\u6B63\u5728\u521D\u59CB\u5316\u7F16\u8F91\u5668..."},en:{title:"Theme Editor",save:"Save",edit:"Edit",export:"Export",editModelTitle:"edit Theme Config",editJsonContentTypeError:"The theme of the JSON format is incorrect",editSuccessfully:"Edited successfully",saveSuccessfully:"Saved successfully",initialEditor:"Initializing Editor..."}},b={name:"zbl8st",styles:"display:flex;height:56px;align-items:center;padding:0 24px;justify-content:space-between;border-bottom:1px solid #F0F0F0"},B=function(){return{header:b}},v="ant-design-v5-theme-editor-theme",N=function(){var W=a.message.useMessage(),f=r()(W,2),E=f[0],J=f[1],K=(0,j.Z)(U),g=r()(K,2),n=g[0],k=g[1],F=o.useState({}),C=r()(F,2),_=C[0],m=C[1],$=(0,o.useState)(!1),p=r()($,2),z=p[0],y=p[1],H=(0,o.useState)(!0),S=r()(H,2),T=S[0],G=S[1],V=(0,o.useState)({text:"{}",json:void 0}),O=r()(V,2),d=O[0],M=O[1];(0,o.useEffect)(function(){var i=localStorage.getItem(v);if(i){var s=JSON.parse(i),l={json:s,text:void 0};M(l),m(s)}},[]);var Y=B(),Q=function(){localStorage.setItem(v,JSON.stringify(_)),E.success(n.saveSuccessfully)},X=function(){y(!0)},D=(0,o.useCallback)(function(){y(!1)},[d]),w=function(s,l,u){M(s),G(!u.contentErrors)},q=(0,o.useCallback)(function(){var i=!T;if(i){a.message.error(n.editJsonContentTypeError);return}var s=d.text?JSON.parse(d.text):d.json;if(!L(s)){a.message.error(n.editJsonContentTypeError);return}m(s),D(),E.success(n.editSuccessfully)},[d,T]),ee=function(){var s=new File([JSON.stringify(_,null,2)],"Ant Design Theme.json",{type:"text/json; charset=utf-8;"}),l=document.createElement("a"),u=URL.createObjectURL(s);l.href=u,l.download=s.name,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(u)};return(0,e.tZ)("div",null,(0,e.tZ)(I.ql,null,(0,e.tZ)("title",null,"".concat(n.title," - Ant Design")),(0,e.tZ)("meta",{property:"og:title",content:"".concat(n.title," - Ant Design")})),J,(0,e.tZ)(a.ConfigProvider,{theme:{inherit:!1}},(0,e.tZ)("div",{css:Y.header},(0,e.tZ)(a.Typography.Title,{level:5,style:{margin:0}},n.title),(0,e.tZ)("div",null,(0,e.tZ)(a.Modal,{open:z,title:n.editModelTitle,width:600,okText:n.save,onOk:q,onCancel:D},(0,e.tZ)(o.Suspense,{fallback:(0,e.tZ)("div",{style:{textAlign:"center",width:"100%",padding:"24px 0"}},(0,e.tZ)(a.Spin,{tip:n.initialEditor}))},(0,e.tZ)(A,{content:d,onChange:w,mainMenuBar:!1}))),(0,e.tZ)(a.Button,{onClick:ee,style:{marginRight:8}},n.export),(0,e.tZ)(a.Button,{onClick:X,style:{marginRight:8}},n.edit),(0,e.tZ)(a.Button,{type:"primary",onClick:Q},n.save))),(0,e.tZ)(P.Z,{theme:{name:"Custom Theme",key:"test",config:_},style:{height:"calc(100vh - 64px - 56px)"},onThemeChange:function(s){m(s.config)},locale:k==="cn"?Z.Z:x.Z})))};h.default=N}}]);
