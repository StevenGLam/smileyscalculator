let allDivs = document.querySelectorAll('div');
var calcPara = document.createElement("h4");
calcPara.classList.add("red");

let inp = document.getElementById('inp');






allDivs.forEach((div) =>  {
    
div.addEventListener('click', (e)=> {
    let clickCount = 0;
   let btnText1 =  e.target.textContent;    
   let btnText2 =  e.target.textContent;
   let val1;
   let val2;
   let calculationSign;
   let plus = ()=> parseInt(val1) ;
   
    
     
        if(!isNaN(e.target.textContent)){
            
              inp.value +=  parseInt(e.target.textContent);
                  val1 =inp.value ;
                  console.log(val1 );
    
        }

    


    /* switch (e.target.textContent) {
        case '+':
           calculationSign = '+';
           console.log(calculationSign);
            break;
        case '-':
        calculationSign = '-';
        console.log(calculationSign);
            break;
            case '/':
            calculationSign = '/';
            console.log(calculationSign);
                break;


        default:
            text = "Looking forward to the Weekend";
    } */

   else if(isNaN(e.target.textContent) && e.target.textContent !== 'ENTER'){
  
        calculationSign=e.target.textContent;
        inp.value=e.target.textContent;
        console.log(calculationSign);
    } 

/* 
    else if(e.target.textContent){
        let func = document.getElementById('func');
        func.textContent=e.target.textContent;

    } */


    //calcPara.textContent = `The result of ${val1}  ${val2} `;
  
    
    
})
})





/* TEST CODE

let num1 = 5;
let num2 = 6;
let result;
let operation = '-';

let opPlus = document.querySelector('.plus');
let opMinus = document.querySelector('.minus');
let resultSpan = document.querySelector('#resultspan');

let plus = (a,b)=> a + b;
let minus = ()=> num1 - num2;

function activate(){
  if(opPlus.textContent = 'plus'){
    result = plus(num1,num2);
    resultSpan.textContent = result
    
    }
  
  
  }




console.log(divide());

*/