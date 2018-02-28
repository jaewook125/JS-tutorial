//불린표현법
var answer = (((3 * 90) === 270) || !(false && (!false)) || "bex".toUpperCase() === "BEX");

console.log(answer);// 셋중에 하나만 진실일시 true

//표현법2
// 8의 배수인가?
var multiplesOfEight = [8,16,24,32,40,58];

// 배열의 숫자가 참이 아닌지 테스트
// 8의 배수. 배수가 아니면 false
var answer = multiplesOfEight[5] % 8 !== 0;

// 1~20까지 3과 5을 찾고 3과 5의 공배수 찾는 제어문
for (var i = 1; i < 21; i++){ //1부터 20까지 출력
    if (i % 3 === 0 && i % 5 === 0){ 
    //3을 나눠서 0이 나오거나 그리고 5를 나눠서 0이 나오면 진실 
        console.log("FizzBuzz");    
    } else if (i % 3 === 0) {
    // 3을 나눠서 0이 나오면 출력	
        console.log("Fizz");
    } else if (i % 5 === 0){
    // 5를 나눠서 0이나오면 출력
        console.log("Buzz")    
    } else {
    // 아니면 남는 숫자 출력
        console.log(i);
    }
    
}
//switch를 이용한 영화찾기
var getReview = function (movie) {
    switch(movie){
        case "Toy Story 2":
        return "Great story. Mean prospector."
        break;
        
        case "Finding Nemo":
        return "Cool animation, and funny turtles."
        break;
        
        case "The Lion King":
        return "Great songs."
        break;
        
        default:
        return "I don't know!"
    }
};
