"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { NewTodo } from './lib/drizzel'
// export default function AddTodo() {
//     const[task,settask]=useState<NewTodo>({
//         task:"",
//     })
//     const handlesubmit= async () => {
//         const res=await fetch('/api/Todo',{
//             method:"POST",
//             body:JSON.stringify({ 
//                 task:task.task
//             })
//         })
//         console.log(task);

//     }
    


export default function AddTodo(){
    const [task,settask]=useState<NewTodo>({
        task:""
    })
console.log(task);

    const HandleSubmit=async ()=>{
        const res =await fetch('/api/Todo',{
            method:"POST",
            body:JSON.stringify({
                task:task.task
            })
        })

    }
  return (
    <div> 
        <form className=' flex justify-center items-center gap-3 '>
            <input onChange={(elm)=>settask({task:elm.target.value})} className='rounded-full mt-5 px-5 py-2  mb-3 border focus:outline-secondary ' type='text'/>
            <button onClick={HandleSubmit} >
            <Image  src={'/todo.svg'} alt='logo' width={40} height={40} className='pb-2 shrink-0'/>

            </button>


        </form>
    </div>
  )
}
