import xhrAdapter from "../adapter/xhr.js"

function dispatchRequest(config) {
 
  let res = xhrAdapter(config).then(res => {
    return res
  }, err => {
    throw new Error(err)
  })

  console.log(res)
return res
};


export default dispatchRequest