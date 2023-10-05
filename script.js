let result=document.getElementById("display");

let appendToDisplay=(number)=>{
    result.value= result.value+ number;
}

let calculateResult=()=>{
    try{
        result.value=eval(result.value)   
    }
    catch(e){
        alert("Invalid Input");
    }
}

function clearDisplay(){
    result.value=" ";
}