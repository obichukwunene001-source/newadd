import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import UserDetails from "./components/UserDetails"
import OrderSummary from "./components/OrderSummary"
import Nomatch from "./components/Nomatch"
import Products from "./components/Products"
import FeaturedProducts from './components/FeaturedProducts'
import NewProducts from './components/NewProducts'
import Users from './components/Users'
import Admin from './components/Admin'



function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Hero />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='/ordersum' element={<OrderSummary />}></Route>
          <Route path='/products' element={<Products />}>
            <Route index element={<FeaturedProducts />} />
            <Route path='featured' element={<FeaturedProducts />} />
            <Route path='new' element={<NewProducts />} />
          </Route>
          <Route path='users' element={<Users />}>
            <Route path=':userId' element={<UserDetails />} />
            <Route path='admin' element={<Admin />} />
          </Route >
          <Route path='*' element={<Nomatch />}></Route>
        </Routes>
      </main>
    </>
  )
}

export default App;


