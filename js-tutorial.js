console.log("Teaching the world how to code".length);
//글자 수 측정

// Log Codecademy in all uppercase letters
console.log('Codecademy'.toUpperCase()); 
//대문자

// Use a string method to log the following statment without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim()); 
//공백 제거


console.log(Math.random()*100);
// 16진수 숫자 1~100
console.log(Math.floor(Math.random()*100));
// 소수점 제거
console.log(Math.ceil(43.8)*100);
// 43.8 이하 호출하지않음
console.log(Number.isInteger(2017));
// 정수인지 확인함

//Opening line
console.log('It was love at first sight.');
/* <- 여러줄 주석처리
console.log('The first time Yossarian saw the chaplain he fell madly in love with him.');
console.log('Yossarian was in the hospital with a pain in his liver that fell just short of being jaundice.');
console.log('The doctors were puzzled by the fact that it wasn\'t quite jaundice.');
console.log('If it became jaundice they could treat it.');
console.log('If it didn\'t become jaundice and went away they could discharge him.');
console.log('But this just being short of jaundice all the time confused them.');
*/

// This line of code sets the variable location to the string New York City
const location = 'New York City';

// This line of code sets the variable latitude to the number 40.7
let latitude = 40.7;

// This line of code sets the variable inNorthernHemisphere to true
let inNorthernHemisphere = true;

console.log(location);
console.log(latitude);
console.log(inNorthernHemisphere);

//변수지정

const entree = "Enchiladas";
console.log(entree);
const price = 12;
console.log(price);
//변수지정 2
entree = "Tacos";
//error 코드

let notDefined;
console.log(notDefined);
let valueless = undefined;
console.log(valueless);
//변수 할당을 하지 않으면 undefined

let molecule = 16;
let particle = 18;
let assay = 3;

// Add and assign to molecule below
molecule += 16;
//16을 더함

// Multiply and assign to particle below
particle *= 6.02;
//6.02를 곱함
// Increment assay by 1
assay ++;
//1식 더함

let favoriteAnimal = 'koala';
console.log('My favorite animal:'+favoriteAnimal)
//문자변수

let myName = 'jaewook'

let myCity = 'namyoong'

console.log(`My name is ${myName}. My favorite city is ${myCity}.`)
// `(backticks) 문자열 삽입 방법

//정리
//const는 상수이다 바꾸기 불가능
//let는 변수이다 바꾸기가능
//설정 해제 된 변수는 기본 데이터 유형을 저장합니다 undefined.
//+연산자는 다수의 스트링을 보간 (결합)하기 위해 사용된다.
//JavaScript ES6에서 백틱 (`)과 ${}는 문자열에 값을 보간하는 데 사용됩니다.

//켈빈온도를 섭씨온도로 바꾸는 자바스크립트 함수
const kelvin = prompt('What is the Kelvin temperature today?');
//prompt함수는 팝업 윈도우에 대화식으로 호출하는 함수
const celsius = kelvin - 273;
//celsius(섭씨)-273
let fahrenheit = celsius * (9/5) + 32;
//fahrenheit(화씨) 변환 공식
fahrenheit = Math.floor(fahrenheit);
//반올림하는 함수
console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`)
//문자열에 값을 보간하는 함수