const ListItem = (props) => {
  return (
    <div className='flex text-gray-600 font-normal p-2 cursor-pointer items-center justify-between rounded-sm hover bg:gray-200'>
      <div>
        <input type='checkbox' name='todo' id='todo' className='mr-2' />
        <span>Görev 1</span>
      </div>
      <div className='text-red-400 text-sm hover:text-red-600 hover:font-extrabold '>Sil</div>
    </div>
  )
}

export default ListItem
