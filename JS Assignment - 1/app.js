/****************   Chapter One ******************/

//Task 1. Write a script to greet your website visitor using JS alert box.
/*
window.alert("Welcome to My Website");

//Task 2. Write a script to display following message on your web page:

var a=prompt("Enter Your Password:");
if (a=="shahbaz") 
    {
    window.alert("You Type write Password");
    } else {
    window.alert("Error! Please Enter a Valid Password");
}

//Task 3. Write a script to display following message on your web page: (Hint : Use line break)

window.alert("welcome to JS Land.... \n Happy Coding!");

// 4. Write a script to display following messages in sequence

window.alert("welcome to Js land... ");
window.alert("Happy Coding...\n Prevent this page From creating additional dialogs.");

//Task 5. Generate the following message through browser’s developer console:

window.alter("Hello,.. I can run JS my web browser's console");

//Task 6. Make use of alerts in your new/existing HTML & CSS project.

function showAlert(){
    var a="This is Task 6 using Button";
    window.alert(a);
}
*/
/*************************  Chapter Two ******************/
/*
// TASK 01. 
var username;

// TASK 02. 
var myName="Shahbaz Khan";

// TASk 03.
var message="Hello World!";
window.alert(message);

// TASK 04.
var stdName="Jhone Doe";
var stdAge="15 Year Old";
var stdCertificate="Certified mobile application Development";

window.alert(stdName);
window.alert(stdAge);
window.alert(stdCertificate);

// TASK 05.
var pizza=" PIZZA \n PIZZ \n PIZ \n PI \n P";
window.alert(pizza);

// TASK 06.
var email="example@example.com";
window.alert("My email address is "+email);

// TASK 07.
var book="A smarter way to learn Javascript";
alert("I am trying to learn from the Book "+book);

// TASK 08.
document.write("Yah! I can Write HTML content through JavaScript");

// TASK 09.
var b="__________________ஜ۩۞۩ஜ__________________";
alert(b);
*/

/*************************  Chapter Three ******************/
/*
//TASK 01.
var age=21;
alert("I am "+age+" years old");

//TASK 02.

for(var i =0; i<=1000; i++)
{
    alert("You have visited this site "+i+" times");
}
    // TASK 03.
    var birthYear="1990";
    document.write("My birth year is "+birthYear);
    
   // TASK 04
var a= prompt("Visitor's Name");
var b=prompt("Product title");
var c=prompt("Quantity");

document.write(+a+" Ordered "+ c , b+" (s) on XYZ Clothing store.");
*/

