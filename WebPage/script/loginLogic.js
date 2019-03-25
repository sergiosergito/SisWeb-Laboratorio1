//var http = require('http');
//var fs = require("fs");

class User { 
    constructor(name, lastname) {
        this.name = name; 
        this.lastname = lastname; 
    }
}



function saveUser(){
    console.log("Entra a save User");
    //document.getElementById("miForm").submit();
    
    var name=document.getElementById("fname").value;
    var lname1= document.getElementById("lname").value;
    var user = new User(name,lname1);
    console.log(user);
}


function usersInput() {
    return document.getElementById("Submit");
}
var users = usersInput();
console.log(users);

var jsonData = JSON.stringify(users);

/*
fs.writeFile("mynewfile1.txt", jsonData, function(err) {
    if (err) {
        console.log(err);
    }
});
*/

//var fs = require('fs');

/*
fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});
*/