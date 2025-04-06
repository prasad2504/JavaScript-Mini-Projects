let todo=[];

let req = prompt("Enter your Request");

while(true){

    if(req=="quit"){
        console.log("you are exit form app");
        break;
    }
    else if(req == "list"){

        console.log("------------------------------");


         for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
           // for(task of todo){
             //   console.log(task);
                
        }
        console.log("------------------------------");


    }

    else if(req == "add"){
        let task=prompt("enter the task you want to add");
        todo.push(task);
        console.log("task added");
    }
    else if (req == "delete"){
        let idx = prompt("enter the index of todo you want to delete.");
        todo.splice(idx,1);
        console.log("Task deleted");
    }
    else{

        // prompt=console.log("Wrong Request");

    }

    req = prompt("Enter your Another Request");
}