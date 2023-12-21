'use strict'

//Query Selector


// Crear array de tareas
const tasks = [
    { name: "Recoger setas en el campo", completed: true, id:0},
    { name: "Comprar pilas", completed: true, id:1 },
    { name: "Poner una lavadora de blancos", completed: true , id:2},
    {
      name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
      completed: false,  id:3
    },
  ];


//Pintar las tareas 

const tasksList = document.querySelector('.js__tasks_list');

// Función para pintar la tarea

function renderTask(task){

  if( task.completed ) {
  tasksList.innerHTML += `<li class= "js__one_task js__checkbox through" name="${task.id}"><input class= "" checked  type="checkbox">${task.name}</li>`;
  }
  else {
    tasksList.innerHTML += `<li class= "js__one_task js__checkbox " name="${task.id}"><input class= "" type="checkbox">${task.name}</li>`;
  }
}


for ( const task of tasks ) {
    //codigo que queremos que se repita
    renderTask(task);
}

const oneTask = document.querySelectorAll('.js__one_task');
const checkbox = document.querySelectorAll('.js__checkbox');


// también se puede hacer cambiando el tasks.completed a True o False después de clickar, volver a pintar la lista HTML y despues añadir la clase tachar
/*
const handleClickCheckbox = (event) => {
const clickedCheckbox = event.currentTarget;
clickedCheckbox.classList.toggle ('through');
}*/


const handleClickCheckbox = (event) =>{
  console.log(event.currentTarget);
/*
  if (tasks.completed === true){
    oneTask.classList.add('through');
  } else {
    oneTask.classList.remove('through');
  }
  */


  for ( const task of tasks ) {
    //codigo que queremos que se repita
    renderTask(task);
  }
  for (const clickCheckbox of checkbox) { 
    clickCheckbox.addEventListener ('click' , handleClickCheckbox);
  };
}
// Llamamos a todas las lineas:
for (const clickCheckbox of checkbox) { 
  clickCheckbox.addEventListener ('click' , handleClickCheckbox);
};


  
  
  // FUNCION PARA FILTRAR TAREAS FILTER:
  
  // Obtener el valor del input de búsqueda
  const searchInput = document.querySelector('.js__searchInput');
  // Obtener el botón de búsqueda
  const searchButton = document.querySelector('.js__searchButton');
  
  // Evento para el clic en el botón Buscar
  searchButton.addEventListener('click', handleSearch);
  
  // Función para manejar el clic en el botón Buscar
  function handleSearch(event) {
      event.preventDefault();
  
      // Obtener el valor del input de búsqueda
      const userSearch = searchInput.value;
  
      // Filtrar las tareas que coincidan con el término de búsqueda
      const filteredTasks = tasks.filter(task => task.name.includes(userSearch));
  
      // Limpiar la lista de tareas antes de renderizar las tareas filtradas
      tasksList.innerHTML = '';
  
      // Renderizar las tareas filtradas
      for (const task of filteredTasks) {
          renderTask(task);
      }
  }
  
  // Evento para el clic en el botón Buscar
  searchButton.addEventListener('click', handleSearch);
  