let BotonPlay = document.getElementById("Boton-Play")
    BotonPlay.addEventListener('click' , Caso1)

let BotonSiguiente1 = document.getElementById("Boton-Siguiente1")
    BotonSiguiente1.addEventListener('click' , CasoSegundo)

    let BotonSiguiente2 = document.getElementById("Boton-Siguiente2")
    BotonSiguiente2.addEventListener('click' , caso3) 
    
    let BotonSiguiente3 = document.getElementById("Boton-Siguiente3")
    BotonSiguiente3.addEventListener('click' , caso4) 

    let BotonSiguiente4 = document.getElementById("Boton-Siguiente4")
    BotonSiguiente4.addEventListener('click' , caso5) 

    let BotonSiguiente5 = document.getElementById("Boton-Siguiente5")
    BotonSiguiente5.addEventListener('click' , caso6) 

    let BotonAtras1 = document.getElementById("Boton-Atras")
    BotonAtras1.addEventListener('click' , botonAtras1) 
    
    let BotonAtras2 = document.getElementById("Boton-Atras2")
    BotonAtras2.addEventListener('click' , botonAtras2) 

    let BotonAtras3 = document.getElementById("Boton-Atras3")
    BotonAtras3.addEventListener('click' , botonAtras3) 

    let BotonAtras4 = document.getElementById("Boton-Atras4")
    BotonAtras4.addEventListener('click' , botonAtras4) 

    let BotonAtras5 = document.getElementById("Boton-Atras5")
    BotonAtras5.addEventListener('click' , botonAtras5) 


function botonAtras1(){
    let AparezcaSection1 = document.getElementById("Section1")
    AparezcaSection1.style.display = "block"
    let AparezcaBotonPlay = document.getElementById("Boton-Play")
    AparezcaBotonPlay.style.display = "block" 
    let comienzos = document.getElementById("Comenzemos")
    comienzos.style.display = "none"

    let Section3= document.getElementById("Section3")
    Section3.style.display = "none";
   
}    

function botonAtras2(){

    let AparezcaBotonPlay = document.getElementById("Boton-Play")
    AparezcaBotonPlay.style.display = "none" 

    let Section3= document.getElementById("Section3")
    Section3.style.display = "flex";
   
    let sectionone=document.getElementById("CasoOne")
    sectionone.style.display = "block"

    let section3caso2 = document.getElementById("Caso2")
    section3caso2.style.display = "none";
} 

function botonAtras3(){
    let sectionone=document.getElementById("CasoOne")
    sectionone.style.display = "nonessssss"
    let Section3= document.getElementById("Section3")
    Section3.style.display = "flex";
    let section3caso2 = document.getElementById("Caso2")
    section3caso2.style.display = "flex";
    let section3caso3 = document.getElementById("caso3")
    section3caso3.style.display = "none";
    
} 
function botonAtras4(){

    let Section3= document.getElementById("Section3")
    Section3.style.display = "flex";
    let section3caso2 = document.getElementById("Caso2")
    section3caso2.style.display = "none";
    let section3caso3 = document.getElementById("caso3")
    section3caso3.style.display = "flex";
    let section3caso4 = document.getElementById("Caso4")
    section3caso4.style.display = "none";
    
} 

function botonAtras5(){

    let Section3= document.getElementById("Section3")
    Section3.style.display = "flex";
    let section3caso2 = document.getElementById("Caso2")
    section3caso2.style.display = "none";
    let section3caso3 = document.getElementById("caso3")
    section3caso3.style.display = "none";
    let section3caso4 = document.getElementById("Caso4")
    section3caso4.style.display = "flex";
    let section3caso5 = document.getElementById("caso5")
    section3caso5.style.display = "none";
    
} 
    function Comienzo(){ 
    let Section3= document.getElementById("Section3");
    Section3.style.display = "none"
    let ComienzoTextoAjugar= document.getElementById("Comenzemos");
    ComienzoTextoAjugar.style.display = "none"
    
    let botonparasiguiente1 = document.getElementById("Boton-Siguiente1");
    botonparasiguiente1.style.display = "none"
    

    let Section5= document.getElementById("caso5")
    Section5.style.display = "none";
    
   
}

