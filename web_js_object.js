//기본 객체사용 예제

var phonebookEntry = {};

phonebookEntry.name = 'Oxnard Montalvo';
phonebookEntry.number = '(555) 555-5555';
phonebookEntry.phone = function() {
  console.log('Calling ' + this.name + ' at ' + this.number + '...');
};

phonebookEntry.phone();

//리터럴 표기법(선호)
var me = {
    name: 'jaewook',
    age:  26,
    
};
//기본 오브젝트 표기법
var me = new Object();
me.name = "name";
me.age = 26;

//리터럴 표기법 2
var object1 = {
    name : "wook"
};
var object2 = {
    fruit : "apple"
};
var object3 = {
    python : 'django'
}

//배열에 티러럴 표기법
var myArray = [10, true, "str", {}]

//배열에 기본 오브젝트 넣기
var newArray = [[1,2,3,4,5,6,7,8,9], [myArray = [me]]]; 
var me = new Object();
me.name = "Frantz";

//리터럴 표기법에 배열 넣기
var myObject = {
  name: 'Eduardo',
  type: 'Most excellent',
  // Add your code here!
  interests : ['apple','dog']
};