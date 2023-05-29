import xhrAdapter from "../../adapter/xhr.js"

function dispatchRequest(config) {
  return xhrAdapter(config)
};


export default dispatchRequest