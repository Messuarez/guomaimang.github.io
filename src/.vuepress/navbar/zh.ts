import { defineNavbarConfig } from "vuepress-theme-hope";

export const zh = defineNavbarConfig([
  "/",
  { text: "Research", icon: "creative", link: "https://hongshu.zxg.red" },
  { text: "关于我", icon: "profile", link: "/myself/" },
  {
    text: "学习笔记",
    prefix: "/note/",
    icon: "note",
    children:[
      {
        text: "Computer Science",
        prefix: "cs/",
        icon: "hot",
        children:[
          {
            text: "Programming",
            icon: "c",
            link: "coding/",
          },
          {
            text: "Computer Organization",
            icon: "workingDirectory",
            link: "co/",
          },
          {
            text: "Operating System",
            icon: "centos",
            link: "os/",
          },
        ],
      },

      {
        text: "Data Science",
        icon: "emmet",
        prefix: "ds/",
        children:[
          {
            text: "Data Analysis",
            icon: "rank",
            link: "da/",
          },
        ],
      },
      {
        text: "IT Management",
        icon: "emmet",
        prefix: "it/",
        children:[],
      },
      {
        text: "Mathematics",
        icon: "function",
        prefix: "math/",
        children:[],
      },
      {
        text: "Others",
        icon: "relation",
        prefix: "others/",
        children:[
          {
            text: "Computer Application",
            icon: "app",
            link: "app/"
          }
        ],
      },
  ]
  },
  {
    text: "传送门",
    prefix: "/",
    icon: "launch",
    children:[
      {
        text: "APPS",
        prefix: "/",
        icon: "software",
        children:[
          {
            text: "Unlock-Music",
            icon: "command",
            link: "https://app.hanjiaming.com.cn/unlock-music/",
          }
        ],
      },

      {
        text: "Recommand",
        icon: "edit",
        prefix: "/",
        children:[
          {
            text: "中国学馆联盟",
            link: "https://www.zhongxueguan.cn",
          }
        ],
      },
  ]
  },
  {
    text: "校园",
    prefix: "/",
    icon: "study",
    children:[
      {
        text: "河北衡水中学",
        link: "http://www.hbhszx.cn",
      },

      {
        text: "香港理工大学",
        link: "https://polyu.edu.hk",
      },
      {
        text: "复旦大学",
        link: "https://www.fudan.edu.cn",
      },
  ]
  },
  {
    text: "更多",
    prefix: "/",
    icon: "categoryselected",
    children:[
      {
        text: "Friend links",
        link: "#",
      },

      {
        text: "Support",
        link: "#",
      },
  ]
  },

]);
