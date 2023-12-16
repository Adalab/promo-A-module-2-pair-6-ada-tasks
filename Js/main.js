'use strict'

//Query Selector


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
    tasksList.innerHTML += `<li class= "js__one_task js__checkbox"><input class= "" type="checkbox">${task.name}</li>`;
}


for ( const task of tasks ) {
    //codigo que queremos que se repita
    renderTask(task);
}

const oneTask = document.querySelectorAll('.js__one_task');
const checkbox = document.querySelectorAll('.js__checkbox');


// también se puede hacer cambiando el tasks.completed a True o False después de clickar, volver a pintar la lista HTML y despues añadir la clase tachar

const handleClickCheckbox = (event) => {
const clickedCheckbox = event.currentTarget;
clickedCheckbox.classList.toggle ('through');
  
}

for (const clickCheckbox of checkbox) { 
clickCheckbox.addEventListener ('click' , handleClickCheckbox);};