/*************************  Chapter Four ******************/
/*
// TASK 01.
var FirstName="Dr.";
var SecName="Allama";
var lastName="Iqbal";

document.write(FirstName+" "+" "+SecName+" "+" "+lastName);

//TASK 02.
var a1, a2,a3,a4,a5;
var 1b, 2b, 3b, 4b, 5b;

// TASK 03.
document.write("a) A heading stating “Rules for naming JS variables <br> b) Variable names can only contain ______, ______, ______ and ______.<br> For example $my_1stVariable. <br> c) Variables must begin with a ______, ______ or _____. For example $name, _name or name. <br> d) Variable names are case _________.<br> e) Variable names should not be JS _________.");
*/
/*************************  Chapter Five ******************/
/*
//TASK 01.
var a=+prompt("Enter First Number: ");
var b=+prompt("Enter Second Number: ");
var sum=a + b;
window.alert("The Sum of "+a+" and "+b+" is "+sum);

// TASK 02.
var a=+prompt("Enter First Number: ");
var b=+prompt("Enter Second Number: ");
var sum=a + b;
window.alert("The Sum of "+a+" and "+b+" is "+sum);

var sub=a-b;
window.alert("The Subtraction of "+a+" and "+b+" is "+sub);

var mul=a*b;
window.alert("The Multiplication of "+a+" and "+b+" is "+mul);

var div=a/b;
window.alert("The Division of "+a+" and "+b+" is "+div);

var mod=a%b;
window.alert("The Modulus of "+a+" and "+b+" is "+mod);

// TASK 03.
var a;
document.write("Value after variable declaration is: "+a);
a=5;
document.write("<br> Initial value: "+a);
a++;
document.write("<br> Value after increament is : "+a);
sum=a+7;
document.write("<br> Value after addition is: "+sum);
sum--;
document.write("<br> Value after decrement is :"+sum);
var re=sum%3;
document.write("<br> The remainder is: "+re);

// TASK 04.
var cost=600;
var buy=+ prompt("Movies Ticket is price is "+cost+" how many ticket you want?");
var total=cost*buy;
document.write("Total cost to buy "+buy+" tickets to a movie is "+total+" PKR");

//TASK 05.
var a=prompt("Enter a number to print a table: ");
document.write("Table of " +a);
for(var i=1; i<=20; i++)
{
    document.write("<br>" +a+ " x " +i+ " = " +a*i);
}

// TASK 06.
var celcius=25;
var fahr=(25*9/5)+32;
document.write(celcius+" <sup>0</sup>C is "+fahr+" <sup>0</sup>F <br>");

var fahr1=70;
var celcius1=(70-32)*5/9;
document.write(fahr1+" <sup>0</sup>F is "+celcius1+" <sup>0</sup>C");

// TASK 07.

var price1=650;
var qty1=3;
var price2=100;
var qty2=7;
var shippingCharge=100;
totalCost=(price1*qty1)+(price2*qty2)+shippingCharge;
document.write("<h1> Shipping Cart </h1>");
document.write("Price of item 1 is "+price1+"<br>Quantity of item 1 is "+qty1+"<br>Price of item 2 is "+price2+"<br>Quantity of item 2 is "+qty2+"<br>Shipping charges "+shippingCharge+"<br><br><br>Totla cost of your order is "+totalCost);

//TASK 08.
var marks=980;
var marksObt=804;
var per=(marksObt/marks)*100;

document.write("<h1>Marks Sheet</h1>");
document.write("Total marks: "+marks+"<br> Marks obtained: "+marksObt+"<br>Percentage: "+per+"%");

// TASK 09.
var dollar=10;
var saudiRiyals=25;
var Pak=(dollar*104.80)+(saudiRiyals*28);

document.write("<h1>Currency In PKR</h1>");
document.write("Total currency in PKR: "+Pak);

//TASK 10.
var num=2;
var add=num+5;
var mul=num*10;
var div=num/2;

document.write("Number is: "+num+"<br>ADD 5 in number: "+add+"<br>Multiply by 10: "+mul+"<br>Divide by 2: "+div);

// TASK 11.
var CurrentYear=2020;
var birthYear=1997;
var years=CurrentYear - birthYear;
document.write("<h1>Age Calculator</h1>");
document.write("Current Year: "+CurrentYear);
document.write("<br>Birth Year: "+birthYear);
document.write("<br>Your age is: "+years);

//TASK 12.
var radius=20;
var circum=2*3.142*radius;
var area=3.142*radius*radius;

document.write("<h1>The Geometrizer</h1>");
document.write("<br>The Radius of a circle: "+radius);
document.write("<br>The Circumference of a circle: "+circum);
document.write("<br>The Area of a circle: "+area);

//TASK 13.
var favSnack="Chocolate chip";
var currentAge=21;
var maxAge=60;
var snackPerDay=2;
var total=(maxAge - currentAge)*2;

document.write("<h1>The Life Time Supply Calculator</h1>");
document.write("<br>Favourite Snacks: "+favSnack);
document.write("<br>Current age: "+currentAge);
document.write("<br>Estimate Maximum age: "+maxAge);
document.write("<br>Amount of Snacks Per Day: "+snackPerDay);
document.write("<br>You will need "+total+" chocolate chip to last you until the ripe old age of "+maxAge);
*/

