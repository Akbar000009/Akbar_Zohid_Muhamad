// 2-masala

// function checkTwoArr(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     let mavjud = false;
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         mavjud = true;
//         break;
//       }
//     }
//     if (!mavjud) {
//       return false;
//     }
//   }
//   return true;
// }


// console.log(checkTwoArr([1, 2, 3, 4], [0, 6])); 
// console.log(checkTwoArr([3, 1], [4, 0]));       
// console.log(checkTwoArr([9, 9, 8], [8, 9]));    
// console.log(checkTwoArr([1, 2, 3, 4], [2, 3])); 

// 4-masala

// function Masala(num) {
//   let a = parseInt(num / 2);
//   let b = num - a;
//   let res = [];
//   res[0] = a;
//   res[1] = b;
//   return res;
// }


// console.log(Masala(4));   
// console.log(Masala(10));  
// console.log(Masala(11));  
// console.log(Masala(-9));  

// 5-masala

// class Masala {
//     constructor(words) {
//         this.words = words;
//     }

//     get() {
//         for (let i = 0; i < this.words.length - 1; i++) {
//             for (let j = i + 1; j < this.words.length; j++) {
//                 if (this.words[i].length > this.words[j].length) {
//                     let temp = this.words[i];
//                     this.words[i] = this.words[j];
//                     this.words[j] = temp;
//                 }
//             }
//         }
//         return this.words;
//     }
// }

// console.log(new Masala(["a", "ccc", "dddd", "bb"]).get()); 

// console.log(new Masala(["apple", "pie", "shortcake"]).get());

// 6-masala

// class Masala {
//     constructor(arr) {
//         this.arr = arr;
//     }

//     get() {
//         let ikkigakopaytirish = [];
//         for (let i = 0; i < this.arr.length; i++) {
//             let sum = this.arr[i] * 2;
//             if (sum % 2 === 0) {
//                 ikkigakopaytirish.push(sum);
//             }
//         }

//         for (let i = 0; i < ikkigakopaytirish.length - 1; i++) {
//             for (let j = i + 1; j < ikkigakopaytirish.length; j++) {
//                 if (ikkigakopaytirish[i] > ikkigakopaytirish[j]) {
//                     let sum2 = ikkigakopaytirish[i];
//                     ikkigakopaytirish[i] = ikkigakopaytirish[j];
//                     ikkigakopaytirish[j] = sum2;
//                 }
//             }
//         }
//         return ikkigakopaytirish;
//     }
// }

// console.log(new Masala([1, 2, 3, 4, 5]).get());

// 7-masala

// class Masala {
//     constructor(arr) {
//         this.arr = arr;
//     }

//     get() {
//         let result = [];
//         for (let i = 0; i < this.arr.length; i++) {
//             let sum = this.arr[i] * 2;
//             if (sum % 2 === 0) {
//                 result.push(sum * sum); 
//             }
//         }
//         return result;
//     }
// }

// console.log(new Masala([1, 2, 3, 4, 5]).get()); 

// 8-masala

// class Masala {
//     constructor(matrix) {
//         this.matrix = matrix;
//     }

//     get() {
//         let Matrix = [];
//         for (let i = this.matrix.length - 1; i >= 0; i--) {
//             let sum = [];
//             for (let j = this.matrix[i].length - 1; j >= 0; j--) {
//                 sum.push(this.matrix[i][j]);
//             }
//             Matrix.push(sum);
//         }
//         return Matrix;
//     }
// }

// console.log(new Masala([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]).get());

// 9-masala

// class Masala {
//     constructor(start, end) {
//         this.start = start;
//         this.end = end;
//         this.names = ["zero","one","two","three","four","five","six","seven","eight","nine","ten"];
//     }

//     get() {
//         let arr = [];
//         for (let i = this.start; i <= this.end; i++) {
//             arr.push(this.names[i]);
//         }
      
//         let reversed = [];
//         for (let i = arr.length - 1; i >= 0; i--) {
//             reversed.push(arr[i]);
//         }
//         return reversed;
//     }
// }

// console.log(new Masala(1, 5).get());

// 10-masala

// class Masala {
//     constructor(n) {
//         this.n = n;
//     }

//     get() {
//         let arr = [];
//         let sum = [];
//         for (let i = 1; i <= this.n; i++) {
//             sum.push(i);
//             if (sum.length === 3 || i === this.n) {
//                 arr.push(sum);
//                 sum = [];
//             }
//         }
//         return arr;
//     }
// }

// console.log(new Masala(10).get());





