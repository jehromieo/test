const username = document.getElementById('username')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const button = document.getElementById('button')
const lin = document.getElementById('link')

button.addEventListener('click' ,()=>{
    let user = username.value
    let info = {
        passwordI : password.value,
        confirms : password2.value,
    }
    if(user == ''){
        alert('nog')
        lin.removeAttribute('href')
    }
    // if(password.value != password2.value){
    //     alert("Passwords don't match now")
    //     lin.removeAttribute('href')
    // }
    if(password.value == password2.value) {
        localStorage.setItem(`${user}`, JSON.stringify(info))
        lin.setAttribute('href',"login.html")
    }

})