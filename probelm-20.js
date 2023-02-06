// ১. একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। 
function multiplication(number){
    let myresult = 0;
    for(let i= 1; i <= 10; i++){
       let result = (i * number);
       console.log(result)
        myresult = result;
    }
    return myresult
    
}

const multiplicationNumber = multiplication(13);
console.log(multiplicationNumber);

// ২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা
//  রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।
function lowerCase(name){
    const toLowerCase = name.toLowerCase();
    return toLowerCase
}

const myRegulerCaseName = lowerCase("Amaro ProraNo JaHa chay");
console.log(myRegulerCaseName);

/* 
৩. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ
প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন 
করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে। 
*/

function fullName(fristName, lastName){
    const myFullName = fristName + " " + lastName;
    return myFullName;
}
const myNameIs = fullName("Sumona", "Akter");
console.log(myNameIs)

// ৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square 
// করে সেই square কে রিটার্ন করবে।

function square(number){
    const result = Math.pow(number, 2);
    return result
}
const mySquareNumber = square(5);
console.log(mySquareNumber);

/* 
৫) pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা :



const pizza = {

 toppings: ['cheese', 'sauce', 'pepperoni'],

 crust: 'deep dish',

 serves: 2

}

এবং pepperoni প্রিন্ট করবা।
*/
const pizza = {

    toppings: ['cheese', 'sauce', 'pepperoni'],
   
    crust: 'deep dish',
   
    serves: 2
   
   }
const myResult = pizza.toppings[2];
console.log(myResult);


const color = "red";
switch(color){
    case 'blue':
        console.log("You Should Stop");
        break;
    case 'green':
        console.log("You should cross the road");
        break;
    default: 
        console.log("you should try to cross the road"); 
}


// odd even function


function oddEvenNumber(number){
    
    // for(let i = 0; i <= number; i ++){
    //     const element = i;
    //     if(element % 2 === 0){
    //         console.log("even element:", element)
    //     }
    //     else{
    //         console.log("odd element:", element)
    //     }
    // }

    if(number % 2 === 0){
        return " even Number"
    }
    else{
        return "odd Number"
    }
}
const myNum = oddEvenNumber(20);
console.log(myNum)