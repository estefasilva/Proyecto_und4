window.onload =()=>{
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
    }
    let btn, frm, txt;  

    window.onload=() =>{
      btn = document.getElementById("btn_enviar");
      btn.addEventListener("click",enviar); 
    }  
    function enviar(event){
        frm = document.getElementById("formulario");
        if(frm.checkValidity()); 
        {
        txt = document.getElementById("boletin");
        txt.value =""; 
        alert("Gracias por tu inscripción, bienvenido al mundo de la repostería");
        event.preventDefault();  
        }
        }