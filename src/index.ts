import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'

const app: Koa = new Koa()

app.use(bodyParser())

app.listen(3000)
console.log('app is listen at prot 3000')
