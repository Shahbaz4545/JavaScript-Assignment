/************************* Chapter 21 to 25 **********************/
// Task 01.      
//Write a program that takes two user inputs for first and last name using prompt 
//and merge them in a new variable titled fullName. Greet the user using his full name.
/*
var firstName=prompt("Enter Your First Name: ");
var lastName=prompt("Enter Your Last Name: ");
var FullName=firstName +" "+ lastName;
document.write("Hy! "+FullName+" welcome to our website.");

// Task 02. 
//Write a program to take a user input about his favorite mobile phone model. 
//Find and display the length of user input in your browser

var phone=prompt("Enter Your Favorite Mobile Model: ");
document.write("My favorite Phone is: "+ phone+"<br>Length of string: "+ phone.length);

// Task 03.
//Write a program to find the index of letter “n” in the word “Pakistani” 
//and display the result in your browser.

var word="Pakistani";
for(var i=0; i<word.length; i++){
    if(word.charAt(i)==='n'){
        document.write("String: "+word+"<br>Index of 'n': "+i);
    }
}

// Task 04.
// Write a program to find the last index of letter “l” in the word “Hello World” 
//and display the result in your browser.

var word="hello world";
var str = word.charAt(word.length-2);
document.write("String: "+word+"<br>Last Index of "+str+" : "+word.lastIndexOf(str));

// Task 05.
//Write a program to find the character at 3rd index in the word “Pakistani” 
//and display the result in your browser.

var word="Pakistani";
var str=word.charAt(3);
document.write("String: "+word+"<br>Character at Index 3: "+str);

//Task 06.
//epeat Q1 using string concat() method.

var firstName=prompt("Enter Your First Name: ");
var lastName=prompt("Enter Your Last Name: ");
var con= firstName.concat(lastName);
document.write("Hy! "+con+" welcome to our website.");

// Task 07.
//Write a program to replace the “Hyder” to “Islam” in theword “Hyderabad” 
//and display the result in your browser.

var str="Hyderabad";
var rep=str.replace("Hyder","Islam");
document.write("City: "+str+"<br> After replacement: "+rep);

//Task 08.
//Write a program to replace all occurrences of “and” in the string with “&” and 
//display the result in your browser. 
//var message = “Ali and Sami are best friends. They play cricket and football together.”;

var msg="Ali and Sami are best friends. They play cricket and football together.";
var str=msg.replace(/and/g,"&");
document.write("Messeage: "+msg+"<br> After Replacement: "+str);

//Task 09.
//Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

var value="472";
var num= parseInt(472);
document.write("Value: "+value+"<br>Type: "+typeof(value)+"<br> Value: "+num+"<br> Type: "+typeof(num));

//Task 10.
// Write a program that takes user input. Convert and show the input in capital letters.
 var a=prompt("Enter a String: ");
 var capital=a.toUpperCase();
 document.write("User Input: "+a+"<br>Upper Case: "+capital);

//Task 11.
//Write a program that takes user input. Convert and show the input in title case.

var str=prompt("Enter a String");
var firstChar=str.slice(0,1);
var lastChar=str.slice(1);
var firstChar=firstChar.toUpperCase();
var lastChar=lastChar.toLowerCase();
var strTitle=firstChar+lastChar;
document.write("User Input: "+str+"<br>Title Case: "+strTitle);

//Task 12.
const num=35.36;
const str=num.toString().replace(".", "");
document.write("Number: "+num+"<br>Result: "+str);

// Task 13.
//Write a program to take user input and store username in a variable. If the username contains 
//any special symbol among [@ . , !], prompt the user to enter a valid username.
//For character codes of [@ .


var userName=prompt("Enter User name: ");
// for(var i=0; i<userName.length; i++){
//     if(userName.charAt(i)==="@"|| userName.charAt(i)==="." || userName.charAt(i)==="," || userName.charAt(i)==="!"){
//        alert("Please Enter a Valid User Name: ");
//         break;
//     }
// }

// var char = String.fromCharCode(64)
// OR Using ASCII Code

// for(var i=0; i<userName.length; i++){
//     if(userName.charCodeAt(i)===(33) || userName.charCodeAt(i)===(44) || userName.charCodeAt(i)===(46) || userName.charCodeAt(i)===(64) ){
//        alert("Please Enter a Valid User Name: ");
//         break;
//     }
// }
//     alert("Name: "+userName);

// Task 14.
// You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]. Write a program 
// to enable “search by user input” in an array. After searching, prompt the user whether 
// the given item is found in the list or not. Note: Perform case insensitive search. Whether 
// the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. 

var array=["cake", "apple pie", "cookie", "chips", "patties"];
var arr=prompt("Welcome to ABC Bakery. What od you want to order sir/ma'am?");
var arr=arr.toLowerCase();

var incr=0;
for(var i=0; i<array.length; i++){

    if(array[i]===arr){
        incr=1;
        document.write(arr+" is <b>available</b> at index "+i+" in our bakery");
                      }
    }
    if(incr==0){
        document.write("We are sorry "+arr+" is <b>not available</b> in our bakery");
            }
            document.write("<br>" + "<br>");

// Task 15.

// Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements, prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.
 
var password = prompt("Enter your password")

var numbers = false;
var lowerCaseLetter = false;
var upperCaseLetter = false;
var length = true;
var firstChar = true;


for (x = 0; x <= password.length - 1; x++) {
    if (password.charCodeAt(x) >= 97 && password.charCodeAt(x) <= 122) {
        lowerCaseLetter = true;
    }
    if (password.charCodeAt(x) >= 48 && password.charCodeAt(x) <= 57) {
        numbers = true;
    }
    if (password.charCodeAt(x) >= 65 && password.charCodeAt(x) <= 90) {
        upperCaseLetter = true;
    }

}

if (password.length <= 6) {
    length = false;
}

for (i = 0; i <= 10; i++) {
    if (password.startsWith(i, 0)) {
        firstChar = false;
    }
}

if (numbers == false || upperCaseLetter == false || lowerCaseLetter == false || length == false || firstChar == false) {
    alert("you enter an invalid password")
    if (numbers == false || upperCaseLetter == false || lowerCaseLetter == false) {
        alert("password must contain a upeercase letter, a lower case letter and a number")
    }
    if (length == false) {
        alert("lenght of password must be maximum 6 characters")
    }
    if (firstChar == false) {
        alert("password can not start with a number")
    }
}
else {
    alert("password approved")
}

// Task 16.

// Write a program to convert the following string to an array using string split method.
// var university = “University of Karachi”; Display the elements of array in your browser.

var uni="University Of Karachi";
var array=uni.split("");
for(var i=0; i<uni.length; i++){
  document.write(array[i]+"<br>");
}

// Task 17.

// Write a program to display the last character of a user input.

var user=prompt("Enter a String:");
var lastChar=user.charAt(user.length-1);
document.write("User Input: "+user+"<br>Last Character of input: "+lastChar);

// Task 18.
//You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of
//occurrences of word “the” in given string.

var str="The quick brown fox jumps over the lazy dog";
str=str.toLowerCase();
var word="the";
var temp=str.split(" ");
var count=0;
for(var i=0; i<temp.length; i++){
  if(word===temp[i]){
    count++;
  }
}
document.write(str+"<br>There are "+count+" occurance(s) of word "+word);
*/
/************************* Chapter 26 to 30 **********************/

