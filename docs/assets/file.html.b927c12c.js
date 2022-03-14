import{_ as n,f as s}from"./app.b0675cc3.js";const e={},a=s(`<h1 id="file" tabindex="-1"><a class="header-anchor" href="#file" aria-hidden="true">#</a> file</h1><p><code>file</code> \u547D\u4EE4\u7528\u6765\u67D0\u4E2A\u6587\u4EF6\u7684\u7C7B\u578B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">file</span> index.html
 index.html: HTML document, ASCII text
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>file \u5DE5\u5177\u53EF\u4EE5\u5BF9\u6240\u7ED9\u7684\u6587\u4EF6\u4E00\u884C\u7B80\u77ED\u7684\u4ECB\u7ECD\uFF0C\u5B83\u7528\u6587\u4EF6\u540E\u7F00\u3001\u5934\u90E8\u4FE1\u606F\u548C\u4E00\u4E9B\u5176\u4ED6\u7684\u7EBF\u7D22\u6765\u5224\u65AD\u6587\u4EF6\u3002\u60A8\u5728\u68C0\u67E5\u4E00\u5806\u60A8\u4E0D\u719F\u6089\u7684\u6587\u4EF6\u65F6\u4F7F\u7528 find \u975E\u5E38\u65B9\u4FBF:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">find</span> -exec <span class="token function">file</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">\\</span><span class="token punctuation">;</span>
.:            directory
./hanoi:      Perl script, ASCII text executable
./.hanoi.swp: Vim swap file, version <span class="token number">7.3</span>
./factorial:  Perl script, ASCII text executable
./bits.c:     C source, ASCII text
./bits:       ELF <span class="token number">32</span>-bit LSB executable, Intel <span class="token number">80386</span>, version <span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,5);function i(t,c){return a}var p=n(e,[["render",i]]);export{p as default};
