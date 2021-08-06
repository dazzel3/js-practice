// function work() {
//   const start = Date.now();
//   for (let i=0; i<100000000; i++){

//   }
//   const end = Date.now();
//   console.log(end-start+'ms');
// }



// 비동기 처리
function work(callback) {
  setTimeout(() => {
    const start = Date.now();
    for (let i=0; i<100000000; i++){

    }
    const end = Date.now();
    console.log(end-start+'ms');
    callback(end - start)
  }, 0)
}

console.log('작업 시작');
work((ms) => {
  console.log(ms+'ms 걸렸습니다.');
});
console.log('다음 작업');