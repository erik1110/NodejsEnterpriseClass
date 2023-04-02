import { PostController } from '../controllers/Post'
import { IncomingMessage, ServerResponse } from 'http'
import { errorHandler } from '../services/errorHandler'

const HEADERS = {
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'PATCH, POST, GET, OPTIONS, DELETE',
    'Content-Type': 'application/json'
  }

export const requestListener = (req: IncomingMessage, res: ServerResponse) => {
  const { url, method } = req
  let body = ''

  req.on('data', (chunk: string) => {
    body += chunk
  })

  req.on('end', async () => {
    if(url?.includes('/posts')) {  
      switch (method) {
        case 'GET':
          PostController.getAll(res)
          break
        case 'POST':
          PostController.create(res, body)
          break
        case 'PATCH':
          PostController.update(res, body)
          break
        case 'DELETE':
          if (url === '/posts') {
            // 刪除全部
            PostController.deleteAll(res)
          } else {
            // 刪除單筆
            const _id = req.url?.split('/').pop() || ''
            PostController.deleteById(res, _id)
          }
          break
        case 'OPTIONS':
          res.writeHead(200, HEADERS)
          res.end()
          break
      }
    } else {
        errorHandler(res, '錯誤路由')
    }
  })
}