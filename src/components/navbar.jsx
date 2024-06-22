import React from "react"

export default function Navbar(){
    return(
        <div className='w-full flex justify-end items-center py-5'>
            <ul className='flex'>
            {/* add line spacing */}
                <li className='mx-3 text-black cursor-pointer hover:border-b border-black text-lg'>What we do</li>
                <li className='mx-3 text-black cursor-pointer hover:border-b border-black text-lg'>Our work</li>
                <li className='mx-3 text-black cursor-pointer hover:border-b border-black text-lg'>Our tearm</li>
            </ul>
        </div>
    );
};