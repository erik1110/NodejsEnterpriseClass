interface Person {
    name: string;
    age?: number;
}

let tom: Person = {
    name: 'Tom'
}

// 定義一個可能是數字或字串的變數
let myVar: number | string  | boolean;
myVar = "hello"; // 正確
myVar = 123; // 正確
myVar = true; // 錯誤

// 印出 ID
function printID(id: number | string): void {
    console.log("ID is: ", id);
  }

let numbers = [5, 2, 8, 1, 9] // 一個數字陣列
numbers.push(33);
console.log(`排序後的陣列：${numbers}`)

function add(a: number, b: number) {
    return a + b;
  }
  
add(1, 2);