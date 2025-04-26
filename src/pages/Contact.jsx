import { motion } from 'framer-motion'
import Button from '../components/ui/Button'

function Contact() {
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
              Contact Us
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl text-white/90 leading-relaxed"
            >
              We'd love to hear from you! Reach out with questions, feedback, or partnership opportunities.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-700 mb-8">
                Have a question about our products, want to place a bulk order, or interested in stocking Kookkook in your store? Fill out the form and our team will get back to you as soon as possible.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <select 
                    id="subject" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="order-support">Order Support</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="wholesale">Wholesale Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    rows="5" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>
                
                <Button primary className="w-full md:w-auto">Send Message</Button>
              </form>
            </div>
            
            <div>
              <div className="bg-gray-50 rounded-xl p-8 mb-8 shadow-md">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-3 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-medium">Headquarters</p>
                      <p className="text-gray-600">123 Spice Street, Bangkok, Thailand 10110</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-3 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-gray-600">+66 2 123 4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-3 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-gray-600">info@kookkook.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-primary mr-3 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM ICT</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="rounded-xl overflow-hidden shadow-md">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124451.96822922111!2d100.52883895574392!3d13.72759369428475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6032280d61f3%3A0x10100b25de24820!2sBangkok%2C%20Thailand!5e0!3m2!1sen!2sus!4v1693405000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kookkook Headquarters Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to our most commonly asked questions. If you don't see what you're looking for, please contact us.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              { 
                question: "Where can I buy Kookkook Sriracha?", 
                answer: "Kookkook Sriracha is available at major supermarkets and specialty food stores throughout Thailand. You can also purchase directly from our online store for delivery within Thailand or international shipping." 
              },
              { 
                question: "Do you ship internationally?", 
                answer: "Yes, we ship to over 50 countries worldwide. International shipping rates and delivery times vary by location. Please visit our online store for specific shipping details for your country." 
              },
              { 
                question: "Is Kookkook Sriracha gluten-free?", 
                answer: "Yes, all Kookkook Sriracha sauces are gluten-free. We maintain strict quality control to prevent cross-contamination in our production facility." 
              },
              { 
                question: "How long does Kookkook Sriracha last once opened?", 
                answer: "Our sriracha sauce stays fresh for up to 6 months after opening when stored in the refrigerator. The 'best by' date on the bottle indicates peak quality, but the sauce remains safe to consume beyond this date." 
              },
              { 
                question: "I'm interested in stocking Kookkook in my store. How do I become a retailer?", 
                answer: "We'd love to partner with you! Please contact our wholesale team through the contact form or email wholesale@kookkook.com for information about becoming an authorized retailer." 
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact