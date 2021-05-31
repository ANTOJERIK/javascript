let a = 1
let b = 2


setTimeout(() => {
    console.log('Async')
},2000)

fetch('/').then(() => {
    console.log('fetch')
})

console.log('Synchronous')

console.log(a)
console.log(b)