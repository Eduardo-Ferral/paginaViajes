console.log("estamos en sesion");
let enlace=document.getElementById("enlace_Prueba");
let btn_subscribete=document.querySelector("#subscribete1");
let div_suscribete=document.getElementById("div_subscribete");
//let correo1=document.getElementById("correo").value;
//let password1=document.getElementById("Password1").value;
let btn_enviar=document.getElementById("btm_entrar");
let navSesion=document.getElementById("navSesion");
let input_correo=document.getElementById("newsletter1").value
const usuarios=[{correo:"nego0300@gmail.com",password:"12345678",nombre:"eduardo"}
,{correo:"david@gmail.com",password:"87654321",nombre:"David"}
,{correo:"lalo@gmail.com",password:"56781234",nombre:"lalo"}];


console.log(usuarios);
usuarios.push({correo:"batman",password:"10111213",nombre:"haniel"});
console.log(usuarios);

/****************************************************** */
document.addEventListener("DOMContentLoaded",(e)=>{
    console.log("entre al escuchador del Doom");
    console.log(e.target);
    if(localStorage.getItem("sesion")==="active"){
        console.log("entre al if del DOM");
    let title=document.getElementById("title-sesion");
    title.innerHTML=`Sesion Abierta`;
    navSesion.innerHTML=`Cerrar Sesion`;
    }
    
   
})
/******************************************* */
document.addEventListener("click",(e)=>{
    console.log(e.target)  ;
let correo1=document.getElementById("correo").value;
let password1=document.getElementById("Password1").value;
    if(e.target.matches("#btm_entrar")){
        e.preventDefault();
        console.log("precionaste el boton");
        if(allowToEnter(correo1,password1)){
            OpenSesion();  
        } 
        
    }
    if(e.target.matches("#navSesion")){
        e.preventDefault();
        if(localStorage.getItem("sesion")==="active")
        {
            closeSesion();
        }
      }
      if(e.target.matches("#subscribete1")){
        console.log("estamos en ventana");
        alert('Gracias por sudscribirte te enviaremos informacion especiala tu correo', 'success');
        console.log("estamos en ventana");
    }

})
function allowToEnter(email,passw)
{
    let validaUsuario=usuarios.some((el)=>{
        return el.correo===email && el.password===passw;
      } )    
      console.log(`*******************${email}`);
      console.log(validaUsuario);
      return validaUsuario;
      
}
function OpenSesion(){
    
    localStorage.setItem("sesion","active");
    let title=document.getElementById("title-sesion");
    title.innerHTML=`Sesion Abierta`;
    navSesion.innerHTML=`Cerrar Sesion`;


}
function closeSesion(){
    localStorage.setItem("sesion","not-active");
    let title=document.getElementById("title-sesion");
    title.innerHTML=`iniciar Sesion`;
    navSesion.innerHTML=`Iniciar sesion`;
    
}


    function alert(message, type) {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = [
          `<div class="alert alert-${type} alert-dismissible" role="alert">`,
          `   <div>${message}</div>`,
          '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
          '</div>'
        ].join('')
      
        div_suscribete.append(wrapper);
      }
      
