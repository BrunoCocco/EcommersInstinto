const boton = document.getElementById("clickFormLogin");
boton.addEventListener("click", ()=>{
    console.log("click")
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(name,email,password)
})