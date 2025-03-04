---
article: false
date: 2021-05-01
index: 1
---

# Components & Interconnects

## 计算机组件

计算机主要是由以下三部分组成

- 中央处理器（CPU）
  - CPU =控制单元（CU）+算术和逻辑单元（ALU）
  - 两个功能：控制和计算
- IO
  - 因为数据和指令需要进入系统
  - 并且我们需要输出结果
- 主存（Main Memory）
  - 需要临时存储代码（程序）和结果

![](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/01/20210120133231361.png)

## 寄存器（Register）：存储信息的地方

- 程序计数器（PC）：也称为指令地址寄存器；它存储将要执行的下一条指令的内存地址；在获取指令后它将增加
- 指令寄存器（IR）：保存当前正在执行的指令
- 内存地址寄存器（MAR）：它存储将从中将数据提取到CPU的内存地址或将数据发送到的内存地址
- 内存缓冲寄存器（MBR）：它存储与即时访问存储器之间传输的数据

## 指令（Instruction）

- 指令是由CPU完成的算术或逻辑运算
  - ADD：将两个数字加在一起
  - COMPARE：比较数字
  - JUMP：跳转到RAM地址
  - LOAD：将信息从RAM加载到CPU
- 指令集是计算机支持的指令集
  - 取决于硬件–不同的体系结构将支持不同的指令集

## 程序（Program）是什么

程序：一系列指令

- 不能使用C，Java，Python等高级语言编写程序语句，但可以把他们翻译成程序语句
- 每个程序语句将转换为一系列指令
- 例如：IN，ADD，JUMP，LOAD，OUT
- 旨在实现一定功能

机器语言编写程序不仅难读,难写而且非常不灵活.

### 用汇编语言开发程序

若用符号表示跳转位置和变量位置，是否简化了问题？

于是，汇编语言出现：用助记符表示操作码，用标号表示位置，用助记符表示寄存器

![](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/01/20210120145327752.png)

用汇编语言编写的优点是： 不会因为增减指令而需要修改其他指令 不需记忆指令编码，编写方便 可读性比机器语言强。不过，这带来新的问题，是什么呢？人容易了，可机器不认识这些指令了.所以，我们需将汇编语言转 换为机器语言！ 我们用汇编程序作为中介进行转换

但是，我们进一步认识汇编语言，会发现汇编语言(源)程序由汇编指令构成

- 什么是汇编指令？
  - 用助记符和标号来表示的指令（与机器指令一一对应）
- 指令又是什么呢？
  - 包含操作码和操作数或其地址码 
    - 机器指令用二进制表示
    - 汇编指令用符号表示
  - 只能表达这些：取（或存一个数）、两个数加（或减、乘、除、与、或等）、根据运算结果判断是否转移执行

想象用汇编语言编写复杂程序是怎样的情形？ （例如，用汇编语言实现排序（sort）、矩阵相乘） 需要描述的细节太多了！程序会很长很长！而且在不同 结构的机器上就不能运行！

机器语言和汇编 语言都是面向机 器结构的语言， 故它们统称为机 器级语言

结论：用汇编语言比机器语言好，但是，还是很麻烦！

### 高级编程语言

- 它们与具体机器结构无关
- 面向算法描述，比机器级语言描述能力强得多
- 高级语言中一条语句对应几条、几十条甚至几百条指令
- 有“面向过程”和“面向对象”的语言之分
- 处理逻辑分为三种结构 • 顺序结构、选择结构、循环结构
- 有两种转换方式：“编译”和“解释” 
  - 编译程序(Complier)：将高级语言源程序转换为机器级目 标程序，执行时只要启动目标程序即可
  - 解释程序(Interpreter )：将高级语言语句逐条翻译成机器 指令并立即执行，不生成目标文件

### 经典案例：Hello，world的编写

我们用C++ 一个简单的程序

```c++
#include <stdio.h>
int main()
{
printf(hello, world\n);
}
```

![](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/01/20210120150327166.png)![](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/01/20210120150406829.png)

![](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/01/20210120150426458.png)

数据经常在各存储部件间传送。故现代计算机大多采用“缓存”技术  
所有过程都是在CPU执行指令所产生的控制信号的作用下进行的

![](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/01/20210120150640628.png)

![](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/01/20210122050908628.png)

## 指令周期（Instruction Cycle）

两个主要步骤：取、执行
**指令周期（Instruction Cycle） = 提取周期（Fetch Cycle）+ 执行周期（Execute Cycle）**, 可能会有中中断周期

![](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/01/20210120134928829.png)

所有步骤均由控制单元使用内置时钟（周期）控制：synchronization
因此，一条指令通常消耗一个以上的时钟周期（步骤和顺序的调节器）

## 提取周期（Fetch Cycle）中的动作

- 程序计数器（PC）已保存要提取的下一条指令的地址
  - 指令顺序执行
- 处理器从PC指向的内存位置获取指令（需要先将地址放入MAR）
- 指令加载到指令寄存器（IR）中（需要先将指令放入MBR）
- PC计数器增量（顺序执行）
  - 除非在执行周期中另有说明（例如，从IF-THEN-ELSE，循环语句）
