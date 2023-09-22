//?chapter 21_25

//! q1
// var first_name = prompt("Input your First name : ");
// var last_name = prompt("Input your First name : ");

// var full_name = first_name + " "+ last_name;

// document.write("first name is : "+ first_name);
// document.write("<br>last name is : "+ last_name);
// document.write("<br>full name is : "+full_name);


//! q2
// var first_name = prompt("Input your Favorite phone name");
// var length_fa = first_name.length;

// document.write("My favorite phone is : "+ first_name);
// document.write("<br>Lenght of string : "+length_fa);

// ! q3 
// var name1 = "Pakistani"
// var name_n_find = name1.indexOf("n");
// document.write("string : "+ name1);
// document.write("<br>index of n : " + name_n_find)

//!q4
// var name1 = "Hello world"
// var name_n_find = name1.lastIndexOf("l");
// document.write("string : "+ name1);
// document.write("<br>index of l : " + name_n_find)


//!q5
// var name1 = "Pakistani"
// var name_n_find = name1[3];
// document.write("string : "+ name1);
// document.write("<br>character at index 3 : " + name_n_find)

//!q6
// var first_name = prompt("Input your First name : ");
// var last_name = prompt("Input your First name : ");

// var full_name = first_name.concat(" " , last_name);

// document.write("first name is : "+ first_name);
// document.write("<br>last name is : "+ last_name);
// document.write("<br>full name is : "+full_name);


//!q7
// var name1 = "hyderabad";
// var name2 = name1.replace("hyder" , "islam");
// document.write("city : "+ name1);
// document.write("<br>after replacement: "+name2);

//!q8
// var message = "Ali and Sami are best friends. Ali They play cricket and football together.";
// var repla_message = message.replace(/and/g , "&");
// document.write("message : " + message);
// document.write("<br>after replacement : " + repla_message);

// ! q9
// var value1 = "472";
// var value2 = parseInt(value1)
// document.write("value : "+ value1);
// document.write("<br>type : "+ typeof value1);

// document.write("<br>value : "+ value2);
// document.write("<br>type : "+ typeof value2);

//! q10
// var user_input = prompt("input any word");
// var user_input_change = user_input.toLocaleUpperCase();
// document.write("user input : " + user_input);
// document.write("<br>uper case : "+user_input_change);

//! q11
// var user_input = prompt("input any word");
// var user_input_change = user_input[0].toLocaleUpperCase(); 
// var user_input_change_last = user_input.slice(1 ,user_input.length).toLocaleLowerCase();
// var user_input_res = user_input_change + user_input_change_last; 

// document.write("user input : " + user_input);
// document.write("<br>uper case : "+user_input_res);

//! q12
// var num = 35.36
// var num_string = String(num);
// var num_string_res = num_string.replace("." , "");
// document.write("Number : " + num);
// document.write("<br>result : "+num_string_res);

//! q13
// var user_input = prompt("input you name : ");
// var checking_symboles = ["!", ",", ".", "@"];
// var falg = false;
// for (let i = 0; i < checking_symboles.length; i++) {
//     for (let j = 0; j < user_input.length; j++) {
//         if (checking_symboles[i] === user_input[j]) {
//             alert("please enter a valid Username")
//             falg = true;
//         }
//     }
// }
// if (falg == false) {
//     alert("Welcome " + user_input);

// }

//!q14
// var user_input = prompt("Welcome to ABC Bakery . what do you want to order sir/ma'am  ? ");
// var A = ["cake", "apple", "pie", "cookie", "chips", "patties"];
// var falg = false;
// for (let i = 0; i < A.length; i++) {
//     if (A[i] === user_input.toLocaleLowerCase()) {
//         document.write("<b>" + user_input + "</b> is available at index <b>" + i + "</b> in our bakery");
//         falg = true;
//     }
// }
// if (falg == false) {
//     document.write("we are sorry .<b>" + user_input + "</b> is not available in our bakery");
// }

//!q15
// var user_input = prompt("input you Password : ");
// var falg = false;
// var length1 =user_input.length;
// if ( length1 >= 6) {
//     for (let i = 0; i < user_input.length; i++) {
//         debugger;
//         if (user_input[i] === user_input[0]) {
//             if  (parseInt(user_input[i]) >= 0 && parseInt(user_input[i]) <= 9) {
//                 document.write("Password can not begain with a number");
//                 break;
//             }
//         } else {
//             var user_input_con = user_input[i].charCodeAt(0);
//             if ((user_input_con >= 65 && user_input_con <= 90) || (user_input_con >= 97 && user_input_con <= 122) ||  (parseInt(user_input[i]) >= 0 && parseInt(user_input[i]) <= 9)) {
//                 falg = true;
//                 // debugger;
//             } else {
//                 document.write("Password can not used special character");
//             }
//         }
//     }
// } else {
//     document.write("Your Password is less than 6 letters ");
// }

// if (falg == true) {
//     document.write("Your Password is correct");
// }


//!q16
// var university = "university of karachi";
// var university_con = university.split(" ");
// for (let i = 0; i < university_con.length; i++) {
//     for (let z = 0; z < university_con[i].length; z++) { 
//         document.write(university_con[i][z] +"<br>")
//     }
//     document.write("<br>")
// }

//!q17
// var user_input = prompt("input word  find last letter");
// var user_input_res = user_input.length - 1;
// document.write(user_input[user_input_res])

// !q18
// var string1 = "The quick brown fox jumps over the lazy dog";
// var string_split_res = string1.split(" ");
// var find = "the";
// var count = 0;
// var falg = true;
// for (let i = 0 ; i < string_split_res.length ; i++)
// {
//     if (find.toLocaleLowerCase()  == string_split_res[i].toLocaleLowerCase() )
//     {
//         ++count;
//         falg = false;

//     }
// }

// if (falg == false){
//     document.write("there are " + count +"  occurrences of word '"+ find + "'" )
// }else{
//     document.write("not find this '"+ find+"'word ")
// }