//const h2pregunta = document.getElementById("pregunta")
//const botones = document.querySelectorAll(".respuestagenerica")
const p = document.getElementById("validarrespuesta")
//const botonsiguiente =document.getElementById("botonsiguiente")
const gracias = document.getElementById("gracias")
const iniciar = document.getElementById("iniciar")
const respuestas = document.getElementById("respuestas")
const nombreparticipante = document.getElementById("nombreparticipante")
const preguntanombre = document.getElementById("preguntanombre")
const bienvenido = document.getElementById("bienvenido")
const mensaje = document.getElementById("mensaje")
const mensajecontador = document.getElementById("contador")
mensajecontador.setAttribute("class","mensajecontador")

// function myFunction() {
//     document.getElementById("nombreparticipante").required = true;
//     document.getElementById("demo").innerHTML = "The required property was set. The text field must now be filled out before submitting the form.";
//   }
const preguntas = [
    {
        pregunta:"¿Cuál de los siguientes es un dinosaurio hervivoro?",
        respuestacorrecta:"Triceratops",
        respuesta1:"Triceratops",
        respuesta2:"Tyrannosaurus",
        respuesta0:"Velociraptor"
    },
    {
        pregunta:"¿En que eras existieron los dinosaurios?",
        respuesta1:"Cámbrico, Triásico, Jurásico",
        respuesta2:"Triásico, Jurásico, Cretácico",
        respuestacorrecta:"Triásico, Jurásico, Cretácico",
        respuesta0:"Pérmico, Triásico, Jurásico"
    },
    {
        pregunta:"¿Cuál de los siguientes dinosaurios es el más grande?",
        respuesta1:"Argentinosaurus",
        respuestacorrecta:"Argentinosaurus",
        respuesta2:"Apatosaurus",
        respuesta0:"Tyrannosaurus"
    },
]



iniciar.onclick = (event)=>{
//Esto ocurre después de poner su nombre e iniciar

if(nombreparticipante.value.trim().length){


mensaje.remove()
iniciar.remove()
nombreparticipante.remove()
preguntanombre.remove()
bienvenido.remove()

const h2pregunta = document.createElement("p")
h2pregunta.setAttribute("class","pregunta")
const boton1 = document.createElement("button")
boton1.setAttribute("class","respuesta1")
const boton2 = document.createElement("button")
boton2.setAttribute("class","respuesta2")
const boton3 = document.createElement("button")
boton3.setAttribute("class","respuesta3")
const botones = [boton1,boton2,boton3]
const botonsiguiente =document.createElement("button")
botonsiguiente.setAttribute("class","botonsiguiente")
h2pregunta.innerText = preguntas[0].pregunta
botones.forEach((boton,index)=>{
    boton.innerText = preguntas[0][`respuesta${index}`]
})
botonsiguiente.innerText = "Siguiente pregunta"


respuestas.append(h2pregunta,...botones,botonsiguiente)



botonsiguiente.onclick = (event)=>{
    if(botonesclick === 1){
    const index = preguntas.findIndex(p=>p.pregunta===h2pregunta.textContent)
    if (index === preguntas.length-1 || index === -1){
        mensajecontador.innerText = `${nombreparticipante.value} has acertado ${contador} de ${preguntas.length} respuestas correctas.`
        h2pregunta.innerText = "Has terminado tus preguntas"
       
       setTimeout(() => {
            gracias.innerText = "¡Gracias por participar!"
          mensajecontador.remove()
           h2pregunta.remove()
        }, 2500)
        
        botones.forEach((boton,index)=>{ 
            boton.remove()
            botonsiguiente.remove()
        })
        
    }else {
        botonesclick = 0
        h2pregunta.innerText = preguntas[index+1].pregunta
        botones.forEach((boton,i)=>{
            boton.innerText = preguntas[index+1][`respuesta${i}`]
            boton.setAttribute("class","respuestagenerica") 
        })

    }
}

}
let contador = 0
let botonesclick = 0
botones.forEach((boton,i)=>{
   boton.onclick =(event)=>{
    botonesclick++
    if(botonesclick === 1){
            const index = preguntas.findIndex(p=>p.pregunta===h2pregunta.textContent)
            if (boton.textContent===preguntas[index].respuestacorrecta){
                boton.setAttribute("class","respuestacorrecta")
                contador = contador + 1
                console.log(contador)
                boton.textContent=[`Correcta`]
            }else{
                boton.setAttribute("class","respuestaincorrecta")
                contador = contador + 0
                boton.textContent=[`Incorrecta`]
            }
            
        }  
    } 
})
}else{
   mensaje.innerText = "Debemos conocer tu nombre para iniciar."    
}
}


  

//Boton para reiniciar
