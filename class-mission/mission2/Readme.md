# 第二週 － Node.js NPM 整合 MongoDB 作業
- 題目：設計一個 /posts 路由，設計與 todolist API 練習 一樣的設計，並將欄位調整擴充為一則貼文會有的欄位，可觀看第二週直播錄影做為參考。
- 加分條件：請觀看此範例，拉到 Model 資料夾來設計

## MVC 架構
按照 MVC 架構，一般的 Node.js Express 專案通常會包含以下目錄：

- models: 存放資料庫的 schema 和資料庫操作的程式碼。
- views: 存放前端介面的檔案，例如 HTML、CSS、JavaScript 等。
- controllers: 存放處理資料和邏輯的程式碼，將 HTTP 請求傳遞到對應的模型（model）並返回處理結果。
- routes: 存放處理不同 HTTP 請求的路由程式碼，將路由請求映射到對應的控制器（controller）。
- public: 存放靜態檔案，例如圖片、CSS、JavaScript 等，可直接由瀏覽器訪問。
- config: 存放專案的配置設定檔，例如資料庫配置、環境變數等。