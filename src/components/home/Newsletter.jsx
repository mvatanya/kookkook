import { motion } from 'framer-motion'
import Button from '../ui/Button'

function Newsletter() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-secondary rounded-2xl p-8 md:p-12 lg:p-16 text-center max-w-5xl mx-auto relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-primary opacity-10 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary opacity-10 rounded-full transform translate-x-1/3 translate-y-1/3"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Join the Kookkook Family</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive recipes, promotions, and be the first to know about new products.
          </p>
          
          <form className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <Button primary>Subscribe</Button>
          </form>
          
          <p className="text-white/70 mt-4 text-sm">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from Kookkook.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Newsletter