/*************************  Chapter Six to Eight ******************/
/*
//TASK 01.
var a=10;

document.write("Result: <br>The value of a is: "+a);
document.write("<br>...................<br>");
document.write("<br>The vlaue of ++a is: " + ++a + "<br>Now the value of a is: "+a);

document.write("<br><br>The value of a++ is: "+ a++ + "<br>Now the value of a is: "+ a);

document.write("<br><br>The value of --a is: "+ --a + "<br>Now the value of a is: "+a);

document.write("<br><br>The value of a-- is: "+ a-- + "<br>Now the value of a is: "+ a);

// TASK 02.
var a=2;
document.write("a is "+a);
var b=1;
document.write("<br>b is "+b);
var result= --a - --b + ++b + b-- ;
//           1  -  0  + 1   + 1 = 3
document.write("<br>result is "+result);

// Task 03.
var username=prompt("Enter your name: ");
document.write("Hy! "+username+" Welcome to our awesome website");

// TASk 04.
// Task 05.
var num=parseInt(prompt("Enter a number which print a table: "));
if (num===num) {
    document.write("<h1>Table of 5 </h1><br>");

    for(var i=1; i<=20; i++)
    {
        document.write("<br>" +num+ " x " +i+ " = " +num*i);
    }
    } else {
    document.write("<h1>Table of "+num+ "</h1> <br>");
    for(var i=1; i<=20; i++)
    {
        document.write("<br>5 x "+i+" = "+5*i);
    }
}

// Task 06.
var eng=+prompt("Enter Your English Marks: ");
var math=+prompt("Enter Your Mathematics Marks: ");
var phy=+prompt("Enter Your Physics Marks: ");
var totalMarks=100;
var sumTotal=100 + 100 + 100;
var obtMarks= eng + math + phy;
var perEng= (eng/totalMarks)*100;
var perMath= (math/totalMarks)*100;
var perPhy= (phy/totalMarks)*100;
var totalPer= (perEng + perMath + perPhy)/3;

document.write("<table>");
    document.write("<tr>");
    document.write("<th>Subjects</th>");
    document.write("<th> Total Marks</th>");
    document.write("<th> Obtain Marks</th>");
    document.write("<th> Percentage</th>");
    document.write("</tr>");
    document.write("<tr>");
    document.write("<td>English</td>");
    document.write("<td>" +totalMarks+ "</td>" );
    document.write("<td>" +eng+ "</td>");
    document.write("<td>" +perEng+ "%</td>");
    document.write("</tr>");
    document.write("<tr>");
    document.write("<td>Mathematics</td>");
    document.write("<td>" +totalMarks+ "</td>" );
    document.write("<td>" +math+ "</td>");
    document.write("<td>" +perMath+ "%</td>");
    document.write("</tr>");
    document.write("<tr>");
    document.write("<td>Physics</td>");
    document.write("<td>" +totalMarks+ "</td>" );
    document.write("<td>" +phy+ "</td>");
    document.write("<td>" +perPhy+ "%</td>");
    document.write("</tr>");
    document.write("<tr>");
    document.write("<th></th>");
    document.write("<th>" +sumTotal+ "</th>");
    document.write("<th>" +obtMarks+ "</th>");
    document.write("<th> " +totalPer+ "%</th>");
    document.write("</tr>");

document.write("</table>");
*/
/*************************  Chapter Nine to Ten ******************/
// Task 01.
/*
var city=prompt("Enter a city Name: ");
var k="karachi";

if(city=="karachi")
    {
        document.write("Welcome to city of lights");
    }
    else{
        document.write("City = "+city);
    }

//Task 02.
var gender=prompt("Enter a Gender: ");
if(gender=="male")
    {
        document.write("Good Morning Sir");
    }else
    if(gender=="female")
    {
        document.write("Good Morning Ma’am");
    }

// Task 03.
var signalColor=prompt("Enter a Trafic Signal Color: ");
if(signalColor==="red")
    {
        document.write("Must Stop!");
    }else 
    if (signalColor==="yellow") {
        document.write("Ready to Move");
    } else 
    if(signalColor==="green"){
        document.write("Move no ");
    }
    
// Task 04.
var fuel=prompt("How many remaining Fuel in your car, litres");
if (fuel==="0.25") {
    document.write("Please refill the fuel in your car");
}

// Task 05.
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

// Task 06.
var obt1=parseInt(prompt("Enter Obtain Marks of Subject One"));
var obt2=parseInt(prompt("Enter Obtain Marks of subjects Two"));
var obt3=parseInt(prompt("Enter Obtain Marks of subjects Three"));
var obtMarks= obt1 + obt2 + obt3;
var totalMarks=300;
var per=(obtMarks/totalMarks)*100;

document.write("<h1>Marks Sheet</h1>");
document.write("<br>Total Marks: "+totalMarks+"<br>Marks Obtain: "+obtMarks+"<br> Percentage: "+per+"% <br>");


if (per>=80) {
    var grade="A-one";
    document.write("Remarks : Execellent!<br>");
} else if (per>=70) {
    document.write("Grade: A <br>Remarks : Good<br>");
} else if (per>=60) {
    document.write("Grade: B <br>Remarks : You need to improve<br>");
} else if(per<60){
    document.write("Grade: Fail <br>Remarks : Sorry!");
}

// Task 07.
var secret=7;
var guess=+prompt("Guess a number and Enter: ");
if (secret===guess) {
    document.write("Bingo! Correct answer");
} else if(guess===8){
    document.write("Close enough to the correct answer");
}

// Task 08.
var a=parseInt(prompt("Enter a number: "))
if (a%3===0) {
    document.write("Given number is Divisible by 3");
} else {
    document.write("Given is not Divisible by 3");    
}

// Task 09.
var num=parseInt(prompt("Enter a number"))
if (num%2===0) {
    document.write("Given Number is Even");
} else {
    document.write("Given Number is Odd");
}

// Task 10.
var temp = parseInt(prompt("Enter a temperature"));

if (temp > 40) {
    document.write("It is too hot outside.");
} else
    if (temp > 30) {
        document.write("The weather today is normal.");
    } else
        if (temp > 20) {
            document.write("Today's Weather is cool.");
        } else
            if (temp > 10) {
                document.write("OMG! Today's Weather is so cool.");
            }

// Task 11.
var number1=parseInt(prompt("Enter First Numbers: "));
var number2=parseInt(prompt("Enter Second Numbers: "));
var op=prompt("Enter a operator: ");
if (op==="+") {
    var sum = number1 + number2;
    document.write(number1+" + "+number2+" = "+ sum);
} else if (op==="-") {
    var sub=number1-number2;
    document.write(number1+" - "+number2+" = "+ sub);
} else if (op==="*") {
    var mul = number1 * number2;
    document.write(number1+" * "+number2+" = "+ mul);
} else if (op==="/") {
    var div=number1/number2;
    document.write(number1+" / "+number2+" = "+ div);
}else if (op==="%") {
    var rem = number1 % number2;
    document.write(number1+" % "+number2+" = "+ rem);
} 
*/
/*************************  Chapter 12 to 13 ******************/

