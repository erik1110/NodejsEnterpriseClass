## 本堂作業

- 將第二堂程式碼改寫為 express 格式
- routes： 將網址路徑管理拆到 routes 資料夾的 posts.js
- model：將 post collections 拆到 model 資料夾，並載入到 routes/posts.js 上

#### **部署 render 提示**

1. 當使用 express 產生器時，package.json 上的 script:start 會自動執行 www/bin
2. 記得要下 Git 忽略，避免部署時檔案太大會無法部署
3. 記得要在 render、fly.io 加上環境變數 (ex. 雲端 mongoDB)