const express = require('express');
const app = express();
function delayResponse(req, res, next) {
    const delayTime = 2000; // 延迟时间，以毫秒为单位（这里是2秒）
    setTimeout(next, delayTime);
}
// 使用延迟中间件
app.use(delayResponse);
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});
app.get('/user', (req, res) => {
    res.send('Hello world');
});
app.listen(8089, () => {
    console.log('Server is running at http://127.0.0.1:8089')
})

