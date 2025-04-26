import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import anh1 from './assets/1.png'
import Menu from './component/Menu'
import img from './assets/slider.png'
import VerticalMenu from './component/VerticalMenu'
import NewsGrid from './component/NewsGrid'
import Header from './component/Header'
import Footer from './component/Footer'
import HighlightSection from './component/HighlightSection'
function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
       <Menu />
       <div className="Conatainer">
        <div className="row"> 
          <div className="col-12 justify-content-center">
            <div className="d-flex justify-content-center">
              <img src={img} alt="" />
            </div>
          
          </div>
        </div>
        <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <VerticalMenu />
              <NewsGrid />
            </div>
          </div>
       </div>
      
      <HighlightSection />
       <Footer/>
        <Header/>
        
    </>
  )
}

export default App
