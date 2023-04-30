import React from 'react'
import MainContent from './MainContent'
import bg from './assets/bg.jpg'
const HomeMain = () => {
  return (
<div className='bg-no-repeat h-screen bg-fixed bg-cover  bg-opacity-70' style={{backgroundImage: `url(${bg})`}}>
  <MainContent/>
</div>
  )
}
export default HomeMain