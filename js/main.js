    var lista = document.getElementById("lista"); 
    var texto = document.getElementById("tarea");
    var nuevaTarea = document.getElementById("añadir");
    
   
    nuevaTarea.addEventListener("click",  onButtonClick);

    
    //Funciones

    function onButtonClick(evt)
    {
     
        agregarMensaje();
    }

    function agregarMensaje(){
        
        if(texto.value === ""|| texto.value.length == 0){
            alert("kfjdf"); 
           lista.removeChild(this.parentNode);
            
        }
        
    var item = document.createElement('li');
    var span = document.createElement('span');
    var icon = document.createElement('a');
    var checking = document.createElement('input');

	span.innerHTML = texto.value;
    checking.type = "checkbox"; 
    checking.className = "squaredTwo";
    checking.style = "margin-right: 5px;";
    icon.className = "icon-trash estilo"; 
    item.appendChild(checking);
	item.appendChild(span);
    item.appendChild(icon);
    item.className = "twitter";
	lista.appendChild(item);

	texto.value = '';
	texto.focus();
    
    
    checking.addEventListener('click', onTach);
	icon.addEventListener('click', onItemClick);
   
    }
        
      function onItemClick(evt)
    {
        lista.removeChild(evt.target.parentNode);
    }

    function onTach(evt)
    { console.log(evt.target);
       if(evt.target.checked) {
        
           evt.target.nextSibling.style.textDecoration = "line-through";
       }else{
           evt.target.nextSibling.style.textDecoration = "none";
       }
    }