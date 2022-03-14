import{_ as n,f as s}from"./app.b0675cc3.js";const a={},p=s(`<p>\u9762\u5411\u5BF9\u8C61\u6700\u91CD\u8981\u7684\u6982\u5FF5\u5C31\u662F\u7C7B (Class) \u548C\u5B9E\u4F8B (Instance) \uFF0C\u5FC5\u987B\u7262\u8BB0\u7C7B\u662F\u62BD\u8C61\u7684\u6A21\u677F\uFF0C\u6BD4\u5982 <code>Student</code> \u7C7B\uFF0C\u800C\u5B9E\u4F8B\u662F\u6839\u636E\u7C7B\u521B\u5EFA\u51FA\u6765\u7684\u4E00\u4E2A\u4E2A\u5177\u4F53\u7684\u201C\u5BF9\u8C61\u201D\uFF0C\u6BCF\u4E2A\u5BF9\u8C61\u90FD\u62E5\u6709\u76F8\u540C\u7684\u65B9\u6CD5\uFF0C\u4F46\u5404\u81EA\u7684\u6570\u636E\u53EF\u80FD\u4E0D\u540C\u3002</p><p>\u4ECD\u4EE5 <code>Student</code> \u7C7B\u4E3A\u4F8B\uFF0C\u5728 Python \u4E2D\uFF0C\u5B9A\u4E49\u7C7B\u662F\u901A\u8FC7 class \u5173\u952E\u5B57:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>class \u540E\u9762\u7D27\u63A5\u7740\u662F\u7C7B\u540D\uFF0C\u5373 <code>Student</code>\uFF0C\u7C7B\u540D\u901A\u5E38\u662F\u5927\u5199\u5F00\u5934\u7684\u5355\u8BCD\uFF0C\u7D27\u63A5\u7740\u662F(object)\uFF0C\u8868\u793A\u8BE5\u7C7B\u662F\u4ECE\u54EA\u4E2A\u7C7B\u7EE7\u627F\u4E0B\u6765\u7684\uFF0C\u7EE7\u627F\u7684\u6982\u5FF5\u6211\u4EEC\u540E\u9762\u518D\u8BB2\uFF0C\u901A\u5E38\uFF0C\u5982\u679C\u6CA1\u6709\u5408\u9002\u7684\u7EE7\u627F\u7C7B\uFF0C\u5C31\u4F7F\u7528 object \u7C7B\uFF0C\u8FD9\u662F\u6240\u6709\u7C7B\u6700\u7EC8\u90FD\u4F1A\u7EE7\u627F\u7684\u7C7B\u3002</p><p>\u5B9A\u4E49\u597D\u4E86 <code>Student</code> \u7C7B\uFF0C\u5C31\u53EF\u4EE5\u6839\u636E <code>Student</code> \u7C7B\u521B\u5EFA\u51FA <code>Student</code> \u7684\u5B9E\u4F8B\uFF0C\u521B\u5EFA\u5B9E\u4F8B\u662F\u901A\u8FC7 <code>className()</code> \u5B9E\u73B0\u7684:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> bart <span class="token operator">=</span> Student<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> bart
<span class="token operator">&lt;</span>__main__<span class="token punctuation">.</span>Student <span class="token builtin">object</span> at <span class="token number">0x10a67a590</span><span class="token operator">&gt;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> Student
<span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">&#39;__main__.Student&#39;</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u53D8\u91CF <code>bart</code> \u6307\u5411\u7684\u5C31\u662F\u4E00\u4E2A Student \u7684\u5B9E\u4F8B\uFF0C\u540E\u9762\u7684 <code>0x10a67a590</code> \u662F\u5185\u5B58\u5730\u5740\uFF0C\u6BCF\u4E2A object \u7684\u5730\u5740\u90FD\u4E0D\u4E00\u6837\uFF0C\u800C <code>Student</code> \u672C\u8EAB\u5219\u662F\u4E00\u4E2A\u7C7B\u3002</p><p>\u53EF\u4EE5\u81EA\u7531\u5730\u7ED9\u4E00\u4E2A\u5B9E\u4F8B\u53D8\u91CF\u7ED1\u5B9A\u5C5E\u6027\uFF0C\u6BD4\u5982\uFF0C\u7ED9\u5B9E\u4F8B <code>bart</code> \u7ED1\u5B9A\u4E00\u4E2A <code>name</code> \u5C5E\u6027:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> bart<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;Bart Simpson&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> bart<span class="token punctuation">.</span>name
<span class="token string">&#39;Bart Simpson&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u7531\u4E8E\u7C7B\u53EF\u4EE5\u8D77\u5230\u6A21\u677F\u7684\u4F5C\u7528\uFF0C\u56E0\u6B64\uFF0C\u53EF\u4EE5\u5728\u521B\u5EFA\u5B9E\u4F8B\u7684\u65F6\u5019\uFF0C\u628A\u4E00\u4E9B\u6211\u4EEC\u8BA4\u4E3A\u5FC5\u987B\u7ED1\u5B9A\u7684\u5C5E\u6027\u5F3A\u5236\u586B\u5199\u8FDB\u53BB\u3002\u901A\u8FC7\u5B9A\u4E49\u4E00\u4E2A\u7279\u6B8A\u7684 <strong>init</strong> \u65B9\u6CD5\uFF0C\u5728\u521B\u5EFA\u5B9E\u4F8B\u7684\u65F6\u5019\uFF0C\u5C31\u628A <code>name</code>\uFF0C<code>score</code> \u7B49\u5C5E\u6027\u7ED1\u4E0A\u53BB:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> score<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
        self<span class="token punctuation">.</span>score <span class="token operator">=</span> score
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u7279\u6B8A\u65B9\u6CD5 <code>__init__</code> \u524D\u540E\u5206\u522B\u6709\u4E24\u4E2A\u4E0B\u5212\u7EBF!!!</p></div><p>\u7531\u4E8E <strong>init</strong> \u65B9\u6CD5\u7684\u7B2C\u4E00\u4E2A\u53C2\u6570\u6C38\u8FDC\u662F <code>self</code>\uFF0C\u8868\u793A\u521B\u5EFA\u7684\u5B9E\u4F8B\u672C\u8EAB\uFF0C\u56E0\u6B64\uFF0C\u5728 <strong>init</strong> \u65B9\u6CD5\u5185\u90E8\uFF0C\u5C31\u53EF\u4EE5\u628A\u5404\u79CD\u5C5E\u6027\u7ED1\u5B9A\u5230 <code>self</code>\uFF0C\u56E0\u4E3A <code>self</code> \u5C31\u6307\u5411\u521B\u5EFA\u7684\u5B9E\u4F8B\u672C\u8EAB\u3002</p><p>\u6709\u4E86 <strong>init</strong> \u65B9\u6CD5\uFF0C\u5728\u521B\u5EFA\u5B9E\u4F8B\u7684\u65F6\u5019\uFF0C\u5C31\u4E0D\u80FD\u4F20\u5165\u7A7A\u7684\u53C2\u6570\u4E86\uFF0C\u5FC5\u987B\u4F20\u5165\u4E0E <strong>init</strong> \u65B9\u6CD5\u5339\u914D\u7684\u53C2\u6570\uFF0C\u4F46 self \u4E0D\u9700\u8981\u4F20\uFF0CPython \u89E3\u91CA\u5668\u81EA\u5DF1\u4F1A\u628A\u5B9E\u4F8B\u53D8\u91CF\u4F20\u8FDB\u53BB:</p><div class="language-pt ext-pt line-numbers-mode"><pre class="language-pt"><code>&gt;&gt;&gt; bart = Student(&#39;Bart Simpson&#39;, 59)
&gt;&gt;&gt; bart.name
&#39;Bart Simpson&#39;
&gt;&gt;&gt; bart.score
59
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u548C\u666E\u901A\u7684\u51FD\u6570\u76F8\u6BD4\uFF0C\u5728\u7C7B\u4E2D\u5B9A\u4E49\u7684\u51FD\u6570\u53EA\u6709\u4E00\u70B9\u4E0D\u540C\uFF0C\u5C31\u662F\u7B2C\u4E00\u4E2A\u53C2\u6570\u6C38\u8FDC\u662F\u5B9E\u4F8B\u53D8\u91CF self\uFF0C\u5E76\u4E14\uFF0C\u8C03\u7528\u65F6\uFF0C\u4E0D\u7528\u4F20\u9012\u8BE5\u53C2\u6570\u3002\u9664\u6B64\u4E4B\u5916\uFF0C\u7C7B\u7684\u65B9\u6CD5\u548C\u666E\u901A\u51FD\u6570\u6CA1\u6709\u4EC0\u4E48\u533A\u522B\uFF0C\u6240\u4EE5\uFF0C\u60A8\u4ECD\u7136\u53EF\u4EE5\u7528\u9ED8\u8BA4\u53C2\u6570\u3001\u53EF\u53D8\u53C2\u6570\u3001\u5173\u952E\u5B57\u53C2\u6570\u548C\u547D\u540D\u5173\u952E\u5B57\u53C2\u6570\u3002</p><h2 id="\u6570\u636E\u5C01\u88C5" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5C01\u88C5" aria-hidden="true">#</a> \u6570\u636E\u5C01\u88C5</h2><p>\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\u7684\u4E00\u4E2A\u91CD\u8981\u7279\u70B9\u5C31\u662F\u6570\u636E\u5C01\u88C5\u3002\u5728\u4E0A\u9762\u7684 Student \u7C7B\u4E2D\uFF0C\u6BCF\u4E2A\u5B9E\u4F8B\u5C31\u62E5\u6709\u5404\u81EA\u7684 name \u548C score \u8FD9\u4E9B\u6570\u636E\u3002\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u51FD\u6570\u6765\u8BBF\u95EE\u8FD9\u4E9B\u6570\u636E\uFF0C\u6BD4\u5982\u6253\u5370\u4E00\u4E2A\u5B66\u751F\u7684\u6210\u7EE9:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">def</span> <span class="token function">print_score</span><span class="token punctuation">(</span>std<span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;%s: %s&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>std<span class="token punctuation">.</span>name<span class="token punctuation">,</span> std<span class="token punctuation">.</span>score<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> print_score<span class="token punctuation">(</span>bart<span class="token punctuation">)</span>
Bart Simpson<span class="token punctuation">:</span> <span class="token number">59</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u4F46\u662F\uFF0C\u65E2\u7136 Student \u5B9E\u4F8B\u672C\u8EAB\u5C31\u62E5\u6709\u8FD9\u4E9B\u6570\u636E\uFF0C\u8981\u8BBF\u95EE\u8FD9\u4E9B\u6570\u636E\uFF0C\u5C31\u6CA1\u6709\u5FC5\u8981\u4ECE\u5916\u9762\u7684\u51FD\u6570\u53BB\u8BBF\u95EE\uFF0C\u53EF\u4EE5\u76F4\u63A5\u5728 Student \u7C7B\u7684\u5185\u90E8\u5B9A\u4E49\u8BBF\u95EE\u6570\u636E\u7684\u51FD\u6570\uFF0C\u8FD9\u6837\uFF0C\u5C31\u628A\u201C\u6570\u636E\u201D\u7ED9\u5C01\u88C5\u8D77\u6765\u4E86\u3002\u8FD9\u4E9B\u5C01\u88C5\u6570\u636E\u7684\u51FD\u6570\u662F\u548C Student \u7C7B\u672C\u8EAB\u662F\u5173\u8054\u8D77\u6765\u7684\uFF0C\u6211\u4EEC\u79F0\u4E4B\u4E3A\u7C7B\u7684\u65B9\u6CD5:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> score<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
        self<span class="token punctuation">.</span>score <span class="token operator">=</span> score

    <span class="token keyword">def</span> <span class="token function">print_score</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;%s: %s&#39;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>self<span class="token punctuation">.</span>name<span class="token punctuation">,</span> self<span class="token punctuation">.</span>score<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u8981\u5B9A\u4E49\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u9664\u4E86\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F self \u5916\uFF0C\u5176\u4ED6\u548C\u666E\u901A\u51FD\u6570\u4E00\u6837\u3002\u8981\u8C03\u7528\u4E00\u4E2A\u65B9\u6CD5\uFF0C\u53EA\u9700\u8981\u5728\u5B9E\u4F8B\u53D8\u91CF\u4E0A\u76F4\u63A5\u8C03\u7528\uFF0C\u9664\u4E86 self \u4E0D\u7528\u4F20\u9012\uFF0C\u5176\u4ED6\u53C2\u6570\u6B63\u5E38\u4F20\u5165:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> bart<span class="token punctuation">.</span>print_score<span class="token punctuation">(</span><span class="token punctuation">)</span>
Bart Simpson<span class="token punctuation">:</span> <span class="token number">59</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u8FD9\u6837\u4E00\u6765\uFF0C\u6211\u4EEC\u4ECE\u5916\u90E8\u770B Student \u7C7B\uFF0C\u5C31\u53EA\u9700\u8981\u77E5\u9053\uFF0C\u521B\u5EFA\u5B9E\u4F8B\u9700\u8981\u7ED9\u51FA name \u548C score\uFF0C\u800C\u5982\u4F55\u6253\u5370\uFF0C\u90FD\u662F\u5728 Student \u7C7B\u7684\u5185\u90E8\u5B9A\u4E49\u7684\uFF0C\u8FD9\u4E9B\u6570\u636E\u548C\u903B\u8F91\u88AB\u201C\u5C01\u88C5\u201D\u8D77\u6765\u4E86\uFF0C\u8C03\u7528\u5F88\u5BB9\u6613\uFF0C\u4F46\u5374\u4E0D\u7528\u77E5\u9053\u5185\u90E8\u5B9E\u73B0\u7684\u7EC6\u8282\u3002</p><p>\u5C01\u88C5\u7684\u53E6\u4E00\u4E2A\u597D\u5904\u662F\u53EF\u4EE5\u7ED9 Student \u7C7B\u589E\u52A0\u65B0\u7684\u65B9\u6CD5\uFF0C\u6BD4\u5982 get_grade:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>

    <span class="token keyword">def</span> <span class="token function">get_grade</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>score <span class="token operator">&gt;=</span> <span class="token number">90</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token string">&#39;A&#39;</span>
        <span class="token keyword">elif</span> self<span class="token punctuation">.</span>score <span class="token operator">&gt;=</span> <span class="token number">60</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token string">&#39;B&#39;</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token string">&#39;C&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u540C\u6837\u7684\uFF0Cget_grade \u65B9\u6CD5\u53EF\u4EE5\u76F4\u63A5\u5728\u5B9E\u4F8B\u53D8\u91CF\u4E0A\u8C03\u7528\uFF0C\u4E0D\u9700\u8981\u77E5\u9053\u5185\u90E8\u5B9E\u73B0\u7EC6\u8282:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> score<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
        self<span class="token punctuation">.</span>score <span class="token operator">=</span> score

    <span class="token keyword">def</span> <span class="token function">get_grade</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>score <span class="token operator">&gt;=</span> <span class="token number">90</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token string">&#39;A&#39;</span>
        <span class="token keyword">elif</span> self<span class="token punctuation">.</span>score <span class="token operator">&gt;=</span> <span class="token number">60</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token string">&#39;B&#39;</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token string">&#39;C&#39;</span>

lisa <span class="token operator">=</span> Student<span class="token punctuation">(</span><span class="token string">&#39;Lisa&#39;</span><span class="token punctuation">,</span> <span class="token number">99</span><span class="token punctuation">)</span>
bart <span class="token operator">=</span> Student<span class="token punctuation">(</span><span class="token string">&#39;Bart&#39;</span><span class="token punctuation">,</span> <span class="token number">59</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>lisa<span class="token punctuation">.</span>name<span class="token punctuation">,</span> lisa<span class="token punctuation">.</span>get_grade<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># Lisa A</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>bart<span class="token punctuation">.</span>name<span class="token punctuation">,</span> bart<span class="token punctuation">.</span>get_grade<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># Bart C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="\u5B9E\u4F8B\u5C5E\u6027\u548C\u7C7B\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u4F8B\u5C5E\u6027\u548C\u7C7B\u5C5E\u6027" aria-hidden="true">#</a> \u5B9E\u4F8B\u5C5E\u6027\u548C\u7C7B\u5C5E\u6027</h2><p>\u7531\u4E8E Python \u662F\u52A8\u6001\u8BED\u8A00\uFF0C\u6839\u636E\u7C7B\u521B\u5EFA\u7684\u5B9E\u4F8B\u53EF\u4EE5\u4EFB\u610F\u7ED1\u5B9A\u5C5E\u6027\u3002</p><p>\u7ED9\u5B9E\u4F8B\u7ED1\u5B9A\u5C5E\u6027\u7684\u65B9\u6CD5\u662F\u901A\u8FC7\u5B9E\u4F8B\u53D8\u91CF\uFF0C\u6216\u8005\u901A\u8FC7 <code>self</code> \u53D8\u91CF:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name

s <span class="token operator">=</span> Student<span class="token punctuation">(</span><span class="token string">&#39;Bob&#39;</span><span class="token punctuation">)</span>
s<span class="token punctuation">.</span>score <span class="token operator">=</span> <span class="token number">90</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u4F46\u662F\uFF0C\u5982\u679C <code>Student</code> \u7C7B\u672C\u8EAB\u9700\u8981\u7ED1\u5B9A\u4E00\u4E2A\u5C5E\u6027\u5462\uFF1F\u53EF\u4EE5\u76F4\u63A5\u5728 class \u4E2D\u5B9A\u4E49\u5C5E\u6027\uFF0C\u8FD9\u79CD\u5C5E\u6027\u662F\u7C7B\u5C5E\u6027\uFF0C\u5F52 <code>Student</code> \u7C7B\u6240\u6709:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    name <span class="token operator">=</span> <span class="token string">&#39;Student&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5F53\u6211\u4EEC\u5B9A\u4E49\u4E86\u4E00\u4E2A\u7C7B\u5C5E\u6027\u540E\uFF0C\u8FD9\u4E2A\u5C5E\u6027\u867D\u7136\u5F52\u7C7B\u6240\u6709\uFF0C\u4F46\u7C7B\u7684\u6240\u6709\u5B9E\u4F8B\u90FD\u53EF\u4EE5\u8BBF\u95EE\u5230\u3002\u6765\u6D4B\u8BD5\u4E00\u4E0B:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">class</span> <span class="token class-name">Student</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>     name <span class="token operator">=</span> <span class="token string">&#39;Student&#39;</span>
<span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s <span class="token operator">=</span> Student<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># \u521B\u5EFA\u5B9E\u4F8Bs</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment"># \u6253\u5370name\u5C5E\u6027\uFF0C\u56E0\u4E3A\u5B9E\u4F8B\u5E76\u6CA1\u6709name\u5C5E\u6027\uFF0C\u6240\u4EE5\u4F1A\u7EE7\u7EED\u67E5\u627Eclass\u7684name\u5C5E\u6027</span>
Student
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>Student<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment"># \u6253\u5370\u7C7B\u7684name\u5C5E\u6027</span>
Student
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;Michael&#39;</span> <span class="token comment"># \u7ED9\u5B9E\u4F8B\u7ED1\u5B9Aname\u5C5E\u6027</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment"># \u7531\u4E8E\u5B9E\u4F8B\u5C5E\u6027\u4F18\u5148\u7EA7\u6BD4\u7C7B\u5C5E\u6027\u9AD8\uFF0C\u56E0\u6B64\uFF0C\u5B83\u4F1A\u5C4F\u853D\u6389\u7C7B\u7684name\u5C5E\u6027</span>
Michael
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>Student<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment"># \u4F46\u662F\u7C7B\u5C5E\u6027\u5E76\u672A\u6D88\u5931\uFF0C\u7528Student.name\u4ECD\u7136\u53EF\u4EE5\u8BBF\u95EE</span>
Student
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">del</span> s<span class="token punctuation">.</span>name <span class="token comment"># \u5982\u679C\u5220\u9664\u5B9E\u4F8B\u7684name\u5C5E\u6027</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment"># \u518D\u6B21\u8C03\u7528s.name\uFF0C\u7531\u4E8E\u5B9E\u4F8B\u7684name\u5C5E\u6027\u6CA1\u6709\u627E\u5230\uFF0C\u7C7B\u7684name\u5C5E\u6027\u5C31\u663E\u793A\u51FA\u6765\u4E86</span>
Student
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u4ECE\u4E0A\u9762\u7684\u4F8B\u5B50\u53EF\u4EE5\u770B\u51FA\uFF0C\u5728\u7F16\u5199\u7A0B\u5E8F\u7684\u65F6\u5019\uFF0C\u5343\u4E07<strong>\u4E0D\u8981\u5BF9\u5B9E\u4F8B\u5C5E\u6027\u548C\u7C7B\u5C5E\u6027\u4F7F\u7528\u76F8\u540C\u7684\u540D\u5B57</strong>\uFF0C\u56E0\u4E3A\u76F8\u540C\u540D\u79F0\u7684\u5B9E\u4F8B\u5C5E\u6027\u5C06\u5C4F\u853D\u6389\u7C7B\u5C5E\u6027\uFF0C\u4F46\u662F\u5F53\u60A8\u5220\u9664\u5B9E\u4F8B\u5C5E\u6027\u540E\uFF0C\u518D\u4F7F\u7528\u76F8\u540C\u7684\u540D\u79F0\uFF0C\u8BBF\u95EE\u5230\u7684\u5C06\u662F\u7C7B\u5C5E\u6027\u3002</p><h2 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h2><ul><li><p>\u7C7B\u662F\u521B\u5EFA\u5B9E\u4F8B\u7684\u6A21\u677F\uFF0C\u800C\u5B9E\u4F8B\u5219\u662F\u4E00\u4E2A\u4E00\u4E2A\u5177\u4F53\u7684\u5BF9\u8C61\uFF0C\u5404\u4E2A\u5B9E\u4F8B\u62E5\u6709\u7684\u6570\u636E\u90FD\u4E92\u76F8\u72EC\u7ACB\uFF0C\u4E92\u4E0D\u5F71\u54CD\uFF1B</p></li><li><p>\u65B9\u6CD5\u5C31\u662F\u4E0E\u5B9E\u4F8B\u7ED1\u5B9A\u7684\u51FD\u6570\uFF0C\u548C\u666E\u901A\u51FD\u6570\u4E0D\u540C\uFF0C\u65B9\u6CD5\u53EF\u4EE5\u76F4\u63A5\u8BBF\u95EE\u5B9E\u4F8B\u7684\u6570\u636E\uFF1B</p></li><li><p>\u901A\u8FC7\u5728\u5B9E\u4F8B\u4E0A\u8C03\u7528\u65B9\u6CD5\uFF0C\u6211\u4EEC\u5C31\u76F4\u63A5\u64CD\u4F5C\u4E86\u5BF9\u8C61\u5185\u90E8\u7684\u6570\u636E\uFF0C\u4F46\u65E0\u9700\u77E5\u9053\u65B9\u6CD5\u5185\u90E8\u7684\u5B9E\u73B0\u7EC6\u8282\u3002</p></li><li><p>\u548C\u9759\u6001\u8BED\u8A00\u4E0D\u540C\uFF0CPython \u5141\u8BB8\u5BF9\u5B9E\u4F8B\u53D8\u91CF\u7ED1\u5B9A\u4EFB\u4F55\u6570\u636E\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5BF9\u4E8E\u4E24\u4E2A\u5B9E\u4F8B\u53D8\u91CF\uFF0C\u867D\u7136\u5B83\u4EEC\u90FD\u662F\u540C\u4E00\u4E2A\u7C7B\u7684\u4E0D\u540C\u5B9E\u4F8B\uFF0C\u4F46\u62E5\u6709\u7684\u53D8\u91CF\u540D\u79F0\u90FD\u53EF\u80FD\u4E0D\u540C:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> bart <span class="token operator">=</span> Student<span class="token punctuation">(</span><span class="token string">&#39;Bart Simpson&#39;</span><span class="token punctuation">,</span> <span class="token number">59</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> lisa <span class="token operator">=</span> Student<span class="token punctuation">(</span><span class="token string">&#39;Lisa Simpson&#39;</span><span class="token punctuation">,</span> <span class="token number">87</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> bart<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">8</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> bart<span class="token punctuation">.</span>age
<span class="token number">8</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> lisa<span class="token punctuation">.</span>age
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span><span class="token punctuation">:</span>
  File <span class="token string">&quot;&lt;stdin&gt;&quot;</span><span class="token punctuation">,</span> line <span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
AttributeError<span class="token punctuation">:</span> <span class="token string">&#39;Student&#39;</span> <span class="token builtin">object</span> has no attribute <span class="token string">&#39;age&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li><li><p>\u5B9E\u4F8B\u5C5E\u6027\u5C5E\u4E8E\u5404\u4E2A\u5B9E\u4F8B\u6240\u6709\uFF0C\u4E92\u4E0D\u5E72\u6270\uFF1B</p></li><li><p>\u7C7B\u5C5E\u6027\u5C5E\u4E8E\u7C7B\u6240\u6709\uFF0C\u6240\u6709\u5B9E\u4F8B\u5171\u4EAB\u4E00\u4E2A\u5C5E\u6027\uFF1B</p></li><li><p>\u4E0D\u8981\u5BF9\u5B9E\u4F8B\u5C5E\u6027\u548C\u7C7B\u5C5E\u6027\u4F7F\u7528\u76F8\u540C\u7684\u540D\u5B57\uFF0C\u5426\u5219\u5C06\u4EA7\u751F\u96BE\u4EE5\u53D1\u73B0\u7684\u9519\u8BEF\u3002</p></li></ul>`,39);function t(e,o){return p}var l=n(a,[["render",t]]);export{l as default};
