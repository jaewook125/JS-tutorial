//기본적인 while문법

var understand = true;

while(understand){ // 시작
	console.log("I'm learning while loops!"); //구문 실행
	understand = false; // 끝
}

understand = true;

while(understand){
	console.log("I'm learning while loops!");
	//Change the value of 'understand' here!
	understand = 1 < 0; //거짓
}

//3번 반복하는 반복문
count = 0

var loop = function(){
	while(count < 3){ //카운터가 2까진 true
		//Your code goes here!
		console.log("I'm looping!")
		count ++ //카운터 1식증가
	}
};

loop();

//적어도 한번이상 실행되는지 확인 do
var loopCondition = false;

do {
	console.log("I'm gonna stop looping 'cause my condition is " + loopCondition + "!");	
} while (loopCondition);

//while do for 혼합코드
loop = true // 1

while (loop){
    console.log("frist while");
    for (i = loop; i < 3; i++){ // 0은 거짓이므로 1과 2실행 3부터 거짓
        console.log("second for 2 loop") //2번 출력
        }
    loop = false // while 동작 끝
    do {
        console.log('last do while') //do 호출로 적어도 한번 실행
    } while(loop)
}
