


// 对象的每个方法执行obj
function forEach(obj, fn, {allOwnKeys = false} = {}) {
  if (obj === null || typeof obj === 'undefined') {
    return;
  }
  let i;
  let l;
  if (typeof obj !== 'object') {
    obj = [obj];
  }
  // 处理数组
  if (isArray(obj)) {
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // 处理对象  是否获取原型上的实例
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}


// 在a中扩展属性b
function extend (a, b, thisArg, {allOwnKeys}= {}) {
  forEach(b, (val, key) => {
 
    if (thisArg && isFunction(val)) {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  }, {allOwnKeys});
  return a;
}

function bind (fn, thisArg)  {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}


function isFunction (type)  { 
  return typeOfTest(type, 'function');
}
function isArray (type) {
  return typeOfTest(type, 'Array');
}

function typeOfTest (type, thing) {
  return typeof thing === type
}

const utils = {
  forEach,
  extend,
  bind,
  isFunction,
  typeOfTest
}

console.log(utils)

// utils.forEach({a: 1, b: 2}, (a, b, c) => {
//   console.log(a, b, c)
// })

// function P () {
//   this.c = 1
//   this.length = 1
// }
// P.prototype.aa = function () {

// }

// let obj = new P()

// console.log(Object.keys(obj))

function aaa () {}
let bbb = {
  a: 1,
  b: 2,
  c: function () {

  }
}
let ccc = {
  d: 3
}
extend(aaa, bbb)
extend(aaa, ccc)
console.dir(aaa)
debugger