Comienzo()

function PresentacionDeEmma() {
    let BotonPresentacion = document.getElementById("Boton-Presentacion")
    let parrafoOculto = document.getElementById("Emmapresentacion")
    let Section6= document.getElementById("caso6")
    Section6.style.display = "none";


    BotonPresentacion.addEventListener('click', function() {
        console.log("Botón de presentación clickeado");
        parrafoOculto.style.display = "flex";
        BotonPresentacion.style.display="none";
       
        const textElement = document.getElementById('Emmapresentacion');
        const text = textElement.textContent;
        textElement.textContent = '';
        
        function typeWriter() {
          let i = 0;
          const speed = 75; // Velocidad de escritura en milisegundos
        
          function type() {
            if (i < text.length) {
              textElement.textContent += text.charAt(i);
              i++;
              setTimeout(type, speed);
            }
          }
        
          type();
        }
        
        typeWriter();
});
}

//crear otra "escena"
function Caso1 () //cuando undo play
{
   
    let comienzos = document.getElementById("Comenzemos")
    comienzos.style.display = "flex"

    let Section3= document.getElementById("Section3")
    Section3.style.display = "flex";

    let section3caso2 = document.getElementById("Caso2")
    section3caso2.style.display = "none";

    let section3caso3 = document.getElementById("caso3")
    section3caso3.style.display = "none";

    let section3caso4 = document.getElementById("Caso4")
    section3caso4.style.display = "none";

    let BotonesEleccion = document.getElementById("Caso4")
    BotonesEleccion.style.display = "none";

    let Section6= document.getElementById("caso6")
    Section6.style.display = "none";

    
    let Section1= document.getElementById("Section1")
    Section1.style.display = "none";

    let Section5= document.getElementById("caso5")
    Section5.style.display = "none";    

    let parrafodevuamos = document.getElementById("VUAMOS!")
    let Desaparecerbotonplay = document.getElementById("Boton-Play")
    Desaparecerbotonplay.style.display = "none";

    let botonparasiguiente1 = document.getElementById("Boton-Siguiente1");
    botonparasiguiente1.style.display = "flex"
    
    const imagencorrecta =document.getElementById("gatocompleto")
    imagencorrecta.style.display = "none";
    
    const BotonEsconder1 =document.getElementById("a")
    BotonEsconder1.style.display = "flex";
    const BotonEsconder2 =document.getElementById("b")
    BotonEsconder2.style.display = "flex";
    const BotonEsconder3 =document.getElementById("c")
    BotonEsconder3.style.display = "flex";

    const respuestaCorrecta = "gato😺";
    document.getElementById("a").addEventListener("click", function() {
        if (this.value === respuestaCorrecta) {
    alert("¡Correcto!");

        } else {
        alert("Incorrecto, inténtalo de nuevo");
        }
    });
    
    document.getElementById("b").addEventListener("click", function() {
        if (this.value === respuestaCorrecta) {
    alert("¡Correcto!");
    imagencorrecta.style.display = "block";
    BotonEsconder1.style.display = "none";
    BotonEsconder2.style.display = "none";
    BotonEsconder3.style.display = "none";
    parrafodevuamos.style.display = "block";

        } else {
        alert("Incorrecto, inténtalo de nuevo");
        }
    });
    
    document.getElementById("c").addEventListener("click", function() {
        if (this.value === respuestaCorrecta) {
        alert("¡Correcto!");
        } else {
        alert("Incorrecto, inténtalo de nuevo");
        }
    
        
    });



}