// Task 01.
/*
var num=prompt("Enter a Character or ASCII Code:");
if((num>='A' && num<='Z') || (num>='65' && num<='90'))
{
     document.write("Given Input is Uppercase Letter:");
} else 
if((num>='a' && num<='z') || (num>='97' && num<='122'))
{
    document.write("Given Input is Lowercase Letter:");
} 

//Task 02.
var num1=parseInt(prompt("Enter First Integar: "));
var num2=parseInt(prompt("Enter second integar:"));
if (num1 > num2) {
    document.write(num1+" is Greater than "+num2);
} else if(num1===num2) {
    document.write("Both Integars are equals "+num1+" = "+num2);
}else {
    document.write(num2+" is greater than "+num1);
}

// Task 03.
var x=parseInt(prompt("Ente a number"));
if(x>0)
    {
        document.write("Given Number is Positive");
    }
    else if (x<0) {
        document.write("Given number is Negative");
    } else if(x===0){
        document.write("Given number Is Zero");
    }

// Task 04.
var char=prompt("Enter one Character");
if (char==='A'||char==='a'||char=== 'E' || char==='e' ||char==='I' ||char=== 'i' ||char==='O' || char==='o' || char==='U' || char==='u') {
    document.write("Given character is Vowel: True");
} else {
    document.write("Given character is not Vowel: False");
}

// Task 05.
var pass=prompt("Enter your Passord");
var correctPass="12345";
if(pass===""){
    document.write("Please enter your Password");
}else if (pass===correctPass) {
    document.write("Correct! The password you entered matches the original password");
} else if(pass!=correctPass){
    document.write("Incorrect! Password.");
}

// Task 06.
var greeting = "";
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
    document.write(greeting);
}
else {
    greeting = "Good evening";
    document.write(greeting);
}

//Task 07.
var time=parseInt(prompt("Enter a time in 24 formate (i.e 1900)"));

if (time===1300) {
    document.write("<br>1300 = 1pm ");
} else if (time===1400) {
    document.write("<br>1400 = 2pm");
} else  if (time===1500) {
    document.write("<br>1500 = 3pm");
} else if (time===1600) {
    document.write("<br>1600 = 4pm");
} else if (time===1700) {
    document.write("<br>1700 = 5pm");
} else if (time===1800) {
    document.write("<br>1800 = 6pm");
} else if (time===1900) {
    document.write("<br>1900 = 7pm");
} else if (time===2000) {
    document.write("<br>2000 = 8pm");
} else if (time===1300) {
    document.write("<br>2100 = 9pm");
} else if (time===2200) {
    document.write("<br>2200 = 10pm");
} else if (time===2300) {
    document.write("<br>2300 = 11pm");
} else if (time===2400) {
    document.write("<br>2400 = 12pm");
} 

if (time>=0000 && time<1200) {
    document.write("<br>Good Morning");
} else if (time>=1200 && time<1700) {
    document.write("<br>Good Aftrenoon");
} else if (time>=1700 && time<2100) {
    document.write("<br>Good Evening");
} else if (time>=2100 && time<2359) {
    document.write("<br>Good Night");
}
*/
/*************************  Chapter 14 to 16 ******************/
/*
//Task 01.
var array = [];
for(var i=0; i<3; i++)
{
    // input from user of Students names
    array[i]=prompt("Enter Students Name: " + (i+1));
}
document.write(array);

//Task 02.
var obj = {
    Student : 'Shahbaz Khan',
    fee: 2500,
    address: 'Karachi'
  };
  console.log(obj);

// Task 03.
var arr=['Shahhbaz Khan'];
document.write(arr);

// Task 04.
var arrn=[ 0308 , 3237903];
document.write(arrn);

// Task 05.
var bool=[true,false];
document.write(bool);

// Task 06.
var mixArr=['Shahbaz', 0308, true];
document.write(mixArr);

// Task 07.
var edu=[];
    edu[1]="SSC";
    edu[2]="HSC";
    edu[3]="BCS";
    edu[4]="BS";
    edu[5]="BCOM";
    edu[6]="MS";
    edu[7]="M.Phil.";
    edu[8]="PhD";
    documen.write("<h2>Qualifications:</h2>");
for(var i=1; i<=8; i++)
    {
        document.write("<br>"+i+") " +edu[i]);
    }

// Task 08.
var stu=['Michael', 'John', 'Tony'];
var score=[320, 230, 480];
var totalMarks=500;
var per1=(320/totalMarks)*100;
var per2=(230/totalMarks)*100;
var per3=(480/totalMarks)*100;

document.write("<br>Score of "+stu[0]+" is "+score[0]+". Percentage: "+per1+"%");
document.write("<br>Score of "+stu[1]+" is "+score[1]+". Percentage: "+per2+"%");
document.write("<br>Score of "+stu[2]+" is "+score[2]+". Percentage: "+per3+"%");

// Task 09.
var color=[];
color.unshift(prompt("What color you want to add to the begning in Array: "));
color [1]=prompt("Add two more color to the begning in Array: ");
color [2]=prompt("Add two more color to the begning in Array: ");
color.push(prompt("What color you want to add to the last in Array: "));
document.write(color+"<br>");
// d)
color.shift();
document.write(color+"<br>");
// e)
color.pop();
document.write(color+"<br>");
// f)
color.splice(prompt("In whcih index you want to add color: "),2, prompt("Add a color name in array: "));
document.write(color+"<br>");
// g)
color.splice(prompt("Ho many index you want top delete a colors: "),prompt("In whcih index you want to delete a color: "), " ");
document.write(color+"<br>");

// Task 10.

// Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort method.


var stdScore=['320','230','480','120'];
stdScore.sort();
document.write(stdScore);

// Task 11.

// Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array


var citiesName=['Karachi','Lahore','Islamabad', 'Quetta', 'Peshawar'];
var selectedCities=citiesName.slice(2,4);
document.write("Cities List: <br>"+citiesName);
document.write("<br><br>Selected Cities List :"+selectedCities);

// Task 12.

// Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)


var arr=["This", "is","my","cat"];
var combine=arr.join(' ');
document.write("Array: <br>"+arr);
document.write("<br>String: <br>"+combine);

// Task 13.

// Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)


var devices=['Keyboard','Mouse','Printer','Monitor'];
document.write("<b>Devices:</b> <br>"+devices);
document.write("<br>");

for(var i=0; i<=3; i++)
{
    document.write("<br>Out: <br>"+devices.shift());
}

// Task 14.
/* 
// Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out) 


var devices=['Keyboard','Mouse','Printer','Monitor'];
document.write("<b>Devices:</b> <br>"+devices);
document.write("<br>");

for(var i=0; i<=3; i++)
{
    document.write("<br>Out: <br>"+devices.pop());
}

//Task 15.

var mobiles = ['Apple', 'Samsung', 'Motorola', 'Nokia', 'Sony' , 'Haier'],
select = document.getElementById( 'mobiles' );

for( mobile in mobiles ) {
    
    select.add( new Option( mobiles[mobile] ) );
    
};

*/

