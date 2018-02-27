//기본적인 if 문

var isEven = function(number) {
  // Your code goes here!
  if (number % 2 === 0) //number가 2으로 나눠서 값이 0이면 true
{
    return true;
} else (number % 3 === 0) ///numver가 3으로 나눠서 값이 0이면 false
{
    return false;    
} 
};

//숫자인지 문자인지 확인하는 코드
var isEven = function(number) {
  // Your code goes here!
if (number % 2 === 0){ //2로 나눌수있는 숫자
    return true;
} 
else if (isNaN(number)) { //number가 문자열이면 출력;
    return "string";
}
else {
    return false;    //아무것도아니면 거짓 리턴
} 
};
isEven("str") //문자열 출력

//기본적인 switch문 
var color = prompt("What's your favorite primary color?","Type your favorite color here");

switch(color) {
  case 'red':
    console.log("Red's a good color!");
    break;
  case 'blue':
    console.log("That's my favorite color, too!");
    break;
  //Add your case here!
  case 'yellow':
    console.log("yellow");
    break;
  default: //아무것도 아니면 출력
    console.log("I don't think that's a primary color!");
}

//And
var hungry = true;
var foodHere = true;

var eat = function() {
  // Add your if/else statement here!
if (hungry && foodHere === true){ //둘다 진실일때 동작
    console.log("good~");
    return true;
} else {
    console.log("food pls");
    return false; // 거짓반환
}
};

//OR
var tired = true;
var bored = false;


var nap = function() {
  // Add your if/else statement here!
  if (tired || bored === true){ //tired와 bored중 하나가 진실일때 진실
      return true;
      }
  else {
      return false;
      }
};

//Not
var programming = false;

var happy = function() {
  // Add your if/else statement here!
  if (!programming === true){ //programming이 거짓의 반대일떄 진실
      return true;
} else {
    return false;
}
};