// Task 01.
/*
//Write a program that takes a positive integer from user & display the following in your browser.
// a. number b. round off value of the number
// c. floor value of the number d. ceil value of the number

var num=parseFloat(prompt("Enter a Positive Integar: "));
var round=Math.round(num);
var floor=Math.floor(num);
var ceil=Math.ceil(num);
document.write("Number: "+num+"<br>Round off Value: "+round+"<br>Floor Value: "+floor+"<br>Ceil Value:"+ceil);

// Task 02

//Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number b. round off value of the number
// c. floor value of the number d. ceil value of the number

var num=parseFloat(prompt("Enter a Negative Integar: "));
var round=Math.round(num);
var flor=Math.floor(num);
var ceil1=Math.ceil(num);
document.write("Number: "+num+"<br>Round off Value: "+round+"<br>Floor Value: "+flor+"<br>Ceil Value:"+ceil1);

// Task 03.

//Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5
 
var user=parseInt(prompt("Enter a number which gives you Absolute Value: "));
var num=Math.abs(user);
document.write("The Absolute Value of "+user+" is "+num);

// Task 04.
//Write a program that simulates a dice using random() method of JS Math class. 
// Display the value of dice in your browser.:

var num=(Math.random()*6 )+1;
var count=num.toFixed(0);
document.write("Randon dice Value: "+count);

// Task 05.
//Write a program that simulates a coin toss using random() method of JS Math class. 
// Display the value of coin in your browser

var toos=Math.random()*4;
var flor=Math.floor(toos);
if(flor===2){
  document.write(flor+"<br>Random coin value: Head");
}else
if(flor===1){
  document.write(flor+"<br>Random coin value: Tails");
}

// Task 06. 

//Write a program that shows a random number between 1 and 100 in your browser.

var num=Math.floor(Math.random()*100)+1;
num=num.toFixed(0);
document.write("Random number between 1 to 100: "+num);

//Task 07.

//Write a program that asks the user about his weight. Parse the user input and display his weight in your browser.

var weight=parseFloat(prompt("Enter your Wieght: "));
document.write("The weight of user is: "+weight+" kilograms");

// Task 08.

// Write a program that stores a random secret number from 1 to 10 in a variable. 
// Ask the user to input a number between 1 and 10. If the user input equals the secret
// number, congratulate the user

var num=parseFloat(prompt("Enter a number between 1 to 10: "));
var num1=Math.floor(Math.random()*10)+1;
var count=1;

if(num1 === num){
  document.write("Congratulation!");
}else if(num > num1)
{
  count++;
  document.write("Try again!");
}else if(num < num1)
{
  count++;
  document.write("Try again1!");
}
*/
/************************* Chapter 31 to 34 **********************/

