// js 高级函数的使用
// 1. filter
// 2 . map
// 3. reduce
nums =[1 ,20 ,10, 30 , 40, 100, 200, 140]
// 1 . 把数组中小于 100 的数过滤出来 2. 把这些数乘二 3. 全加起来 
// let total = nums.filter(function(n){
//     return n<100
// }).map(function(n){
//     return n*2
// }).reduce(function(prevalue , n){
//     return prevalue + n;
// },0)
let total = nums.filter(n => n<100).map(n => n * 2).reduce((pre,n) => n + pre );
console.log(total)