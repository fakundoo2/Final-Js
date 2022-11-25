let nuevoNombre;
let nuevoApellido;
let nuevoEdad;
let nuevoDni;

let nuevoPersona;

let baseDatos = [];

const botonModal = document.querySelector("#btn-modal");
const modal = document.querySelector("#modal");
const botonAgregar = document.querySelector("#btn-agregar");
const main = document.getElementById("#main");

botonModal.addEventListener("click",() => {
    modal.classList.add("active");
})

botonAgregar.addEventListener("click",() => {
    modal.classList.remove("active");
    constructor();
    console.log(baseDatos);
    console.log(baseDatos.nombre);
    console.log(baseDatos.nuevoNombre);
})

function constructor(){

    function persona(nombre,apellido,edad,dni){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.dni = dni;
    }

    nuevoNombre = document.querySelector("#nombre").value;
    nuevoApellido = document.querySelector("#apellido").value;
    nuevoEdad = document.querySelector("#edad").value;
    nuevoDni = document.querySelector("#dni").value;

    nuevoPersona = new persona(nuevoNombre,nuevoApellido,nuevoEdad,nuevoDni);
    baseDatos.push(nuevoPersona);

    /*PROBANDO COMO TOMAR LOS DATOS DENTRO DE baseDatos */
    baseDatos.forEach(sujetos =>{
        console.log("entro");
        console.log(baseDatos.nuevoNombre);
    })

}



function cargarPersona(){
        baseDatos.forEach(sujetos =>{
            let div = document.createElement("div");
            div.classList.add("personas");
            div.innerHTML = ` 


            ` 
        })
}

