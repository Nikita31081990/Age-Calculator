function clickOnFocus1(){
    document.getElementById("num1").focus();  
    console.log( document.getElementById("num1"))
}

function clearAll(){
    document.getElementById("num1").value=" "
    document.getElementById("num2").value=" "
    document.getElementById("select").value=" "
    document.getElementById("result").value=" "

}
 

function calculate(){
    const value1= document.getElementById("num1").value
    const value2= document.getElementById("num2").value
    let operation= document.getElementById("select").value
  
    

    let result;
    switch (operation) {
        case "+":
            result = Number(value1) + Number(value2);
            break;
        case "-":
            result =value1 - value2;
            break;
        case "*":
            result = value1 * value2;
            break;
        case "/":
            result = value1 / value2;
            break;
        default:
            alert("Please select an operation.");
    }

    console.log(result)
            
     document.getElementById("result").value=result
     
}