// Task 01.
/*
//Write a program that displays current date and time in your browser
 var date=new Date();
 document.write(date);

// Task 02.
var date=new Date();
var month=new Array();
month=['January','February','March','April','May','June','July', 'August','September','October','November','December'];
for(var i=0; i<=11; i++){
  month[i];
}
var m=month[date.getMonth()];
document.write("Current Month: "+m);

// Task 03.

//. Write a program that alerts the first 3 letters of the current day, 
// for example if today is Sunday then alert will show Sun.

var date=new Date();
var day= new Array();
day=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
for(var i=0; i<=11; i++){
  day[i];
}
var today=day[date.getUTCDay()];
document.write("Today is "+today);

// Task 04.

// Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

var date=new Date();
var day= new Array();
day=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
for(var i=0; i<=11; i++){
  day[i];
}
if(day[6]==='Saturday' || day[7]==='Sunday'){
  var today=day[date.getUTCDay()];
document.write("It's Fun Day Because Today is: "+today);
}

// Task 05.

// Write a program that shows the message “First fifteen days of the month” 
// if the date is less than 16th of the month else shows “Last days of the month”.

var d=new Date();
var date=d.getUTCDate();
if(date<16){
  document.write("First fifteen Days of the Month");
}else if(date>16){
  document.write("Last Days of the Month")
}

// Task 06.

//Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like to represent the Date object.

var a=new Date("Jan 1, 1970");
var date=new Date();
var aMili=date.getTime();
var aMinute= aMili/(1000*60*60);
document.write("Current Date: "+date+"<br>Elapsed millisecond since Jan 1, 1970: "+aMili+"<br>Elapsed minutes since Jan 1, 1970: "+aMinute);

// Task 07.

//Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

var date=new Date();
var hour=date.getHours();
var a= hour >= 12 ? 'PM' : 'AM';
document.write("It's "+a);

// Task 08.
//Write a program that creates a Date object for the last day of the last month of 2020 
// and assigns it to variable named laterDate.

var date= new Date();
var lastDay=new Date(date.getFullYear(),12,0);
document.write("Last Date: "+lastDay);

// Task 09.
//Create a date object of the starting date of this Ramadan and alert the number of days 
// past since 1st Ramadan? Note: 1st Ramadan was on April 24, 2020

var RamadanDate= new Date("April 25, 2020");
var date=new Date();
var diff=(date - RamadanDate) / (1000 * 60 * 60 * 24);
document.write(Math.floor(diff)+" days have passed since 1st Ramadan, 2020");

// Task 10.
// Write a program that displays in your browser the seconds that elapsed between the reference date and  the beginning of 2015.

var date = new Date("Dec 5, 2015");
var beginning = new Date("Jan 1, 2015");
var diff=(date - beginning)/1000;
document.write("On reference date "+date+", <br>"+diff+" Seconds has passed since begining of 2015");

// Task 11.
// . Create a Date object for the current date and time. Extract the hours, reset the date object 
// an hour ahead and finally display the date object in your browser.

var current= new Date();
document.write("Current Date: "+current+"<br>");

current.setHours(current.getHours()-1);
document.write("1 hour ago, it was: "+current);

// Task 12.
// Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

var d = new Date();
document.write("Current Date: "+d);

d.setFullYear(d.getFullYear()-100);
document.write("<br>100  years back, it was "+d);

// Task 13.
//Write a program to ask the user about his age. Calculate and show his birth year in your browser.

var userAge=new Date(prompt("Enter Your Age","Jan 1, 1970"));
var current=new Date();
var AgeCal=(current - userAge)/(1000 * 60 * 60 * 24 * 365.25);
document.write("Your age is: "+Math.floor(AgeCal)+"<br>Your birthday Year is: "+userAge.getFullYear());

// Task 14.
//Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off 
// to 2 decimal places. Display the following fields:
// a. Customer Name
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date)
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge


var custName=prompt("Enter Customer Name: ");
var month=prompt("Enter Current Month: ");
var NoUnit= parseFloat(prompt("Enter Number of Unit: "));
var chargeUnit=parseFloat(prompt("Enter the Charges per Unit: "));

var netAmount= NoUnit * chargeUnit;
var LateCharge= 350;
var grossAmount= netAmount + LateCharge;

document.write("<h2>K-Electric Bill</h2>");
document.write("Customer Name: "+custName+"<br>Month: "+month+"<br>Number of Unit: "+NoUnit+"<br>Charges per Unit: "+chargeUnit+"<br>");
document.write("<brs><br><br>Net Amount Payable(with Due Date): "+netAmount+"<br>Late Payment SurCharge:"+LateCharge+"<br>Gross Amount Paybale (After Due Date): "+grossAmount);
*/
/************************* Chapter 35 to 38 **********************/

