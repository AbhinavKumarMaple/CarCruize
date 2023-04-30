import React from 'react'
import CARCRUIZE_mascot from '../assets/asset/CARCRUIZE_mascot.png'
import ontime from '../assets/asset/ontime.png'
import delkey from '../assets/asset/delkey.png'
import serv from '../assets/asset/serv.png'
import yellodot from '../assets/asset/yellodot.png'
const BottomContant = () => {
  return (
    <div className= 'mt-[80px] relative bg-white w-full h-[202px] flex justify-center items-center'>
          <img className='absolute left-28 max-h-[310px] max-w-[241px] flex justify-center items-center' src={CARCRUIZE_mascot}/>
          <div></div>
          <div className='h-[119px] mx-2 w-[119px] bg-zinc-800 items-center rounded-full justify-center flex'>
              <img src={delkey} className='w-[61px] h-[61px] '/>
          </div>
          <div className='flex'>
              <img src={yellodot}/>
              <img src={yellodot}/>
              <img src={yellodot}/>
              <img src={yellodot}/>
              <img src={yellodot}/>
              <img src={yellodot}/>
              <img src={yellodot}/>
              <img src={yellodot}/>
              <img src={yellodot}/>
              <img src={yellodot}/>
          </div>
          <div className='h-[119px] w-[119px] mx-2 bg-zinc-800 items-center rounded-full justify-center flex'>
              <img src={delkey} className='w-[61px] h-[61px] '/>
          </div>
          <div className='flex'>
              <img src={yellodot}/>
              <img src={yellodot}/>
              <img src={yellodot}/>
              <img src={yellodot}/>
              <img src={yellodot}/>
              <img src={yellodot}/>
              <img src={yellodot}/>
              <img src={yellodot}/>
              <img src={yellodot}/>
              <img src={yellodot}/>
          </div>
          <div className='h-[119px] w-[119px] mx-2 bg-zinc-800 items-center rounded-full justify-center flex'>
              <img src={delkey} className='w-[61px] h-[61px] '/>
          </div>

    </div>
  )
}

export default BottomContant