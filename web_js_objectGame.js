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

