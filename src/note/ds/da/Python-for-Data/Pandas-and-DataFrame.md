---
article: false
date: 2022-03-23
index: 0

---

# Pandas and DataFrame

作者：韩佳明弘树

未经许可，禁止转载。已做版权存证。

## Read csv

```python
movies = pd.read_csv('tmdb_movies.csv', index_col=['id'])
medals = pd.read_csv('medals_by_country_2016.csv', index_col=0)
data = pd.read_csv(file, nrows = 5, header = None) #读前5行，原文件中没有column name
data = pd.read_csv(file, sep="\t", comment="#", na_values='Nothing') # 设定分隔符号，注释，na时的填入值
```

## Dict to DataFrame

### 方法一

- key 是 column name
- value用列表表示，是 每一列的所有值，

```python
>>> data = {'col_1': [3, 2, 1, 0], 
            'col_2': ['a', 'b', 'c', 'd']}

>>> pd.DataFrame.from_dict(data)

   col_1 col_2
0      3     a
1      2     b
2      1     c
3      0     d
```

### 方法二

Specify `orient='index'` to create the DataFrame using dictionary keys as rows:

- 每一个条目代表一行
- key 是 index

```python
>>> data = {'row_1': [3, 2, 1, 0], 'row_2': ['a', 'b', 'c', 'd']}
>>> pd.DataFrame.from_dict(data, orient='index', columns=['A', 'B', 'C', 'D'])

       A  B  C  D
row_1  3  2  1  0
row_2  a  b  c  d
```

## List to DataFrame

```python
df = pd.DataFrame(tweets_data, columns=['text','lang'])
```

## df.iterrows()

```python
df = pd.DataFrame(tweets_data, columns=['text','lang'])
# Initialize list to store tweet counts
clinton, trump, sanders, cruz = (0, 0, 0, 0)

# Iterate through df, counting the number of tweets in which
# each candidate is mentioned
for index, row in df.iterrows():
    clinton += word_in_text('clinton', row['text'])
    trump += word_in_text('trump', row['text'])
    sanders += word_in_text('sanders', row['text'])
    cruz += word_in_text('cruz', row['text'])

```

## Print info

```python
print(dog) #全部打印
dogs.head() # 默认参数5
```

```python
dogs.info() # some information
```
```
dogs["height_cm"] > 50
0 True
1 False
2 False
3 False
4 True
5 False
6 True
Name: height_cm, dtype: bool
```

```python
dogs.describe()
```

```
      height_cm weight_kg
count 7.000000 7.000000
mean 49.714286 27.428571
std 17.960274 22.292429
min 18.000000 2.000000
25% 44.500000 19.500000
50% 49.000000 23.000000
75% 57.500000 27.000000
max 77.000000 74.000000
```

## Column & index

```python
dogs.columns
dogs.index

dogs_ind = dogs.set_index("name")
dogs_ind3 = dogs.set_index(["breed", "color"]) 

dogs_ind.reset_index(drop=True)
dogs_ind.reset_index() # as below
```

<img src="https://pic.hanjiaming.com.cn/2022/02/02/a0afacea3e22d.png" alt="1643748598892.png" title="1643748598892.png" />

```python
dogs.columns = ["name",'id','phone'] # set column name
```



## Sort

```python
dogs.sort_values(["which_column1","which_c2"],ascending = True)
dogs.sort_values(["which_column1","which_c2"],ascending = [True,False])
```

## Watch

```python
dogs[["which_column1","which_column2"]]
```

## Filter

### df['column_name']

```python
dogs["height_cm"] > 50
```

```
0 True
1 False
2 False
3 False
4 True
5 False
6 True
Name: height_cm, dtype: bool
```

```python
dogs[dogs["height_cm"] > 50]
```

```
& | # and or
```

```python
is_black_or_brown = dogs["color"].isin(["Black", "Brown"])
```

### Flitter row

