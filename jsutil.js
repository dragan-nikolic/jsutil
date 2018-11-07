// sleep as Promise
//
// Usage with async-await:
// await sleep(2000);
//
// Usage with promise:
// (todo)
exports.sleep = function (milliseconds) {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
  
// return timestamp as number of milliseconds since 1970/01/01 
exports.timestamp = function () {
  const d = new Date()
  return d.getTime()
}
