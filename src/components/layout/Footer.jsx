import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/">
              <img 
                src="https://static.wixstatic.com/media/15bb16_48b868f4e4194f27a16f9be3da2ee078~mv2.png/v1/fill/w_120,h_114,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/KOOK%20KOOK%20LOGO-01%20.png" 
                alt="Kookkook Logo" 
                className="h-16 w-auto mb-4"
              />
            </Link>
            <p className="text-gray-400 mt-4">Experience the authentic taste of Thailand with our locally crafted sriracha sauce.</p>
            <div className="flex mt-6 space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/news" className="text-gray-400 hover:text-white transition-colors">News & Events</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Spice Street</li>
              <li>Bangkok, Thailand 10110</li>
              <li>info@kookkook.com</li>
              <li>+66 2 123 4567</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to receive updates on new products and promotions.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-gray-800"
                required
              />
              <button 
                type="submit" 
                className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500">© {currentYear} Kookkook Sriracha. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><a href="#" className="text-gray-500 hover:text-white text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-gray-500 hover:text-white text-sm">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer