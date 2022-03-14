const e={key:"v-bf5ce368",path:"/note/cs/coding/js/node-js/program.html",title:"\u7B2C\u4E00\u4E2A Node \u7A0B\u5E8F",lang:"zh-CN",frontmatter:{title:"\u7B2C\u4E00\u4E2A Node \u7A0B\u5E8F",icon:"shell",category:["Node.js"],tag:["Node.js","\u8F6F\u4EF6"],summary:`\u5728\u524D\u9762\u7684\u6240\u6709\u7AE0\u8282\u4E2D\uFF0C\u6211\u4EEC\u7F16\u5199\u7684 JavaScript \u4EE3\u7801\u90FD\u662F\u5728\u6D4F\u89C8\u5668\u4E2D\u8FD0\u884C\u7684\uFF0C\u56E0\u6B64\uFF0C\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u5728\u6D4F\u89C8\u5668\u4E2D\u6572\u4EE3\u7801\uFF0C\u7136\u540E\u76F4\u63A5\u8FD0\u884C\u3002
\u4ECE\u672C\u7AE0\u5F00\u59CB\uFF0C\u6211\u4EEC\u7F16\u5199\u7684 JavaScript \u4EE3\u7801\u5C06\u4E0D\u80FD\u5728\u6D4F\u89C8\u5668\u73AF\u5883\u4E2D\u6267\u884C\u4E86\uFF0C\u800C\u662F\u5728 Node.js \u73AF\u5883\u4E2D\u6267\u884C\uFF0C\u56E0\u6B64\uFF0CJavaScript \u4EE3\u7801\u5C06\u76F4\u63A5\u5728\u60A8\u7684\u8BA1\u7B97\u673A\u4E0A\u4EE5\u547D\u4EE4\u884C\u7684\u65B9\u5F0F\u8FD0\u884C\uFF0C\u6240\u4EE5\uFF0C\u6211\u4EEC\u8981\u5148\u9009\u62E9\u4E00\u4E2A\u6587\u672C\u7F16\u8F91\u5668\u6765\u7F16\u5199 JavaScript \u4EE3\u7801\uFF0C\u5E76\u4E14\u628A\u5B83\u4FDD\u5B58\u5230\u672C\u5730\u786C\u76D8\u7684\u67D0\u4E2A\u76EE\u5F55\uFF0C\u624D\u80FD\u591F\u6267\u884C\u3002
`,head:[["meta",{property:"og:url",content:"https://vuepress-theme-hope-v2-demo.mrhope.site/note/cs/coding/js/node-js/program.html"}],["meta",{property:"og:site_name",content:"\u5F18\u6811"}],["meta",{property:"og:title",content:"\u7B2C\u4E00\u4E2A Node \u7A0B\u5E8F"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"og:locale:alternate",content:"en-US"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{name:"twitter:image:alt",content:"\u5F18\u6811"}],["meta",{property:"article:author",content:"HongShu"}],["meta",{property:"article:tag",content:"Node.js"}],["meta",{property:"article:tag",content:"\u8F6F\u4EF6"}]]},excerpt:`<p>\u5728\u524D\u9762\u7684\u6240\u6709\u7AE0\u8282\u4E2D\uFF0C\u6211\u4EEC\u7F16\u5199\u7684 JavaScript \u4EE3\u7801\u90FD\u662F\u5728\u6D4F\u89C8\u5668\u4E2D\u8FD0\u884C\u7684\uFF0C\u56E0\u6B64\uFF0C\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u5728\u6D4F\u89C8\u5668\u4E2D\u6572\u4EE3\u7801\uFF0C\u7136\u540E\u76F4\u63A5\u8FD0\u884C\u3002</p>
<p>\u4ECE\u672C\u7AE0\u5F00\u59CB\uFF0C\u6211\u4EEC\u7F16\u5199\u7684 JavaScript \u4EE3\u7801\u5C06\u4E0D\u80FD\u5728\u6D4F\u89C8\u5668\u73AF\u5883\u4E2D\u6267\u884C\u4E86\uFF0C\u800C\u662F\u5728 Node.js \u73AF\u5883\u4E2D\u6267\u884C\uFF0C\u56E0\u6B64\uFF0CJavaScript \u4EE3\u7801\u5C06\u76F4\u63A5\u5728\u60A8\u7684\u8BA1\u7B97\u673A\u4E0A\u4EE5\u547D\u4EE4\u884C\u7684\u65B9\u5F0F\u8FD0\u884C\uFF0C\u6240\u4EE5\uFF0C\u6211\u4EEC\u8981\u5148\u9009\u62E9\u4E00\u4E2A\u6587\u672C\u7F16\u8F91\u5668\u6765\u7F16\u5199 JavaScript \u4EE3\u7801\uFF0C\u5E76\u4E14\u628A\u5B83\u4FDD\u5B58\u5230\u672C\u5730\u786C\u76D8\u7684\u67D0\u4E2A\u76EE\u5F55\uFF0C\u624D\u80FD\u591F\u6267\u884C\u3002</p>
`,headers:[{level:2,title:"\u547D\u4EE4\u884C\u6A21\u5F0F\u548C Node.js \u4EA4\u4E92\u6A21\u5F0F",slug:"\u547D\u4EE4\u884C\u6A21\u5F0F\u548C-node-js-\u4EA4\u4E92\u6A21\u5F0F",children:[]},{level:2,title:"\u4F7F\u7528\u4E25\u683C\u6A21\u5F0F",slug:"\u4F7F\u7528\u4E25\u683C\u6A21\u5F0F",children:[]},{level:2,title:"\u5C0F\u7ED3",slug:"\u5C0F\u7ED3",children:[]}],git:{createdTime:1647280116e3,updatedTime:1647280116e3,contributors:[{name:"hanjiaming",email:"47519540+guomaimang@users.noreply.github.com",commits:1}]},readingTime:{minutes:3.91,words:1173},filePathRelative:"note/cs/coding/js/node-js/program.md"};export{e as data};
