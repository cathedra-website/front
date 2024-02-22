import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Home } from './pages/Home/Home'

function App() {

  return <div> 
    <Header />
      <Home />
      <div className='h-[800px] w-full'></div>
    <Footer />
  </div>
}

export default App
