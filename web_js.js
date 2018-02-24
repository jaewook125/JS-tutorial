//길이측정
"yourname".length

//add
3+4

//팝업창 자바스크립트
confirm('This is an example of using JS to create some interaction on a website. Click OK to continue!');

//팝업창 프롬프트 대화형식
prompt("question!");

//띄어쓰기도 숫자에 포함
"cake is good".length

//문자열 booleans측정 가능
"I'm coding like a champ".length > 10

//콘솔 띄우기 가능
console.log(2*5)
console.log("Hello")

//간단한 제어문
if ("myname".length >= 6 ) {
    console.log("zz");
}

//거짓일경우
if (false) 
{
    console.log("Let's go down the first road!");
}
else 
{
    // What should we do if the condition is false? Fill in here:
    console.log("not good");
}

//confirm을 이용한 제어문
// This is an example of an if / else statement.

if (12 / 4 === "Ari".length) {
    confirm("Will this run the first block?");
} else {
    confirm("Or the second block?");
}

//비교문 0이여도 True
if(10%2 === 0) {
	//(나머지가 0이니 0 === 0 은 진실임)
    console.log("The first number is even");
} else {
    console.log("The first number is odd");
}

// str 슬라이스
// Be careful with the substring's letter positions!
"wonderful day".substring(3,7);

//str 슬라이스 콘솔로그 응용
console.log("January".substring(0,3));
console.log("Melbourne is great".substring(0,13));
console.log("hamburgers".substring(3));