---
article: false
date: 2021-05-01

---

# C++ 体系简易入门3

## Byte/Word-oriented memory organization

### Byte字节

- 程序按地址引用数据
  - 从概念上讲，我们将其视为非常大的字节数组
  - 地址就像是该数组的索引
  - 并且，一个指针变量存储一个地址

存储器中的基本“单位（units）”是字节byte（8 位「bits比特」）

- bit比特值 可为0或1
- 字节值 可为一个字节
- 8比特bit = 1字节byte，是因为8个bit可以表示一个byte

### Word字

- Word size: understood as the number of bits to represent addresses
- Word size determines the *addressable memory range*（可寻址的内存范围）
  - 32-bit, can address 4GB address space
  - 64-bit, can address 264 bytes, ≈ 18.4 X 1018 bytes ≈ 16 million 1TB Hard Disk
- 内存通常以连续字节（一组字节）进行访问

- one byte = 8 bits
- one word = 4 bytes = 32 bits
- double word = 8 bytes = 64 bits

![](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/02/20210204163743709.png)

### Bit比特

32位=4字节，可表示4^16 = 2 ^32个不同的地址 。故地址是32位长。
所以32位处理器也代表每个地址长度为32比特，64位处理器也代表每个地址长度为64比特。由此推断32bit处理器最大支持 2^32byte = 4GByte内存，64位处理器最大支持 2^64 = 2147483648GByte内存。

以下为32位可寻址内存图

![](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/02/20210202091158498.png)

这里怎么理解呢？简单的说，内存的基本构成单位为byte。早些时候，受Bus传输和CPU限制，处理位数为32bit，而32bit长既要可以索引到每个地址，这限定了内存的地址数量，所以；又要能放下每个word，所以每个32bit限定了one word = 4 bytes = 32 bits。那么升级为64位后，内存索引数量增加，double word = 8 bytes = 64 bits。

我们需要注意，地址并没有在内存条内部标着，而是人为指定的，访问地址由处理器控制。因为内存条是通用的，既可以用于32bits处理器，又可以用于64bits处理器。

## Data representations in C

![](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/02/20210204163958956.png)

## Representing strings

每一个ASCII码占用1字节，一共是2^8 = 256个
请见：[https://tool.ip138.com/ascii_code/](https://tool.ip138.com/ascii_code/)

![](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/02/20210204165909178.png)

## c++取整规则

- int：直接丢弃小数部分
- floor(x)：返回的是小于或等于x的最大整数
- ceil(x)：返回的是大于x的最小整数

引用

- COMP1411@polyu\'s Teaching PowerPoint
- COMP2421@polyu\'s Teaching PowerPoint