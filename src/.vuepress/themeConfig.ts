import { defineThemeConfig } from "vuepress-theme-hope";
import * as navbar from "./navbar";
import * as sidebar from "./sidebar";


export default defineThemeConfig({
  hostname: "https://vuepress-theme-hope-v2-demo.mrhope.site",

  author: {
    name: "HongShu",
    url: "/",
  },

  iconPrefix: "iconfont icon-",

  logo: "/logo.svg",
  repo: "https://github.com/guomaimang/guomaimang.github.io",

  docsDir: "src",

  blog: {
    medias: {
      Email: "mailto:hanjiaming@zhongxueguan.cn",
      Bilibili: ["https://space.bilibili.com/183250622", "/Users/hanjiaming/project/OtherWork/previewpage/src/.vuepress/public/bilibili.svg"],
      GitHub: "https://github.com/guomaimang",
      Linkedin: "https://www.linkedin.com/in/hanjiaming/",
      QQ: "tencent://message/?uin=1374921316",
      Weibo: "https://weibo.com/3833646158/profile?topnav=1&wvr=6&is_all=1",
    },
    avatar: "/avatar.png",
  },


  locales: {
    "/en/": {
      // navbar
      navbar: navbar.en,

      footer: "Legends never die.",

      displayFooter: true,

      blog: {
        description: "Computer Science students of </br> Hong Kong Polytechnic University <br> Research in data science, </br> enterprise information management, </br> cloud computing architecture.",
        intro: "/myself.html",
      },

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },

    /**
     * Chinese locale config
     */
    "/": {
      // navbar
      navbar: navbar.zh,

      sidebar: sidebar.zh,

      footer: "Legends never die.",

      displayFooter: true,

      blog: {
        description: "香港理工大学计算机科学在读本科 </br> 研究数据科学,企业信息管理,云计算架构",
        intro: "/myself.html",
      },

      // page meta
      metaLocales: {
        editLink: "在 GitHub 上编辑此页",
      },
    },
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
      "/zh/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: false,
      avatar: "/avatar.png",
    },

    comment: {
      type: "giscus",
      repo: "guomaimang/guomaimang.github.io",
      repoId: "MDEwOlJlcG9zaXRvcnkzMjU5Njk1MzQ=",
      category: "Ideas",
      categoryId: "DIC_kwDOE23mfs4COFlp",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },

});
