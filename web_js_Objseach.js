//리스트를 이용해 매개변수로 표현
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary]; //리스트에 오브젝트를 담고

// printPerson added here
var printPerson = function(person){ //매개변수 이용
    console.log(person.firstName + " " + person.lastName); //매개변수로 텍스트 조합
}
printPerson(contacts[0]); //출력
printPerson(contacts[1]);



//전체목록 출력
var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

var list = function(){
    var contactsLength = contacts.length; //contactsLength은 항목의 갯수
    for (var i = 0; i < contacts.length; i++){ //i는 항목의 갯수보다 크면 중지
        printPerson(contacts[i]); //항목 표시
    }
}


//선형검색 추가
/*Create a search function
then call it passing "Jones"*/
function search(lastName){
    var contactsLength = contacts.length;
    for (var i = 0; i < contacts.length; i++){
        if (contacts[i].lastName === lastName){
            return printPerson(contacts[i]);
        } else {
        }
    }
}
search("Jones");