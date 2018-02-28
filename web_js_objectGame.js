//객체를 찾는 게임
var friends = {}; //리터럴 표기법
friends.bill = { //빌 오브젝트
    firstName : "Bill",
    lastName : "wow",
    number : '112-123-155',
    address : ['newyork','road','123']
};
friends.steve ={ //스티브 오브젝트
    firstName : "Steve",
    lastName : "ho~~",
    number : '12345-124',
    address : ['busan','dongpang','234']
};

var list = function(obj){ //오브젝트중 key값만 보여줌 friend.(key)
for (var key in obj){
    console.log(key);
}
};

var search = function(name) { //이름을 입력해
  for(var key in friends) {
    if(friends[key].firstName === name) { //첫번째 이름과 search의 이름이 일치하면
      console.log(friends[key]);
      return friends[key]; //key를 리턴
    }
  }
};
list(friends); //list함수 호출
search("Bill"); //search함수 호출