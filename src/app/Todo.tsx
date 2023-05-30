import React from 'react'
import { NewTodo ,Todo} from './lib/drizzel'
const getdata = async () => {
    try {
        const res = await fetch('http:127.0.0.1:3000/api/Todo')

        if (!res.ok) {
            throw new Error("failwd to fetch Todo list ")
        }

       const data= await res.json()          
       return data
       
    } catch (err) {
        console.log(err)
    }

}   
const Todo=async()=> {      
    const res:{data:Todo[]}=await getdata()
   console.log(res.data);
   
    
     
//     return (
//       <>   
//              {   
//                 res.data.map((item)=>(
//                     <div >
//  <div className='m-6 hover:scale-105 duration-300 '> 
//                          <div className='bg-white p-4 flex shadow-lg rounded-lg items-center gap-5'>     
//                     <div className='h-3 w-3 bg-secondary rounded-full'> </div>
//                     <div className='text-lg font-medium '>{item.task}</div>
//                     </div>   
                    
//                     </div>
                   

                   
//                 </div>
//                 ))
//             } 
           
//            </>
    
//     )
}
export default Todo
