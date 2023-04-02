import { ServerResponse } from "http"

const HEADERS = {
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'PATCH, POST, GET, OPTIONS, DELETE',
    'Content-Type': 'application/json'
  }

export const successHandler = (res: ServerResponse, data: Object | [Object] = []) => {
  res.writeHead(200, HEADERS)
  res.write(JSON.stringify({
    status: 'Success',
    data
  }))
  res.end()
}