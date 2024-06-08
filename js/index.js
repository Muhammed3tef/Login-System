var btn1=document.getElementById("btn1")
var btn2=document.getElementById("btn2")
var linkOfSign=document.getElementById("linkOfSign")
var linkOfSign1=document.getElementById("linkOfSign1")
var inputName=document.getElementById("inputName")
var inputEmail=document.getElementById("inputEmail")
var inputPassword=document.getElementById("inputPassword")
var requiredInputs=document.getElementById("requiredInputs")
var existing=document.getElementById("existing")
var lastItem=document.getElementById("lastItem")
var arr=[];

//add botton
function addBotton(){
    btn1.classList.add("d-none")
    btn2.classList.replace("d-none","d-block")
    inputName.classList.replace("d-none","d-block")
    linkOfSign.classList.add("d-none")
    linkOfSign1.classList.replace("d-none","d-block")
    requiredInputs.classList.replace("d-block","d-none")
}
//remover botton
function removeBotton(){
    inputName.classList.replace("d-block","d-none")
    btn1.classList.remove("d-none")
    btn2.classList.replace("d-block","d-none")
    linkOfSign.classList.remove("d-none")
    linkOfSign1.classList.replace("d-block","d-none")
    requiredInputs.classList.replace("d-block","d-none")
}
//sign up
btn2.addEventListener("click",function(){
    if((inputEmail.value  && !inputPassword.value)|| (!inputEmail.value  && inputPassword.value)||(!inputEmail.value  && !inputPassword.value)){
        requiredInputs.classList.replace("d-none","d-block")
        clear()
    }else if(inputName.classList.contains("is-valid")&&inputEmail.classList.contains("is-valid")&&inputPassword.classList.contains("is-valid")){
        var person={
            code:inputName.value,
            email:inputEmail.value ,
            password:inputPassword.value
        }
        arr.push(person)
        localStorage.setItem("userLogin",JSON.stringify(arr))
        clear()
    }
    else{
        requiredInputs.classList.replace("d-none","d-block")
    }
})
//login
btn1.addEventListener("click",function(){
    if((inputEmail.value  && !inputPassword.value)|| (!inputEmail.value  && inputPassword.value)||(!inputEmail.value  && !inputPassword.value)){
        requiredInputs.classList.replace("d-none","d-block")
        clear()
    }
    arr=JSON.parse(localStorage.getItem("userLogin"))
    for(var i=0 ;i<arr.length;i++){
        if(inputEmail.value == arr[i].email && inputPassword.value == arr[i].password){
            existing.classList.replace("d-none","d-block")
            lastItem.innerHTML=`
            <h1 class="animate__animated animate__fadeInLeft fw-semibold " id="fontInfo">Hello ${arr[i].code}</h1>
            `;
            lastItem.classList.replace("d-none","d-flex")
            clear()
        }
    }
})
lastItem.addEventListener("click",function(){
    lastItem.classList.replace("d-flex","d-none")
})
//clear
function clear(){
    inputName.value=null
    inputEmail.value=null
    inputPassword.value=null
    inputName.classList.remove("is-valid")
    inputEmail.classList.remove("is-valid")
    inputPassword.classList.remove("is-valid")
}
//validation
function validation(element){
    var regex={
        inputName : /^[A-Za-z ]{5,}$/i,
        inputEmail:/^[A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+@(yahoo|gmail|hotmail).com$/,
        inputPassword : /^[A-Za-z0-9!@#$%^&*]{8,15}$/
    }

    if(regex[element.id].test(element.value)){
        element.classList.add("is-valid");
        element.classList.remove("is-invalid");
    }
    else{
        element.classList.add("is-invalid");
        element.classList.remove("is-valid");
    }
    if(element.value ==""){
        element.classList.remove("is-invalid")
    }
}


