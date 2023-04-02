import { requestListener } from './routes/Post'

const http = require('http');
const mongoose = require('mongoose');

mongoose
    .connect("mongodb://127.0.0.1:27017/testPost")
    .then(() => console.log('資料庫連接成功'));

const server = http.createServer(requestListener);
server.listen(3000);