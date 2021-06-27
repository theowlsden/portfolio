import React from 'react'
import Image from 'next/image'

export default function Project_section() {
    return (
        <div className={`min-h-screen w-full h-screen flex px-8 md:px-16 flex-col bg-gray-800`}>
           <section className="  my-8">
               <h2 className="text-red-400 text-2xl md:text-3xl">
                   Projects
               </h2>
           </section>
           <section className="h-5/6 w-full">
               <div className=" w-full flex flex-col md:flex-row  md:w-9/12 bg-white shadow-lg rounded-2xl">
                   <section className="w-1/2 rounded-2xl ">
                       <img className="rounded-2xl " src={'/img/projects/ascii.jpeg'}/>
                   </section>
                   <section className='w-1/2'>

                   </section>

               </div>
           </section>
        </div>
    )
}
