/*var listaTareas=[["tarea", true],["t2", false]];


//------------
function drawTasksList()
{
    var lista= document.getElementById("lista");
    for (var i in listaTareas){
    var html="<li>"+"input type='checkbox'"+(listaTareas[i][1]?"cheked":"")+">"+listaTareas[i][0]+"</li>";
        lista.innerHTML+=html;
    }
   
    // var html="<li>"+"listaTareas[i][0]"+"</li>";
    
}*/

var listaTareas=[
    {nombre:"tarea",isDone:true},
    {nombre:"t2", isDone:false}
];


//------------
function drawTasksList()
{
    var lista= document.getElementById("lista");
    for (var i in listaTareas){
    var html="<li><input type='checkbox'"+(listaTareas[i].isDone?"checked":"")+">"+listaTareas[i].nombre+"</li>";
        lista.innerHTML+=html;
    } 
}
