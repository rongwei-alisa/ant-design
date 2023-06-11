---
category: Components
title: Button
subtitle: 按钮
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*BrFMQ5s7AAQAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*Lp1kTYmSsgoAAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
group:
  title: 通用
  order: 1
---

按钮用于开始一个即时操作。

## 何时使用

在每刻设计系统中共存在 5 种按钮类型。

- 主按钮：用于主动作点，一个操作区域只能有一个主按钮。
- 常规按钮：用于没有主次之分的一组动作点。
- 虚线按钮：常用于表单内部添加操作。
- 文本按钮：用于最高级的动作点。
- 危险按钮：排除/移动/修改权限等危险操作，一般需要二次确认。

每种按钮具有五种状态属性。

- Normal（默认态）：该状态就是按钮正常显示在页面的状态。
- Hover（悬浮态）：当鼠标指针停留在按钮上时，按钮展示出的反馈。
- Pressed（点击态）：当鼠标在指针按压按钮时，按钮的效果反馈。
- Disabled（禁用态）：当页面按钮不可用时，可能是信息未填写完成，可能是操作未达到某种条件要求，按钮会展示不可用状态。对干禁用按钮，可以让鼠标浮上去后展示解禁提示，这样会对用户更友好。

## 尺寸说明

其中主按钮和默认按钮有三种尺寸。

- Large（大）：大按钮通常用在首页；组件高度为 40，字体大小为 16，字体左右安全距离为 16
- Middle（中）：中按钮为系统最常见的操作按钮；组件高度为 32，字体大小为 14，字体左右安全距离为 12
- Small（小）：小按钮通常用在表单内部；组件高度为 24，字体大小为 12，字体左右安全距离为 8

## 交互说明

所有按钮距离页面左或右的边距都为 24，按钮之间的距离都为 8

Middle 常用于表单外部，如 table 页面的操作、弹窗底部操作、表单底部操作等。按钮组一定有一个主按钮，其他均为常规按钮，常规按钮分为一级（蓝色）和二级（灰色）。一般情况下我们会选用常规二级，只有常规按钮和主按钮并无明显主次关系时，常规按钮才会用一级。

Small 常用在表单内部的添加或相关业务处理操作。

<code src="./demo/middle.tsx">Middle 按钮用法</code>

## 代码演示

<!-- prettier-ignore -->
<code src="./demo/basic.tsx">按钮类型</code>
<code src="./demo/size.tsx">按钮尺寸</code>
<code src="./demo/icon.tsx">图标按钮</code>
<code src="./demo/disabled.tsx">禁用用状态</code>

## API

通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：`type` -> `shape` -> `size` -> `loading` -> `disabled`。

按钮的属性说明如下：

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| block | 将按钮宽度调整为其父宽度的选项 | boolean | false |  |
| classNames | 语义化结构 class | Record<SemanticDOM, string> | - | 5.4.0 |
| danger | 设置危险按钮 | boolean | false |  |
| disabled | 设置按钮失效状态 | boolean | false |  |
| ghost | 幽灵属性，使按钮背景透明 | boolean | false |  |
| href | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | string | - |  |
| htmlType | 设置 `button` 原生的 `type` 值，可选值请参考 [HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | string | `button` |  |
| icon | 设置按钮的图标组件 | ReactNode | - |  |
| loading | 设置按钮载入状态 | boolean \| { delay: number } | false |  |
| shape | 设置按钮形状 | `default` \| `circle` \| `round` | `default` |  |
| size | 设置按钮大小 | `large` \| `middle` \| `small` | `middle` |  |
| styles | 语义化结构 style | Record<SemanticDOM, CSSProperties> | - | 5.4.0 |
| target | 相当于 a 链接的 target 属性，href 存在时生效 | string | - |  |
| type | 设置按钮类型 | `primary` \| `ghost` \| `dashed` \| `link` \| `text` \| `default` | `default` |  |
| onClick | 点击按钮时的回调 | (event: MouseEvent) => void | - |  |

支持原生 button 的其他所有属性。

### `styles` 和 `classNames` 属性

| 名称 | 说明         | 版本  |
| ---- | ------------ | ----- |
| icon | 设置图标元素 | 5.5.0 |

## Design Token

<ComponentTokenTable component="Button"></ComponentTokenTable>

## FAQ

### 如何移除两个汉字之间的空格？

根据 Ant Design 设计规范要求，我们会在按钮内(文本按钮和链接按钮除外)只有两个汉字时自动添加空格，如果你不需要这个特性，可以设置 [ConfigProvider](/components/config-provider-cn#api) 的 `autoInsertSpaceInButton` 为 `false`。

<img src="https://gw.alipayobjects.com/zos/antfincdn/MY%26THAPZrW/38f06cb9-293a-4b42-b183-9f443e79ffea.png" style="box-shadow: none; margin: 0; width: 100px" alt="移除两个汉字之间的空格"  />

<style>
.site-button-ghost-wrapper {
  padding: 16px;
  background: rgb(190, 200, 200);
}
</style>

## 设计指引

- [我的按钮究竟该放哪儿！？| Ant Design 4.0 系列分享](https://zhuanlan.zhihu.com/p/109644406)
