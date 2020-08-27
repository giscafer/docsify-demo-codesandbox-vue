# docsify-demo-codesandbox-vue

> A plugin for [docsify](https://docsify.js.org/#/) to write Vue jsx demo with instant preview and codesandbox integration

## Usage

1. import vue and this plugin to docsify `index.html`

```
<script src="//unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/docsify-demo-codesandbox-vue@{version}/dist/docsify-demo-codesandbox-vue.min.js"></script>
```

2. Use this plugin as docsify plugin

```js
// inject main.js code
let boxBootCode = `
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI, { size: 'small' })
`;

// custom dependencies
let boxDependencies = {
  "element-ui": "^2.13.2",
};

window.$docsify = {
  name: "docsify-demo-codesandbox-vue",
  repo: "https://github.com/giscafer/docsify-demo-codesandbox-vue",
  plugins: [DemoBoxVue.create(boxBootCode, boxDependencies)],
};
```

parameter of `create`:

- boxDependencies: javascript library will be added in `dependencies` package.json filed
- boxBootCode: javascript code you want to add before sample code in `main.js` javascript filed, which is usually used to boot your library.

## sample

This doc is a sample, check the source [md](https://giscafer.github.io/docsify-demo-codesandbox-vue/)

write the following code with tag `/*vue*/`:

```html
<desc> el-button 基础的按钮用法 </desc>

<template>
  <el-row>
    <el-button>默认按钮</el-button>
    <el-button type="primary" @click="handleClick">主要按钮</el-button>
    <el-button type="success" @click="handleClick">成功按钮</el-button>
    <el-button type="info" @click="handleClick">信息按钮</el-button>
    <el-button type="warning" @click="handleClick">警告按钮</el-button>
    <el-button type="danger" @click="handleClick">危险按钮</el-button>
  </el-row>
</template>

<script>
  export default {
    data() {
      return {};
    },
    methods: {
      handleClick() {
        alert("点击了按钮");
      },
    },
  };
</script>
```

it will render as:

```html
/*vue*/
<desc> el-button 基础的按钮用法 </desc>

<template>
  <el-row>
    <el-button>默认按钮</el-button>
    <el-button type="primary" @click="handleClick">主要按钮</el-button>
    <el-button type="success" @click="handleClick">成功按钮</el-button>
    <el-button type="info" @click="handleClick">信息按钮</el-button>
    <el-button type="warning" @click="handleClick">警告按钮</el-button>
    <el-button type="danger" @click="handleClick">危险按钮</el-button>
  </el-row>
</template>

<script>
  export default {
    data() {
      return {};
    },
    methods: {
      handleClick() {
        alert("You click the button");
      },
    },
  };
</script>
```

The sample code is rendered on the page instantly, so the people who read your document can see the preview immediately.
If he/she expands the demo box, the source code and description are shown there.
Click the button `Try in CodeSandbox`, `codesandbox.io` will be open with the code of this sample.

> `desc` tag can be used to add description for the sample. `Markdown` syntax is supported

## Who use?

- [sinokit](https://github.com/giscafer/sinokit) Vue.js 2.x Component library
