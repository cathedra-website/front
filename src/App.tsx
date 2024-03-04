import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { Home } from './pages/Home/Home'
import { HistoryPage } from './pages/history/HistoryPage'

function App() {

  return <div> 
    <Header />
    <div className='px-36'>
      <HistoryPage />
    </div>
    <Footer />
  </div>
}

export default App
