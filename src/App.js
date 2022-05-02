import './App.css';
import {Contenedor} from "./componentes/Contenedor/index.contenedor"
import {Tasktable} from "./componentes/Tasktable/index.tasktable"
import {FormTodo} from "./componentes/FormTodo/index.formtodo"
import {Task} from "./componentes/Task/index.task"
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {useLocalStorage} from "./useLocalStorage"

function App() {

  const {tasks,setTasks} = useLocalStorage([])


  const [messageInput, setMessageInput] = useState("")

  const validarRepetidos = (text)=>{
      var validar = true
      tasks.forEach((task)=>{
          if(task.text === text){
            validar = false
          }
      })
      return validar
  }

  const createTask = (text)=>{

    if(text.trim() && validarRepetidos(text)){

      var newTask = {
          id: uuidv4(),
          text: text,
          completada: false
      }

      setMessageInput("")

      setTasks([newTask,...tasks])
    }else if(!validarRepetidos(text)){
      setMessageInput("Ups!, la tarea ya existe")
    }else{
      console.log("vacio")
      setMessageInput("Ups!,tarea vacia")
    }


    }


  const completeTask = (id)=>{

      const newList = tasks.map((task)=>{
        if(task.id == id){
          task.completada = !task.completada
        }
        return task

      })

      setTasks(newList)
  }


  const deleteTask = (id)=>{

    const lists = tasks.filter((task)=>(task.id !== id))

    setTasks(lists);


  }


  return (
      <Contenedor>

        <Tasktable>
            <FormTodo
              createTask={createTask}
              messageInput={messageInput}
              setMessageInput={setMessageInput}
            />

            {

                tasks.map((task)=>(

                  <Task
                      id= {task.id}
                      text = {task.text}
                      completada = {task.completada}
                      key={task.id}
                      completeTask={completeTask}
                      deleteTask={deleteTask}
                      
            
                  />

              ))

            }


        </Tasktable>

      </Contenedor>
  );


}

export default App;
