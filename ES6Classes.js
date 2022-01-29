class Shape {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    Area() {
        return this.width*this.height
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super(width, height)
        // this.width = width
        // this.height = height
    }

    Perimeter() {
        return (this.width + this.height)*2
    }
}

class Square extends Shape {
    constructor(side) {
        super(side, side)
    }

    Perimeter() {
        return this.side*4
    }
}

var R = new Rectangle(2,3)
var S = new Square(2)

console.log(R.Perimeter())
console.log(S.Area())