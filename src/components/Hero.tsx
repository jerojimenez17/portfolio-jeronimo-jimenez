import { motion } from 'framer-motion'
import { Linkedin, Github, Mail, ArrowDown } from 'lucide-react'

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-24 pb-12"
    >
      <div className="container mx-auto max-w-6xl relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block"
            >
              <span className="glass px-4 py-2 rounded-full text-sm font-medium text-blue-400 border border-blue-400/20">
                Disponible para trabajar
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold leading-tight"
            >
              Hola! Soy{' '}
              <span className="text-gradient">Jero Jiménez</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-2xl md:text-3xl text-neutral-400 font-light"
            >
              Fullstack Developer con amplia experiencia como freelance
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg text-neutral-400 max-w-xl leading-relaxed"
            >
            Desarrollador web con experiencia freelance, enfocado en crear aplicaciones modernas,
escalables y bien diseñadas. Busco dar el siguiente paso profesional incorporándome
a un equipo de desarrollo, donde pueda aprender, aportar valor y crecer dentro
de un entorno empresarial.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center gap-4 pt-4"
            >
              <motion.a
                href="https://www.linkedin.com/in/jer%C3%B3nimo-jim%C3%A9nez-b2660a228/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 glass rounded-full text-neutral-300 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 glass rounded-full text-neutral-300 hover:text-purple-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="mailto:jero@example.com"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 glass rounded-full text-neutral-300 hover:text-pink-400 transition-colors"
                aria-label="Email"
              >
                <Mail size={24} />
              </motion.a>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              onClick={scrollToAbout}
              className="mt-8 flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
            >
              Conoce más sobre mí
              <ArrowDown size={20} />
            </motion.button>
          </motion.div>

          {/* Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative flex justify-center items-center"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
              <img
                src="/profile.png"
                alt="Jero Jiménez"
                className="relative w-64 h-64 md:w-96 rounded-full border-4 border-white/10 shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Hero
