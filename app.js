const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-Box");

function compareValues(sum,luckyNumber){
    if(sum%luckyNumber===0){
        outputBox.innerText ="your birthday is lucky!😍"
    }
    else{
        outputBox.innerText ="your birthday is not lucky😢"
    }

}

function checkBirthDateIsLucky(){
 const dob = dateOfBirth.value;
 const sum=calculateSum(dob);
 compareValues(sum,luckyNumber.value)
}

function calculateSum(dob){
    dob=dob.replaceAll("-",""); 
  let sum=0;
    for(i=0;i<dob.length;i++){
        sum=sum + Number(dob.charAt(i));
    }
    return sum;
}



checkButton.addEventListener('click',checkBirthDateIsLucky)

