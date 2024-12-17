//operators --->used to perform some operations on Data

//types ---arithmetic, assignment,comparision,strict,logical,ternary and bitwise

//1.ARITHMETIC OPERATIONS

var a=45;
var b= 5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);
console.log(a++);
console.log(a--);
console.log(++a);
console.log(--a);

// ASSIGNMENT OPERATOR(+=,-=,*=,/=,%=,**=)

var a=3;
a+= 1;//a=a+1>>a=3+1=4
console.log(a);
a-= 2;
console.log(a);
a*= 15;
console.log(a);
a/= 2;
console.log(a);
a%= 2;
console.log(a);
a**= 2;
console.log(a);

//COMPARISION OPERATOR(</>,<=,>=)

var i=10;
var j= 34;
console.log(i<j);
console.log(i>j);
console.log(i<=j);
console.log(i>=j);

//STRICT(==,===)

 var a=10;
 var b="20";
 console.log(a==b);//check only the values
 console.log(a===b);// checks both the values and datatypes
 
 
//LOGICAL(&&,||,!=)------AND,OR,NOT(AND-Both the conditions should be matched,OR-any one condition should match)

var a=45;
var b=12;
console.log(a!=b);

//TERNARY

// SYNTAX >> (CONDITION)?"TRUE_VALUE STATEMENT":FALSE_VALUE STATEMENT"

var age =22;
var limit = age>=18? "eligible": "not eligible";
//  var limit =(age> 18 || age == 18)? " eligible" : " not eligible";
console.log(limit);






