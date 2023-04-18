## 本堂作業

將第四堂期中考作業加上更嚴謹的錯誤狀態：

1. 請設計一個 middleware，讓 controller 程式碼裡面沒有 try catch
2. 請透過環境變數執行指令加上 dev、production 的客製化回饋
3. 承第二點，請觀看此張[圖](https://whimsical.com/NJzhqQpRX1YcogzPz6ro5e)，確保你的後端語言有客製化各種錯誤狀態，包含 NPM 的錯誤訊息客製化
4. 請透過 node.js uncaughtException、unhandledRejection 來捕捉預期外的錯誤
- uncaughtException
- unhandledRejection
在 app.js 加上即可觸發此 Error
```
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('Promise rejected!'));
  }, 1000);
});

promise.then(() => {
  console.log('Promise resolved!');
});
```