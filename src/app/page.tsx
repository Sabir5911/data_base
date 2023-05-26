import React from 'react'
import Todo from './Todo'

export default function Home() {
  return (
    <main className='bg-gradient-to-tr from-primary to-secondary  h-screen '>

      <div className='flex justify-center items-center pt-24'>
        <div className='bg-gradient-to-tr from-[#D9D9D9] to-[#D9D9D9] w-[382px] h-[515px] rounded-xl  opacity-80'>
          {/* @ts-ignore */}
          <Todo />

          <div className='w-1/2 h-2 bg-black rounded-xl opacity-80 mx-auto'>


          </div>
        </div>

      </div>

    </main>
  )
}
