import Task from './Task';
import React, { useState } from 'react';



const Todo = () =>{
    const [list,setList] = useState<{text:string,timeStamp:number,isDone:boolean}[]>([]);
    const [completedList, setCompletedList] = useState<{text:string,timeStamp:number,isDone:boolean}[]>([]);
    const [inputValue,setInputValue] = useState<string>("");

    const onChangeGetInputValue = (ev:React.ChangeEvent<HTMLInputElement>) =>{
        setInputValue(ev.target.value);
    }
    const resetInputField = () => {
        var temp = inputValue;
        var inputField = document.querySelector('input');
        if(inputField!=null){
            inputField.value = "";
        }
        setInputValue("");
    }

    const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        if(ev.key === "Enter"){
            addToList();   
        }
    }

    const addToList = () =>{
        if(inputValue === ""){
            alert("Task cannot be empty");
        }else{
            var newList = list;
            const newTimeStamp = (new Date()).getTime();
            //console.log("" + inputValue + " " + newTimeStamp + " " + false);
            newList.push({text:inputValue,timeStamp:newTimeStamp,isDone:false});
            setList(newList);
            //console.log(list);
            resetInputField();            
        }
    }

    const markDoneTask = (toMarkDoneTimeStamp:number) =>{
        var newList = list;
        const task = newList[newList.findIndex(x => x.timeStamp === toMarkDoneTimeStamp)];

        var newCList = completedList;
        const newTimeStamp = (new Date()).getTime();
        newCList.push({text:task.text, timeStamp:newTimeStamp, isDone:true});
        setCompletedList(newCList);
        newList = newList.filter(x => x.timeStamp !== toMarkDoneTimeStamp);
        setList(newList);
    }

    const deleteTask = (toDeleteTimeStamp:number) =>{
        var newList = list.filter(x => x.timeStamp !== toDeleteTimeStamp);;
        setList(newList);
    }

    return (
        <div className='mx-auto max-w-4xl'>
            {/* task input and add button */}
            <div className='flex space-x-1'>
            <input className='border border-gray-400 w-full text-2xl' 
            onKeyDown={onKeyDownCallback} onChange={onChangeGetInputValue}></input>
            <button className='border border-gray-400 w-8 font-bold' onClick={addToList}>+</button>
            </div>
 
            {/* tasks section */}
            {list.map(x => <Task text={x.text} timeStamp={x.timeStamp} isDone={x.isDone} markDoneFunction={markDoneTask} deleteFunction={deleteTask}></Task>).reverse()}
            {completedList.map(x => <Task text={x.text} timeStamp={x.timeStamp} isDone={x.isDone} markDoneFunction={markDoneTask} deleteFunction={deleteTask}></Task>).reverse()}
        </div>
    )
}

export default Todo;