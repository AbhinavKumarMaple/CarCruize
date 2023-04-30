import React from 'react'
import MainContent from './MainContent'
import bg from './assets/bg.jpg'
const HomeMain = () => {
  return (
<div className='bg-no-repeat bg-cover bg-center bg-opacity-70' style={{backgroundImage: `url(${bg})`}}>
  <MainContent/>
</div>
  )
}
export default HomeMain