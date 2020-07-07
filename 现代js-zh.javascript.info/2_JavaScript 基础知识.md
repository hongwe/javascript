[TOC]



## 2.1 Hello, world!

### “script” 标签

```html
<!DOCTYPE html>
<html>
    <body>
        <p>script 标签之前...</p>

        <script>
            alert('Hello, world!');
        </script>

        <p>...script 标签之后</p>
    </body>
</html>
```

### 现代的标记（markup）

- 1.type 特性：script type=…
- 2.language 特性：script language=…

- 3.脚本前后的注释。

### 外部脚本

```html
<script src="/path/to/script.js"></script>
```

> 独立文件的好处是浏览器会下载它，然后将它保存到浏览器的 缓存 中

> 如果设置了 src 特性，script 标签内容将会被忽略


### 总结
- 我们可以使用一个 <script> 标签将 JavaScript 代码添加到页面中。
- type 和 language 特性（attribute）不是必需的。
- 外部的脚本可以通过 <script src="path/to/script.js"></script> 的方式插入。



## 2.2 代码结构

### 语句

语句是执行行为（action）的语法结构和命令。

```javascript
alert('Hello'); alert('World');
```

```javascript
alert('Hello');
```

```javascript
alert('Hello');
alert('World');
```

### 分号

当存在分行符（line break）时，在大多数情况下可以省略分号。

**一个错误的例子**

```javascript
alert("There will be an error")

[1, 2].forEach(alert)
```

```javascript
alert("There will be an error")[1, 2].forEach(alert)
```

### 注释

```javascript
// 这行注释独占一行
alert('Hello');

alert('World'); // 这行注释跟随在语句后面
```

```javascript
/* 两个消息的例子。
这是一个多行注释。
*/
alert('Hello');
alert('World');
不支持注释嵌套！
不要在 /*...*/ 内嵌套另一个 /*...*/。
```

## 2.3 现代模式，"use strict"

### use strict

```javascript
"use strict";

// 代码以现代模式工作
...
"use strict" 可以被放在函数主体的开头，而不是整个脚本的开头
没有办法取消 use strict
```

### 浏览器控制台

使用浏览器控制台去测试功能时，请注意 `use strict` 默认不会被启动



### 总是使用"use strict"

1. `"use strict"` 指令将浏览器引擎转换为“现代”模式，改变一些内建特性的行为。我们会在之后的学习中了解这些细节。
2. 严格模式通过将 `"use strict"` 放置在整个脚本或函数的顶部来启用。一些新语言特性诸如 “classes” 和 “modules” 也会自动开启严格模式。
3. 所有的现代浏览器都支持严格模式。
4. 我们建议始终使用 `"use strict"` 启动脚本。本教程的所有例子都默认采用严格模式，除非特别指定（非常少）。

## 2.4 变量

### 变量

变量是数据的“命名存储”

语句创建（也可以称为 **声明** 或者 **定义**）

```javascript
let message;
```

通过赋值运算符 `=` 为变量添加一些数据

```javascript
let message;

message = 'Hello'; // 保存字符串
```

简洁一点，我们可以将变量定义和赋值合并成一行：

```javascript
let message = 'Hello!'; // 定义变量，并且赋值

alert(message); // Hello!
```

一行中声明多个变量

```javascript
let user = 'John', age = 25, message = 'Hello';
```

为了更好的可读性，请一行只声明一个变量。

```javascript
let user = 'John';
let age = 25;
let message = 'Hello';
```

```
var` **而不是** `let
```

### 变量命名

1. 变量名称必须仅包含字母，数字，符号 `$` 和 `_`。

2. 首字符必须非数字。

   **区分大小写**

   **允许非英文字母，但不推荐**

   **保留字**

   **未采用** `use strict` **下的赋值**

   ```javascript
   // 注意：这个例子中没有 "use strict"
   
   num = 5; // 如果变量 "num" 不存在，就会被创建
   
   alert(num); // 5
   ```

   ```javascript
   "use strict";
   
   num = 5; // 错误：num 未定义
   ```

   

### 常量

声明一个常数（不变）变量，可以使用 `const` 而非 `let`

不能被修改，如果你尝试修改就会发现报错

```javascript
const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // 错误，不能对常量重新赋值
```

### 大写形式的常数

```javascript
const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ……当我们需要选择一个颜色
let color = COLOR_ORANGE;
alert(color); // #FF7F00
```

好处：

- `COLOR_ORANGE` 比 `"#FF7F00"` 更容易记忆。

- 比起 `COLOR_ORANGE` 而言，`"#FF7F00"` 更容易输错。

- 阅读代码时，`COLOR_ORANGE` 比 `#FF7F00` 更易懂。

  



### 正确的命名变量

一些可以遵循的规则：

- 使用易读的命名，比如 `userName` 或者 `shoppingCart`。
- 离诸如 `a`、`b`、`c` 这种缩写和短名称远一点，除非你真的知道你在干什么。
- 变量名在能够准确描述变量的同时要足够简洁。不好的例子就是 `data` 和 `value`，这样的名称等于什么都没说。如果能够非常明显地从上下文知道数据和值所表达的含义，这样使用它们也是可以的。
- 脑海中的术语要和团队保持一致。如果网站的访客称为“用户”，则我们采用相关的变量命名，比如 `currentUser` 或者 `newUser`，而不要使用 `currentVisitor` 或者一个 `newManInTown`。

**重用还是新建？**

额外声明一个变量绝对是利大于弊的。

现代的 JavaScript 压缩器和浏览器都很够很好地对代码进行优化，所以不会产生性能问题。为不同的值使用不同的变量可以帮助引擎对代码进行优化。



### 总结

我们可以使用 `var`、`let` 或 `const` 声明变量来存储数据。

