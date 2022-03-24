import{_ as e,f as t}from"./app.72dc54a7.js";const i={},a=t('<h1 id="interrupts-and-system-calls" tabindex="-1"><a class="header-anchor" href="#interrupts-and-system-calls" aria-hidden="true">#</a> Interrupts and System Calls</h1><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>Operating system is the manager of a computer system.</p><p>Remember that OS is itself a program and that a process is a program in execution.</p><p>When there are multiple processes executing, how can the OS control and manage them?</p><ul><li>The OS relies on a special alarm system, called the interrupt processing mechanism.</li><li>When an interrupt occurs, there is a chance for OS to grasp the CPU and make decision and arrangement to control the system.</li></ul><h2 id="i-o-processing" tabindex="-1"><a class="header-anchor" href="#i-o-processing" aria-hidden="true">#</a> I/O Processing</h2><p>One can perform I/O when CPU is doing useful work.</p><p>When I/O is completed, OS needs to put aside its current work and looks at I/O device for next I/O. \u300C\u5F53I/O\u5B8C\u6210\u540E\uFF0C<strong>\u64CD\u4F5C\u7CFB\u7EDF\u9700\u8981\u5C06\u5176\u5F53\u524D\u7684\u5DE5\u4F5C\u653E\u5728\u4E00\u8FB9</strong>\uFF0C\u5E76\u67E5\u770BI/O\u8BBE\u5907\u7684\u4E0B\u4E00\u4E2AI/O\u3002\u300D</p><ul><li>The event that I/O is completed causes an interrupt.</li><li>The suspension (interruption) of current work to handle the event is called <strong>interrupt processing</strong>.</li></ul><p><img src="https://pic.hanjiaming.com.cn/2022/03/23/163eca8be1fea.png" alt="1648020296753.png" loading="lazy"></p><p>Two methods for I/O processing</p><ul><li><p>Synchronous</p></li><li><p>Asynchronous</p></li></ul><p><img src="https://pic.hanjiaming.com.cn/2022/03/23/74e174119ed0d.png" alt="1648020415900.png" loading="lazy"></p><h3 id="synchronous-i-o" tabindex="-1"><a class="header-anchor" href="#synchronous-i-o" aria-hidden="true">#</a> Synchronous I/O</h3><ul><li>I/O\u5F00\u59CB\u540E\uFF0C\u7528\u6237\u7A0B\u5E8F\u5C06\u7B49\u5F85\uFF0C\u76F4\u5230I/O\u5B8C\u6210\u3002</li><li>\u7A0B\u5E8F\u7B49\u5F85\u5E76\u4E0D\u505A\u4EFB\u4F55\u4E8B\u60C5\uFF0C\u76F4\u5230\u6536\u5230I/O\u5B8C\u6210\u4E2D\u65AD\u3002</li><li>\u6BCF\u6B21\u6700\u591A\u53EA\u6709\u4E00\u4E2AI/O\u8BF7\u6C42\u672A\u5B8C\u6210\uFF0C\u6CA1\u6709\u540C\u65F6\u7684I/O\u5904\u7406\u3002</li></ul><h3 id="asynchronous-i-o" tabindex="-1"><a class="header-anchor" href="#asynchronous-i-o" aria-hidden="true">#</a> Asynchronous I/O</h3><ul><li>\u5728I/O\u5F00\u59CB\u540E\uFF0C\u7528\u6237\u7A0B\u5E8F\u7EE7\u7EED\u6267\u884C\uFF0C\u4E0D\u9700\u8981\u7B49\u5F85I/O\u5B8C\u6210\u3002</li><li>\u5F53I/O\u5B8C\u6210\u540E\uFF0C\u7A0B\u5E8F\u5C06\u6536\u5230\u4E00\u4E2A\u4E2D\u65AD\u3002</li><li>\u53EF\u80FD\u6709<strong>\u51E0\u4E2AI/O</strong>\u8BF7\u6C42\u4E00\u8D77\u5DE5\u4F5C</li><li>\u4F7F\u7528\u4E00\u4E2A\u8BBE\u5907\u72B6\u6001\u8868(device-status table )\u6765\u5B58\u50A8\u6BCF\u4E2AI/O\u8BBE\u5907\u7684\u72B6\u6001\uFF0C\u5305\u62EC\u5176\u7C7B\u578B\u548C\u72B6\u6001\u3002</li></ul><p>Device-Status Table</p><p><img src="https://pic.hanjiaming.com.cn/2022/03/23/98223b3d0b7c9.png" alt="1648020607361.png" loading="lazy"></p><h2 id="interrupt" tabindex="-1"><a class="header-anchor" href="#interrupt" aria-hidden="true">#</a> Interrupt</h2><h3 id="interrupt-processing" tabindex="-1"><a class="header-anchor" href="#interrupt-processing" aria-hidden="true">#</a> Interrupt Processing</h3><p>An interrupt is a signal to the CPU to tell it about the occurrence of a major event. \u300C\u4E2D\u65AD\u662F\u7ED9CPU\u7684\u4E00\u4E2A\u4FE1\u53F7\uFF0C\u544A\u8BC9\u5B83\u4E00\u4E2A\u91CD\u5927\u4E8B\u4EF6\u7684\u53D1\u751F\u3002\u300D</p><ul><li>An error in calculation (illegal instruction, division by zero).</li><li>Completion of an I/O.</li><li>Hardware alarm.</li><li>User-generated event (often called a trap or signal).</li></ul><p>\u300CInterrupt is the mechanism the OS uses so that it could turn attention to other activities and to manage resources, because interrupt will seize the CPU. \u300D\u4E2D\u65AD\u662F\u64CD\u4F5C\u7CFB\u7EDF\u4F7F\u7528\u7684<strong>\u673A\u5236</strong>\uFF0C\u4EE5\u4FBF\u5B83\u53EF\u4EE5\u5C06\u6CE8\u610F\u529B\u8F6C\u5411\u5176\u4ED6\u6D3B\u52A8\u5E76\u7BA1\u7406\u8D44\u6E90\uFF0C\u56E0\u4E3A\u4E2D\u65AD\u4F1A\u62A2\u5360CPU\u3002</p><p>Two types of interrupts:</p><ul><li>Maskable interrupt: interrupt that may be ignored or handled later. A lower priority interrupt is maskable.</li><li>Non-maskable interrupt: interrupt that cannot be ignored. The CPU must handle this interrupt immediately. <ul><li>A non-maskable interrupt may be \u201Cover\u201D-interrupted by another non-maskable higher priority one.</li></ul></li></ul><p>Depending on the cause of interrupts, we could classify them into 3 categories:</p><ul><li>Program interrupt <ul><li>Caused by conditions within CPU that requires attention, e.g. illegal instruction, overflow, division by zero, memory access violation, special instruction.</li><li>Sometimes also called traps (or signals in Unix/Linux).</li></ul></li><li>I/O interrupt <ul><li>Caused by I/O related events, e.g. I/O completion or device errors.</li></ul></li><li>Timer interrupt <ul><li>Caused by the hardware timer of the system to handle time-related activities.</li></ul></li></ul><p>\u4E2D\u65AD\u610F\u5473\u7740\u7D27\u6025\u60C5\u51B5\u3002\u5728\u4E00\u4E2A\uFF08\u4E0D\u53EF\u5C4F\u853D\u7684\uFF09\u4E2D\u65AD\u53D1\u751F\u540E\uFF0CCPU\u5C06\u6401\u7F6E\u5B83\u6B63\u5728\u6267\u884C\u7684\u7A0B\u5E8F\uFF0C\u4FDD\u5B58\u7A0B\u5E8F\u8BA1\u6570\u5668\u548C\u5BC4\u5B58\u5668\u7684\u503C\uFF08\u5728\u5806\u6808\u4E0A\uFF09\u3002\u5B83\u4EE5\u4E2D\u65AD\u53F7\u4E3A\u7D22\u5F15\uFF0C\u67E5\u627E\u4E2D\u65AD\u8868\uFF0C\u5BFB\u627E\u6267\u884C\u7684\u7A0B\u5E8F\u3002\u8FD9\u4E2A\u7A0B\u5E8F\u88AB\u79F0\u4E3A\u4E2D\u65AD\u5904\u7406\u7A0B\u5E8F\uFF0C\u6216\u4E2D\u65AD\u670D\u52A1\u7A0B\u5E8F\uFF08ISR\uFF09\u3002\u8FD9\u4E2A\u7A0B\u5E8F\u88AB\u79F0\u4E3A\u4E2D\u65AD\u5904\u7406\u7A0B\u5E8F\u6216\u4E2D\u65AD\u670D\u52A1\u4F8B\u7A0B\uFF08ISR\uFF09\uFF0C\u5B83\u5728\u54CD\u5E94\u4E2D\u65AD\u65F6\u88AB\u6267\u884C\uFF0C\u4EE5\u670D\u52A1\u4E8E\u4E2D\u65AD\u3002</p><img src="https://pic.hanjiaming.com.cn/2022/03/23/7be66f333771d.png" alt="1648021371841.png" style="zoom:33%;"><h3 id="interrupt-handling" tabindex="-1"><a class="header-anchor" href="#interrupt-handling" aria-hidden="true">#</a> Interrupt Handling</h3><ul><li>\u6709\u53EF\u80FD\u5F53\u4E00\u4E2A\u4E2D\u65AD\u88AB\u670D\u52A1\u65F6\uFF0C\u53E6\u4E00\u4E2A\u4E2D\u65AD\u53EF\u80FD\u4F1A\u5230\u6765\u3002 <ul><li>\u5982\u679C\u8FDB\u5165\u7684\u65B0\u4E2D\u65ADY\u7684\u4F18\u5148\u7EA7\u8F83\u4F4E\uFF0C\u5B83\u5C06\u7B49\u5F85\u76F4\u5230\u7B2C\u4E00\u4E2A\u4E2D\u65ADX\u5B8C\u6210\u3002</li><li>\u5982\u679C\u65B0\u4E2D\u65ADY\u7684\u4F18\u5148\u7EA7\u8F83\u9AD8\uFF0C\u5B83\u5C06\u4ECE\u5F53\u524D\u7684\u4E2D\u65AD\u5904\u7406\u7A0B\u5E8FX\u4E2D\u593A\u53D6CPU\u3002</li></ul></li></ul><p><img src="https://pic.hanjiaming.com.cn/2022/03/23/324b6d8b89668.png" alt="1648021486939.png" loading="lazy"></p><h3 id="operating-system-operation" tabindex="-1"><a class="header-anchor" href="#operating-system-operation" aria-hidden="true">#</a> Operating System Operation</h3><p>Almost all OS are interrupt-driven.</p><p>Without interrupt, there is no way the OS can get back the CPU from a program falling into infinite loop.</p><p>\u5728PC\u4E0A\uFF0C\u4F60\u53EF\u4EE5\u7528<code>&lt;Ctrl&gt;&lt;Alt&gt;&lt;Del&gt;</code>\u4E2D\u65AD\u4E00\u4E2A\u7A0B\u5E8F\uFF0C\u5E76\u5728\u4EFB\u52A1\u7BA1\u7406\u5668\u4E0B\u6740\u6B7B\u8BE5\u4EFB\u52A1\uFF0C\u4F46\u4E3A\u4EC0\u4E48\u5462\uFF1F\u5728<code>&lt;Ctrl&gt;&lt;Alt&gt;&lt;Del&gt;</code>\u65F6\uFF0C\u4F1A\u6709\u4E00\u4E2A\u786C\u4EF6\u4E2D\u65AD\u4EA7\u751F\u3002\u65E0\u9650\u5FAA\u73AF\u4E2D\u7684\u7A0B\u5E8F\u5C06\u88AB\u4E2D\u65AD\u3002CPU\u88AB\u4EA4\u7ED9\u4E2D\u65AD\u5904\u7406\u7A0B\u5E8F\uFF08\u4EFB\u52A1\u7BA1\u7406\u5668\uFF09\u3002\u56E0\u6B64\uFF0C\u4F60\u53EF\u4EE5\u6740\u6B7B\u8FD9\u4E2A\u4EFB\u52A1\u3002</p><p>\u5728Unix\u4E2D\uFF0C\u4F60\u53EF\u4EE5\u7528<code>&lt;Ctrl&gt;&lt;C&gt;</code>\u6765\u4E2D\u65AD\u4E00\u4E2A\u7A0B\u5E8F\uFF0C\u4F1A\u6709\u4E00\u4E2A\u4FE1\u53F7\uFF08user trap\uFF09\u88AB\u53D1\u9001\u5230\u7A0B\u5E8F\u4E2D\u3002\u5982\u679C\u7A0B\u5E8F\u4E2D\u6CA1\u6709\u9488\u5BF9\u8BE5\u4FE1\u53F7\u7684\u4E2D\u65AD\u5904\u7406\u7A0B\u5E8F\uFF08\u79F0\u4E3A\u4FE1\u53F7\u5904\u7406\u7A0B\u5E8F\uFF09\uFF0C\u7A0B\u5E8F\u5C06\u88AB\u7EC8\u6B62\u3002\u8FD9\u5C31\u662F\u6240\u8C13\u7684signal processing \uFF08 in system programming \uFF09\u3002</p><p>\u4E2D\u65AD\u5141\u8BB8\u64CD\u4F5C\u7CFB\u7EDF\u5728\u5FC5\u8981\u65F6\u83B7\u5F97\u7CFB\u7EDF\u7684\u63A7\u5236\uFF08\u6709\u4E00\u4E2A\u7279\u6B8A\u4E8B\u4EF6\uFF09\u3002</p><p>Basic interrupts are driven by hardware (often I/O devices or special interrupt pin) to the microprocessor.</p><h4 id="trap" tabindex="-1"><a class="header-anchor" href="#trap" aria-hidden="true">#</a> Trap</h4><p>A <strong>trap</strong> is a software-generated interrupt caused either by an <strong>error</strong> or a <strong>user request</strong>.</p><ul><li>\u8F6F\u4EF6\u9519\u8BEF\u6216\u8F6F\u4EF6\u8BF7\u6C42\u4EA7\u751F\u5F02\u5E38\u6216\u9677\u9631\uFF0C\u4F8B\u5982\u9664\u4EE50\uFF0C\u8BF7\u6C42\u64CD\u4F5C\u7CFB\u7EDF\u670D\u52A1\u3002</li><li>\u4E00\u4E2A\u7CFB\u7EDF\u53EF\u80FD\u60F3\u901A\u8FC7\u505A\u4E00\u4E9B\u4E8B\u60C5\u6765\u56DE\u5E94\u9664\u4EE50\u7684\u9519\u8BEF\uFF08\u4F8B\u5982Java\u5F02\u5E38\uFF09\u3002</li></ul><h4 id="the-timer-mechanism" tabindex="-1"><a class="header-anchor" href="#the-timer-mechanism" aria-hidden="true">#</a> The timer mechanism</h4><ul><li>\u9632\u6B62\u65E0\u9650\u5FAA\u73AF\u548C\u8FDB\u7A0B\u5360\u7528\u8D44\u6E90\u7684\u4E00\u4E2A\u7B80\u5355\u65B9\u6CD5\u3002</li><li>\u8BBE\u7F6E\u4E2D\u65AD\uFF0C\u5728\u7279\u5B9A\u7684\u65F6\u95F4\u6BB5\uFF08\u62A5\u8B66\uFF09\u540E\u53D1\u751F\u3002</li><li>Operating system decrements counter upon timer interrupt.</li><li>\u5F53\u8BA1\u6570\u5668\u8FBE\u5230\u96F6\u65F6\uFF0C\u5C31\u4F1A\u53D1\u751F\u4E00\u4E9B\u9519\u8BEF\u3002</li><li>\u6740\u6B7B\u8FDB\u7A0B\u6216\u593A\u56DE\u8D44\u6E90\uFF08\u5982\u89E3\u9501\u6587\u4EF6\uFF09\u3002</li><li>\u6709\u65F6\uFF0C\u8FD9\u88AB\u79F0\u4E3A\u770B\u95E8\u72D7\u5B9A\u65F6\u5668\uFF08watchdog timer \uFF09\u3002</li><li>\u7531timer interrupt mechanism \u63D0\u4F9B\u3002</li></ul><p>In Unix, a special timer interrupt handler, called the clock routine, plays a central role in process scheduling and resource management. It is triggered by the hardware clock every 1/60 second in the original Unix design.\u300C\u5B83\u7531\u539F\u59CBUNIX\u8BBE\u8BA1\u4E2D\u7684\u6BCF1/60\u79D2\u89E6\u53D1\u786C\u4EF6\u65F6\u949F\u3002\u300D</p><h2 id="user-and-kernel-mode" tabindex="-1"><a class="header-anchor" href="#user-and-kernel-mode" aria-hidden="true">#</a> User and Kernel Mode</h2><p>\u7531\u4E8E\u4E2D\u65AD\u5904\u7406\u5F88\u91CD\u8981\uFF0C\u5728\u7F16\u5199\u4E2D\u65AD\u5904\u7406\u7A0B\u5E8F\u65F6\u5FC5\u987B\u7279\u522B\u5C0F\u5FC3\u3002\u5141\u8BB8\u6216\u7981\u7528\u4E2D\u65AD\u662F\u975E\u5E38\u91CD\u8981\u7684\u3002\u56DE\u987E\u4E00\u4E0B\uFF0C\u4E2D\u65AD\u662F\u64CD\u4F5C\u7CFB\u7EDF\u5728\u5FC5\u8981\u65F6\u6536\u56DECPU\u7684\u673A\u5236\u3002\u5982\u679C\u7528\u6237\u7A0B\u5E8F\u53EF\u4EE5\u7981\u7528\u4E2D\u65AD\uFF0C\u64CD\u4F5C\u7CFB\u7EDF\u5C31\u6CA1\u6709\u529E\u6CD5\u6536\u56DECPU\u5E76\u505A\u4E00\u4E9B\u8865\u6551\u63AA\u65BD\u3002\u5176\u7ED3\u679C\u662F\u7CFB\u7EDF\u6302\u8D77\uFF08\u4F8B\u5982\uFF0CWindows\u84DD\u5C4F\uFF09\u3002</p><p>\u56E0\u6B64\uFF0C\u786C\u4EF6\u5E94\u8BE5\u63D0\u4F9B\u5E2E\u52A9\uFF0C\u9632\u6B62\u666E\u901A\u7528\u6237\u6267\u884C\u4E0E\u4E2D\u65AD\u6709\u5173\u7684\u7279\u6B8A\u547D\u4EE4\u3002\u5C31\u8BA1\u7B97\u673A\u7ED3\u6784\u800C\u8A00\uFF0C\u8FD9\u4E9B\u547D\u4EE4\u88AB\u79F0\u4E3A\u7279\u6743\u547D\u4EE4\uFF0C\u5305\u62ECI/O\u547D\u4EE4\u3002\u5E38\u89C1\u7684\u89E3\u51B3\u65B9\u6848\u662F\u5728CPU\u786C\u4EF6\u4E2D\u63D0\u4F9B\u53CC\u64CD\u4F5C\u6A21\u5F0F\uFF08dual operation mode )\u3002</p><p>\u5982\u679C\u4E00\u4E2A\u7528\u6237\u8FDB\u7A0B\u5728\u7528\u6237\u6A21\u5F0F\u4E0B\u6267\u884C\uFF0C\u5B83\u5982\u4F55\u505A\u9700\u8981\u6267\u884C\u7279\u6743\u6307\u4EE4\u7684I/O\u5462\uFF1F\u901A\u8FC7\u7CFB\u7EDF\u8C03\u7528\u5B9E\u73B0\u3002\u7CFB\u7EDF\u8C03\u7528\u662F\u64CD\u4F5C\u7CFB\u7EDF\u7684\u4E00\u4E2A\u5165\u53E3\u7AEF\u53E3\u3002\u7CFB\u7EDF\u8C03\u7528\u5B9E\u9645\u4E0A\u662F\u4E00\u4E2Atrap\uFF0C\u5B83\u4ECE\u7528\u6237\u6A21\u5F0F\u53D8\u4E3A\u5185\u6838\u6A21\u5F0F\uFF0C\u6267\u884C\u7279\u6743I/O\u6307\u4EE4\uFF0C\u4ECE\u7CFB\u7EDF\u8C03\u7528\u8FD4\u56DE\uFF0C\u5E76\u6062\u590D\u5230\u7528\u6237\u6A21\u5F0F\uFF0C\u7EE7\u7EED\u6267\u884C\u3002</p><img src="https://pic.hanjiaming.com.cn/2022/03/23/f13e030a66fac.png" alt="1648022850591.png" style="zoom:67%;"><h2 id="system-calls" tabindex="-1"><a class="header-anchor" href="#system-calls" aria-hidden="true">#</a> System Calls</h2><p>A system call is a programming interface to the services provided by the OS.</p><p>The nature of a system call is similar to a procedure call (a very special procedure call).</p><ul><li>Often written in a high-level language like C/C++.</li><li><strong>User programs could not execute privileged instructions, except through the OS.</strong></li><li>System call provides the interface to execute these system functions by user programs.</li><li>To facilitate programmers, a high-level Application Program Interface (API) is often provided (e.g. Java API).</li><li>An API hides the details about system calls from programmers</li></ul><p>Example system call sequence to copy the contents of a file to another file.</p><p><img src="https://pic.hanjiaming.com.cn/2022/03/23/8411788d3db2b.png" alt="1648023094304.png" loading="lazy"></p><p>Inside the OS, a number would beassociated with each system call.</p><ul><li>System-call interface maintains a table indexed according to these numbers.</li><li>Such a table looks like a table ofinterrupt handlers.</li></ul><img src="https://pic.hanjiaming.com.cn/2022/03/23/7764a95e9e6c5.png" alt="1648023259068.png" style="zoom:50%;"><p>When the user process executesthe system call, the system call interface generates a software trap.</p><p>The CPU switches to kernel mode and the system callroutine is executed (like interrupt).</p><p>Status of the system call is returned to the caller,together with any return values.</p><p>The caller needs to know nothing about how thesystem call is implemented.</p><img src="https://pic.hanjiaming.com.cn/2022/03/23/52d3671d62dd2.png" alt="1648023302480.png" style="zoom:50%;"><img src="https://pic.hanjiaming.com.cn/2022/03/23/6e259014def21.png" alt="1648023316192.png" style="zoom:50%;"><h2 id="operating-system-structure" tabindex="-1"><a class="header-anchor" href="#operating-system-structure" aria-hidden="true">#</a> Operating System Structure</h2><p><img src="https://pic.hanjiaming.com.cn/2022/03/23/6e259014def21.png" alt="1648023316192.png" loading="lazy"></p><p><img src="https://pic.hanjiaming.com.cn/2022/03/23/c9e4a3e226be8.png" alt="1648023613322.png" loading="lazy"></p><p><img src="https://pic.hanjiaming.com.cn/2022/03/23/2fbd62c408a93.png" alt="1648023634110.png" loading="lazy"></p><p><img src="https://pic.hanjiaming.com.cn/2022/03/23/7f1b36dfc8361.png" alt="1648023660743.png" loading="lazy"></p>',72);function r(n,l){return a}var o=e(i,[["render",r]]);export{o as default};
