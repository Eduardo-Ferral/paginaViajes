console.log("buenos dias hoy sere el que te atienda");

let button_cotizar=document.getElementById("cotizar");
let container=document.getElementById("registro");

let button_enviar=document.getElementById("enviarInfo");

document.addEventListener("click",(e)=>{
    console.log(e);
    console.log(e.target);
    let validaOrigen=document.querySelector("#validaOrigen").value;
    let validaDestino=document.querySelector("#validaDestino").value;
    let validaBoletos=document.querySelector("#validaBoletos").value;
    let NumDias=document.getElementById("validaHospedaje").value;
    
    if(e.target.matches("#cotizar")){
        
        validarInformacion(validaOrigen,validaDestino,validaBoletos,NumDias)  
       
    }
})


function validarInformacion(origen,destino,boletos,dias){
    console.log("estoy en validacion");
    if(origen==""){ 
        console.warn("Noingresaste Ciudad de Origen");
    return; }
    if(destino==""){
     console.warn("Noingresaste Destino");
    return; }
    if(boletos<= 0 ||validaBoletos== undefined ||validaBoletos == null){ 
        console.warn("Numero no valido");
    return; }
    if(dias<= 0 ||validaBoletos== undefined ||validaBoletos == null){
         console.warn("numero no valido"); 
    return; }

    loadInfotmation();
    setTimeout(() => {
        removeElement("charge")
        Cotizar(origen,destino,boletos,dias);
    },3000);
    button_enviar.disabled=false;
}
function loadInfotmation(){
    let loading=document.createElement("div");
    loading.setAttribute("role","status");
    loading.setAttribute("id","charge");
    loading.classList.add("spinner-border");
    loading.classList.add("text-primary");
    loading.classList.add("row");
    loading.classList.add("align-items-center");
    let spanL=document.createElement("span");
    spanL.classList.add("visually-hidden");
    spanL.innerHTML="Loading...";
    loading.appendChild(spanL);
    container.insertAdjacentElement("beforeend",loading);
}
function removeElement(id){
    let element=document.getElementById(id);
    return element.parentNode.removeChild(element);
}

function Cotizar(origen,destino,boletos,dias){
    console.log("estoy en cotizacion");
    let newP=document.createElement("p");
    newP.classList.add("newElementP");
   newP.innerHTML=` 
   <div class="container color_grey">
    <h3 class="centrado newFont" style="color:blue ;"> Este es tu ticket </h3>
    <hr>
    <div class="body-ticket" >
    <p>ciudad Origen:  ${origen}</p>
    <p>ciudad Destino:  ${destino}</p>
    <p>ciudad Boletos:  ${boletos}</p>
    <p>ciudad Boletos:  ${dias}</p>
    <p class="text-ri">ciudad precio:  $10000</p>
    </div>
    
</div>
   ` ;
    container.insertAdjacentElement("beforeend",newP);
    //container.insertAdjacentElement("beforeend",html);
}
let a="hey"
function prueba(){
    if(1==1){ 
        console.log("prueba se esta ejecutando");
        return true}
    if (a=="hey") {
        return false;
    }
}

