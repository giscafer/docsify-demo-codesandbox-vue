const packageJson = {
  name: "sinokit-components-demo",
  scripts: {
    serve: "vue-cli-service serve",
    build: "vue-cli-service build",
    lint: "vue-cli-service lint",
  },
  dependencies: {
    "core-js": "^3.6.5",
    vue: "^2.6.11",
    "@sinokit/utils": "*",
    "@sinokit/components": "*",
    "element-ui": "^2.13.2",
  },
  devDependencies: {
    "@vue/cli-plugin-babel": "~4.5.0",
    "@vue/cli-plugin-eslint": "~4.5.0",
    "@vue/cli-service": "~4.5.0",
    "babel-eslint": "^10.1.0",
    eslint: "^6.7.2",
    "eslint-plugin-vue": "^6.2.2",
    "vue-template-compiler": "^2.6.11",
  },
};

export default packageJson;
