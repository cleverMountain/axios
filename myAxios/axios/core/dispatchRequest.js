import xhrAdapter from "../../adapter/xhr.js"

function dispatchRequest(config) {
  let a = xhrAdapter(config)
  // console.log(a)
  // a.then(res => {
  //   console.log(res)
  //   return res
  // })
  console.log(a)
  return a.then(res => {

    return res
  })

};


export default dispatchRequest