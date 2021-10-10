// ---------------------Fibonacci sequence--------------------------

function Fibonacci(){

    let n1 = 0, n2 = 1, nextTerm;

    for (let i = 1; i <= 20; i++) {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }

    console.log('Fibonacci Series:');
}

// -----------------------squares of numbers--------------------

function squares(number){


    for(let i=1 ; i <= number ; i++){
        
     console.log(i + " squares = " + i*i);
    }   
}

//-----------------------odd numbers------------------------------

function oddNumbers(number){


    for(let i=1 ; i <= number ; i++){
        
        if(i %2 != 0){
        console.log(i);
        }
    }
}

//---------------------Multiplication table----------------------

function towD(){

    let result = '\n';
    for (let i = 1; i < 6; i++) {
        for (let j = 1; j < 11; j++) {
            result += (i*j) + ' ';
        }
     console.log(result += '\n');
}

}

//-------------------power of 2---------------------------------

function powerOfTwo(number){

    if (number == 0) 
    return 0; 
        while (number != 1) 
        { 
            if (number%2 != 0) 
                return 0; 
                number = number/2; 
        } 

            return 1; 

    
}