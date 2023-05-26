const express = require('express');
const app= express();

app.get('/user', (req, res)=>{
    res.send('Hello world');
});
app.listen(8089, ()=>{
    console.log('Server is running at http://127.0.0.1:8089')
})

