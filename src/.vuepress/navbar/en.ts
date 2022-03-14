import { defineNavbarConfig } from "vuepress-theme-hope";

export const en = defineNavbarConfig([
  { text: "Blog", icon: "home", link: "/" },
  { text: "Research", icon: "creative", link: "https://guomaimang.github.io/research" },
  { text: "About me", icon: "profile", link: "/myself/" },
  {
    text: "Study Note",
    prefix: "/note/",
    icon: "note",
    children:[
      {
        text: "Computer Science",
        prefix: "cs/",
        icon: "hot",
        children:[
          {
            text: "C++ Programming",
            icon: "c",
            link: "cpp/",
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
        children:[],
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
    text: "Campus",
    prefix: "/",
    icon: "study",
    children:[
      {
        text: "Hebei Hengshui High School",
        link: "http://www.hbhszx.cn",
      },
      {
        text: "Hong Kong Polytechnic University",
        link: "https://polyu.edu.hk",
      },
      {
        text: "Fudan University",
        link: "https://www.fudan.edu.cn",
      },
  ]
  },
  {
    text: "Rockets",
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
            text: "Chinese Academy Alliance",
            link: "https://www.zhongxueguan.cn",
          }
        ],
      },
  ]
  },
  {
    text: "More",
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
