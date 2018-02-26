//이름 찾기

var text =  "Hey, how are you \
doing? My name is Emilye.";
var myName = "Emilye";
var hits= [];

for (var i = 0; i < text.length; i++){ //시작은 0, 변수 text의 글수를 루프한다 40개
    if(text[i] === "E"){ //루프중인 text중 E가 있으면 동작 36에서 찾음
        for (var j = i; j < (myName.length+i); j++){ 
        //변수 j는 걸러진 i의 오브젝트중 하나이다. 
        //j는 변수 myName의 6 + 36번째
            console.log(hits.push(text[j]));//j 를 hits배열에 집어넣는다
        }
    }    
}

if (hits.length === 0){ //만약 hits의 갯수가 0이면
    console.log("Your name wasn't found!") //찾을수 없다
}
else {
    console.log(hits) //이름 출력
}