import Image from 'next/image';
import { motion } from 'framer-motion';

const Founder = () => {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-5"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="bg-white rounded-2xl lg:rounded-3xl shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {/* Founder Image */}
            <div className="relative lg:col-span-1 h-64 sm:h-80 md:h-96 lg:h-auto">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent z-10"></div>
              <div className="relative w-full h-full">
                <Image
                  src="/images/founder.png"
                  alt="Murali Konareddy - Founder"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top w-full h-full"
                  priority
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white z-20">
                <h3 className="text-xl sm:text-2xl font-bold mb-1">Murali Konareddy</h3>
                <p className="text-sm sm:text-base opacity-90">Founder & Chairman</p>
              </div>
            </div>

            {/* Founder's Message */}
            <div className="lg:col-span-2 p-6 sm:p-8 md:p-10 lg:p-12">
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-10 sm:w-12 h-1 bg-primary rounded-full"></div>
                <span className="ml-3 sm:ml-4 text-xs sm:text-sm font-medium text-primary tracking-wide">FOUNDER'S MESSAGE</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
                Shaping Tomorrow's Leaders Through <span className="text-primary">Education</span>
              </h2>

              <div className="space-y-4 sm:space-y-6 text-gray-600">
                <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                  Dear Friends and Well-wishers,
                </p>

                <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                  When I embarked on the journey of establishing Learners Global, my vision was clear -
                  to create an educational institution that would break conventional boundaries and
                  redefine learning for the 21st century. Today, as I reflect on our journey, I am
                  filled with immense pride and gratitude for what we have achieved together.
                </p>

                <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                  At Learners Global, we believe that education is not just about academic excellence
                  but about shaping well-rounded individuals who can navigate the complexities of
                  our rapidly changing world. Our approach combines rigorous academics with character
                  development, leadership skills, and real-world readiness.
                </p>

                <div className="relative my-6 sm:my-8 p-4 sm:p-6 bg-gray-50 rounded-xl border-l-4 border-primary">
                  <svg className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-8 h-8 sm:w-10 sm:h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-base sm:text-lg font-medium text-gray-700 italic pl-2 sm:pl-4">
                    "Education is the most powerful weapon which you can use to change the world."
                  </p>
                  <p className="mt-2 text-xs sm:text-sm text-gray-500 pl-2 sm:pl-4">- Nelson Mandela</p>
                </div>

                <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                  As we look to the future, our commitment remains unwavering - to provide an
                  education that not only imparts knowledge but also instills values, fosters
                  innovation, and prepares students to be global citizens. We are dedicated to
                  continuous improvement, embracing technology, and staying at the forefront of
                  educational innovation.
                </p>

                <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
                  I invite you to join us in this transformative journey of learning and growth.
                  Together, let's shape a future where every student realizes their full potential
                  and makes a meaningful contribution to society.
                </p>

                <p className="text-sm sm:text-base lg:text-lg leading-relaxed pt-4">
                  With warm regards,<br />
                  <span className="font-semibold text-gray-900">Murali Konareddy</span>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Founder;
