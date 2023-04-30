import React from 'react'
import {FiAward} from "react-icons/fi"


const Listt = ({logo,title,para,link}) => {

  return (
    <div className=' text-white border gap-4 flex w-auto  py-4 my-3 rounded-xl px-7'>
        <div className='flex  items-center justify-end '>
            <FiAward size={28} className='border-2 rounded p-1'/>
        </div>
        <div>
        <div className='flex flex-col gap-1'>
            <div className=''>

            <h1 className=' sm:font-semibold'>
                {title}
            </h1>
            <p className='sm:text-xs sm:font-light'>{para}</p>
            </div>
            <a href='#' className="sm:text-xs underline">{link}</a>
        </div>
        </div>
    </div>
  )
}

export default Listt