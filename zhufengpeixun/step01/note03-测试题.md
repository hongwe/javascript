## 测试题

```javascript

let a = { n: 1 };
let b = a;
a.x = a = { n: 2 };

console.log(a.x); //=> undefined
console.log(b); //=> { n: 1,x:{n:2} }

```

```javascript

let a = { n: 1 };
let b = a;
a.x = b;

console.log(a.x); 
console.log(b); 
//嵌套了无限
```

