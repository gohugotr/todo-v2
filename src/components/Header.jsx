import React from 'react'

const Header = (props) => {
  return (
    <div
      className="flex items-center justify-center w-full relative
    h-[600px] bg-[url('./img/zemin.jpg')] bg-cover">
      <div className='relative flex flex-col w-[400px]'>
        <div className='header-title'>TODO</div>
        {props.children}
      </div>
    </div>
  )
}

export default Header