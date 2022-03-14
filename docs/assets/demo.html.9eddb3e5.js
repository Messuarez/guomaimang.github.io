import{_ as s,f as n}from"./app.b0675cc3.js";const a={},p=n(`<p>\u672C\u6848\u4F8B\u5C55\u793A\u4E86 Mr.Hope \u4E2A\u4EBA\u7F16\u5199\u7684 screen \u76F8\u5173\u7684 Vuex \u6A21\u5757\u3002</p><h2 id="sreen-ts" tabindex="-1"><a class="header-anchor" href="#sreen-ts" aria-hidden="true">#</a> Sreen.ts</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Module <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuex&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BaseState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;../state&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">SWState</span> <span class="token punctuation">{</span>
  status<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// service-worker \u72B6\u6001</span>
  error<span class="token operator">?</span><span class="token operator">:</span> Error<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> swState<span class="token operator">:</span> SWState <span class="token operator">=</span> <span class="token punctuation">{</span> status<span class="token operator">:</span> <span class="token string">&quot;&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> swModule<span class="token operator">:</span> Module<span class="token operator">&lt;</span>SWState<span class="token punctuation">,</span> BaseState<span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  state<span class="token operator">:</span> swState<span class="token punctuation">,</span>
  mutations<span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * <span class="token keyword">@description</span>: \u8BBE\u7F6E Service Worker \u72B6\u6001
     *
     * <span class="token keyword">@param</span> <span class="token parameter">state</span> swState
     * <span class="token keyword">@param</span> <span class="token parameter">status</span> ServiceWorker\u72B6\u6001
     */</span>
    <span class="token function">swState</span><span class="token punctuation">(</span>state<span class="token operator">:</span> SWState<span class="token punctuation">,</span> status<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>status <span class="token operator">=</span> status<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@description</span>: \u8BBE\u7F6E Service Worker \u9519\u8BEF
     *
     * <span class="token keyword">@param</span> <span class="token parameter">state</span> imagestate
     * <span class="token keyword">@param</span> <span class="token parameter">error</span> \u9047\u5230\u7684\u9519\u8BEF
     */</span>
    <span class="token function">swError</span><span class="token punctuation">(</span>state<span class="token operator">:</span> SWState<span class="token punctuation">,</span> error<span class="token operator">:</span> Error<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
      state<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token string">&quot;error&quot;</span><span class="token punctuation">;</span>
      state<span class="token punctuation">.</span>error <span class="token operator">=</span> error<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> swModule<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p>\u672C\u6587\u4EF6\u5305\u542B\u4E86\u5B8C\u6574\u7684\u4E00\u4EFD state\u3001\u6570\u4E2A mutation \u548C\u4E00\u4E2A action\u3002</p>`,4);function t(e,o){return p}var c=s(a,[["render",t]]);export{c as default};
