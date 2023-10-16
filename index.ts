// 1: Substring:
let longText: string = "This is a long sentence.";
let shortText: string = longText.substring(9,14);
console.log(shortText);

// 2: String Comparison:
let str1: string = "Hello";
let str2: string = "World";
let areEqual: boolean = str1 === str2;
console.log(areEqual);

// 3: String Template:
let product: string = "Phone";
let price: number = 500;
let message: string = (`The product ${product} is priced at ${price} dollars.`);
console.log(message);