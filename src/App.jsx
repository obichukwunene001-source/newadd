import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import OrderSummary from "./components/OrderSummary"
import Nomatch from "./components/Nomatch"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Hero />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path = '/ordersum' element={<OrderSummary />}></Route>
          <Route path = '*' element={<Nomatch />}></Route>

        </Routes>
      </main>
    </>
  )
}

export default App
