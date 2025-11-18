function legalAge(age){
    if(age >= 18){    // logical operator
        console.log("You are an adult");

    }else{
        console.log("You are not an adult");

    }
}

//legalAge(12);

function computeGrade(grade){
    
    if(grade >= 94.5){
        console.log("1.00")
    }else if(grade >= 91.5){
        console.log("1.25")
    }else if(grade >= 89.5){    
        console.log("1.50")
    }else if(grade >= 86.5){
        console.log("1.75")
    }else if(grade >= 84.5){
        console.log("2.00")        
    }else{
        console.log("Not within the transmutation");
    }
}

//computeGrade(87)


function login(username,password){

    if(username === "gwapoko"){

        
        if(password === 12345){
            console.log("Welcome User")
        }else{
            console.log("Invalid Username and Password")
        }
        

    }else{
        console.log("Not listed, create an account?");
    }
}

login("gwapoko",12345)

function ticketPrice(age){
    if(age < 18){
        if(age < 5){
            console.log("Free entrance for 5 below")
        }else{
            console.log("Ticket Price: Children Price")
        }
    }else{
        if(age >= 60){
            console.log("Ticket Price: Senior Discount")
        }else{
            console.log("Ticket Price: Adult Price")
        }
    }
}


ticketPrice(41)