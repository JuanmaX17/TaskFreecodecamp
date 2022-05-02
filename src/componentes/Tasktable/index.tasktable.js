import React from "react";
import "./tasktable.css"


function Tasktable({children}){


    return(

        <div className="contenedor__table">
            <h1>Mis Tareas</h1>
            {children}

        </div>

    )
}


export {
    Tasktable
}