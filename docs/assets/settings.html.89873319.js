import{_ as a,r as p,o as t,a as o,d as e,e as r,w as l,F as c,b as s,f as u}from"./app.b0675cc3.js";const i={},k=s("\u8FD9\u662F Mr.Hope \u4E2A\u4EBA\u4F7F\u7528\u7684 VS Code \u8BBE\u7F6E\uFF0C\u90E8\u5206\u8BBE\u7F6E\u662F"),b=s("\u8FD9\u91CC"),q=s("\u7684\u63D2\u4EF6\u914D\u7F6E"),m=u(`<p>\u5C06\u4E0B\u9762\u5185\u5BB9\u62F7\u8D1D\u81F3 setting.json \u4EE5\u66F4\u6539 VS Code \u8BBE\u7F6E</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token comment">// \u7F16\u8F91\u5668\u914D\u7F6E</span>
  <span class="token property">&quot;editor.cursorSmoothCaretAnimation&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.detectIndentation&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.fontFamily&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&#39;Fira Code&#39;, Consolas, &#39;Courier New&#39;, monospace&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.fontLigatures&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.formatOnSave&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.formatOnPaste&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.mouseWheelZoom&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.rulers&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">80</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.quickSuggestions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;comments&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;strings&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;other&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.renderControlCharacters&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.renderWhitespace&quot;</span><span class="token operator">:</span> <span class="token string">&quot;boundary&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.smoothScrolling&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.suggestSelection&quot;</span><span class="token operator">:</span> <span class="token string">&quot;first&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.tabSize&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">&quot;editor.wordWrap&quot;</span><span class="token operator">:</span> <span class="token string">&quot;on&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// emmet \u5305\u542B wxml \u89C6\u4E3A html</span>
  <span class="token property">&quot;emmet.includeLanguages&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;wxml&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html&quot;</span> <span class="token comment">// \u4E3A wxml \u5F00\u542F HTML emmet \u652F\u6301</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;emmet.variables&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;lang&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zh-CN&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;charset&quot;</span><span class="token operator">:</span> <span class="token string">&quot;UTF-8&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u6587\u4EF6\u76F8\u5173</span>
  <span class="token property">&quot;explorer.confirmDelete&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;explorer.confirmDragAndDrop&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;files.associations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;*.cjson&quot;</span><span class="token operator">:</span> <span class="token string">&quot;jsonc&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;*.wxss&quot;</span><span class="token operator">:</span> <span class="token string">&quot;css&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;*.wxs&quot;</span><span class="token operator">:</span> <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;*.wxml&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wxml&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;files.autoSave&quot;</span><span class="token operator">:</span> <span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;files.eol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\\n&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;files.exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;**/.classpath&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;**/.project&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;**/.settings&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;**/.factorypath&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;files.maxMemoryForLargeFilesMB&quot;</span><span class="token operator">:</span> <span class="token number">4096</span><span class="token punctuation">,</span>
  <span class="token comment">// \u7F16\u8F91\u5668\u7A97\u53E3\u8BBE\u7F6E</span>
  <span class="token property">&quot;window.closeWhenEmpty&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;window.dialogStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;custom&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;window.newWindowDimensions&quot;</span><span class="token operator">:</span> <span class="token string">&quot;inherit&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;breadcrumbs.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5DE5\u4F5C\u53F0\u8BBE\u7F6E</span>
  <span class="token property">&quot;workbench.activityBar.visible&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;workbench.colorTheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;One Dark Pro&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;workbench.commandPalette.preserveInput&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;workbench.enableExperiments&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;workbench.editor.scrollToSwitchTabs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;workbench.editor.untitled.experimentalLanguageDetection&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;workbench.iconTheme&quot;</span><span class="token operator">:</span> <span class="token string">&quot;material-icon-theme&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;workbench.startupEditor&quot;</span><span class="token operator">:</span> <span class="token string">&quot;none&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;material-icon-theme.folders.associations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;global-components&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Global&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;node&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Node&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;about&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Command&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;intro&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Command&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;file&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Public&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;github&quot;</span><span class="token operator">:</span> <span class="token string">&quot;GitHub&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;composables&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Include&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;service-worker&quot;</span><span class="token operator">:</span> <span class="token string">&quot;config&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;store&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Vuex-store&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;demo&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Examples&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;basic&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Helper&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vuex&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Vuex-store&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;plugin&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;router&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Routes&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;.vuepress&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vuepress&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;node-js&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Node&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;react&quot;</span><span class="token operator">:</span> <span class="token string">&quot;React-components&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;workflows&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Ci&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;guide&quot;</span><span class="token operator">:</span> <span class="token string">&quot;content&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;git&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Git&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;mysql&quot;</span><span class="token operator">:</span> <span class="token string">&quot;DataBase&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;software&quot;</span><span class="token operator">:</span> <span class="token string">&quot;App&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tool&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Tools&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vscode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;VSCode&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;en&quot;</span><span class="token operator">:</span> <span class="token string">&quot;I18n&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;zh&quot;</span><span class="token operator">:</span> <span class="token string">&quot;I18n&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token string">&quot;typescript&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u63D0\u793A\u8BBE\u7F6E</span>
  <span class="token property">&quot;vsintellicode.modify.editor.suggestSelection&quot;</span><span class="token operator">:</span> <span class="token string">&quot;automaticallyOverrodeDefaultValue&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;problems.showCurrentInStatus&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5728\u7EBF\u670D\u52A1\u8BBE\u7F6E</span>
  <span class="token property">&quot;telemetry.enableCrashReporter&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;telemetry.enableTelemetry&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// \u7EC8\u7AEF\u8BBE\u7F6E</span>
  <span class="token property">&quot;terminal.integrated.confirmOnExit&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hasChildProcesses&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;terminal.integrated.copyOnSelection&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;terminal.integrated.enableBell&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;terminal.integrated.defaultProfile.windows&quot;</span><span class="token operator">:</span> <span class="token string">&quot;PowerShell&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;terminal.integrated.defaultProfile.linux&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/bin/bash&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;terminal.integrated.profiles.windows&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;PowerShell&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;source&quot;</span><span class="token operator">:</span> <span class="token string">&quot;PowerShell&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;overrideName&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
      <span class="token property">&quot;icon&quot;</span><span class="token operator">:</span> <span class="token string">&quot;terminal-powershell&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;args&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;-NoLogo&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;terminal.integrated.tabs.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;terminal.external.linuxExec&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bash&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// git</span>
  <span class="token property">&quot;diffEditor.ignoreTrimWhitespace&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;diffEditor.renderSideBySide&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;git.autofetch&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;git.confirmSync&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;git.enableSmartCommit&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;merge-conflict.autoNavigateNextConflict.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// npm \u8BBE\u7F6E</span>
  <span class="token property">&quot;npm.enableRunFromFolder&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;npm.scriptExplorerAction&quot;</span><span class="token operator">:</span> <span class="token string">&quot;run&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;npm-intellisense.importQuotes&quot;</span><span class="token operator">:</span> <span class="token string">&quot;\\&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;npm-intellisense.packageSubfoldersIntellisense&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;npm-intellisense.scanDevDependencies&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;npm-intellisense.showBuildInLibs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// \u8FDC\u7A0B\u8FDE\u63A5</span>
  <span class="token property">&quot;remote.SSH.remotePlatform&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;codeserver&quot;</span><span class="token operator">:</span> <span class="token string">&quot;linux&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// \u7279\u5B9A\u683C\u5F0F\u6587\u4EF6\u8BBE\u7F6E</span>
  <span class="token property">&quot;[cpp]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ms-vscode.cpptools&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[dart]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.formatOnType&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.selectionHighlight&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.suggest.snippetsPreventQuickSuggestions&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.suggestSelection&quot;</span><span class="token operator">:</span> <span class="token string">&quot;recentlyUsed&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.tabCompletion&quot;</span><span class="token operator">:</span> <span class="token string">&quot;on&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;editor.wordBasedSuggestions&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[html]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[javascript]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[json]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[jsonc]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[matlab]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;files.encoding&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gb2312&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[markdown]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[svelte]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;svelte.svelte-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[typescript]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[typescriptreact]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[vue]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;octref.vetur&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[xml]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;[yaml]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;esbenp.prettier-vscode&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token comment">// typescript \u914D\u7F6E</span>
  <span class="token property">&quot;javascript.format.semicolons&quot;</span><span class="token operator">:</span> <span class="token string">&quot;insert&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;javascript.referencesCodeLens.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;javascript.suggest.completeFunctionCalls&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;javascript.preferences.quoteStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;double&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;javascript.updateImportsOnFileMove.enabled&quot;</span><span class="token operator">:</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;typescript.locale&quot;</span><span class="token operator">:</span> <span class="token string">&quot;zh-CN&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;typescript.enablePromptUseWorkspaceTsdk&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;typescript.format.semicolons&quot;</span><span class="token operator">:</span> <span class="token string">&quot;insert&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;typescript.preferences.quoteStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;double&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;typescript.referencesCodeLens.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;typescript.suggest.completeFunctionCalls&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;typescript.updateImportsOnFileMove.enabled&quot;</span><span class="token operator">:</span> <span class="token string">&quot;always&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// php \u8BBE\u7F6E</span>
  <span class="token property">&quot;php.validate.enable&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;php.validate.run&quot;</span><span class="token operator">:</span> <span class="token string">&quot;onType&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// c++ \u8BBE\u7F6E</span>
  <span class="token property">&quot;C_Cpp.default.cppStandard&quot;</span><span class="token operator">:</span> <span class="token string">&quot;c++20&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;C_Cpp.default.includePath&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;C:/Program Files/mingw-w64/lib/gcc/x86_64-w64-mingw32/8.1.0/include&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;C:/Program Files/mingw-w64/lib/gcc/x86_64-w64-mingw32/8.1.0/include-fixed&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;C:/Program Files/mingw-w64/x86_64-w64-mingw32/include&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;C_Cpp.clang_format_fallbackStyle&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Google&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// dart</span>
  <span class="token property">&quot;dart.debugExternalLibraries&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;dart.debugSdkLibraries&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;dart.previewLsp&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;dart.openDevTools&quot;</span><span class="token operator">:</span> <span class="token string">&quot;flutter&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// java</span>
  <span class="token property">&quot;java.home&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C:/Program Files/Java/jdk-16.0.1&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;java.semanticHighlighting.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// python</span>
  <span class="token property">&quot;python.pythonPath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C:/Users/zhang/AppData/Local/Programs/Python/Python39/python.exe&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;python.languageServer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Pylance&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// css\u989C\u8272\u63D0\u793A\u914D\u7F6E</span>
  <span class="token property">&quot;colorInfo.fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;hex&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;rgb&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;alpha&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;css-color-name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;preview&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;colorInfo.languages&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;selector&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;colors&quot;</span><span class="token operator">:</span> <span class="token string">&quot;css&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;selector&quot;</span><span class="token operator">:</span> <span class="token string">&quot;css&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;colors&quot;</span><span class="token operator">:</span> <span class="token string">&quot;css&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;selector&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sass&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;colors&quot;</span><span class="token operator">:</span> <span class="token string">&quot;css&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;selector&quot;</span><span class="token operator">:</span> <span class="token string">&quot;scss&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;colors&quot;</span><span class="token operator">:</span> <span class="token string">&quot;css&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;selector&quot;</span><span class="token operator">:</span> <span class="token string">&quot;less&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;colors&quot;</span><span class="token operator">:</span> <span class="token string">&quot;css&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// eslint</span>
  <span class="token property">&quot;eslint.packageManager&quot;</span><span class="token operator">:</span> <span class="token string">&quot;yarn&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;eslint.validate&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;javascriptreact&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;vue&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;typescript&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;typescriptreact&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// Git Lens \u8BBE\u7F6E</span>
  <span class="token property">&quot;gitlens.gitCommands.closeOnFocusOut&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;gitlens.views.repositories.branches.layout&quot;</span><span class="token operator">:</span> <span class="token string">&quot;list&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// live server</span>
  <span class="token property">&quot;liveServer.settings.donotShowInfoMsg&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// markdown \u8BBE\u7F6E</span>
  <span class="token property">&quot;markdown.extension.orderedList.marker&quot;</span><span class="token operator">:</span> <span class="token string">&quot;one&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;markdown.extension.print.imgToBase64&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// markdownlint \u8BBE\u7F6E</span>
  <span class="token property">&quot;markdownlint.config&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;default&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;MD003&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token string">&quot;atx&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;MD004&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dash&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;MD013&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token property">&quot;MD024&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;allow_different_nesting&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;MD035&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token string">&quot;---&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;markdown-pdf.executablePath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C:/Users/zhang/AppData/Local/Google/Chrome/Application/chrome.exe&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// vetur \u8BBE\u7F6E</span>
  <span class="token property">&quot;vetur.completion.tagCasing&quot;</span><span class="token operator">:</span> <span class="token string">&quot;initial&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;vetur.validation.templateProps&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;vetur.useWorkspaceDependencies&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// stylus \u8BBE\u7F6E</span>
  <span class="token property">&quot;stylusSupremacy.insertColons&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;stylusSupremacy.insertSemicolons&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;stylusSupremacy.insertBraces&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// XML\u5DE5\u5177\u8BBE\u7F6E</span>
  <span class="token property">&quot;xmlTools.enforcePrettySelfClosingTagOnFormat&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;xmlTools.removeCommentsOnMinify&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5FAE\u4FE1\u5C0F\u7A0B\u5E8F</span>
  <span class="token property">&quot;minapp-vscode.disableAutoConfig&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;minapp-vscode.wxmlFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;prettier&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;minapp-vscode.prettier&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;parser&quot;</span><span class="token operator">:</span> <span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;printWidth&quot;</span><span class="token operator">:</span> <span class="token number">80</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token comment">// liveshare \u8BBE\u7F6E</span>
  <span class="token property">&quot;liveshare.audio.joinCallBehavior&quot;</span><span class="token operator">:</span> <span class="token string">&quot;accept&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// \u9879\u76EE\u7BA1\u7406\u5668</span>
  <span class="token property">&quot;projectManager.sortList&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Saved&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;projectManager.ignoreProjectsWithinProjects&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;projectManager.any.ignoredFolders&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;dist&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;node_modules&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;out&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;typings&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;test&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;__tests__&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// TODO Highlight \u914D\u7F6E</span>
  <span class="token property">&quot;todohighlight.keywords&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;WARNING: &quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// leetcode</span>
  <span class="token property">&quot;leetcode.hint.commentDescription&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;leetcode.hint.commandShortcut&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;leetcode.hint.configWebviewMarkdown&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;leetcode.hint.setDefaultLanguage&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;leetcode.enableStatusBar&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;leetcode.endpoint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;leetcode&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;leetcode.showDescription&quot;</span><span class="token operator">:</span> <span class="token string">&quot;In Webview&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;leetcode.workspaceFolder&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C:/Users/zhang/.leetcode&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// stylelint \u8BBE\u7F6E</span>
  <span class="token property">&quot;stylelint.packageManager&quot;</span><span class="token operator">:</span> <span class="token string">&quot;yarn&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;stylelint.validate&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;css&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;html&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;javascript&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;javascriptreact&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;less&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;markdown&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;postcss&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;sass&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;scss&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;source.css.styled&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;source.markdown.math&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;styled-css&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;sugarss&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;svelte&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;typescript&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;typescriptreact&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// &quot;vue&quot;,</span>
    <span class="token string">&quot;vue-html&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;vue-postcss&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;xml&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;xsl&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;wxss&quot;</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token comment">// Java</span>
  <span class="token property">&quot;redhat.telemetry.enabled&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// matlab</span>
  <span class="token property">&quot;matlab.matlabpath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C:/Program Files/Polyspace/R2021a/bin/win64/matlab.exe&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;matlab.mlintpath&quot;</span><span class="token operator">:</span> <span class="token string">&quot;C:/Program Files/Polyspace/R2021a/bin/win64/mlint.exe&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br><span class="line-number">164</span><br><span class="line-number">165</span><br><span class="line-number">166</span><br><span class="line-number">167</span><br><span class="line-number">168</span><br><span class="line-number">169</span><br><span class="line-number">170</span><br><span class="line-number">171</span><br><span class="line-number">172</span><br><span class="line-number">173</span><br><span class="line-number">174</span><br><span class="line-number">175</span><br><span class="line-number">176</span><br><span class="line-number">177</span><br><span class="line-number">178</span><br><span class="line-number">179</span><br><span class="line-number">180</span><br><span class="line-number">181</span><br><span class="line-number">182</span><br><span class="line-number">183</span><br><span class="line-number">184</span><br><span class="line-number">185</span><br><span class="line-number">186</span><br><span class="line-number">187</span><br><span class="line-number">188</span><br><span class="line-number">189</span><br><span class="line-number">190</span><br><span class="line-number">191</span><br><span class="line-number">192</span><br><span class="line-number">193</span><br><span class="line-number">194</span><br><span class="line-number">195</span><br><span class="line-number">196</span><br><span class="line-number">197</span><br><span class="line-number">198</span><br><span class="line-number">199</span><br><span class="line-number">200</span><br><span class="line-number">201</span><br><span class="line-number">202</span><br><span class="line-number">203</span><br><span class="line-number">204</span><br><span class="line-number">205</span><br><span class="line-number">206</span><br><span class="line-number">207</span><br><span class="line-number">208</span><br><span class="line-number">209</span><br><span class="line-number">210</span><br><span class="line-number">211</span><br><span class="line-number">212</span><br><span class="line-number">213</span><br><span class="line-number">214</span><br><span class="line-number">215</span><br><span class="line-number">216</span><br><span class="line-number">217</span><br><span class="line-number">218</span><br><span class="line-number">219</span><br><span class="line-number">220</span><br><span class="line-number">221</span><br><span class="line-number">222</span><br><span class="line-number">223</span><br><span class="line-number">224</span><br><span class="line-number">225</span><br><span class="line-number">226</span><br><span class="line-number">227</span><br><span class="line-number">228</span><br><span class="line-number">229</span><br><span class="line-number">230</span><br><span class="line-number">231</span><br><span class="line-number">232</span><br><span class="line-number">233</span><br><span class="line-number">234</span><br><span class="line-number">235</span><br><span class="line-number">236</span><br><span class="line-number">237</span><br><span class="line-number">238</span><br><span class="line-number">239</span><br><span class="line-number">240</span><br><span class="line-number">241</span><br><span class="line-number">242</span><br><span class="line-number">243</span><br><span class="line-number">244</span><br><span class="line-number">245</span><br><span class="line-number">246</span><br><span class="line-number">247</span><br><span class="line-number">248</span><br><span class="line-number">249</span><br><span class="line-number">250</span><br><span class="line-number">251</span><br><span class="line-number">252</span><br><span class="line-number">253</span><br><span class="line-number">254</span><br><span class="line-number">255</span><br><span class="line-number">256</span><br><span class="line-number">257</span><br><span class="line-number">258</span><br><span class="line-number">259</span><br><span class="line-number">260</span><br><span class="line-number">261</span><br><span class="line-number">262</span><br><span class="line-number">263</span><br><span class="line-number">264</span><br><span class="line-number">265</span><br><span class="line-number">266</span><br><span class="line-number">267</span><br><span class="line-number">268</span><br><span class="line-number">269</span><br><span class="line-number">270</span><br><span class="line-number">271</span><br><span class="line-number">272</span><br><span class="line-number">273</span><br><span class="line-number">274</span><br><span class="line-number">275</span><br><span class="line-number">276</span><br><span class="line-number">277</span><br><span class="line-number">278</span><br><span class="line-number">279</span><br><span class="line-number">280</span><br><span class="line-number">281</span><br><span class="line-number">282</span><br><span class="line-number">283</span><br><span class="line-number">284</span><br><span class="line-number">285</span><br><span class="line-number">286</span><br><span class="line-number">287</span><br><span class="line-number">288</span><br><span class="line-number">289</span><br><span class="line-number">290</span><br><span class="line-number">291</span><br><span class="line-number">292</span><br><span class="line-number">293</span><br><span class="line-number">294</span><br><span class="line-number">295</span><br><span class="line-number">296</span><br><span class="line-number">297</span><br><span class="line-number">298</span><br><span class="line-number">299</span><br><span class="line-number">300</span><br><span class="line-number">301</span><br><span class="line-number">302</span><br><span class="line-number">303</span><br><span class="line-number">304</span><br><span class="line-number">305</span><br><span class="line-number">306</span><br><span class="line-number">307</span><br><span class="line-number">308</span><br><span class="line-number">309</span><br><span class="line-number">310</span><br><span class="line-number">311</span><br><span class="line-number">312</span><br><span class="line-number">313</span><br><span class="line-number">314</span><br><span class="line-number">315</span><br><span class="line-number">316</span><br><span class="line-number">317</span><br><span class="line-number">318</span><br><span class="line-number">319</span><br><span class="line-number">320</span><br><span class="line-number">321</span><br><span class="line-number">322</span><br><span class="line-number">323</span><br><span class="line-number">324</span><br><span class="line-number">325</span><br><span class="line-number">326</span><br><span class="line-number">327</span><br><span class="line-number">328</span><br><span class="line-number">329</span><br><span class="line-number">330</span><br><span class="line-number">331</span><br><span class="line-number">332</span><br><span class="line-number">333</span><br><span class="line-number">334</span><br><span class="line-number">335</span><br><span class="line-number">336</span><br><span class="line-number">337</span><br><span class="line-number">338</span><br><span class="line-number">339</span><br><span class="line-number">340</span><br><span class="line-number">341</span><br><span class="line-number">342</span><br><span class="line-number">343</span><br><span class="line-number">344</span><br><span class="line-number">345</span><br><span class="line-number">346</span><br><span class="line-number">347</span><br><span class="line-number">348</span><br></div></div><p>\u7528\u9F20\u6807\u5728\u5BF9\u5E94\u5C5E\u6027\u503C\u4E0A\u60AC\u505C\u65F6\uFF0CVS Code \u4F1A\u81EA\u52A8\u7ED9\u51FA\u5C5E\u6027\u7684\u8BF4\u660E\u3002</p>`,3);function y(g,d){const n=p("RouterLink");return t(),o(c,null,[e("p",null,[k,r(n,{to:"/note/app/vscode/extension.html"},{default:l(()=>[b]),_:1}),q]),m],64)}var h=a(i,[["render",y]]);export{h as default};
