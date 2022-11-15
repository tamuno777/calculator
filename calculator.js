let output = document.getElementById('output');
let data = document.getElementById('data');
let operator = document.querySelector('#operator')
// let subtraction = document.querySelector('#subtraction')
// let multiplication = document.querySelector('#multiplication')
// let divition = document.querySelector('#divition')
// let percentage = document.querySelector('#percentage')
let solution = document.querySelector('#solution')

function display(num){
    output.value += num;

}

function result(){
//    result =( output.value.split(","))
//    result2 ={
//        '+': result.reduce((a,b) => parseFloat(a)+ parseFloat(b)),
//        '-': result.reduce((a,b) => parseFloat(a)- parseFloat(b)),
//        '*': result.reduce((a,b) => parseFloat(a)* parseFloat(b)),
//        '/': result.reduce((a,b) => parseFloat(a)/ parseFloat(b)),
//        '%': result.reduce((a,b) => parseFloat(a)% parseFloat(b))
//    }
   
    try{
        output.value = eval(output.value);

    }
    catch(e){
        output.innerHTML = 'error'
    }

    // result = output.value.split("")
    // let a = parseFloat(result)
    // let b = result[result.length-1]


    
}




function clr(){
    output.value ="";
}
function del(){
    output.value = output.value.slice(0,-1);
}