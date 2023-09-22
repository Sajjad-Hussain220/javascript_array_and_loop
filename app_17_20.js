// ? chapter 17_20
//!q1
// var row = 2;
// var col = 4;

// var empty_array = [];

// for (let i = 0; i < row; i++) {
//     empty_array[i] = [];
// debugger;
//     for (let z = 0; z < col; z++) {
//         empty_array[i][z] = z ;
//     }
// }
// document.write(empty_array )
//!q2
// let matrix = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
// ];

// for(let i = 0; i<matrix.length; i++)
// {
//     document.write(matrix[i].join(" ") + "<br>")
// }
//!q3

// for(let i = 1 ; i <=10 ; i++){

//     document.write(i+ "<br>")
// }

// !q4
// var table = +prompt("enter a number to show its multiplication table")
// var table_len = +prompt("enter lenght multiplication table ")

// document.write("multiplication table of "+ table + "<br>")
// document.write("length "+ table_len + "<br><br>")

// for (var i = 1; i <= table_len; i++) {
//       document.write(table + " * " + i +" = "+ i*table + "<br>")
// }


// !q5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

// for (let z = 0 ; z < fruits.length ; z++){
//     document.write(fruits[z] + "<br>")
// }
// document.write("<br><br><br>")
// for (let z = 0 ; z < fruits.length ; z++){

//     document.write("<br>Element at index "+ z + " is " +fruits[z])
// }

//!6
// document.write("Counting :<br>")
// for (let c = 1; c <= 15; c++) {
//     document.write(c + ",")
// }

// document.write("<br><br>Reverse :<br>")
// for (let c = 10; c >= 1; c--) {
//     document.write(c + ",")
// }

// document.write("<br><br>Even :<br>")
// for (let c = 0; c <= 20; c+= 2) {
//     document.write(c + ",")
// }

// document.write("<br><br>odd :<br>")
// for (let c = 1; c <= 20; c+=2 ) {
//     document.write(c + ",")
// }

// document.write("<br><br>series :<br>")
// for (let c = 2; c <= 20; c+=2 ) {
//     document.write(c + "K, ")
// }

//!7
// var search_inpu = prompt("Welcome to ABC Bakery . What do you want to order sir/ma'am?")
// A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var flag = false
// for(let i = 0; i < search_inpu.length ; i++)
// {
//     if(search_inpu.toLocaleLowerCase() == A[i])
//     {
//         flag = true;
//         document.write("<b>"+search_inpu+ "</b> is available at index <b>"+ i + "</b> in our bakery")
//         break
//     }
// }

// if(flag !=true)
// {
//         document.write("we are sorry. <b>"+ search_inpu +  "</b> is not available in our bakery")
// }

//!8
// var a = [24, 53, 78, 91, 12];
// var max = 0;
// document.write("Array items " + a);

// for(let i = 0 ; i < a.length ; i++){
//     if (max < a[i]){
//         max = a[i];
//     }
// }

// document.write("<br>The largest number is " + max);

//!9
// var a = [24, 53, 78, 91, 12]
// var min = a[0];
// document.write("Array items " + a);

// for(let i = 0 ; i < a.length ; i++){
//     if (min > a[i]){
//         min = a[i];
//     }

// }

// document.write("<br>The smallest number is " + min);

//!10
// for(let i = 0 ; i <=100 ; i += 5)
// {
//     document.write(i + ",")
// }

