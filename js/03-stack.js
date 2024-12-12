/**
 * - Стек викликів
 * - Порядок виконання
 */
//!======================================================

function foo1() {
  console.log('start1');
  foo2();
  console.log('end1');
}
function foo2() {
  console.log('start2');
  foo3();
  console.log('end2');
}
function foo3() {
  console.log('start3');
  foo4();
  console.log('end3');
}
function foo4() {
  console.log('start4');
  console.log(test);
  console.log('end4');
}

//!======================================================

// function foo(i) {
//   console.log(i);
//   foo(i + 1);
// }

// foo(0);

//!======================================================

// function fnA() {
//   console.log("fnA execution");
// }

// function fnB() {
//   console.log("fnB execution");
// }

// function fnC() {
//   console.log("fnC execution");
// }

// console.log("Before fnA execution");
// fnA();
// console.log("After fnA execution");

// console.log("Before fnB execution");
// fnB();
// console.log("After fnB execution");

// console.log("Before fnC execution");
// fnC();
// console.log("After fnC execution");