- `let` — 现代的变量声明方式。
- `var` — 老旧的变量声明方式。一般情况下，我们不会再使用它。但是，我们会在 [旧时的 "var"](https://zh.javascript.info/var) 章节介绍 `var` 和 `let` 的微妙差别，以防你需要它们。
- `const` — 类似于 `let`，但是变量的值无法被修改。

变量应当以一种容易理解变量内部是什么的方式进行命名。





## 2.5 数据类型

“动态类型”（dynamically typed）的编程语言

```javascript
// 没有错误
let message = "hello";
message = 123456;
```

### Number 类型

*number* 类型代表整数和浮点数。

常规数字

特殊数值

​	Infinity

```javascript
alert( 1 / 0 ); // Infinity
alert( Infinity ); // Infinity
```

​	-Infinity

​	NaN

​	 代表一个计算错误。它是一个不正确的或者一个未定义的数学操作所得到的结果

```javascript
alert( "not a number" / 2 ); // NaN，这样的除法是错误的
alert( "not a number" / 2 + 5 ); // NaN
```

所以，如果在数学表达式中有一个 `NaN`，会被传播到最终结果

**数学运算是安全的**

在 JavaScript 中做数学运算是安全的。我们可以做任何事：除以 0，将非数字字符串视为数字，等等。

脚本永远不会因为一个致命的错误（“死亡”）而停止。最坏的情况下，我们会得到 `NaN` 的结果。

BigInt 类型

“number” 类型无法代表大于 `253`（或小于 `-253`）的整数

`BigInt` 类型是最近被添加到 JavaScript 语言中的，用于表示任意长度的整数。

```javascript
// 尾部的 "n" 表示这是一个 BigInt 类型
const bigInt = 1234567890123456789012345678901234567890n;
```

**兼容性问题**

目前 Firefox 和 Chrome 已经支持 `BigInt` 了，但 Safari/IE/Edge 还没有。

### String 类型

字符串必须被括在引号里

```javascript
let str = "Hello";
let str2 = 'Single quotes are ok too';
let phrase = `can embed another ${str}`;
```

在 JavaScript 中，有三种包含字符串的方式。

1. 双引号：`"Hello"`.
2. 单引号：`'Hello'`.
3. 反引号：``Hello``.

双引号和单引号都是“简单”引用，在 JavaScript 中两者几乎没有什么差别。

反引号是 **功能扩展** 引号。它们允许我们通过将变量和表达式包装在 `${…}` 中，来将它们嵌入到字符串中。

**JavaScript 中没有** *character* **类型。**



### Boolean 类型（逻辑类型）

boolean 类型仅包含两个值：true 和 false。

### “null” 值

特殊的 `null` 值不属于上述任何一种类型。

JavaScript 中的 `null` 不是一个“对不存在的 `object` 的引用”或者 “null 指针”。

JavaScript 中的 `null` 仅仅是一个代表“无”、“空”或“值未知”的特殊值。

### “undefined” 值

特殊值 undefined 和 null 一样自成类型。

undefined 的含义是 未被赋值。

如果一个变量已被声明，但未被赋值，那么它的值就是 undefined：

通常，使用使用 `null` 将一个“空”或者“未知”的值写入变量中，`undefined` 仅仅用于检验，例如查看变量是否被赋值或者其他类似的操作。

### object 类型和 symbol 类型

object 类型是一个特殊的类型。

其他所有的数据类型都被称为“原生类型”，因为它们的值只包含一个单独的内容（字符串、数字或者其他）。相反，object 则用于储存数据集合和更复杂的实体。

symbol 类型用于创建对象的唯一标识符。


### typeof 运算符

它支持两种语法形式：

1. 作为运算符：`typeof x`。
2. 函数形式：`typeof(x)`。

换言之，有括号和没有括号，得到的结果是一样的。

对 typeof x 的调用会以字符串的形式返回数据类型：

```javascript
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)
```

1. `Math` 是一个提供数学运算的内建 `object`。我们会在 [数字类型](https://zh.javascript.info/number) 一节中学习它。此处仅作为一个 `object` 的示例。
2. `typeof null` 的结果是 `"object"`。这其实是不对的。官方也承认了这是 `typeof` 运算符的问题，现在只是为了兼容性而保留了下来。当然，`null` 不是一个 `object`。`null` 有自己的类型，它是一个特殊值。再次强调，这是 JavaScript 语言的一个错误。
3. `typeof alert` 的结果是 `"function"`，因为 `alert` 在 JavaScript 语言中是一个函数。我们会在下一章学习函数，那时我们会了解到，在 JavaScript 语言中没有一个特别的 “function” 类型。函数隶属于 `object` 类型。但是 `typeof` 会对函数区分对待。这不是很正确的做法，但在实际编程中非常方便。

### 总结

JavaScript 中有八种基本的数据类型（译注：前七种为基本数据类型，也称为原始类型，而 `object` 为复杂数据类型）。

- `number` 用于任何类型的数字：整数或浮点数，在 ±253 范围内的整数。
- `bigint` 用于任意长度的整数。
- `string` 用于字符串：一个字符串可以包含一个或多个字符，所以没有单独的单字符类型。
- `boolean` 用于 `true` 和 `false`。
- `null` 用于未知的值 —— 只有一个 `null` 值的独立类型。
- `undefined` 用于未定义的值 —— 只有一个 `undefined` 值的独立类型。
- `symbol` 用于唯一的标识符。
- `object` 用于更复杂的数据结构。

我们可以通过 `typeof` 运算符查看存储在变量中的数据类型。

- 两种形式：`typeof x` 或者 `typeof(x)`。
- 以字符串的形式返回类型名称，例如 `"string"`。
- `typeof null` 会返回 `"object"` —— 这是 JavaScript 编程语言的一个错误，实际上它并不是一个 `object`。



## 2.6 类型转换

### 字符串转换

`alert(value)` 将 `value` 转换为字符串类型，然后显示这个值

调用 `String(value)` 来将 `value` 转换为字符串类型

```javascript
let value = true;
alert(typeof value); // boolean

value = String(value); // 现在，值是一个字符串形式的 "true"
alert(typeof value); // string
```

字符串转换最明显。`false` 变成 `"false"`，`null` 变成 `"null"` 等

### 数字型转换

在算术函数和表达式中，会自动进行 number 类型转换。

比如，当把除法 `/` 用于非 number 类型：

```javascript
alert( "6" / "2" ); // 3, string 类型的值被自动转换成 number 类型后进行计算
```

使用 `Number(value)` 显式地将这个 `value` 转换为 number 类型

```javascript
let str = "123";
alert(typeof str); // string

let num = Number(str); // 变成 number 类型 123

alert(typeof num); // number
```

该字符串不是一个有效的数字，转换的结果会是 `NaN`。例如：

```javascript
let age = Number("an arbitrary string instead of a number");

alert(age); // NaN，转换失败
```

| 值              | 变成……                                                       |
| :-------------- | :----------------------------------------------------------- |
| `undefined`     | `NaN`                                                        |
| `null`          | `0`                                                          |
| `true 和 false` | `1` and `0`                                                  |
| `string`        | 去掉首尾空格后的纯数字字符串中含有的数字。如果剩余字符串为空，则转换结果为 `0`。否则，将会从剩余字符串中“读取”数字。当类型转换出现 error 时返回 `NaN`。 |

```javascript
alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN（从字符串“读取”数字，读到 "z" 时出现错误）
alert( Number(true) );        // 1
alert( Number(false) );       // 0
```

请注意 `null` 和 `undefined` 在这有点不同：`null` 变成数字 `0`，`undefined` 变成 `NaN`。

### 布尔类型转换

调用 Boolean(value) 显式地进行转换。

转换规则如下：

- 直观上为“空”的值（如 `0`、空字符串、`null`、`undefined` 和 `NaN`）将变为 `false`。
- 其他值变成 `true`。

比如：

```javascript
alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("hello") ); // true
alert( Boolean("") ); // false
```

**请注意：包含 0 的字符串** `"0"` **是** `true`

```javascript
alert( Boolean("0") ); // true
alert( Boolean(" ") ); // 空白, 也是 true (任何非空字符串是 true)
```

| 值                                    | 变成……  |
| :------------------------------------ | :------ |
| `0`, `null`, `undefined`, `NaN`, `""` | `false` |
| 其他值                                | `true`  |

### 总结

有三种常用的类型转换：转换为 string 类型、转换为 number 类型和转换为 boolean 类型。

**字符串转换** —— 转换发生在输出内容的时候，也可以通过 `String(value)` 进行显式转换。原始类型值的 string 类型转换通常是很明显的。

**数字型转换** —— 转换发生在进行算术操作时，也可以通过 `Number(value)` 进行显式转换。

**布尔型转换** —— 转换发生在进行逻辑操作时，也可以通过 `Boolean(value)` 进行显式转换。

上述的大多数规则都容易理解和记忆。人们通常会犯错误的值得注意的例子有以下几个：

- 对 `undefined` 进行数字型转换时，输出结果为 `NaN`，而非 `0`。
- 对 `"0"` 和只有空格的字符串（比如：`" "`）进行布尔型转换时，输出结果为 `true`。

## 2.7 运算符

### 术语：“一元运算符”，“二元运算符”，“运算元”

### 字符串连接,二元运算符 +

```javascript
let s = "my" + "string";
alert(s); // mystring
```

```javascript
alert( '1' + 2 ); // "12"
alert( 2 + '1' ); // "21"
```

请注意：运算符的运算方向是由左至右。如果是两个数字，后面再跟一个字符串，那么两个数字会先相加，再转化为字符串：

```javascript
alert(2 + 2 + '1' ); // "41" 而不是 "221"
```

### 数字转化,一元运算符 +

```javascript
let apples = "2";
let oranges = "3";

// 在二元运算符加号起作用之前，所有的值都被转化为了数字
alert( +apples + +oranges ); // 5

// 更长的写法
// alert( Number(apples) + Number(oranges) ); // 5
```

### 运算符优先级

| 优先级 | 名称     | 符号 |
| :----- | :------- | :--- |
| …      | …        | …    |
| 17     | 一元加号 | `+`  |
| 17     | 一元负号 | `-`  |
| 15     | 乘号     | `*`  |
| 15     | 除号     | `/`  |
| 13     | 加号     | `+`  |
| 13     | 减号     | `-`  |
| …      | …        | …    |
| 3      | 赋值符   | `=`  |
| …      | …        | …    |

###  赋值运算符

赋值符号 `=` 也是一个运算符

链式赋值也是可以的：

```javascript
let a, b, c;

a = b = c = 2 + 2;

alert( a ); // 4
alert( b ); // 4
alert( c ); // 4
```

链式赋值由右向左执行。首先执行最右侧表达式 `2 + 2`，然后将结果赋值给左侧：`c`、`b`、`a`。最后，所有的变量都共享一个值。

**赋值运算符** `"="` **会返回一个值**



### 求余运算符%

```javascript
alert( 5 % 2 ); // 1 是 5 / 2 的余数
alert( 8 % 3 ); // 2 是 8 / 3 的余数
alert( 6 % 3 ); // 0 是 6 / 3 的余数
```

### 幂运算符 **

幂运算符 `**` 是最近被加入到 JavaScript 中的。

```javascript
alert( 2 ** 2 ); // 4  (2 * 2)
alert( 2 ** 3 ); // 8  (2 * 2 * 2)
alert( 2 ** 4 ); // 16 (2 * 2 * 2 * 2)
```

```javascript
alert( 4 ** (1/2) ); // 2 (1/2 幂相当于开方，这是数学常识)
alert( 8 ** (1/3) ); // 2 (1/3 幂相当于开三次方)
```

### 自增/自减

**自增** `++` 将变量与 1 相加：

```javascript
let counter = 2;
counter++;      // 和 counter = counter + 1 效果一样，但是更简洁
alert( counter ); // 3
```

**自减** `--` 将变量与 1 相减：

```javascript
let counter = 2;
counter--;      // 和 counter = counter - 1 效果一样，但是更简洁
alert( counter ); // 1
```

**重要：**

自增/自减只能应用于变量。试一下，将其应用于数值（比如 `5++`）则会报错。

运算符 `++` 和 `--` 可以置于变量前，也可以置于变量后。

- 当运算符置于变量后，被称为“后置形式”：`counter++`。
- 当运算符置于变量前，被称为“前置形式”：`++counter`。

**自增/自减和其它运算符的对比**

`++/--` 运算符同样可以在表达式内部使用。它们的优先级比绝大部分的算数运算符要高。

### 位运算符

- 按位与 ( `&` )
- 按位或 ( `|` )
- 按位异或 ( `^` )
- 按位非 ( `~` )
- 左移 ( `<<` )
- 右移 ( `>>` )
- 无符号右移 ( `>>>` )

### 修改并替换

简短的“修改并替换”运算符对所有的运算符包括位运算符都有效：`/=`、`-=`等等

### 逗号运算符

逗号运算符 `,` 是最少见最不常使用的运算符之一。有时候它会被用来写更简短的代码

```javascript
let a = (1 + 2, 3 + 4);

alert( a ); // 7（3 + 4 的结果）
```

这里，第一个语句 `1 + 2` 运行了，但是它的结果被丢弃了。随后计算 `3 + 4`，并且该计算结果被返回。

**逗号运算符的优先级非常低**

```javascript
// 一行上有三个运算符
for (a = 1, b = 3, c = a * b; a < 10; a++) {
 ...
}
```



## 2.8 值的比较

- 大于 / 小于：`a > b`，`a < b`。
- 大于等于 / 小于等于：`a >= b`，`a <= b`。
- 检查两个值的相等：`a == b`（注意表达式中是两个等号 `=`，若写为单个等号 `a = b` 则表示赋值）。
- 检查两个值不相等，在数学中使用 `≠` 符号，而在 JavaScript 中则通过在赋值符号前加叹号表示：`a != b`。

### 比较结果为Bloolean类型

和其他运算符一样，比较运算符也会有返回值，返回值为布尔值（Boolean）。

- `true` —— 表示“yes（是）”，“correct（正确）”或“the truth（真相）”。
- `false` —— 表示“no（否）”，“wrong（错误）”或“not the truth（非真相）”

```javascript
alert( 2 > 1 );  // true（正确）
alert( 2 == 1 ); // false（错误）
alert( 2 != 1 ); // true（正确）
```

```javascript
let result = 5 > 4; // 把比较的结果赋值给 result
alert( result ); // true
```



### 字符串比较

JavaScript 会使用“字典（dictionary）”或“词典（lexicographical）”顺序进行判定。

```javascript
alert( 'Z' > 'A' ); // true
alert( 'Glow' > 'Glee' ); // true
alert( 'Bee' > 'Be' ); // true
```

1. 首先比较两个字符串的首位字符大小。
2. 如果一方字符较大（或较小），则该字符串大于（或小于）另一个字符串。算法结束。
3. 否则，如果两个字符串的首位字符相等，则继续取出两个字符串各自的后一位字符进行比较。
4. 重复上述步骤进行比较，直到比较完成某字符串的所有字符为止。
5. 如果两个字符串的字符同时用完，那么则判定它们相等，否则未结束（还有未比较的字符）的字符串更大。

**非真正的字典顺序，而是 Unicode 编码顺序**



### 不同类型间的比较

对不同类型的值进行比较时，JavaScript 会首先将其转化为数字（number）再判定大小

```javascript
alert( '2' > 1 ); // true，字符串 '2' 会被转化为数字 2
alert( '01' == 1 ); // true，字符串 '01' 会被转化为数字 1
```

对于布尔类型值，`true` 会被转化为 `1`、`false` 转化为 `0`。

```javascript
alert( true == 1 ); // true
alert( false == 0 ); // true
```



### 严格相等

普通的相等性检查 `==` 存在一个问题，它不能区分出 `0` 和 `false`

**严格相等运算符 `===` 在进行比较时不会做任何的类型转换。**

### 对 null 和 undefined 进行比较

```javascript
alert( null === undefined ); // false
```

```javascript
alert( null == undefined ); // true
```

当使用数学式或其他比较方法 `< > <= >=` 时：

`null/undefined` 会被转化为数字：`null` 被转化为 `0`，`undefined` 被转化为 `NaN`。

奇怪的结果：null vs 0

通过比较 `null` 和 0 可得：

```javascript
                               alert( null > 0 );  // (1) false
alert( null == 0 ); // (2) false
alert( null >= 0 ); // (3) true
```

特立独行的 undefined

`undefined` 不应该被与其他值进行比较：

```javascript
alert( undefined > 0 ); // false (1)
alert( undefined < 0 ); // false (2)
alert( undefined == 0 ); // false (3)
```

规避错误

除了严格相等 `===` 外，其他凡是有 `undefined/null` 参与的比较，我们都需要额外小心。

除非你非常清楚自己在做什么，否则永远不要使用 `>= > < <=` 去比较一个可能为 `null/undefined` 的变量。对于取值可能是 `null/undefined` 的变量，请按需要分别检查它的取值情况。

### 总结

- 比较运算符始终返回布尔值。
- 字符串的比较，会按照“词典”顺序逐字符地比较大小。
- 当对不同类型的值进行比较时，它们会先被转化为数字（不包括严格相等检查）再进行比较。
- 在非严格相等 `==` 下，`null` 和 `undefined` 相等且各自不等于任何其他的值。
- 在使用 `>` 或 `<` 进行比较时，需要注意变量可能为 `null/undefined` 的情况。比较好的方法是单独检查变量是否等于 `null/undefined`。

## 2.9 交互：alert、prompt 和 confirm

### alert

```javascript
alert(message);
```

弹出的这个带有信息的小窗口被称为 **模态窗**。



### prompt

```javascript
result = prompt(title, [default]);
```

浏览器会显示一个带有文本消息的模态窗口，还有 input 框和确定/取消按钮。

```
title
```

显示给用户的文本

```
default
```

可选的第二个参数，指定 input 框的初始值。

**IE 浏览器会提供默认值**

### confirm

`confirm` 函数显示一个带有 `question` 以及确定和取消两个按钮的模态窗口。

```javascript
result = confirm(question);
```

### 总结

我们学习了与用户交互的 3 个浏览器的特定函数：

- `alert`

  显示信息。

- `prompt`

  显示信息要求用户输入文本。点击确定返回文本，点击取消或按下 Esc 键返回 `null`。

- `confirm`

  显示信息等待用户点击确定或取消。点击确定返回 `true`，点击取消或按下 Esc 键返回 `false`。

这些方法都是模态的：它们暂停脚本的执行，并且不允许用户与该页面的其余部分进行交互，直到窗口被解除。

上述所有方法共有两个限制：

1. 模态窗口的确切位置由浏览器决定。通常在页面中心。
2. 窗口的确切外观也取决于浏览器。我们不能修改它。

这就是简单的代价。还有其他一些方法可以显示更漂亮的窗口，并与用户进行更丰富的交互，但如果“花里胡哨”不是非常重要，那使用本节讲的这些方法也挺好。





## 2.10 条件运算符：if 和 '?'

### if 语句

`if(...)` 语句计算括号里的条件表达式，如果计算结果是 `true`，就会执行对应的代码块

### 布尔转换

`if (…)` 语句会计算圆括号内的表达式，并将计算结果转换为布尔型

- 数字 `0`、空字符串 `""`、`null`、`undefined` 和 `NaN` 都会被转换成 `false`。因为他们被称为 “falsy” 值。
- 其他值被转换为 `true`，所以它们被称为 “truthy”。

### else 语句

### 多个条件 : else if

### 条件运算符

```javascript
let result = condition ? value1 : value2;
```

### 多个 '?'

```javascript
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );
```

1. 第一个问号检查 `age < 3`。
2. 如果为真 — 返回 `'Hi, baby!'`。否则，会继续执行冒号 `":"` 后的表达式，检查 `age < 18`。
3. 如果为真 — 返回 `'Hello!'`。否则，会继续执行下一个冒号 `":"` 后的表达式，检查 `age < 100`。
4. 如果为真 — 返回 `'Greetings!'`。否则，会继续执行最后一个冒号 `":"` 后面的表达式，返回 `'What an unusual age!'`。

### '?'的非常规使用

有时可以使用问号 `?` 来代替 `if` 语句

```javascript
let company = prompt('Which company created JavaScript?', '');

(company == 'Netscape') ?
   alert('Right!') : alert('Wrong.');
```



## 2.11 逻辑运算符

JavaScript 里有三个逻辑运算符：`||`（或），`&&`（与），`!`（非）。

#### `||`（或）

```javascript
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false
```

大多数情况，逻辑或 `||` 会被用在 `if` 语句中，用来测试是否有 **任何** 给定的条件为 `true`

### 或运算寻找抵押给真值

```javascript
result = value1 || value2 || value3;
```

或运算符 `||` 做了如下的事情：

- 从左到右依次计算操作数。
- 处理每一个操作数时，都将其转化为布尔值。如果结果是 `true`，就停止计算，返回这个操作数的初始值。
- 如果所有的操作数都被计算过（也就是，转换结果都是 `false`），则返回最后一个操作数。

返回的值是操作数的初始形式，不会做布尔转换。

也就是，一个或 `"||"` 运算的链，将返回第一个真值，如果不存在真值，就返回该链的最后一个值。

例如：

```javascript
alert( 1 || 0 ); // 1（1 是真值）
alert( true || 'no matter what' ); //（true 是真值）

alert( null || 1 ); // 1（1 是第一个真值）
alert( null || 0 || 1 ); // 1（第一个真值）
alert( undefined || null || 0 ); // 0（所有的转化结果都是 false，返回最后一个值
```

**获取变量列表或者表达式的第一个真值。**

**短路取值。**

### `&&`（与）

```javascript
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false
```

### 与操作寻找第一个假值

```javascript
result = value1 && value2 && value3;
```

与运算 `&&` 做了如下的事：

- 从左到右依次计算操作数。
- 将处理每一个操作数时，都将其转化为布尔值。如果结果是 `false`，就停止计算，并返回这个操作数的初始值。
- 如果所有的操作数都被计算过（也就是，转换结果都是 `true`），则返回最后一个操作数。

换句话说，与运算符返回第一个假值，如果没有假值就返回最后一个值。

上面的规则和或运算很像。区别就是与运算返回第一个假值而或操作返回第一个真值。

例如：

```javascript
// 如果第一个运算符是真值，
// 与操作返回第二个操作数：
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// 如果第一个运算符是假值，
// 与操作直接返回它。第二个操作数被忽略
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0
```

我们也可以在一行代码上串联多个值。查看第一个假值是否被返回：

```javascript
alert( 1 && 2 && null && 3 ); // null
```

如果所有的值都是真值，最后一个值将会被返回：

```javascript
alert( 1 && 2 && 3 ); // 3，最后一个值
```

**与运算 `&&` 在或运算符 `||` 之前执行**

与运算 `&&` 的优先级比或运算 `||` 要高。

所以代码 `a && b || c && d` 完全跟 `&&` 表达式加了括号一样：`(a && b) || (c && d)`。

### `!`（非）

```javascript
result = !value;
```

运算符接受一个参数，并按如下运作：

1. 将操作数转化为布尔类型：`true/false`。
2. 返回相反的值。

非运算符 `!` 的优先级在所有逻辑运算符里面最高，所以它总是在 `&&` 和 `||` 前执行。



## 2.12 循环：while 和 for

### while 循环

```javascript
while (condition) {
  // 代码
  // 所谓的“循环体”
}
```

当 `condition` 为 `true` 时，执行循环体的 `code`。

**单行循环体不需要大括号**

如果循环体只有一条语句，则可以省略大括号 `{…}`：

### do...while 循环

```javascript
do {
  // 循环体
} while (condition);
```

循环首先执行循环体，然后检查条件，当条件为真时，重复执行循环体。

循环体 **至少执行一次**。通常我们更倾向于使用另一个形式：`while(…) {…}`。

### for 循环

```javascript
for (begin; condition; step) {
  // ……循环体……
}
```

| egin           | `i = 0`    | 进入循环时执行一次。                             |
| -------------- | ---------- | ------------------------------------------------ |
| condition      | `i < 3`    | 在每次循环迭代之前检查，如果为 false，停止循环。 |
| body（循环体） | `alert(i)` | 条件为真时，重复运行。                           |
| step           | `i++`      | 在每次循环体迭代后执行。                         |

**内联变量声明**

这里“计数”变量 `i` 是在循环中声明的。这叫做“内联”变量声明。这样的变量只在循环中可见。



### 跳出循环

使用 `break` 指令强制退出

### 继续下一次迭代

`continue` 指令是 `break` 的“轻量版”。它不会停掉整个循环。而是停止当前这一次迭代，并强制启动新一轮循环（如果条件允许的话）。

`continue` **指令利于减少嵌套**

**禁止** `break/continue` **在 ‘?’ 的右边**

```javascript
(i > 5) ? alert(i) : continue; // continue 不允许在这个位置
```

只有在循环内部才能调用 `break/continue`，并且标签必须位于指令上方的某个位置。



### 总结 

我们学习了三种循环：

- `while` —— 每次迭代之前都要检查条件。
- `do..while` —— 每次迭代后都要检查条件。
- `for (;;)` —— 每次迭代之前都要检查条件，可以使用其他设置。

通常使用 `while(true)` 来构造“无限”循环。这样的循环和其他循环一样，都可以通过 `break` 指令来终止。

如果我们不想在当前迭代中做任何事，并且想要转移至下一次迭代，那么可以使用 `continue` 指令。

`break/continue` 支持循环前的标签。标签是 `break/continue` 跳出嵌套循环以转到外部的唯一方法。





## 2.13 "switch" 语句

`switch` 语句可以替代多个 `if` 判断。

`switch` 语句为多分支选择的情况提供了一个更具描述性的方式。

```javascript
switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    [break]

  case 'value2':  // if (x === 'value2')
    ...
    [break]

  default:
    ...
    [break]
}
```

**如果没有 `break`，程序将不经过任何检查就会继续执行下一个 `case`。**

**任何表达式都可以成为 `switch/case` 的参数**

`switch` 和 `case` 都允许任意表达式。

### case 分组

共享同一段代码的几个 `case` 分支可以被分为一组：

```javascript
let a = 3;

switch (a) {
  case 4:
    alert('Right!');
    break;

  case 3: // (*) 下面这两个 case 被分在一组
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}
```



## 2.14 函数

### 函数声明

```javascript
function showMessage() {
  alert( 'Hello everyone!' );
}
```
function 关键字首先出现，然后是 函数名，然后是括号之间的 参数 列表（用逗号分隔，在上述示例中为空），最后是花括号之间的代码（即“函数体”）。
```javascript
function name(parameters) {
  ...body...
}
```

我们的新函数可以通过名称调用：`showMessage()`。

```javascript
function showMessage() {
  alert( 'Hello everyone!' );
}

showMessage();
showMessage();
```

### 局部变量

在函数中声明的变量只在该函数内部可见

### 外部变量

函数也可以访问外部变量

只有在没有局部变量的情况下才会使用外部变量。

如果在函数内部声明了同名变量，那么函数会 **遮蔽** 外部变量

**全局变量**

任何函数之外声明的变量，例如上述代码中的外部变量 `userName`，都被称为 **全局** 变量。

全局变量在任意函数中都是可见的（除非被局部变量遮蔽）。



### 参数

如果未提供参数，那么其默认值则是 `undefined`。

### 返回值

指令 `return` 可以在函数的任意位置。当执行到达时，函数停止，并将值返回给调用代码（分配给上述代码中的 `result`）。

**空值的** `return` **或没有** `return` **的函数返回值为** `undefined`



**不要在** `return` **与返回值之间添加新行**

```javascript
return
 (some + long + expression + or + whatever * f(a) + f(b))
```

### 函数命名

函数就是行为（action）

- `"get…"` —— 返回一个值，
- `"calc…"` —— 计算某些内容，
- `"create…"` —— 创建某些内容，
- `"check…"` —— 检查某些内容并返回 boolean 值，等。

```javascript
showMessage(..)     // 显示信息
getAge(..)          // 返回 age（gets it somehow）
calcSum(..)         // 计算求和并返回结果
createForm(..)      // 创建表格（通常会返回它）
checkPermission(..) // 检查权限并返回 true/false
```

**一个函数 —— 一个行为**

一个函数应该只包含函数名所指定的功能，而不是做更多与函数名无关的功能。

两个独立的行为通常需要两个函数，即使它们通常被一起调用（在这种情况下，我们可以创建第三个函数来调用这两个函数）。

有几个违反这一规则的例子：

- `getAge` —— 如果它通过 `alert` 将 age 显示出来，那就有问题了（只应该是获取）。
- `createForm` —— 如果它包含修改文档的操作，例如向文档添加一个表单，那就有问题了（只应该创建表单并返回）。
- `checkPermission` —— 如果它显示 `access granted/denied` 消息，那就有问题了（只应执行检查并返回结果）。

**非常短的函数命名**

常用的函数有时会有**非常短**的名字。

例如，[jQuery](http://jquery.com/) 框架用 `$` 定义一个函数。[LoDash](http://lodash.com/) 库的核心函数用 `_` 命名。

### 函数==注释

函数应该简短且只有一个功能。如果这个函数功能复杂，那么把该函数拆分成几个小的函数是值得的。

第一个变体使用了一个标签

```javascript
function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert( i ); // 一个素数
  }
}
```

第二个变体使用附加函数 `isPrime(n)` 来检验素数：

```javascript
function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);  // 一个素数
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}
```

### 总结

函数声明方式如下所示：

```javascript
function name(parameters, delimited, by, comma) {
  /* code */
}
```

- 作为参数传递给函数的值，会被复制到函数的局部变量。
- 函数可以访问外部变量。但它只能从内到外起作用。函数外部的代码看不到函数内的局部变量。
- 函数可以返回值。如果没有返回值，则其返回的结果是 `undefined`。

为了使代码简洁易懂，建议在函数中主要使用局部变量和参数，而不是外部变量。

与不获取参数但将修改外部变量作为副作用的函数相比，获取参数、使用参数并返回结果的函数更容易理解。

函数命名：

- 函数名应该清楚地描述函数的功能。当我们在代码中看到一个函数调用时，一个好的函数名能够让我们马上知道这个函数的功能是什么，会返回什么。
- 一个函数是一个行为，所以函数名通常是动词。
- 目前有许多优秀的函数名前缀，如 `create…`、`show…`、`get…`、`check…` 等等。使用它们来提示函数的作用吧。





## 2.15 函数表达式

之前语法称为 **函数声明**：

```javascript
function sayHi() {
  alert( "Hello" );
}
```

另一种创建函数的语法称为 **函数表达式**。

通常会写成这样：

```javascript
let sayHi = function() {
  alert( "Hello" );
};
```

```javascript
function sayHi() {   // (1) 创建
  alert( "Hello" );
}

let func = sayHi;    // (2) 复制

func(); // Hello     // (3) 运行复制的值（正常运行）！
sayHi(); // Hello    //     这里也能运行（为什么不行呢）
```

解释一下上段代码发生的细节：

1. `(1)` 行声明创建了函数，并把它放入到变量 `sayHi`。
2. `(2)` 行将 `sayHi` 复制到了变量 `func`。请注意：`sayHi` 后面没有括号。如果有括号，`func = sayHi()` 会把 `sayHi()` 的调用结果写进`func`，而不是 `sayHi` **函数** 本身。
3. 现在函数可以通过 `sayHi()` 和 `func()` 两种方式进行调用。

注意，我们也可以在第一行中使用函数表达式来声明 `sayHi`：

```javascript
let sayHi = function() {
  alert( "Hello" );
};

let func = sayHi;
// ...
```

这两种声明的函数是一样的。

**为什么这里末尾会有个分号**

```javascript
function sayHi() {
  // ...
}

let sayHi = function() {
  // ...
};
```

让我们多举几个例子，看看如何将函数作为值来传递以及如何使用函数表达式。

我们写一个包含三个参数的函数 `ask(question, yes, no)`：

- `question`

  关于问题的文本

- `yes`

  当回答为 “Yes” 时，要运行的脚本

- `no`

  当回答为 “No” 时，要运行的脚本

函数需要提出 `question`（问题），并根据用户的回答，调用 `yes()` 或 `no()`：

```javascript
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// 用法：函数 showOk 和 showCancel 被作为参数传入到 ask
ask("Do you agree?", showOk, showCancel);
```

在实际开发中，这样的的函数是非常有用的。实际开发与上述示例最大的区别是，实际开发中的函数会通过更加复杂的方式与用户进行交互，而不是通过简单的 `confirm`。在浏览器中，这样的函数通常会绘制一个漂亮的提问窗口。但这是另外一件事了。

`ask` 的两个参数值 `showOk` 和 `showCancel` 可以被称为 **回调函数** 或简称 **回调**。



我们可以用函数表达式对同样的函数进行大幅简写：

```javascript
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);
```

这里直接在 `ask(...)` 调用内进行函数声明。这两个函数没有名字，所以叫 **匿名函数**

**一个函数是表示一个“行为”的值**

字符串或数字等常规值代表 **数据**。

函数可以被视为一个 **行为（action）**。

我们可以在变量之间传递它们，并在需要时运行。

### 函数声明和函数表达式

首先是语法：如何通过代码对它们进行区分。

- **函数声明**：在主代码流中声明为单独的语句的函数。

  ```javascript
  // 函数声明
  function sum(a, b) {
    return a + b;
  }
  ```

- **函数表达式**：在一个表达式中或另一个语法结构中创建的函数。下面这个函数是在赋值表达式 `=` 右侧创建的：

  ```javascript
  // 函数表达式
  let sum = function(a, b) {
    return a + b;
  };
  ```

更细微的差别是，JavaScript 引擎会在 **什么时候** 创建函数。

**函数表达式是在代码执行到达时被创建，并且仅从那一刻起可用。**

一旦代码执行到赋值表达式 `let sum = function…` 的右侧，此时就会开始创建该函数，并且可以从现在开始使用（分配，调用等）。

函数声明则不同。

**在函数声明被定义之前，它就可以被调用。**

```javascript
sayHi("John"); // Hello, John

function sayHi(name) {
  alert( `Hello, ${name}` );
}
```

……如果它是一个函数表达式，它就不会工作：

```javascript
sayHi("John"); // error!

let sayHi = function(name) {  // (*) no magic any more
  alert( `Hello, ${name}` );
};
```

**严格模式下，当一个函数声明在一个代码块内时，它在该代码块内的任何位置都是可见的。但在代码块外不可见。**

**什么时候选择函数声明与函数表达式？**

根据经验，当我们需要声明一个函数时，首先考虑函数声明语法。它能够为组织代码提供更多的灵活性。因为我们可以在声明这些函数之前调用这些函数。

这对代码可读性也更好，因为在代码中查找 `function f(…) {…}` 比 `let f = function(…) {…}` 更容易。函数声明更“醒目”。

……但是，如果由于某种原因而导致函数声明不适合我们（我们刚刚看过上面的例子），那么应该使用函数表达式。



### 总结

- 函数是值。它们可以在代码的任何地方被分配，复制或声明。
- 如果函数在主代码流中被声明为单独的语句，则称为“函数声明”。
- 如果该函数是作为表达式的一部分创建的，则称其“函数表达式”。
- 在执行代码块之前，内部算法会先处理函数声明。所以函数声明在其被声明的代码块内的任何位置都是可见的。
- 函数表达式在执行流程到达时创建。

在大多数情况下，当我们需要声明一个函数时，最好使用函数声明，因为函数在被声明之前也是可见的。这使我们在代码组织方面更具灵活性，通常也会使得代码可读性更高。

所以，仅当函数声明不适合对应的任务时，才应使用函数表达式





## 2.16 箭头函数，基础知识

```javascript
let func = (arg1, arg2, ...argN) => expression
```

```javascript
et sum = (a, b) => a + b;

/* 这个箭头函数是下面这个函数的更短的版本：

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3
```

### 多行箭头函数

```javascript
let sum = (a, b) => {  // 花括号表示开始一个多行函数
  let result = a + b;
  return result; // 如果我们使用了花括号，那么我们需要一个显式的 “return”
};

alert( sum(1, 2) ); // 3
```

### 总结 

对于一行代码的函数来说，箭头函数是相当方便的。它具体有两种：

1. 不带花括号：`(...args) => expression` — 右侧是一个表达式：函数计算表达式并返回其结果。
2. 带花括号：`(...args) => { body }` — 花括号允许我们在函数中编写多个语句，但是我们需要显式地 `return` 来返回一些内容。





## 2.17 JavasScript 特性

### 代码结构

语句用分号分隔

换行符也被视为分隔符

代码块 `{...}` 后以及有代码块的语法结构（例如循环）后不需要加分号

```javascript
function f() {
  // 函数声明后不需要加分号
}

for(;;) {
  // 循环语句后不需要加分号
}
```

### 严格模式

```javascript
'use strict';

...
```

### 变量

可以使用以下方式声明变量：

- `let`
- `const`（不变的，不能被改变）
- `var`（旧式的，稍后会看到）

一个变量名可以由以下组成：

- 字母和数字，但是第一个字符不能是数字。
- 字符 `$` 和 `_` 是允许的，用法同字母。
- 非拉丁字母和象形文字也是允许的，但通常不会使用。



有 8 种数据类型：

- `number` — 可以是浮点数，也可以是整数，
- `bigint` — 用于任意长度的整数，
- `string` — 字符串类型，
- `boolean` — 逻辑值：`true/false`，
- `null` — 具有单个值 `null` 的类型，表示“空”或“不存在”，
- `undefined` — 具有单个值 `undefined` 的类型，表示“未分配（未定义）”，
- `object` 和 `symbol` — 对于复杂的数据结构和唯一标识符，我们目前还没学习这个类型。

`typeof` 运算符返回值的类型，但有两个例外：

```javascript
typeof null == "object" // JavaScript 编程语言的设计错误
typeof function(){} == "function" // 函数被特殊对待
```

### 交互

### 运算符

### 循环

```javascript
// 1
while (condition) {
  ...
}

// 2
do {
  ...
} while (condition);

// 3
for(let i = 0; i < 10; i++) {
  ...
}
```

### "switch" 结构

### 函数

三种在 JavaScript 中创建函数的方式：

1. 函数声明：主代码流中的函数

   ```javascript
   function sum(a, b) {
     let result = a + b;
   
     return result;
   }
   ```

2. 函数表达式：表达式上下文中的函数

   ```javascript
   let sum = function(a, b) {
     let result = a + b;
   
     return result;
   }
   ```

3. 箭头函数：

   ```javascript
   // 表达式在右侧
   let sum = (a, b) => a + b;
   
   // 或带 {...} 的多行语法，此处需要 return：
   let sum = (a, b) => {
     // ...
     return a + b;
   }
   
   // 没有参数
   let sayHi = () => alert("Hello");
   
   // 有一个参数
   let double = n => n * 2;
   ```

- 函数可能具有局部变量：在函数内部声明的变量。这类变量只在函数内部可见。
- 参数可以有默认值：`function sum(a = 1, b = 2) {...}`。
- 函数总是返回一些东西。如果没有 `return` 语句，那么返回的结果是 `undefined`。