import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-primary/5 to-secondary/5 pt-12 pb-8 sm:py-24 md:py-32 lg:py-36 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-top bg-no-repeat"
          style={{ backgroundImage: "url('/images/about.jpg')" }}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden z-10">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-5 bg-center bg-cover"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary">
              Since 2006 • Transforming Education
            </span>
          </motion.div>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-foreground mb-4 sm:mb-6 px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Shaping Futures Through <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Innovative Education</span>
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed px-6 sm:px-8 md:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            At Learners Global, we're redefining education by combining academic excellence with holistic development,
            preparing students not just for exams, but for life.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
