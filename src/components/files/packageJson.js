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
  },
  devDependencies: {
    "@vue/cli-plugin-babel": "4.1.1",
    "@vue/cli-plugin-eslint": "4.1.1",
    "@vue/cli-service": "4.1.1",
    "babel-eslint": "^10.0.3",
    eslint: "^6.7.2",
    "eslint-plugin-vue": "^6.0.1",
    "vue-template-compiler": "^2.6.11",
  },
  eslintConfig: {
    root: true,
    env: {
      node: true,
    },
    extends: ["plugin:vue/essential", "eslint:recommended"],
    rules: {},
    parserOptions: {
      parser: "babel-eslint",
    },
  },
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  browserslist: ["> 1%", "last 2 versions", "not ie <= 8"],
  keywords: ["vue", "vuejs", "starter"],
  description: "Vue.js example starter project",
};

export default function genJson(dependencies = {}) {
  packageJson.dependencies = Object.assign(
    packageJson.dependencies,
    dependencies
  );
  return JSON.stringify(packageJson, null, 2);
}