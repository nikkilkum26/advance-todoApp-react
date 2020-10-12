import React, { Fragment,useState } from "react";
import ReactDom from "react-dom";
import TaskList from "./Components/TaskList";
import Title from "./Components/Title"
import InputField from "./Components/InputField";
import Statusbar from "./Components/Statusbar"



// let NewTitle =()=> <h2> My new Title</h2>
let App = () => {
    let [tasks, setTasks] = useState([{ name: "Buy Groceries", flag: false ,priority:'3'},
{ name: "Finish HomeWork", flag: false ,priority:'2'},
{ name: "Clean your Room", flag: true ,priority:'1'},])



    let toggleTask =(TaskIndex) =>{
        setTasks(tasks.map((task,index)=>{
            if(TaskIndex == index){
                return{
                    ...task,
                    flag: !task.flag,
                }
            }

            return task;
        }))
    }
let addTask = (newTask,priority)=>{
    setTasks([
        ...tasks,
        {
            name: newTask,priority,
            flag : false,
        }
    ])
}
let updateTask = (updateTaskIndex,priority)=>{
    setTasks(tasks.map((task,index)=>{
        if(updateTaskIndex== index){
            return{
                ...task,
                priority: priority
            }
        }
        return task;
    }))
}
let removeTask= (index)=>{
    let removetask = [...tasks];
    removetask.splice(index,1)
    setTasks(removetask);
}
    return (
        <Fragment>
            <Title text="ToDo List APP" />
            <Statusbar tasks ={tasks}/>
            <InputField addTask={addTask} />
            <TaskList tasks ={tasks} toggleTask={toggleTask} updateTask={updateTask} removeTask={removeTask}/>
           
        </Fragment>
    )
}
ReactDom.render(<App />, document.querySelector("#myid"))