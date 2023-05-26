import axios from "../axios-1.x/lib/axios.js"

const get1 = () => {
  axios.post('dsa', { a: 1, b: 2 }).then((res) => {
    console.log(res)

  }, (err) => {
    console.log(err, 'err')

  })
}
      // axios.interceptors.request.use(function one(config) {
      //   // console.log('请求1')
      //   return config
      // }, function one(err) {
      //   return err
      // })
const get = () => {
  const CancelToken = axios.CancelToken;
  const source = CancelToken.source();

  axios.get('/user', {
    cancelToken: source.token
  }).catch(function (thrown) {
    if (axios.isCancel(thrown)) {
      console.log('Request canceled', thrown.message);

    } else {
      // handle error
    }
  });
}




const btn = document.getElementById('btn')
btn.addEventListener('click', get, false)