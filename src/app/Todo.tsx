import React from 'react'
import { todostable ,Todo} from './lib/drizzel'
// const getdata = async () => {
//     try {
//         const res = await fetch('http:127.0.0.1:3000/api/Todo',{
//             method: "GET",
//             cache:"no-store",
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         })

//         if (!res.ok) {
//             throw new Error("failwd to fetch Todo list ")
//         }

//        const data= await res.json()          
//        return data
       
//     } catch (err) {
//         console.log(err)
//     }

// }   










const FetchData= async()=>{
try{
    const data=await fetch("http:127.0.0.1:3000/api/Todo",{
        method:"GET",
        cache:'no-cache',
        headers:{
            "Content-Type": "application/json"

        }
    } )
    if(!data.ok){
        throw new Error("Error 404")
    }
    const res=await data.json()
    return res
}catch(err){
    throw new Error("Error 404")

}
   
}



const Todo=async()=> {      
     const data:{data:Todo[]}=await FetchData()
        
    console.log(data.data);
    
     
    return (
      <>   
             {   
                data.data.map((elm)=>(
                    <div >
 <div className='m-6 hover:scale-105 duration-300 '> 
                         <div className='bg-white p-4 flex shadow-lg rounded-lg items-center gap-5'>     
                    <div className='h-3 w-3 bg-secondary rounded-full'> </div>
                    <div className='text-lg font-medium '>{elm.task}</div>
                    </div>   
                    
                    </div>
                   

                   
                </div>
                ))
            } 
           
           </>       
    
    )
}
export default Todo
