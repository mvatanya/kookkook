import { motion } from "framer-motion";
import Button from "../ui/Button";

function Hero() {
  const decorativeShapes = [
    {
      top: "10%",
      right: "-5%",
      size: "w-48 h-48",
      delay: 0.2,
      color: "bg-primary",
    },
    {
      top: "60%",
      left: "5%",
      size: "w-32 h-32",
      delay: 0.4,
      color: "bg-white",
    },
    {
      top: "30%",
      right: "25%",
      size: "w-24 h-24",
      delay: 0.6,
      color: "bg-primary",
    },
    {
      top: "20%",
      left: "30%",
      size: "w-40 h-40",
      delay: 0.8,
      color: "bg-white",
    },
    {
      bottom: "25%",
      right: "35%",
      size: "w-36 h-36",
      delay: 1,
      color: "bg-primary",
    },
  ];

  return (
    <div className="relative pt-24">
      {/* Background gradient sections */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary to-primary/20" />

      <section className="relative pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Decorative elements */}
          {decorativeShapes.map((shape, index) => (
            <motion.div
              key={index}
              className={`absolute ${shape.size} ${shape.color} opacity-20 decorative-shape`}
              style={{
                top: shape.top,
                left: shape.left,
                right: shape.right,
                bottom: shape.bottom,
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.2 }}
              transition={{
                duration: 0.8,
                delay: shape.delay,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 pt-10 pb-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="text-primary">Spice Up</span> Your Life
              </h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <p className="text-xl md:text-2xl font-medium text-white mb-2">
                  Experience the true taste of Thailand
                </p>
                <p className="text-lg text-white/80 mb-8">
                  Crafted sriracha, inspired by the soul of our heritage
                </p>
              </motion.div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button primary>Explore Products</Button>
                <Button secondary>Find Stores</Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-image-container flex justify-between items-center relative"
            >
              <motion.img
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                src="/src/images/burger.png"
                alt="Delicious Spicy Chicken Burger"
                className="burger-image w-1/2 rotate-12"
              />

              <div className="relative w-1/2">
                <img
                  src="https://static.wixstatic.com/media/15bb16_ff778dbfa8c54cbd9f43e973c593b6f3~mv2.png/v1/crop/x_0,y_86,w_1146,h_2876/fill/w_558,h_1410,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Super%20hot%20kook%20kook%20525g.png"
                  alt="Kookkook Sriracha Bottle"
                  className="hero-image max-h-[520px] object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave/diagonal separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="h-20 bg-white"
            style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