/*************************  Chapter 17 to 20 ******************/
/*

// Task 01.    Declare and initialize an empty multidimensional array. (Array of arrays) 


var multiArray=[
    [,],
    [,],
    [,]
];

// Task 02.  Declare and initialize a multidimensional array representing the following matrix: 


var multiArr=[
    [0 ,1 ,2 ,3 ],
    [1 ,0 ,1 ,2 ],
    [2 ,1 ,0 ,1 ]
];
document.write(multiArr[0][0]);
document.write(multiArr[0][1]);  
document.write(multiArr[0][2]);
document.write(multiArr[0][3]);  
document.write("<br>"+multiArr[1][0]);
document.write(multiArr[1][1]);
document.write(multiArr[1][2]);  
document.write(multiArr[1][3]);
document.write("<br>"+multiArr[2][0]); 
document.write(multiArr[2][1]);
document.write(multiArr[2][2]);  
document.write(multiArr[2][3]);

// Task 03.  Write a program to print numeric counting from 1 to 10. 


for(var i=1; i<=10; i++)
{
    document.write("<br>"+i);
}

// Task 04.

//  Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user. 


var i=parseInt(prompt("Enter a number to show its multipilcation number: "));
var j=parseInt(prompt("Enter the lenght of multiplication table"));
document.write("Multiplication Table of: "+i+"<br> Lenght: "+j+"<br>");
for(var k=1; k<=j; k++)
{
    document.write("<br>"+i+" x "+k+ " = "+ i*k);
}

// Task 05.

//  Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]
 


var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for(var j=0; j<=4; j++)
{
    document.write("<br>"+fruits[j]);
}
document.write("<br><br>");
for(var i=0; i<=4; i++)
{
    document.write(" <br> Element at index "+ i +" is " +fruits[i]);
}

// Task 06. 

//  Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k 


document.write("<h2>Counting: </h2>");
for(var i=1; i<=20; i++) 
{
    document.write(i+" ");
}
for(var h=20; h<=1; h--) 
{
    document.write(h+" <br> ");
}
document.write("<h2>Reverse Counting: </h2>");
for(var j=20; j>=1; j--)
{
    document.write(j+" ");
}
document.write("<h2>Even: </h2>");
for(var i=1; i<=20; i++) 
{
    if (i%2==0) {
        document.write(i+" ");
    }
}
document.write("<h2>Odd: </h2>");
for(var i=1; i<=20; i++) 
{
    if (i%2!=0) {
        document.write(i+" ");
    }
}
document.write("<h2>Series: </h2>");
for(var i=1; i<=20; i++) 
{
        document.write(i+"k ");
}

// Task 07.   

//  You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not.


var item = ["cake", "apple pie", "cookie", "chips", "patties"];
var UserInput = prompt("Welcome to ABC Bakery! What do you want to order sir/ma'am?");
var incr = 0;

for (i = 0; i <= item.length; i++) {
        if (item[i] === UserInput) {
            incr = 1;
            document.write(UserInput + " " + "is available at index" + " " + i + " " + "in our bakery");
        }
    }
    if (incr == 0) {
           document.write("We are sorry." + " " + UserInput + " " + "is not available in our bakery")
    }
    document.write("<br>" + "<br>");

// Task 08.     Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12].
   
var arr = [24, 53, 78, 91, 12];
    var largeNum = arr[0];

    for (var i = 0; i < arr.length; i++) {

        if (arr[i] > largeNum) {

            largeNum = arr[i];
        }
    }
    document.write("Array Items: "+" "+arr+ "<br>");
    document.write("The largest no is : "+" "+largeNum);

// Task 09. Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12]

var A=[24, 53, 78, 91, 12];
var smallest=A[0];

for (var i = 0; i < A.length; i++) {

        if (A[i] < smallest) {

            smallest = A[i];
        }
    }
    document.write("Array Items: "+" "+A+ "<br>");
    document.write("The Smallest no is : "+" "+smallest);

// Task 10.     Write a program to print multiples of 5 ranging 1 to 100.

for(var i=5; i<=100; i+=5)
    {
        document.write(i+", ");
    }
*/




