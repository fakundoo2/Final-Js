let nuevoNombre;
let nuevoApellido;
let nuevoEdad;
let nuevoDni;
let isActive = true;
let nuevoPersona;

let _empleados = [];
let _despedidos = [];

const botonModal = document.querySelector("#btn-modal");
const modal = document.querySelector("#modal");
const botonAgregar = document.querySelector("#btn-agregar");
const listaEmpleados = document.querySelector("#lista-empleados");
let botonDespedido = document.querySelectorAll("#btn-despedir");
const listaDespedidos = document.querySelector("#lista-despedidos");

botonModal.addEventListener("click",() => {
    if(isActive){
        modal.classList.add("active");
        isActive = false;
    }else if(!isActive){
        modal.classList.remove("active");
        isActive = true;
    }
})

botonAgregar.addEventListener("click",() => {
    modal.classList.remove("active");
    listaEmpleados.innerHTML = "";
    capturarDatos();
})

function capturarDatos(){

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
    _empleados.push(nuevoPersona);
    guardarEnLocal();
    cargarEmpleados();
    despedirGente();
}


function despedirGente(){
    botonDespedido = document.querySelectorAll("#btn-despedir");
    botonDespedido.forEach(boton => {
        boton.addEventListener("click",() =>{
            const findpersonaindex = _empleados.findIndex(em => em.dni == empleado.dni);
            const find = _empleados.find(em => em.dni == empleado.dni);
            _despedidos.push(find);
            _empleados.splice(findpersonaindex,1);
            console.log(findpersonaindex);
            console.log(_despedidos);
            guardarEnLocal();
            cargarEmpleados();
            cargarDespedidos();
        } );


    });
    
}

function cargarEmpleados(){
    let nuevoempleado = JSON.parse(localStorage.getItem("empleados"));
    if(nuevoempleado !== null){
        _empleados = nuevoempleado;
    }
    listaEmpleados.innerHTML = "";
    for(empleado of _empleados){
        let div = document.createElement("div");
        div.classList.add("marco");
        div.classList.add("col-2");
        div.innerHTML +=`
                <p>Nombre:${empleado.nombre}</p>
                <p>Apeliido:${empleado.apellido}</p>
                <p>Edad:${empleado.edad}</p>
                <p>DNI:${empleado.dni}</p>
                <button class="btn-despedir" id="btn-despedir">Despedir</button>
        `
        listaEmpleados.append(div);
    }

}

function cargarDespedidos(){
    let despedidos = JSON.parse(localStorage.getItem("despedidos"));
    if(despedidos !== null){
        _despedidos = despedidos;
    }
    listaDespedidos.innerHTML = "";
    for(despedido of _despedidos){
        let div = document.createElement("div");
        div.classList.add("marco-rojo");
        div.classList.add("col-2");
        div.innerHTML +=`
                <p>Nombre:${despedido.nombre}</p>
                <p>Apeliido:${despedido.apellido}</p>
                <p>Edad:${despedido.edad}</p>
                <p>DNI:${despedido.dni}</p>
        `
        listaDespedidos.append(div);
    }

}

function guardarEnLocal(){
    localStorage.setItem("empleados", JSON.stringify(_empleados));
    localStorage.setItem("despedidos", JSON.stringify(_despedidos));

}
cargarEmpleados();
cargarDespedidos();