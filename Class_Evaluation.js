class Rectangle {

    constructor(edge1, edge2){
        this.side1 = edge1
        this.side2 = edge2
    }

    Area() {
        return (this.side1*this.side2)
    }
}

class Square extends Rectangle {

    constructor(edge){
        this.side = edge
        super(edge, edge)
    }

    getPerimeter(){
        return this.side*4
    }
}

let s = new Square(6)

console.log(s.Area())
console.log(s.getPerimeter())