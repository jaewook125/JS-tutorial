//성별 맞추기 게임
var user = prompt("you gender? yes or no").toLowerCase(); //소문자로만 판단

switch (user){
    case "yes": //대답이 yes시 실행
    var str = prompt("man or girl? another?").toLowerCase(); //남자나 여자냐
    var trans = prompt("you transgender?").toLowerCase(); //트랜스젠더이냐
        if (str === "man" && trans === "no"){ //남자이고 트렌스젠더가 아니면
            console.log("you man!");
        } else if (str === "girl" && trans === "no"){ //여자이고 트렌스젠더가 아니면
            console.log("you girl!");
        } else if (str === "another" && trans === "yes"){ //둘다 아니고 트렌스젠더이면
            console.log("you transgender!");
        } else { //조건에 부합하지않을시,
            console.log("you not human!!");
        }
    break;

    case "no": //대답이 no시 대답
    var no = prompt("you not gender? yes or no").toLowerCase(); // 성별이 있나없나
    var another = prompt("you animal? yes or no").toLowerCase(); // 동물인가 아닌가
    if (no === "yes" || another === "yes" ){  //성별이 있거나 없거나 동물이거나 아니거나
        console.log("you lier!!") //거짓말이니
    } 
    console.log("you animal");
    break;
    
    default: //그 외 대답
    console.log("no talk..");
}