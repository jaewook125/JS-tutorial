//리터럴 표기법을 이용한 메서드 이용
var james = {
    job: "programmer",
    married: false,
    speak: function(james) {
        console.log("Hello, I am feeling " + james)
    }
};

james.speak("great");
james.speak("just okay");




//문자열 타입 내장함수 typeof
var anObj = { job: "I'm an object!" };
var aNumber = 42;
var aString = "I'm a string!";

console.log(typeof anObj); // should print "object"
console.log(typeof aNumber); // should print "number"
console.log(typeof aString); // should print "string"



//객체가 존재하는지 확인하는 내장함수 hasOwnProperty
var myObj = {
    // finish myObj
    name : "name",
};

console.log( myObj.hasOwnProperty('name') ); // should print true
console.log( myObj.hasOwnProperty('nickname') ); // should print false


//예시
var suitcase = {
    shirt: "Hawaiian"
};

if (suitcase.shorts){
    suitcase.hasOwnProperty("shorts")
}


//for in 문
var nyc = {
    fullName: "New York City",
    mayor: "Bill de Blasio",
    population: 8000000,
    boroughs: 5
};

for(var oh in nyc){
    console.log(oh); //key값만 호출 
}

for(var x in nyc){
    console.log(nyc[x]);//value값만 호출
}





//클래스문 (OOP)객체 지향 프로그래밍
function Person(name,age) {
  this.name = name;
  this.age = age;
}

// Let's make bob again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 35);

// make your own class here
function Circle(radius){
    this.radius = radius;
}





//클래스문 2
function Dog (breed) { //기본 객체
  this.breed = breed;
}

// here we make buddy and teach him how to bark
var buddy = new Dog("Golden Retriever");
buddy.bark = function() { //메서드 검사
  console.log("Woof");
};
buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");
// we need you to teach snoopy how to bark here
snoopy.bark = function() { //메서드 검사
  console.log("Woof");   
}
// this causes an error, because snoopy doesn't know how to bark!
snoopy.bark();






//클래스문 3
function Person(name,age) {
  this.name = name;
  this.age = age;
}
// a function that prints the name of any given person
var printPersonName = function (p) {
  console.log(p.name);
};

var bob = new Person("Bob Smith", 30);
printPersonName(bob);

// make a person called me with your name and age
// then use printPersonName to print your name
var me = new Person('Jaewook', 26);
printPersonName(me);




//클래스문 , prototype 예시
function Cat(name, breed) {
    this.name = name;
    this.breed = breed;
}

// let's make some cats!
var cheshire = new Cat("Cheshire Cat", "British Shorthair");
var gary = new Cat("Gary", "Domestic Shorthair");

// add a method "meow" to the Cat class that will allow
// all cats to print "Meow!" to the console
Cat.prototype.meow = function() {
    console.log("Meow!");
}

// add code here to make the cats meow!
cheshire.meow();