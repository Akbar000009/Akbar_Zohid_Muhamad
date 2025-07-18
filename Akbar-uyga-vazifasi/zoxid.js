// // 1 - misol 

// function classicSum(arr) {

//     let musbatlar = []
//     let juftlar = []
//     let kvadratlar = []
//     let result = 0
    
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             musbatlar.push(arr[i])
//         }
        
//     }

//     for (let s = 0; s < arr.length; s++) {
//         if (musbatlar[s] % 2 == 0) {
//             juftlar.push(musbatlar[s])
//         }
        
//     }

//     for (const item of juftlar) {
//         kvadratlar.push(item * item)
//     }

//     for (const element of kvadratlar) {
//         result += element
//     }






//     return result 
// }

// console.log(classicSum([3, -2, 4, -1, 6, 7]));



// // 2 - misol

// function checkTwoArr(arr1,arr2) {
//     let result = true 

//     for (let i = 0; i < arr1.length; i++) {

//         for (let s = 0; s < arr1.length; s++) {
//             if (arr2[i] === arr1[s]) {
//                 result = false
//             }
            
//         }
//     }
//     return result
// }

// console.log(checkTwoArr([1, 2, 3, 4], [0, 6]))
// console.log(checkTwoArr([3, 1], [4, 0]))
// console.log(checkTwoArr([9, 9, 8], [8, 9]))
// console.log(checkTwoArr([1, 2, 3, 4], [2, 3]))


// // 3 - misol

// function superSortArrat(arr1,arr2,word) {
//     let concated = arr1.concat(arr2)
//     let concatedSorted = concated.sort((a,b) => (a - b))
//     let reversed = []
//     let wordsOfArrLength = []

//     for (let rev = concatedSorted.length - 1; rev > -1; rev--) {
//         reversed.push(concatedSorted[rev])
        
//     }

//     for (let i= 0; i< concated.length; i++) {
//         wordsOfArrLength.push(word)
        
//     }


//     return [concatedSorted,reversed,wordsOfArrLength]
// }


// console.log(superSortArrat([1, 10], [2, 3, 4], 'nodejs'));



// 4 - misol

// function numberSplit(number) {
//     let result = []
//     let bolish = number / 2;

//     if (number % 2 === 0) {

//         result.push(bolish, bolish)

//     } else {
        
//         result.push(Math.floor(bolish), Math.ceil(bolish))
//     }


//     return result
// }


// console.log(numberSplit(4));
// console.log(numberSplit(10));
// console.log(numberSplit(11));
// console.log(numberSplit(-9));


// // 5 - misol

// function sortByLength(arr) {
//     let result = arr.sort((a,b) => (a.length - b.length))
    
    
//     return result 
// }


// console.log(sortByLength(["a", "ccc", "dddd", "bb"]));
// console.log(sortByLength(["apple", "pie", "shortcake"]));



// // 6 - misol

// function setToJuft(arr) {
//     let result = []

//     for (const item of arr) {
//         result.push(item * 2)


//     }



//     return result.sort((a,b) => (a-b))
// }

// console.log(setToJuft([3, 1, 4, 5]));

// // 7 - misol

// function superJuft(arr) {
//     let result = []
//     for (const item of arr) {
//         let x2 = item  * 2
//         if (x2 % 2 == 0) {
//             result.push(x2 * x2)
//         }

//     }


//     let sortedres = result.sort((a,b) => (a-b))
//     return sortedres
// }

// console.log(superJuft([3, 6, 4, 5, 2]));


// // 8 - misol 

// function reverseImage(arr) {
//     let result = []
//     for (let i = arr.length - 1; i > -1; i--) {
//         result.push(arr[i].reverse())

        
//     }


//     return result

// }

// console.log(reverseImage([
// [1, 2, 3],
// [4, 5, 6],
// [7, 8, 9]
// ]));

// // 9 - misol

// function changeNumberToSTR(num1,num2) {
//     let result = []

//     let defaultAnswer = []

//     let numberWords = {
//     1: "one",
//     2: "two",
//     3: "three",
//     4: "four",
//     5: "five",
//     6: "six",
//     7: "seven",
//     8: "eight",
//     9: "nine",
//     10: "ten"
// }

// for (let i = num1; i <= num2; i++) {
    
//     defaultAnswer.push(numberWords[i])
    
// }


// result.push(defaultAnswer)
// result.push([...defaultAnswer].reverse())

// return result
// }

// console.log(changeNumberToSTR(1,5));


// // 10 - misol

// function addToArray(number) {
//     let numbers = []
//     let splitted = []

//     for (let i = 1; i <= number; i++) {
//         numbers.push(i)
//     }

//     for (let i = 0; i < numbers.length; i += 3) {
//         let cutting = numbers.slice(i, i + 3)

//         splitted.push(cutting)

//     }

//     return [numbers,splitted]
// }

// console.log(addToArray(10));

