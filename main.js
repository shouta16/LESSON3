const num = Math.random()



// console.log(num > 0.5)
//if(num > 0.5) {
   // console.log('大きめ')
//}　else {
   // console.log('小さめ')
//}

//console.log(`数: ${num}`)



// if() {
   //  console.log('truthy')
// } else {
//  console.log('falsy')
// }


const a = 2
const b = 3
const c = 4
const d = 5

console.log(a === b)
console.log(a !== b)
console.log(a < b)
console.log(a <= b)
console.log(a > b)
console.log(a >= b)


console.log(a === b && c === b)
console.log(a === b || c === b)
console.log(!(a === b))


console.log(1 === "1")
console.log(1 == "1")

const score = Math.random() * 100

console.log(`得点: &{srore}`)

if(score >= 30) {
    console.log('可')
} else
if(score >= 90) {
    console.log('秀')
} else 
if(score >= 75) {
    console.log('優')
} else
if(score >= 60) {
    console.log('良') 
} else {
    console.log('不可')
}

//for(let i = 0; i < 10; i++) {
   // console.log(i)
//}

let s = 2

while (s < 100000) {
    console.log(s)
    s = s * s
}

const friends = ['サーバル', 'フェネック', 'アライグマ']

friends.forEach((friends) => {
    console.log(friends)
})

function applyTax(price) {
    const result = price * 0.1
    return result
}
const priceApplyTax = 1000 + applyTax(1000)
console.log(priceApplyTax)

