import { motion } from 'framer-motion'
import { useState } from 'react'
import Button from '../components/ui/Button'

const retailers = [
  {
    id: 1,
    name: "Foodland Supermarket",
    address: "123 Bangkok Mall, Sukhumvit Road, Bangkok",
    phone: "+66 2 123 4567",
    website: "foodland.co.th",
    category: "Supermarket"
  },
  {
    id: 2,
    name: "Thailand Gourmet",
    address: "45 Silom Road, Bangrak, Bangkok",
    phone: "+66 2 234 5678",
    website: "thaigourmet.com",
    category: "Specialty Store"
  },
  {
    id: 3,
    name: "Asia Market",
    address: "89 Chinatown, Yaowarat Road, Bangkok",
    phone: "+66 2 345 6789",
    website: "asiamarket.co.th",
    category: "Market"
  },
  {
    id: 4,
    name: "Gourmet House",
    address: "56 Thonglor Road, Watthana, Bangkok",
    phone: "+66 2 456 7890",
    website: "gourmethouse.th",
    category: "Specialty Store"
  },
  {
    id: 5,
    name: "Central Food Hall",
    address: "Central World, Ratchadamri Road, Bangkok",
    phone: "+66 2 567 8901",
    website: "centralfoodhall.com",
    category: "Supermarket"
  },
  {
    id: 6,
    name: "Thai Delights",
    address: "123 Chiang Mai Road, Chiang Mai",
    phone: "+66 53 123 4567",
    website: "thaidelights.co.th",
    category: "Specialty Store"
  }
]

const onlineRetailers = [
  {
    id: 1,
    name: "KookkookOfficial.com",
    description: "Our official online store with our full product range and exclusive bundles.",
    link: "#"
  },
  {
    id: 2,
    name: "ThaiGrocer.com",
    description: "Thailand's largest online grocery platform featuring all Kookkook products.",
    link: "#"
  },
  {
    id: 3,
    name: "GlobalTasteBuds.com",
    description: "International shipping available for customers outside Thailand.",
    link: "#"
  }
]

function RetailerCard({ retailer }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-bold mb-2">{retailer.name}</h3>
      <div className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full inline-block mb-3">
        {retailer.category}
      </div>
      <div className="space-y-2 text-gray-600 mb-4">
        <p className="flex items-start">
          <svg className="w-5 h-5 mr-2 text-primary shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span>{retailer.address}</span>
        </p>
        <p className="flex items-center">
          <svg className="w-5 h-5 mr-2 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <span>{retailer.phone}</span>
        </p>
        <p className="flex items-center">
          <svg className="w-5 h-5 mr-2 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
          </svg>
          <a href={`https://${retailer.website}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            {retailer.website}
          </a>
        </p>
      </div>
      <Button secondary className="w-full">Get Directions</Button>
    </div>
  )
}

function WhereToBuy() {
  const [activeFilter, setActiveFilter] = useState('All')
  
  const filteredRetailers = activeFilter === 'All' 
    ? retailers 
    : retailers.filter(retailer => retailer.category === activeFilter)
    
  const filterOptions = ['All', 'Supermarket', 'Specialty Store', 'Market']
  
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Where to Buy
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl text-white/90 leading-relaxed"
            >
              Find Kookkook Sriracha at these locations in Thailand or shop online for global delivery.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Store Locator */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Retail Locations</h2>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {filterOptions.map(option => (
                <button 
                  key={option}
                  onClick={() => setActiveFilter(option)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeFilter === option 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRetailers.map(retailer => (
                <motion.div 
                  key={retailer.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <RetailerCard retailer={retailer} />
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Can't find a store near you?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Contact us for assistance in finding a local retailer or place a bulk order directly.
            </p>
            <Button primary>Contact Sales Team</Button>
          </div>
        </div>
      </section>
      
      {/* Online Retailers */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Shop Online</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {onlineRetailers.map((retailer, index) => (
              <motion.div 
                key={retailer.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border-t-4 border-primary"
              >
                <h3 className="text-xl font-bold mb-3">{retailer.name}</h3>
                <p className="text-gray-600 mb-6">{retailer.description}</p>
                <a 
                  href={retailer.link} 
                  className="text-primary font-semibold hover:underline flex items-center"
                >
                  Visit Store
                  <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* International Shipping */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary/10 rounded-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">International Shipping</h2>
                <p className="text-lg text-gray-700 mb-6">
                  We ship Kookkook Sriracha to sauce lovers worldwide! Our international shipping partners ensure your favorite sriracha arrives safely, no matter where you are.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Shipping to over 50 countries</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Secure packaging to preserve flavor</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Bulk discounts for large orders</span>
                  </li>
                </ul>
                <Button primary>Shop Global Store</Button>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-secondary/20 rounded-lg transform translate-x-4 translate-y-4"></div>
                <img 
                  src="https://images.pexels.com/photos/2859016/pexels-photo-2859016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="International Shipping" 
                  className="w-full h-auto rounded-lg shadow-lg relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhereToBuy