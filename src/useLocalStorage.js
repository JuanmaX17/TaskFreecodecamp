import React, { useState , useEffect} from "react"


function useLocalStorage(initial){
   
    const [tasks,setTask] = useState(initial) 

    const saveTodo = (tarea)=>{
        localStorage.setItem("TODOS",JSON.stringify(tarea))
        setTask(tarea)

    }

    var localStorageDB = localStorage.getItem("TODOS")

    useEffect(()=>{
        if(!localStorageDB){
            localStorage.setItem("TODOS",JSON.stringify(initial))
        }else{
          
            const todoDB = JSON.parse(localStorage.getItem("TODOS"))
            saveTodo(todoDB)
        }
    },[])

 
    
    
    

    
    return {
        tasks,
        setTasks: saveTodo
    }
}


export {
    useLocalStorage
}