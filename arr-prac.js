const studentList = [
  "김동주", "이재권", "최대건", "정지은", "임지성"
]
// filter() 의 사용예 추정.
// 해당 배열에서 인덱스와 값을 매개변수로 받고, 이중 반환된 값이 있는 인덱스만 남긴 배열을 return하는 구문인것으로 보인다. 
// *.filter() 메서드 예제
const kimStudents = studentList.filter( function(student){
  //학생명이 "김"으로 시작하는 학생을 반환하는 콜백함수. forEach와 비슷한 느낌이든다.
  return student.startsWith("김");
})
console.log(kimStudents);
// *.filter() 메서드 + 나머지 값을 가져오는 % 연산
const oddStudents = studentList.filter (function(student, index){
  //인덱스가 2로 나누었을 때 나머지가 0인 인덱스를 반환했다.
  //이 때, 반환하는 값의 경우, 1, 3, 5의 인덱스를 반환한다.
  return index % 2 === 0;
})
console.log(oddStudents);
const threeLetterStudents = studentList.filter(function(student) {
  return student.length === 3;
})
console.log(threeLetterStudents);
//map() 의 사용법 추정
//지정된 배열에서 인덱스 또는 이름을 기준으로 안의 내용을 추가로 수정하는 함수. return으로 수정된 배열을 반환한다.
const studentsWithSuffix = studentList.map( function(student) {
  return student + "님";
})
console.log(studentsWithSuffix);
const upperCaseStudents = studentList.map(function(student){
  return student.toUpperCase();
})
console.log(upperCaseStudents);