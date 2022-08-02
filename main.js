const list = document.querySelector('#product-info1')
const items = document.querySelectorAll('#ballers')
const cancel = document.querySelectorAll('.fa-xmark')
const ballWord = document.querySelectorAll('.word')

// showing the hover X button *hahahahaha*
list.addEventListener('mouseover', function(e){
    if(items && e.target.className === 'word'){
        e.target.nextElementSibling.style.visibility = 'visible'
    }
})
   
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
const addball = document.querySelectorAll('.plus')






















