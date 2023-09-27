let wrap = document.createElement('div')
let h1 = document.createElement('h1')
let form = document.createElement('form')
let hr = document.createElement('hr')
let buy = document.createElement('buy')
let input = document.createElement('input')
let button = document.createElement('button')
let right = document.createElement('div')
let left = document.createElement('div')
let h3 = document.createElement('h3')
let p = document.createElement('p')
let button_left = document.createElement('button')
let button_img = document.createElement('img')


wrap.classList.add('wrap')
h1.classList.add('h1')
h1.innerHTML = "Todo List"
form.classList.add('form')
buy.classList.add('buy')
input.classList.add('input')
button.classList.add('button')
button.innerHTML = "Add"
right.classList.add('right')
left.classList.add('left')
h3.classList.add('h3')
h3.innerHTML = "buy milk"
p.classList.add('p')
p.innerHTML = "18:44"
button_left.classList.add('left_bt')

button_img.src = "./img/iks.svg"




let body = document.body

body.append(wrap)
wrap.append(h1, form, hr, buy,)
form.append(input, button)

input.name = "titel"

buy.append(right, left)
right.append(h3, p)
left.append(button_left)
button_left.append(button_img)



/* form.onsubmit = (event) => {
    event.preventDefault();
    
    let user = {}

   
        let fm = new FormData(form)
        fm.forEach((value, key) => {
        user[key] = value
    })
    

    
    
    console.log(user);
} */

function real(elemnt) {
    let time = new Date(),
        hours = time.getHours(),
        minutes = time.getMinutes()
    elemnt = hours + ":" + minutes

    return (elemnt)
}
 
form.onsubmit = (event) => {
    event.preventDefault()

    let user = {
        id: Math.floor(Math.random() * 11),
        isDone: false,
        time: real(),
    }

    let val = new FormData(form)

    if (input.value.length === 0) {
    } else {
        val.forEach((value, key) => {
            user[key] = value
        })
        console.log(user);
    }
}

