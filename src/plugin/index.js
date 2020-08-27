import Vue from "vue";
import { generateComponent } from "../components/";

let createCodeFn = function (oCodeFn) {
  let id = 0;

  return function (code, lang) {
    if (/^\s*\/\*\s*vue\s*\*\//.test(code)) {
      id++;
      var DemoBlockWrapper = generateComponent(
        code,
        lang,
        boxBootCode,
        boxDependencies
      );
      Vue.component("DemoBox" + id, DemoBlockWrapper);
      return "<" + "demo-box-" + id + "></demo-box-" + id + ">";
    } else {
      if (oCodeFn) {
        return oCodeFn.apply(this, arguments);
      } else {
        lang = lang || "";
        var hl = Prism.highlight(
          code,
          Prism.languages[lang] || Prism.languages.markup
        );
        return (
          '<pre v-pre data-lang="' +
          lang +
          '"><code class="lang-' +
          lang +
          '">' +
          hl +
          "</code></pre>"
        );
      }
    }
  };
};

export let create = function (boxBootCode, boxDependencies) {
  return function (hook, vm) {
    window.$docsify.markdown = window.$docsify.markdown || {};
    window.$docsify.markdown.renderer = window.$docsify.markdown.renderer || {};

    window.$docsify.markdown.renderer.code = createCodeFn(
      window.$docsify.markdown.renderer.code
    );
  };
};
