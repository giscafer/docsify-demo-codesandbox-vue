<template>
  <div id="app">
    <img src="./assets/logo.png" width="160px" />
    <h1 style="display:inline-block; font-size: 60px;">+</h1>
    <img src="./assets/box.png" width="160px" />
    <div style="width:1200px; margin:0 auto;text-align:left;font-size:14px">
      <demo-block-wrapper />
    </div>
  </div>
</template>

<script>
import { generateComponent } from './components'

// inject main.js code
let boxBootCode = `
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI, { size: 'small' })
`

// custom dependencies
let boxDependencies = {
  'element-ui': '^2.13.2',
}

let code = `<desc>
  el-button 基础的按钮用法
</desc>
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
`

let DemoBlockWrapper = generateComponent(
  code,
  'html',
  boxBootCode,
  boxDependencies
)

export default {
  name: 'app',
  components: {
    DemoBlockWrapper,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: center;
  margin-top: 60px;
}
</style>
