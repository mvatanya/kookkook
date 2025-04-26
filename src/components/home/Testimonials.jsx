import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    text: "Kookkook Sriracha has become an essential part of my cooking. The rich flavor and perfect heat level make every dish better!",
    author: "Sarah J.",
    role: "Home Chef"
  },
  {
    text: "As a professional chef, I'm very particular about my ingredients. Kookkook's sriracha has the authentic taste and consistency I look for.",
    author: "Chef Michael T.",
    role: "Restaurant Owner"
  },
  {
    text: "I've tried many sriracha brands, but Kookkook stands out with its fresh ingredients and balanced heat. It's my go-to hot sauce now!",
    author: "David L.",
    role: "Food Blogger"
  }
]

function Testimonials() {
  const [current, setCurrent] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length)
    }, 6000)
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">What Our Customers Say</h2>
          
          <div className="relative h-64">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{ 
                  opacity: current === index ? 1 : 0,
                  x: current === index ? 0 : 100,
                  zIndex: current === index ? 20 : 10
                }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0"
              >
                <blockquote className="text-xl md:text-2xl text-white mb-6 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                <div className="text-white">
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-white/70">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  current === index ? 'bg-white' : 'bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials