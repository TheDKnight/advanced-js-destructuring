/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30,26,27];
let [john,mary,joe] = ages;
console.log(john,mary,joe)

// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "devolper",
    alica: "accountant" ,
}
let {mike,jill,alica} = jobs;
console.log(mike,jill,alica)


// Destructuring subsets
let languages = ["english","french","spanish","german","japanese"];
let [johnNative,johnSecondary] = languages;
console.log(johnNative,johnSecondary) ;

let [,, maryNative,marySecondary] = languages;
console.log(maryNative,marySecondary);


let languages2 = {

    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "spanish",
    fourthLanguage: "german",
};

let {firstLanguage,thirdLanguage} = languages2;

console.log(firstLanguage,thirdLanguage)

// Using rest parameter syntax
let fruits = ["apple","orange","bananna","peach","cherry"];
let [favorite,secondFavorite, ...others] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(others)

let favoriteFoods = {

    brian: "pizza",
    anna: "pasta",
    sarah: "vegeration",
    andrea: "steak",
};

let {brian,anna, ...rest} = favoriteFoods;

console.log(brian)
console.log(anna)
console.log(rest)