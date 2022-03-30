---
article: false
date: 2022-03-31
index: 6


---

# 通信标准

- FF: 父父进程
- F1: 适用于算法1的父进程
- F2: 适用于算法2的父进程
- Cx: 子进程x

## 实现方法

星状，每条链路通过两个unnamed pipe 实现

<img src="https://pic.hanjiaming.com.cn/2022/03/31/78fde2568af7d.png" alt="1648657448192.png" style="zoom:50%;" />

传输方式: char [26]

## Usage

| index    | 0    | 1    | 2    | 3    | 4    | 5    |
| -------- | ---- | ---- | ---- | ---- | ---- | ---- |
| **char** | 'N'  | 25   | 33   | 31   | 46   | 9    |

## FF -> F

| arg0 | arg1 | arg2 | arg3 | Meaning                                   |
| ---- | ---- | ---- | ---- | ----------------------------------------- |
| P    | /    | /    | /    | Tell FF1 and FF2 to ask children to Print |
| E    | /    | /    | /    | Tell FF1 and FF2 to end process           |
|      |      |      |      |                                           |
|      |      |      |      |                                           |
|      |      |      |      |                                           |
|      |      |      |      |                                           |
|      |      |      |      |                                           |

## F -> FF

| arg0 | arg1 | arg2 | arg3 | Meaning |
| ---- | ---- | ---- | ---- | ------- |
|      |      |      |      |         |
|      |      |      |      |         |
|      |      |      |      |         |
|      |      |      |      |         |
|      |      |      |      |         |
|      |      |      |      |         |
|      |      |      |      |         |

## F -> C

| arg0 | arg1            | arg2 | arg3 | Meaning             |
| ---- | --------------- | ---- | ---- | ------------------- |
| A    | add which event | /    | /    | add event           |
| P    | /               | /    | /    | Tell child to print |
|      |                 |      |      |                     |
|      |                 |      |      |                     |
|      |                 |      |      |                     |
|      |                 |      |      |                     |
| E    | /               | /    | /    | end process         |

## C -> F

| arg0 | arg1       | arg2 | arg3 | Meaning                                                   |
| ---- | ---------- | ---- | ---- | --------------------------------------------------------- |
| Y    | /          | /    | /    | tell FF the target event will be added is acceptable      |
| N    | what event | /    | /    | tell FF the target event will be added is  not acceptable |
| N    | /          | /    | /    |                                                           |
|      |            |      |      |                                                           |
|      |            |      |      |                                                           |
|      |            |      |      |                                                           |