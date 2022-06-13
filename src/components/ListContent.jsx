import React from 'react'
import ListContentFooter from './ListContentFooter'
import ListItem from './ListItem'

const ListContent = () => {
  return (
    <div className='top-[130%] min-h-[470px] max-h-[470px] bg-white absolute w-full shadow-2xl p-2 text-gray-600 flex flex-col rounded '>
      <div className='min-h-[420px] max-h-[440px] overflow-auto'>
        {new Array(20).fill('Selam').map((x, i) => {
          return <ListItem key={i} />
        })}
      </div>
      <ListContentFooter />
    </div>
  )
}

export default ListContent