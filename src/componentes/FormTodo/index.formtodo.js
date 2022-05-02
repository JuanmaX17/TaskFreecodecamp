import React, { useState } from "react";
import "./form.css"


function FormTodo({createTask,messageInput,setMessageInput}){

    const [input,setInput] = useState("")

    const saveChange = (e)=>{
        
        setInput(e.target.value)
        setMessageInput("")
    
    }
    const createTodo = (e)=>{
        e.preventDefault()
        createTask(input)
    }

    return(
        <form className="form">
            <input className="form__input" placeholder="task" onChange={saveChange}/>
            <button className="form__submit" onClick={createTodo}>
                <span className="form__submit__text" ></span>
            </button>
            <p className="form__message">{messageInput}</p>
        </form>
    )
}


export {
    FormTodo
}