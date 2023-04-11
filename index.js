let form=document.getElementById("main")
let tbody=document.querySelector("tbody")

let data=JSON.parse(localStorage.getItem("Userdata"))
if(data==null){
    data=[];
}
data.forEach((element,index)=>{
    let tr=document.createElement("tr");
    let td1=document.createElement("td");
    let td2=document.createElement("td");
    let td3=document.createElement("td");
    td1.innerText=element.task;
    td2.innerText=element.priority;
    td3.innerText="Favourite";

    if(element.priority=="High"){
        td2.style.backgroundColor="red";
    }else {
        td2.style.backgroundColor="green";
    }
    tr.append(td1,td2,td3);
    tbody.append(tr);
});
createDOM();
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let detail={
        task: form.task.value,
        priority: form.priority.value,
    }
    data.push(detail)
    localStorage.setItem("Userdata",JSON.stringify(data))
    createDOM();
});
    function createDOM(){
        tbody.innerHTML=null;

    // console.log(data);
        data.forEach((element,index)=>{
        let tr=document.createElement("tr");
        let td1=document.createElement("td");
        let td2=document.createElement("td");
        let td3=document.createElement("td");
        td1.innerText=element.task;
        td2.innerText=element.priority;
        if(element.priority=="High"){
            td2.style.backgroundColor="red";
        }else {
            td2.style.backgroundColor="green";
        }
        td3.innerText="Favourite";
        tr.append(td1,td2,td3);
        tbody.append(tr);
    });
}
    
