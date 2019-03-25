//var http = require('http');
//var fs = require("fs");

class User { 
    constructor(name, lastname, lastname1,subject,nickname,psw,pswconf) {
        this.name = name; 
        this.lastname = lastname;
        this.lastname1 = lastname1;
        this.subject = subject;
        this.nickname = nickname; 
        this.psw = psw;
        this.pswconf = pswconf;
          
    }
}



function saveUser(){
    console.log("Entra a save User");
    //document.getElementById("miForm").submit();
    
    var name=document.getElementById("fname").value;
    var lname= document.getElementById("lname").value;
    var lname1= document.getElementById("lname1").value;
    var name=document.getElementById("subject").value;
    var subject=document.getElementById("nickname").value;
    var lname= document.getElementById("psw").value;
    var lname1= document.getElementById("pswconf").value;
    var user = new User(name,lname,lname1,subject,nickname,psw,pswconf);
    console.log(user);
    var jsonData = JSON.stringify(user);
    localStorage.setItem('user',jsonData);
}


function usersInput() {
    return document.getElementById("Submit");
}
var users = usersInput();
console.log(users);

//var jsonData = JSON.stringify(users);

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