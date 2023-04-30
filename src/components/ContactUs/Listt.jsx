import React from 'react'


const Listt = ({logo,title,para,link}) => {

  return (
    <div className=' '>

    <div className=' text-white border gap-4 flex w-[568px] h-[129px] py-4 my-3 rounded-xl px-7'>
        <div className='flex  items-center justify-end '>
           <img className='w-[40px]' src={logo}/>
        </div>
        <div>
        <div className='flex flex-col gap-1'>
            <div className=' text-TextWhite'>

            <h1 className=' sm:font-bold font-lato text-[24px]'>
                {title}
            </h1>
            <p className='sm:text-[20px] font-lato font-regular'>{para}</p>
            </div>
            <a href='#' className="sm:text-xs underline">{link}</a>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Listt