const e={key:"v-26b450e4",path:"/note/cs/coding/python/function/argument.html",title:"\u51FD\u6570\u7684\u53C2\u6570",lang:"zh-CN",frontmatter:{title:"\u51FD\u6570\u7684\u53C2\u6570",icon:"variable",author:"\u5ED6\u96EA\u5CF0",date:"2020-05-27T00:00:00.000Z",category:["Python"],summary:`\u5B9A\u4E49\u51FD\u6570\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u628A\u53C2\u6570\u7684\u540D\u5B57\u548C\u4F4D\u7F6E\u786E\u5B9A\u4E0B\u6765\uFF0C\u51FD\u6570\u7684\u63A5\u53E3\u5B9A\u4E49\u5C31\u5B8C\u6210\u4E86\u3002\u5BF9\u4E8E\u51FD\u6570\u7684\u8C03\u7528\u8005\u6765\u8BF4\uFF0C\u53EA\u9700\u8981\u77E5\u9053\u5982\u4F55\u4F20\u9012\u6B63\u786E\u7684\u53C2\u6570\uFF0C\u4EE5\u53CA\u51FD\u6570\u5C06\u8FD4\u56DE\u4EC0\u4E48\u6837\u7684\u503C\u5C31\u591F\u4E86\uFF0C\u51FD\u6570\u5185\u90E8\u7684\u590D\u6742\u903B\u8F91\u88AB\u5C01\u88C5\u8D77\u6765\uFF0C\u8C03\u7528\u8005\u65E0\u9700\u4E86\u89E3\u3002
Python \u7684\u51FD\u6570\u5B9A\u4E49\u975E\u5E38\u7B80\u5355\uFF0C\u4F46\u7075\u6D3B\u5EA6\u5374\u975E\u5E38\u5927\u3002\u9664\u4E86\u6B63\u5E38\u5B9A\u4E49\u7684\u5FC5\u9009\u53C2\u6570\u5916\uFF0C\u8FD8\u53EF\u4EE5\u4F7F\u7528\u9ED8\u8BA4\u53C2\u6570\u3001\u53EF\u53D8\u53C2\u6570\u548C\u5173\u952E\u5B57\u53C2\u6570\uFF0C\u4F7F\u5F97\u51FD\u6570\u5B9A\u4E49\u51FA\u6765\u7684\u63A5\u53E3\uFF0C\u4E0D\u4F46\u80FD\u5904\u7406\u590D\u6742\u7684\u53C2\u6570\uFF0C\u8FD8\u53EF\u4EE5\u7B80\u5316\u8C03\u7528\u8005\u7684\u4EE3\u7801\u3002
`,head:[["meta",{property:"og:url",content:"https://vuepress-theme-hope-v2-demo.mrhope.site/note/cs/coding/python/function/argument.html"}],["meta",{property:"og:site_name",content:"\u5F18\u6811"}],["meta",{property:"og:title",content:"\u51FD\u6570\u7684\u53C2\u6570"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"og:locale:alternate",content:"en-US"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{name:"twitter:image:alt",content:"\u5F18\u6811"}],["meta",{property:"article:author",content:"\u5ED6\u96EA\u5CF0"}],["meta",{property:"article:published_time",content:"2020-05-27T00:00:00.000Z"}]]},excerpt:`<p>\u5B9A\u4E49\u51FD\u6570\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u628A\u53C2\u6570\u7684\u540D\u5B57\u548C\u4F4D\u7F6E\u786E\u5B9A\u4E0B\u6765\uFF0C\u51FD\u6570\u7684\u63A5\u53E3\u5B9A\u4E49\u5C31\u5B8C\u6210\u4E86\u3002\u5BF9\u4E8E\u51FD\u6570\u7684\u8C03\u7528\u8005\u6765\u8BF4\uFF0C\u53EA\u9700\u8981\u77E5\u9053\u5982\u4F55\u4F20\u9012\u6B63\u786E\u7684\u53C2\u6570\uFF0C\u4EE5\u53CA\u51FD\u6570\u5C06\u8FD4\u56DE\u4EC0\u4E48\u6837\u7684\u503C\u5C31\u591F\u4E86\uFF0C\u51FD\u6570\u5185\u90E8\u7684\u590D\u6742\u903B\u8F91\u88AB\u5C01\u88C5\u8D77\u6765\uFF0C\u8C03\u7528\u8005\u65E0\u9700\u4E86\u89E3\u3002</p>
<p>Python \u7684\u51FD\u6570\u5B9A\u4E49\u975E\u5E38\u7B80\u5355\uFF0C\u4F46\u7075\u6D3B\u5EA6\u5374\u975E\u5E38\u5927\u3002\u9664\u4E86\u6B63\u5E38\u5B9A\u4E49\u7684\u5FC5\u9009\u53C2\u6570\u5916\uFF0C\u8FD8\u53EF\u4EE5\u4F7F\u7528\u9ED8\u8BA4\u53C2\u6570\u3001\u53EF\u53D8\u53C2\u6570\u548C\u5173\u952E\u5B57\u53C2\u6570\uFF0C\u4F7F\u5F97\u51FD\u6570\u5B9A\u4E49\u51FA\u6765\u7684\u63A5\u53E3\uFF0C\u4E0D\u4F46\u80FD\u5904\u7406\u590D\u6742\u7684\u53C2\u6570\uFF0C\u8FD8\u53EF\u4EE5\u7B80\u5316\u8C03\u7528\u8005\u7684\u4EE3\u7801\u3002</p>
`,headers:[{level:2,title:"\u4F4D\u7F6E\u53C2\u6570",slug:"\u4F4D\u7F6E\u53C2\u6570",children:[]},{level:2,title:"\u9ED8\u8BA4\u53C2\u6570",slug:"\u9ED8\u8BA4\u53C2\u6570",children:[{level:3,title:"\u4F18\u70B9",slug:"\u4F18\u70B9",children:[]},{level:3,title:"\u7F3A\u70B9",slug:"\u7F3A\u70B9",children:[]}]},{level:2,title:"\u53EF\u53D8\u53C2\u6570",slug:"\u53EF\u53D8\u53C2\u6570",children:[]},{level:2,title:"\u5173\u952E\u5B57\u53C2\u6570",slug:"\u5173\u952E\u5B57\u53C2\u6570",children:[]},{level:2,title:"\u547D\u540D\u5173\u952E\u5B57\u53C2\u6570",slug:"\u547D\u540D\u5173\u952E\u5B57\u53C2\u6570",children:[]},{level:2,title:"\u53C2\u6570\u7EC4\u5408",slug:"\u53C2\u6570\u7EC4\u5408",children:[]},{level:2,title:"\u5C0F\u7ED3",slug:"\u5C0F\u7ED3",children:[]}],git:{createdTime:1647280116e3,updatedTime:1647280116e3,contributors:[{name:"hanjiaming",email:"47519540+guomaimang@users.noreply.github.com",commits:1}]},readingTime:{minutes:13.31,words:3993},filePathRelative:"note/cs/coding/python/function/argument.md"};export{e as data};
