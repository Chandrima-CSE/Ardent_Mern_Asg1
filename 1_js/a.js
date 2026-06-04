// 1. Create a login validation system using variables, 
//    conditional statements, and functions.

function login (email,password){
    if(email=== "mimi@gmail.com" && password === 1234){
        return "login successful"; 
    }
    else{
        return "login failed";
    }
}
module.exports = login;