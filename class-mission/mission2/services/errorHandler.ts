import { ServerResponse } from 'http'

const HEADERS = {
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'PATCH, POST, GET, OPTIONS, DELETE',
    'Content-Type': 'application/json'
  }

export const errorHandler = (res: ServerResponse, e?: any) => {
  res.writeHead(404, HEADERS)
  res.write(JSON.stringify({
    status: 'Failed',
    message: e?.message || e
  }))
  res.end()
}