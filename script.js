var failure = new Audio("audio/failure.mp3")

function checkscore() {
    if (score.value >=70 && score.value <=100){
        result.innerHTML="A-EXCELLENT"
    }
    else if(score.value >=60 && score.value <=69){
        result.innerHTML="B-Very Good"
    }
    else if(score.value >=50 && score.value <=59){
        result.innerHTML="CREDIT"
    }
    else if (score.value >=45 && score.value <=49){
        result.innerHTML="D-Pass"
    }
    else if (score.value >=40 && score.value <=44){
       result.innerHTML="FAIL"
  
    }
    else if (score.value >=0 && score.value <=39){
        failure.play()
        result.innerHTML="YOU ARE FAILURE"
    }
    else if (score.value ==""){
        result.innerHTML="input can not be empty"
    }
    else {
        result.innerHTML="Wrong Input"
    }
    
}