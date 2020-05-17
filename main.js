/*const applyTax = price => price * 0.1

const tax = appl

const from = 'Japan'

const yamada = {
    id: 1,
    lestName: 'yamada',
    firstName: 'taro',
    age: 24,
    country: from
}

Object.keys(yamada).forEach(key => {
    console.log(`My ${key} is ${yamada[key]}.`)
}) */


const users = [
    { 
        id: 1,
        name: 'Taro',
        comments: ['hello', 'world']
    },
    { 
        id: 2, 
        name: 'jiro', 
        comments: ['looks good to me'] 
    },  
    { 
        id: 3, 
        name: 'saburo', 
        comments: ['hi', 'yes'] 
    },
]
const json = JSON.stringify(users)

console.log(JSON.parse(json))

