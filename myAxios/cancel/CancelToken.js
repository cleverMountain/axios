class CancelToken {
  constructor(executor) {
    // 执行器必须为函数
    if (typeof executor !== 'function') {
      throw new TypeError('executor must be a function.');
    }
    let resolvePromise;
    this.promise = new Promise(resolve => {
      /**
       * 把resolve赋值给resolvePromise,当resolvePromise执行时，则执行
       * 成功的回调resolve
       * this.promise.then(res => console.log(res)) res = 111
       * resolvePromise(111)
       */
      resolvePromise = resolve
    });
    // resolvePromise()
    /**
     * 
     * function executor(c) { cancel = c}
     * 传进来的函数，执行executor()
     */
    /**
     * c = function cancel() { resolvePromise() })
     * cancel = c -> cancel()  -> resolvePromise() -> this.promise.then执行
     */
    executor(function cancel() {
 
      resolvePromise()
    })
  }
}



export default CancelToken