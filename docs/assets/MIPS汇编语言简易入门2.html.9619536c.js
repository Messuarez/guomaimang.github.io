import{_ as e,f as t}from"./app.fd424ec0.js";const i={},s=t('<h1 id="mips\u6C47\u7F16\u8BED\u8A00\u7B80\u6613\u5165\u95E82" tabindex="-1"><a class="header-anchor" href="#mips\u6C47\u7F16\u8BED\u8A00\u7B80\u6613\u5165\u95E82" aria-hidden="true">#</a> MIPS\u6C47\u7F16\u8BED\u8A00\u7B80\u6613\u5165\u95E82</h1><h2 id="review" tabindex="-1"><a class="header-anchor" href="#review" aria-hidden="true">#</a> Review</h2><h3 id="the-role-of-assembly-language" tabindex="-1"><a class="header-anchor" href="#the-role-of-assembly-language" aria-hidden="true">#</a> The role of assembly language</h3><ul><li>a symbolic human-understandable language\uFF08\u4E00\u79CD\u8C61\u5F81\u6027\u7684\u4EBA\u7C7B\u6613\u61C2\u7684\u8BED\u8A00\uFF09</li><li>the symbolic representation of machine language\uFF08\u673A\u5668\u8BED\u8A00\u7684\u7B26\u53F7\u8868\u793A\uFF09</li><li>assembly language \u2014&gt; assembler \u2014&gt; machine language</li><li>two specific roles: <ol><li>high-level language \u2014 complier \u2014 assembly language</li><li>use assembly language for programming directly</li></ol></li></ul><h3 id="brief-introduction-to-mips" tabindex="-1"><a class="header-anchor" href="#brief-introduction-to-mips" aria-hidden="true">#</a> Brief introduction to MIPS</h3><ul><li><p>register-based architecture</p></li><li><p>Reduced Instruction Set Computer (RISC)</p></li><li><p>three key points: (1) registers (2) memory (3) instructions</p><ul><li>10 temporary registers t0-t9</li><li>$0 : constant 0</li></ul></li><li><p>32 general-purpose registers, each having 32 bits</p></li><li><ul><li>naming: numbers or specific names</li><li>some are reserved, some are used by user programmers</li><li>other registers: Hi and Lo, etc.</li></ul></li></ul><h3 id="memory-and-address-in-mips-situation" tabindex="-1"><a class="header-anchor" href="#memory-and-address-in-mips-situation" aria-hidden="true">#</a> Memory and Address in MIPS Situation</h3><ul><li>byte, half-word, word, double-word</li><li>each byte has a 32-bit long address <ul><li>contiguous bytes and the address</li><li>the address of an instruction is always the multiply of 4</li></ul></li></ul><h2 id="hello-assembly-world" tabindex="-1"><a class="header-anchor" href="#hello-assembly-world" aria-hidden="true">#</a> Hello, Assembly World</h2><p>Note that the overflow mentioned in this article is <strong>Arithmetic Overflow</strong></p><h3 id="example-of-add" tabindex="-1"><a class="header-anchor" href="#example-of-add" aria-hidden="true">#</a> Example of Add</h3><img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/02/17/d9fadb0fc666e.png" alt="CleanShot 2021-02-17 at 14.03.34@2x.png" title="CleanShot 2021-02-17 at 14.03.34@2x.png"><ul><li>.text\uFF1A\u4EE5\u4E0B\u51E0\u884C\u662F\u7A0B\u5E8F\u7684\u6E90\u4EE3\u7801</li><li>.globl main\uFF0C\u6807\u8BC6\u7B26\u201C main\u201D\u5C06\u5728\u6B64\u6E90\u6587\u4EF6\u4E4B\u5916\uFF08\u5373\u5168\u5C40\u4F7F\u7528\uFF09\u7528\u4F5C\u4E3B\u5185\u5B58\u4E2D\u7279\u5B9A\u4F4D\u7F6E\u7684\u6807\u7B7E\uFF1B\u5B83\u5B9A\u4E49\u4E86\u4E00\u4E2A\u7B26\u53F7\u5730\u5740\uFF0C\u5B83\u662F\u6E90\u4EE3\u7801\u4E2D\u7684\u4E00\u4E2A\u540D\u79F0\uFF0C\u6307\u4EE3\u5185\u5B58\u4E2D\u7684\u4F4D\u7F6E\u3002\u5728\u6B64\u793A\u4F8B\u4E2D\uFF0C\u201C main\u201D\u4EE3\u8868\u7B2C\u4E00\u6761\u673A\u5668\u6307\u4EE4\u7684\u5730\u5740\uFF080x00400000\uFF09</li></ul><h3 id="integer-arithmetic" tabindex="-1"><a class="header-anchor" href="#integer-arithmetic" aria-hidden="true">#</a> Integer Arithmetic</h3><p>\u5BC4\u5B58\u5668\u4E2D\u4F7F\u752832\u4F4D\u8868\u793A\u6574\u6570; const \u4E3A 16\u4F4D,\u8865\u9F50\u540E\u4E3A32\u4F4D\u3002</p><p>In MIPS instructions, constant use hex or signed number. But the the memoey will save it as encoding. If const is a negative number, const will automatically by two&#39;s complement represention convert to binary encoding. **Const is Immediate,which is lenth of 16 bit (max in dec = 2^16 = 65536) **</p><p>MIPS programs itself does not record if a number is signed or un signed. This is the responsibility of programmers.</p><h4 id="arithmetic-overflow" tabindex="-1"><a class="header-anchor" href="#arithmetic-overflow" aria-hidden="true">#</a> Arithmetic Overflow</h4><p>The concept of overflow is artificially determined. It has nothing to do with the program.</p><p><strong>We generally think that</strong> in Unsigned form</p><ul><li>overflow: the carry out bit of the highest column is 1</li><li>e.g., 1010 + 1100 = 1 0110</li></ul><p><strong>We generally think that</strong> in 2\u2019s complement form</p><ul><li>recall: there is an overflow if both operands(\u64CD\u4F5C\u6570) have the same sign but the result has the opposite sign</li></ul><img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/02/17/d1ca28187f0ca.png" alt="CleanShot 2021-02-17 at 17.01.00@2x.png" title="CleanShot 2021-02-17 at 17.01.00@2x.png"><p>So\uFF0Chow can we realize it? The right to determine if use overflow judgment is in the hands of the programmer. We can use the function of MIPS itself to check whether the first bit is 1. As for whether to use it or not, the programmer shall judge by himself.</p><h2 id="add-instructions" tabindex="-1"><a class="header-anchor" href="#add-instructions" aria-hidden="true">#</a> Add Instructions</h2><h3 id="instruction-addu-and-add" tabindex="-1"><a class="header-anchor" href="#instruction-addu-and-add" aria-hidden="true">#</a> Instruction addu and add</h3><p>addu d, s, t</p><ul><li>s + t -&gt; d ( s, t, d all are registers)</li><li>meaning of \u201Cu\u201D: ignore the outcome&#39;s &quot;overflow register&quot; bit <strong>Note: it does not mean \u201Cunsigned\u201D, maybe you can undeerstand it as &quot;unchecking&quot;.</strong></li></ul><p>add d, s, t</p><ul><li>s + t -&gt; d ( s, t, d all are registers)</li><li>difference: detect outcome&#39;s&quot;overflow register&quot; bit and when the outcome&#39;s &quot;overflow register&quot; bit =1, there will cause an program interrupt</li></ul><p><code>ADD</code>\u548C<code>ADDU</code>\u90FD\u53EF\u4EE5\u9002\u7528\u4E8E<strong>\u6709\u7B26\u53F7/\u65E0\u7B26\u53F7\u6570</strong>\u7684\u52A0\u6CD5\uFF0C\u5176\u533A\u522B\u53EA\u662F<strong>\u662F\u5426\u68C0\u6D4B &quot;detect outcome&#39;s&quot;overflow register&quot; bit \u5E76\u4F5C\u51FA\u64CD\u4F5C</strong></p><p>Most assembly language programmers deal with Arithmetic Overflow by making sure that the operands won\u2019t cause it. Usually, they will use addu.</p><h3 id="instruction-addiu" tabindex="-1"><a class="header-anchor" href="#instruction-addiu" aria-hidden="true">#</a> Instruction addiu</h3><ul><li>addiu: add immediate <ul><li>immediate value: recall I-type instructions</li><li>addiu d, s, const</li><li>s + const -&gt; d;</li></ul></li></ul><p>Const has 16 bits. Again, we have the problem: add s (32 bits) and const (16 bits)</p><ul><li>recall, we have zero-extension for bit-wise OR, ori</li><li>sign-extension: copy the 15th bit (most significant bit)</li><li>1111 1111 1111 1111 <strong>1</strong> 010 1101 1110 1101</li></ul><h3 id="subtraction-instructions" tabindex="-1"><a class="header-anchor" href="#subtraction-instructions" aria-hidden="true">#</a> Subtraction Instructions</h3><ul><li>subu/sub in constrast to addu/add <ul><li>subu/sub d, s, t</li><li>s - t -&gt; d</li></ul></li><li>there are no subi/subiu <ul><li>instead addi/addiu is used</li><li>example: if you want to subtract 3, use addiu $8, $10, -3</li></ul></li></ul><p>If const is a negative number, const will automatically by two&#39;s complement represention convert to binary encoding.</p><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3><img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/02/17/7b61d349217df.png" alt="CleanShot 2021-02-17 at 18.44.48@2x.png" title="CleanShot 2021-02-17 at 18.44.48@2x.png"><p>\u8FD9\u4E2Aprogram \u662F\u8BA1\u7B975 *x -24\uFF0C\u6211\u4EEC\u5047\u5B9Ax =12</p><ol><li>\u4F7F\u7528ori\u5C06 12 \u4E0E 0 \u7684 bitwise or \u503C\u653E\u5230 $8</li><li>\u4F7F\u7528 $9 \u8D4B\u503C\u4E3A shift left 2\u4F4D \u7684 $8\uFF0C\u5728\u5341\u8FDB\u5236\u4E0A $9 = $8 * 2^2\uFF0C\u5373$9 = 4x = 4*12</li><li>$9 = $9 + $8\uFF0C\u5373\u5728\u5341\u8FDB\u5236\u4E0A\uFF0C$9 = 5x</li><li>$9 = $9 - 74</li></ol><h3 id="summary-of-addition-instructions" tabindex="-1"><a class="header-anchor" href="#summary-of-addition-instructions" aria-hidden="true">#</a> Summary of addition instructions</h3><table><thead><tr><th>type</th><th>instruction</th></tr></thead><tbody><tr><td>load const to r</td><td>ori r, $0, const</td></tr><tr><td>load r2 to r1</td><td>ori r1, $0, r2</td></tr><tr><td>r2 = r1 + const</td><td>addiu r2, r1 ,const</td></tr><tr><td>r3 = r2 + r1</td><td>addu r3, r1, r2</td></tr><tr><td>r2 = r1 - const</td><td>addiu r2 ,r1 , -3</td></tr><tr><td>r3 = r1 - r2</td><td>subu r3, r1, r2</td></tr></tbody></table><h2 id="multiplication-instructions" tabindex="-1"><a class="header-anchor" href="#multiplication-instructions" aria-hidden="true">#</a> Multiplication Instructions</h2><p>How many bits do we need?</p><ul><li>check decimal: 99 x 99 = 9801</li><li>generally: the product of two integers expressed with N-bit binary may need 2N bits</li><li>that is, we now need two registers to store the result</li></ul><h3 id="hi-and-lo-registers" tabindex="-1"><a class="header-anchor" href="#hi-and-lo-registers" aria-hidden="true">#</a> Hi and Lo registers</h3><img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/02/17/1b898294294ab.png" width="400px"><h3 id="instructions-mult-and-multu" tabindex="-1"><a class="header-anchor" href="#instructions-mult-and-multu" aria-hidden="true">#</a> Instructions mult and multu</h3><p>Again, Note that MIPS programs itself does not record if a number is signed or un signed. This is the responsibility of programmers.</p><p>mult s, t / multu s, t</p><ul><li>automatically stores the result in hi and lo</li><li>difference: mult for 2\u2019s complement form; multu for unsigned</li><li>both mult and multu would not check for overflow (but overflow could happen \u2014 again, it\u2019s the programmer\u2019s responsibility; blame the programmers)</li></ul><p>The reason for the distinction: the multiplication method of signed and unsigned numbers is different. But it is the same in addition.</p><h3 id="access-the-multiplication-result" tabindex="-1"><a class="header-anchor" href="#access-the-multiplication-result" aria-hidden="true">#</a> Access the Multiplication Result</h3><p>Result (two parts) is stored in hi and lo</p><ul><li>two specific instructions: <ul><li>mfhi d # move from hi to register d</li><li>mflo d # move from lo to register d</li><li>you have to move the result from hi and lo to registers first</li></ul></li></ul><p>note: no other instructions can access hi and lo</p><h3 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1" aria-hidden="true">#</a> Example</h3><img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/02/18/ac429a480d833.png" alt="CleanShot 2021-02-18 at 09.53.08@2x.png" title="CleanShot 2021-02-18 at 09.53.08@2x.png"><h2 id="division-instructions" tabindex="-1"><a class="header-anchor" href="#division-instructions" aria-hidden="true">#</a> Division Instructions</h2><p>div and divu</p><p>With N-bit integer division, we have two results of N-bit each</p><p>op1 / op2: op1 = op2 x quotient + remainder</p><p>again, we need hi and lo to store the results</p><img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/02/18/6e1c81c87f7c4.png" alt="image.png" title="image.png"><p>div s, t and divu s, t : divide s by t; div for 2\u2019s complement, divu for unsigned</p><h4 id="memory-access" tabindex="-1"><a class="header-anchor" href="#memory-access" aria-hidden="true">#</a> Memory Access</h4><p>Memory access: how to copy data from memory into registers, and also, from registers to memory.</p><p>All operations are conducted over registers\u2014 need to move operands in registers first</p><ul><li>load: memory -&gt; register</li><li>store: register -&gt; memory</li></ul><p><strong>Recall: Memory Address in 32-bits</strong></p><ol><li>Basic unit is byte \u2014 each byte has an address (32bits)</li><li>memory is access in contiguous bytes: e.g., word (four bytes) We use the address of the lowest-byte to refer to the contiguous bytes</li><li>alignment restriction: the address of a word is always a multiple of four</li><li>a instruction is one-word long \u2014 the address of an instruction is always word aligned</li></ol><h3 id="two-instructions-lw-and-sw" tabindex="-1"><a class="header-anchor" href="#two-instructions-lw-and-sw" aria-hidden="true">#</a> Two instructions: lw and sw</h3><ul><li>use a base register and offset to calculate address</li><li>lw d, offset (b) <ul><li>b is a register storing the base address;</li><li>offset is a 16-bit number in 2\u2019s complement form;</li><li>address = base address + offset; load the content in address to register d</li></ul></li></ul><p>similarly, we have sw t, offset (b)</p><h3 id="set-the-base-address" tabindex="-1"><a class="header-anchor" href="#set-the-base-address" aria-hidden="true">#</a> Set the Base Address</h3><p>Combination of two instructions lui and ori</p><ul><li>lui d, const # copy const to the upper two bytes (16 bits) of the register d <strong>(the lower two bytes are 0)</strong></li><li>ori d, s, imm # if we use $0, equivalently, <strong>we set the lower two bytes of d as imm (why lower two bytes? \u2014 zero extension)</strong></li></ul><p>As a result: d stores the desired base address</p><p>Isn\u2019t it complex if setting the base address whenever loading or storing data? note: address = base address + offset once base address is set, we can vary the offset to access memory</p><p>It would be nice if we can use symbols to represent addresses in memory much better readability \u2014 symbolic language</p><p>Fortunately, MIPS supports this feature.We can use names (symbols) to refer to memory locations. e.g., x, y, z, boy, age, \u2026 These names are called symbolic addresses</p><h3 id="symbolic-address" tabindex="-1"><a class="header-anchor" href="#symbolic-address" aria-hidden="true">#</a> Symbolic Address</h3><h4 id="symbolic-address-1" tabindex="-1"><a class="header-anchor" href="#symbolic-address-1" aria-hidden="true">#</a> symbolic address</h4><p>the symbolic address means the address where the symbol put in, not the address the symbol point to.</p><p>The data section in MIPS starts at address 0x10000000.</p><h4 id="example-2" tabindex="-1"><a class="header-anchor" href="#example-2" aria-hidden="true">#</a> Example</h4><img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/02/18/1cb126d68318d.png" alt="CleanShot 2021-02-18 at 18.39.38@2x.png" title="CleanShot 2021-02-18 at 18.39.38@2x.png"><p>As a result</p><ul><li>the symbolic address x = 0x10000000</li><li>symbolic address poly = 0x10000004 (each byte has an address, a word = 4 bytes)</li></ul><p>Equivalently, we have defined two values at two memory locations: value 17 at x (0x10000000), value 0 at poly (0x10000004)</p><h2 id="\u8003\u8BD5\u7B14\u8BB0" tabindex="-1"><a class="header-anchor" href="#\u8003\u8BD5\u7B14\u8BB0" aria-hidden="true">#</a> \u8003\u8BD5\u7B14\u8BB0</h2><ol><li><p>Write the assembly instruction that fills register $10 with 0x10000000</p><ul><li>A. ori $10, $0, 0x10000000</li><li>B. ori $10, $10, 0x1000</li><li>C. lui $10, 0x10000000</li><li>\u6B63\u786E D. lui $10, 0x1000</li></ul></li></ol><p>\u56E0\u4E3Aori \u62D3\u5C55\u9AD8\u4F4D\u4E3A0\uFF0Clui\u62D3\u5C55\u4F4E\u4F4D\u4E3A0</p>',97);function a(r,o){return s}var l=e(i,[["render",a]]);export{l as default};
