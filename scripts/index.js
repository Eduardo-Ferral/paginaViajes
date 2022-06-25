let btn_subscribete=document.querySelector("#subscribete1");
let div_suscribete=document.getElementById("div_subscribete");




export function alertSub(message, type) {
   
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
      `<div class="col alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    div_suscribete.append(wrapper);
  }