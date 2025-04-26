import { motion } from 'framer-motion'
import Button from '../ui/Button'

const recipes = [
  {
    title: "Spicy Thai Noodles",
    description: "Quick and delicious spicy noodles with vegetables and our Classic Sriracha.",
    image: "https://images.pexels.com/photos/1731535/pexels-photo-1731535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    time: "25 min"
  },
  {
    title: "Sriracha Chicken Wings",
    description: "Crispy chicken wings glazed with our Extra Hot Sriracha sauce.",
    image: "https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    time: "40 min"
  },
  {
    title: "Spicy Avocado Toast",
    description: "Creamy avocado toast with a kick of our Garlic Sriracha.",
    image: "https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    time: "10 min"
  }
]

function RecipeCard({ title, description, image, time, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white text-primary px-3 py-1 rounded-full text-sm font-medium">
          {time}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button secondary className="text-sm px-4 py-2">View Recipe</Button>
      </div>
    </motion.div>
  )
}

function RecipeSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recipes with Kookkook</h2>
            <p className="text-xl text-gray-600 max-w-2xl">
              Discover delicious ways to use our sriracha in your everyday cooking.
            </p>
          </div>
          <Button primary className="mt-6 md:mt-0">View All Recipes</Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} {...recipe} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecipeSection