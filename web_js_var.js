//변수
var myAge = 26;

console.log(myAge);

//변수 상속
var myName = "jae";
console.log(myName);
myName = "jae";
console.log(myName.substring(0,2));//ja 출력

//매개변수
var greeting = function (name) {
    console.log("Great to see you," + " " + name);
};
// On line 11, call the greeting function!
greeting("jaewook") //Great to see you, jaewook 출력


//매개변수2
var foodDemand = function(food){
    console.log("I want to eat" + " " + food);    
};

foodDemand("apple")

//매개변수3 오렌지 가격 변동시 코드 재활용
var orangeCost = function(price){
    console.log(price*5)
};
orangeCost(500)

//반환(return)
// Parameter is a number, and we do math with that parameter
var timesTwo = function(number) {
    return number * 2;
};

// Call timesTwo here!
var newNumber = timesTwo(8)
console.log(newNumber);

//반환 응용
// Define quarter here.
var quarter = function(number){
    return number / 4;    
};
//

if (quarter(12) % 3 === 0 ) {
  console.log("The statement is true");
} else {
  console.log("The statement is false");
}

//2개이상의 매개변수
var perimeterBox = function(length, width){
    return length + length + width + width;     
};

perimeterBox(5,4)//상자 너비 측정

//전역변수, 지역변수
var my_number = 7; //this has global scope <- 전역변수 

var timesTwo = function(number) {
    var my_number = 5; // <- 지역변수(안에서만 작동)
    my_number = number * 2;
    console.log("Inside the function my_number is: ");
    console.log(my_number);
}; 

timesTwo(7); // <- 전역변수로 동작

console.log("Outside the function my_number is: ")
console.log(my_number);

//정리
var nameString = function (name) { //<- 매개변수이용
	return "Hi, I am" + " " + name; // <- 반환
};

console.log(nameString("wook")); // <- 출력

//함수 제어문
var sleepCheck = function(numHours){
    if (numHours >= 8){
        return "You're getting plenty of sleep! Maybe even too much!";
    } else {
        return "Get some more shut eye!";
        }
};

sleepCheck(7)

//가위바위보
var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random(); // <변수 0~1만 나옴
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);
// 가위바위보 지정

var compare = function(choice1, choice2){
  if (choice1 === choice2)
  {
    return "The result is a tie!";   
  } else if (choice1 === "rock") {
        if (choice2 === "scissors"){
            return "rock wins";    //1 이김
        } else {
            return "paper wins";   //2 이김
        }
    } else if (choice1 === "paper") {
        if (choice2 === "rock"){
            return "paper win";   //1 이김
        } else {
            return "scissors wins"; //2 이김
        }
    } else if (choice1 === "scissors"){
        if (choice2 === "paper"){
            return "paper wins"; //1이김
        } else {
            return "rock win"; //2 이김
        }
    } else {
    	return "What???" // 포함되지않은 문자를 입력시
    }
};
compare(userChoice,computerChoice);