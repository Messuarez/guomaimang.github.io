const e={key:"v-05926af6",path:"/note/cs/coding/js/js-essence/browser/dom.html",title:"\u64CD\u4F5C DOM",lang:"zh-CN",frontmatter:{title:"\u64CD\u4F5C DOM",icon:"tree",date:"2019-10-16T00:00:00.000Z",category:["JavaScript"],summary:`\u7531\u4E8E HTML \u6587\u6863\u88AB\u6D4F\u89C8\u5668\u89E3\u6790\u540E\u5C31\u662F\u4E00\u68F5 DOM \u6811\uFF0C\u8981\u6539\u53D8 HTML \u7684\u7ED3\u6784\uFF0C\u5C31\u9700\u8981\u901A\u8FC7 JavaScript \u6765\u64CD\u4F5C DOM\u3002
\u59CB\u7EC8\u8BB0\u4F4F DOM \u662F\u4E00\u4E2A\u6811\u5F62\u7ED3\u6784\u3002\u64CD\u4F5C\u4E00\u4E2A DOM \u8282\u70B9\u5B9E\u9645\u4E0A\u5C31\u662F\u8FD9\u4E48\u51E0\u4E2A\u64CD\u4F5C:


\u66F4\u65B0: \u66F4\u65B0\u8BE5 DOM \u8282\u70B9\u7684\u5185\u5BB9\uFF0C\u76F8\u5F53\u4E8E\u66F4\u65B0\u4E86\u8BE5 DOM \u8282\u70B9\u8868\u793A\u7684 HTML \u7684\u5185\u5BB9\uFF1B


\u904D\u5386: \u904D\u5386\u8BE5 DOM \u8282\u70B9\u4E0B\u7684\u5B50\u8282\u70B9\uFF0C\u4EE5\u4FBF\u8FDB\u884C\u8FDB\u4E00\u6B65\u64CD\u4F5C\uFF1B


\u6DFB\u52A0: \u5728\u8BE5 DOM \u8282\u70B9\u4E0B\u65B0\u589E\u4E00\u4E2A\u5B50\u8282\u70B9\uFF0C\u76F8\u5F53\u4E8E\u52A8\u6001\u589E\u52A0\u4E86\u4E00\u4E2A HTML \u8282\u70B9\uFF1B


\u5220\u9664: \u5C06\u8BE5\u8282\u70B9\u4ECE HTML \u4E2D\u5220\u9664\uFF0C\u76F8\u5F53\u4E8E\u5220\u6389\u4E86\u8BE5 DOM \u8282\u70B9\u7684\u5185\u5BB9\u4EE5\u53CA\u5B83\u5305\u542B\u7684\u6240\u6709\u5B50\u8282\u70B9\u3002


`,head:[["meta",{property:"og:url",content:"https://vuepress-theme-hope-v2-demo.mrhope.site/note/cs/coding/js/js-essence/browser/dom.html"}],["meta",{property:"og:site_name",content:"\u5F18\u6811"}],["meta",{property:"og:title",content:"\u64CD\u4F5C DOM"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"og:locale:alternate",content:"en-US"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{name:"twitter:image:alt",content:"\u5F18\u6811"}],["meta",{property:"article:author",content:"HongShu"}],["meta",{property:"article:published_time",content:"2019-10-16T00:00:00.000Z"}]]},excerpt:`<p>\u7531\u4E8E HTML \u6587\u6863\u88AB\u6D4F\u89C8\u5668\u89E3\u6790\u540E\u5C31\u662F\u4E00\u68F5 DOM \u6811\uFF0C\u8981\u6539\u53D8 HTML \u7684\u7ED3\u6784\uFF0C\u5C31\u9700\u8981\u901A\u8FC7 JavaScript \u6765\u64CD\u4F5C DOM\u3002</p>
<p>\u59CB\u7EC8\u8BB0\u4F4F DOM \u662F\u4E00\u4E2A\u6811\u5F62\u7ED3\u6784\u3002\u64CD\u4F5C\u4E00\u4E2A DOM \u8282\u70B9\u5B9E\u9645\u4E0A\u5C31\u662F\u8FD9\u4E48\u51E0\u4E2A\u64CD\u4F5C:</p>
<ul>
<li>
<p>\u66F4\u65B0: \u66F4\u65B0\u8BE5 DOM \u8282\u70B9\u7684\u5185\u5BB9\uFF0C\u76F8\u5F53\u4E8E\u66F4\u65B0\u4E86\u8BE5 DOM \u8282\u70B9\u8868\u793A\u7684 HTML \u7684\u5185\u5BB9\uFF1B</p>
</li>
<li>
<p>\u904D\u5386: \u904D\u5386\u8BE5 DOM \u8282\u70B9\u4E0B\u7684\u5B50\u8282\u70B9\uFF0C\u4EE5\u4FBF\u8FDB\u884C\u8FDB\u4E00\u6B65\u64CD\u4F5C\uFF1B</p>
</li>
<li>
<p>\u6DFB\u52A0: \u5728\u8BE5 DOM \u8282\u70B9\u4E0B\u65B0\u589E\u4E00\u4E2A\u5B50\u8282\u70B9\uFF0C\u76F8\u5F53\u4E8E\u52A8\u6001\u589E\u52A0\u4E86\u4E00\u4E2A HTML \u8282\u70B9\uFF1B</p>
</li>
<li>
<p>\u5220\u9664: \u5C06\u8BE5\u8282\u70B9\u4ECE HTML \u4E2D\u5220\u9664\uFF0C\u76F8\u5F53\u4E8E\u5220\u6389\u4E86\u8BE5 DOM \u8282\u70B9\u7684\u5185\u5BB9\u4EE5\u53CA\u5B83\u5305\u542B\u7684\u6240\u6709\u5B50\u8282\u70B9\u3002</p>
</li>
</ul>
`,headers:[{level:2,title:"\u66F4\u65B0 DOM",slug:"\u66F4\u65B0-dom",children:[]},{level:2,title:"\u63D2\u5165 DOM",slug:"\u63D2\u5165-dom",children:[{level:3,title:"insertBefore",slug:"insertbefore",children:[]}]},{level:2,title:"\u5220\u9664 DOM",slug:"\u5220\u9664-dom",children:[]}],git:{createdTime:1647280116e3,updatedTime:1647280116e3,contributors:[{name:"hanjiaming",email:"47519540+guomaimang@users.noreply.github.com",commits:1}]},readingTime:{minutes:6.76,words:2028},filePathRelative:"note/cs/coding/js/js-essence/browser/dom.md"};export{e as data};
