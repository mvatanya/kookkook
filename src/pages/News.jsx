import { motion } from 'framer-motion'
import Button from '../components/ui/Button'

const newsItems = [
  {
    id: 1,
    title: "Kookkook Launches New Limited-Edition Mango Sriracha",
    excerpt: "Just in time for summer, experience the sweet and spicy fusion of our new seasonal sauce.",
    date: "May 15, 2025",
    image: "https://images.pexels.com/photos/2363347/pexels-photo-2363347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Product Launch"
  },
  {
    id: 2,
    title: "Kookkook Partners with Chef Naomi Tanaka for Exclusive Recipe Series",
    excerpt: "Renowned chef collaborates with Kookkook to create innovative dishes featuring our sriracha sauces.",
    date: "April 28, 2025",
    image: "https://images.pexels.com/photos/3217146/pexels-photo-3217146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Collaboration"
  },
  {
    id: 3,
    title: "Kookkook Named 'Best Artisanal Hot Sauce' at International Flavor Awards",
    excerpt: "Our Classic Sriracha receives prestigious recognition at global food competition.",
    date: "March 12, 2025",
    image: "https://images.pexels.com/photos/7438202/pexels-photo-7438202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Award"
  }
]

const upcomingEvents = [
  {
    id: 1,
    title: "Bangkok Food Festival",
    date: "June 18-20, 2025",
    location: "Lumpini Park, Bangkok",
    description: "Join us at booth #42 for tastings, cooking demonstrations, and exclusive festival discounts."
  },
  {
    id: 2,
    title: "Spicy Food Expo",
    date: "July 8-10, 2025",
    location: "Singapore Expo",
    description: "We're bringing the heat to Singapore! Come experience our full product line and meet our sauce creators."
  },
  {
    id: 3,
    title: "Cooking Workshop: Sriracha Beyond Basics",
    date: "August 5, 2025",
    location: "Kookkook Culinary Center, Bangkok",
    description: "Learn innovative ways to incorporate sriracha into your cooking in this hands-on workshop."
  }
]

function NewsCard({ item, index }) {
  return (
    <motion.article 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-white text-sm font-medium px-3 py-1 rounded-full">
            {item.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <time className="text-sm text-gray-500 mb-2 block">{item.date}</time>
        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
        <p className="text-gray-600 mb-6">{item.excerpt}</p>
        <Button secondary className="text-sm px-4 py-2">Read More</Button>
      </div>
    </motion.article>
  )
}

function EventCard({ event, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-primary mb-4"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-xl font-bold mb-2">{event.title}</h3>
          <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 mb-3 gap-4">
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              {event.date}
            </span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              {event.location}
            </span>
          </div>
          <p className="text-gray-600">{event.description}</p>
        </div>
        <Button primary className="mt-4 md:mt-0">RSVP</Button>
      </div>
    </motion.div>
  )
}

function News() {
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
              News & Events
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl text-white/90 leading-relaxed"
            >
              Stay updated with the latest Kookkook announcements, product launches, and upcoming events.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Latest News */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Latest News</h2>
            <Button secondary>View All News</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <NewsCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Upcoming Events */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Upcoming Events</h2>
            <Button primary>View All Events</Button>
          </div>
          
          <div className="space-y-6">
            {upcomingEvents.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Never Miss an Update</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest news, event announcements, and exclusive offers directly in your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-5 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <Button secondary>Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default News