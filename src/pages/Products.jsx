import { motion } from 'framer-motion'
import Button from '../components/ui/Button'

const products = [
  {
    id: 1,
    name: "Classic Sriracha",
    description: "Our original recipe with the perfect balance of heat and flavor.",
    longDescription: "The sauce that started it all. Our Classic Sriracha offers the perfect blend of fresh chili peppers, garlic, vinegar, and spices that complement any dish without overwhelming it. Beloved for its balanced heat and rich flavor profile.",
    image: "https://static.wixstatic.com/media/15bb16_ff778dbfa8c54cbd9f43e973c593b6f3~mv2.png/v1/crop/x_0,y_86,w_1146,h_2876/fill/w_558,h_1410,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Super%20hot%20kook%20kook%20525g.png",
    color: "bg-primary",
    heatLevel: "Medium",
    sizes: ["250ml", "500ml", "1L"]
  },
  {
    id: 2,
    name: "Extra Hot Sriracha",
    description: "For those who like it extra spicy, our hottest sriracha sauce.",
    longDescription: "Not for the faint of heart. Our Extra Hot Sriracha kicks things up several notches by incorporating habanero peppers alongside our traditional Thai chilies. The result is an intensely flavorful sauce with serious heat that still maintains the classic sriracha flavor profile.",
    image: "https://static.wixstatic.com/media/15bb16_ff778dbfa8c54cbd9f43e973c593b6f3~mv2.png/v1/crop/x_0,y_86,w_1146,h_2876/fill/w_558,h_1410,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Super%20hot%20kook%20kook%20525g.png",
    color: "bg-red-700",
    heatLevel: "Very Hot",
    sizes: ["250ml", "500ml"]
  },
  {
    id: 3,
    name: "Garlic Sriracha",
    description: "Our classic sriracha infused with rich, aromatic garlic flavors.",
    longDescription: "For garlic lovers, this variation of our classic recipe amplifies the garlic notes for an even more aromatic experience. The additional roasted garlic creates a deep, savory flavor that pairs particularly well with noodles, stir-fries, and as a marinade ingredient.",
    image: "https://static.wixstatic.com/media/15bb16_ff778dbfa8c54cbd9f43e973c593b6f3~mv2.png/v1/crop/x_0,y_86,w_1146,h_2876/fill/w_558,h_1410,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Super%20hot%20kook%20kook%20525g.png",
    color: "bg-amber-700",
    heatLevel: "Medium",
    sizes: ["250ml", "500ml"]
  },
  {
    id: 4,
    name: "Mild Sriracha",
    description: "A gentler version of our classic sriracha for those who prefer less heat.",
    longDescription: "All the flavor with a gentler kick. Our Mild Sriracha is perfect for those who love the complex flavor profile of sriracha but prefer a more subtle heat level. Great for family meals and introducing friends to the wonderful world of Thai hot sauces.",
    image: "https://static.wixstatic.com/media/15bb16_ff778dbfa8c54cbd9f43e973c593b6f3~mv2.png/v1/crop/x_0,y_86,w_1146,h_2876/fill/w_558,h_1410,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Super%20hot%20kook%20kook%20525g.png",
    color: "bg-orange-500",
    heatLevel: "Mild",
    sizes: ["250ml", "500ml"]
  }
]

function HeatIndicator({ level }) {
  const levels = {
    "Mild": 1,
    "Medium": 2,
    "Hot": 3,
    "Very Hot": 4
  }
  
  const dots = levels[level] || 2
  
  return (
    <div className="flex items-center space-x-1">
      {[...Array(4)].map((_, i) => (
        <div 
          key={i} 
          className={`w-3 h-3 rounded-full ${i < dots ? 'bg-primary' : 'bg-gray-300'}`}
        ></div>
      ))}
      <span className="ml-2 text-sm font-medium">{level}</span>
    </div>
  )
}

function ProductCard({ product, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all group"
    >
      <div className="p-8 flex flex-col items-center text-center">
        <div className="relative mb-6 group-hover:scale-105 transition-transform duration-500">
          <div className={`absolute inset-0 ${product.color} opacity-10 blur-xl rounded-full`}></div>
          <img 
            src={product.image} 
            alt={product.name} 
            className="h-60 w-auto relative z-10"
          />
        </div>
        
        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        
        <div className="mb-6">
          <HeatIndicator level={product.heatLevel} />
        </div>
        
        <div className="flex space-x-2 mb-6">
          {product.sizes.map(size => (
            <span key={size} className="px-3 py-1 bg-gray-100 rounded-full text-sm">
              {size}
            </span>
          ))}
        </div>
        
        <Button primary>View Details</Button>
      </div>
    </motion.div>
  )
}

function Products() {
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
              Our Products
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl text-white/90 leading-relaxed"
            >
              Discover the full range of Kookkook sriracha sauces, each crafted with care and passion.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Products List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Product */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full mb-4">Featured Product</span>
              <h2 className="text-3xl font-bold mb-6">Classic Sriracha Gift Set</h2>
              <p className="text-lg text-gray-700 mb-6">
                The perfect gift for hot sauce enthusiasts. Our Classic Sriracha Gift Set includes our four signature sauces in elegant packaging, along with a recipe booklet to inspire culinary creativity.
              </p>
              
              <div className="mb-8">
                <h3 className="font-semibold mb-3">Set Includes:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>1 x Classic Sriracha (250ml)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>1 x Extra Hot Sriracha (250ml)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>1 x Garlic Sriracha (250ml)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>1 x Mild Sriracha (250ml)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Kookkook Recipe Collection Booklet</span>
                  </li>
                </ul>
              </div>
              
              <Button primary>Shop Now</Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-lg transform translate-x-4 translate-y-4"></div>
              <img 
                src="https://images.pexels.com/photos/5980866/pexels-photo-5980866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Kookkook Gift Set" 
                className="w-full h-auto rounded-lg shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products