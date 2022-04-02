---
article: false
date: 2022-03-31
index: 6


---

# Communication Standards

- FF: 父父进程
- F1: 适用于算法1的父进程
- F2: 适用于算法2的父进程
- Cx: 子进程x，每个F有8个C，C1-C8

这里从都是从1开始数数。

## 实现方法

星状，每条链路通过两个unnamed pipe 实现

<img src="https://pic.hanjiaming.com.cn/2022/03/31/78fde2568af7d.png" alt="1648657448192.png" style="zoom:50%;" />

## 消息内容规范

传输方式: char [101]

- 在字符串的buf里以`$`分隔块。
- 共3+有个块
  - 第一个块表示信号字符，是一个大写字母
  - 第二个块表示传递的struct类型i, 是一个str(num)（是我们自己定义的，请查看下面的表）
  - 第三+个块表示传递的struct中的变量
- 如果你要手动拼装string，别忘了让有效字符的下一位为 ascii 0

举例：信号为N，要传输一个struct(该struct 类型在文档中的标号为3，里面有1个字符串abc和4个数字12, 23, 11和33，那么传递的就应该是 `N$3$abc$12$23$11$33`

## FF -> F

| signal | arg  | Meaning                                                      |
| ------ | ---- | ------------------------------------------------------------ |
| P      | /    | Tell FF1 and FF2 to ask children to Print                    |
| E      | /    | Pass a event to F, FF should pass this to two F via two pipes |
| F      | /    | Tell FF1 and FF2 to end process                              |
|        |      |                                                              |
|        |      |                                                              |
|        |      |                                                              |
|        |      |                                                              |
|        |      |                                                              |
|        |      |                                                              |

## F -> FF

| signal | arg  | Meaning |
| ------ | ---- | ------- |
|        |      |         |
|        |      |         |
|        |      |         |
|        |      |         |
|        |      |         |
|        |      |         |
|        |      |         |

## F -> C

| signal | arg1        | Meaning             |
| ------ | ----------- | ------------------- |
| T      | an event A  | try to add event    |
| A      | /           | confirm add event A |
| C      | /           | cancel event A      |
| P      | /           | Tell child to print |
|        |             |                     |
|        |             |                     |
|        |             |                     |
| F      | /           | end process         |

添加事件注意事项：先尝试添加，等大家都无异议后再执行

## C -> F

| signal | arg        | Meaning                                                   |
| ------ | ---------- | --------------------------------------------------------- |
| Y      | /          | tell FF the target event will be added is acceptable      |
| N      | what event | tell FF the target event will be added is  not acceptable |
| N      | "!"        | tell FF the target event will be added is  not acceptable |
|        |            |                                                           |
|        |            |                                                           |
|        |            |                                                           |

为什么两个N？第一种是在传递哪一个冲突（如果多个则传输多次），第二种是告诉所有冲突时间都传输完了，是个标志

## 关于全局变量

全局变量不需要传输，因为fork()会把全局变量信息copy。而且一旦copy不需要改动。
