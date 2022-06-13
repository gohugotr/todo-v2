import Input from './components/Input'
import Header from './components/Header'
import ListContent from './components/ListContent'

const App = () => {

  return (
    <div className='md:container md:mx-auto'>
      <Header>
        <Input />
        <ListContent/>
      </Header>
    </div>
  )
}

export default App
