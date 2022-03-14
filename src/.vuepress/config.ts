import { defineHopeConfig } from "vuepress-theme-hope";
import themeConfig from "./themeConfig";


export default defineHopeConfig({
  base: "/",

  dest: "./dist",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
  ],

  locales: {
    "/": {
      lang: "zh-CN",
      title: "弘树",
      description: "果麦芒 韩佳明 博客",
    },
    "/en/": {
      lang: "en-US",
      title: "HongShu",
      description: "Guomaimang HanJiaming Hirsun Blog",
    },
  },

  themeConfig,
});