function CasoSegundo(){
    let Section3= document.getElementById("Section3")
    Section3.style.display = "flex";

    let section3caso1 = document.getElementById("CasoOne")
    section3caso1.style.display = "none";

    let section3caso2 = document.getElementById("Caso2")
    section3caso2.style.display = "flex";

    let section3caso3 = document.getElementById("caso3")
    section3caso3.style.display = "none";

    let section3caso4 = document.getElementById("Caso4")
    section3caso4.style.display = "none";

    let BotonesEleccion = document.getElementById("Caso4")
    BotonesEleccion.style.display = "none";
    let Section6= document.getElementById("caso6")
    Section6.style.display = "none";
    let desaparecerparrafocomenzar = document.getElementById("Comenzemos")
    desaparecerparrafocomenzar.style.display = "none";


//condicionales de chica juguetes
const respuestaCorrecta1 = "Triste😔";

function verificarRespuesta(respuesta, boton) {
  if (boton.value === respuesta) {
    alert("¡Correcto!");
  } else {
    alert("Incorrecto, inténtalo de nuevo");
  }
}

document.getElementById("1").addEventListener("click", function() {
  verificarRespuesta(respuestaCorrecta1, this);
});

document.getElementById("2").addEventListener("click", function() {
  verificarRespuesta(respuestaCorrecta1, this);
});

document.getElementById("3").addEventListener("click", function() {
  verificarRespuesta(respuestaCorrecta1, this);
});

//condicionales de chica regalo
    const respuestaCorrecta2 = "Alegre😁";
    document.getElementById("q").addEventListener("click", function() {
        if (this.value === respuestaCorrecta2) {
    alert("¡Correcto!");

        } else {
        alert("Incorrecto, inténtalo de nuevo");
        }
    });
    
    document.getElementById("w").addEventListener("click", function() {
        if (this.value === respuestaCorrecta2) {
    alert("¡Correcto!");
    
        } else {
        alert("Incorrecto, inténtalo de nuevo");
        }
    });
    
    document.getElementById("e").addEventListener("click", function() {
        if (this.value === respuestaCorrecta2) {
        alert("¡Correcto!");
        } else {
        alert("Incorrecto, inténtalo de nuevo");
        }
    
        
    });

    const respuestaCorrecta3 = "Alegre😁";
    document.getElementById("4").addEventListener("click", function() {
        if (this.value === respuestaCorrecta3) {
    alert("¡Correcto!");

        } else {
        alert("Incorrecto, inténtalo de nuevo");
        }
    });
    document.getElementById("5").addEventListener("click", function() {
        if (this.value === respuestaCorrecta3) {
    alert("¡Correcto!");
    
        } else {
        alert("Incorrecto, inténtalo de nuevo");
        }
    });
    
    document.getElementById("6").addEventListener("click", function() {
        if (this.value === respuestaCorrecta3) {
    alert("¡Correcto!");
    
        } else {
        alert("Incorrecto, inténtalo de nuevo");
        }
    });
    
    document.getElementById("7").addEventListener("click", function() {
        if (this.value === respuestaCorrecta3) {
        alert("¡Correcto!");
        } else {
        alert("Incorrecto, inténtalo de nuevo");
        }
    
        
    });

const respuestaCorrecta4 = "Enojada🤬";
    document.getElementById("8").addEventListener("click", function() {
        if (this.value === respuestaCorrecta4) {
    alert("¡Correcto!");

        } else {
        alert("Incorrecto, inténtalo de nuevo");
        }
    });
    document.getElementById("9").addEventListener("click", function() {
        if (this.value === respuestaCorrecta4) {
    alert("¡Correcto!");
    
        } else {
        alert("Incorrecto, inténtalo de nuevo");
        }
    });
    
    document.getElementById("10").addEventListener("click", function() {
        if (this.value === respuestaCorrecta4) {
    alert("¡Correcto!");
    
        } else {
        alert("Incorrecto, inténtalo de nuevo");
        }
    });
    
    document.getElementById("11").addEventListener("click", function() {
        if (this.value === respuestaCorrecta4) {
        alert("¡Correcto!");
        } else {
        alert("Incorrecto, inténtalo de nuevo");
        }
    
        
    });


    const respuestaCorrecta5 = "Asombrada😲";
    document.getElementById("12").addEventListener("click", function() {
        if (this.value === respuestaCorrecta5) {
    alert("¡Correcto!");

        } else {
        alert("Incorrecto, inténtalo de nuevo");
        }
    });
    document.getElementById("13").addEventListener("click", function() {
        if (this.value === respuestaCorrecta5) {
    alert("¡Correcto!");
    
        } else {
        alert("Incorrecto, inténtalo de nuevo");
        }
    });
    
    document.getElementById("14").addEventListener("click", function() {
        if (this.value === respuestaCorrecta5) {
    alert("¡Correcto!");
    
        } else {
        alert("Incorrecto, inténtalo de nuevo");
        }
    });
    
    document.getElementById("15").addEventListener("click", function() {
        if (this.value === respuestaCorrecta5) {
        alert("¡Correcto!");
        } else {
        alert("Incorrecto, inténtalo de nuevo");
        }
    
        
    });

    const respuestaCorrecta6 = "Triste😭";
    let quitarenojo = document.getElementById("16");
    document.getElementById("16").addEventListener("click", function() {
        if (this.value === respuestaCorrecta6) {
    alert("¡Correcto!");

        } else {
        alert("Incorrecto, inténtalo de nuevo");
        }
    });
    document.getElementById("17").addEventListener("click", function() {
        if (this.value === respuestaCorrecta6) {
    alert("¡Correcto!");
    
        } else {
        alert("Incorrecto, inténtalo de nuevo");
        }
    });
    
    document.getElementById("18").addEventListener("click", function() {
        if (this.value === respuestaCorrecta6) {
    alert("¡Correcto!");
    
        } else {
        alert("Incorrecto, inténtalo de nuevo");
        }
    });
    
    document.getElementById("19").addEventListener("click", function() {
        if (this.value === respuestaCorrecta6) {
        alert("¡Correcto!");
       
        } else {
        alert("Incorrecto, inténtalo de nuevo");
        }
    
        
    });

}


