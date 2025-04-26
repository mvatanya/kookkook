import { motion } from 'framer-motion'
import Button from '../components/ui/Button'

function About() {
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
              Our Story
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl text-white/90 leading-relaxed"
            >
              Learn how Kookkook went from a family recipe to Thailand's favorite sriracha sauce.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Our Journey */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">From Thailand to the World</h2>
              <p className="text-lg text-gray-700 mb-4">
                Founded in 2010, Kookkook began with a simple vision - to share the authentic taste of Thai sriracha with the world. What started as a family recipe passed down through generations has now grown into a beloved brand.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Our founder, Somchai Kookkook, learned the art of making sriracha from his grandmother, who would prepare fresh batches using locally grown chilies and traditional methods. Today, we stay true to those same principles.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Every bottle of Kookkook sriracha is still crafted with care using premium ingredients and time-honored techniques, ensuring that authentic Thai flavor in every drop.
              </p>
              <Button primary>Our Heritage</Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-lg transform translate-x-4 translate-y-4"></div>
              <img 
                src="https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Chili peppers being harvested" 
                className="w-full h-auto rounded-lg shadow-lg relative z-10"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide us in creating the perfect sriracha experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary text-3xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Quality Ingredients</h3>
              <p className="text-gray-600">
                We select only the finest chili peppers and ingredients, supporting local Thai farmers and sustainable growing practices.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary text-3xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Traditional Methods</h3>
              <p className="text-gray-600">
                We honor time-tested Thai techniques while incorporating modern standards to create the perfect sauce every time.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary text-3xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to environmentally friendly practices, from sourcing ingredients to our recyclable packaging.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate people behind Kookkook who bring our sriracha from our kitchen to your table.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Somchai Kookkook", role: "Founder & Master Sauce Maker", image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
              { name: "Niran Suthi", role: "Head of Production", image: "https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
              { name: "Malai Chao", role: "Chief Flavor Innovator", image: "https://images.pexels.com/photos/3771807/pexels-photo-3771807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }
            ].map((member, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary mb-4">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About