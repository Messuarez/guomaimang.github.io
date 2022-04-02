---
article: false
date: 2022-03-31
index: 5
---

# Data Structure

## 数据结构

### 职员

```c
// 类型编号 1
typedef struct typePerson{
  int index;
  char name[11];
 
  int manageTeam; // 管理的团队的团队的id 无则 = -1
  int asMember;   // 作为几个团队的member？ 限制最多是3个
  // 一个人最多参与 3 个团队，即 1 <= asManager + asMember <= 3
}person;
```

### 项目/团队

```c
// 类型编号 2
typedef struct typeTeam{
  int index;
  char name[11];
  
  int manager; 	// 从职员库中索引定位
  int member1;	// 从职员库中索引定位
  int member2;	// 从职员库中索引定位
  int member3;	// 从职员库中索引定位
  // 不使用数组的原因：方便pipe传输
  
}team;
```

### 会议

- 日历精确到1小时
- 可开会时间
  - 4.25-5.14
  - 9:00 -18:00
  - 周一到周六
  - 共18天
- 会议最长时间为9h

<img src="https://pic.hanjiaming.com.cn/2022/03/31/58556d3f486b8.png" alt="1648695637629.png" style="zoom:50%;" />

```c
// 类型编号 3
typedef struct typeEvent{
  int index;
  
  char whichTeam[11];	
  int manager; 	// 从职员库中索引定位
  int member1;	// 从职员库中索引定位
  int member2;	// 从职员库中索引定位
  int member3;	// 从职员库中索引定位
  
  int holdDay; 		// 0-17
  int startTime;  // 9-17
  int endTime;		// 10-18
  
  int priority;   // FCFS 中可无视
 
}event;
```

## Cx的全局变量

### 外部变量

Cx需要知道的外部变量有

- 将要添加的会议: F1/F2通过pipe传递struct实现

### 日历

```c
int myCalendar[18][9];
```
储存的是编码， 共享外部的 eventArr[] 进行定位

## FF的全局变量

### 职员库 (Const)

需要注意的是，职员的数量是已知的。一共就8个人。不需要要后续添加。

```c
person personArr[1024];
```

## F1/F2的全局变量

### 外部变量

F1和F2需要知道的外部变量有

- 将要添加的会议: FF通过pipe传递struct实现
- 无法添加的会议: C通过pipe传递struct实现
- 职员库：通过Fork从FF获取

### 团队库

团队会随时添加，由FF把string处理成buf后，传递给F1/F2

```c
team teamArr[256];
```

### 会议库

```c
event eventArr[256];
```

### 待处理会议队列

```c
// 不需要在FCFS中使用
// 使用队列实现

// 添加新的事件
// 添加被替代的事件
// 如果事件不能被安排，则不会被重新放到队列
```
