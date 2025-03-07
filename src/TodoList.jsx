import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';


export default function TodoList(){
    let [todos, setTodos]= useState([{task: "sample task", id: uuidv4(), isDone: false }]);
    let [newTodo, setNewTodo]= useState("");

    let addNewTodo=()=>{
        setTodos([...todos, {task: newTodo, id: uuidv4(), isDone: false}]);
        setNewTodo("")
     };

     let updateNewTodo=(event)=>{
        setNewTodo(event.target.value) 
     };

     let deleteTodo=(id) =>{
      setTodos(todos.filter((todo)=>todo.id != id))
     }; 

     let upperCaseAll= () =>{
       setTodos (
       todos.map((todo)=>{
        return{
          ...todo,
          task: todo.task.toUpperCase(),
        }
       })
       )
     };

     let markDone= (id) =>{
        setTodos (
        todos.map((todo)=>{
        if (todo.id === id){
            return{
                ...todo,
                isDone: true,
              }
        }else{
            return todo;
        };
       })
       );
     };
    //  let lowerCaseAll= () =>{
    //     setTodos (todos.map((todo)=>{
    //      return{
    //        ...todo,
    //        task: todo.task.toLowerCase(),
    //      }
    //     })
    //     )
    //   }

    return (
        <div>
            <input placeholder="add a task" value={newTodo} onChange={updateNewTodo}></input> <br></br>
            <button onClick={addNewTodo}>Add Task</button>
            <hr></hr>
            <h4>Task List</h4>
            <ul>
            {todos.map((todo)=>{
              return <li key={todo.id}>
                <span style={ todo.isDone ? {textDecorationLine: "line-through"} : {}}>{todo.task}</span>
                &nbsp; &nbsp;
                <button onClick={()=>deleteTodo(todo.id)}>Delete</button> 
                <button  onClick={()=>markDone(todo.id)} >Mark As Done</button>
                </li>;
            })}
            </ul> 
          <button onClick={upperCaseAll} >Click to Uppercase All</button>
        </div>
    )
 }