import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '../ui/Button'

const products = [
  {
    id: 1,
    name: "Classic Sriracha",
    description: "Our original recipe with the perfect balance of heat and flavor.",
    image: "https://static.wixstatic.com/media/15bb16_ff778dbfa8c54cbd9f43e973c593b6f3~mv2.png/v1/crop/x_0,y_86,w_1146,h_2876/fill/w_558,h_1410,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Super%20hot%20kook%20kook%20525g.png",
    color: "bg-primary",
    heatLevel: "Medium"
  },
  {
    id: 2,
    name: "Extra Hot Sriracha",
    description: "For those who like it extra spicy, our hottest sriracha sauce.",
    image: "https://static.wixstatic.com/media/15bb16_ff778dbfa8c54cbd9f43e973c593b6f3~mv2.png/v1/crop/x_0,y_86,w_1146,h_2876/fill/w_558,h_1410,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Super%20hot%20kook%20kook%20525g.png",
    color: "bg-red-700",
    heatLevel: "Very Hot"
  },
  {
    id: 3,
    name: "Garlic Sriracha",
    description: "Our classic sriracha infused with rich, aromatic garlic flavors.",
    image: "https://static.wixstatic.com/media/15bb16_ff778dbfa8c54cbd9f43e973c593b6f3~mv2.png/v1/crop/x_0,y_86,w_1146,h_2876/fill/w_558,h_1410,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Super%20hot%20kook%20kook%20525g.png",
    color: "bg-amber-700",
    heatLevel: "Medium"
  }
]

function ProductShowcase() {
  const [activeProduct, setActiveProduct] = useState(products[0])

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Signature Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our range of sriracha sauces, each crafted to elevate your culinary experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            key={activeProduct.id}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className={`absolute inset-0 rounded-full ${activeProduct.color} opacity-10 blur-3xl transform -translate-x-8 translate-y-8`}></div>
              <img 
                src={activeProduct.image} 
                alt={activeProduct.name} 
                className="max-h-[460px] w-auto relative z-10 transform transition-transform duration-500 hover:rotate-6"
              />
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="absolute top-10 -right-4 bg-secondary text-white text-sm font-bold px-4 py-1 rounded-full shadow-lg"
              >
                {activeProduct.heatLevel}
              </motion.div>
            </div>
          </motion.div>
          
          <div>
            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-3xl font-bold mb-4">{activeProduct.name}</h3>
              <p className="text-xl text-gray-600 mb-8">{activeProduct.description}</p>
              
              <div className="mb-10">
                <h4 className="text-lg font-semibold mb-3">Perfect for:</h4>
                <ul className="grid grid-cols-2 gap-3 text-gray-700">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Stir-fries</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Marinades</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Dipping sauce</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Noodle soups</span>
                  </li>
                </ul>
              </div>
              
              <Button primary>Learn More</Button>
            </motion.div>
            
            <div className="mt-12">
              <h4 className="text-lg font-semibold mb-4">Explore our range:</h4>
              <div className="flex space-x-4 items-center">
                {products.map(product => (
                  <button
                    key={product.id}
                    onClick={() => setActiveProduct(product)}
                    className={`w-16 h-16 rounded-full overflow-hidden border-4 transition-all ${
                      activeProduct.id === product.id ? 'border-primary scale-110' : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase