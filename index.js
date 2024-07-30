// 1-masala
// function sqrtNumber(num){
//     return Math.sqrt(num)
// }
// let res = sqrtNumber(9)
// console.log(res);

// 2-masala
// function number(num1, num2){
//     return num1 - num2
// }
// let res = number(12, 5)
// console.log(res);

// 3-masala
// function stringReturn(str, num){
//     let res = ''
//     for(let i = 1; i <= num; i++){
//         natija += str
//     }
//     return natija
// }
// let res = stringReturn('salom ', 3)
// console.log(res);

// 4-masala
// function kubNumber(num){
//     return num  3;
// }
// let res = kubNumber(3)
// console.log(res);

// 5-masala
// function number(num1, num2){
//     return Math.floor(num1 / num2);
// }
// let res =number(8, 3)
// console.log(res);

// 6-masala
// function Year(yil){
//     if(yil % 100 == 0){
//         return yil / 100
//     } else{
//         return Math.floor(yil / 100) + 1;
//     }
// }
// let res = Year(1951)
// console.log(res);

// 7-masala
// function Foktorial(num){
//     if(num == 0 || num == 1){
//         return 1;
//     }else{
//         return num * findFoktorial(num - 1)
//     }
// }
// let res = findFoktorial(5)
// console.log(res);
// 9-masala
// function num(str, num){
//     let result = '';
//     for(let i = str.length - num; i < str.length; i++){
//         result += str[i]
//     }
//     return result;
// }
// let res = num('hello world', 5)
// console.log(res);
// 11-masala
// function find(num, daraja){
//     let sum = 1
//     for(let i = 0; i < daraja; i++){
//         sum *= num
//     }
//     return sum;
// }
// let res = find(4, 3)
// console.log(res);

// 12-masala
// function deletprobel(str){
//     let sum =''
//     for(let i = 0; i < str.length; i++){
//         if(str[i] !== ' '){
//             sum += str[i]
//         }
//     }
//     return sum;
// }
// let res = deletprobel('   Hayrli tong ')
// console.log(res);

// 13-masala
// function str(str1, str2){
//     let sum = ''
//     for(let i = 0; i < str1.length; i++){
//         sum += str1[i]
//     }
//     for(let i = 0; i < str2.length; i++){
//         sum += str2[i]
//     }
//     return sum
// }
// let res = addTwoStr('salom', 'dunyo!')
// console.log(res);

// 14-masala
// let res = boshHarfKattaQil('salom')
// console.log(res);

// 1-masala
// function sum(arr){
//     let sum = 0
//     for (const iterator of arr) {
//         sum += iterator
//     }
//     return sum;
// }
// let res = sum([1, 2, 5, 4, 8])
// console.log(res);

// 2-masala
// function max(arr){
//     let max = arr[0]
//     for (const iterator of arr) {
//         if(max < iterator){
//             max = iterator
//         }
//     }
//     return max;
// }
// let res = max([2, 5, 7, 10])
// console.log(res);

// 3-masala
// function reversearr(arr){
//     let result = [];
//     for(let i = arr.length - 1; i > 0; i--){
//         result.unshift(arr[i])
//     }
// }
// let res = reversearr([1, 2, 3, 4, 5])
// console.log(res);

// 4-masala
// function number(arr){
//     let result = [];
//     for (const iterator of arr) {
//         if(iterator > 0){
//             result.push(iterator)
//         }
//     }
//     return result
// }
// let res = nUmber([1, -4, 9, -8, 5, 7, -6])
// console.log(res)
// 5-masala
// function Arr(arr){
//     let result = []
//     for (const iterator of arr) {
//         result.push(iterator  2)
//     }
//     return res;
// }
// let res = Arr([2, 4, 5, 7, 3])
// console.log(res);
// 6-masala
// function greet(arr) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     let not repet = true;
//     for (let j = 0; j < res.length; j++) {
//       if (arr[i] === res[j]) {
//         not repet = false;
//         break;
//       }
//     }
//     if (not repet) {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// }
// let res = greet([1, 1, 2, 5, 4, 4, 8, 7, 7]);
// console.log(res);

// 7-masala
// function greet(arr1, arr2){
//     return arr1.concat(arr2)
// }
// let res = greet([12, 13, 14], [15, 16])
// console.log(res);

// 8-masala
// function (arr){
//     let sum = 0;
//     for (const iterator of arr) {
//         if(iterator % 2 == 1){
//             sum ++
//         }
//     }
//     return sum;
// }
// let res = sumArr([1, 2, 3, 5, 8, 9, 6])
// console.log(res);

// 9-masala
// function number(arr, num){
//     let res = [];
//     for (const iterator of arr) {
//         res.push(iterator + num)
//     }
//     return result
// }
// let res = number[12, 2, 22, 32, 42]
// console.log(res);
// 10-masala
// function minNumberArr(arr){
//     let min = arr[0];
//     for (const iterator of arr) {
//         if(min > iterator){
//             min = iterator
//         }       
//     }
//     return min;
// }
// let res = minNumberArr([11, 4, 87, 52, 10])
// console.log(res);
