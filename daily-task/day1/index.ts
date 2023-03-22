const checkScore = (score: number) => {
    /* 回傳一個 Promise，並執行以下非同步操作*/
    /* 判斷流程請嘗試使用 setTimeout() 執行 */
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(score >= 60) {
                resolve(score); // 執行實現方法
              } else {
                reject("不及格"); // 執行拒絕方法
              }
        }, 1000)
    })
}

checkScore(70)
    .then(data => console.log(data))
    .catch(error => console.log(error))