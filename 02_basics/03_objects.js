//Singleton
//Object.create

// Object Literals
const mySym = Symbol ("key1")
 const JsUser = {
    name:"Vikas",
    age:  18,
    email:"vikas@11.com",
    "full name": "Vikas Chaurasia",
    [mySym]: "key1",
    daysloggedin : ["Tuesday"]
 }
// Symbol values can be defined by[]
 //console.log(JsUser.age)
 // cannot access full name [general syntax]
 console.log(JsUser["age"]);
 // correct syntax
console.log(JsUser[mySym]);

JsUser.age = 20;
//Object.freeze(JsUser)
// cannot change any value inside JsUser now{freeze function}
JsUser.greeting = function(){
    console.log("Hello Js User")
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js User,${this.name}`)
}
// String Interpolation in greetingTwo
console.log(JsUser.greeting);

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

console.log(JsUser)


 