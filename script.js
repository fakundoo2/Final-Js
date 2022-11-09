let nuevoNombre;
let nuevoApellido;
let nuevoEdad;
let nuevoDni;

let nuevoPersona;

let baseDatos = [];

let seguir = true;

saludo();
buscador();

function saludo(){
    alert("Bienvenido al registro del nuevo empleado, por favor llene con los datos correspondientes");
    while(seguir){
        constructor();
        seguir = confirm("¿Desea agregar un empleado mas?")
    }
}

function constructor(){

    function persona(nombre,apellido,edad,dni){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.dni = dni;
    }

    nuevoNombre = prompt("ingrese el nombre del nuevo empleado");
    nuevoApellido = prompt("ingrese el apellido");
    nuevoEdad = prompt("ingrese la edad");
    nuevoDni = prompt("ingrese el DNI");

    nuevoPersona = new persona(nuevoNombre,nuevoApellido,nuevoEdad,nuevoDni);
    console.log(nuevoPersona);

    baseDatos.push(nuevoPersona);

}

function buscador(){
    var buscar = confirm("Quiere buscar a un empleado?");

    if(buscar){
        var buscadorSujeto = prompt("Ingrese el nombre de la persona que quiere buscar");
        console.log(baseDatos.find((baseDatos) => baseDatos.nombre === buscadorSujeto));
    }   
}

