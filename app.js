

let passWord = document.getElementById('pass');
let viewpassWord = document.getElementById('view');



viewpassWord.addEventListener("click", function(){
    if(passWord.type == "password"){
        passWord.type = "text";
        viewpassWord.classList.remove('fa-eye');
        viewpassWord.classList.add('fa-eye-slash');
    }else{
        passWord.type = "password";
        viewpassWord.classList.remove('fa-eye-slash');
        viewpassWord.classList.add('fa-eye');
    }
})