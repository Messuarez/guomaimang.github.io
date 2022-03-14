---
article: false
date: 2021-05-01

---

# C++ 体系简易入门1

## C++ 简介

### **特点**

- 一门高级语言
- 学习使用C ++学习结构化编程
  - 一种纪律性的编写程序的方法
- 自上而下的设计模型
  - 大问题分为小问题
  - 每个小问题都按代码段/功能分开解决
  - 将较小的问题的解决方案集成在一起，以形成最终程序
  - 程序员更好地理解并且易于维护
- C的扩展
  - 1980年代初期：Bjarne Stroustrup（贝尔实验室）
  - “加快发展” C
  - 提供面向对象编程的功能（OOP）
- 混合语言
  - C风格
  - 面向对象的风格
  - 两者混合

### 开发环境

三个主要组成部分
1.程序开发环境
2.语言（语法）
3.C ++标准库

安装请见：https://www.hanjiaming.com.cn/archives/1892

即 用于编写程序的符号和规则系统

**形成C ++程序的六个阶段**

1. 编辑（edit）
   - 程序是在基于文本的编辑器中创建的，并存储在磁盘上
2. 预处理（preprocess）
   - 名为预处理程序的程序处理代码
   - 例如，将某些标记替换为字符串（文本）或数值
3. 编译（compile）
   - 编译器创建目标代码并将其存储在磁盘上
4. 链接（link）
   - 结合库/其他功能形成可执行程序

![img](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/02/20210203033747641.png)**运行 C++ 形成的可执行文件**

1. 加载（load）
   - 加载程序将程序放入内存
2. 执行（execute）
   - CPU接受并执行每条指令，可能会存储新的数据值

![img](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/02/20210203033801808.png)![img](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/02/20210203033712317.png)

## 预备知识

### 转义符

所有的ASCII码都可以用“\”加数字（一般是8进制数字）来表示。而C中定义了一些字母前加\\来表示常见的那些不能显示的ASCII字符，如\0,\t,\n等，就称为转义字符，因为后面的字符，都不是它本来的ASCII字符意思了。

![img](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/02/20210203040950670.png)![img](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/02/20210203040621658.png)

## 注意事项

- 文件单位是Project（工程）。一个工程对应一个文件夹。一个工程中有很多cpp或h文件。
- 文件名称和路径不能包含中文。
- **写代码时,务必切换到英文输入法。**
- 代码中不能包含中文和中文符号

## 第一个C++程序

```c++
// Your first program in C++
#include <iostream>
using namespace std;

// function main begins program execution
int main() {
    cout << Welcome to C++!\n;
    return 0; // indicate that program ended successfully
}
```

运行结果：`Welcome to C++!`

### 代码解释

- ```
  // Your first program in C++
  ```

  - Comments start with: //
    - Comments are ignored by compiler
  - Traditional comments (in C):`/* … */`
  - Improve program readability

```c++
/* This is a traditional
comment. It can be 
split over multiple lines */
```

- `#include <iostreams>`

- Preprocessing directive

  - Tells the preprocessor to perform a specific action

  - Format: a line begins with `#`

  - Where to put a directive?

    - Anywhere in a source file, with effect from that point onwards
    
    - `#include <filename>` means:

- To add the contents of the library file – filename to the source program during preprocessing

- `< >` means to find the library file in the default location

- Blank lines, spaces, and tabs are white-space characters

  - Ignored by compiler

- `using namespace std;`

  - Namespace
  - a set of names in which all names are unique
  - to prevent ambiguity(双关) of names
    - E.g., cout is defined in the namespace of std in iostream
  - if this line is not written explicitly, we can write like this
    - `std::cout`

