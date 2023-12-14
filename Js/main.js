'use strict'


// Crear array de tareas
const tasks = [
    { name: "Recoger setas en el campo", completed: true },
    { name: "Comprar pilas", completed: true },
    { name: "Poner una lavadora de blancos", completed: true },
    {
      name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
      completed: false,
    },
  ];


//Pintar las tareas 

const tasksList = document.querySelector('.js__tasks_list');

// Función para pintar la tarea

function renderTask(task){
    tasksList.innerHTML += `<li><input type="checkbox">${task.name}</li>`;
}

for ( const task of tasks ) {
    //codigo que queremos que se repita
    renderTask(task);
}

