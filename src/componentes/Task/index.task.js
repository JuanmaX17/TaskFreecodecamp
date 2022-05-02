import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./task.css"


function Task({id,text,completada,completeTask,deleteTask}){



    return(
        

        <div className={`task ${completada ? "complete": ""}`.trimEnd()} >

        <div className="task__text" onClick={()=>completeTask(id)}><p >{text}</p></div>

        <div onClick={()=> deleteTask(id)}>
            <AiOutlineCloseCircle className="icon" />
        </div>

        </div>

    )
}

export {
    Task
}