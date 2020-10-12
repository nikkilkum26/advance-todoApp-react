import React from 'react';
import Value from './value';



let Statusbar= (props) =>{
    let {tasks}= props;
    let complete,notComplete,low,mid,high;
    complete=notComplete=low=mid=high=0;
    
    tasks.forEach(task =>{
        (task.flag) ? complete++ : notComplete++;
        (task.priority == '1') ? low++ : false;
        (task.priority === '2') ? mid++ : false;
        (task.priority === '3') ? high++ : false;
    })

return(
    <div className ="status">
        <br></br>
        <Value title ="Completed " value= {complete +" "} />
        <Value title ="Pending " value = {notComplete +" "} />
        <Value title ="Low " value ={low +" "} />
        <Value title ="Med " value ={mid +" "} />
        <Value title ="High " value ={high +" "} />

    </div>
)
}
export default Statusbar  ;