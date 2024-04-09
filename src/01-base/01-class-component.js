// class Test {
//   constructor() {
//     this.a = '1';
//   }
//   testa() {
//     console.log("testa");
//   }
  
// }
// class ChildTest extends Test {
//   testb() {
//     console.log("testb");
//   }
// }
// var obj = new Test();
// var childObj = new ChildTest();
// obj.testa();
// console.log(obj.a);
// childObj.testb();
// childObj.testa();
// console.log(childObj.a);

import React from 'react'
class AppClass extends React.Component {
  render() {
    return (
      <div>hello class Component</div>
    )
  }
}
export default AppClass