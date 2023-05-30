// "use client"
// import Image from 'next/image'
// import React, { useState } from 'react'
// import { NewTodo } from './lib/drizzel'
// import { json } from 'stream/consumers'
// export default function AddTodo() {
//     const[tasks,settask]=useState<NewTodo>({
//         task:"",
//     })
//     const handlesubmit= async () => {
//         const res=await fetch('/api/Todo',{
//             method:"POST",
//             body:JSON.stringify({ 
//                 tasks:tasks.task
//             })
//         })
//         console.log(tasks);

//     }
    
//   return (
//     <div> 
//         <form className=' flex justify-center items-center gap-3'>
//             <input onChange={(e)=>settask({task:e.target.value})} className='rounded-full  px-5 py-2 mb-3 border focus:outline-secondary ' type='text'/>
//             <button>
//             <Image onClick={handlesubmit} src={'/todo.svg'} alt='logo' width={40} height={40} className='pb-2 shrink-0'/>

//             </button>


//         </form>
//     </div>
//   )
// }