- int main() {

  - C++ programs begin executing at `main`
  - Parenthesis `()`indicates `main` is a function
  - C++ programs contain one or more functions

- Functions can perform tasks and return information

  - `int` means `main` returns an integer when the `main` function finishes execution(more on this later)

- Left brace `{`begins body of function declaration. Ended by right brace `}`

- `cout << Welcome to C++!\n;`

  - A program statement

  - instructs the computer to perform a task

  - must be ended with semicolon `;`

  - Standard output stream object

    - cout - Connected to screen
    - `<<`
      - Stream insertion operator
  - Value on the right-hand side (right operand) inserted into output stream
    
  - Escape characters
  
- `\` Indicates “special” character output

请记住，右进左出。

- Input/output
  - cout
    - Standard output stream to “The computer screen”
  - cin
    - Standard input stream
    - Normally from the keyboard
- `return 0; // indicate that program ended successfully`
  - End of the main function
  - Return an integer
- `0` : indicates that program ended successfully
- `}` : A right brace

- Signifies the end of the `main` function

## Introduction to Variables

- Remember one aim of programming is to perform mathematical calculations
- Some calculations may require intermediate steps and therefore there are intermediate values for subsequent calculations
- How do we store these intermediate values in programming?
  - Variables

### Variables

- Areas in memory where values can be stored
  
  - Informal thought: A box that can be stored a value
- Common data types
  - int – integer numbers (e.g., -3, 0, 8)
  - char – character or symbol (e.g., H, d, ?, %)

- double – floating point numbers (e.g., 3.14, 1.618)

  - Declare variables with name and data type before use (Imagine as creating a box before putting something into it)

- ```c++
  int integer1; int integer2; int sum;
  ```

  - Can declare several variables of the same type in one declaration Comma-separated list

- `int integer1, integer2, sum;`

### Variable names

Variable names ( also known as identifier「标识符」)

- Rules of naming a variable
  - Series of characters

- letters, digits, underscores ( _ )

- No space in-between
  - E.g., `thickness_of_wall, baseArea, flat_widthRatio` are ok

- Cannot begin with digit
  - `7button` is invalid
- Case sensitive
  - a1 and A1 are two different variables
  - As a norm, variable names begin with lowercase letters

**Cannot be used as identifiers (variable names)**
![CleanShot 2021-02-19 at 21.43.19@2x](/Users/hanjiaming/Library/Application Support/CleanShot/media/media_34WboypUoO/CleanShot 2021-02-19 at 21.43.19@2x.png)

## common operators

- `>>` stream extraction operator
  - Used with cin
    - Also in the namespace std
- Waits for user to input value, then press Enter key
  - Stores value in variable to right of operator
- E.g., `cin >> radius`
  
- `=`(assignment operator)
  - Assigns value to variable (from right to left)
  - Binary operator (two operands)
- E.g.,

![img](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/02/20210203043204589.png)

**示例代码**

```c++
// A program for summing two input number.
#include <iostream>

using namespace std;

// function main begins program execution
int main() {

    int integer1;    
    // 
first number to be input by user
    int integer2;
    // second number to be input by user
    int    sum;
    // variable in which sum will be stored

    cout << Enter first integer\n;        
    cin >> integer1;
    cout << Enter second integer\n; 
    cin >> integer2;
    sum = integer1 + integer2;
    cout << Sum is  << sum << endl; 

    return 0;    
```

运行结果

```
Enter first integer
45
Enter second integer
72

Sum is 117
```

### Other Arithmetic Operators

- - Multiplication
- /Division
  - Integer division truncates the decimal value
    - 7 / 5 evaluates to 1
- %：Modulus operator returns remainder
  - 7 % 5 evaluates to 2

![img](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/02/20210203054424421.png)

## Variable and Memory

- Variable names
  - Correspond to actual locations in computer's memory
  - Every variable has **name, type, size and value**
- When new value placed into variable, overwrites previous value
- Reading variables from memory non-destructive

![img](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/02/20210203052751555.png)

integer1, integer2 and sum are created in the program and memory spaces are allocated to them (even they are not used yet)

In most C++ environment, variables are not initialized to default values (e.g., 0, NULL)

Try： `int integer1;cout << integer1 << endl;`

outcome：一个长9位的随机数

E.g.,
number1 + number2 * (number3 % number4 - number5)

How to evaluate above?

- Rules: Operators in parentheses evaluated first
-  Nested/embedded parentheses: Operators in innermost pair first
  Multiplication, division, modulus applied next
- Operators applied from left to right
- Addition, subtraction applied last
- Operators applied from left to right

所以，我们已经了解如何编写一个简单的C++程序

![img](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/02/20210203054807266.png)

## Pseudocode(伪代码）

Artificial, informal language used to develop algorithms

我们写代码之前要先写伪代码，之后我们把伪代码转写为C++代码。这对我们写代码有帮助。

- Similar to everyday English
- Not executed on computers
  - Used to think out the logic of program before coding
    - Easy to convert into C++ syntax
  - Only executable statements
    - No need to declare variables
- More or less like a real computer program: assignment statements, arithmetic expressions, control structures (if, if/else, while, for, etc.), and so on
- no strict rules for the syntax
- OK as long as it is clear, readable and understandable
- Enables you to concentrate on the algorithm instead of details of syntax

例如，编写一个接受两个整数的程序，计算并显示总和。

- `Prompt the user to input integer1`
- `Prompt the user to input integer2`
- `Calculate sum = integer1 + integer2`
- `Print sum to the screen`

例如：编写程序以计算三个学生的考试平均分数

- `Prompt the user to input score1`
- `Prompt the user to input score2`
- `Prompt the user to input score3`
- `Calculate sum = score1 + score2 + score3`
- `Calculate average = sum / 3`
- `Print average to the screen`

### 伪代码的写作技巧

- › Always think about the sequence：Input ⇨ Processing ⇨ Output
- Input
  - What data does the user need to provide to the program?
  - E.g., an integer value? student’s scores?
- Processing
  - What does the program calculate?
  - E.g., calculating the sum? calculating the average?
- Output
  - What does the program display to the user?
  - E.g., calculation result? sum? average?

![img](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/02/20210203081951815.png)![img](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/02/20210203082008543.png)

## Introduction to Control Structures

Introduction to Control Structures（控制结构介绍）

- By default, statements in a program are executed in sequential order（按顺序）
  - All programs studied so far behave in this way
- C++ provides control structures to achieve transfer of control
  - Next statement executed not necessarily next one in sequence
- 2 kinds of control structures
  - Selection structures：`if, if/else, switch`
- Repetition structures：`while, do-while, for`
- Indenting makes programs/pseudocode easier to read
  - Note: C++ ignores whitespace characters (tabs, spaces, etc.)

Let's see an example.

``` c++
#include <iostream>
using namespace std;
int main() {
	int x, y;
  
	cout << "Please enter x and y: ";
	cin >> x >> y;

 	// if selection structure
  
if (x > y) {
cout << "x is greater." << endl; }
  
else if (x < y) {
cout << "x is smaller." << endl; }
  
else {
cout << "x and y are equal." << endl; } 
}
```

```
Please enter x and y: 10 20
x is smaller.
```

### if Selection Structure

- Choose among alternative courses of action.

- Pseudocode example

  - ```
    If student’s grade is greater than or equal to 60
    Print “Passed”
    ```

    - Translate to C++：`if (grade >= 60) cout << Passed;`
    - If the condition is true：Print statement executed, program continues to next statement
    - If the condition is false：Print statement ignored, program continues

- Indenting makes programs/pseudocode easier to read

  - Note: C++ ignores whitespace characters (tabs, spaces, etc.)

- General Structure

  - `if () statement`

- A condition is one that, after evaluation, it must be either *true or false*

  - E.g., x<=y (ls x less than or equal to y? ）
  - E.g., m!=n (is m not equal to n?)

### Equality and Relational Operators

- Used to compare the relation of two data items
  - Result in either **true or false**
- Equality operators`==, !=`
- Relational operators `<, >=, <=`

<img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/02/19/e0669e83bdb87.png" alt="CleanShot 2021-02-19 at 21.51.28@2x.png" title="CleanShot 2021-02-19 at 21.51.28@2x.png" />

### if/else Selection Structure

If grade is 54, what will the output be?

```c++
if (grade >= 60)
cout << "Passed";
```


grade >= 60 will be evaluated to false and Passed will not be printed.

Different actions if conditions **true** or **false**

Pseudocode

```
if student’s grade is greater than or equal to 60
Print “Passed”
else
Print “Failed”
```

C++ code

```c++
if (grade >= 60)
cout << "Passed";
else
cout << "Failed";
```

 #### General Structure

```
if (<condition>)
	statement
else
	statement
```

No condition after the “else” keyword, “else” means  “otherwise”.

### Nested if/else Structures

In most scenarios, there are more than two possible actions to be performed.

By extending the if/else structures, another if/else structure is included in the “else” segment.

```
if (<condition>)
	statement for the 1st case
else
	if (<condition>)
		statement for the 2nd case
	else 
		statement otherwise
```

 The following example illustrates how to determine the grade of a given numeric score:

Pseudocode

```
if student’s grade is greater than or equal to 90
	Print “A”
else if student’s grade is greater than or equal to 80
	Print “B”
else if student’s grade is greater than or equal to 70
	Print “C”
else if student’s grade is greater than or equal to 60
	Print “D”
else
	Print “F”
```

c++ code

```c++
if (grade >= 90) // 90 and above
	cout << "A";
else if (grade >= 80) // 80-89
cout << "B";
else if (grade >= 70) // 70-79
cout << "C";
else if (grade >= 60) // 60-69
cout << "D";
else // less than 60
cout << "F";
```

or

```c++
if (grade >= 90) // 90 and above
	cout << "A";
else 
  if (grade >= 80) // 80-89
		cout << "B";
	else 
  	if (grade >= 70) // 70-79
			cout << "C";
		else 
  		if (grade >= 60) // 60-69
				cout << "D";
			else // less than 60
				cout << "F";
```

<img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/02/19/eaa96fe1b7c15.png" alt="CleanShot 2021-02-19 at 22.22.50@2x.png" title="CleanShot 2021-02-19 at 22.22.50@2x.png" />

<img src="https://hongshupic.oss-cn-zhangjiakou.aliyuncs.com/2021/02/19/15ce914456a66.png" alt="image.png" title="image.png" />

## Ternary conditional operator

![img](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/02/20210203080335222.png)

## Assignment Operators

![img](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/02/20210203080405644.png)![img](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/02/20210203080418125.png)

## Logical Operators

![img](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/02/20210203111833636.png)![img](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/02/20210203111916856.png)![img](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/02/20210203080148423.png)![img](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/02/20210203080159626.png)

## Increment and Decrement Operators

- 相同点
  - 可以使用增量运算符c++代替c + = 1
  - 可以使用减量运算符c–代替c-= 1
- 不同点
  - variable++ 和 ++variable 都可以看做一个可以被调用的值，而不仅仅是一个instruction。
  - 但是variable 仅仅是一个instruction，不可以直接被调用。
- 预增量：将运算符放在变量（++ c或–c）之前，该变量值先被更改，然后对整个表达式求值。
- 后递增：将运算符放在变量（c ++或c–）之后时，将计算整个表达式，然后更改变量值。

在我看来，c++表示后计算，先调用；++c表示先计算，再调用。

所以，在for 的（）中，i++和++i 的执行效果一样，让i在执行完for结构的语句后增加i的自身值。

![img](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/02/20210203081831782.png)![img](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/02/20210203081751134.png)

## Switch Selection Structure

![img](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/02/20210203112252891.png)

![img](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/02/20210203112311757.png)

![img](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/02/20210203113320626.png)

![img](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/02/20210203113339233.png)

## 补充说明

### A

![img](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/02/20210203113441197.png)![img](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/02/20210203113455574.png)![img](https://hssvr01.oss-cn-zhangjiakou.aliyuncs.com/hongshu/file/2021/02/20210203113640741.png)

### Char use single quotation mark

## 引用

- [https://baike.baidu.com/item/%E8%BD%AC%E4%B9%89%E5%AD%97%E7%AC%A6/86397?fr=aladdin](https://baike.baidu.com/item/转义字符/86397?fr=aladdin)
- COMP1011@Polyu's Teaching PowerPointhttp://c.biancheng.net/view/1360.html

