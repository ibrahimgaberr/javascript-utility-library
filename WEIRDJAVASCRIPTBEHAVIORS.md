Q: Explain and demonstrate weird JavaScript behaviors?
1- this
2- hoisting
3- closures in loops
4- bind/call/apply

1- this: I Have many cases which affects the value of the this keyword
1- (This) in Object Method => Her the value of this depend on how we call it when we add a method the we try to call it
using the object name it will refer to the object but if we sebrate the call from the intilize using variable i will refer to
the global.

Note: Arrow function not a good choice for the object because it doesnot make a scope for itself.
ex:
const user = {
name: "Alex",
greet() {
console.log(this);
},
};

user.greet(); // this => will be the object
const greetFunction = user.greet;
greetFunction(); // this => will be the window in browser and global object in node.

    2- (This) in global context => here we have two cases with and without "use strict".

-Without "use strict" => this will the window even inside a regular function.
-With "use strict" => this will be undefined even inside a regular function.

    3- (This) in Arrow function => Arrow function donot have there own this because doesnot make a new scope for itself as

we said in the object. [its inheret the value of this].

    4- (This) using call, bind and apply => all of this methods are used two call a function and also append to them the value of this.

    5- (This) in event handler => This refers to the element that event happen on it.

## To Know what is the value of this focus in three things (where the keyword this is - its scope - how we call it) and also focus that this take its value in the runtime.

##########################################################################################################################
2- hoisting: is a js behavior where the declaration of variable, function and class go to the to of the scope, In js before the execution of the file the engine go thow two phaseS, First creation phase and in this phase the hoisting happens then the execution phase.
  1- Function: if it declaration function all of the function hoisted to the top of the file, But in expression function its do the hoist to the declaration and keep the function body in its place so we can call the declaration function before and after but in expression we must call it after.

  2- var - let - const: All of them are hoisted depend on the scope but var hoisted and take default  value undefine, let and const do not take a default value so it will give us a error cannot access the var of let or const before initialization  (Temporal Dead Zone) let and const when comes to be hoisted they take a place in memory without any initial value and become blocked until the initialization happen and this called Temporal Dead Zone after the initialization happen iow it has a value and now its out of Temporal Dead Zone and can be access safely, Temporal Dead Zone: is the time between the hoisted if the variable without value and the variable when get its value. 

  3- class: Are The Same like let and const.

##########################################################################################################################

3- closures in loops: The problem for the closure in loop with async code like setTimeOut will happen if i used  var because var is a function scope and in this part the var will be global so the value of the i in loop will be the same in all block because after the loop finish and setTimeOut start to works will find that the value of i will be the same for all, But if we use let it will scoped for each iteration with its value.

##########################################################################################################################

4- bind/call/apply: All of them are built-in methods appears to handle the this keyword and invoke the function.
    - call: first parameter is the value of this and then send all the parameter the function take separated, also fire the function immediately.
    - apply: as same as call works the only different that it takes the parameters that comes in an array, First is the value of this and second take all the parameters function takes in array also fire the function immediately.
    - bind: works in a different way it make us append the function in a variable the use it when we want.