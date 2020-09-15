
function printFibonatchi(limitNumber) {
    var num1=0; 
    var num2=1; 
    var sum;
    if(limitNumber== undefined)
    {
        limitNumber =10;
    }
    setTimeout(()=>{
        console.log(num2);
        for (i = 0; i < limitNumber; i++)
        {
            sum=num1+num2; 
            num1=num2; 
            num2=sum;
            console.log(num2);
        }
    },100)
}

printFibonatchi(15);

function EnevNumberOnly(arr) {
    
    let evenArr= new Array();
    let indexA=0;
    let indexB=0;
    evenArr[indexB]= new Array();
    for(let j =0; j< arr.length; j++)
    {
        evenArr[indexA] = new Array();
        indexB=0;
        if(arr[j].every(checkIfAllArrEven))
        {
            evenArr[indexA][indexB] = arr[j];
        }
        else{
            for(let k =0; k< arr[j].length ; k++)
            {
                if(arr[j][k]%2==0)
                {
                    evenArr[indexA][indexB] = arr[j][k];
                    indexB++;
                }
            }
        }
        indexA++;
        
        
    }
    console.log(evenArr);
    
}

function checkIfAllArrEven(number) {
    return number%2 == 0;
  }

let arr = [[1, 2, 3], [4, 6, 9]]  ;
EnevNumberOnly(arr);