- 处理器解释指令并准备执行所需的操作

## 执行周期（Execute Cycle）中的动作

取决于指令

- 处理器-内存
  - CPU和主存储器之间的数据传输
- 处理器-I / O
  - CPU和I / O模块之间的数据传输
- 数据处理
  - 对数据进行一些算术或逻辑运算（ALU运算）
- 控制
  - 操作顺序的变更，例如分支和跳转（来自循环，函数调用等语句）
- 以上组合

## 程序执行示例

最初：PC：300指令是IR中的第一位

![](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/01/20210120140002851.png)

1. 首先，程序计数器（也称为指令地址寄存器/PC）中记录了内存中下一条应该执行的指令地址为300

2. 之后，IR获取了地址为在内存中地址为300的程序指令1940（虽然我们不知道1940代表的指令是什么意思,我们假设它代表的意思为获取内存地址为940的值，故AC此时编程0003）
3. 同时，PC更新为下一个内存地址301。
4. 之后，IR获取了地址为在内存中地址为301的程序指令5941，（虽然我们不知道5941代表的指令是什么意思,我们假设它代表的意思为把内存地址为941的值和当前的值进行加和并存储到AC中，故AC此时编程0005）
5. 同时，PC更新为下一个内存地址302.
6. 之后，IR获取了地址为在内存中地址为302的程序指令2941（虽然我们不知道2941代表的指令是什么意思,我们假设它代表的意思为把当前AC的值存储到内存地址为941的地方，故AC此时编程0003）
7. 同时，PC更新为下一个内存地址303.
8. ......

用图来看是这样的

![](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/01/20210120142135741.png)

## 中断（Interrupts）

中断：其他模块（例如I / O）可以中断正常处理顺序的机制
问题：想象一下，如果你在通话中并接到另一个来电，该怎么办？

也许我会考虑这另一个来电是否重要，重要的话，我会接听。不重要的话，我会等当前的电话打完后再处理另一个，即判断是否有接听的必要

中断源

- 程序，例如溢出，除以零
- 计时器，例如由内部处理器计时器生成
- I / O，例如从I / O控制器
- 硬件故障，例如内存奇偶校验错误

## 通过中断转移控制（Transfer of Control via Interrupts）

如果发生中断：

1. 处理器暂停当前程序的执行并保存其上下文
2. 将PC设置为中断处理程序的起始地址

![](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/01/20210120142819666.png)

## 中断周期（Interrupt Cycle）

中断可能不可避免，所以，我们需要制定相关流程

1. 处理器检查中断
  2. 由中断信号指示
3. 如果没有中断，则获取下一条指令
4. 如果中断待处理：
  5. 暂停当前程序的执行
  6. 保存上下文
  7. 将PC设置为中断处理程序例程的起始地址
  8. 处理中断
  9. 恢复上下文并继续中断的程序

## 带中断的指令周期（Instruction Cycle with Interrupts）

![](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/01/20210120143145203.png)

图解

![](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/01/20210120143159965.png)

程序流程控制（Program Flow Control）

![](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/01/20210120143402104.png)

## 多次中断（Multiple Interrupts）

无需了解详细信息，仅供参考

多个中断：当前正在处理中断时出现中断

- 解决方案1：顺序处理：中断按顺序发生
  - 处理器在处理一个中断时将忽略其他中断
  - 中断保持挂起状态，并在处理完第一个中断后进行检查

![](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/01/20210120143608529.png)

解决方案2：嵌套处理：允许中断期间的中断

![](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/01/20210120143632653.png)

问题：两种方法有什么区别？

- 如何处理？ 设置公正和紧急的优先事项
- 低优先级中断可以被高优先级中断打断
- 处理较高优先级的中断后，处理器将返回上一个中断

## 连接计算机组件（互连）

所有单元必须连接

不同类型的单元有不同类型的连接

- Memory
- Input/Output
- CPU

## 电脑模块/组件

所有三个组件均通过bus(es)进行通信,如下图

![](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/01/20210120144002302.png)## Bus 

## Interconnection Scheme （了解即可）

![](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/01/20210120144147303.png)

## BUS(总线) 是什么

- 连接两个或更多设备的通信路径
  - 通常广播，经常分组
    - 一条总线中的多个通道，例如32位数据总线是32个独立的单个位通道
- 三种总线类别：数据总线，地址总线和控制总线
- 单总线与多总线结构
  - 例如Unibus（DEC-PDP）
  - 例如控制/地址/数据总线（PC）

- 专用总线
  - 分配给单个功能，例如用于地址或数据的功能，称为地址总线和数据总线
  - 不同组件的分离总线
- 多路总线
  - 用于地址和数据-共享线
  - 优势：行数更少
  - 缺点：更复杂的控制和资源的顺序使用将限制性能

## 有关内容推荐

- https://www.doc.ic.ac.uk/~eedwards/compsys/index.html

## 引用材料

- William Stallings, “Computer organization and architecture: Designing for Performance”, 8th Edition, 2010
- Dr. Kai Zhou\'s PowerPoint
- https://www.cnblogs.com/chenxuming/p/9609463.html