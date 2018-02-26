//드래곤 죽이기게임
var slaying = true; //유저
var youHit = Math.floor(Math.random()*2); //0또는 1이 출력
var damageThisRound = Math.floor(Math.random()*5 + 1); //1~5까지 출력
var totalDamage = 0;

while (slaying){ //생존한 유저
    if (youHit){ //1이 출력시
        totalDamage += damageThisRound; //대미지가 1식 증가
        console.log("hit " + damageThisRound); //때린 횟수 출력
        if (totalDamage >= 4){ // 대미지가 4보다 크거나 같으면 드래곤죽임
            console.log("dragon's dead");
            console.log("You win");
            slaying = false; //while 중단
        } else { //4보다 크거나 같지않으면 1과 0중 하나 출력
          youHit = Math.floor(Math.random() * 2); //1출력시 히트 누적
        }
    } else {
        console.log("You lost"); //youHit가 0일경우 유저 사망
        slaying = false; //사망 후 중단
    }

}