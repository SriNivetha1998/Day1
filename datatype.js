//datatypes==> what type of data we are storing

//primitive data type==> store single value

//string==> set of character is "", ''

let name="sri";
console.log(name);

//number==>7858
let num=5
console.log(num);

//boolean===>true or false
let ipresent =true;
console.log(ipresent);

//null==>null(empty)
let a =null;
console.log(a);

//undefined===>predefined

let e;
console.log(e);

//non-primitive ===> stores multiple data value

//array ===> index value===> starts from 0
let arr =["sri","nivi","jhanvi"];
console.log(arr);
console.log(arr[2]);


//object==>contains  key value pairs

let student ={
    name : "shree",
    age : 15,
    gender : "male",
    mobile_no: 9952840142
}
console.log(student);
console.log(student.mobile_no);//accessing a single data

//adding a value
student.std ="X";
console.log(student);
//change age 
student.age =  16;
console.log(student);
//delete a value
delete student.mobile_no;
console.log(student);









