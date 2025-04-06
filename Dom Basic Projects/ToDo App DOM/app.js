let inp = document.querySelector("input");
let btn =document.querySelector("button");
// let li = document.querySelector("li");
let ul=document.querySelector("ul");



btn.addEventListener("click" , function(){
    let item = document.createElement("li")
    item.innerText=inp.value;

    let delbtn = document.createElement("button");
    delbtn.innerText="Delete";
    delbtn.classList.add("delete");

    item.appendChild(delbtn);
    ul.appendChild(item);
    // console.log(inp.value); 
    inp.value=""; //for remove input again

})


ul.addEventListener("click" , function(event){
    if(event.target.nodeName == "BUTTON"){
        let listitem = event.target.parentElement;
        listitem.remove();
        // console.log(listitem)
        // console.log("delete")
    }
    // console.log("btn click");
})






