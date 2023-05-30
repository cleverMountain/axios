import xhrAdapter from "../../adapter/xhr.js"

function dispatchRequest(config) {
  let res = xhrAdapter(config).then(res => {
    return res
  }, err => {
    throw new Error(err)
  })
  // console.log(a)
  // a.then(res => {
  //   console.log(res)
  //   return res
  // })
  // console.log(a)
  // return a.then(res => {

  //   return res

  // })
  console.log(res)
return res
};


export default dispatchRequest