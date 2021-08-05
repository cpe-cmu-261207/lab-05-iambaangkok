import React, { useState } from 'react';

type TaskProps = {
    text:string;
    timeStamp:number;
    isDone:boolean;
    markDoneFunction:Function;
    deleteFunction:Function;
}


const Task = ({text,timeStamp,isDone,markDoneFunction,deleteFunction}: TaskProps) =>{

    const [isMouseInside,setIsMouseInside] = useState<boolean>(false);

    const onMouseEnter = () =>{
        setIsMouseInside(true);
    }

    const onMouseLeave = () =>{
        setIsMouseInside(false);
    }

    return (
        <div className="flex justify-between h-8 items-center py-6 border-b" onMouseEnter={() => onMouseEnter()} onMouseLeave={() => onMouseLeave()}>
            <span className="text-2xl" style={isDone? {textDecoration:"line-through"}: {}}> {text} </span>
            <div className="flex space-x-1 items-center" style={(isMouseInside && !isDone)? {visibility:"visible"}:{visibility:"hidden"}}>
                <button className="bg-green-400 w-24 text-2xl"  onClick={() => markDoneFunction(timeStamp)}>Done</button>
                <button className="bg-red-400 w-24 text-2xl" onClick={() =>deleteFunction(timeStamp)}>Delete</button>
            </div>
        </div>
    )
}

export default Task;