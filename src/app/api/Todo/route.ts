import { sql } from '@vercel/postgres';
import { NextRequest,NextResponse } from 'next/server'

import {db,todostable } from '@/app/lib/drizzel';

// export async function  GET(NextRequest:NextRequest){

// try{
//     await sql`CREATE TABLE IF NOT EXISTS Todos(id serial, task varchar(255));`
//   const res =await db.select().from(todostable)
//     return NextResponse.json({data:res})

// }catch(err){
//     console.log((err as {message:string}).message);
    
// return NextResponse.json({message:"some thing went wrong"})
// }     
// }

 
// export async function  POST(NextRequest:NextRequest){
//     const req= await NextRequest.json()

//     try{
//         if(req.task){

//             const res= await db.insert(todostable).values({
//                 task: req.task, 
//             }).returning();
//             console.log(res);
        
//             return NextResponse.json({message:"task added in to the data base",res})

//         }else{
//             throw new Error('you did not enter tasks')
//         }
    
//     }catch(err){
//     return NextResponse.json({message:"some thing went wrong"})
//     }     
//     }



export async function GET (NextRequest:NextRequest){

    try{

         await sql`CREATE TABLE IF NOT EXISTS Todos(id serial, task varchar(255));`

         var req= await db.select().from(todostable)
         return NextResponse.json({data:req})

    }catch(err){
 throw new Error("Some thing went wrong")
    }



}


export async function POST(NextRequest:NextRequest) {

    const req= await NextRequest.json()
    try{
        if(req.task){
            const res= await db.insert(todostable).values({
                task:req.task
            }).returning()
             return NextResponse.json({message:"task added in to the data base",res})
 
        } else{
            throw new Error(" FAiled to add data in data base");
            
        }
    }catch(err){

        console.log('failed to add data');
        
    }


}
