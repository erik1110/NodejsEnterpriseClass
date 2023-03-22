interface MyData {
    name: string;
    score: number;
  }

// 批改作業
function correctTest(name: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const score: number = Math.round(Math.random()*100);
        if(score >= 20) {
          resolve({
            name,
            score
          })
        } else {
          reject("您已達退學門檻")
        }
      }, 2000)
    })
  }
  // 檢查獎勵
  function checkReward(data: MyData) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(data.score >= 90) {
          resolve(`${data.name} 獲得電影票`);
        } else if (data.score >= 60 && data.score < 90) {
          resolve(`${data.name} 獲得嘉獎`);
        } else {
          reject(`您沒有獎品`)
        }
      }, 2000)
    })
  }
  
  // 執行函式
  /* 在此填寫答案*/
  correctTest("小明")
    .then(data => checkReward(data as MyData))
    .then(name => console.log(name))
    .catch(error => console.log(error))