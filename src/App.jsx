import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import News from './pages/News'
import WhereToBuy from './pages/WhereToBuy'
import Contact from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="news" element={<News />} />
        <Route path="where-to-buy" element={<WhereToBuy />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App