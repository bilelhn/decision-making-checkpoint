
// -----------Decision Making -------------------

// function leapYearChecker(year) {
//     if (year % 4 === 0) {
//         if (year % 100 !== 0 || year % 400 === 0) {
//             return `${year} is a Leap Year`; 
//         }
//     }
//     return `${year} is not a Leap Year`; 
// }
// console.log(leapYearChecker(2020));
// console.log(leapYearChecker(2021));

// function ticketPricing(age) {
//     let price;
//     switch (true) {
//         case age <= 12:
//             price = "$10";
//             break;
//         case age >= 13 && age <= 17:
//             price = "$15";
//             break;
//         case age >= 18 && age <= 64:
//             price = "$20";
//             break;
//         default:
//             price = "$12";
//             break;
//     }
//     return price;
// }

// console.log(ticketPricing(16)); 

// function palindromeChker(str) {
    
//     str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
//    let result=str.split('').reverse().join('');
//    if(result===str){
//     return `${str} is a palindrome`;
//    }else  return `${str} is not a palindrome`;
// }
// console.log(palindromeChker('ala;'));  
// console.log(palindromeChker('ala:e'));  
// console.log(palindromeChker('bilel'));  
// console.log(palindromeChker('bilelib'));  



