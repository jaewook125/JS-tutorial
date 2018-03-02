//객체를 찾는 게임
var friends = {}; //리터럴 표기법
friends.bill = { //빌 오브젝트
    firstName : "Bill",
    lastName : "wow",
    number : '112-123-155',
    address : ['newyork','road','123']
};
friends.steve ={ //스티브 오브젝트
    firstName : "Steve",
    lastName : "ho~~",
    number : '12345-124',
    address : ['busan','dongpang','234']
};

var list = function(obj){ //오브젝트중 key값만 보여줌 friend.(key)
for (var key in obj){
    console.log(key);
}
};

var search = function(name) { //이름을 입력해
  for(var key in friends) {
    if(friends[key].firstName === name) { //첫번째 이름과 search의 이름이 일치하면
      console.log(friends[key]);
      return friends[key]; //key를 리턴
    }
  }
};
list(friends); //list함수 호출
search("Bill"); //search함수 호출




//리터럴 표기법을 생성자 표기법으로 해보기
var bob = new Object(); //생성자 표기법 예제
bob.name = "Bob Smith";
bob.age = 30;
// Here is susan1, in literal notation
var susan1 = { //리터럴 표기법
  name: "Susan Jordan",
  age: 24
};
// Make a new susan2 object, using a constructor instead
var susan2 = new Object();//생성자 표기법으로 바꿈
susan2.name = "Susan Jordan",
susan2.age = 24;




//리터럴 표기법을 생성자 표기법으로 해보기2
// help us make snoopy using literal notation
// Remember snoopy is a "beagle" and is 10 years old.
var snoopy = {
    species : "beagle",
    age : 10
};

// help make buddy using constructor notation
// buddy is a "golden retriever" and is 5 years old
var buddy = new Object();
buddy.species = "golden retriever";
buddy.age = 5;



//객체지향 함수
// Accepts a number x as input and returns its square
var square = function (x) {
  return x * x;
};

// Write the function multiply below
// It should take two parameters and return the product
var multiply = function (square, y) {
    return square(2) * y;
}





//객제지향 상속 함수
// here we define our method using "this", before we even introduce bob
var setAge = function (newAge) {
  this.age = newAge;
};
// now we make bob
var bob = new Object();
bob.age = 30;
// and down here we just use the method we already made
bob.setAge = setAge;
  
// change bob's age to 50 here
bob.setAge(50);




//this 키워드 사용
var rectangle = new Object(); //생성한다
rectangle.height = 3;
rectangle.width = 4;
// here is our method to set the height
rectangle.setHeight = function (newHeight) { //재설정 함수
  this.height = newHeight;
};
// help by finishing this method
rectangle.setWidth = function (newWidth){
  this.width = newWidth;
}
  

// here change the width to 8 and height to 6 using our new methods
rectangle.setHeight(6);
rectangle.setWidth(8);



//this 키워드 사용2
var square = new Object(); //생성자
square.sideLength = 6;
square.calcPerimeter = function() { //선 길이
  return this.sideLength * 4;
};
// help us define an area method here
square.calcArea = function(){
  return this.sideLength * this.sideLength // 부피특정
};

var p = square.calcPerimeter();
var a = square.calcArea();


//
function Person(name,age) {
  this.name = name;
  this.age = age;
}

// Let's make bob and susan again, using our constructor
var bob = new Person("Bob Smith", 30);
var susan = new Person("Susan Jordan", 25);
// help us make george, whose name is "George Washington" and age is 275ㅍㅁ
var george = new Person("George Washington", 275);



//객체 상속
function Cat(age, color) {
  this.age = age;
  this.color = color;
}

// make a Dog constructor here
function Dog(Cat){

};

//객체 상속 옵션
function Person(name,age) {
  this.name = name;
  this.age = age;
  this.species = "Homo Sapiens";
}

var sally = new Person("Sally Bowles", 39);
var holden = new Person('Holden Caulfield', 16);
console.log("sally's species is " + sally.species + " and she is " + sally.name);
console.log("holden's species is " + holden.species + " and he is " + holden.name);


//배열을 이용한 상속 
 // Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// Now we can make an array of people
var family = new Array();
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
// add the last family member, "timmy", who is 6 years old
family[3] = new Person("timmy", 6)

// loop through our new array
for (var i = 0; i < family.length; i++){ //패밀리 오브젝트 갯수
    console.log(family[i].name); //이름만 출력
};




//함수로 객체 전달
// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
}

var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

// get the difference in age between alice and billy using our function
var diff = ageDifference(alice,billy);



//나이 비교
// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// We can make a function which takes persons as arguments
// This one computes the difference in ages between two people
var ageDifference = function(person1, person2) {
    return person1.age - person2.age;
};

// Make a new function, olderAge, to return the age of
// the older of two people
var olderAge = function(person1, person2){ //객체를 매개변수로 이용
    if (person1.age > person2.age){
        return person1.age;
    } else {
        return person2.age;
    }
};


// Let's bring back alice and billy to test our new function
var alice = new Person("Alice", 30);
var billy = new Person("Billy", 25);

console.log("The older person is " + olderAge(alice, billy));


//원 둘레 구하는 공식
function Circle (radius) {
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;
        
    };
    // define a perimeter method here
    this.perimeter = function() {
    	return 2 * Math.PI * this.radius;
};
};



//기존 내용에서 주소록 추가하는 코드
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

var add = function(firstName,lastName,phoneNumber,email){ //기존 클래스에 매개변수 받아오기
    contacts[contacts.length] = {
    firstName : firstName,
    lastName : lastName,
    phoneNumber : phoneNumber,
    email : email
    }
}
add("Jae","wook","(021) 555-5555", "df@dw.com");
list(contacts);