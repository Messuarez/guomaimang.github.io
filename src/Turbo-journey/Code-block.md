---
article: false
date: 2022-04-02
index: 12
---

# Code Block

Some code block may be useful......

## 拆分字符串

用于拆分类似 `E$-1$Hong$dev$9901`这样的字符串。

```c
#include <stdio.h>

void fillString(char* output, int index, const char buf[101]){
    int cursor = -1;
    int counter = 0;
    int outputUsage = 0;

    while (1){
        cursor++;
        if(buf[cursor] == '$'){
            counter++;
        }
        if (counter == index){
            if(buf[cursor] == '$'){
                cursor++;
            }
            while (buf[cursor] != '$' && buf[cursor] != 0){
                output[outputUsage++] = buf[cursor++];
            }
            output[outputUsage] = 0;
            break;
        }
        if (buf[cursor] == 0){
            break;
        }
    }
}

int main(int argc,char* argv[]) {
    char buf[101] = "E$-1$Hong$dev$9901";
    char output[101];
    fillString(output,5,buf);
    printf("%s",output);
}
```

