import Koa from 'koa'
import createToken from './utils/create-token'

const app = new Koa()

app.use(async (ctx) => {
    ctx.body = {token: createToken(128)}
})

app.listen(8081)
