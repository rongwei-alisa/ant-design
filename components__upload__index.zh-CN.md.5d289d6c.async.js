"use strict";(self.webpackChunk_maycur_design=self.webpackChunk_maycur_design||[]).push([[5610],{269075:function(m,r,t){t.r(r);var g=t(502143),f=t(968521),v=t(720719),Z=t(28840),l=t(759907),i=t(828089),h=t(825673),_=t(902068),b=t(574399),w=t(863942),y=t(316073),U=t(24628),x=t(719260),k=t(956140),c=t(127179),s=t(905388),L=t(104979),P=t(606965),E=t(268696),o=t(424128),D=t(249706),j=t(795127),O=t(116846),F=t(73024),a=t(606641),u=t(667294),e=t(370917);function d(){var p=(0,a.eL)(),n=p.texts;return(0,e.tZ)(a.dY,null,(0,e.tZ)(u.Fragment,null,(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("p",null,n[0].value),(0,e.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,e.tZ)(o.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,e.tZ)("p",null,n[1].value),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,n[2].value),(0,e.tZ)("li",null,n[3].value),(0,e.tZ)("li",null,n[4].value)),(0,e.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,e.tZ)(o.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,e.tZ)(s.Z,{items:[{demo:{id:"components-upload-demo-basic"},previewerProps:{title:"\u70B9\u51FB\u4E0A\u4F20",filename:"components/upload/demo/basic.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.9.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.0.0","rc-collapse":"~3.5.2","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.2.0","rc-menu":"~9.8.3","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.4.2","rc-picker":"~3.7.4","rc-progress":"~3.4.1","rc-rate":"~2.10.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.6.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(\`\${info.file.name} file uploaded successfully\`);
    } else if (info.file.status === 'error') {
      message.error(\`\${info.file.name} file upload failed.\`);
    }
  },
};
const App = () => (
  <Upload {...props}>
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
);
export default App;
`,description:"<p>\u7ECF\u5178\u6B3E\u5F0F\uFF0C\u7528\u6237\u70B9\u51FB\u6309\u94AE\u5F39\u51FA\u6587\u4EF6\u9009\u62E9\u6846\u3002</p>"}},{demo:{id:"components-upload-demo-avatar"},previewerProps:{title:"\u7528\u6237\u5934\u50CF",filename:"components/upload/demo/avatar.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.9.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.0.0","rc-collapse":"~3.5.2","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.2.0","rc-menu":"~9.8.3","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.4.2","rc-picker":"~3.7.4","rc-progress":"~3.4.1","rc-rate":"~2.10.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.6.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { PlusOutlined } from '@ant-design/icons';
import { Upload, message } from 'antd';
import { useState } from 'react';
const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};
const App = () => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const handleChange = (info) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <>
      <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="avatar"
            style={{
              width: '100%',
            }}
          />
        ) : (
          uploadButton
        )}
      </Upload>
      <Upload
        name="avatar"
        listType="picture-circle"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt="avatar"
            style={{
              width: '100%',
            }}
          />
        ) : (
          uploadButton
        )}
      </Upload>
    </>
  );
};
export default App;
`,description:`<p>\u70B9\u51FB\u4E0A\u4F20\u7528\u6237\u5934\u50CF\uFF0C\u5E76\u4F7F\u7528 <code>beforeUpload</code> \u9650\u5236\u7528\u6237\u4E0A\u4F20\u7684\u56FE\u7247\u683C\u5F0F\u548C\u5927\u5C0F\u3002</p>
<blockquote>
<p><code>beforeUpload</code> \u7684\u8FD4\u56DE\u503C\u53EF\u4EE5\u662F\u4E00\u4E2A Promise \u4EE5\u652F\u6301\u5F02\u6B65\u5904\u7406\uFF0C\u5982\u670D\u52A1\u7AEF\u6821\u9A8C\u7B49\uFF1A<a href="https://upload-react-component.vercel.app/demo/before-upload#beforeupload">\u793A\u4F8B</a>\u3002</p>
</blockquote>`}},{demo:{id:"components-upload-demo-defaultfilelist"},previewerProps:{title:"\u5DF2\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868",filename:"components/upload/demo/defaultFileList.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.9.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.0.0","rc-collapse":"~3.5.2","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.2.0","rc-menu":"~9.8.3","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.4.2","rc-picker":"~3.7.4","rc-progress":"~3.4.1","rc-rate":"~2.10.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.6.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
const props = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange({ file, fileList }) {
    if (file.status !== 'uploading') {
      console.log(file, fileList);
    }
  },
  defaultFileList: [
    {
      uid: '1',
      name: 'xxx.png',
      status: 'uploading',
      url: 'http://www.baidu.com/xxx.png',
      percent: 33,
    },
    {
      uid: '2',
      name: 'yyy.png',
      status: 'done',
      url: 'http://www.baidu.com/yyy.png',
    },
    {
      uid: '3',
      name: 'zzz.png',
      status: 'error',
      response: 'Server Error 500',
      // custom error message to show
      url: 'http://www.baidu.com/zzz.png',
    },
  ],
};
const App = () => (
  <Upload {...props}>
    <Button icon={<UploadOutlined />}>Upload</Button>
  </Upload>
);
export default App;
`,description:"<p>\u4F7F\u7528 <code>defaultFileList</code> \u8BBE\u7F6E\u5DF2\u4E0A\u4F20\u7684\u5185\u5BB9\u3002</p>"}},{demo:{id:"components-upload-demo-picture-card"},previewerProps:{title:"\u7167\u7247\u5899",filename:"components/upload/demo/picture-card.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.9.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.0.0","rc-collapse":"~3.5.2","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.2.0","rc-menu":"~9.8.3","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.4.2","rc-picker":"~3.7.4","rc-progress":"~3.4.1","rc-rate":"~2.10.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.6.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';
import { useState } from 'react';
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const App = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-2',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-3',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-4',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-xxx',
      percent: 50,
      name: 'image.png',
      status: 'uploading',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-5',
      name: 'image.png',
      status: 'error',
    },
  ]);
  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img
          alt="example"
          style={{
            width: '100%',
          }}
          src={previewImage}
        />
      </Modal>
    </>
  );
};
export default App;
`,description:"<p>\u7528\u6237\u53EF\u4EE5\u4E0A\u4F20\u56FE\u7247\u5E76\u5728\u5217\u8868\u4E2D\u663E\u793A\u7F29\u7565\u56FE\u3002\u5F53\u4E0A\u4F20\u7167\u7247\u6570\u5230\u8FBE\u9650\u5236\u540E\uFF0C\u4E0A\u4F20\u6309\u94AE\u6D88\u5931\u3002</p>"}},{demo:{id:"components-upload-demo-picture-circle"},previewerProps:{title:"\u5706\u5F62\u7167\u7247\u5899",filename:"components/upload/demo/picture-circle.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.9.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.0.0","rc-collapse":"~3.5.2","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.2.0","rc-menu":"~9.8.3","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.4.2","rc-picker":"~3.7.4","rc-progress":"~3.4.1","rc-rate":"~2.10.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.6.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';
import { useState } from 'react';
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const App = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-xxx',
      percent: 50,
      name: 'image.png',
      status: 'uploading',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-5',
      name: 'image.png',
      status: 'error',
    },
  ]);
  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-circle"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img
          alt="example"
          style={{
            width: '100%',
          }}
          src={previewImage}
        />
      </Modal>
    </>
  );
};
export default App;
`,description:"<p>\u56FE\u7247\u5361\u7684\u66FF\u4EE3\u663E\u793A\u3002</p>"}},{demo:{id:"components-upload-demo-filelist"},previewerProps:{title:"\u5B8C\u5168\u63A7\u5236\u7684\u4E0A\u4F20\u5217\u8868",filename:"components/upload/demo/fileList.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.9.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.0.0","rc-collapse":"~3.5.2","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.2.0","rc-menu":"~9.8.3","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.4.2","rc-picker":"~3.7.4","rc-progress":"~3.4.1","rc-rate":"~2.10.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.6.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import { useState } from 'react';
const App = () => {
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'xxx.png',
      status: 'done',
      url: 'http://www.baidu.com/xxx.png',
    },
  ]);
  const handleChange = (info) => {
    let newFileList = [...info.fileList];

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    newFileList = newFileList.slice(-2);

    // 2. Read from response and show file link
    newFileList = newFileList.map((file) => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });
    setFileList(newFileList);
  };
  const props = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange: handleChange,
    multiple: true,
  };
  return (
    <Upload {...props} fileList={fileList}>
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>
  );
};
export default App;
`,description:`<p>\u4F7F\u7528 <code>fileList</code> \u5BF9\u5217\u8868\u8FDB\u884C\u5B8C\u5168\u63A7\u5236\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u5404\u79CD\u81EA\u5B9A\u4E49\u529F\u80FD\uFF0C\u4EE5\u4E0B\u6F14\u793A\u4E8C\u79CD\u60C5\u51B5\uFF1A</p>
<ol>
<li>
<p>\u4E0A\u4F20\u5217\u8868\u6570\u91CF\u7684\u9650\u5236\u3002</p>
</li>
<li>
<p>\u8BFB\u53D6\u8FDC\u7A0B\u8DEF\u5F84\u5E76\u663E\u793A\u94FE\u63A5\u3002</p>
</li>
</ol>`}},{demo:{id:"components-upload-demo-drag"},previewerProps:{title:"\u62D6\u62FD\u4E0A\u4F20",filename:"components/upload/demo/drag.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.9.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.0.0","rc-collapse":"~3.5.2","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.2.0","rc-menu":"~9.8.3","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.4.2","rc-picker":"~3.7.4","rc-progress":"~3.4.1","rc-rate":"~2.10.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.6.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
const { Dragger } = Upload;
const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(\`\${info.file.name} file uploaded successfully.\`);
    } else if (status === 'error') {
      message.error(\`\${info.file.name} file upload failed.\`);
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files);
  },
};
const App = () => (
  <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">Click or drag file to this area to upload</p>
    <p className="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibited from uploading company data or other
      banned files.
    </p>
  </Dragger>
);
export default App;
`,description:`<p>\u628A\u6587\u4EF6\u62D6\u5165\u6307\u5B9A\u533A\u57DF\uFF0C\u5B8C\u6210\u4E0A\u4F20\uFF0C\u540C\u6837\u652F\u6301\u70B9\u51FB\u4E0A\u4F20\u3002</p>
<p>\u8BBE\u7F6E <code>multiple</code> \u540E\uFF0C\u5728 <code>IE10+</code> \u53EF\u4EE5\u4E00\u6B21\u4E0A\u4F20\u591A\u4E2A\u6587\u4EF6\u3002</p>`}},{demo:{id:"components-upload-demo-directory"},previewerProps:{title:"\u6587\u4EF6\u5939\u4E0A\u4F20",filename:"components/upload/demo/directory.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.9.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.0.0","rc-collapse":"~3.5.2","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.2.0","rc-menu":"~9.8.3","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.4.2","rc-picker":"~3.7.4","rc-progress":"~3.4.1","rc-rate":"~2.10.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.6.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
const App = () => (
  <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" directory>
    <Button icon={<UploadOutlined />}>Upload Directory</Button>
  </Upload>
);
export default App;
`,description:"<p>\u652F\u6301\u4E0A\u4F20\u4E00\u4E2A\u6587\u4EF6\u5939\u91CC\u7684\u6240\u6709\u6587\u4EF6\u3002</p>"}},{demo:{id:"components-upload-demo-upload-manually"},previewerProps:{title:"\u624B\u52A8\u4E0A\u4F20",filename:"components/upload/demo/upload-manually.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.9.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.0.0","rc-collapse":"~3.5.2","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.2.0","rc-menu":"~9.8.3","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.4.2","rc-picker":"~3.7.4","rc-progress":"~3.4.1","rc-rate":"~2.10.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.6.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import { useState } from 'react';
const App = () => {
  const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false);
  const handleUpload = () => {
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append('files[]', file);
    });
    setUploading(true);
    // You can use any AJAX library you like
    fetch('https://www.mocky.io/v2/5cc8019d300000980a055e76', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then(() => {
        setFileList([]);
        message.success('upload successfully.');
      })
      .catch(() => {
        message.error('upload failed.');
      })
      .finally(() => {
        setUploading(false);
      });
  };
  const props = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);
      return false;
    },
    fileList,
  };
  return (
    <>
      <Upload {...props}>
        <Button icon={<UploadOutlined />}>Select File</Button>
      </Upload>
      <Button
        type="primary"
        onClick={handleUpload}
        disabled={fileList.length === 0}
        loading={uploading}
        style={{
          marginTop: 16,
        }}
      >
        {uploading ? 'Uploading' : 'Start Upload'}
      </Button>
    </>
  );
};
export default App;
`,description:"<p><code>beforeUpload</code> \u8FD4\u56DE <code>false</code> \u540E\uFF0C\u624B\u52A8\u4E0A\u4F20\u6587\u4EF6\u3002</p>"}},{demo:{id:"components-upload-demo-upload-png-only"},previewerProps:{title:"\u53EA\u4E0A\u4F20 png \u56FE\u7247",filename:"components/upload/demo/upload-png-only.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.9.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.0.0","rc-collapse":"~3.5.2","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.2.0","rc-menu":"~9.8.3","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.4.2","rc-picker":"~3.7.4","rc-progress":"~3.4.1","rc-rate":"~2.10.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.6.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
const props = {
  beforeUpload: (file) => {
    const isPNG = file.type === 'image/png';
    if (!isPNG) {
      message.error(\`\${file.name} is not a png file\`);
    }
    return isPNG || Upload.LIST_IGNORE;
  },
  onChange: (info) => {
    console.log(info.fileList);
  },
};
const App = () => (
  <Upload {...props}>
    <Button icon={<UploadOutlined />}>Upload png only</Button>
  </Upload>
);
export default App;
`,description:'<p><code>beforeUpload</code> \u8FD4\u56DE <code>false</code> \u6216 <code>Promise.reject</code> \u65F6\uFF0C\u53EA\u7528\u4E8E\u62E6\u622A\u4E0A\u4F20\u884C\u4E3A\uFF0C\u4E0D\u4F1A\u963B\u6B62\u6587\u4EF6\u8FDB\u5165\u4E0A\u4F20\u5217\u8868\uFF08<a href="https://github.com/ant-design/ant-design/issues/15561#issuecomment-475108235">\u539F\u56E0</a>\uFF09\u3002\u5982\u679C\u9700\u8981\u963B\u6B62\u5217\u8868\u5C55\u73B0\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8FD4\u56DE <code>Upload.LIST_IGNORE</code> \u5B9E\u73B0\u3002</p>'}},{demo:{id:"components-upload-demo-picture-style"},previewerProps:{title:"\u56FE\u7247\u5217\u8868\u6837\u5F0F",filename:"components/upload/demo/picture-style.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.9.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.0.0","rc-collapse":"~3.5.2","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.2.0","rc-menu":"~9.8.3","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.4.2","rc-picker":"~3.7.4","rc-progress":"~3.4.1","rc-rate":"~2.10.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.6.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
const fileList = [
  {
    uid: '0',
    name: 'xxx.png',
    status: 'uploading',
    percent: 33,
  },
  {
    uid: '-1',
    name: 'yyy.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
  {
    uid: '-2',
    name: 'zzz.png',
    status: 'error',
  },
];
const App = () => (
  <>
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture"
      defaultFileList={[...fileList]}
    >
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>
    <br />
    <br />
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture"
      defaultFileList={[...fileList]}
      className="upload-list-inline"
    >
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>
  </>
);
export default App;
`,description:'<p>\u4E0A\u4F20\u6587\u4EF6\u4E3A\u56FE\u7247\uFF0C\u53EF\u5C55\u793A\u672C\u5730\u7F29\u7565\u56FE\u3002<code>IE8/9</code> \u4E0D\u652F\u6301\u6D4F\u89C8\u5668\u672C\u5730\u7F29\u7565\u56FE\u5C55\u793A\uFF08<a href="https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL">Ref</a>\uFF09\uFF0C\u53EF\u4EE5\u5199 <code>thumbUrl</code> \u5C5E\u6027\u6765\u4EE3\u66FF\u3002</p>',style:`/* tile uploaded pictures */
.upload-list-inline .ant-upload-list-item {
  float: left;
  width: 200px;
  margin-inline-end: 8px;
}

.ant-upload-rtl.upload-list-inline .ant-upload-list-item {
  float: right;
}`}},{demo:{id:"components-upload-demo-preview-file"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u9884\u89C8",filename:"components/upload/demo/preview-file.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.9.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.0.0","rc-collapse":"~3.5.2","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.2.0","rc-menu":"~9.8.3","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.4.2","rc-picker":"~3.7.4","rc-progress":"~3.4.1","rc-rate":"~2.10.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.6.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
const props = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
  previewFile(file) {
    console.log('Your upload file:', file);
    // Your process logic. Here we just mock to the same file
    return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
      method: 'POST',
      body: file,
    })
      .then((res) => res.json())
      .then(({ thumbnail }) => thumbnail);
  },
};
const App = () => (
  <Upload {...props}>
    <Button icon={<UploadOutlined />}>Upload</Button>
  </Upload>
);
export default App;
`,description:"<p>\u81EA\u5B9A\u4E49\u672C\u5730\u9884\u89C8\uFF0C\u7528\u4E8E\u5904\u7406\u975E\u56FE\u7247\u683C\u5F0F\u6587\u4EF6\uFF08\u4F8B\u5982\u89C6\u9891\u6587\u4EF6\uFF09\u3002</p>"}},{demo:{id:"components-upload-demo-max-count"},previewerProps:{title:"\u9650\u5236\u6570\u91CF",filename:"components/upload/demo/max-count.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.9.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.0.0","rc-collapse":"~3.5.2","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.2.0","rc-menu":"~9.8.3","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.4.2","rc-picker":"~3.7.4","rc-progress":"~3.4.1","rc-rate":"~2.10.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.6.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { UploadOutlined } from '@ant-design/icons';
import { Button, Space, Upload } from 'antd';
const App = () => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size="large"
  >
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture"
      maxCount={1}
    >
      <Button icon={<UploadOutlined />}>Upload (Max: 1)</Button>
    </Upload>
    <Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture"
      maxCount={3}
      multiple
    >
      <Button icon={<UploadOutlined />}>Upload (Max: 3)</Button>
    </Upload>
  </Space>
);
export default App;
`,description:"<p>\u901A\u8FC7 <code>maxCount</code> \u9650\u5236\u4E0A\u4F20\u6570\u91CF\u3002\u5F53\u4E3A <code>1</code> \u65F6\uFF0C\u59CB\u7EC8\u7528\u6700\u65B0\u4E0A\u4F20\u7684\u4EE3\u66FF\u5F53\u524D\u3002</p>"}},{demo:{id:"components-upload-demo-transform-file"},previewerProps:{title:"\u4E0A\u4F20\u524D\u8F6C\u6362\u6587\u4EF6",filename:"components/upload/demo/transform-file.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.9.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.0.0","rc-collapse":"~3.5.2","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.2.0","rc-menu":"~9.8.3","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.4.2","rc-picker":"~3.7.4","rc-progress":"~3.4.1","rc-rate":"~2.10.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.6.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
const props = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  listType: 'picture',
  beforeUpload(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const img = document.createElement('img');
        img.src = reader.result;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          canvas.width = img.naturalWidth;
          canvas.height = img.naturalHeight;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);
          ctx.fillStyle = 'red';
          ctx.textBaseline = 'middle';
          ctx.font = '33px Arial';
          ctx.fillText('Ant Design', 20, 20);
          canvas.toBlob((result) => resolve(result));
        };
      };
    });
  },
};
const App = () => (
  <Upload {...props}>
    <Button icon={<UploadOutlined />}>Upload</Button>
  </Upload>
);
export default App;
`,description:"<p>\u4F7F\u7528 <code>beforeUpload</code> \u8F6C\u6362\u4E0A\u4F20\u7684\u6587\u4EF6\uFF08\u4F8B\u5982\u6DFB\u52A0\u6C34\u5370\uFF09\u3002</p>"}},{demo:{id:"components-upload-demo-upload-with-aliyun-oss"},previewerProps:{title:"\u963F\u91CC\u4E91 OSS",filename:"components/upload/demo/upload-with-aliyun-oss.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.9.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.0.0","rc-collapse":"~3.5.2","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.2.0","rc-menu":"~9.8.3","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.4.2","rc-picker":"~3.7.4","rc-progress":"~3.4.1","rc-rate":"~2.10.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.6.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, Upload, message } from 'antd';
import { useEffect, useState } from 'react';
const AliyunOSSUpload = ({ value, onChange }) => {
  const [OSSData, setOSSData] = useState();

  // Mock get OSS api
  // https://help.aliyun.com/document_detail/31988.html
  const mockGetOSSData = () => ({
    dir: 'user-dir/',
    expire: '1577811661',
    host: '//www.mocky.io/v2/5cc8019d300000980a055e76',
    accessId: 'c2hhb2RhaG9uZw==',
    policy: 'eGl4aWhhaGFrdWt1ZGFkYQ==',
    signature: 'ZGFob25nc2hhbw==',
  });
  const init = async () => {
    try {
      const result = await mockGetOSSData();
      setOSSData(result);
    } catch (error) {
      message.error(error);
    }
  };
  useEffect(() => {
    init();
  }, []);
  const handleChange = ({ fileList }) => {
    console.log('Aliyun OSS:', fileList);
    onChange?.([...fileList]);
  };
  const onRemove = (file) => {
    const files = (value || []).filter((v) => v.url !== file.url);
    if (onChange) {
      onChange(files);
    }
  };
  const getExtraData = (file) => ({
    key: file.url,
    OSSAccessKeyId: OSSData?.accessId,
    policy: OSSData?.policy,
    Signature: OSSData?.signature,
  });
  const beforeUpload = async (file) => {
    if (!OSSData) return false;
    const expire = Number(OSSData.expire) * 1000;
    if (expire < Date.now()) {
      await init();
    }
    const suffix = file.name.slice(file.name.lastIndexOf('.'));
    const filename = Date.now() + suffix;
    // @ts-ignore
    file.url = OSSData.dir + filename;
    return file;
  };
  const uploadProps = {
    name: 'file',
    fileList: value,
    action: OSSData?.host,
    onChange: handleChange,
    onRemove,
    data: getExtraData,
    beforeUpload,
  };
  return (
    <Upload {...uploadProps}>
      <Button icon={<UploadOutlined />}>Click to Upload</Button>
    </Upload>
  );
};
const App = () => (
  <Form
    labelCol={{
      span: 4,
    }}
  >
    <Form.Item label="Photos" name="photos">
      <AliyunOSSUpload />
    </Form.Item>
  </Form>
);
export default App;
`,description:"<p>\u4F7F\u7528\u963F\u91CC\u4E91 OSS \u4E0A\u4F20\u793A\u4F8B.</p>"}},{demo:{id:"components-upload-demo-file-type"},previewerProps:{debug:!0,title:"\u81EA\u5B9A\u4E49\u663E\u793A icon",filename:"components/upload/demo/file-type.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.9.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.0.0","rc-collapse":"~3.5.2","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.2.0","rc-menu":"~9.8.3","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.4.2","rc-picker":"~3.7.4","rc-progress":"~3.4.1","rc-rate":"~2.10.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.6.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import {
  FileExcelTwoTone,
  FilePdfTwoTone,
  FileWordTwoTone,
  LoadingOutlined,
  PictureTwoTone,
  PlusOutlined,
} from '@ant-design/icons';
import { Modal, Upload } from 'antd';
import { useState } from 'react';
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const App = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState([
    {
      uid: '-2',
      name: 'pdf.pdf',
      status: 'done',
      url: 'http://cdn07.foxitsoftware.cn/pub/foxit/cpdf/FoxitCompanyProfile.pdf',
    },
    {
      uid: '-3',
      name: 'doc.doc',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.doc',
    },
    {
      uid: '-4',
      name: 'image.png',
      status: 'error',
    },
    {
      uid: '-5',
      name: 'pdf.pdf',
      status: 'error',
    },
    {
      uid: '-6',
      name: 'doc.doc',
      status: 'error',
    },
  ]);
  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewOpen(true);
    setPreviewImage(file.url || file.preview);
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const handleIconRender = (file, listType) => {
    const fileSufIconList = [
      {
        type: <FilePdfTwoTone />,
        suf: ['.pdf'],
      },
      {
        type: <FileExcelTwoTone />,
        suf: ['.xlsx', '.xls', '.csv'],
      },
      {
        type: <FileWordTwoTone />,
        suf: ['.doc', '.docx'],
      },
      {
        type: <PictureTwoTone />,
        suf: ['.webp', '.svg', '.png', '.gif', '.jpg', '.jpeg', '.jfif', '.bmp', '.dpg'],
      },
    ];
    // console.log(1, file, listType);
    let icon = file.status === 'uploading' ? <LoadingOutlined /> : <PaperClipOutlined />;
    if (listType === 'picture' || listType === 'picture-card' || listType === 'picture-circle') {
      if (listType === 'picture-card' && file.status === 'uploading') {
        icon = <LoadingOutlined />; // or icon = 'uploading...';
      } else {
        fileSufIconList.forEach((item) => {
          if (item.suf.includes(file.name.slice(file.name.lastIndexOf('.')))) {
            icon = item.type;
          }
        });
      }
    }
    return icon;
  };
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        iconRender={handleIconRender}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal open={previewOpen} footer={null} onCancel={handleCancel}>
        <img
          alt="example"
          style={{
            width: '100%',
          }}
          src={previewImage}
        />
      </Modal>
    </>
  );
};
export default App;
`,description:"<p>\u6839\u636E\u7C7B\u578B\u9ED8\u8BA4\u663E\u793A\u5BF9\u5E94 icon</p>"}},{demo:{id:"components-upload-demo-upload-custom-action-icon"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u4EA4\u4E92\u56FE\u6807",filename:"components/upload/demo/upload-custom-action-icon.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.9.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.0.0","rc-collapse":"~3.5.2","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.2.0","rc-menu":"~9.8.3","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.4.2","rc-picker":"~3.7.4","rc-progress":"~3.4.1","rc-rate":"~2.10.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.6.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { StarOutlined, UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
const props = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange({ file, fileList }) {
    if (file.status !== 'uploading') {
      console.log(file, fileList);
    }
  },
  defaultFileList: [
    {
      uid: '1',
      name: 'xxx.png',
      status: 'done',
      response: 'Server Error 500',
      // custom error message to show
      url: 'http://www.baidu.com/xxx.png',
    },
    {
      uid: '2',
      name: 'yyy.png',
      status: 'done',
      url: 'http://www.baidu.com/yyy.png',
    },
    {
      uid: '3',
      name: 'zzz.png',
      status: 'error',
      response: 'Server Error 500',
      // custom error message to show
      url: 'http://www.baidu.com/zzz.png',
    },
  ],
  showUploadList: {
    showDownloadIcon: true,
    downloadIcon: 'Download',
    showRemoveIcon: true,
    removeIcon: <StarOutlined onClick={(e) => console.log(e, 'custom removeIcon event')} />,
  },
};
const App = () => (
  <Upload {...props}>
    <Button icon={<UploadOutlined />}>Upload</Button>
  </Upload>
);
export default App;
`,description:"<p>\u4F7F\u7528 <code>showUploadList</code> \u8BBE\u7F6E\u5217\u8868\u4EA4\u4E92\u56FE\u6807\u3002</p>"}},{demo:{id:"components-upload-demo-drag-sorting"},previewerProps:{title:"\u4E0A\u4F20\u5217\u8868\u62D6\u62FD\u6392\u5E8F",filename:"components/upload/demo/drag-sorting.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.9.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.0.0","rc-collapse":"~3.5.2","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.2.0","rc-menu":"~9.8.3","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.4.2","rc-picker":"~3.7.4","rc-progress":"~3.4.1","rc-rate":"~2.10.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.6.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { UploadOutlined } from '@ant-design/icons';
import { DndContext, PointerSensor, useSensor } from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { css } from '@emotion/css';
import { Button, Upload } from 'antd';
import { useState } from 'react';
const DraggableUploadListItem = ({ originNode, file }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: file.uid,
  });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: 'move',
  };

  // prevent preview event when drag end
  const className = isDragging
    ? css\`
        a {
          pointer-events: none;
        }
      \`
    : '';
  return (
    <div ref={setNodeRef} style={style} className={className} {...attributes} {...listeners}>
      {/* hide error tooltip when dragging */}
      {file.status === 'error' && isDragging ? originNode.props.children : originNode}
    </div>
  );
};
const App = () => {
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image1.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-2',
      name: 'image2.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-3',
      name: 'image3.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-4',
      name: 'image4.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-5',
      name: 'image.png',
      status: 'error',
    },
  ]);
  const sensor = useSensor(PointerSensor, {
    activationConstraint: {
      distance: 10,
    },
  });
  const onDragEnd = ({ active, over }) => {
    if (active.id !== over?.id) {
      setFileList((prev) => {
        const activeIndex = prev.findIndex((i) => i.uid === active.id);
        const overIndex = prev.findIndex((i) => i.uid === over?.id);
        return arrayMove(prev, activeIndex, overIndex);
      });
    }
  };
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  return (
    <DndContext sensors={[sensor]} onDragEnd={onDragEnd}>
      <SortableContext items={fileList.map((i) => i.uid)} strategy={verticalListSortingStrategy}>
        <Upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          fileList={fileList}
          onChange={onChange}
          itemRender={(originNode, file) => (
            <DraggableUploadListItem originNode={originNode} file={file} />
          )}
        >
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
      </SortableContext>
    </DndContext>
  );
};
export default App;
`,description:'<p>\u4F7F\u7528 <code>itemRender</code> \uFF0C\u6211\u4EEC\u53EF\u4EE5\u96C6\u6210 <a href="https://github.com/clauderic/dnd-kit">dnd-kit</a> \u6765\u5B9E\u73B0\u5BF9\u4E0A\u4F20\u5217\u8868\u62D6\u62FD\u6392\u5E8F\u3002</p>'}},{demo:{id:"components-upload-demo-crop-image"},previewerProps:{title:"\u4E0A\u4F20\u524D\u88C1\u5207\u56FE\u7247",filename:"components/upload/demo/crop-image.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.9.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.0.0","rc-collapse":"~3.5.2","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.2.0","rc-menu":"~9.8.3","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.4.2","rc-picker":"~3.7.4","rc-progress":"~3.4.1","rc-rate":"~2.10.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.6.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import { useState } from 'react';
const App = () => {
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);
  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  return (
    <ImgCrop rotationSlider>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length < 5 && '+ Upload'}
      </Upload>
    </ImgCrop>
  );
};
export default App;
`,description:'<p>\u914D\u5408 <a href="https://github.com/nanxiaobei/antd-img-crop">antd-img-crop</a> \u5B9E\u73B0\u4E0A\u4F20\u524D\u88C1\u5207\u56FE\u7247\u3002</p>'}},{demo:{id:"components-upload-demo-customize-progress-bar"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u8FDB\u5EA6\u6761\u6837\u5F0F",filename:"components/upload/demo/customize-progress-bar.tsx",pkgDependencyList:{"@ant-design/colors":"^7.0.0","@ant-design/cssinjs":"^1.9.1","@ant-design/icons":"^5.1.0","@ant-design/react-slick":"~1.0.0","@babel/runtime":"^7.18.3","@ctrl/tinycolor":"^3.6.0","@rc-component/color-picker":"~1.2.0","@rc-component/mutate-observer":"^1.0.0","@rc-component/tour":"~1.8.0","@rc-component/trigger":"^1.13.0",classnames:"^2.2.6","copy-to-clipboard":"^3.2.0",dayjs:"^1.11.1","qrcode.react":"^3.1.0","rc-cascader":"~3.12.0","rc-checkbox":"~3.0.0","rc-collapse":"~3.5.2","rc-dialog":"~9.1.0","rc-drawer":"~6.2.0","rc-dropdown":"~4.1.0","rc-field-form":"~1.32.0","rc-image":"~5.17.1","rc-input":"~1.0.4","rc-input-number":"~7.4.0","rc-mentions":"~2.2.0","rc-menu":"~9.8.3","rc-motion":"^2.7.3","rc-notification":"~5.0.4","rc-pagination":"~3.4.2","rc-picker":"~3.7.4","rc-progress":"~3.4.1","rc-rate":"~2.10.0","rc-resize-observer":"^1.2.0","rc-segmented":"~2.2.0","rc-select":"~14.5.0","rc-slider":"~10.1.0","rc-steps":"~6.0.0","rc-switch":"~4.1.0","rc-table":"~7.32.1","rc-tabs":"~12.6.0","rc-textarea":"~1.2.2","rc-tooltip":"~6.0.0","rc-tree":"~5.7.4","rc-tree-select":"~5.9.0","rc-upload":"~4.3.0","rc-util":"^5.32.0","scroll-into-view-if-needed":"^3.0.3","throttle-debounce":"^5.0.0"},jsx:`import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(\`\${info.file.name} file uploaded successfully\`);
    } else if (info.file.status === 'error') {
      message.error(\`\${info.file.name} file upload failed.\`);
    }
  },
  progress: {
    strokeColor: {
      '0%': '#108ee9',
      '100%': '#87d068',
    },
    strokeWidth: 3,
    format: (percent) => percent && \`\${parseFloat(percent.toFixed(2))}%\`,
  },
};
const App = () => (
  <Upload {...props}>
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
);
export default App;
`,description:"<p>\u4F7F\u7528 <code>progress</code> \u5C5E\u6027\u81EA\u5B9A\u4E49\u8FDB\u5EA6\u6761\u6837\u5F0F\u3002</p>"}}]}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"api"},(0,e.tZ)(o.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#api",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"API"),(0,e.tZ)(i.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,n[5].value),(0,e.tZ)("th",null,n[6].value),(0,e.tZ)("th",null,n[7].value),(0,e.tZ)("th",null,n[8].value),(0,e.tZ)("th",null,n[9].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[10].value),(0,e.tZ)("td",null,n[11].value,(0,e.tZ)(o.Z,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept",sourceType:"a"},n[12].value)),(0,e.tZ)("td",null,n[13].value),(0,e.tZ)("td",null,n[14].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[15].value),(0,e.tZ)("td",null,n[16].value),(0,e.tZ)("td",null,n[17].value),(0,e.tZ)("td",null,n[18].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[19].value),(0,e.tZ)("td",null,n[20].value,(0,e.tZ)("code",null,n[21].value),n[22].value,(0,e.tZ)("code",null,n[23].value),n[24].value,(0,e.tZ)("code",null,n[25].value),n[26].value,(0,e.tZ)("code",null,n[27].value),n[28].value,(0,e.tZ)("strong",null,n[29].value)),(0,e.tZ)("td",null,n[30].value,(0,e.tZ)("code",null,n[31].value)),(0,e.tZ)("td",null,n[32].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[33].value),(0,e.tZ)("td",null,n[34].value),(0,e.tZ)("td",null,n[35].value),(0,e.tZ)("td",null,n[36].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[37].value),(0,e.tZ)("td",null,n[38].value),(0,e.tZ)("td",null,n[39].value),(0,e.tZ)("td",null,n[40].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[41].value),(0,e.tZ)("td",null,n[42].value),(0,e.tZ)("td",null,n[43].value),(0,e.tZ)("td",null,n[44].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[45].value),(0,e.tZ)("td",null,n[46].value,(0,e.tZ)(o.Z,{href:"https://caniuse.com/#feat=input-file-directory",sourceType:"a"},n[47].value),n[48].value),(0,e.tZ)("td",null,n[49].value),(0,e.tZ)("td",null,n[50].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[51].value),(0,e.tZ)("td",null,n[52].value),(0,e.tZ)("td",null,n[53].value),(0,e.tZ)("td",null,n[54].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[55].value),(0,e.tZ)("td",null,n[56].value,(0,e.tZ)("code",null,n[57].value),n[58].value,(0,e.tZ)(o.Z,{href:"https://github.com/ant-design/ant-design/issues/2423",sourceType:"a"},n[59].value)),(0,e.tZ)("td",null,(0,e.tZ)(o.Z,{to:"#uploadfile",sourceType:"Link"},n[60].value),n[61].value),(0,e.tZ)("td",null,n[62].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[63].value),(0,e.tZ)("td",null,n[64].value),(0,e.tZ)("td",null,n[65].value),(0,e.tZ)("td",null,n[66].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[67].value),(0,e.tZ)("td",null,n[68].value),(0,e.tZ)("td",null,n[69].value),(0,e.tZ)("td",null,n[70].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[71].value),(0,e.tZ)("td",null,n[72].value),(0,e.tZ)("td",null,n[73].value),(0,e.tZ)("td",null,(0,e.tZ)(o.Z,{href:"https://github.com/ant-design/ant-design/blob/4ad5830eecfb87471cd8ac588c5d992862b70770/components/upload/utils.tsx#L47-L68",sourceType:"a"},n[74].value)),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[75].value),(0,e.tZ)("td",null,n[76].value),(0,e.tZ)("td",null,n[77].value),(0,e.tZ)("td",null,n[78].value),(0,e.tZ)("td",null,n[79].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[80].value),(0,e.tZ)("td",null,n[81].value,(0,e.tZ)("code",null,n[82].value),n[83].value,(0,e.tZ)("code",null,n[84].value),n[85].value,(0,e.tZ)("code",null,n[86].value),n[87].value,(0,e.tZ)("code",null,n[88].value)),(0,e.tZ)("td",null,n[89].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[90].value)),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[91].value),n[92].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[93].value),(0,e.tZ)("td",null,n[94].value),(0,e.tZ)("td",null,n[95].value),(0,e.tZ)("td",null,n[96].value),(0,e.tZ)("td",null,n[97].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[98].value),(0,e.tZ)("td",null,n[99].value),(0,e.tZ)("td",null,n[100].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[101].value)),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[102].value),(0,e.tZ)("td",null,n[103].value,(0,e.tZ)("code",null,n[104].value),n[105].value),(0,e.tZ)("td",null,n[106].value),(0,e.tZ)("td",null,n[107].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[108].value),(0,e.tZ)("td",null,n[109].value),(0,e.tZ)("td",null,n[110].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[111].value)),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[112].value),(0,e.tZ)("td",null,n[113].value),(0,e.tZ)("td",null,n[114].value),(0,e.tZ)("td",null,n[115].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[116].value),(0,e.tZ)("td",null,n[117].value),(0,e.tZ)("td",null,n[118].value),(0,e.tZ)("td",null,n[119].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[120].value),(0,e.tZ)("td",null,n[121].value),(0,e.tZ)("td",null,(0,e.tZ)(o.Z,{to:"/components/progress-cn#api",sourceType:"Link"},n[122].value),n[123].value,(0,e.tZ)("code",null,n[124].value),n[125].value),(0,e.tZ)("td",null,n[126].value),(0,e.tZ)("td",null,n[127].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[128].value),(0,e.tZ)("td",null,n[129].value,(0,e.tZ)("code",null,n[130].value),n[131].value,(0,e.tZ)("code",null,n[132].value),n[133].value,(0,e.tZ)("code",null,n[134].value),n[135].value,(0,e.tZ)("code",null,n[136].value),n[137].value,(0,e.tZ)("code",null,n[138].value)),(0,e.tZ)("td",null,n[139].value),(0,e.tZ)("td",null,n[140].value),(0,e.tZ)("td",null,n[141].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[142].value),(0,e.tZ)("td",null,n[143].value),(0,e.tZ)("td",null,n[144].value),(0,e.tZ)("td",null,n[145].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[146].value),(0,e.tZ)("td",null,n[147].value,(0,e.tZ)(o.Z,{to:"#onchange",sourceType:"Link"},n[148].value)),(0,e.tZ)("td",null,n[149].value),(0,e.tZ)("td",null,n[150].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[151].value),(0,e.tZ)("td",null,n[152].value),(0,e.tZ)("td",null,n[153].value),(0,e.tZ)("td",null,n[154].value),(0,e.tZ)("td",null,n[155].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[156].value),(0,e.tZ)("td",null,n[157].value),(0,e.tZ)("td",null,n[158].value),(0,e.tZ)("td",null,n[159].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[160].value),(0,e.tZ)("td",null,n[161].value),(0,e.tZ)("td",null,n[162].value),(0,e.tZ)("td",null,n[163].value),(0,e.tZ)("td",null)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[164].value),(0,e.tZ)("td",null,n[165].value),(0,e.tZ)("td",null,n[166].value),(0,e.tZ)("td",null,n[167].value),(0,e.tZ)("td",null)))),(0,e.tZ)("h3",{id:"uploadfile"},(0,e.tZ)(o.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#uploadfile",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"UploadFile"),(0,e.tZ)("p",null,n[168].value),(0,e.tZ)(i.Z,{className:"component-api-table"},(0,e.tZ)("thead",null,(0,e.tZ)("tr",null,(0,e.tZ)("th",null,n[169].value),(0,e.tZ)("th",null,n[170].value),(0,e.tZ)("th",null,n[171].value),(0,e.tZ)("th",null,n[172].value),(0,e.tZ)("th",null,n[173].value))),(0,e.tZ)("tbody",null,(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[174].value),(0,e.tZ)("td",null,n[175].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[176].value),n[177].value,(0,e.tZ)("code",null,n[178].value),n[179].value,(0,e.tZ)("code",null,n[180].value)),(0,e.tZ)("td",null,n[181].value),(0,e.tZ)("td",null,n[182].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[183].value),(0,e.tZ)("td",null,n[184].value),(0,e.tZ)("td",null,n[185].value),(0,e.tZ)("td",null,n[186].value),(0,e.tZ)("td",null,n[187].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[188].value),(0,e.tZ)("td",null,n[189].value),(0,e.tZ)("td",null,n[190].value),(0,e.tZ)("td",null,n[191].value),(0,e.tZ)("td",null,n[192].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[193].value),(0,e.tZ)("td",null,n[194].value),(0,e.tZ)("td",null,(0,e.tZ)("code",null,n[195].value),n[196].value,(0,e.tZ)("code",null,n[197].value),n[198].value,(0,e.tZ)("code",null,n[199].value),n[200].value,(0,e.tZ)("code",null,n[201].value),n[202].value,(0,e.tZ)("code",null,n[203].value)),(0,e.tZ)("td",null,n[204].value),(0,e.tZ)("td",null,n[205].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[206].value),(0,e.tZ)("td",null,n[207].value),(0,e.tZ)("td",null,n[208].value),(0,e.tZ)("td",null,n[209].value),(0,e.tZ)("td",null,n[210].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[211].value),(0,e.tZ)("td",null,n[212].value),(0,e.tZ)("td",null,n[213].value),(0,e.tZ)("td",null,n[214].value),(0,e.tZ)("td",null,n[215].value)),(0,e.tZ)("tr",null,(0,e.tZ)("td",null,n[216].value),(0,e.tZ)("td",null,n[217].value),(0,e.tZ)("td",null,n[218].value),(0,e.tZ)("td",null,n[219].value),(0,e.tZ)("td",null,n[220].value)))),(0,e.tZ)("h3",{id:"onchange"},(0,e.tZ)(o.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#onchange",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"onChange"),(0,e.tZ)("blockquote",null,(0,e.tZ)("p",null,n[221].value)),(0,e.tZ)("p",null,n[222].value),(0,e.tZ)(l.Z,{lang:"js"},n[223].value),(0,e.tZ)("ol",null,(0,e.tZ)("li",null,(0,e.tZ)("p",null,(0,e.tZ)("code",null,n[224].value),n[225].value),(0,e.tZ)(l.Z,{lang:"js"},n[226].value)),(0,e.tZ)("li",null,(0,e.tZ)("p",null,(0,e.tZ)("code",null,n[227].value),n[228].value)),(0,e.tZ)("li",null,(0,e.tZ)("p",null,(0,e.tZ)("code",null,n[229].value),n[230].value))),(0,e.tZ)("h2",{id:"design-token"},(0,e.tZ)(o.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#design-token",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"Design Token")),(0,e.tZ)(c.Z,{component:"Upload"}),(0,e.tZ)("div",{className:"markdown"},(0,e.tZ)("h2",{id:"faq"},(0,e.tZ)(o.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#faq",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"FAQ"),(0,e.tZ)("h3",{id:"\u670D\u52A1\u7AEF\u5982\u4F55\u5B9E\u73B0"},(0,e.tZ)(o.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u670D\u52A1\u7AEF\u5982\u4F55\u5B9E\u73B0",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u670D\u52A1\u7AEF\u5982\u4F55\u5B9E\u73B0\uFF1F"),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,n[231].value,(0,e.tZ)(o.Z,{href:"https://github.com/blueimp/jQuery-File-Upload/wiki#server-side",sourceType:"a"},n[232].value),n[233].value),(0,e.tZ)("li",null,n[234].value,(0,e.tZ)(o.Z,{href:"https://github.com/react-component/upload/blob/master/server.js",sourceType:"a"},n[235].value),n[236].value)),(0,e.tZ)("h3",{id:"\u5982\u4F55\u663E\u793A\u4E0B\u8F7D\u94FE\u63A5"},(0,e.tZ)(o.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u5982\u4F55\u663E\u793A\u4E0B\u8F7D\u94FE\u63A5",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u5982\u4F55\u663E\u793A\u4E0B\u8F7D\u94FE\u63A5\uFF1F"),(0,e.tZ)("p",null,n[237].value),(0,e.tZ)("h3",{id:"customrequest-\u600E\u4E48\u4F7F\u7528"},(0,e.tZ)(o.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#customrequest-\u600E\u4E48\u4F7F\u7528",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),(0,e.tZ)("code",null,n[238].value)," \u600E\u4E48\u4F7F\u7528\uFF1F"),(0,e.tZ)("p",null,n[239].value,(0,e.tZ)(o.Z,{href:"https://github.com/react-component/upload#customrequest",sourceType:"a"},n[240].value),n[241].value),(0,e.tZ)("h3",{id:"\u4E3A\u4F55-filelist-\u53D7\u63A7\u65F6\u4E0A\u4F20\u4E0D\u5728\u5217\u8868\u4E2D\u7684\u6587\u4EF6\u4E0D\u4F1A\u89E6\u53D1-onchange-\u540E\u7EED\u7684-status-\u66F4\u65B0\u4E8B\u4EF6"},(0,e.tZ)(o.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E3A\u4F55-filelist-\u53D7\u63A7\u65F6\u4E0A\u4F20\u4E0D\u5728\u5217\u8868\u4E2D\u7684\u6587\u4EF6\u4E0D\u4F1A\u89E6\u53D1-onchange-\u540E\u7EED\u7684-status-\u66F4\u65B0\u4E8B\u4EF6",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u4E3A\u4F55 ",(0,e.tZ)("code",null,n[242].value)," \u53D7\u63A7\u65F6\uFF0C\u4E0A\u4F20\u4E0D\u5728\u5217\u8868\u4E2D\u7684\u6587\u4EF6\u4E0D\u4F1A\u89E6\u53D1 ",(0,e.tZ)("code",null,n[243].value)," \u540E\u7EED\u7684 ",(0,e.tZ)("code",null,n[244].value)," \u66F4\u65B0\u4E8B\u4EF6\uFF1F"),(0,e.tZ)("p",null,(0,e.tZ)("code",null,n[245].value),n[246].value,(0,e.tZ)("code",null,n[247].value),n[248].value,(0,e.tZ)("code",null,n[249].value),n[250].value),(0,e.tZ)("h3",{id:"onchange-\u4E3A\u4EC0\u4E48\u6709\u65F6\u5019\u8FD4\u56DE-file-\u6709\u65F6\u5019\u8FD4\u56DE--originfileobj-file-"},(0,e.tZ)(o.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#onchange-\u4E3A\u4EC0\u4E48\u6709\u65F6\u5019\u8FD4\u56DE-file-\u6709\u65F6\u5019\u8FD4\u56DE--originfileobj-file-",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),(0,e.tZ)("code",null,n[251].value)," \u4E3A\u4EC0\u4E48\u6709\u65F6\u5019\u8FD4\u56DE File \u6709\u65F6\u5019\u8FD4\u56DE { originFileObj: File }\uFF1F"),(0,e.tZ)("p",null,n[252].value,(0,e.tZ)("code",null,n[253].value),n[254].value,(0,e.tZ)("code",null,n[255].value),n[256].value,(0,e.tZ)("code",null,n[257].value),n[258].value,(0,e.tZ)("code",null,n[259].value),n[260].value),(0,e.tZ)("h3",{id:"\u4E3A\u4F55\u6709\u65F6-chrome-\u70B9\u51FB-upload-\u65E0\u6CD5\u5F39\u51FA\u6587\u4EF6\u9009\u62E9\u6846"},(0,e.tZ)(o.Z,{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E3A\u4F55\u6709\u65F6-chrome-\u70B9\u51FB-upload-\u65E0\u6CD5\u5F39\u51FA\u6587\u4EF6\u9009\u62E9\u6846",sourceType:"a"},(0,e.tZ)("span",{className:"icon icon-link"})),"\u4E3A\u4F55\u6709\u65F6 Chrome \u70B9\u51FB Upload \u65E0\u6CD5\u5F39\u51FA\u6587\u4EF6\u9009\u62E9\u6846\uFF1F"),(0,e.tZ)("p",null,n[261].value),(0,e.tZ)("ul",null,(0,e.tZ)("li",null,(0,e.tZ)(o.Z,{href:"https://github.com/ant-design/ant-design/issues/32672",sourceType:"a"},n[262].value)),(0,e.tZ)("li",null,(0,e.tZ)(o.Z,{href:"https://github.com/ant-design/ant-design/issues/32913",sourceType:"a"},n[263].value)),(0,e.tZ)("li",null,(0,e.tZ)(o.Z,{href:"https://github.com/ant-design/ant-design/issues/33988",sourceType:"a"},n[264].value))))))}r.default=d}}]);
