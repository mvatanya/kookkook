import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'

const NavItem = ({ to, children }) => (
  <NavLink 
    to={to} 
    className={({ isActive }) => 
      `nav-link text-base font-medium px-4 py-2 transition duration-300 ${isActive ? 'text-primary font-bold' : 'text-gray-700 hover:text-primary-dark'}`
    }
  >
    {children}
  </NavLink>
)

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="z-10">
          <img 
            src="https://static.wixstatic.com/media/15bb16_48b868f4e4194f27a16f9be3da2ee078~mv2.png/v1/fill/w_120,h_114,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/KOOK%20KOOK%20LOGO-01%20.png" 
            alt="Kookkook Logo" 
            className="h-14 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/about">About</NavItem>
          <NavItem to="/products">Products</NavItem>
          <NavItem to="/news">News & Events</NavItem>
          <NavItem to="/where-to-buy">Where to Buy</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </nav>

        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden z-10 text-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <RiCloseLine size={28} /> : <RiMenu3Line size={28} />}
        </button>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-white z-[40] flex flex-col justify-center items-center transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
          <nav className="flex flex-col items-center space-y-6">
            <NavItem to="/" onClick={() => setIsOpen(false)}>Home</NavItem>
            <NavItem to="/about" onClick={() => setIsOpen(false)}>About</NavItem>
            <NavItem to="/products" onClick={() => setIsOpen(false)}>Products</NavItem>
            <NavItem to="/news" onClick={() => setIsOpen(false)}>News & Events</NavItem>
            <NavItem to="/where-to-buy" onClick={() => setIsOpen(false)}>Where to Buy</NavItem>
            <NavItem to="/contact" onClick={() => setIsOpen(false)}>Contact</NavItem>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header