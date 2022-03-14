import{_ as n,f as s}from"./app.b0675cc3.js";const a={},e=s(`<h1 id="\u7F51\u7EDC\u670D\u52A1\u5668\u76F8\u5173" tabindex="-1"><a class="header-anchor" href="#\u7F51\u7EDC\u670D\u52A1\u5668\u76F8\u5173" aria-hidden="true">#</a> \u7F51\u7EDC\u670D\u52A1\u5668\u76F8\u5173</h1><h2 id="ftp" tabindex="-1"><a class="header-anchor" href="#ftp" aria-hidden="true">#</a> ftp</h2><h3 id="vsftpd" tabindex="-1"><a class="header-anchor" href="#vsftpd" aria-hidden="true">#</a> vsftpd</h3><ul><li><p>\u5B89\u88C5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">apt-get</span> <span class="token function">install</span> vsftpd <span class="token function">ftp</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div></li><li><p>\u914D\u7F6E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> /etc/vsftpd.conf
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u81F3\u5C11\u8981\u66F4\u6539:</p><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token key attr-name">write_enable</span><span class="token punctuation">=</span><span class="token value attr-value">YES</span>
<span class="token key attr-name">utf8_filesystem</span><span class="token punctuation">=</span><span class="token value attr-value">YES</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></li></ul><h2 id="nginx" tabindex="-1"><a class="header-anchor" href="#nginx" aria-hidden="true">#</a> Nginx</h2><ul><li><p>\u5B89\u88C5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> nginx
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Nginx \u9ED8\u8BA4\u5B89\u88C5\u5728 <code>/etc/nginx</code> \u76EE\u5F55\u4E0B</p></li><li><p>\u914D\u7F6E</p><p>\u914D\u7F6E\u6587\u4EF6\u4E3A <code>nginx.conf</code>\u3002</p><p>\u9ED8\u8BA4\u7AD9\u70B9\u914D\u7F6E\u6587\u4EF6\u5728 <code>/etc/nginx/sites-available/default</code></p><p>\u4E3A\u4E86\u4F7F\u5F97 Nginx \u80FD\u4F7F\u7528 PHP\uFF0C\u9700\u8981\u914D\u7F6E</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code>
<span class="token directive"><span class="token keyword">location</span> ~ \\.php$</span> <span class="token punctuation">{</span>
    <span class="token directive"><span class="token keyword">root</span>           /var/www/html</span><span class="token punctuation">;</span>
    <span class="token comment"># \u914D\u7F6E\u7ED9 socks \u5E94\u8BE5\u53EF\u884C\uFF0C\u8FD8\u5728\u7814\u7A76\u4E2D</span>
    <span class="token directive"><span class="token keyword">fastcgi_pass</span>   127.0.0.1:9000</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">fastcgi_index</span>  index.php</span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">fastcgi_param</span>  SCRIPT_FILENAME  <span class="token variable">$document_root</span><span class="token variable">$fastcgi_script_name</span></span><span class="token punctuation">;</span>
    <span class="token directive"><span class="token keyword">include</span>        fastcgi_params</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div></li></ul><h2 id="php" tabindex="-1"><a class="header-anchor" href="#php" aria-hidden="true">#</a> PHP</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># Apache</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> php

<span class="token comment"># Ngnix</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> php-fpm

<span class="token comment"># MySQL</span>
<span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> php-mysql
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h2><h3 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">wget</span> https://dev.mysql.com/get/mysql-apt-config_0.8.14-1_all.deb
<span class="token function">sudo</span> dpkg -i mysql-apt-config_0.8.14-1_all.deb
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u914D\u7F6E\u7248\u672C(\u4E00\u822C\u662F 5.7)\u540E\u5B89\u88C5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> mysql-server
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4E4B\u540E\u91CD\u542F\uFF0C\u5B8C\u6210\u914D\u7F6E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">service</span> mysql restart
mysql -u root -p
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="nmp" tabindex="-1"><a class="header-anchor" href="#nmp" aria-hidden="true">#</a> NMP</h2><p>\u9700\u8981\u5BF9 Nginx \u7684\u914D\u7F6E\u6587\u4EF6\u8FDB\u884C\u4FEE\u6539: \u4E3B\u8981\u6539\u52A8\u7684\u76EE\u6807\u662F\u628A Nginx \u4EE3\u7406\u7AEF\u53E3\u8F6C\u53D1\u7ED9 php-fpm\u3002</p><p>\u9996\u5148\u914D\u7F6E index:</p><div class="language-nginx ext-nginx line-numbers-mode"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">index</span> index.php index.html</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u9700\u8981\u6CE8\u610F\u7684\u662F\uFF0CNginx \u5C06\u7AEF\u53E3\u8F6C\u53D1\u7ED9 php \u9ED8\u8BA4\u7684 9000 \u7AEF\u53E3\u3002\u800C\u901A\u8FC7 apt-get \u5B89\u88C5\u7684 php \u9ED8\u8BA4\u4F7F\u7528\u672C\u5730 sock \u6587\u4EF6\u901A\u4FE1\uFF0C\u9700\u8981\u5BF9 php \u7684\u914D\u7F6E\u8FDB\u884C\u4FEE\u6539\u3002\u8981\u4FEE\u6539\u7684\u6587\u4EF6\u4F4D\u4E8E: <code>/etc/php/7.2/fpm/pool.d/www.conf</code>\uFF0C\u5C06</p><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token key attr-name">listen</span> <span class="token punctuation">=</span> <span class="token value attr-value">/run/php/php7.0-fpm.sock</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6539\u6210:</p><div class="language-ini ext-ini line-numbers-mode"><pre class="language-ini"><code><span class="token key attr-name">listen</span> <span class="token punctuation">=</span> <span class="token value attr-value">127.0.0.1:9000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5982\u679C\u62A5\u4E86 permission limitted \u7684\u9519\u8BEF\uFF0C\u8BF4\u660E php \u6CA1\u6CD5\u8BBF\u95EE html \u6587\u4EF6\u5939\uFF0C\u4FEE\u6539\u914D\u7F6E\u7684 html \u6587\u4EF6\u5939\u6743\u9650\u5373\u53EF\u3002</p></div>`,24);function p(i,l){return e}var t=n(a,[["render",p]]);export{t as default};
