const search=document.getElementById("search");
const container=document.getElementById("container");
function find(){
	if (search.value===''){
		alert("u can add something");
	}
	else{
		alert("the given task is going to add in your list");
		let li=document.createElement("li");
		li.innerHTML=search.value;
		container.appendChild(li);
		let remove=document.createElement("remove");
        remove.innerHTML="&#10003";
        li.appendChild(remove);
        

	}
        search.value="";
        
}


