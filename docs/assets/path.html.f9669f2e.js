import{_ as s,f as n}from"./app.b0675cc3.js";const a={},e=n(`<h1 id="\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u73AF\u5883\u53D8\u91CF</h1><h2 id="\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF" aria-hidden="true">#</a> \u53D8\u91CF</h2><p>\u53D8\u91CF\u662F\u8BA1\u7B97\u673A\u7CFB\u7EDF\u7528\u4E8E\u4FDD\u5B58\u53EF\u53D8\u503C\u7684\u6570\u636E\u7C7B\u578B\uFF0C\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7\u53D8\u91CF\u540D\u79F0\u6765\u63D0\u53D6\u5230\u5BF9\u5E94\u7684\u53D8\u91CF\u503C\u3002\u5728 Linux \u7CFB\u7EDF\u4E2D\uFF0C\u73AF\u5883\u53D8\u91CF\u662F\u7528\u6765\u5B9A\u4E49\u7CFB\u7EDF\u8FD0\u884C\u73AF\u5883\u7684\u4E00\u4E9B\u53C2\u6570\uFF0C\u6BD4\u5982\u6BCF\u4E2A\u7528\u6237\u4E0D\u540C\u7684\u5BB6\u76EE\u5F55 (HOME)\u3001\u90AE\u4EF6\u5B58\u653E\u4F4D\u7F6E (MAIL)\u7B49\u3002 \u503C\u5F97\u4E00\u63D0\u7684\u662F\uFF0CLinux \u7CFB\u7EDF\u4E2D\u73AF\u5883\u53D8\u91CF\u7684\u540D\u79F0\u4E00\u822C\u90FD\u662F\u5927\u5199\u7684\uFF0C\u8FD9\u662F\u4E00\u79CD\u7EA6\u5B9A\u4FD7\u6210\u7684\u89C4\u8303\u3002</p><p>\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 env \u547D\u4EE4\u6765\u67E5\u770B\u5230 Linux \u7CFB\u7EDF\u4E2D\u6240\u6709\u7684\u73AF\u5883\u53D8\u91CF\uFF0C\u6267\u884C\u547D\u4EE4\u5982\u4E0B:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># env</span>
<span class="token assign-left variable"><span class="token environment constant">ORBIT_SOCKETDIR</span></span><span class="token operator">=</span>/tmp/orbit-root
<span class="token assign-left variable"><span class="token environment constant">HOSTNAME</span></span><span class="token operator">=</span>livecd.centos
<span class="token assign-left variable">GIO_LAUNCHED_DESKTOP_FILE_PID</span><span class="token operator">=</span><span class="token number">2065</span>
<span class="token assign-left variable"><span class="token environment constant">TERM</span></span><span class="token operator">=</span>xterm
<span class="token assign-left variable"><span class="token environment constant">SHELL</span></span><span class="token operator">=</span>/bin/bash
<span class="token punctuation">..</span><span class="token punctuation">..</span><span class="token punctuation">..</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Linux \u7CFB\u7EDF\u80FD\u591F\u6B63\u5E38\u8FD0\u884C\u5E76\u4E14\u4E3A\u7528\u6237\u63D0\u4F9B\u670D\u52A1\uFF0C\u9700\u8981\u6570\u767E\u4E2A\u73AF\u5883\u53D8\u91CF\u6765\u534F\u540C\u5DE5\u4F5C\uFF0C\u4F46\u662F\uFF0C\u6211\u4EEC\u6CA1\u6709\u5FC5\u8981\u9010\u4E00\u5B66\u4E60\u6BCF\u4E2A\u53D8\u91CF\u3002\u5E38\u89C1\u53D8\u91CF\u89C1\u4E0B\u8868:</p><table><thead><tr><th>\u73AF\u5883\u53D8\u91CF\u540D\u79F0</th><th>\u4F5C\u7528</th></tr></thead><tbody><tr><td>HOME</td><td>\u7528\u6237\u7684\u4E3B\u76EE\u5F55(\u4E5F\u79F0\u5BB6\u76EE\u5F55)</td></tr><tr><td>SHELL</td><td>\u7528\u6237\u4F7F\u7528\u7684 Shell \u89E3\u91CA\u5668\u540D\u79F0</td></tr><tr><td>PATH</td><td>\u5B9A\u4E49\u547D\u4EE4\u884C\u89E3\u91CA\u5668\u641C\u7D22\u7528\u6237\u6267\u884C\u547D\u4EE4\u7684\u8DEF\u5F84</td></tr><tr><td>EDITOR</td><td>\u7528\u6237\u9ED8\u8BA4\u7684\u6587\u672C\u89E3\u91CA\u5668</td></tr><tr><td>RANDOM</td><td>\u751F\u6210\u4E00\u4E2A\u968F\u673A\u6570\u5B57</td></tr><tr><td>LANG</td><td>\u7CFB\u7EDF\u8BED\u8A00\u3001\u8BED\u7CFB\u540D\u79F0</td></tr><tr><td>HISTSIZE</td><td>\u8F93\u51FA\u7684\u5386\u53F2\u547D\u4EE4\u8BB0\u5F55\u6761\u6570</td></tr><tr><td>HISTFILESIZE</td><td>\u4FDD\u5B58\u7684\u5386\u53F2\u547D\u4EE4\u8BB0\u5F55\u6761\u6570</td></tr><tr><td>PS1</td><td>Bash \u89E3\u91CA\u5668\u7684\u63D0\u793A\u7B26</td></tr><tr><td>MAIL</td><td>\u90AE\u4EF6\u4FDD\u5B58\u8DEF\u5F84</td></tr></tbody></table><p>Linux \u4F5C\u4E3A\u4E00\u4E2A\u591A\u7528\u6237\u591A\u4EFB\u52A1\u7684\u64CD\u4F5C\u7CFB\u7EDF\uFF0C\u80FD\u591F\u4E3A\u6BCF\u4E2A\u7528\u6237\u63D0\u4F9B\u72EC\u7ACB\u7684\u3001\u5408\u9002\u7684\u5DE5\u4F5C\u8FD0\u884C\u73AF\u5883\uFF0C\u56E0\u6B64\uFF0C\u4E00\u4E2A\u76F8\u540C\u7684\u73AF\u5883\u53D8\u91CF\u4F1A\u56E0\u4E3A\u7528\u6237\u8EAB\u4EFD\u7684\u4E0D\u540C\u800C\u5177\u6709\u4E0D\u540C\u7684\u503C\u3002</p><p>\u4F8B\u5982\uFF0C\u4F7F\u7528\u4E0B\u8FF0\u547D\u4EE4\u6765\u67E5\u770B <code>HOME</code> \u53D8\u91CF\u5728\u4E0D\u540C\u7528\u6237\u8EAB\u4EFD\u4E0B\u90FD\u6709\u54EA\u4E9B\u503C:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># echo $HOME</span>
/root
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># su - user1  &lt;--\u5207\u6362\u5230 user1 \u7528\u6237\u8EAB\u4EFD</span>
<span class="token punctuation">[</span>user1@localhost ~<span class="token punctuation">]</span>$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$HOME</span>
/home/user1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u8FD9\u91CC\u7684 <code>su</code> \u547D\u4EE4\u53EF\u4EE5\u4E34\u65F6\u5207\u6362\u7528\u6237\u8EAB\u4EFD\uFF0C\u6B64\u547D\u4EE4\u7684\u5177\u4F53\u7528\u6CD5\u4F1A\u5728\u540E\u7EED\u7AE0\u8282\u505A\u8BE6\u7EC6\u4ECB\u7ECD\u3002</p><p>\u5176\u5B9E\uFF0C\u73AF\u5883\u53D8\u91CF\u662F\u7531\u56FA\u5B9A\u7684\u53D8\u91CF\u540D\u4E0E\u7528\u6237\u6216\u7CFB\u7EDF\u8BBE\u7F6E\u7684\u53D8\u91CF\u503C\u4E24\u90E8\u5206\u7EC4\u6210\u7684\uFF0C\u6211\u4EEC\u5B8C\u5168\u53EF\u4EE5\u81EA\u884C\u521B\u5EFA\u73AF\u5883\u53D8\u91CF\u6765\u6EE1\u8DB3\u5DE5\u4F5C\u9700\u6C42\u3002\u4F8B\u5982\uFF0C\u8BBE\u7F6E\u4E00\u4E2A\u540D\u79F0\u4E3A <code>WORKDIR</code> \u7684\u73AF\u5883\u53D8\u91CF\uFF0C\u65B9\u4FBF\u7528\u6237\u66F4\u8F7B\u677E\u5730\u8FDB\u5165\u4E00\u4E2A\u5C42\u6B21\u8F83\u6DF1\u7684\u76EE\u5F55\uFF0C\u6267\u884C\u547D\u4EE4\u5982\u4E0B:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mkdir /home/work1</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># WORKDIR=/home/work1</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># cd $WORKDIR</span>
<span class="token punctuation">[</span>root@localhost work1<span class="token punctuation">]</span><span class="token comment"># pwd</span>
/home/work1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4F46\u662F\uFF0C\u8FD9\u6837\u7684\u73AF\u5883\u53D8\u91CF\u4E0D\u5177\u6709\u5168\u5C40\u6027\uFF0C\u4F5C\u7528\u8303\u56F4\u4E5F\u6709\u9650\uFF0C\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4E0D\u80FD\u88AB\u5176\u4ED6\u7528\u6237\u4F7F\u7528\u3002\u5982\u679C\u5DE5\u4F5C\u9700\u8981\uFF0C\u53EF\u4EE5\u4F7F\u7528 <code>export</code> \u547D\u4EE4\u5C06\u5176\u63D0\u5347\u4E3A\u5168\u5C40\u73AF\u5883\u53D8\u91CF\uFF0C\u8FD9\u6837\u5176\u4ED6\u7528\u6237\u5C31\u53EF\u4EE5\u4F7F\u7528\u5B83\u4E86:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost work1<span class="token punctuation">]</span><span class="token comment"># su user1  &lt;-- \u5207\u6362\u5230 user1\uFF0C\u53D1\u73B0\u65E0\u6CD5\u4F7F\u7528 WORKDIR \u81EA\u5B9A\u4E49\u53D8\u91CF</span>
<span class="token punctuation">[</span>user1@localhost ~<span class="token punctuation">]</span>$ <span class="token builtin class-name">cd</span> <span class="token variable">$WORKDIR</span>
<span class="token punctuation">[</span>user1@localhost ~<span class="token punctuation">]</span>$ <span class="token builtin class-name">echo</span> <span class="token variable">$WORKDIR</span>

<span class="token punctuation">[</span>user1@localhost ~<span class="token punctuation">]</span>$ <span class="token builtin class-name">exit</span> <span class="token operator">&lt;</span>--\u9000\u51FAuser1\u8EAB\u4EFD
<span class="token punctuation">[</span>root@localhost work1<span class="token punctuation">]</span><span class="token comment"># export WORKDIR</span>
<span class="token punctuation">[</span>root@localhost work1<span class="token punctuation">]</span><span class="token comment"># su user1</span>
<span class="token punctuation">[</span>user1@localhost ~<span class="token punctuation">]</span>$ <span class="token builtin class-name">cd</span> <span class="token variable">$WORKDIR</span>
<span class="token punctuation">[</span>user1@localhost work1<span class="token punctuation">]</span>$ <span class="token builtin class-name">pwd</span>
/home/work1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="path" tabindex="-1"><a class="header-anchor" href="#path" aria-hidden="true">#</a> path</h2><p>\u5728\u8BB2\u89E3 PATH \u73AF\u5883\u53D8\u91CF\u4E4B\u524D\uFF0C\u9996\u5148\u4ECB\u7ECD\u4E00\u4E0B <code>which</code> \u547D\u4EE4\uFF0C\u5B83\u7528\u4E8E\u67E5\u627E\u67D0\u4E2A\u547D\u4EE4\u6240\u5728\u7684\u7EDD\u5BF9\u8DEF\u5F84\u3002\u4F8B\u5982:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># which rm</span>
/bin/rm
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># which rmdir</span>
/bin/rmdir
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># which ls</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">ls</span><span class="token operator">=</span><span class="token string">&#39;ls --color=auto&#39;</span>
        /bin/ls
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u6CE8\u610F\uFF0C<code>ls</code> \u662F\u4E00\u4E2A\u76F8\u5BF9\u7279\u6B8A\u7684\u547D\u4EE4\uFF0C\u5B83\u4F7F\u7528 alias \u547D\u4EE4\u505A\u4E86\u522B\u540D\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u6211\u4EEC\u5E38\u7528\u7684 <code>ls</code> \u5B9E\u9645\u4E0A\u6267\u884C\u7684\u662F <code>ls --color=auto</code>\u3002</p><p>\u901A\u8FC7\u4F7F\u7528 <code>which</code> \u547D\u4EE4\uFF0C\u53EF\u4EE5\u67E5\u627E\u5404\u4E2A\u5916\u90E8\u547D\u4EE4(\u548C Shell \u5185\u7F6E\u547D\u4EE4\u76F8\u5BF9)\u6240\u5728\u7684\u7EDD\u5BF9\u8DEF\u5F84\u3002\u5B66\u5230\u8FD9\u91CC\uFF0C\u8BFB\u8005\u662F\u5426\u6709\u8FD9\u6837\u4E00\u4E2A\u7591\u95EE\uFF0C\u4E3A\u4EC0\u4E48\u524D\u9762\u5728\u4F7F\u7528 <code>rm</code>\u3001<code>rmdir</code>\u3001<code>ls</code> \u7B49\u547D\u4EE4\u65F6\uFF0C\u65E0\u8BBA\u5F53\u524D\u4F4D\u4E8E\u54EA\u4E2A\u76EE\u5F55\uFF0C\u90FD\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\uFF0C\u800C\u65E0\u9700\u6307\u660E\u547D\u4EE4\u7684\u6267\u884C\u6587\u4EF6\u6240\u5728\u7684\u4F4D\u7F6E (\u7EDD\u5BF9\u8DEF\u5F84) \u5462? \u5176\u5B9E\uFF0C\u8FD9\u662F PATH \u73AF\u5883\u53D8\u91CF\u5728\u8D77\u4F5C\u7528\u3002</p><p>\u9996\u5148\uFF0C\u6267\u884C\u5982\u4E0B\u547D\u4EE4:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># echo $PATH</span>
/usr/local/sbin:/usr/sbin:/sbin:/usr/local/bin:/usr/bin:/bin:/root/bin
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u8FD9\u91CC\u7684 <code>echo</code> \u547D\u4EE4\u7528\u6765\u8F93\u51FA PATH \u73AF\u5883\u53D8\u91CF\u7684\u503C(\u8FD9\u91CC\u7684 <code>$</code> \u662F PATH \u7684\u524D\u7F00\u7B26\u53F7)\uFF0CPATH \u73AF\u5883\u53D8\u91CF\u7684\u5185\u5BB9\u662F\u7531\u4E00\u5806\u76EE\u5F55\u7EC4\u6210\u7684\uFF0C\u5404\u76EE\u5F55\u4E4B\u95F4\u7528\u5192\u53F7 <code>:</code> \u9694\u5F00\u3002\u5F53\u6267\u884C\u67D0\u4E2A\u547D\u4EE4\u65F6\uFF0CLinux \u4F1A\u4F9D\u7167 PATH \u4E2D\u5305\u542B\u7684\u76EE\u5F55\u4F9D\u6B21\u641C\u5BFB\u8BE5\u547D\u4EE4\u7684\u53EF\u6267\u884C\u6587\u4EF6\uFF0C\u4E00\u65E6\u627E\u5230\uFF0C\u5373\u6B63\u5E38\u6267\u884C\uFF1B\u53CD\u4E4B\uFF0C\u5219\u63D0\u793A\u65E0\u6CD5\u627E\u5230\u8BE5\u547D\u4EE4\u3002 \u5982\u679C\u5728 PATH \u5305\u542B\u7684\u76EE\u5F55\u4E2D\uFF0C\u6709\u591A\u4E2A\u76EE\u5F55\u90FD\u5305\u542B\u67D0\u547D\u4EE4\u7684\u53EF\u6267\u884C\u6587\u4EF6\uFF0C\u90A3\u4E48\u4F1A\u6267\u884C\u5148\u641C\u7D22\u5230\u7684\u53EF\u6267\u884C\u6587\u4EF6\u3002</p><p>\u4ECE\u6267\u884C\u7ED3\u679C\u4E2D\u53EF\u4EE5\u770B\u5230\uFF0C<code>/bin</code> \u76EE\u5F55\u5DF2\u7ECF\u5305\u542B\u5728 PATH \u73AF\u5883\u53D8\u91CF\u4E2D\uFF0C\u56E0\u6B64\u5728\u4F7F\u7528\u7C7B\u4F3C <code>rm</code>\u3001<code>rmdir</code>\u3001<code>ls</code> \u7B49\u547D\u4EE4\u65F6\uFF0C\u5373\u4FBF\u76F4\u63A5\u4F7F\u7528\u5176\u547D\u4EE4\u540D\uFF0CLinux \u4E5F\u53EF\u4EE5\u627E\u5230\u8BE5\u547D\u4EE4\u3002</p><p>\u4E3A\u4E86\u5370\u8BC1\u4EE5\u4E0A\u89C2\u70B9\uFF0C\u4E0B\u9762\u4E3E\u4E2A\u53CD\u4F8B\uFF0C\u5982\u679C\u6211\u4EEC\u5C06 <code>ls</code> \u547D\u4EE4\u79FB\u52A8\u5230 <code>/root</code> \u76EE\u5F55\u4E0B\uFF0C\u7531\u4E8E PATH \u73AF\u5883\u53D8\u91CF\u4E2D\u6CA1\u6709\u5305\u542B\u6B64\u76EE\u5F55\uFF0C\u6240\u6709\u5F53\u76F4\u63A5\u4F7F\u7528 <code>ls</code> \u547D\u4EE4\u540D\u6267\u884C\u65F6\uFF0CLinux \u5C06\u65E0\u6CD5\u627E\u5230\u6B64\u547D\u4EE4\u7684\u53EF\u6267\u884C\u6587\u4EF6\uFF0C\u5E76\u63D0\u793A <code>No such file or directory</code>\uFF0C\u793A\u4F8B\u547D\u4EE4\u5982\u4E0B:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mv /bin/ls /root</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls</span>
bash: /bin/ls: No such <span class="token function">file</span> or directory
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6B64\u65F6\uFF0C\u5982\u679C\u4ECD\u60F3\u4F7F\u7528 <code>ls</code> \u547D\u4EE4\uFF0C\u6709 2 \u79CD\u65B9\u6CD5\uFF0C\u4E00\u79CD\u662F\u76F4\u63A5\u5C06 <code>/root</code> \u6DFB\u52A0\u5230 PATH \u73AF\u5883\u53D8\u91CF\u4E2D\uFF0C\u4F8B\u5982:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># PATH=$PATH:/root</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># echo $PATH</span>
/usr/local/sbin:/usr/sbin:/usr/local/bin:/usr/bin:/bin:/root/bin:/root
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># ls</span>
Desktop    Downloads    Music    post-install     Public    Videos
Documents  <span class="token function">ls</span>           Pictures post-install.org Templates
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u6CE8\u610F\uFF0C\u8FD9\u79CD\u65B9\u5F0F\u53EA\u662F\u4E34\u65F6\u6709\u6548\uFF0C\u4E00\u65E6\u9000\u51FA\u4E0B\u6B21\u518D\u767B\u9646\u7684\u65F6\u5019\uFF0C<code>$PATH</code> \u5C31\u6062\u590D\u6210\u4E86\u9ED8\u8BA4\u503C\u3002</p><p>\u53E6\u4E00\u79CD\u65B9\u6CD5\u662F\u4EE5\u7EDD\u5BF9\u8DEF\u5F84\u7684\u65B9\u5F0F\u4F7F\u7528\u6B64\u547D\u4EE4\uFF0C\u4F8B\u5982:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># /root/ls</span>
Desktop    Downloads    Music    post-install     Public    Videos
Documents  <span class="token function">ls</span>           Pictures post-install.org Templates
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4E3A\u4E86\u4E0D\u5F71\u54CD\u7CFB\u7EDF\u7684\u6B63\u5E38\u4F7F\u7528\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u5927\u5BB6\u5C06\u79FB\u52A8\u540E\u7684 <code>ls</code> \u6587\u4EF6\u8FD8\u539F\uFF0C\u547D\u4EE4\u5982\u4E0B:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># mv /root/ls /bin</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,33);function t(o,p){return e}var l=s(a,[["render",t]]);export{l as default};
