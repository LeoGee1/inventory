    const cancel = document.querySelectorAll('.fa-xmark');
    const ballWord = document.querySelectorAll('.word');
    const head = document.querySelector('#product-head1');
    const list = document.querySelector('#product-info1');


   

    // head.addEventListener('click', (e)=>{
    //     if(e.target.className === 'wrapper'){
    //         e.target.firstElementChild.firstElementChild.style.visibility = 'hidden'
    //     }
    // })

    const page = document.querySelector('#main');
    const upper = document.querySelector('#head');


    upper.addEventListener('click', (e) => {
            if (e.target.className === 'add') {
                e.target.parentElement.nextElementSibling.firstElementChild.style.visibility = 'visible';
            }
        });
    page.addEventListener('click', function(e){
        if(e.target.className === 'fa-solid fa-window-minimize') {
            e.target.parentElement.parentElement.style.visibility ='hidden'    
        }
    });
    
   

    // adding elements to the html

    const addballs = document.forms['product-add1'];
    // greenball input increment
    const incGreen = document.querySelector('.inc-green');
    const decGreen = document.querySelector('.dec-green');
    const disGreen = document.querySelector('.disp-green');
    let dataG = 1;


    const dataInputG = (e) =>{
        e.preventDefault();

        const value = document.querySelector('input[type="text"]').value.trim();
        if (value.length === 0 || value.length > 11) {
            return
        }else if (value !== 'green ball') {
            return
        }else if (dataG < 5){
            dataG++;
            disGreen.innerText = dataG;
        
        
        // create green elements
        const greenball = document.createElement('div');
        const ballname = document.createElement('h3');
        const deleteball = document.createElement('i');

        //add text contents
        ballname.textContent = value;
        // hv.textContent = 'high value'

        //adding classes
        greenball.classList.add('balls', 'one');
        deleteball.classList.add('fa-solid', 'fa-xmark');
    
        //append each to each
        greenball.appendChild(ballname);
        greenball.appendChild(deleteball);
        list.appendChild(greenball);

        localStorage.setItem('disBaseCountGreenball', dataG);    
        }  
    };
    
    addballs.addEventListener('submit', dataInputG);

    const dataLimitG = () =>{
        if (dataG < 5){
            dataG++
            disGreen.innerText = dataG
        
        // create green elements
            const greenball = document.createElement('div');
            const ballname = document.createElement('h3');
            const deleteball = document.createElement('i');

            //add text contents
            ballname.textContent = 'green ball';

            //adding classes
            greenball.classList.add('balls', 'one');
            deleteball.classList.add('fa-solid', 'fa-xmark');

            //append each to each
            greenball.appendChild(ballname);
            greenball.appendChild(deleteball);
            list.appendChild(greenball);

            localStorage.setItem('disBaseCountGreenball', dataG);
            }
    };

    const disBaseCountGreenball = localStorage.getItem('disBaseCountGreenball')
    if (disBaseCountGreenball !== null){
        for (let i = 1; i < parseInt(disBaseCountGreenball, 10); i++) {
            dataLimitG();
        };
    };

    incGreen.addEventListener('click', dataLimitG);

    // green ball button decrement 
    const decre = () =>{
        const green = document.querySelector('.one')
            if(dataG > 1){
                dataG--;
                disGreen.innerText = dataG;
                let li = green;
                li.remove();

                localStorage.setItem('disBaseCountGreenball', dataG);
            }               
        };
    decGreen.addEventListener('click', decre);

    //green ball X decrement
    list.addEventListener('click', function(e){
        if(dataG > 1 && e.target.className ===  'fa-solid fa-xmark' /**|| e.target.className === 'fa-solid fa-xmark basket'**/){
            dataG--;
            disGreen.innerText = dataG;
            e.target.parentElement.style.display = 'none';

            localStorage.setItem('disBaseCountGreenball', dataG);
        }  
    });


    // white balls
    const incWhite = document.querySelector('.inc-white');
    const decWhite = document.querySelector('.dec-white');
    const dispWhite = document.querySelector('.disp-white');
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

            localStorage.setItem('disBaseCountWhiteball', dataW);
        }   
    };

    addballs.addEventListener('submit', dataInputW);


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

            localStorage.setItem('disBaseCountWhiteball', dataW);
        }
    };
    const disBaseCountWhiteball =  localStorage.getItem('disBaseCountWhiteball');


    incWhite.addEventListener('click', dataLimitW);

    // white ball button decrement 
    const decreW = () =>{
        const white = document.querySelector('.two')
            if(dataW > 1){
                dataW--;
                dispWhite.innerText = dataW;
                let li = white;
                li.remove();
                
                localStorage.setItem('disBaseCountWhiteball', dataW);
            }               
        };
        
    decWhite.addEventListener('click', decreW);

    //White ball X decrement
    list.addEventListener('click', function(e){

        if(dataW > 1 && e.target.className ===  'fa-solid fa-xmark'){
            dataW--
            dispWhite.innerText = dataW
            e.target.parentElement.style.display = 'none'
            localStorage.setItem('disBaseCountWhiteball', dataW);
        }  
    });

    
    if(disBaseCountWhiteball !== null){
        for (let i = 1; i < parseInt(disBaseCountWhiteball, 10); i++) {
            dataLimitW();
        }
    }

    // Basketball
    const incBasket = document.querySelector('.inc-basket');
    const decBasket = document.querySelector('.dec-basket');
    const disBasket = document.querySelector('.disp-basket');
    let dataB = 1;


    const dataInputB = (e) =>{

        e.preventDefault()

        const value = document.querySelector('input[type="text"]').value.trim()
        if (value.length === 0 || value.length > 11) {
            return
        }else if (value !== 'basketball') {
            return
        }else if (dataB < 5){
            dataB++
            disBasket.innerText = dataB
        
        
        // create basket elements
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

        localStorage.setItem('disBaseCountBasketball', dataB);
        }   
    };

    addballs.addEventListener('submit', dataInputB);


    // basketball buttton increment
    const dataLimitB = () =>{

        if (dataB < 5){
            dataB++
            disBasket.innerText = dataB
        
        // create basket elements
        const basketball = document.createElement('div');
        const ballname = document.createElement('h3');
        const deleteball = document.createElement('i');
        const hv = document.createElement('h4');

        //add text contents
        ballname.textContent = 'basketball'
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

        localStorage.setItem('disBaseCountBasketball', dataB);
        }
    };

    const disBaseCountBasketball = localStorage.getItem('disBaseCountBasketball')
    if (disBaseCountBasketball !== null){
        for (let i = 1; i < parseInt(disBaseCountBasketball, 10); i++) {
            dataLimitB();
        };
    };
    incBasket.addEventListener('click', dataLimitB);

    // basketball button decrement 
    const decreB = () =>{

        const basket = document.querySelector('.three')
            if(dataB > 1){
                dataB--;
                disBasket.innerText = dataB;
                let li = basket;
                li.remove();

                localStorage.setItem('disBaseCountBasketball', dataB);
            }               
        };
    decBasket.addEventListener('click', decreB);

    //basketball X decrement
    list.addEventListener('click', function(e){
    
        if(dataB >1 && e.target.className === 'fa-solid fa-xmark basket'){
            dataB--
            disBasket.innerText = dataB
            e.target.parentElement.style.display = 'none'

            localStorage.setItem('disBaseCountBasketball', dataB);
        }  
    });

    // tennis balls
    const incTennis = document.querySelector('.inc-tennis');
    const decTennis = document.querySelector('.dec-tennis');
    const dispTennis = document.querySelector('.disp-tennis');
    let dataT = 1;;


    const dataInputT = (e) =>{
        e.preventDefault();

    const value = document.querySelector('input[type="text"]').value.trim();
        if (value.length === 0 || value.length > 11) {
            return
        }else if (value !== 'tennis ball') {
            return
        }else if (dataT < 5){
            dataT++;
            dispTennis.innerText = dataT;
            
        // create tennis elements
        const tennisball = document.createElement('div');
        const ballname = document.createElement('h3');
        const deleteball = document.createElement('i');


        //add text contents
        ballname.textContent = value;

        //adding classes
        tennisball.classList.add('balls', 'four');
        deleteball.classList.add('fa-solid', 'fa-xmark');

    
        //append each to each

        tennisball.appendChild(ballname);
        tennisball.appendChild(deleteball);
        list.appendChild(tennisball);
        
        localStorage.setItem('disBaseCountBasketball', dataT);
        }
    }
    addballs.addEventListener('submit', dataInputT);


    // tennis ball buttton increment
    const dataLimitT = () =>{

        if (dataT < 5){
            dataT++
            dispTennis.innerText = dataT
        
        // create tennis elements
        const tennisball = document.createElement('div');
        const ballname = document.createElement('h3');
        const deleteball = document.createElement('i');


        //add text contents
        ballname.textContent = 'tennis ball'

        //adding classes
        tennisball.classList.add('balls', 'four');
        deleteball.classList.add('fa-solid', 'fa-xmark')

    
        //append each to each

        tennisball.appendChild(ballname);
        tennisball.appendChild(deleteball);
        list.appendChild(tennisball);

        localStorage.setItem('disBaseCountTennis', dataT);
        }
    };
    incTennis.addEventListener('click', dataLimitT);
    const disBaseCountTennis = localStorage.getItem('disBaseCountTennis')
    if (disBaseCountTennis !== null){
        for (let i = 1; i < parseInt(disBaseCountTennis, 10); i++) {
            dataLimitT();
        };
    };

    // tennis ball button decrement 
    const decreT = () =>{
        const tennis = document.querySelector('.four')
            if(dataT > 1){
                dataT--;
                dispTennis.innerText = dataT;
                let li = tennis;
                li.remove();

            localStorage.setItem('disBaseCountTennis', dataT);
            }               
        };
    decTennis.addEventListener('click', decreT);

    // Tennis ball X decrement
    list.addEventListener('click', function(e){

        if(dataT >1 && e.target.className ===  'fa-solid fa-xmark'){
            dataT--
            dispTennis.innerText = dataT
            e.target.parentElement.style.display = 'none'

            localStorage.setItem('disBaseCountTennis', dataT);
        }  
    });

    // baseball
    const incBase = document.querySelector('.inc-base');
    const decBase = document.querySelector('.dec-base');
    const disBase = document.querySelector('.disp-base');



    const dataInputBB = (e) =>{
        e.preventDefault();

    const value = document.querySelector('input[type="text"]').value.trim()
        if (value.length === 0 || value.length > 11) {
            return
        }else if (value !== 'baseball') {
            return
        }else if (dataBB < 5){
            dataBB++;
            disBase.innerText = dataBB;
            
            // create baseball elements
            const baseball = document.createElement('div');
            const ballname = document.createElement('h3');
            const deleteball = document.createElement('i');


            //add text contents
            ballname.textContent = value;

            //adding classes
            baseball.classList.add('balls', 'five');
            deleteball.classList.add('fa-solid', 'fa-xmark');

        
            //append each to each

            baseball.appendChild(ballname);
            baseball.appendChild(deleteball);
            list.appendChild(baseball);

            localStorage.setItem('disBaseCount', dataBB);

        }
    };
    addballs.addEventListener('submit', dataInputBB);


    // baseball buttton increment
    let dataBB = 1;


    const dataLimitBB = () =>{
        if (dataBB < 5){
            dataBB++;
            disBase.innerText = dataBB;
    
        // create baseball elements
            const baseball = document.createElement('div');
            const ballname = document.createElement('h3');
            const deleteball = document.createElement('i');
        
        
            //add text contents
            ballname.textContent = 'baseball';
        
            //adding classes
            baseball.classList.add('balls', 'five');
            deleteball.classList.add('fa-solid', 'fa-xmark');
        
        
            //append each to each
        
            baseball.appendChild(ballname);
            baseball.appendChild(deleteball);
            list.appendChild(baseball); 
    
            localStorage.setItem('disBaseCount', dataBB);
            }
        };
   
    incBase.addEventListener('click', dataLimitBB);
    const disBaseCount = localStorage.getItem('disBaseCount');

    

    // baseball button decrement 
    const decreBB = () =>{
        const baseball = document.querySelector('.five')
            if(dataBB > 1){
                dataBB--;
                disBase.innerText = dataBB;
                let li = baseball;
                li.remove();
                localStorage.setItem('disBaseCount', dataBB)
            }               
        };
    decBase.addEventListener('click', decreBB);
    
    
    // Baseball X decrement
    list.addEventListener('click', function(e){

        if(dataBB >1 && e.target.className ===  'fa-solid fa-xmark'){
            dataBB--
            disBase.innerText = dataBB
            e.target.parentElement.style.display = 'none'

            localStorage.setItem('disBaseCount', dataBB);
        }  
    });

    if (disBaseCount !== null){
        for (let i = 1; i < parseInt(disBaseCount, 10); i++) {
            dataLimitBB();
        };
    };

    const hidden = document.querySelector('#hidden-list');
    const dots = document.querySelector('#hide i');

    hidden.addEventListener('click', function(e) {
        if(e.target.className === 'fa-solid fa-ellipsis') {
            e.target.parentElement.parentElement.nextElementSibling.style.display = 'flex'

        }
    });
    const level = (e)=>{
        if(e.target.className === 'fa-solid fa-ellipsis') {
            e.target.parentElement.parentElement.nextElementSibling.style.display = 'flex'
        }
    };
    hidden.addEventListener('dblclick', function(e) {
        if(e.target.className === 'fa-solid fa-ellipsis') {
            e.target.parentElement.parentElement.nextElementSibling.style.display = 'none'
        }
    });
