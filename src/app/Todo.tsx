import React from 'react'
import { Todo } from './lib/drizzel'
const getdata = async () => {
    try {
        const res = await fetch('http:127.0.0.1:3000/api/Todo')

        if (!res.ok) {
            throw new Error("failwd to fetch data")
        }

       const data= await res.json()
       return data
    } catch (err) {
        console.log(err)
    }

}
const Todo=async()=> {      
    const res:{message:Todo[]}=await getdata()
    console.log(res);
    
    return (
      <>
             {
                res.message.map((elm)=>(
                    <div className='m-2'> 
                         <div className='bg-white p-4 flex shadow-lg rounded-lg items-center gap-5'>     
                    <div className='h-3 w-3 bg-secondary rounded-full'> </div>
                    <div className='text-lg font-medium '>{elm.tasks}</div>
    
                    </div>

                   
                </div>
                ))
            } 
           
           </>

    )
}
export default Todo
