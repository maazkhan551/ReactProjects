import { createContext, useContext } from "react";

export const TodoCotext = createContext({
    todos : [
        {
            id:1,
            todo:"msg",
            completed:false
        }
    ],
     addTodo: (todo)=>{},
     updatedTodo:(id,todo)=>{},
     deleleTodo:(id)=>{},
     toggleComplete: (id)=>{}
})

export const useTodo = ()=>{
    return useContext(TodoCotext)
}
 export const TodoProvider = TodoCotext.Provider
