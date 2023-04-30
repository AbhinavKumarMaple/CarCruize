import React from 'react'
import yamaha_car from '../assets/asset/yamaha_car.png'
const Ads = () => {
    const carInspectionPrice = "@299/-*"
  return (
    <div className='border bg-gradient-to-tr from-red-100 to-slate-300  '>

    <div style={{ 
      backgroundImage: `url(${yamaha_car})` 
    }} className='bg-no-repeat bg-right'>
        <div className="h-[256px] pl-20 ">
          <h1 className="text-[32px] font-bold py-4">Don’t know your car problem ?</h1>
          <h1 > <span className="text-[32px] font-bold">Get your</span>  <span className="text-[32px] font-extrabold" >CAR INSPECTION</span>   <span className="text-[32px] font-bold">done</span >  <span className='text-red-800 text-[32px] font-extrabold'> {carInspectionPrice}</span>  </h1>
          <button className='my-9 max-h-[60px] max-w-[412px] w-full h-full bg-pila text-[30px] font-semibold rounded-[10px] '>Book Now</button>
        </div>
    </div>
    </div>
  )
}

export default Ads