'use strict'

function outFunc(){
  let outerText = 'outer-text';
  function innerFunc(a){
    let innerText = 'inner-text';
    console.log(outerText+','+a);
  }
  // innerFunc();/중첩일때 일반적으로 내부함수 실행, 외부함수의 영향을 받는다.
  return innerFunc; // 내부함수를 return을 통하여 외부로 노출 closure: 이 경우 외부에서 내부함수 접근 및 매개변수를 받거나 접근할 수 있다.
}

/*설명*/
// outFunc()() == innerFunc()

// innerFunc(){
//    let innerText = 'inner-text';
//    console.log(outerText);
//  }()
/*설명*/

// console.log(outFunc())
// innerFunc();

//const num = new test(); //생성자를 통해서 instance 만들어내는 방식

//클로저 실행 방식 1
// outFunc()('안녕하세요 저는 일반호출 클로저입니다.');

//클로저 실행 방식 2 (생성자)
const closureFunc = new outFunc();
closureFunc('안녕하세요 저는 생성자로 만들어진 클로저 입니다.');

// function testFunc(){
//   return this
// }
//
// console.log(testFunc())
