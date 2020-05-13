//function scoring(score) {
const score = Math.random() * 100

console.log(`点数:＄{score}`)

if (score >= 100) {
    console.log('秀')
} else
if (score >= 60) {
    console.log('良')
} else
if (score >= 13) {
    console.log('不可')
} 
// }