```
4 df[0:] #第0行及之后的行，相当于df的全部数据，注意冒号是必须的
5 df[:2] #第2行之前的数据（不含第2行）
6 df[0:1] #第0行
7 df[1:3] #第1行到第2行（不含第3行）
8 df[‐1:] #最后一行
9 df[‐3:‐1] #倒数第3行到倒数第1行（不包含最后1行即倒数第1行，这里有点烦躁，因为从前数时从第0行开始，从后数就是‐1行开始，毕竟没有‐0
```

### drop

```python
# Drop values using filtering
movies = movies[movies['avg_rating'] <= 5]
# Drop values using .drop()
movies.drop(movies[movies['avg_rating'] > 5].index, inplace = True)
```

凡是会对原数组作出修改并返回一个新数组的，往往都有一个 inplace可选参数。如果手动设定为True（默认为False），那么原数组直接就被替换。也就是说，采用inplace=True之后，原数组名（如2和3情况所示）对应的内存值直接改变；

而采用inplace=False之后，原数组名对应的内存值并不改变，需要将新的结果赋给一个新的数组或者覆盖原数组的内存位置。

## Loc

### df.loc[index,column]

选取指定行，列的数据.

**包含边界值**

```python
2 df.loc[0,'name'] # 'Snow'
3 df.loc[0:2, ['name','age'] ] #选取第0行到第2行，name列和age列的数据, 注意这里的行选取是包含下标的。
4 df.loc[[2,3],['name','age'] ] #选取指定的第2行和第3行，name和age列的数据

5 df.loc[df['gender']=='M','name'] #选取gender列是M，name列的数据
6 df.loc[df['gender']=='M',['name','age']] #选取gender列是M，name和age列的数据
```

### df.loc["index_name"]

记住有且只有而且是第一个参数

```python
dogs_ind3.loc[["Labrador", "Chihuahua"]]
```

<img src="https://pic.hanjiaming.com.cn/2022/02/02/4be1fe78bddb2.png" alt="1643749517221.png" title="1643749517221.png" />

```python
dogs_ind3.loc[[("Labrador", "Brown"), ("Chihuahua", "Tan")]]
```

<img src="https://pic.hanjiaming.com.cn/2022/02/02/51f7caf42ed47.png" alt="1643749602092.png" title="1643749602092.png" />

### iloc[row_index, column_index]

不包含边界

```python
1 df.iloc[0,0] #第0行第0列的数据，'Snow'
2 df.iloc[1,2] #第1行第2列的数据，32
3 df.iloc[[1,3],0:2] #第1行和第3行，从第0列到第2列（不包含第2列）的数据
4 df.iloc[1:3,[1,2] #第1行到第3行（不包含第3行），第1列和第2列的数据
```

## range



## .query()

和sql很相似

```python
# .query('SOME SELECTION STATEMENT')
stocks.query('nike >= 90')
stocks.query('nike > 90 and disney < 140')
stocks.query('nike > 96 or disney < 98')
stocks_long.query('stock=="disney" or (stock=="nike" and close < 90)')
```

## New Column

```python
dogs["height_m"] = dogs["height_cm"] / 100
```

```python
# 新建的列是存在列的值的求函数结果
import pandas as pd
brics = pd.read_csv("brics.csv", index_col = 0)
brics["name_length"] = brics["country"].apply(len)
print(brics)
```

