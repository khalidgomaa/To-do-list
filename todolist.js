let  input        =document.querySelector("input")
let  form         =document.querySelector("form")
let  add          =document.querySelector(".add")
let  clear        =document.querySelector(".clear")
let  tasks        =document.querySelector(".tasks")
let  tasksdoing   =document.querySelector(".tasksdoing")

let  donetasks    =document.querySelector(".donetasks")

let empty         =document.querySelector(".empty")
let numoftasks    =document.querySelector(".numoftasks")
let numoftasksdone    =document.querySelector(".numoftasksdone")
let numoftasksdoing    =document.querySelector(".numoftasksdoing")
let boxs          =document.querySelectorAll(".box")
let welcome          =document.querySelector(".autowrite")

// clock function
function clock(){
    setTimeout(function () {
      let date = new Date();
     
      // let year=date.getFullYear()
      // let month=date.getMonth()
      // let day=date.getDate()
    let hours = date.getHours();
    let minutes =date .getMinutes();
    let seconds = date.getSeconds();
     
    let flag="AM"
    if (hours===0){
      hours=12
    }
    else if(hours>12){
      hours-=12
       flag="PM"
    }
    else{
      flag="AM"
    }
    if (hours<10)hours="0"+hours
    if (minutes<10)minutes="0"+minutes
    if (seconds<10)seconds="0"+seconds
    document.querySelector(".clock").textContent=`${hours}:${minutes}:${seconds}
 ${date.toDateString()} `
    if (hours===0){
      hours=12
    }
    else if(hours>12){
      hours-=12
       flag="PM"
    }
    else{
      flag="AM"
    }
    if (hours<10)hours+="0"
    if (minutes<10)minutes+="0"
    if (seconds<10)seconds="0"
    
    clock()
    
    }, 1000);}

    clock()
//autowriting 
let words = "Everything you can imagine is real  ";
let index = 1;
setInterval(
  function () {
    welcome.textContent =  words.slice(0, index);
    index++;
    if (index == welcome.length) {
    // clearInterval(yy) ده لو عايز اول ما اعمل ريفريش او اول ما افتح الموقع يكتبها مره واحده ويقف
      index = 1;
    }
  }, 100);

// to focus on the input after adding new task
window.onload=input.focus(); //to focus on input 
emptytasks() 
numoftasks.innerHTML=tasks.children.length-1 //to count the tasks 
numoftasksdone.innerHTML=donetasks.children.length-1//to count the tasksdone
numoftasksdoing.innerHTML=tasksdoing.children.length-1 //to count the tasksdoing


// to add tasks
form.onsubmit=addtask
function addtask(event){
    event.preventDefault()
if(input.value===""){
    return false;
}
else{
 emptytasks()

    let listitem =document.createElement("li")
    listitem.setAttribute("draggable","true")

    listitem.classList.add("listitem")
    // to return the first letter of task capital
let capcontent=input.value.slice("0","1").toUpperCase()+input.value.substring("1")

 listitem.innerHTML=`<span draggable=""true class="taskcontent"> ${capcontent}</span> 
 <span class="dlt">  X</span>`   /*X is a button to delete>*/

tasks.appendChild(listitem)



numoftasks.innerHTML=tasks.children.length-1 //to count the tasks todo in the header
emptytasks() //to checck if (no tasks showed or not)
draganddrop()

//to remove what i wrote in inpute 
input.value="";

// to focus on the input after adding new task
input.focus();
// when we want to delete task from the list
let deltask         =document.querySelectorAll(".dlt");
deltask.forEach(btn=>{
    btn.onclick=deletfun;
    function deletfun(event){
        event.target.parentNode.remove()
        emptytasks()
        numoftasks.innerHTML=tasks.children.length-1 //to count the tasks 
numoftasksdone.innerHTML=donetasks.children.length-1 //to count the tasksdone
numoftasksdoing.innerHTML=tasksdoing.children.length-1 //to count the tasksdoing
 
    }})

}} 

// this function to show you if there are not tasks
    function emptytasks(){
        if( tasks.children.length>1){
                   empty.textContent="" ;
            
               }
else if (tasksdoing.children.length>1) {
    empty.textContent="" ;
    
} 
else if (donetasks.children.length>1) {
    empty.textContent="" ;
    
} 
        else
               {
            empty.textContent="No tasks" ;
           
               } }


    //   function of draging and droping
let drag=null; //for drag and drop function
    function draganddrop(){
        let dragtasks=document.querySelectorAll(".listitem")
        dragtasks.forEach(task=>{

            task.addEventListener("dragstart",function(){
              drag=task;
          
            })

            task.addEventListener("dragend",function(){
                drag=null
              

            })
           boxs.forEach(box=>{
            box.addEventListener("dragover",function(event){
                event.preventDefault();
        //    box.style.backgroundColor = "rgb(71, 17, 158)";
            }) 


            box.addEventListener("dragleave",function(){
            //  box.style.backgroundColor  ="rgb(71, 17, 158)";
            })
            box.addEventListener("drop",function(){
                box.appendChild(drag)
                
                if(box===tasksdoing){
                    box.style.backgroundColor = "rgb(165, 143, 20,.5)"

                }
                else if (box===donetasks) {
                    box.style.backgroundColor = "rgb(11, 226, 29)"
                 
                } else {
                    tasksdoing.style.backgroundColor ="rgb(16, 16, 56);"
                    donetasks.style.backgroundColor ="rgb(16, 16, 56);"
                    tasks.style.backgroundColor ="rgb(16, 16, 56);"
                    
                }    
           
                
                numoftasks.innerHTML=tasks.children.length-1 //to count the tasks 
                numoftasksdone.innerHTML=donetasks.children.length-1 //to count the tasksdone
                numoftasksdoing.innerHTML=tasksdoing.children.length-1 //to count the tasksdoing

})

           })
        })
    }
    


   




