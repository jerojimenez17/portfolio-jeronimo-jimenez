import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Send } from 'lucide-react'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Form submitted:', formData)
    alert('¡Gracias por tu mensaje! Te responderé pronto.')
    setFormData({ name: '', email: '', message: '' })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="min-h-screen flex items-center py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trabajemos <span className="text-gradient">Juntos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4" />
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y
            ayudarte a hacerlas realidad.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Información de contacto</h3>
              <p className="text-neutral-400 mb-8">
                Estoy disponible para discutir nuevos proyectos, oportunidades
                de colaboración o simplemente para charlar sobre tecnología.
              </p>
            </div>

            <div className="space-y-4">
              <motion.a
                href="mailto:jero@example.com"
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-white/10 transition-colors group"
              >
                <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg group-hover:scale-110 transition-transform">
                  <Mail size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-sm text-neutral-400">Email</div>
                  <div className="text-white font-medium">jero@example.com</div>
                </div>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/jer%C3%B3nimo-jim%C3%A9nez-b2660a228/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-white/10 transition-colors group"
              >
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg group-hover:scale-110 transition-transform">
                  <Linkedin size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-sm text-neutral-400">LinkedIn</div>
                  <div className="text-white font-medium">Jerónimo Jiménez</div>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 p-4 glass rounded-xl hover:bg-white/10 transition-colors group"
              >
                <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg group-hover:scale-110 transition-transform">
                  <Github size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-sm text-neutral-400">GitHub</div>
                  <div className="text-white font-medium">@jeronimojimenez</div>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="gradient-border p-1 rounded-2xl"
          >
            <div className="gradient-border-content p-8 space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-neutral-300"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-neutral-500"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-neutral-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-neutral-500"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-neutral-300"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 glass rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-neutral-500 resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                Enviar mensaje
                <Send size={20} />
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
