//문자열,숫자 배열 호출
var junk = ["wook",'zz', 11, 12];
console.log(junk);

//배열 4번째 호출
var junkData = ["Eddie Murphy", 49, "peanuts", 31];
console.log(junkData[3]);

//배열과 for의 조합
var cities = ["Melbourne", "Amman", "Helsinki", "NYC","zz"]; //5개의 배열

for (var i = 0; i < cities.length; i++) { //i 는 1식 더한다 cities.length의 끝까지
    console.log("I would like to visit " + cities[i]);
}

//배열과 for의 조합2
var names = ['man','good','oh','st','humm']; //5개의 배열

for (i = 0; i < names.length; i++){ //i는 1식 더해진다 names.length의 끝까지
    console.log("I know someone called " + names[i])    
}