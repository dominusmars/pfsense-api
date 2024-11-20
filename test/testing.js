class a {
    constructor(a) {
        this.a = a;
    }
}
class b {
    constructor(a) {
        this.a = a
    }
}
class c {
    constructor() {
        this.number = 1;
    }
    add() {
        this.number++;
    }
    log() {
        console.log(this.number)
    }
}



let x = new c()
let y = new a(x)
let z = new b(x)

y.a.add()
z.a.add()
z.a.add()
z.a.add()
y.a.log()

