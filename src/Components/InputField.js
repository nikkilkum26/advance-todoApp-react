import React, { useState } from 'react'

let InputField=(props)=>  {
    let [inputValue, setInputValue]= useState("");
    let [selectValue, setSelectValue]=useState("");
    let onInputChange =(event)=>{
        setInputValue(event.target.value)
    }
    let submit=()=>{
        if(inputValue){
        props.addTask(inputValue,selectValue)
        }
        setInputValue("");
        setSelectValue('1');
    }
        return (
            <div className="myclass">
                <br/>
                <input type="text" placeholder="Add New Task..." value={inputValue} onChange={onInputChange}/>
                <select value ={selectValue} onChange={(event)=> setSelectValue(event.target.value)}>
                    <option value="1"> LOW</option>
                    <option value="2"> MED</option>
                    <option value="3"> HIGH</option>
            
                </select>
               
                <button onClick={submit}>➕</button>
                <br/>
            </div>
        )
    
}

export default InputField
