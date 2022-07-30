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

//removing the items
list.addEventListener('click', function(e){
    if(e.target.className ===  'fa-solid fa-xmark'){
         e.target.parentElement.style.display = 'none'
    }
})