function caso3(){
    let Section3= document.getElementById("Section3")
    Section3.style.display = "flex";

    let section3caso1 = document.getElementById("CasoOne")
    section3caso1.style.display = "none";

    let section3caso2 = document.getElementById("Caso2")
    section3caso2.style.display = "none";

    let section3caso3 = document.getElementById("caso3")
    section3caso3.style.display = "flex";

    let section3caso4 = document.getElementById("Caso4")
    section3caso4.style.display = "none";

    let BotonesEleccion = document.getElementById("Caso4")
    BotonesEleccion.style.display = "none";
    let Section6= document.getElementById("caso6")
    Section6.style.display = "none";
    const imagencorrectaleon =document.getElementById("leon")
    imagencorrectaleon.style.display = "none";

    const respuestaCorrecta6 = "leon🦁";
    document.getElementById("20").addEventListener("click", function() {
        if (this.value === respuestaCorrecta6) {
    alert("¡Correcto!");
        imagencorrectaleon.style.display="block";
        document.getElementById("20").style.display="none";
        document.getElementById("21").style.display="none";
        document.getElementById("22").style.display="none";
        document.getElementById("23").style.display="none";
        } else {
        alert("Incorrecto, inténtalo de nuevo");
        }
    });
    document.getElementById("21").addEventListener("click", function() {
        if (this.value === respuestaCorrecta6) {
    alert("¡Correcto!");
    
        } else {
        alert("Incorrecto, inténtalo de nuevo");
        }
    });
    
    document.getElementById("22").addEventListener("click", function() {
        if (this.value === respuestaCorrecta6) {
    alert("¡Correcto!");
    
        } else {
        alert("Incorrecto, inténtalo de nuevo");
        }
    });
    
    document.getElementById("23").addEventListener("click", function() {
        if (this.value === respuestaCorrecta6) {
        alert("¡Correcto!");
        } else {
        alert("Incorrecto, inténtalo de nuevo");
        }
    
        
    });
    const respuestaCorrecta7 = "proceso🌱";
    const siescorrectaparrafo= document.getElementById("proceso");
    siescorrectaparrafo.style.display="none";
    const imagencorrectaproceso= document.getElementById("imagenproceso");
    imagencorrectaproceso.style.display="none";
    const imagencorrectafotosintesis= document.getElementById("imagenfotosintesis");
    imagencorrectafotosintesis.style.display="none";
    const desaparecerboton20 = document.getElementById("24")
    const desaparecerboton21 = document.getElementById("25")
    const desaparecerboton22 = document.getElementById("26")
    const desaparecerboton23 = document.getElementById("27")
    
    document.getElementById("24").addEventListener("click", function() {
        if (this.value === respuestaCorrecta7) {
    alert("¡Correcto!");
        } else {
        alert("Incorrecto, inténtalo de nuevo");
        }
    });
    document.getElementById("25").addEventListener("click", function() {
        if (this.value === respuestaCorrecta7) {
    alert("¡Correcto!");
    
        } else {
        alert("Incorrecto, inténtalo de nuevo");
        }
    });
    
    document.getElementById("26").addEventListener("click", function() {
        if (this.value === respuestaCorrecta7) {
    alert("¡Correcto!");
    imagencorrectafotosintesis.style.display = "flex";
    desaparecerboton20.style.display= "none"
    desaparecerboton21.style.display= "none"
    desaparecerboton22.style.display= "none"
    desaparecerboton23.style.display= "none"
    imagencorrectaproceso.style.display="flex";
        } else {
        alert("Incorrecto, inténtalo de nuevo");
        }
    });
    
    document.getElementById("27").addEventListener("click", function() {
        if (this.value === respuestaCorrecta7) {
        alert("¡Correcto!");
        } else {
        alert("Incorrecto, inténtalo de nuevo");
        }
    
        
    });
    document.getElementById("26").style.display = "block";
document.getElementById("27").style.display = "block";
}

