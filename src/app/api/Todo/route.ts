import { Todo,NewTodo,db,todostable } from '@/app/lib/drizzel';
import { sql } from '@vercel/postgres';
import { NextRequest,NextResponse } from 'next/server'
import { Message } from 'postcss';
import { cache } from 'react';

export async function GET(requesr:NextRequest){


    // const client = await db.connect();
    try{

        await sql`CREATE TABLE IF NOT EXISTS Todos(id serial, Task varchar(256));`
    
    
       const res= await db.select().from(todostable)      
       console.log(res);
       
        // const res= await client.sql`SELECT * FROM Todos`
        return NextResponse.json({message:res})
 
    }catch(err){ 
        console.log((err as {message:string}).message);
        
return new NextResponse("ERROR 404")   
    }
}

export async function POST(request:NextRequest){
    const req=await request.json()
    try{
        if(req.task){
            // const client = await db.connect();
            const res=await db.insert(todostable).values({
                tasks:req.task
            }).returning()
            console.log(res);
            
            return NextResponse.json({message:"your data has been added  :)"})

        }else{
    throw new Error("Enter the Task!!!!")     
}
    }catch(err){
return NextResponse.json({message:(err as {message:string}).message})
    }

}