// xml 类型入参处理中间件

import { Context } from 'koa'
import * as compose from 'koa-compose'
import * as X2JS from 'x2js'

const handleXmlContext = async (ctx: Context, next: () => void) => {
  const contentType = ctx.request.header['content-type']
  const getPostData = (ctx) => {
    return new Promise((resolve, reject) => {
      if (contentType === 'text/xml' || contentType === 'application/xml') {
        let data = ''
        const x2js = new X2JS()
        ctx.req.on('data', chunk => data += chunk);
        ctx.req.on('end', () => resolve(x2js.xml2js(data)));
      } else {
        resolve(ctx.request.body)
      }
    })
  }
  ctx.request.body = await getPostData(ctx);
  await next()
}

export const XmlRequest = () => compose([handleXmlContext])