// Task 01.
//Write a function that displays current date & time in your browser.
/*
function date(a)
{ 
  var a = new Date();
  return (a);
}
var fun=date();
document.write("Current Date And Time: "+fun);

// Task 02.
// Write a function that takes first & last name and then it greets the user using his full name.

function name(a,b){
  a=prompt("Enter Your First Name: ");
  b=prompt("Enter Your Last Name: ");
  var fullName= a + " " + b;
  return (fullName);
}
var fun= name();
document.write("Hy! "+fun)

// Task 03.
//. Write a function that adds two numbers (input by user) and returns the sum of two numbers.
 
function add(a,b){
  a=parseInt(prompt("Enter Your First Number: "));
  b=parseInt(prompt("Enter Your Last Number: "));
  var sum = a + b;
  document.write("The Sum of "+a+" and "+b+" is "+sum);
}
add();

// Task 04.
// Write a function that takes three arguments num1, num2 & operator & compute the desired operation. 
// Return and show the desired result in your browser.

function Calculator(a,b,op){
  a=parseInt(prompt("Enter Your First Number: "));
  b=parseInt(prompt("Enter Your Last Number: "));
  op=prompt("Enter Your Operator, (i.e. +, -, *, /, % ) What operation you want to perform: ");

  if(op==="+"){
    var sum = a + b ;
    document.write("The Sum of "+a+" and "+b+" is "+sum);
  }else if(op==="-"){
    var sub = a - b ;
    document.write("The Subtration of "+a+" and "+b+" is "+sub);
  }else if(op==="*"){
    var multi = a * b ;
    document.write("The Multiplication of "+a+" and "+b+" is "+multi);
  }else if(op==="/"){
    var div = a / b ;
    document.write("The Division of "+a+" and "+b+" is "+div);
  }else if(op==="%"){
    var rem= a % b ;
    document.write("The Reminder of "+a+" and "+b+" is "+rem);
  }else{
    document.write("Incorrect Character: ");
  }
  return 0;
}
Calculator();

// Task 05.
//Write a function that squares its argument

function square(a){
  a=parseInt(prompt("Enter a Number which print Square of that number: "));
  var sqr=a*a;
  document.write("The Square of "+a+" is "+sqr);
}
square();

// Task 06.
// Write a function that computes factorial of a number

function Factorial(num){

  var num=parseInt(prompt("Enter a number Which print a FActorial"));

  if(num===0 || num === 1){
    return (1);
  }
  for(var i=num-1; i>=1; i--){
    num *= i;
  }
  return num;

}
var a=Factorial();
document.write("The Factorial of is "+ a);

// Task 07.
//Write a function that take start and end number as inputs & display counting in your browser

function Counting(start,end){
   for(var i=start; i<=end; i++){
     document.write(i+"<br>");
   }
 }
var start=parseInt(prompt("Enter a start number:"));
var end=parseInt(prompt("Enter a end number:"));
Counting(start,end);

// Task 08.
//Write a nested function that computes hypotenuse of a right angle triangle.
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()

function calculateHypotensue(base,perp){

  function calculateSquare(num){
    return (num*num);
  }

  var hypo = calculateSquare(base) + calculateSquare(perp);
  sqr= Math.sqrt(hypo);
  return (hypo);

}
var base=parseInt(prompt("Enter a Base of right triangle: "));
var perp=parseInt(prompt("Enter a Perpendicular of right triangle: "));
var Right= calculateHypotensue(base,perp);
document.write("The Hypotenuse of a Right Triangle: "+Right);

// Task 09.
//Write a function that calculates the area of a rectangle.
//  A = width * height
//  Pass width and height in following manner:
//  i. Arguments as value
// ii. Arguments as variables

function calculateArea(width,height){

  var area = width * height;
  return (area);
}
 width = 20;
 height = 10;
document.write("The width Area is: 20 <br>Height of Area is: 10 <br>Area of Rectangle is: "+calculateArea(width,height)+" square");

// Task 10.
// Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.

function palindrome(word){
  var word = word.toLowerCase();
  var reverse= word.split("").reverse().join('');
  return (word===reverse);
}
var str=prompt("Enter a string Check it is Palindrome or not");
document.write("Is the given word palindrome: "+palindrome(str));

// Task 11.
// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the
// string in upper case.
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'

  function FirstLetterUpper(str){
    var text = str.split(' ');
    var temp = [];

  for(var i=0; i<text.length; i++){
    temp.push(text[i].charAt(0).toUpperCase() + text[i].slice(1));
  }
  return (temp.join(' '));

}
alert(FirstLetterUpper("the quick brown fox"));

// Task 12.
//Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
// EXAMPLE STRING : 'Web Development Tutorial'
// EXPECTED OUTPUT : 'Development'

function longestWord(str) {
  var string = str.split(" ");
  var longest = 0;
  var word = null;
  for (var i = 0; i <= string.length - 1; i++) {
      if (longest < string[i].length) {
          longest = string[i].length;
          word = string[i];
      }
  }
  return word;
}
alert(longestWord("Web Development Tutorial"));

// Task 13.
// Write a JavaScript function that accepts two arguments, a string and a letter and the function will count
// the number of occurrences of the specified letter within the string. Sample arguments : 'JSResourceS.com', 'o'

function CheckLetter(str,letter){

  var count=0;
  var string = str.split('');
  for(var i=0; i < string.length; i++){
    if(string[i] === letter){
      count++;
    }
  }
return (count);
}
var str = prompt("Enter a string");
var letter = prompt("Enter a letter");

document.write("This "+letter+" is present "+CheckLetter(str,letter)+" times");

// Task 14.
//Create 2 functions that calculate properties of a circle, using the definitions here.
  // Create a function called calcCircumference:
  //    • Pass the radius to the function.
  //    • Calculate the circumference based on the radius, and output
  // "The circumference is NN".
  // Create a function called calcArea:
  //    • Pass the radius to the function.
  //    • Calculate the area based on the radius, and output "The area is NN".
  // Circumference of circle = 2πr
  // Area of circle = πr2

  function calcCircumference(radius){

    var circumF = (2 * Math.PI * radius); 

    
    return (circumF);
  }
  function calcArea(rad){

    var area = (2 * Math.PI * rad) ;
    return (area);
  }
  var radius = 4;
  var rad = 4;
document.write("The Circumference of the Circle is: "+calcCircumference(radius)+"<br>The area of Circle is: "+calcArea(rad));
*/











