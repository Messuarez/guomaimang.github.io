import{_ as e,f as i}from"./app.72dc54a7.js";const t={},l=i('<h1 id="cpu-scheduling" tabindex="-1"><a class="header-anchor" href="#cpu-scheduling" aria-hidden="true">#</a> CPU Scheduling</h1><h2 id="scheduling" tabindex="-1"><a class="header-anchor" href="#scheduling" aria-hidden="true">#</a> Scheduling</h2><p>An operating system executes a variety of programs for users.</p><p>When a program is executed, it becomes a process, i.e. a process is a program in execution.</p><p>In an OS, there are multiple processes executing at the same time.</p><ul><li>Some computer systems have multiple CPUs, but most smaller ones have only one CPU.</li><li>When the number of processes is more than number of CPUs, each CPU can only be allocated to a process for execution at each moment.</li><li>Not all process can receive the CPU service at any moment.</li><li>Process would alternate between \u201Cserved by a CPU\u201D (running) and \u201Cwaiting\u201D (ready/waiting) states. There are other possibilities to the process state.</li></ul><p>We are concerned about the decision of which process should get the CPU when the CPU is not in used.</p><ul><li>This is called CPU scheduling, and the operating system component that makes this decision is called the CPU scheduler.</li><li>The CPU scheduler needs to maximize CPU utilization in the presence of multi-programming.</li></ul><p><strong>Scheduling is one would like to serve the CPU bursts effectively.</strong></p><p>\u5BF9CPU\u548CI/O\u7A81\u53D1\u4E8B\u4EF6\u7684\u4ED4\u7EC6\u89C2\u5BDF\u4EE5\u53CA\u901A\u8FC7CPU\u7A81\u53D1\u4E8B\u4EF6\u76F4\u65B9\u56FE\u7684\u5206\u5E03\u8868\u660E\u4E86CPU\u8C03\u5EA6\u7684\u771F\u6B63\u9700\u8981\u3002</p><p><img src="https://pic.hanjiaming.com.cn/2022/03/23/c0ec24dff7598.png" alt="1648030970354.png" loading="lazy"></p><h2 id="scheduling-algorithms" tabindex="-1"><a class="header-anchor" href="#scheduling-algorithms" aria-hidden="true">#</a> Scheduling Algorithms</h2><ul><li>First Come First Serve (FCFS)</li><li>Shortest Job First (SJF)</li><li>Shortest Remaining Time (SRT)</li><li>Priority (PR)</li><li>Round Robin (RR)</li><li>Multi-Level Queue</li><li>Multi-Level Feedback Queue</li></ul><h2 id="scheduling-consideration" tabindex="-1"><a class="header-anchor" href="#scheduling-consideration" aria-hidden="true">#</a> Scheduling Consideration</h2><ul><li>CPU utilization <ul><li>\u7528\u4E8E\u5B9E\u9645\u5DE5\u4F5C\u7684CPU\u65F6\u95F4\u767E\u5206\u6BD4\uFF08\u975E\u7A7A\u95F2\uFF09</li><li>Want high CPU utilization.</li></ul></li><li>Throughput <ul><li>Number of processes completing execution per time unit.</li><li>Want high throughput.</li></ul></li><li>Turnaround time <ul><li>Amount of time to complete process execution since arrival.</li><li>Want short turnaround time.</li></ul></li><li>Waiting time <ul><li>Amount of time a process spends waiting in ready queue.</li><li>Want short waiting time.</li></ul></li><li>Response time <ul><li>Amount of time from the moment a request was submitted until the first response is produced (may not be output).</li><li>Want short response time.</li></ul></li></ul>',15);function s(n,a){return l}var r=e(t,[["render",s]]);export{r as default};
