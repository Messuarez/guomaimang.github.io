import{_ as s,r,o as n,a as o,d as e,e as l,F as d,f as i,b as a}from"./app.fd424ec0.js";const h={},c=i('<h1 id="c-\u4F53\u7CFB\u7B80\u6613\u5165\u95E83" tabindex="-1"><a class="header-anchor" href="#c-\u4F53\u7CFB\u7B80\u6613\u5165\u95E83" aria-hidden="true">#</a> C++ \u4F53\u7CFB\u7B80\u6613\u5165\u95E83</h1><h2 id="byte-word-oriented-memory-organization" tabindex="-1"><a class="header-anchor" href="#byte-word-oriented-memory-organization" aria-hidden="true">#</a> Byte/Word-oriented memory organization</h2><h3 id="byte\u5B57\u8282" tabindex="-1"><a class="header-anchor" href="#byte\u5B57\u8282" aria-hidden="true">#</a> Byte\u5B57\u8282</h3><ul><li>\u7A0B\u5E8F\u6309\u5730\u5740\u5F15\u7528\u6570\u636E <ul><li>\u4ECE\u6982\u5FF5\u4E0A\u8BB2\uFF0C\u6211\u4EEC\u5C06\u5176\u89C6\u4E3A\u975E\u5E38\u5927\u7684\u5B57\u8282\u6570\u7EC4</li><li>\u5730\u5740\u5C31\u50CF\u662F\u8BE5\u6570\u7EC4\u7684\u7D22\u5F15</li><li>\u5E76\u4E14\uFF0C\u4E00\u4E2A\u6307\u9488\u53D8\u91CF\u5B58\u50A8\u4E00\u4E2A\u5730\u5740</li></ul></li></ul><p>\u5B58\u50A8\u5668\u4E2D\u7684\u57FA\u672C\u201C\u5355\u4F4D\uFF08units\uFF09\u201D\u662F\u5B57\u8282byte\uFF088 \u4F4D\u300Cbits\u6BD4\u7279\u300D\uFF09</p><ul><li>bit\u6BD4\u7279\u503C \u53EF\u4E3A0\u62161</li><li>\u5B57\u8282\u503C \u53EF\u4E3A\u4E00\u4E2A\u5B57\u8282</li><li>8\u6BD4\u7279bit = 1\u5B57\u8282byte\uFF0C\u662F\u56E0\u4E3A8\u4E2Abit\u53EF\u4EE5\u8868\u793A\u4E00\u4E2Abyte</li></ul><h3 id="word\u5B57" tabindex="-1"><a class="header-anchor" href="#word\u5B57" aria-hidden="true">#</a> Word\u5B57</h3><ul><li><p>Word size: understood as the number of bits to represent addresses</p></li><li><p>Word size determines the <em>addressable memory range</em>\uFF08\u53EF\u5BFB\u5740\u7684\u5185\u5B58\u8303\u56F4\uFF09</p><ul><li>32-bit, can address 4GB address space</li><li>64-bit, can address 264 bytes, \u2248 18.4 X 1018 bytes \u2248 16 million 1TB Hard Disk</li></ul></li><li><p>\u5185\u5B58\u901A\u5E38\u4EE5\u8FDE\u7EED\u5B57\u8282\uFF08\u4E00\u7EC4\u5B57\u8282\uFF09\u8FDB\u884C\u8BBF\u95EE</p></li><li><p>one byte = 8 bits</p></li><li><p>one word = 4 bytes = 32 bits</p></li><li><p>double word = 8 bytes = 64 bits</p></li></ul><p><img src="https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/02/20210204163743709.png" alt="" loading="lazy"></p><h3 id="bit\u6BD4\u7279" tabindex="-1"><a class="header-anchor" href="#bit\u6BD4\u7279" aria-hidden="true">#</a> Bit\u6BD4\u7279</h3><p>32\u4F4D=4\u5B57\u8282\uFF0C\u53EF\u8868\u793A4^16 = 2 ^32\u4E2A\u4E0D\u540C\u7684\u5730\u5740 \u3002\u6545\u5730\u5740\u662F32\u4F4D\u957F\u3002 \u6240\u4EE532\u4F4D\u5904\u7406\u5668\u4E5F\u4EE3\u8868\u6BCF\u4E2A\u5730\u5740\u957F\u5EA6\u4E3A32\u6BD4\u7279\uFF0C64\u4F4D\u5904\u7406\u5668\u4E5F\u4EE3\u8868\u6BCF\u4E2A\u5730\u5740\u957F\u5EA6\u4E3A64\u6BD4\u7279\u3002\u7531\u6B64\u63A8\u65AD32bit\u5904\u7406\u5668\u6700\u5927\u652F\u6301 2^32byte = 4GByte\u5185\u5B58\uFF0C64\u4F4D\u5904\u7406\u5668\u6700\u5927\u652F\u6301 2^64 = 2147483648GByte\u5185\u5B58\u3002</p><p>\u4EE5\u4E0B\u4E3A32\u4F4D\u53EF\u5BFB\u5740\u5185\u5B58\u56FE</p><p><img src="https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/02/20210202091158498.png" alt="" loading="lazy"></p><p>\u8FD9\u91CC\u600E\u4E48\u7406\u89E3\u5462\uFF1F\u7B80\u5355\u7684\u8BF4\uFF0C\u5185\u5B58\u7684\u57FA\u672C\u6784\u6210\u5355\u4F4D\u4E3Abyte\u3002\u65E9\u4E9B\u65F6\u5019\uFF0C\u53D7Bus\u4F20\u8F93\u548CCPU\u9650\u5236\uFF0C\u5904\u7406\u4F4D\u6570\u4E3A32bit\uFF0C\u800C32bit\u957F\u65E2\u8981\u53EF\u4EE5\u7D22\u5F15\u5230\u6BCF\u4E2A\u5730\u5740\uFF0C\u8FD9\u9650\u5B9A\u4E86\u5185\u5B58\u7684\u5730\u5740\u6570\u91CF\uFF0C\u6240\u4EE5\uFF1B\u53C8\u8981\u80FD\u653E\u4E0B\u6BCF\u4E2Aword\uFF0C\u6240\u4EE5\u6BCF\u4E2A32bit\u9650\u5B9A\u4E86one word = 4 bytes = 32 bits\u3002\u90A3\u4E48\u5347\u7EA7\u4E3A64\u4F4D\u540E\uFF0C\u5185\u5B58\u7D22\u5F15\u6570\u91CF\u589E\u52A0\uFF0Cdouble word = 8 bytes = 64 bits\u3002</p><p>\u6211\u4EEC\u9700\u8981\u6CE8\u610F\uFF0C\u5730\u5740\u5E76\u6CA1\u6709\u5728\u5185\u5B58\u6761\u5185\u90E8\u6807\u7740\uFF0C\u800C\u662F\u4EBA\u4E3A\u6307\u5B9A\u7684\uFF0C\u8BBF\u95EE\u5730\u5740\u7531\u5904\u7406\u5668\u63A7\u5236\u3002\u56E0\u4E3A\u5185\u5B58\u6761\u662F\u901A\u7528\u7684\uFF0C\u65E2\u53EF\u4EE5\u7528\u4E8E32bits\u5904\u7406\u5668\uFF0C\u53C8\u53EF\u4EE5\u7528\u4E8E64bits\u5904\u7406\u5668\u3002</p><h2 id="data-representations-in-c" tabindex="-1"><a class="header-anchor" href="#data-representations-in-c" aria-hidden="true">#</a> Data representations in C</h2><p><img src="https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/02/20210204163958956.png" alt="" loading="lazy"></p><h2 id="representing-strings" tabindex="-1"><a class="header-anchor" href="#representing-strings" aria-hidden="true">#</a> Representing strings</h2>',18),p=a("\u6BCF\u4E00\u4E2AASCII\u7801\u5360\u75281\u5B57\u8282\uFF0C\u4E00\u5171\u662F2^8 = 256\u4E2A \u8BF7\u89C1\uFF1A"),b={href:"https://tool.ip138.com/ascii_code/",target:"_blank",rel:"noopener noreferrer"},u=a("https://tool.ip138.com/ascii_code/"),g=i('<p><img src="https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/02/20210204165909178.png" alt="" loading="lazy"></p><h2 id="c-\u53D6\u6574\u89C4\u5219" tabindex="-1"><a class="header-anchor" href="#c-\u53D6\u6574\u89C4\u5219" aria-hidden="true">#</a> c++\u53D6\u6574\u89C4\u5219</h2><ul><li>int\uFF1A\u76F4\u63A5\u4E22\u5F03\u5C0F\u6570\u90E8\u5206</li><li>floor(x)\uFF1A\u8FD4\u56DE\u7684\u662F\u5C0F\u4E8E\u6216\u7B49\u4E8Ex\u7684\u6700\u5927\u6574\u6570</li><li>ceil(x)\uFF1A\u8FD4\u56DE\u7684\u662F\u5927\u4E8Ex\u7684\u6700\u5C0F\u6574\u6570</li></ul><p>\u5F15\u7528</p><ul><li>COMP1411@polyu&#39;s Teaching PowerPoint</li><li>COMP2421@polyu&#39;s Teaching PowerPoint</li></ul>',5);function y(m,_){const t=r("ExternalLinkIcon");return n(),o(d,null,[c,e("p",null,[p,e("a",b,[u,l(t)])]),g],64)}var x=s(h,[["render",y]]);export{x as default};
