---
title: JavaScript中的Promise常用API
summary: JavaScript中Promise的出现主要是为了解决回调地狱的问题，本文主要介绍几个常用的Promise API
---

## 什么是Promise

`Promise`是JavaScript中提出的一种异步解决方案

```js
new Promise((resolve, reject) => {
    resolve()
}).then()
```

## 实现Promise.all()

`Promise.all()`是定义在`Promise`原型链上的方法

- 接收参数：`promises(由promise对象组成的数组)`
- 返回条件：promise数组中全部成功或有一个失败

具体实现如下

```javascript
Promise._all = function(promises){
    return new Promise((resolve, reject) => {
        if(typeof promises[Symbol.iterator] !== 'function'){
            reject('promises is not iteratable');
        }
        let len = promises.length;
        if(len === 0){
            resolve([]);
        }
        let count = 0;
        let res = [];
        for(let i = 0; i < len; i++){
            Promise.resolve(promises[i]).then((data) => {
                res[i] = data;
                count++;
                if(count === len){
                    resolve(res);
                }
            }, (err) => {
                reject(err);
            })
        }
    })
}
```

