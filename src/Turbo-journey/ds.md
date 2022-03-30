---
article: false
date: 2022-03-31
index: 5
---

# Data Structure

## 数据结构

### 职员

```c
typedef struct{
  char name[11];
  int asLeader;
  int asMember;
}person;
```

### 项目

```c
typedef struct{
  char projectName[11];
  person leader;
  
  int memberNum;
  person member[3];
  int priority;
}team;
```

### 会议

```c
typedef struct{
  team whichTeam[11];
  
  int holdDay; 		// 1,2,3,4,5
  int startTime;  // 8,9,10,11
  int endTime;		// 12,14 15,17,18
 
}event;
```

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

### 待处理会议

```c
// 不需要在FCFS中使用
// 使用队列实现

// 添加新的事件
// 添加被替代的事件
// 如果事件不能被安排，则不会被重新放到队列
```

