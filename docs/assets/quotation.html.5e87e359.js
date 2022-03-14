import{_ as s,f as n}from"./app.b0675cc3.js";const a={},e=n(`<p>Bash \u53EA\u6709\u4E00\u79CD\u6570\u636E\u7C7B\u578B\uFF0C\u5C31\u662F\u5B57\u7B26\u4E32\u3002\u4E0D\u7BA1\u7528\u6237\u8F93\u5165\u4EC0\u4E48\u6570\u636E\uFF0CBash \u90FD\u89C6\u4E3A\u5B57\u7B26\u4E32\u3002\u56E0\u6B64\uFF0C\u5B57\u7B26\u4E32\u76F8\u5173\u7684\u5F15\u53F7\u548C\u8F6C\u4E49\uFF0C\u5BF9 Bash \u6765\u8BF4\u5C31\u975E\u5E38\u91CD\u8981\u3002</p><h2 id="\u8F6C\u4E49" tabindex="-1"><a class="header-anchor" href="#\u8F6C\u4E49" aria-hidden="true">#</a> \u8F6C\u4E49</h2><p>\u67D0\u4E9B\u5B57\u7B26\u5728 Bash \u91CC\u9762\u6709\u7279\u6B8A\u542B\u4E49(\u6BD4\u5982<code>$</code>\u3001<code>&amp;</code>\u3001<code>*</code>)\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token variable">$date</span>

$
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C\u8F93\u51FA <code>$date</code> \u4E0D\u4F1A\u6709\u4EFB\u4F55\u7ED3\u679C\uFF0C\u56E0\u4E3A <code>$</code> \u662F\u4E00\u4E2A\u7279\u6B8A\u5B57\u7B26\u3002</p><p>\u5982\u679C\u60F3\u8981\u539F\u6837\u8F93\u51FA\u8FD9\u4E9B\u7279\u6B8A\u5B57\u7B26\uFF0C\u5C31\u5FC5\u987B\u5728\u5B83\u4EEC\u524D\u9762\u52A0\u4E0A\u53CD\u659C\u6760\uFF0C\u4F7F\u5176\u53D8\u6210\u666E\u901A\u5B57\u7B26\u3002\u8FD9\u5C31\u53EB\u505A\u201C\u8F6C\u4E49\u201D(escape)\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token punctuation">\\</span><span class="token variable">$date</span>
<span class="token variable">$date</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4E0A\u9762\u547D\u4EE4\u4E2D\uFF0C\u53EA\u6709\u5728\u7279\u6B8A\u5B57\u7B26 <code>$</code> \u524D\u9762\u52A0\u53CD\u659C\u6760\uFF0C\u624D\u80FD\u539F\u6837\u8F93\u51FA\u3002</p><p>\u53CD\u659C\u6760\u672C\u8EAB\u4E5F\u662F\u7279\u6B8A\u5B57\u7B26\uFF0C\u5982\u679C\u60F3\u8981\u539F\u6837\u8F93\u51FA\u53CD\u659C\u6760\uFF0C\u5C31\u9700\u8981\u5BF9\u5B83\u81EA\u8EAB\u8F6C\u4E49\uFF0C\u8FDE\u7EED\u4F7F\u7528\u4E24\u4E2A\u53CD\u659C\u7EBF (<code>\\\\</code>)\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token punctuation">\\</span><span class="token punctuation">\\</span>
<span class="token punctuation">\\</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u8F93\u51FA\u4E86\u53CD\u659C\u6760\u672C\u8EAB\u3002</p><p>\u53CD\u659C\u6760\u9664\u4E86\u7528\u4E8E\u8F6C\u4E49\uFF0C\u8FD8\u53EF\u4EE5\u8868\u793A\u4E00\u4E9B\u4E0D\u53EF\u6253\u5370\u7684\u5B57\u7B26\u3002</p><ul><li><code>\\a</code>: \u54CD\u94C3</li><li><code>\\b</code>: \u9000\u683C</li><li><code>\\n</code>: \u6362\u884C</li><li><code>\\r</code>: \u56DE\u8F66</li><li><code>\\t</code>: \u5236\u8868\u7B26</li></ul><p>\u5982\u679C\u60F3\u8981\u5728\u547D\u4EE4\u884C\u4F7F\u7528\u8FD9\u4E9B\u4E0D\u53EF\u6253\u5370\u7684\u5B57\u7B26\uFF0C\u53EF\u4EE5\u628A\u5B83\u4EEC\u653E\u5728\u5F15\u53F7\u91CC\u9762\uFF0C\u7136\u540E\u4F7F\u7528 <code>echo</code> \u547D\u4EE4\u7684 <code>-e</code> \u53C2\u6570\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> a<span class="token punctuation">\\</span>tb
atb

$ <span class="token builtin class-name">echo</span> -e <span class="token string">&quot;a<span class="token entity" title="\\t">\\t</span>b&quot;</span>
a        b
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C\u547D\u4EE4\u884C\u76F4\u63A5\u8F93\u51FA\u4E0D\u53EF\u6253\u5370\u5B57\u7B26\uFF0CBash \u4E0D\u80FD\u6B63\u786E\u89E3\u91CA\u3002\u5FC5\u987B\u628A\u5B83\u4EEC\u653E\u5728\u5F15\u53F7\u4E4B\u4E2D\uFF0C\u7136\u540E\u4F7F\u7528 <code>echo</code> \u547D\u4EE4\u7684 <code>-e</code> \u53C2\u6570\u3002</p><p>\u7531\u4E8E\u53CD\u659C\u6760\u53EF\u4EE5\u5BF9\u6362\u884C\u7B26\u8F6C\u4E49\uFF0C\u4F7F\u5F97 Bash \u8BA4\u4E3A\u6362\u884C\u7B26\u662F\u4E00\u4E2A\u666E\u901A\u5B57\u7B26\uFF0C\u4ECE\u800C\u53EF\u4EE5\u5C06\u4E00\u884C\u547D\u4EE4\u5199\u6210\u591A\u884C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">mv</span> <span class="token punctuation">\\</span>
/path/to/foo <span class="token punctuation">\\</span>
/path/to/bar

<span class="token comment"># \u7B49\u540C\u4E8E</span>
$ <span class="token function">mv</span> /path/to/foo /path/to/bar
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C\u5982\u679C\u4E00\u6761\u547D\u4EE4\u8FC7\u957F\uFF0C\u5C31\u53EF\u4EE5\u5728\u884C\u5C3E\u4F7F\u7528\u53CD\u659C\u6760\uFF0C\u5C06\u5176\u6539\u5199\u6210\u591A\u884C\u3002\u8FD9\u662F\u5E38\u89C1\u7684\u591A\u884C\u547D\u4EE4\u7684\u5199\u6CD5\u3002</p><h2 id="\u5355\u5F15\u53F7" tabindex="-1"><a class="header-anchor" href="#\u5355\u5F15\u53F7" aria-hidden="true">#</a> \u5355\u5F15\u53F7</h2><p>Bash \u5141\u8BB8\u5B57\u7B26\u4E32\u653E\u5728\u5355\u5F15\u53F7\u6216\u53CC\u5F15\u53F7\u4E4B\u4E2D\uFF0C\u52A0\u4EE5\u5F15\u7528\u3002</p><p>\u5355\u5F15\u53F7\u7528\u4E8E\u4FDD\u7559\u5B57\u7B26\u7684\u5B57\u9762\u542B\u4E49\uFF0C\u5404\u79CD\u7279\u6B8A\u5B57\u7B26\u5728\u5355\u5F15\u53F7\u91CC\u9762\uFF0C\u90FD\u4F1A\u53D8\u4E3A\u666E\u901A\u5B57\u7B26\uFF0C\u6BD4\u5982\u661F\u53F7 (<code>*</code>)\u3001\u7F8E\u5143\u7B26\u53F7( <code>$</code>)\u3001\u53CD\u659C\u6760 (<code>\\</code>)\u7B49\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;*&#39;</span>
*

$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;$USER&#39;</span>
<span class="token environment constant">$USER</span>

$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;$((2+2))&#39;</span>
<span class="token variable"><span class="token variable">$((</span><span class="token number">2</span><span class="token operator">+</span><span class="token number">2</span><span class="token variable">))</span></span>

$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;$(echo foo)&#39;</span>
<span class="token variable"><span class="token variable">$(</span><span class="token builtin class-name">echo</span> foo<span class="token variable">)</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u4E0A\u9762\u547D\u4EE4\u4E2D\uFF0C\u5355\u5F15\u53F7\u4F7F\u5F97 Bash \u6269\u5C55\u3001\u53D8\u91CF\u5F15\u7528\u3001\u7B97\u672F\u8FD0\u7B97\u548C\u5B50\u547D\u4EE4\uFF0C\u90FD\u5931\u6548\u4E86\u3002\u5982\u679C\u4E0D\u4F7F\u7528\u5355\u5F15\u53F7\uFF0C\u5B83\u4EEC\u90FD\u4F1A\u88AB Bash \u81EA\u52A8\u6269\u5C55\u3002</p><p>\u7531\u4E8E\u53CD\u659C\u6760\u5728\u5355\u5F15\u53F7\u91CC\u9762\u53D8\u6210\u4E86\u666E\u901A\u5B57\u7B26\uFF0C\u6240\u4EE5\u5982\u679C\u5355\u5F15\u53F7\u4E4B\u4E2D\uFF0C\u8FD8\u8981\u4F7F\u7528\u5355\u5F15\u53F7\uFF0C\u4E0D\u80FD\u4F7F\u7528\u8F6C\u4E49\uFF0C\u9700\u8981\u5728\u5916\u5C42\u7684\u5355\u5F15\u53F7\u524D\u9762\u52A0\u4E0A\u4E00\u4E2A\u7F8E\u5143\u7B26\u53F7 (<code>$</code>)\uFF0C\u7136\u540E\u518D\u5BF9\u91CC\u5C42\u7684\u5355\u5F15\u53F7\u8F6C\u4E49\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4E0D\u6B63\u786E</span>
$ <span class="token builtin class-name">echo</span> it<span class="token string">&#39;s

# \u4E0D\u6B63\u786E
$ echo &#39;</span>it<span class="token punctuation">\\</span>&#39;s<span class="token string">&#39;

# \u6B63\u786E
$ echo $&#39;</span>it<span class="token punctuation">\\</span>&#39;s&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u4E0D\u8FC7\uFF0C\u66F4\u5408\u7406\u7684\u65B9\u6CD5\u662F\u6539\u5728\u53CC\u5F15\u53F7\u4E4B\u4E2D\u4F7F\u7528\u5355\u5F15\u53F7\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;it&#39;s&quot;</span>
it&#39;s
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u53CC\u5F15\u53F7" tabindex="-1"><a class="header-anchor" href="#\u53CC\u5F15\u53F7" aria-hidden="true">#</a> \u53CC\u5F15\u53F7</h2><p>\u53CC\u5F15\u53F7\u6BD4\u5355\u5F15\u53F7\u5BBD\u677E\uFF0C\u53EF\u4EE5\u4FDD\u7559\u5927\u90E8\u5206\u7279\u6B8A\u5B57\u7B26\u7684\u672C\u6765\u542B\u4E49\uFF0C\u4F46\u662F\u4E09\u4E2A\u5B57\u7B26\u9664\u5916: \u7F8E\u5143\u7B26\u53F7(<code>$</code>)\u3001\u53CD\u5F15\u53F7(<code>\`</code>)\u548C\u53CD\u659C\u6760(<code>\\</code>)\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u8FD9\u4E09\u4E2A\u5B57\u7B26\u5728\u53CC\u5F15\u53F7\u4E4B\u4E2D\uFF0C\u4F1A\u88AB Bash \u81EA\u52A8\u6269\u5C55\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;*&quot;</span>
*
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C\u901A\u914D\u7B26 <code>*</code> \u653E\u5728\u53CC\u5F15\u53F7\u4E4B\u4E2D\uFF0C\u5C31\u53D8\u6210\u4E86\u666E\u901A\u5B57\u7B26\uFF0C\u4F1A\u539F\u6837\u8F93\u51FA\u3002\u8FD9\u4E00\u70B9\u9700\u8981\u7279\u522B\u7559\u610F\uFF0C\u53CC\u5F15\u53F7\u91CC\u9762\u4E0D\u4F1A\u8FDB\u884C\u6587\u4EF6\u540D\u6269\u5C55\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token environment constant">$SHELL</span>&quot;</span>
/bin/bash

$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">\`</span><span class="token function">date</span><span class="token variable">\`</span></span>&quot;</span>
Mon Jan <span class="token number">27</span> <span class="token number">13</span>:33:18 CST <span class="token number">2020</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C\u7F8E\u5143\u7B26\u53F7\u548C\u53CD\u5F15\u53F7\u5728\u53CC\u5F15\u53F7\u4E2D\uFF0C\u90FD\u4FDD\u6301\u7279\u6B8A\u542B\u4E49\u3002\u7F8E\u5143\u7B26\u53F7\u7528\u6765\u5F15\u7528\u53D8\u91CF\uFF0C\u53CD\u5F15\u53F7\u5219\u662F\u6267\u884C\u5B50\u547D\u4EE4\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;I&#39;d say: <span class="token entity" title="\\&quot;">\\&quot;</span>hello!<span class="token entity" title="\\&quot;">\\&quot;</span>&quot;</span>
I&#39;d say: <span class="token string">&quot;hello!&quot;</span>

$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token entity" title="\\\\">\\\\</span>&quot;</span>
<span class="token punctuation">\\</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C\u53CD\u659C\u6760\u5728\u53CC\u5F15\u53F7\u4E4B\u4E2D\u4FDD\u6301\u7279\u6B8A\u542B\u4E49\uFF0C\u7528\u6765\u8F6C\u4E49\u3002\u6240\u4EE5\uFF0C\u53EF\u4EE5\u4F7F\u7528\u53CD\u659C\u6760\uFF0C\u5728\u53CC\u5F15\u53F7\u4E4B\u4E2D\u63D2\u5165\u53CC\u5F15\u53F7\uFF0C\u6216\u8005\u63D2\u5165\u53CD\u659C\u6760\u672C\u8EAB\u3002</p><p>\u7531\u4E8E\u53CC\u5F15\u53F7\u5C06\u6362\u884C\u7B26\u89E3\u91CA\u4E3A\u666E\u901A\u5B57\u7B26\uFF0C\u6240\u4EE5\u53EF\u4EE5\u5229\u7528\u53CC\u5F15\u53F7\uFF0C\u5728\u547D\u4EE4\u884C\u8F93\u5165\u591A\u884C\u6587\u672C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;hello
world&quot;</span>
hello
world
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u4E0A\u9762\u547D\u4EE4\u4E2D\uFF0CBash \u6B63\u5E38\u60C5\u51B5\u4E0B\u4F1A\u5C06\u6362\u884C\u7B26\u89E3\u91CA\u4E3A\u547D\u4EE4\u7ED3\u675F\uFF0C\u4F46\u662F\u6362\u884C\u7B26\u5728\u53CC\u5F15\u53F7\u4E4B\u4E2D\u5C31\u662F\u666E\u901A\u5B57\u7B26\uFF0C\u6240\u4EE5\u53EF\u4EE5\u8F93\u5165\u591A\u884C\u3002<code>echo</code> \u547D\u4EE4\u4F1A\u5C06\u6362\u884C\u7B26\u539F\u6837\u8F93\u51FA\uFF0C\u663E\u793A\u7684\u65F6\u5019\u6B63\u5E38\u89E3\u91CA\u4E3A\u6362\u884C\u3002</p><p>\u53CC\u5F15\u53F7\u7684\u53E6\u4E00\u4E2A\u5E38\u89C1\u7684\u4F7F\u7528\u573A\u5408\u662F\uFF0C\u6587\u4EF6\u540D\u5305\u542B\u7A7A\u683C\u3002\u8FD9\u65F6\u5C31\u5FC5\u987B\u4F7F\u7528\u53CC\u5F15\u53F7\uFF0C\u5C06\u6587\u4EF6\u540D\u653E\u5728\u91CC\u9762\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ls</span> <span class="token string">&quot;two words.txt&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4E0A\u9762\u547D\u4EE4\u4E2D\uFF0C<code>two words.txt</code> \u662F\u4E00\u4E2A\u5305\u542B\u7A7A\u683C\u7684\u6587\u4EF6\u540D\uFF0C\u5426\u5219\u5C31\u4F1A\u88AB Bash \u5F53\u4F5C\u4E24\u4E2A\u6587\u4EF6\u3002</p><p>\u53CC\u5F15\u53F7\u4F1A\u539F\u6837\u4FDD\u5B58\u591A\u4F59\u7684\u7A7A\u683C\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;this is a     test&quot;</span>
this is a     <span class="token builtin class-name">test</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u53CC\u5F15\u53F7\u8FD8\u6709\u4E00\u4E2A\u4F5C\u7528\uFF0C\u5C31\u662F\u4FDD\u5B58\u539F\u59CB\u547D\u4EE4\u7684\u8F93\u51FA\u683C\u5F0F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5355\u884C\u8F93\u51FA</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">cal</span><span class="token variable">)</span></span>
\u4E00\u6708 <span class="token number">2020</span> \u65E5 \u4E00 \u4E8C \u4E09 \u56DB \u4E94 \u516D <span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span> <span class="token punctuation">..</span>. <span class="token number">31</span>

<span class="token comment"># \u539F\u59CB\u683C\u5F0F\u8F93\u51FA</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">cal</span><span class="token variable">)</span></span>&quot;</span>
      \u4E00\u6708 <span class="token number">2020</span>
\u65E5 \u4E00 \u4E8C \u4E09 \u56DB \u4E94 \u516D
          <span class="token number">1</span>  <span class="token number">2</span>  <span class="token number">3</span>  <span class="token number">4</span>
 <span class="token number">5</span>  <span class="token number">6</span>  <span class="token number">7</span>  <span class="token number">8</span>  <span class="token number">9</span> <span class="token number">10</span> <span class="token number">11</span>
<span class="token number">12</span> <span class="token number">13</span> <span class="token number">14</span> <span class="token number">15</span> <span class="token number">16</span> <span class="token number">17</span> <span class="token number">18</span>
<span class="token number">19</span> <span class="token number">20</span> <span class="token number">21</span> <span class="token number">22</span> <span class="token number">23</span> <span class="token number">24</span> <span class="token number">25</span>
<span class="token number">26</span> <span class="token number">27</span> <span class="token number">28</span> <span class="token number">29</span> <span class="token number">30</span> <span class="token number">31</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C\u5982\u679C <code>$(cal)</code> \u4E0D\u653E\u5728\u53CC\u5F15\u53F7\u4E4B\u4E2D\uFF0C<code>echo</code> \u5C31\u4F1A\u5C06\u6240\u6709\u7ED3\u679C\u4EE5\u5355\u884C\u8F93\u51FA\uFF0C\u4E22\u5F03\u4E86\u6240\u6709\u539F\u59CB\u7684\u683C\u5F0F\u3002</p><h2 id="here-\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#here-\u6587\u6863" aria-hidden="true">#</a> Here \u6587\u6863</h2><p>Here \u6587\u6863(here document)\u662F\u4E00\u79CD\u8F93\u5165\u591A\u884C\u5B57\u7B26\u4E32\u7684\u65B9\u6CD5\uFF0C\u683C\u5F0F\u5982\u4E0B\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&lt;&lt;</span> <span class="token string">token
text
token</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5B83\u7684\u683C\u5F0F\u5206\u6210\u5F00\u59CB\u6807\u8BB0(<code>&lt;&lt; token</code>)\u548C\u7ED3\u675F\u6807\u8BB0(<code>token</code>)\u3002\u5F00\u59CB\u6807\u8BB0\u662F\u4E24\u4E2A\u5C0F\u4E8E\u53F7 + Here \u6587\u6863\u7684\u540D\u79F0\uFF0C\u540D\u79F0\u53EF\u4EE5\u968F\u610F\u53D6\uFF0C\u540E\u9762\u5FC5\u987B\u662F\u4E00\u4E2A\u6362\u884C\u7B26\uFF1B\u7ED3\u675F\u6807\u8BB0\u662F\u5355\u72EC\u4E00\u884C\u9876\u683C\u5199\u7684 Here \u6587\u6863\u540D\u79F0\uFF0C\u5982\u679C\u4E0D\u662F\u9876\u683C\uFF0C\u7ED3\u675F\u6807\u8BB0\u4E0D\u8D77\u4F5C\u7528\u3002\u4E24\u8005\u4E4B\u95F4\u5C31\u662F\u591A\u884C\u5B57\u7B26\u4E32\u7684\u5185\u5BB9\u3002</p><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u901A\u8FC7 Here \u6587\u6863\u8F93\u51FA HTML \u4EE3\u7801\u7684\u4F8B\u5B50\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> <span class="token operator">&lt;&lt;</span> <span class="token string">_EOF_
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;
    The title of your page
    &lt;/title&gt;
&lt;/head&gt;

&lt;body&gt;
    Your page content goes here.
&lt;/body&gt;
&lt;/html&gt;
_EOF_</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>Here \u6587\u6863\u5185\u90E8\u4F1A\u53D1\u751F\u53D8\u91CF\u66FF\u6362\uFF0C\u540C\u65F6\u652F\u6301\u53CD\u659C\u6760\u8F6C\u4E49\uFF0C\u4F46\u662F\u4E0D\u652F\u6301\u901A\u914D\u7B26\u6269\u5C55\uFF0C\u53CC\u5F15\u53F7\u548C\u5355\u5F15\u53F7\u4E5F\u5931\u53BB\u8BED\u6CD5\u4F5C\u7528\uFF0C\u53D8\u6210\u4E86\u666E\u901A\u5B57\u7B26\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token assign-left variable">foo</span><span class="token operator">=</span><span class="token string">&#39;hello world&#39;</span>
$ <span class="token function">cat</span> <span class="token operator">&lt;&lt;</span> <span class="token string">_example_
<span class="token variable">$foo</span>
&quot;<span class="token variable">$foo</span>&quot;
&#39;<span class="token variable">$foo</span>&#39;
_example_</span>

hello world
<span class="token string">&quot;hello world&quot;</span>
<span class="token string">&#39;hello world&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C\u53D8\u91CF <code>$foo</code> \u53D1\u751F\u4E86\u66FF\u6362\uFF0C\u4F46\u662F\u53CC\u5F15\u53F7\u548C\u5355\u5F15\u53F7\u90FD\u539F\u6837\u8F93\u51FA\u4E86\uFF0C\u8868\u660E\u5B83\u4EEC\u5DF2\u7ECF\u5931\u53BB\u4E86\u5F15\u7528\u7684\u529F\u80FD\u3002</p><p>\u5982\u679C\u4E0D\u5E0C\u671B\u53D1\u751F\u53D8\u91CF\u66FF\u6362\uFF0C\u53EF\u4EE5\u628A Here \u6587\u6863\u7684\u5F00\u59CB\u6807\u8BB0\u653E\u5728\u5355\u5F15\u53F7\u4E4B\u4E2D\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token assign-left variable">foo</span><span class="token operator">=</span><span class="token string">&#39;hello world&#39;</span>
$ <span class="token function">cat</span> <span class="token operator">&lt;&lt;</span> <span class="token string">&#39;_example_&#39;
$foo
&quot;$foo&quot;
&#39;$foo&#39;
_example_</span>

<span class="token variable">$foo</span>
<span class="token string">&quot;<span class="token variable">$foo</span>&quot;</span>
<span class="token string">&#39;$foo&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0CHere \u6587\u6863\u7684\u5F00\u59CB\u6807\u8BB0(<code>_example_</code>)\u653E\u5728\u5355\u5F15\u53F7\u4E4B\u4E2D\uFF0C\u5BFC\u81F4\u53D8\u91CF\u66FF\u6362\u5931\u6548\u4E86\u3002</p><p>Here \u6587\u6863\u7684\u672C\u8D28\u662F\u91CD\u5B9A\u5411\uFF0C\u5B83\u5C06\u5B57\u7B26\u4E32\u91CD\u5B9A\u5411\u8F93\u51FA\u7ED9\u67D0\u4E2A\u547D\u4EE4\uFF0C\u76F8\u5F53\u4E8E\u5305\u542B\u4E86 <code>echo</code> \u547D\u4EE4\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">command</span> <span class="token operator">&lt;&lt;</span> <span class="token string">token
  string
token</span>

<span class="token comment"># \u7B49\u540C\u4E8E</span>

$ <span class="token builtin class-name">echo</span> string <span class="token operator">|</span> <span class="token builtin class-name">command</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u4E0A\u9762\u4EE3\u7801\u4E2D\uFF0CHere \u6587\u6863\u76F8\u5F53\u4E8E <code>echo</code> \u547D\u4EE4\u7684\u91CD\u5B9A\u5411\u3002</p><p>\u6240\u4EE5\uFF0CHere \u5B57\u7B26\u4E32\u53EA\u9002\u5408\u90A3\u4E9B\u53EF\u4EE5\u63A5\u53D7\u6807\u51C6\u8F93\u5165\u4F5C\u4E3A\u53C2\u6570\u7684\u547D\u4EE4\uFF0C\u5BF9\u4E8E\u5176\u4ED6\u547D\u4EE4\u65E0\u6548\uFF0C\u6BD4\u5982 <code>echo</code> \u547D\u4EE4\u5C31\u4E0D\u80FD\u7528 Here \u6587\u6863\u4F5C\u4E3A\u53C2\u6570\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token operator">&lt;&lt;</span> <span class="token string">_example_
hello
_example_</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E0D\u4F1A\u6709\u4EFB\u4F55\u8F93\u51FA\uFF0C\u56E0\u4E3A Here \u6587\u6863\u5BF9\u4E8E <code>echo</code> \u547D\u4EE4\u65E0\u6548\u3002</p><p>\u6B64\u5916\uFF0CHere \u6587\u6863\u4E5F\u4E0D\u80FD\u4F5C\u4E3A\u53D8\u91CF\u7684\u503C\uFF0C\u53EA\u80FD\u7528\u4E8E\u547D\u4EE4\u7684\u53C2\u6570\u3002</p><h2 id="here-\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#here-\u5B57\u7B26\u4E32" aria-hidden="true">#</a> Here \u5B57\u7B26\u4E32</h2><p>Here \u6587\u6863\u8FD8\u6709\u4E00\u4E2A\u53D8\u4F53\uFF0C\u53EB\u505A Here \u5B57\u7B26\u4E32(Here string)\uFF0C\u4F7F\u7528\u4E09\u4E2A\u5C0F\u4E8E\u53F7(<code>&lt;&lt;&lt;</code>)\u8868\u793A\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&lt;&lt;&lt;</span> string
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5B83\u7684\u4F5C\u7528\u662F\u5C06\u5B57\u7B26\u4E32\u901A\u8FC7\u6807\u51C6\u8F93\u5165\uFF0C\u4F20\u9012\u7ED9\u547D\u4EE4\u3002</p><p>\u6709\u4E9B\u547D\u4EE4\u76F4\u63A5\u63A5\u53D7\u7ED9\u5B9A\u7684\u53C2\u6570\uFF0C\u4E0E\u901A\u8FC7\u6807\u51C6\u8F93\u5165\u63A5\u53D7\u53C2\u6570\uFF0C\u7ED3\u679C\u662F\u4E0D\u4E00\u6837\u7684\u3002\u6240\u4EE5\u624D\u6709\u4E86\u8FD9\u4E2A\u8BED\u6CD5\uFF0C\u4F7F\u5F97\u5C06\u5B57\u7B26\u4E32\u901A\u8FC7\u6807\u51C6\u8F93\u5165\u4F20\u9012\u7ED9\u547D\u4EE4\u66F4\u65B9\u4FBF\uFF0C\u6BD4\u5982 <code>cat</code> \u547D\u4EE4\u53EA\u63A5\u53D7\u6807\u51C6\u8F93\u5165\u4F20\u5165\u7684\u5B57\u7B26\u4E32\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> <span class="token operator">&lt;&lt;&lt;</span> <span class="token string">&#39;hi there&#39;</span>
<span class="token comment"># \u7B49\u540C\u4E8E</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;hi there&#39;</span> <span class="token operator">|</span> <span class="token function">cat</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4E0A\u9762\u7684\u7B2C\u4E00\u79CD\u8BED\u6CD5\u4F7F\u7528\u4E86 Here \u5B57\u7B26\u4E32\uFF0C\u8981\u6BD4\u7B2C\u4E8C\u79CD\u8BED\u6CD5\u770B\u4E0A\u53BB\u8BED\u4E49\u66F4\u597D\uFF0C\u4E5F\u66F4\u7B80\u6D01\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ md5sum <span class="token operator">&lt;&lt;&lt;</span> <span class="token string">&#39;ddd&#39;</span>
<span class="token comment"># \u7B49\u540C\u4E8E</span>
$ <span class="token builtin class-name">echo</span> <span class="token string">&#39;ddd&#39;</span> <span class="token operator">|</span> md5sum
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4E0A\u9762\u4F8B\u5B50\u4E2D\uFF0C<code>md5sum</code> \u547D\u4EE4\u53EA\u80FD\u63A5\u53D7\u6807\u51C6\u8F93\u5165\u4F5C\u4E3A\u53C2\u6570\uFF0C\u4E0D\u80FD\u76F4\u63A5\u5C06\u5B57\u7B26\u4E32\u653E\u5728\u547D\u4EE4\u540E\u9762\uFF0C\u4F1A\u88AB\u5F53\u4F5C\u6587\u4EF6\u540D\uFF0C\u5373 <code>md5sum ddd</code> \u91CC\u9762\u7684 <code>ddd</code> \u4F1A\u88AB\u89E3\u91CA\u6210\u6587\u4EF6\u540D\u3002\u8FD9\u65F6\u5C31\u53EF\u4EE5\u7528 Here \u5B57\u7B26\u4E32\uFF0C\u5C06\u5B57\u7B26\u4E32\u4F20\u7ED9 <code>md5sum</code> \u547D\u4EE4\u3002</p>`,75);function p(l,c){return e}var o=s(a,[["render",p]]);export{o as default};
