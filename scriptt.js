const inputBox=document.getElementById("input-box");
const listcontainer=document.getElementById("list-container");

function addtask(){
    if(inputBox.value===''){
        alert("You must write something!");
    }
    else{ 
        let li=document.createElement("li");
        // anything in inputbox put in list
        li.innerHTML=inputBox.value;
        // display
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        }
        //after add the task input will be empty
        inputBox.value = "";
        savedata();
    
}
listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata()
{
    localStorage.setItem("data", listcontainer.innerHTML);
}
function showTask(){
    listcontainer.innerHTML=localStorage.getItem("data");

}
showTask();