function caso4(){
    let Section3= document.getElementById("Section3")
    Section3.style.display = "flex";

    let section3caso1 = document.getElementById("CasoOne")
    section3caso1.style.display = "none";

    let section3caso2 = document.getElementById("Caso2")
    section3caso2.style.display = "none";

    let section3caso3 = document.getElementById("caso3")
    section3caso3.style.display = "none";

    let section3caso4 = document.getElementById("Caso4")
    section3caso4.style.display = "flex";
    let Section6= document.getElementById("caso6")
    Section6.style.display = "none";

   
    }
    
function caso5(){
    let Section3= document.getElementById("Section3")
    Section3.style.display = "flex";

    let section3caso1 = document.getElementById("CasoOne")
    section3caso1.style.display = "none";

    let section3caso2 = document.getElementById("Caso2")
    section3caso2.style.display = "none";

    let section3caso3 = document.getElementById("caso3")
    section3caso3.style.display = "none";

    let section3caso4 = document.getElementById("Caso4")
    section3caso4.style.display = "none";

    let Section5= document.getElementById("caso5")
    Section5.style.display = "flex";
    let Section6= document.getElementById("caso6")
    Section6.style.display = "none";

}
    
    
    
    
    
    
    
    
    //Efecto de escritura 
    const parrafo = document.getElementById('Emmapresentacion');
    
    parrafo.addEventListener('mouseover', function() {
      parrafo.classList.add('destacado');
    });
    
    parrafo.addEventListener('mouseout', function() {
      parrafo.classList.remove('destacado');
    });
    
    
    
    
    
    
    
    
    function Eleccion(){
    const botonA = document.getElementById("BotonA");
    const botonB = document.getElementById("BotonB");
    const botonC = document.getElementById("BotonC");
    
    botonA.addEventListener("click", () => {
    if (botonA.value === "perro") {
        swal("¡Incorrecto! Inténtalo de nuevo.");
    } else if (botonB.value === "gato") {
        swal("¡Correcto! ¡Felicidades, sigue así!");
    } else if (botonC.value === "conejo") {
        swal("¡Incorrecto! Inténtalo de nuevo.");
    } else {
        swal("Elige una respuesta.");
    }
    });
    }
    
    function caso6 (){

        let Section3= document.getElementById("Section3")
        Section3.style.display = "flex";
    
        let section3caso1 = document.getElementById("CasoOne")
        section3caso1.style.display = "none";
    
        let section3caso2 = document.getElementById("Caso2")
        section3caso2.style.display = "none";
    
        let section3caso3 = document.getElementById("caso3")
        section3caso3.style.display = "none";
    
        let section3caso4 = document.getElementById("Caso4")
        section3caso4.style.display = "none";
    
        let Section5= document.getElementById("caso5")
        Section5.style.display = "none";
        let Section6= document.getElementById("caso6")
        Section6.style.display = "flex";

        let caso = 6;
    let bodyElement = document.querySelector("body");
    
    if (caso === 6) {
      bodyElement.classList.add("caso6");

      
    }
    }
    

window.addEventListener("load" , Comienzo)