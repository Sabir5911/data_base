import { sql } from '@vercel/postgres';
import { NextRequest,NextResponse } from 'next/server'

import { NewTodo,db,NewTodos } from '@/app/lib/drizzel';

export async function  GET(NextRequest:NextRequest){

try{
    await sql`CREATE TABLE IF NOT EXISTS Todos(id serial, task varchar(255));`
  const res =await db.select().from(NewTodos)
    return NextResponse.json({data:res})

}catch(err){
    console.log((err as {message:string}).message);
    
return NextResponse.json({message:"some thing went wrong"})
}     
}



 
export async function  POST(NextRequest:NextRequest){
    const req= await NextRequest.json()

    try{
        if(req.task){

            const res= await db.insert(NewTodos).values({
                task: req.task, 
            }).returning();
            console.log(res);
        
            return NextResponse.json({message:"task added in to the data base",res})

        }else{
            throw new Error('you did not enter tasks')
        }
    
    }catch(err){
    return NextResponse.json({message:"some thing went wrong"})
    }     
    }