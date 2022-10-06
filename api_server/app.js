// 导入 express 模块
const express = require('express')
const app = express()

// 导入 cors 中间件
const cors = require('cors')
app.use(cors())

//配置解析 application/x-www-form-urlencoded 格式的表单数据的中间件
app.use( express.urlencoded({ extended: false }))

// 导入并注册用户路由模块
const userRouter = require('./router/user')
app.use('/api', userRouter)

app.listen(3007, function () {
  console.log('api server running at http://127.0.0.1:3007')
})