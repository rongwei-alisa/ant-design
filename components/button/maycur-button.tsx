// import React from 'react';
// import { ConfigProvider, theme } from 'antd';
// import Button from './button';

// function getTokens(props, token = {}) {
//     const newToken = {};
//     if (!props.size) {
//         newToken.paddingContentHorizontal = token.paddingSM;
//     } else if (props.size === 'small') {
//         newToken.fontSize = token.fontSizeSM;
//     }

//     if (props.type === 'dashed') {
//         newToken.colorText = token.colorPrimary;
//     }

//     return newToken;
// }

// function MaycurButton (props)  {
//     const { token } = theme?.useToken() || {};
//     const {
//         children,
//         size,
//         type,
//     } = props;
//     console.log({props})

//     const overwriteToken = getTokens({ size, type }, token);

//     return (
//         <ConfigProvider
//             theme={{
//                 token: {
//                     borderRadius: 2,
//                     ...overwriteToken,
//                 },
//             }}
//         >
//             <Button
//                 {...props}
//             >
//                 {children}
//             </Button>
//         </ConfigProvider>
//     );
// }

// export default MaycurButton;
