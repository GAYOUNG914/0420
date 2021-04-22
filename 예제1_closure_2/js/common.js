'use strict'

function outFunc(x){
  const y = 5;
  function innerFunc(z){
    return x + y + z;// scope(영역)에 의한 노출
  };
  // innerFunc();
  return innerFunc;
}

// outFunc(1);

let makeAdd10 = new outFunc(10);
let makeAdd20 = new outFunc(20);
let makeAdd30 = new outFunc(50);

console.log(makeAdd10(10))
console.log(makeAdd20(10))
console.log(makeAdd30(10))

// 클로저(폐쇄)
/*
1.함수를 중첩으로 사용하여 외부외 단절 시킴
2. return을 사용하여 외부에 함수를 노출, 외부에서 매개변수드을 통하여 내부함수에 접근할 수 있다.
생성자를 통해서 함수를 만들어 공장이다.
class와 유사: 객체의 형태를 제공 -> 내부함수가 그 역할 한다.
*/
