const ListContentFooter = () => {
  return (
    <div className='flex items-center py-3 justify-between h-full text-xs cursor-pointer'>
      <div className='text-green-600 font-bold'>3 kaldı</div>
      <div className='active:text-blue-600 active:font-bold active:text-xl  hover:text-blue-600 text-gray-600 text-xl'>
        Tümü
      </div>
      <div className='text-gray-600 text-xs hover:text-blue-600'>Tamamlanan</div>
    </div>
  )
}

export default ListContentFooter
