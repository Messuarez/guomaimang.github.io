import{_ as n,f as a}from"./app.fd696f43.js";const s={},e=a(`<h1 id="\u9012\u5F52\u5B9E\u8DF5" tabindex="-1"><a class="header-anchor" href="#\u9012\u5F52\u5B9E\u8DF5" aria-hidden="true">#</a> \u9012\u5F52\u5B9E\u8DF5</h1><p>\u9012\u5F52\u5206\u4E3A\u5355\u5411\u9012\u5F52\u548C\u53CC\u5411\u9012\u5F52\uFF0C\u6211\u4EEC\u65E5\u5E38\u8BF4\u7684\u9012\u5F52\u662F\u53CC\u5411\u9012\u5F52\u3002</p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><h3 id="\u9012\u5F52\u7684\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u9012\u5F52\u7684\u5B9A\u4E49" aria-hidden="true">#</a> \u9012\u5F52\u7684\u5B9A\u4E49</h3><p>\u7F16\u7A0B\u8BED\u8A00\u4E2D\uFF0C\u51FD\u6570 Func(Type a,\u2026\u2026)\u76F4\u63A5\u6216\u95F4\u63A5\u8C03\u7528\u51FD\u6570\u672C\u8EAB\uFF0C\u5219\u8BE5\u51FD\u6570\u79F0\u4E3A\u300C\u9012\u5F52\u51FD\u6570\u300D\u3002</p><p>\u5728\u5B9E\u73B0\u9012\u5F52\u51FD\u6570\u4E4B\u524D\uFF0C\u6709\u4E24\u4EF6\u91CD\u8981\u7684\u4E8B\u60C5\u9700\u8981\u5F04\u6E05\u695A:</p><ul><li>\u9012\u63A8\u5173\u7CFB\uFF1A\u4E00\u4E2A\u95EE\u9898\u7684\u7ED3\u679C\u4E0E\u5176\u5B50\u95EE\u9898\u7684\u7ED3\u679C\u4E4B\u95F4\u7684\u5173\u7CFB\u3002</li><li>\u57FA\u672C\u60C5\u51B5\uFF08base case\uFF09\uFF1A\u4E0D\u9700\u8981\u8FDB\u4E00\u6B65\u7684\u9012\u5F52\u8C03\u7528\u5C31\u53EF\u4EE5\u76F4\u63A5\u8BA1\u7B97\u7B54\u6848\u7684\u60C5\u51B5\u3002\u53EF\u7406\u89E3\u4E3A\u9012\u5F52\u8DF3\u51FA\u6761\u4EF6\u3002</li></ul><p>\u4E00\u65E6\u6211\u4EEC\u8BA1\u7B97\u51FA\u4EE5\u4E0A\u4E24\u4E2A\u5143\u7D20\uFF0C\u518D\u60F3\u8981\u5B9E\u73B0\u4E00\u4E2A\u9012\u5F52\u51FD\u6570\uFF0C\u5C31\u53EA\u9700\u8981\u6839\u636E\u9012\u63A8\u5173\u7CFB\u8C03\u7528\u51FD\u6570\u672C\u8EAB\uFF0C\u76F4\u5230\u5176\u62B5\u8FBE\u57FA\u672C\u60C5\u51B5\u3002</p><p>\u5B9E\u9645\u4E0A\uFF0C\u9012\u5F52\u5C31\u662F\u6570\u5B66\u5F52\u7EB3\u6CD5\u3002</p><h2 id="\u9012\u5F52\u51FD\u6570\u7684\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#\u9012\u5F52\u51FD\u6570\u7684\u7279\u70B9" aria-hidden="true">#</a> \u9012\u5F52\u51FD\u6570\u7684\u7279\u70B9</h2><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3><img src="https://pic.hanjiaming.com.cn/2021/05/03/7a6f62a5c7933.png" alt="image.png" title="image.png"><ul><li>\u6709\u4E24\u79CDcase\uFF1Abase case \u548C general case <ul><li>general case \u4E00\u822C\u7684\u60C5\u51B5</li><li>base case\uFF1A\u7B2C\u4E00\u6B21\u5230\u7EC8\u70B9</li></ul></li><li>general case \u7684 return \u9700\u8981\u8C03\u7528\u81EA\u5DF1\uFF0Cbase return \u4E0D\u9700\u8981\u8C03\u7528\u81EA\u5DF1</li></ul><p><strong>\u4E00\u8A00\u4EE5\u853D\u4E4B\uFF1A\u6211\u8C03\u7528\u6211\u81EA\u5DF1</strong></p><h3 id="\u56FE\u89E3" tabindex="-1"><a class="header-anchor" href="#\u56FE\u89E3" aria-hidden="true">#</a> \u56FE\u89E3</h3><p>\u4E00\u4E0B\u56FE\u89E3\u4E3A\u53CC\u5411\u9012\u5F52\uFF1B</p><img src="https://pic.hanjiaming.com.cn/2021/05/03/8414929e19b03.png" alt="image.png" title="image.png"><img src="https://pic.hanjiaming.com.cn/2021/05/03/cb87524eada53.png" alt="image.png" title="image.png"><h2 id="\u5982\u4F55\u5199\u51FA\u4E00\u4E2A\u9012\u5F52\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u5199\u51FA\u4E00\u4E2A\u9012\u5F52\u51FD\u6570" aria-hidden="true">#</a> \u5982\u4F55\u5199\u51FA\u4E00\u4E2A\u9012\u5F52\u51FD\u6570</h2><h3 id="\u8303\u5F0F-\u7531\u4E0B\u5230\u4E0A" tabindex="-1"><a class="header-anchor" href="#\u8303\u5F0F-\u7531\u4E0B\u5230\u4E0A" aria-hidden="true">#</a> \u8303\u5F0F\uFF1A\u7531\u4E0B\u5230\u4E0A</h3><ul><li>\u5BFB\u627E\u9012\u5F52\u9012\u63A8\u5173\u7CFB</li><li>\u5BFB\u627E\u9012\u5F52\u57FA\u672C\u60C5\u51B5\uFF0C\u8DF3\u51FA\u65F6\u8FD4\u56DE\u57FA\u672C\u60C5\u51B5\u7684\u7ED3\u679C</li><li>\u4FEE\u6539\u9012\u5F52\u51FD\u6570\u7684\u53C2\u6570</li><li>\u9012\u5F52\u8C03\u7528\u5E76\u8FD4\u56DE\u4E2D\u95F4\u53D8\u91CF</li><li>\u4F7F\u7528\u9012\u5F52\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u4E0E\u5F53\u524D\u53C2\u6570\u8FDB\u884C\u8BA1\u7B97\uFF0C\u5E76\u8FD4\u56DE\u6700\u7EC8\u7ED3\u679C</li></ul><p><strong>\u5B9E\u4F8B: \u7D2F\u52A0</strong>\u2014\u2014\u4E0B\u9762\u6211\u4EEC\u4EE5\u7D2F\u52A0\u7684\u793A\u4F8B\u8BF4\u660E\u5199\u9012\u5F52\u7684\u601D\u8DEF</p><p>1+2+3+4+...+<em>n</em> \uFF0C\u51FD\u6570\u8868\u8FBE\u5F0F\u4E3A f(n) = f(n-1) + n</p><h3 id="\u5BFB\u627E\u57FA\u672C\u60C5\u51B5" tabindex="-1"><a class="header-anchor" href="#\u5BFB\u627E\u57FA\u672C\u60C5\u51B5" aria-hidden="true">#</a> \u5BFB\u627E\u57FA\u672C\u60C5\u51B5</h3><p>\u7D2F\u52A0\u793A\u4F8B\u4E2D\uFF0C\u57FA\u672C\u60C5\u51B5\u4E3A n = 1 \u65F6\uFF0Cf(1) = 1\u3002</p><h3 id="\u5BFB\u627E\u9012\u63A8\u5173\u7CFB-\u96BE\u70B9" tabindex="-1"><a class="header-anchor" href="#\u5BFB\u627E\u9012\u63A8\u5173\u7CFB-\u96BE\u70B9" aria-hidden="true">#</a> \u5BFB\u627E\u9012\u63A8\u5173\u7CFB\uFF08\u96BE\u70B9\uFF09</h3><p>\u7D2F\u52A0\u793A\u4F8B\u4E2D\uFF0C\u9012\u63A8\u5173\u7CFB\u4E3A f(n) = f(n-1) + n\uFF0Cf(n) \u6BCF\u6B21\u6267\u884C\u65F6\u4F9D\u8D56 f(n-1) \u7684\u7ED3\u679C\uFF0C\u6240\u4EE5\u6211\u4EEC\u628A <strong>f(n-1) \u7684\u7ED3\u679C</strong>\u770B\u4F5C\u662F<strong>\u4E2D\u95F4\u53D8\u91CF</strong>\u3002</p><p><strong>\u4E2D\u95F4\u53D8\u91CF\u5176\u5B9E\u5C31\u662F\u8054\u7CFB\u9012\u5F52\u51FD\u6570\u7684\u7EBD\u5E26\uFF0C\u5206\u6790\u51FA\u4E2D\u95F4\u53D8\u91CF\u9012\u5F52\u51FD\u6570\u4E5F\u5C31\u5B9E\u73B0\u4E86 80%\u3002</strong></p><p>\u5927\u767D\u8BDD\uFF1A\u5F53\u524D\u7ED3\u679C\u5FC5\u987B\u501F\u52A9\u524D\u4E00\u4E2A\u7ED3\u679C\uFF0C\u524D\u4E00\u4E2A\u501F\u52A9\u524D\u524D\u4E00\u4E2A... \u4E00\u76F4\u5230\u65F6\u6211\u4EEC\u627E\u5230\u4E86\u300C\u57FA\u672C\u60C5\u51B5\u300D\u3002</p><p>\u7136\u540E\u62FF\u5230\u300C\u57FA\u672C\u60C5\u51B5\u300D\u5F00\u59CB\u5F80\u56DE\u8BA1\u7B97\u3002\u8FD9\u4E2A\u8FC7\u7A0B\u6211\u4EEC\u7B80\u79F0\u4E3A\u300C\u7531\u4E0B\u5230\u4E0A\u300D\u3002</p><p>\u4E0B\u9762\u6211\u4EEC\u7528 f(5) = 1 + 2 + 3 + 4 + 5 = 15 \u8FD9\u4E2A\u8FC7\u7A0B\u8FDB\u884C\u5206\u6790\u3002</p><h3 id="\u7531\u4E0B\u5230\u4E0A" tabindex="-1"><a class="header-anchor" href="#\u7531\u4E0B\u5230\u4E0A" aria-hidden="true">#</a> \u7531\u4E0B\u5230\u4E0A</h3><p>\u5728\u6BCF\u4E2A\u9012\u5F52\u5C42\u6B21\u4E0A\uFF0C\u6211\u4EEC\u9996\u5148\u9012\u5F52\u5730\u8C03\u7528\u81EA\u8EAB\uFF0C\u7136\u540E\u6839\u636E\u8FD4\u56DE\u503C\u8FDB\u884C\u8BA1\u7B97\u3002\uFF08\u4F9D\u8D56\u8FD4\u56DE\u503C\uFF09</p><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token comment">/** 
 * \u6A21\u62DF\u7A0B\u5E8F\u6267\u884C\u8FC7\u7A0B\uFF1A
 * 5 + sum(4)
 * 5 + (4 + sum(3)
 * 5 + 4 + (3 + sum(2))
 * 5 + 4 + 3 + (2 + sum(1))
 * ------------------&gt; \u5230\u8FBE\u57FA\u672C\u60C5\u51B5 sum(1) = 1 \uFF0C\u5F00\u59CB\u6267\u884C \u2462 \u884C\u4EE3\u7801
 * 5 + 4 + 3 + (2 + 1)
 * 5 + 4 + (3 + 3)
 * 5 + (4 + 6)
 * (5 + 10)
 * 15
 * &lt;p&gt;
 * \u7531\u4E0B\u5230\u4E0A\uFF1A\u6700\u7EC8\u4ECE 1 + 2 + 3 + 4 + 5 \u8BA1\u7B97...
 * \u9012\u5F52\u51FD\u6570\u300C\u5F00\u59CB\u300D\u90E8\u5206\u8C03\u7528\u81EA\u8EAB\uFF0C\u8FD9\u4E2A\u8FC7\u7A0B\u5C31\u662F\u627E\u5230\u57FA\u672C\u60C5\u51B5\uFF09\uFF0C\u7136\u540E\u6839\u636E\u8FD4\u56DE\u503C\u8FDB\u884C\u8BA1\u7B97\u3002
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h2 id="\u5B9E\u4F8B-\u5E15\u65AF\u5361\u4E09\u89D2" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B-\u5E15\u65AF\u5361\u4E09\u89D2" aria-hidden="true">#</a> \u5B9E\u4F8B: \u5E15\u65AF\u5361\u4E09\u89D2</h2><h3 id="\u9012\u63A8\u5173\u7CFB" tabindex="-1"><a class="header-anchor" href="#\u9012\u63A8\u5173\u7CFB" aria-hidden="true">#</a> \u9012\u63A8\u5173\u7CFB</h3><p>\u4E0B\u9762\u7684\u63D2\u56FE\uFF08\u6765\u6E90\u529B\u6263\uFF09\u7ED9\u51FA\u4E86\u4E00\u4E2A 5 \u884C\u7684\u5E15\u65AF\u5361\u4E09\u89D2\uFF0C\u6839\u636E\u4E0A\u9762\u7684\u5B9A\u4E49\uFF0C\u6211\u4EEC\u751F\u6210\u4E00\u4E2A\u5177\u6709\u786E\u5B9A\u884C\u6570\u7684\u5E15\u65AF\u5361\u4E09\u89D2\u5F62\u3002</p><img src="https://pic.hanjiaming.com.cn/2021/05/03/43de18459e176.gif" alt="791faf0c40cfff8190b7fddd60e68e812044a51b28cddead4b8a74c3c411a848-PascalTriangleAnimated2.gif" title="791faf0c40cfff8190b7fddd60e68e812044a51b28cddead4b8a74c3c411a848-PascalTriangleAnimated2.gif"><p>\u9996\u5148\uFF0C\u6211\u4EEC\u5B9A\u4E49\u4E00\u4E2A\u51FD\u6570 f(i, j)\uFF0C\u5B83\u5C06\u4F1A\u8FD4\u56DE\u5E15\u65AF\u5361\u4E09\u89D2\u5F62\u7B2C i \u884C\u3001\u7B2C jj\u5217\u7684\u6570\u5B57\u3002\u53EF\u4EE5\u770B\u5230\uFF0C\u6BCF\u884C\u7684\u6700\u5DE6\u8FB9\u548C\u6700\u53F3\u8FB9\u7684\u6570\u5B57\u662F\u57FA\u672C\u60C5\u51B5\uFF0C\u5B83\u603B\u662F\u7B49\u4E8E 1\u3002</p><p>\u6BCF\u4E2A\u6570\u662F\u5B83\u5DE6\u4E0A\u65B9\u548C\u53F3\u4E0A\u65B9\u7684\u6570\u7684\u548C\u3002</p><ul><li>\u9012\u63A8\u5173\u7CFB\uFF1Af(i, j) = f(i - 1, j - 1) + f(i - 1, j)</li><li>\u57FA\u672C\u60C5\u51B5\uFF1Af(i,j) = 1 \uFF0C\u5F53 j=1,j=1 \u6216\u8005 i=j \u65F6\u3002</li></ul><h2 id="\u5355\u5411\u9012\u5F52\u548C\u53CC\u5411\u9012\u5F52" tabindex="-1"><a class="header-anchor" href="#\u5355\u5411\u9012\u5F52\u548C\u53CC\u5411\u9012\u5F52" aria-hidden="true">#</a> \u5355\u5411\u9012\u5F52\u548C\u53CC\u5411\u9012\u5F52</h2><h3 id="\u5355\u5411\u9012\u5F52" tabindex="-1"><a class="header-anchor" href="#\u5355\u5411\u9012\u5F52" aria-hidden="true">#</a> \u5355\u5411\u9012\u5F52</h3><p>\u5355\u5411\u9012\u5F52\u53C8\u53EB\u505A\u7531\u4E0A\u5230\u4E0B\u7684\u9012\u5F52\u3002</p><h4 id="\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#\u7279\u70B9" aria-hidden="true">#</a> \u7279\u70B9</h4><ul><li>\u591A\u4E2A\u4F20\u9012\u53D8\u91CF</li><li>\u4F20\u9012\u53D8\u91CF\u7684\u4E2A\u6570 = \u5F62\u53C2\u4E2A\u6570</li><li>\u5F62\u53C2\u4E2D\u5305\u62EC\u4E00\u4E2A\u4E2D\u95F4\u53D8\u91CF\uFF0C\u7528\u4E8E\u5B58\u653E\u6700\u7EC8\u7ED3\u679C</li><li>base case \u7528\u4E8E\u8FD4\u56DE\u6700\u7EC8\u7ED3\u679C</li></ul><h4 id="\u4E3E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4E3E\u4F8B" aria-hidden="true">#</a> \u4E3E\u4F8B</h4><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
using namespace std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">asum</span><span class="token punctuation">(</span>intnumber<span class="token punctuation">,</span>intoutcome<span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token comment">//base</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>number<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
<span class="token keyword">return</span> outcome<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//general</span>
outcome <span class="token operator">*=</span> number<span class="token punctuation">;</span>
number <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token function">asum</span><span class="token punctuation">(</span>number<span class="token punctuation">,</span>outcome<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
cout <span class="token operator">&lt;&lt;</span> <span class="token function">asum</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h4 id="\u8303\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u8303\u5F0F" aria-hidden="true">#</a> \u8303\u5F0F</h4><p>\u7531\u4E0B\u5230\u4E0A-\u8303\u5F0F</p><ul><li>\u5BFB\u627E\u9012\u5F52\u9012\u63A8\u5173\u7CFB</li><li>\u5BFB\u627E\u9012\u5F52\u57FA\u672C\u60C5\u51B5\uFF0C\u8DF3\u51FA\u65F6\u8FD4\u56DE\u57FA\u672C\u60C5\u51B5\u7684\u7ED3\u679C</li><li>\u4FEE\u6539\u9012\u5F52\u51FD\u6570\u7684\u53C2\u6570</li><li>\u9012\u5F52\u8C03\u7528\u5E76\u8FD4\u56DE\u4E2D\u95F4\u53D8\u91CF</li><li>\u4F7F\u7528\u9012\u5F52\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u4E0E\u5F53\u524D\u53C2\u6570\u8FDB\u884C\u8BA1\u7B97\uFF0C\u5E76\u8FD4\u56DE\u6700\u7EC8\u7ED3\u679C</li></ul><h4 id="\u901A\u7528\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u901A\u7528\u4EE3\u7801" aria-hidden="true">#</a> \u901A\u7528\u4EE3\u7801</h4><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">fun</span><span class="token punctuation">(</span>\u53C2\u6570<span class="token punctuation">,</span>\u4E2D\u95F4\u53D8\u91CF<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// base case</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>\u57FA\u672C\u60C5\u51B5\u6761\u4EF6<span class="token punctuation">)</span><span class="token punctuation">{</span>
  	<span class="token keyword">return</span> \u57FA\u672C\u60C5\u51B5\u7684\u7ED3\u679C\u4E0E\u4E2D\u95F4\u53D8\u91CF\u7684\u8BA1\u7B97\u7ED3\u679C<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> 
  <span class="token comment">// general case</span>
  \u4E2D\u95F4\u53D8\u91CF <span class="token operator">=</span> \u6839\u636E\u53C2\u6570\u4E0E\u4E2D\u95F4\u53D8\u91CF\u91CD\u65B0\u8BA1\u7B97<span class="token punctuation">;</span>
  \u4FEE\u6539\u53C2\u6570\uFF1B
	<span class="token keyword">return</span> <span class="token function">fun</span><span class="token punctuation">(</span>\u53C2\u6570<span class="token punctuation">,</span>\u4E2D\u95F4\u53D8\u91CF<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="\u53CC\u5411\u9012\u5F52" tabindex="-1"><a class="header-anchor" href="#\u53CC\u5411\u9012\u5F52" aria-hidden="true">#</a> \u53CC\u5411\u9012\u5F52</h3><h4 id="\u7279\u70B9-1" tabindex="-1"><a class="header-anchor" href="#\u7279\u70B9-1" aria-hidden="true">#</a> \u7279\u70B9</h4><ul><li>\u901A\u5E38\u53EA\u6709\u4E00\u4E2A\u5F62\u53C2</li><li>\u4E2D\u95F4\u53D8\u91CF\u4E0D\u9700\u8981\u4F20\u9012</li><li>base case \u8FD4\u56DE \u6700\u57FA\u672C\u60C5\u51B5\u7684\u7ED3\u679C</li><li>general case \u8FD4\u56DE \u6700\u7EC8\u7ED3\u679C</li></ul><h4 id="\u4E3E\u4F8B-1" tabindex="-1"><a class="header-anchor" href="#\u4E3E\u4F8B-1" aria-hidden="true">#</a> \u4E3E\u4F8B</h4><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
using namespace std<span class="token punctuation">;</span>

<span class="token keyword">int</span> <span class="token function">asum</span><span class="token punctuation">(</span><span class="token keyword">int</span> number<span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token comment">// base</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>number <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// general</span>
    <span class="token keyword">int</span> outcome <span class="token operator">=</span> <span class="token function">asum</span><span class="token punctuation">(</span>number<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    outcome <span class="token operator">*=</span> number<span class="token punctuation">;</span>
    <span class="token keyword">return</span> outcome<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token function">asum</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h4 id="\u901A\u7528\u4EE3\u7801-1" tabindex="-1"><a class="header-anchor" href="#\u901A\u7528\u4EE3\u7801-1" aria-hidden="true">#</a> \u901A\u7528\u4EE3\u7801</h4><div class="language-c ext-c line-numbers-mode"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">fun</span><span class="token punctuation">(</span>\u53C2\u6570<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// base case</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>\u57FA\u672C\u60C5\u51B5\u6761\u4EF6<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> \u57FA\u672C\u60C5\u51B5\u7684\u7ED3\u679C<span class="token punctuation">;</span> <span class="token punctuation">}</span>
  
  <span class="token comment">// general case</span>
    \u53D8\u91CF<span class="token number">1</span> <span class="token operator">=</span> <span class="token function">fun</span><span class="token punctuation">(</span>\u4FEE\u6539\u540E\u7684\u53C2\u6570<span class="token punctuation">)</span><span class="token punctuation">;</span> 
    \u6700\u7EC8\u7ED3\u679C <span class="token operator">=</span> \u6839\u636E \u4FEE\u6539\u524D\u7684\u53C2\u6570 \u4E0E \u53D8\u91CF<span class="token number">1</span> \u8BA1\u7B97<span class="token punctuation">;</span>
    <span class="token keyword">return</span> \u6700\u7EC8\u7ED3\u679C<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u5F15\u7528</p><ul><li>https://leetcode-cn.com/circle/article/koSrVI/</li><li>COMP1011\u2019s PowerPoint</li></ul>`,62);function p(t,c){return e}var r=n(s,[["render",p]]);export{r as default};
