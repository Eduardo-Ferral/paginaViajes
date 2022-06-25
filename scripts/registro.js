import { alertSub } from "./index.js"

document.addEventListener("click",(e)=>{
    console.log(e.target);
    if(e.target.matches("#subscribete1"))
    {
        let letter=document.getElementById("newsletter1").value;
        
        if(letter.value!=""||btn_subscribete.value!=null||btn_subscribete.value!=undefined){
            console.log(`susbscribete  ${letter}`);
        alertSub('Gracias por sudscribirte te enviaremos informacion especiala tu correo', 'success');
        }
    }
})

