//문제 요구사항 정의
// 좌표값에 따라 1,2,3,4 사분면으로 구분하여 출력한다.
// fs모듈 대신 readline모듈 사용
// fs모듈은 '런타임 에러' 발생

//fs모듈로 성공한 방법
const fs = require("fs");

const [x, y] = fs.readFileSync(0).toString().trim().split("\n").map(Number);

if (x > 0) y > 0 ? console.log(1) : console.log(4);
if (x < 0) y > 0 ? console.log(2) : console.log(3);

//readline모듈
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(parseInt(line));
}).on("close", function () {
  const x = input[0];
  const y = input[1];

  if (x > 0) y > 0 ? console.log(1) : console.log(4);
  if (x < 0) y > 0 ? console.log(2) : console.log(3);

  process.exit();
});
