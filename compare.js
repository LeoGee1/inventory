const incWhite = document.querySelector('.inc-white')
const decWhite = document.querySelector('.dec-white')
const dispWhite = document.querySelector('.disp-white')
let dataW = 1


const dataInputW = (e) =>{
    e.preventDefault()

    const value = document.querySelector('input[type="text"]').value.trim()
    if (value.length === 0 || value.length > 11) {
        return
    }else if (value !== 'white ball') {
        return
    }else if (dataW < 5){
        dataW++
        dispWhite.innerText = dataW
    
    
    // create white elements
    const whiteball = document.createElement('div');
    const ballname = document.createElement('h3');
    const deleteball = document.createElement('i');

    //add text contents
    ballname.textContent = value

    //adding classes
    whiteball.classList.add('balls', 'two');
    deleteball.classList.add('fa-solid', 'fa-xmark')
   
    //append each to each
    whiteball.appendChild(ballname);
    whiteball.appendChild(deleteball);
    list.appendChild(whiteball);
    }   
}

addballs.addEventListener('submit', dataInputW)


// white ball buttton increment
const dataLimitW = () =>{

     if (dataW < 5){
        dataW++
        dispWhite.innerText = dataW
     
     // create white elements
     const whiteball = document.createElement('div');
     const ballname = document.createElement('h3');
     const deleteball = document.createElement('i');

     //add text contents
     ballname.textContent = 'white ball';

     //adding classes
     whiteball.classList.add('balls', 'two');
     deleteball.classList.add('fa-solid', 'fa-xmark');

     //append each to each
     whiteball.appendChild(ballname);
     whiteball.appendChild(deleteball);
     list.appendChild(whiteball)

     }
}
incWhite.addEventListener('click', dataLimitW)

// white ball button decrement 
const decreW = () =>{
    const white = document.querySelector('.two')
            if(dataW > 1){
                dataW--
                dispWhite.innerText = dataW
                let li = white
                li.remove()
            }               
     }
decWhite.addEventListener('click', decreW)

//White ball X decrement
list.addEventListener('click', function(e){

    if(dataW >1 && e.target.className ===  'fa-solid fa-xmark' /**|| e.target.className === 'fa-solid fa-xmark basket'**/){
         dataW--
         dispWhite.innerText = dataW
         e.target.parentElement.style.display = 'none'
    }  
})