![1643841957415.png](https://pic.hanjiaming.com.cn/2022/02/03/4289b55c19f56.png)

## Built-in function

```python
np.mean() #full name ，仅一部分是
```

- .median() , .mode()
- .min() , .max()
- .var() , .std()
- .sum()
- .quantile()  分位数
- .cumsum() 积和
- .cummin()
- .cumprod()

```python
dogs["height_cm"].mean()
```

```python
dogs_height_by_breed_vs_color.mean(axis="index") #留下column name，对每行求平均值
dogs_height_by_breed_vs_color.mean(axis="columns")#留下index name，对每一列求平均值
```

## agg

```python
def pct30(column):
	return column.quantile(0.3)

dogs["weight_kg"].agg('pct30')
dogs[["weight_kg", "height_cm"]].agg('pct30')
```

```
weight_kg 22.6
height_cm 45.4
dtype: float64
```

```python
dogs["weight_kg"].cumsum()
```

```
0 24
1 48
2 72
3 89
4 118
5 120
6 194
Name: weight_kg, dtype: int64
```

## Dropping duplicate

```python
vet_visits.drop_duplicates(subset="which_column")
unique_dogs = vet_visits.drop_duplicates(subset=["name", "breed"]) # drop  duplicate pairs
```

<img src="https://pic.hanjiaming.com.cn/2022/02/02/51eed1504bb7e.png" alt="CleanShot 2022-02-02 at 04.09.27@2x.png" title="CleanShot 2022-02-02 at 04.09.27@2x.png" style="zoom:50%;" />

## Proportions

```python
unique_dogs["breed"].value_counts(normalize=True)
```

```
Labrador 			0.250
Chow Chow 		0.250
Schnauzer 		0.125
St. Bernard 	0.125
Poodle 				0.125
Chihuahua 		0.125
Name: breed, dtype: float64
```

## Groupby

```python
dogs.groupby("color")["weight_kg"].mean()
dogs.groupby(["color", "breed"])["weight_kg"].mean()
dogs.groupby(["color", "breed"])[["weight_kg", "height_cm"]].mean()
```

```
color
Black    26.5
Brown    24.0
Gray     17.0
Tan      2.0
White    74.0
Name: weight_kg, dtype: float64

color	    breed
Black     Chow Chow 25
          Labrador  29
					Poodle    24
Brown     Chow Chow 24
					Labrador 24
Gray      Schnauzer 17
Tan 			Chihuahua 2
White     St. Bernard 74
Name: weight_kg, dtype: int64

											weight_kg  height_cm
color       breed
Black 			Labrador 	29 				59
						Poodle 		24 				43
Brown			  Chow Chow 24 				46
						Labrador 	24 				56
Gray 				Schnauzer 17 				49
Tan 				Chihuahua 2 				18
White 			St. Bernard 74 			77
```
### .size()

求group之后的每一个群组的行数

```python
In [14]:
df.groupby("Degree_Type").size()

Out[14]:
Degree_Type
Associates     1477
Bachelors       727
Certificate    2152
Graduate       1993
Non-degree      353
dtype: int64
```

区分.count()

![1643903651772.png](https://pic.hanjiaming.com.cn/2022/02/03/d88bef996da3a.png)

### With agg

```python
dogs.groupby("color")["weight_kg"].agg([min, max, sum])
```

```
				min max sum
color
Black 	24 29 53
Brown 	24 24 48
Gray 		17 17 17
Tan 		2  2  2
White 	74 74 74
```

#### 自定义方法

记得给函数名称加引号

```python
grant_licenses_ward.groupby('ward').agg('sum')
```

#### with dict

```python
# Group by column names and produce statistical summaries
column_names = ['first_name','last_name','address']
summaries = {'height': 'max', 'weight': 'mean'}

height_weight = height_weight.groupby(by = column_names).agg(summaries).reset_index()
```

## Pivot

### 不展开

由一个x确定多个指定列的值，然后对这多个值求函数结果。

此时不指定列的名称

```python
dogs.pivot_table(values="weight_kg",index="color" aggfunc = np.mean) # 默认是平均值
```

<img src="https://pic.hanjiaming.com.cn/2022/02/02/e23af2420576c.png" alt="1643746618329.png" title="1643746618329.png" style="zoom:50%;" />

```python
dogs.pivot_table(values="weight_kg", index="color", aggfunc=np.median)
dogs.pivot_table(values="weight_kg", index="color", aggfunc=[np.mean, np.median]) # output as below
```

<img src="https://pic.hanjiaming.com.cn/2022/02/02/cc1caa785d9e4.png" alt="1643746746596.png" title="1643746746596.png" />

### 展开

将某一列拿出来作为Column Name(x)，再拿出一列当y，由一个y和一个x确定多个指定列的值，然后对这多个值求函数结果。

适用于 y的种类有限，x的种类有限。

不推荐

以下三个等价

```python
dogs.groupby(["color", "breed"])["weight_kg"].mean()
dogs.pivot_table(values="weight_kg", index="color", aggfunc=np.mean)
dogs.pivot_table(values="weight_kg", index="color", columns="breed") #output as below
```

<img src="https://pic.hanjiaming.com.cn/2022/02/02/7b121f124f9f6.png" alt="1643747745072.png" title="1643747745072.png" />

```python
dogs.pivot_table(values="weight_kg", index="color", columns="breed", fill_value=0)
dogs.pivot_table(values="weight_kg", index="color", columns="breed",
fill_value=0, margins=True) # output as below
```

<img src="https://pic.hanjiaming.com.cn/2022/02/02/8c0ae53c137c8.png" alt="1643748408567.png" title="1643748408567.png" />

## .melt()

Reshaping data with .melt()

相当于pivot 的反操作，从宽到长

![1643839793105.png](https://pic.hanjiaming.com.cn/2022/02/03/819d2549f32af.png)

![1643839854995.png](https://pic.hanjiaming.com.cn/2022/02/03/d1e5f3d8ba285.png)

```python
social_fin_tall = social_fin.melt(id_vars=['financial','company'],
		value_vars=['2018','2017'],
		var_name=['year'], value_name='dollars')

social_fin_tall = social_fin.melt(id_vars=['financial','company']) #全显示 as below
```

![1643839916818.png](https://pic.hanjiaming.com.cn/2022/02/03/2d48607f03459.png)

## iterrows

```python
import pandas as pd
brics = pd.read_csv("brics.csv", index_col = 0)

# 拆包成 lab（标签），row(行)
for lab, row in brics.iterrows():
  print(lab)
  print(row)
```

![CleanShot 2022-02-03 at 06.42.51@2x.png](https://pic.hanjiaming.com.cn/2022/02/03/16ca48b5c87ff.png)

<img src="https://pic.hanjiaming.com.cn/2022/02/03/ad4337fe9467f.png" alt="1643841837126.png" style="zoom:50%;" />

## Numpy

### Read file

Much of the time you will need to import datasets which have different datatypes in different columns; one column may contain strings and another floats, for example. The function `np.loadtxt()` will freak at this.

There is also another function `np.recfromcsv()` that behaves similarly to `np.genfromtxt()`, except that its default `dtype` is `None`. In this exercise, you'll practice using this to achieve the same result.

```python
data = np.loadtxt(file, delimiter='\t', dtype=str)
data_float = np.loadtxt(file, delimiter="\t", dtype=float, skiprows=1)

data = np.genfromtxt('titanic.csv', delimiter=',', names=True, dtype=None)
d = np.recfromcsv(file)
```

### Boolean coculate

```python
>> bmi = array([21.852, 20.975, 21.75 , 24.747, 21.441])
>> bmi > 21

output: array([True, False, True, True, True], dtype=bool)
```

### Coculate

```python
import numpy as np
np_height = np.array([1.73, 1.68, 1.71, 1.89, 1.79])
np_weight = np.array([65.4, 59.2, 63.6, 88.4, 68.7])
bmi = np_weight / np_height ** 2
for val in bmi :
print(val)

output:
  21.852
  20.975
  21.750
  24.747
  21.441
```

### Random generators

```python
import numpy as np
np.random.rand() # Pseudo-random numbers

np.random.seed(123) # Starting from a seed
np.random.rand()

coin = np.random.randint(0,2) # Randomly generate 0 or 1
```

### Build from pd

```python
# Assign the filename: file
file = 'digits.csv'

# Read the first 5 rows of the file into a DataFrame: data
data = pd.read_csv(file).head()

# Build a numpy array from the DataFrame: data_array
data_array = data.value

# Print the datatype of data_array to the shell
print(type(data_array))
```

## dt.date

```python
user_signups[user_signups['subscription_date'] > dt.date.today()]
```

## set all value

```python
# Set all values above 27 to 27
ride_sharing.loc[ride_sharing['tire_sizes'] > tire_sizes, 'tire_sizes'] = 27
```

