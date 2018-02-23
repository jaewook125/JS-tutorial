//제어문

let isSoccerFan = false;
//변수 할당
if (isSoccerFan === true) {
	//true면 골인
  console.log('Goal!')
} else {
	//아니면 노골
  console.log('NoGoal!')
}

//참 거짓 값
let wordCount = 1;
//1은 true 0은 false 
if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '123';
//문자열이 한개라도 있으면 true, 빈값이면 false
if (!favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
  //! 는 허위(false) 제공연산자
} else {
  console.log('This string is definitely empty.');
}

//비교연산자

let hungerLevel = 10;
if (hungerLevel > 7){
	//비교 연산
  console.log('Time to eat!')
} else {
  console.log('We can eat later!')
}