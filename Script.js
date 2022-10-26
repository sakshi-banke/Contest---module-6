

function validate(){
    
    let fullName = document.getElementById('full-name').value 
    let gender = document.getElementById('gender').value
    let swimming = document.getElementById('swimming').checked
    let readingNovel = document.getElementById('reading-novel').checked
    let dancing = document.getElementById('dancing').checked
    let singing = document.getElementById('singing').checked
    let error = false

if(fullName.length >= 5 && fullName.includes(' ') ){
    document.getElementById('full-name-valid').style.display = 'block'
    document.getElementById('full-name-invalid').style.display = 'none'
    
}else{
    document.getElementById('full-name-invalid').style.display = 'block'
    document.getElementById('full-name-valid').style.display = 'none'
    error = true  
}


if(gender != 'None'){
    document.getElementById('gender-valid').style.display = 'block'
    document.getElementById('gender-invalid').style.display = 'none'
}else{
    document.getElementById('gender-invalid').style.display = 'block'
    document.getElementById('gender-valid').style.display = 'none'
    error = true
}

if(swimming  ||readingNovel || dancing  ||  singing){
    document.getElementById('hobbies-valid').style.display = 'block'
    document.getElementById('hobbies-invalid').style.display = 'none'
}else{
    document.getElementById('hobbies-invalid').style.display = 'block'
    document.getElementById('hobbies-valid').style.display = 'none'
    error = true
}
let intro= 'Hobbies of ' + fullName  + ' (' + gender +') ' +'are ' 
     
if (swimming){
    intro =  intro + 'swimming '
 }
 if (readingNovel){
    intro =  intro + 'reading novel '
 }
 if (dancing){
    intro =  intro + 'dancing '
 }
 if (singing){
    intro =  intro + 'singing '
 }
 if (!error){
  
   alert(`${intro} !`)
    document.getElementById('registration-form').reset()


    let validFeedbacks = document.getElementsByClassName('valid-feedback')
    for(let i = 0; i < validFeedbacks.length; i++) {
        validFeedbacks[i].style.display = 'none'
    }

    let invalidFeedbacks = document.getElementsByClassName('invalid-feedback')
    for(let i = 0; i < invalidFeedbacks.length; i++) {
        invalidFeedbacks[i].style.display = 'none'
    }
 }


}

