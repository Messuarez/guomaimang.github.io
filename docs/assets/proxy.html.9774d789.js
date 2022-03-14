const e={key:"v-4b8a46b9",path:"/note/cs/coding/js/js-essence/es6/proxy.html",title:"Proxy",lang:"zh-CN",frontmatter:{title:"Proxy",icon:"proxy",author:"\u962E\u4E00\u5CF0",date:"2019-10-23T00:00:00.000Z",category:["JavaScript"],copyright:'\u6B64\u90E8\u5206\u535A\u5BA2\u91C7\u7528 <a href="http://creativecommons.org/licenses/by-nc/4.0/" rel="noopener noreferrer" target="_blank">\u201C\u4FDD\u6301\u7F72\u540D\u2014\u975E\u5546\u7528\u201D\u521B\u610F\u5171\u4EAB4.0\u8BB8\u53EF\u8BC1</a>',summary:`Proxy \u7528\u4E8E\u4FEE\u6539\u67D0\u4E9B\u64CD\u4F5C\u7684\u9ED8\u8BA4\u884C\u4E3A\uFF0C\u7B49\u540C\u4E8E\u5728\u8BED\u8A00\u5C42\u9762\u505A\u51FA\u4FEE\u6539\uFF0C\u6240\u4EE5\u5C5E\u4E8E\u4E00\u79CD\u201C\u5143\u7F16\u7A0B\u201D(meta programming)\uFF0C\u5373\u5BF9\u7F16\u7A0B\u8BED\u8A00\u8FDB\u884C\u7F16\u7A0B\u3002
Proxy \u53EF\u4EE5\u7406\u89E3\u6210\uFF0C\u5728\u76EE\u6807\u5BF9\u8C61\u4E4B\u524D\u67B6\u8BBE\u4E00\u5C42\u201C\u62E6\u622A\u201D\uFF0C\u5916\u754C\u5BF9\u8BE5\u5BF9\u8C61\u7684\u8BBF\u95EE\uFF0C\u90FD\u5FC5\u987B\u5148\u901A\u8FC7\u8FD9\u5C42\u62E6\u622A\uFF0C\u56E0\u6B64\u63D0\u4F9B\u4E86\u4E00\u79CD\u673A\u5236\uFF0C\u53EF\u4EE5\u5BF9\u5916\u754C\u7684\u8BBF\u95EE\u8FDB\u884C\u8FC7\u6EE4\u548C\u6539\u5199\u3002Proxy \u8FD9\u4E2A\u8BCD\u7684\u539F\u610F\u662F\u4EE3\u7406\uFF0C\u7528\u5728\u8FD9\u91CC\u8868\u793A\u7531\u5B83\u6765\u201C\u4EE3\u7406\u201D\u67D0\u4E9B\u64CD\u4F5C\uFF0C\u53EF\u4EE5\u8BD1\u4E3A\u201C\u4EE3\u7406\u5668\u201D\u3002
`,head:[["meta",{property:"og:url",content:"https://vuepress-theme-hope-v2-demo.mrhope.site/note/cs/coding/js/js-essence/es6/proxy.html"}],["meta",{property:"og:site_name",content:"\u5F18\u6811"}],["meta",{property:"og:title",content:"Proxy"}],["meta",{property:"og:type",content:"article"}],["meta",{property:"og:locale",content:"zh-CN"}],["meta",{property:"og:locale:alternate",content:"en-US"}],["meta",{name:"twitter:card",content:"summary_large_image"}],["meta",{name:"twitter:image:alt",content:"\u5F18\u6811"}],["meta",{property:"article:author",content:"\u962E\u4E00\u5CF0"}],["meta",{property:"article:published_time",content:"2019-10-23T00:00:00.000Z"}]]},excerpt:`<p>Proxy \u7528\u4E8E\u4FEE\u6539\u67D0\u4E9B\u64CD\u4F5C\u7684\u9ED8\u8BA4\u884C\u4E3A\uFF0C\u7B49\u540C\u4E8E\u5728\u8BED\u8A00\u5C42\u9762\u505A\u51FA\u4FEE\u6539\uFF0C\u6240\u4EE5\u5C5E\u4E8E\u4E00\u79CD\u201C\u5143\u7F16\u7A0B\u201D(meta programming)\uFF0C\u5373\u5BF9\u7F16\u7A0B\u8BED\u8A00\u8FDB\u884C\u7F16\u7A0B\u3002</p>
<p>Proxy \u53EF\u4EE5\u7406\u89E3\u6210\uFF0C\u5728\u76EE\u6807\u5BF9\u8C61\u4E4B\u524D\u67B6\u8BBE\u4E00\u5C42\u201C\u62E6\u622A\u201D\uFF0C\u5916\u754C\u5BF9\u8BE5\u5BF9\u8C61\u7684\u8BBF\u95EE\uFF0C\u90FD\u5FC5\u987B\u5148\u901A\u8FC7\u8FD9\u5C42\u62E6\u622A\uFF0C\u56E0\u6B64\u63D0\u4F9B\u4E86\u4E00\u79CD\u673A\u5236\uFF0C\u53EF\u4EE5\u5BF9\u5916\u754C\u7684\u8BBF\u95EE\u8FDB\u884C\u8FC7\u6EE4\u548C\u6539\u5199\u3002Proxy \u8FD9\u4E2A\u8BCD\u7684\u539F\u610F\u662F\u4EE3\u7406\uFF0C\u7528\u5728\u8FD9\u91CC\u8868\u793A\u7531\u5B83\u6765\u201C\u4EE3\u7406\u201D\u67D0\u4E9B\u64CD\u4F5C\uFF0C\u53EF\u4EE5\u8BD1\u4E3A\u201C\u4EE3\u7406\u5668\u201D\u3002</p>
`,headers:[{level:2,title:"Proxy \u5B9E\u4F8B\u7684\u65B9\u6CD5",slug:"proxy-\u5B9E\u4F8B\u7684\u65B9\u6CD5",children:[{level:3,title:"get()",slug:"get",children:[]},{level:3,title:"set()",slug:"set",children:[]},{level:3,title:"apply()",slug:"apply",children:[]},{level:3,title:"has()",slug:"has",children:[]},{level:3,title:"construct()",slug:"construct",children:[]},{level:3,title:"deleteProperty()",slug:"deleteproperty",children:[]},{level:3,title:"defineProperty()",slug:"defineproperty",children:[]},{level:3,title:"getOwnPropertyDescriptor()",slug:"getownpropertydescriptor",children:[]},{level:3,title:"getPrototypeOf()",slug:"getprototypeof",children:[]},{level:3,title:"isExtensible()",slug:"isextensible",children:[]},{level:3,title:"ownKeys()",slug:"ownkeys",children:[]},{level:3,title:"preventExtensions()",slug:"preventextensions",children:[]},{level:3,title:"setPrototypeOf()",slug:"setprototypeof",children:[]}]},{level:2,title:"Proxy.revocable()",slug:"proxy-revocable",children:[]},{level:2,title:"this \u95EE\u9898",slug:"this-\u95EE\u9898",children:[]},{level:2,title:"\u5B9E\u4F8B: Web \u670D\u52A1\u7684\u5BA2\u6237\u7AEF",slug:"\u5B9E\u4F8B-web-\u670D\u52A1\u7684\u5BA2\u6237\u7AEF",children:[]}],git:{createdTime:1647280116e3,updatedTime:1647280116e3,contributors:[{name:"hanjiaming",email:"47519540+guomaimang@users.noreply.github.com",commits:1}]},readingTime:{minutes:20.45,words:6134},filePathRelative:"note/cs/coding/js/js-essence/es6/proxy.md"};export{e as data};
