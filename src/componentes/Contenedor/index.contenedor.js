import React from "react";
import "./contenedor.css"


function Contenedor({children}){



    return(

        <div className="container">
            {children}
        </div>
    )
}

export {
    Contenedor
}