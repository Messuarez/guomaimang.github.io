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
typedef struct{
  
  char name[11];
 
  int manageTeam; // 管理的团队的团队的id 无则 = -1
  int asMember;   // 作为几个团队的member？ 限制最多是3个
  // 一个人最多参与 3 个团队，即 1 <= asManager + asMember <= 3
}person;
```

### 项目/团队

```c
// 类型编号 2
typedef struct{
  
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
typedef struct{
  team whichTeam[11];
  
  int holdDay; 		// 0-17
  int startTime;  // 9-17
  int endTime;		// 10-18
  
  int priority;   // FCFS 中可无视
 
}event;
```

## 变量

### 日历

```c
event myCalendar[40];
```

## 全局变量

### 团队库

```c
team teamArr[256];
```

### 职员库

```c
person personArr[1024];
```

### 待处理会议队列

```c
// 不需要在FCFS中使用
// 使用队列实现

// 添加新的事件
// 添加被替代的事件
// 如果事件不能被安排，则不会被重新放到队列
```

