import { motion } from 'framer-motion'
import { Code, Server, Database, Zap } from 'lucide-react'

const About = () => {
  const skills = [
    {
      icon: Code,
      title: 'Frontend',
      description: 'React, Next.js, TypeScript, Tailwind CSS',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Server,
      title: 'Backend',
      description: 'Node.js, Express, JAVA, Spring Boot',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Database,
      title: 'Base de Datos',
      description: 'PostgreSQL, MongoDB, Firebase',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Zap,
      title: 'DevOps',
      description: 'Docker, AWS, CI/CD, Git',
      color: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-24 px-6"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre <span className="text-gradient">Mí</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-neutral-300 leading-relaxed">
              Soy un desarrollador fullstack apasionado por crear soluciones
              digitales innovadoras. Con años de experiencia trabajando como
              freelancer, he ayudado a múltiples clientes a materializar sus
              visiones en aplicaciones web de alta calidad.
            </p>
            <p className="text-lg text-neutral-300 leading-relaxed">
              Mi enfoque combina un diseño centrado en el usuario con código
              limpio y escalable. Me encanta mantenerme al día con las últimas
              tendencias tecnológicas y aplicar las mejores prácticas en cada
              proyecto.
            </p>
            <p className="text-lg text-neutral-300 leading-relaxed">
            Hoy mi objetivo es integrarme a una empresa donde pueda crecer profesionalmente,
  aprender de desarrolladores con más experiencia y aportar valor desde el primer día
  con una base técnica sólida.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="gradient-border p-1 rounded-2xl">
              <div className="gradient-border-content p-8">
                <h3 className="text-2xl font-bold mb-6">Estadísticas</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-4xl font-bold text-gradient mb-2">
                      40+
                    </div>
                    <div className="text-neutral-400">Proyectos</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-gradient mb-2">
                      5+
                    </div>
                    <div className="text-neutral-400">Años de experiencia</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-gradient mb-2">
                      10+
                    </div>
                    <div className="text-neutral-400">Clientes satisfechos</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-gradient mb-2">
                      100%
                    </div>
                    <div className="text-neutral-400">Comprometido</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="glass rounded-2xl p-6 hover:border-white/20 transition-all cursor-pointer group"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
                <p className="text-neutral-400 text-sm">{skill.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About


