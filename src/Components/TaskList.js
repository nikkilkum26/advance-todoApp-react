import React, { Component } from 'react'

let TaskList =(props)=> {
    let{tasks,toggleTask,updateTask,removeTask}= props;

        return (
            
                <ol>
        {
            props.tasks.map((task, index) => {
                // let onTaskClicked =()=>{
   
                //     // console.log(index);
                //     props.toggleTask(index);
                // onClick={onTaskClicked}
             
                return(
                    
                     <ol key={index}>
                         <br/>
                     <span className="myclass" onClick={()=>removeTask(index)}>⛔ &ensp;</span>    
                     <span className="myclass" onClick={()=>toggleTask(index)}>   
                    {task.name}
                    </span>
                    <select value ={task.priority} onChange={(event)=> updateTask(index,event.target.value)}>
                        <option value="1">LOW</option>
                        <option value="2">MED</option>
                        <option value="3">HIGH</option>
                    </select>
                
                
                {task.flag ? "✔️" : "❌"}</ol>
            
            )
        })}
    </ol>
           
        )
    
}

export default TaskList
