---
article: false
date: 2022-03-23
index: 2

---

# Seaborn DataV Std.

作者：韩佳明弘树

未经许可，禁止转载，已做版权存证。

------

## 前言

基于Pandas和matplotlib

x轴和y轴可以相互调换。

<img src="https://pic.hanjiaming.com.cn/2022/02/03/1f38070e1df6f.png" alt="1643832171224.png" style="zoom:50%;" />

### Use default

```python
sns.set() #同样可以把matplotlib设置成sns的默认样式
```

## Why?

![1643911321290.png](https://pic.hanjiaming.com.cn/2022/02/04/2d5bfde337ef8.png)

## displot

相当于matplotlib的hist

displot将 rugplot(),kdeplot()和matplotlib的hist和三为一

- 适用于画出某一列区间分布
- 比如某一列是温度，图表将温度自动分好区间，并统计个数，将每个区间的个数呈现在y上
- 统计的值必须是数值或者时间（连续的值）

```python
# Display a Seaborn distplot
# 只接受一个DF sns.distplot(DF)
sns.distplot(df['Award_Amount'])
plt.show()

# Clear the distplot
plt.clf()
```

<img src="https://pic.hanjiaming.com.cn/2022/02/03/1eb6afec6e899.png" alt="1643832395576.png" style="zoom:50%;" />

### Common parameters

![CleanShot 2022-02-03 at 04.08.54@2x.png](https://pic.hanjiaming.com.cn/2022/02/03/1887aea2ef774.png)

可以对自变量使用限制区间，比如xlim=（0，25000）

## Regression Plots

### regplot

- 给定DFx，DFy，将DFx对应的DFy的值呈现出来
- 一个x和一个y确定一个点或者多个点
- index有序，DFx呈现会自动排序
- 用于表示大量相对无规律值的分布特点

统计的值可以是数值或者时间（连续的值），也可以是 Categorical values

**用来基于已有数据在图像中展现出回归直线**

```python
# Create an lmplot of premiums vs. insurance_losses

# 一次只画一个数据集
# 可以在下面指定参数 marker='+'
sns.lmplot(y = "premiums",x = 'insurance_losses', data = df)

# Display the second plot
plt.show()
```

<img src="https://pic.hanjiaming.com.cn/2022/02/03/38593d0ae8d02.png" alt="1643832742701.png" style="zoom:50%;" />

#### order

```python
sns.regplot(data=df, x='temp', y='total_rentals', order=2)
```

<img src="https://pic.hanjiaming.com.cn/2022/02/03/47b4274774cd6.png" alt="1643885588793.png" style="zoom:33%;" />

#### x_jitter

Seaborn也支持分类变量的回归绘图。 看看租金在各个月内如何变化可能很有意思。 在此示例中，使用抖动参数使得更容易看到每个月的租赁值的各个分配。

```python
sns.regplot(data=df, x='mnth', y='total_rentals', x_jitter=.1, order=2)
```

<img src="https://pic.hanjiaming.com.cn/2022/02/03/327ef9c03e826.png" alt="1643885785684.png" style="zoom:33%;" />

#### x_estimator

```python
sns.regplot(data=df, x='mnth', y='total_rentals', x_estimator=np.mean, order=2)
```

In some cases, an x_estimator can be useful for highlighting trends

<img src="https://pic.hanjiaming.com.cn/2022/02/03/d665939dc7dfa.png" alt="1643885914138.png" style="zoom:33%;" />

#### Binning the data

当存在连续变量时，将它们分成不同的 bins 可能会有所帮助。 在这种情况下，我们可以将温度分成四个bins，Seaborn将照顾计算这些垃圾箱并策划结果。 这比尝试使用熊猫或其他一些机制更快地创建箱子。 此快捷功能可以帮助快速读取诸如温度的连续数据。

<img src="https://pic.hanjiaming.com.cn/2022/02/03/5cd289f6dc409.png" alt="1643886054786.png" style="zoom: 50%;" />

#### disable reg line

![1643886378007.png](https://pic.hanjiaming.com.cn/2022/02/03/d9a51b5ca4b0b.png)

### Evaluating regression

Evaluating regression with residplot()

画残差图

```python
sns.residplot(data=df, x='temp', y='total_rentals')
```

<img src="https://pic.hanjiaming.com.cn/2022/02/03/a709697c3dfa5.png" alt="1643885488489.png" style="zoom:33%;" />

```python
sns.residplot(data=df, x='temp', y='total_rentals', order=2)
```

<img src="https://pic.hanjiaming.com.cn/2022/02/03/706f523b41256.png" alt="1643885536234.png" style="zoom: 25%;" />

### implot

和regplot很相似，但是比它更高级

```python
# Create an lmplot of premiums vs. insurance_losses
sns.lmplot(y = "premiums",x = 'insurance_losses', data = df)

# Display the second plot
plt.show()
# 和 regplot 相比，下面的图似乎只是没有了上边框和右边框
```

<img src="https://pic.hanjiaming.com.cn/2022/02/03/f65963d6e6f31.png" alt="1643832817477.png" style="zoom:50%;" />

#### 参数 hue

Organize data by colors (hue)

```python
# Create a regression plot using hue
# 一般只画一次
sns.lmplot(data=df,
           x="insurance_losses",
           y="premiums",
           hue="Region")
# Show the results
plt.show()
```

<img src="https://pic.hanjiaming.com.cn/2022/02/03/feada8b6a4480.png" alt="1643833052665.png" style="zoom:50%;" />

#### 参数 col & row

```python
sns.lmplot(x="quality",
  y="alcohol",
  data=df,
  col="type")
```

<img src="https://pic.hanjiaming.com.cn/2022/02/03/8fc523343efc0.png" alt="1643833236520.png" style="zoom:50%;" />

```python
# Create a regression plot with multiple rows
sns.lmplot(data=df,
           x="insurance_losses",
           y="premiums",
           row="Region")

# Show the plot
plt.show()
```

<img src="https://pic.hanjiaming.com.cn/2022/02/03/7c8993b6a45e5.png" alt="1643833288899.png" style="zoom:50%;" />

## Style

### set_style()

```python
for style in ['white','dark','whitegrid','darkgrid','ticks']:
  sns.set_style(style)
  sns.distplot(df['Tuition'])
  plt.show()
```

![1643833567752.png](https://pic.hanjiaming.com.cn/2022/02/03/6a71ca5efafe0.png)

### Remove the spines

```python
# Set the style to white
sns.set_style('white')

# Create a regression plot
sns.lmplot(data=df,
           x='pop2010',
           y='fmr_2')

sns.despine(left=True)

# Show the plot and clear the figure
plt.show()
plt.clf()
```

<img src="https://pic.hanjiaming.com.cn/2022/02/03/6bbb43fb42405.png" alt="1643833763462.png" style="zoom:50%;" />

### Defining a color

#### use matplotlib to assign

Seaborn supports assigning colors to plots using matplotlib color codes

```python
sns.set(color_codes=True)
sns.distplot(df['Tuition'], color='g')
```

#### use Palettes

```python
for p in sns.palettes.SEABORN_PALETTES:
  sns.set_palette(p)
  sns.distplot(df['Tuition'])
```

<img src="https://pic.hanjiaming.com.cn/2022/02/03/c44388a39db71.png" alt="1643834183142.png" style="zoom:50%;" />

##### Displaying Palettes

- Seaborn uses the set_palette() function to **define** a palette
- sns.color_palette() **returns** the **current** palette
- sns.palplot() function **displays** a palette

一般地，palette影响的是一张图内的多个曲线的颜色，而不是子图之间的颜色。

```python
for p in sns.palettes.SEABORN_PALETTES:
  sns.set_palette(p)
  sns.palplot(sns.color_palette())
  plt.show()
```

![1643834497812.png](https://pic.hanjiaming.com.cn/2022/02/03/34f9c4c9c3770.png)

##### Defining Custom Palettes

<img src="https://pic.hanjiaming.com.cn/2022/02/03/7b12ccea4c6ce.png" alt="1643834621754.png" style="zoom:50%;" />

##### use in plot

```python
# Create a violinplot with the husl palette
sns.violinplot(data=df,
         x='Award_Amount',
         y='Model Selected',
         palette='husl')

plt.show()
plt.clf()
```

<img src="https://pic.hanjiaming.com.cn/2022/02/03/b0c8b09b0950c.png" alt="1643883543016.png" style="zoom:33%;" />

## Plots of each observation

- 用于描述每一类别值的大小分布
- 指定y，y是存放种类的列，采用的列的值的种类是有限的（苹果香蕉梨）
- 将每个类别对应的多个x值点在图上。
- 统计的值必须是数值或者时间（连续的值）

可以指定hue，这将又增加一个维度，rug指定的列是另一个存放种类的列，采用的列的值的种类是有限的（产品质量好中坏）。相当于把x拆成了多个x.

### stripplot

Seaborn 的 stripplot() 显示数据集中的每个观察值。在某些情况下，可能很难看到单个数据点。我们可以使用 jitter 参数来更轻松地查看平均承保费用如何随诊断报销代码而变化。

```python
sns.stripplot(data=df, y="DRG Definition",x="Average Covered Charges",jitter=True)
```

![1643845492580.png](https://pic.hanjiaming.com.cn/2022/02/03/fdb30688fc32c.png)

### swarmplot

和stripplot很相似。

我们可以使用 swarmplot() 绘制所有数据的更复杂的可视化。该图使用复杂的算法以不重叠的方式放置观察结果。这种方法的缺点是 swarmplot() 不能很好地扩展到大型数据集。

```python
sns.swarmplot(data=df, y="DRG Definition", x="Average Covered Charges")
```

![1643845915866.png](https://pic.hanjiaming.com.cn/2022/02/03/f31a9c41f0f27.png)

## Abstract representations for each

可以指定hue，这将又增加一个维度，rug指定的列是另一个存放种类的列，采用的列的值的种类是有限的（产品质量好中坏）。相当于把x拆成了多个x.

### boxplot

下一类图显示了数据的抽象表示。boxplot() 是这种类型中最常见的。该图用于显示与数据分布相关的几个度量，包括中位数、上四分位数和下四分位数以及异常值。

- 统计的值必须是数值或者时间（连续的值）
- 指定y，y是存放种类的列，采用的列的值的种类是有限的（苹果香蕉梨）
- 每一列的值的特征将呈现在图上（x轴）（比如产量）
- 用于表示大量相对无规律值的分布特点

实例：评价不同水果的产量

![1643846287887.png](https://pic.hanjiaming.com.cn/2022/02/03/9dda90d327350.png)

### violinplot

和箱型图相似

violinplot() 是核密度图和箱线图的组合，适用于提供数据分布的替代视图。因为该图使用核密度计算，所以它不显示所有数据点。这对于显示大型数据集很有用，但创建起来可能需要大量计算。

```python
sns.boxplot(data=df, y="DRG Definition",x="Average Covered Charges")
```

![1643846412035.png](https://pic.hanjiaming.com.cn/2022/02/03/889ecc5560e51.png)

### lvplot

```python
sns.lvplot(data=df, y="DRG Definition", x="Average Covered Charges")
```

该分组中的最后一个图是 lvplot()，它代表字母值图。API 与 boxplot() 和 violinplot() 相同，但可以更有效地扩展到大型数据集。lvplot() 是 boxplot() 和 violinplot() 的混合体，渲染速度相对较快且易于解释。

![1643846529178.png](https://pic.hanjiaming.com.cn/2022/02/03/06148e97e6464.png)

## Statistical estimates

可以指定hue，这将又增加一个维度，rug指定的列是另一个存放种类的列，采用的列的值的种类是有限的（产品质量好中坏）。相当于把x拆成了多个x.

### barplot

最后一类图是数据的统计估计。barplot() 显示了对值的估计以及置信区间。在这个例子中，我们包含了第 1 章中描述的色调参数，它为我们查看这些分类数据提供了另一种有用的方法。

给定一个y列，展现y对应的x的值。

- 统计的值必须是数值或者时间（连续的值）
- 指定y，y是存放种类的列，采用的列的值的种类是有限的（苹果香蕉梨），且是唯一的，不重复的
- 每个种类的对应的x值将呈现（x)
- 适用于值的种类有限

```python
sns.barplot(data=df, y="DRG Definition",x="Average Covered Charges",hue="Region")
```

![1643846632070.png](https://pic.hanjiaming.com.cn/2022/02/03/a90b5aaa19ed2.png)

### pointplot

pointplot() 与 barplot() 相似，因为它显示了一个汇总度量和置信区间。pointplot() 对于观察值如何跨分类值变化非常有用。

和barplot相同，不过会连线

![1643847510873.png](https://pic.hanjiaming.com.cn/2022/02/03/6cd18aebd4756.png)

```python
# Create a pointplot and include the capsize in order to show caps on the error bars
sns.pointplot(data=df,
         y='Award_Amount',
         x='Model Selected',
              capsize=.1) # capsize 加个帽子

plt.show()
plt.clf()

```

<img src="https://pic.hanjiaming.com.cn/2022/02/03/a54f19736a88f.png" alt="1643884618865.png" style="zoom: 33%;" />        

### countplot

类似于barplot，不过是**只有y，就统计y列下每一种值的个数，而不是直接呈现y对应的x的个数**

```python
sns.countplot(data=df, y="DRG_Code", hue="Region")
```

![1643847725134.png](https://pic.hanjiaming.com.cn/2022/02/03/8a638ed64edd1.png)

## Matrix Plots

### grid format

```python
pd.crosstab(df["mnth"], df["weekday"], values=df["total_rentals"],aggfunc='mean').round(0)
# values 指的是将x和y形成对应的值的函数结构，考虑到x和y对应的值可能不只有一个。
# round 控制保留小数位
```

<img src="https://pic.hanjiaming.com.cn/2022/02/03/843a309ecab29.png" alt="1643901804516.png" style="zoom: 67%;" />

### heatmap

```python
sns.heatmap(df_crosstab, annot=True, fmt="d", cmap="YlGnBu", cbar=True, center=df_crosstab.loc[9, 6])
```

![1643902031151.png](https://pic.hanjiaming.com.cn/2022/02/03/56be7762715d9.png)

一般的，颜色越浅值越大。不过可以使用参数center重新设置焦点。

### correlation matrix

Pandas corr function calculates correlations between columns in a dataframe

```python
df.corr()
sns.heatmap(df.corr())
```

<img src="https://pic.hanjiaming.com.cn/2022/02/03/fd14d7a595fd0.png" alt="1643902185784.png" style="zoom:50%;" />

在上图中，颜色越浅，表明两列的相关性越高。

## Grid Plots

指定属性列，把把一个图拆成多个图，把属性相同的行的数据放到一个同一个图中。

### Tidy data

- Seaborn's grid plots require data in "tidy format"
- One observation per row of data

![1643902367017.png](https://pic.hanjiaming.com.cn/2022/02/03/ffcb65f1d584a.png)

```python
# g = sns.FaceGrid(df,col = xxx, row = xxx, col_order = xxx,row_order = xxx) 这一步指定怎样切割图
# g.map(sns.xxx,"which_col_name") 指定图的样式 和 数据源参数，order也可以在这里指定

g = sns.FacetGrid(df, col="HIGHDEG")
g.map(sns.boxplot, 'Tuition',order=['1', '2', '3', '4']) #map 这一步是必须的 ,这里的boxplot只指定了一个参数
```

![1643904206013.png](https://pic.hanjiaming.com.cn/2022/02/04/b3dc55721ae59.png)

```python
# Create FacetGrid with Degree_Type and specify the order of the rows using row_order
g2 = sns.FacetGrid(df, 
             row="Degree_Type",
             row_order=['Graduate', 'Bachelors', 'Associates', 'Certificate'])

# Map a pointplot of SAT_AVG_ALL onto the grid
g2.map(sns.pointplot, 'SAT_AVG_ALL',) # 没有y轴

# Show the plot
plt.show()
plt.clf()
```

<img src="https://pic.hanjiaming.com.cn/2022/02/04/29f69256e5647.png" alt="1643904374803.png" style="zoom:50%;" />

### factorplot()

更加快捷的画grid plots

```python
# Create a facetted pointplot of Average SAT_AVG_ALL scores facetted by Degree Type 
sns.factorplot(data=df,
        x='SAT_AVG_ALL',
        kind='point', #kind 可以指定 scatter box 等，别忘了kde也是一种kind
        row='Degree_Type',
        row_order=['Graduate', 'Bachelors', 'Associates', 'Certificate'])

plt.show()
plt.clf()
```

<img src="https://pic.hanjiaming.com.cn/2022/02/04/239f065774718.png" alt="1643904604973.png" style="zoom:50%;" />

### lmplot

给lmplot指定col 和 row等参数实现 grid plots

下面实现了三个属性维度

```python
# Create an lmplot that has a column for Ownership, a row for Degree_Type and hue based on the WOMENONLY column
sns.lmplot(data=df,
        x='SAT_AVG_ALL',
        y='Tuition',
           
        col="Ownership",
        col_order=inst_ord
        row='Degree_Type',
        row_order=['Graduate', 'Bachelors'],
        
        hue='WOMENONLY',
        )

plt.show()
plt.clf()
```

![1643904870981.png](https://pic.hanjiaming.com.cn/2022/02/04/444b48550b2ad.png)

## Pair Plot

由 x 和 y 定位一个或者多个值

### PairGrid

```python
g = sns.PairGrid(df, vars=["Fair_Mrkt_Rent", "Median_Income"])
g = g.map(plt.scatter)
```

![1643906168843.png](https://pic.hanjiaming.com.cn/2022/02/04/6534439842c97.png)

```python
sns.pairplot(df, vars=["Fair_Mrkt_Rent","Median_Income"], kind='reg',diag_kind='hist')
# kind 指定丿 diag_king指定 捺
# kind 和 diag_kind 默认参数是scatter
```

<img src="https://pic.hanjiaming.com.cn/2022/02/04/6c4d62051ad0b.png" alt="1643906329961.png" style="zoom:33%;" />

### pairplot

```python
sns.pairplot(df.query('BEDRMS < 3'), 
             vars=["Fair_Mrkt_Rent","Median_Income", "UTILITY"],  # 随机组合3x3 = 9
             hue='BEDRMS', palette='husl',  #palette将影响不同hue的颜色
             plot_kws={'alpha': 0.5})   # 改变透明度
# 如果不指定kind将智能分配合适的kind
```

<img src="https://pic.hanjiaming.com.cn/2022/02/04/ea80994e3573b.png" alt="1643906671957.png" style="zoom:50%;" />

#### 高度自定义：自定义x和y

```python
# Build a pairplot with different x and y variables
sns.pairplot(data=df,
        x_vars=["fatal_collisions_speeding", "fatal_collisions_alc"], #指定x
        y_vars=['premiums', 'insurance_losses'], #指定y
        kind='scatter',
        hue='Region',
        palette='husl')

plt.show()
plt.clf()
```

<img src="https://pic.hanjiaming.com.cn/2022/02/04/98d9f755748e2.png" alt="1643906866451.png" style="zoom:50%;" />

## Joint plot

<img src="https://pic.hanjiaming.com.cn/2022/02/04/162f6e90b82dc.png" alt="1643909289758.png" style="zoom:50%;" />

### JointGrid

```python
# Build a JointGrid comparing humidity and total_rentals
sns.set_style("whitegrid")
g = sns.JointGrid(x="hum", y="total_rentals",
            data=df,
            xlim=(0.1, 1.0)) 

# 指定呈现regplot和distplot，也可以用g.plot_joint(sns.xxx)实现
g.plot(sns.regplot, sns.distplot)

plt.show()
plt.clf()
```

<img src="https://pic.hanjiaming.com.cn/2022/02/04/f031636211c4a.png" alt="1643909850117.png" style="zoom: 50%;" />

```python
g = sns.JointGrid(data=df, x="Tuition", y="ADM_RATE_ALL") # 制作好画板

# 在图内添加kde
g = g.plot_joint(sns.kdeplot)

# 在图边上添加kde，并填充
g = g.plot_marginals(sns.kdeplot, shade=True)

# 添加注解
g = g.annotate(stats.pearsonr)
```

![1643910205501.png](https://pic.hanjiaming.com.cn/2022/02/04/a69ceecfe535c.png)

### jointplot

更快捷的画Joint plot

边上自带displot

```python
g = (sns.jointplot(x="Tuition", y="ADM_RATE_ALL", kind='scatter', # 指定kind
                    xlim=(0, 25000),
                    marginal_kws = dict(bins=15,rug=True),  			# 设定边上的displot的样式
                    data=df.query('UG < 2500 & Ownership == "Public"'))
            .plot_joint(sns.kdeplot))															# 在图内叠加kde
```

<img src="https://pic.hanjiaming.com.cn/2022/02/04/bbfa8de4480d2.png" alt="1643910506977.png" style="zoom: 33%;" />

## 总结

1. 查看分布用 displot
   - displot将 rugplot(),kdeplot()和matplotlib的hist和三为一
2. 回归分析 用 lmplot
3. 检查数据的分布用lvplot等
4. 需要按照属性对数据图进行对比，使用factorplot
5. 最后，熟悉了数据，可以用pairplot 和 jointplot进行呈现

![1643910643554.png](https://pic.hanjiaming.com.cn/2022/02/04/aab54f8c209c6.png)