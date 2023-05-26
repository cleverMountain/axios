import utils from '../utils.js';
import httpAdapter from './http.js';
import xhrAdapter from './xhr.js';
import AxiosError from "../core/AxiosError.js";

// 将http方法与xhr方法放入knownAdapters对象，可能为null
const knownAdapters = {
  http: httpAdapter,
  xhr: xhrAdapter
}
// console.log(httpAdapter)
// debugger
utils.forEach(knownAdapters, (fn, value) => {
  if(fn) {
    try {
      Object.defineProperty(fn, 'name', {value});
    } catch (e) {
      // eslint-disable-next-line no-empty
    }
    Object.defineProperty(fn, 'adapterName', {value});
  }
});

export default {
  getAdapter: (adapters) => {
    // 将adapters转化成数组
    adapters = utils.isArray(adapters) ? adapters : [adapters];

    const {length} = adapters;
    let nameOrAdapter;
    let adapter;
    // 
    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      console.log(utils.isString(nameOrAdapter))
      // 遍历数组得到knownAdapters[nameOrAdapter.toLowerCase()]这是一个xhr()方法
      if((adapter = utils.isString(nameOrAdapter) ? knownAdapters[nameOrAdapter.toLowerCase()] : nameOrAdapter)) {
        console.log(adapter)
       
        break;
      }
    }

    if (!adapter) {
      if (adapter === false) {
        throw new AxiosError(
          `Adapter ${nameOrAdapter} is not supported by the environment`,
          'ERR_NOT_SUPPORT'
        );
      }

      throw new Error(
        utils.hasOwnProp(knownAdapters, nameOrAdapter) ?
          `Adapter '${nameOrAdapter}' is not available in the build` :
          `Unknown adapter '${nameOrAdapter}'`
      );
    }

    if (!utils.isFunction(adapter)) {
      throw new TypeError('adapter is not a function');
    }
    // 返回
    return adapter;
  },
  adapters: knownAdapters
}
