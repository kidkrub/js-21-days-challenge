(() => {
  // Class vs Prototype
  // Calss use for easily create prototype
  // class Person {

  // }
  // const my = new Person()
  // console.log(my)
  
  // What's Prototype
  // Peototype is object that store function and method
  // const name = 'My'
  // console.log(name.__proto__)
  // const arr = []
  // console.log(arr.__proto__)

  // Prototype Chain
  // const name = 'Me'
  // console.log(name.__proto__)
  // console.log(name.toLocaleString())

  // Extend a prototype
  const name = 'My'
  function sayHello(val) {
    console.log(`Hello ${val}`)
  }
  String.prototype.sayHello = sayHello
  console.log(name.__proto__)
  name.sayHello('World')
})()