const list = document.querySelector('#product-info1');
const items = document.querySelectorAll('#ballers');
const cancel = document.querySelectorAll('.fa-xmark');
const ballWord = document.querySelectorAll('.word');

// showing the hover X button *hahahahaha*
// list.addEventListener('mouseover', function(e){
//     if(items && e.target.className === 'word'){
//         e.target.nextElementSibling.style.visibility = 'visible'
//     }
// })
   
// removing it when not more on hover

//deleting items
list.addEventListener('click', function(e){
    if(e.target.className ===  'fa-solid fa-xmark' || e.target.className === 'fa-solid fa-xmark basket'){
         e.target.parentElement.style.display = 'none'
    }
})
// items list appearance & dissapearance
const page = document.querySelector('#main')
const upper = document.querySelector('#head')

upper.addEventListener('click', function(e){
    if(e.target.className === 'add'){
        e.target.parentElement.nextElementSibling.firstElementChild.style.visibility = 'visible'
    }
})
page.addEventListener('click', function(e){
    if(page && e.target.className === 'fa-solid fa-window-minimize') {
        e.target.parentElement.parentElement.style.visibility ='hidden'
    }
})

// adding elements to the html

const addballs = document.forms['product-add1'] 
// greenball
addballs.addEventListener('submit', function(e) {
    e.preventDefault()

    const value = document.querySelector('input[type="text"]').value.trim()
    if (value.length === 0 || value.length > 11) {
        return
    }else if (value !== 'green ball') {
        return
    }
    
    // create green elements
    const greenball = document.createElement('div');
    const ballname = document.createElement('h3');
    const deleteball = document.createElement('i');


    //add text contents
    ballname.textContent = value
    // hv.textContent = 'high value'

    //adding classes
    greenball.classList.add('balls', 'one');
    deleteball.classList.add('fa-solid', 'fa-xmark')

   
    //append each to each

    greenball.appendChild(ballname);
    greenball.appendChild(deleteball);
    list.appendChild(greenball);
    // e.target.reset
})

// white balls
addballs.addEventListener('submit', function(e) {
    e.preventDefault()

    const value = document.querySelector('input[type="text"]').value.trim()
    if (value.length === 0 || value.length > 11) {
        return
    }else if (value !== 'white ball') {
        return
    }
    
    // create white elements
    const whiteball = document.createElement('div');
    const ballname = document.createElement('h3');
    const deleteball = document.createElement('i');


    //add text contents
    ballname.textContent = value
    // hv.textContent = 'high value'

    //adding classes
    whiteball.classList.add('balls', 'two');
    deleteball.classList.add('fa-solid', 'fa-xmark')

   
    //append each to each

    whiteball.appendChild(ballname);
    whiteball.appendChild(deleteball);
    list.appendChild(whiteball);
    // e.target.reset
})

//basketballs
addballs.addEventListener('submit', function(e) {
    e.preventDefault()

    const value = document.querySelector('input[type="text"]').value.trim()
    if (value.length === 0 || value.length > 11) {
        return
    }else if (value !== 'basketball') {
        return
    }
    
    // create white elements
    const basketball = document.createElement('div');
    const ballname = document.createElement('h3');
    const deleteball = document.createElement('i');
    const hv = document.createElement('h4');

    //add text contents
    ballname.textContent = value
    hv.textContent = 'high value'

    //adding classes
    basketball.classList.add('balls', 'three');
    deleteball.classList.add('fa-solid', 'fa-xmark', 'basket')
    hv.classList.add('high')

    //append each to each
    basketball.appendChild(ballname);
    basketball.appendChild(deleteball);
    basketball.appendChild(hv)
    list.appendChild(basketball);
    // e.target.reset
})

//tennis ball
addballs.addEventListener('submit', function(e) {
    e.preventDefault()

    const value = document.querySelector('input[type="text"]').value.trim()
    if (value.length === 0 || value.length > 11) {
        return
    }else if (value !== 'tennis ball') {
        return
    }
    
    // create white elements
    const tennisball = document.createElement('div');
    const ballname = document.createElement('h3');
    const deleteball = document.createElement('i');


    //add text contents
    ballname.textContent = value
    // hv.textContent = 'high value'

    //adding classes
    tennisball.classList.add('balls', 'four');
    deleteball.classList.add('fa-solid', 'fa-xmark')

   
    //append each to each

    tennisball.appendChild(ballname);
    tennisball.appendChild(deleteball);
    list.appendChild(tennisball);
    // e.target.reset
})

//baseball
addballs.addEventListener('submit', function(e) {
    e.preventDefault()

    const value = document.querySelector('input[type="text"]').value.trim()
    if (value.length === 0 || value.length > 11) {
        return
    }else if (value !== 'baseball') {
        return
    }
    
    // create white elements
    const baseball = document.createElement('div');
    const ballname = document.createElement('h3');
    const deleteball = document.createElement('i');


    //add text contents
    ballname.textContent = value
    // hv.textContent = 'high value'

    //adding classes
    baseball.classList.add('balls', 'five');
    deleteball.classList.add('fa-solid', 'fa-xmark')

   
    //append each to each

    baseball.appendChild(ballname);
    baseball.appendChild(deleteball);
    list.appendChild(baseball);
    // e.target.reset
})

const hidden = document.querySelector('#hidden-list')
const dots = document.querySelector('#hide i')

hidden.addEventListener('click', function(e) {
    if(e.target.className === 'fa-solid fa-ellipsis') {
        e.target.parentElement.parentElement.nextElementSibling.style.display = 'flex'

    }
})
hidden.addEventListener('dblclick', function(e) {
    if(e.target.className === 'fa-solid fa-ellipsis') {
        e.target.parentElement.parentElement.nextElementSibling.style.display = 'none'

    }
})






