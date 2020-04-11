(() => {
    // Lixical scope & Dynamic scope
    // function printName() {
    //     console.log(this)
    // }

    // printName()

    // How to know what is "this"?
    // function printName() {
    //     console.log(this)
    //     console.log(`My name is ${this.name}`)
    // }

    //1 Invoker object
    // const sam = {name: 'sam', printName}
    // const my = {name: 'my', printName}

    // sam.printName()
    // my.printName()
    // printName()

    //2 Global object (window, global)
    // name = 'Global'
    // printName()

    // 3 Constructor function
    // function Person(name) {
    //     this.name = name
    //     this.printName = printName
    // }

    // const my = new Person('My')
    // my.printName()

    // 3 call(), apply(), bind()
    // function printName(nationality, city) {
    //     console.log(this)
    //     console.log(`My name is ${this.name}, I'm ${nationality} and am living in ${city}`)
    // }

    // function Person(name, nationality, city) {
    //     this.name = name
    //     this.nationality = nationality
    //     this.city = city

    //     printName(this.nationality, this.city)
    //     printName.call(this, this.nationality, this.city)
    //     printName.apply(this, [this.nationality, this.city])

    //     const printMy = printName.bind(this)
    //     printMy(this.nationality, this.city)
    // }

    // const my = new Person('my', 'thai', 'bangkok')
})()