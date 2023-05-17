# 创建axiso实例instance
1. instance
```js 
function createInstance(defaultConfig) {
  const context = new Axios(defaultConfig);
  const instance = bind(Axios.prototype.request, context);
  // Copy axios.prototype to instance
  // 把Axios.prototype上的方法添加到instance上
  utils.extend(instance, Axios.prototype, context, {allOwnKeys: true});
  // Copy context to instance
   // 把实例上的属性添加到instance上
  utils.extend(instance, context, null, {allOwnKeys: true});
  // Factory for creating new instances
  // 添加create方法
  instance.create = function create(instanceConfig) {
    // 合并新的选项
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };
  return instance;
}
// 经过上述步骤会产生一个wrap函数，该函数上有Axios.prototype的方法以及，Axios的config配置
```
2. extend核心方法
```js
// 合并a的属性到a上
const extend = (a, b, thisArg, {allOwnKeys}= {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      // 方法属性
      a[key] = bind(val, thisArg);
    } else {
      // 其它属性
      a[key] = val;
    }
  }, {allOwnKeys});
  return a;
}
```




# axios核心类

1. axios类
```js
// Axios类
class Axios {
  // 实例属性
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
  // 原型上方法
  request () {

  }
  getUri () {

  }
}
// 在原型上添加请求方法
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
   
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url,
        data
      }));
    };
  }

  Axios.prototype[method] = generateHTTPMethod();

  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});
```
2. forEach方法
```js
function forEach(obj, fn, {allOwnKeys = false} = {}) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  let i;
  let l;

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // 数组
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // 对象
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;

    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}

```