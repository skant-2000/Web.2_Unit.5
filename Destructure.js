//1
var obj1 = {  name: 'masai', password: 'admin@123', hostname:'masaischool', client: 'chrome' }
var { name, password, ...otherData } = obj1

console.log(name, password)

//2
let obj2 = {  name: 'masai', address: {  pincode: 560095 }  }
let {address: {pincode: pin}} = obj2

console.log(pin)

//3
let arr1 = [ 100, 200, 500, 600 ]
let [a,b, ...rest] = arr1
console.log(a,b)

//4
let arr2 = [ 100, [  50, 60, 70  ]]
let [a1,b1] = arr2
let [b2, ...rest2] = b1

console.log(b2)

//5
let x = [  1, { arr: [ 1, 2, 3 ] } ]
let [x1, xObj] = x
let { arr } = xObj
let [q,w, ...other] = arr

console.log(q,w)