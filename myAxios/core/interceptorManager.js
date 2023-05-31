function InterceptorManager() {
  this.handlers = []
}
InterceptorManager.prototype.use = function (fulfilled, rejected) {
  this.handlers.push({
    fulfilled,
    rejected
  });
  return this.handlers.length - 1;
}
export default InterceptorManager