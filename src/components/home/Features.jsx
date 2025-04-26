import { motion } from 'framer-motion'
import { FaLeaf, FaFire, FaPepperHot, FaGlobeAsia } from 'react-icons/fa'

const features = [
  {
    icon: <FaLeaf className="text-3xl text-green-500" />,
    title: "All Natural",
    description: "Made with fresh, high-quality ingredients and no artificial preservatives."
  },
  {
    icon: <FaFire className="text-3xl text-primary" />,
    title: "Perfect Heat",
    description: "Balanced heat that adds flavor without overwhelming your taste buds."
  },
  {
    icon: <FaPepperHot className="text-3xl text-red-600" />,
    title: "Authentic Recipe",
    description: "Traditional recipe passed down through generations of Thai cooking."
  },
  {
    icon: <FaGlobeAsia className="text-3xl text-secondary" />,
    title: "Global Inspiration",
    description: "Inspired by Thailand, crafted for the world's cooking traditions."
  }
]

function FeatureCard({ icon, title, description, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 p-3 bg-gray-50 rounded-full">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  )
}

function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Makes Kookkook Special</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our sriracha isn't just a sauce, it's an experience crafted with passion and tradition.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features