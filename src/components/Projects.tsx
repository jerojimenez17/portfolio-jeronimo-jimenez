import { motion } from 'framer-motion'
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

interface Project {
  id: number
  title: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

const Projects = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: 'POS-System',
      description: 'Sistema de punto de venta con gestión de inventario',
      longDescription:
        'Sistema de punto de venta construido con Next.js y PostgreSQL. Incluye panel de administración, sistema facturacion con ARCA, gestión de inventario en tiempo real y experiencia de usuario optimizada.',
      image: '/api/placeholder/800/600',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Firebase', 'Tailwind CSS'],
      liveUrl: 'https://prueba-demo-app.vercel.app/',
      githubUrl: 'https://github.com/jerojimenez17/POS-Template',
      featured: true,
    },
    {
      id: 2,
      title: 'Sistema de Gestión de sorteos',
      description: 'Dashboard interactivo para gestión de sorteos',
      longDescription:
        'Aplicación web moderna para gestión de sorteos con funcionalidades avanzadas de colaboración en tiempo real.',
      image: '/api/placeholder/800/600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Material-UI'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/jerojimenez17',
      featured: true,
    },
   
  ]

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center py-24 px-6"
    >
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mis <span className="text-gradient">Proyectos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4" />
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades y experiencia
            en desarrollo fullstack
          </p>
        </motion.div>

        {/* Custom Navigation Buttons */}
        <div className="flex justify-end gap-4 mb-8">
          <button
            onClick={() => swiperRef?.slidePrev()}
            className="p-3 glass rounded-full hover:bg-white/10 transition-colors"
            aria-label="Proyecto anterior"
          >
            <ChevronLeft size={24} className="text-neutral-300" />
          </button>
          <button
            onClick={() => swiperRef?.slideNext()}
            className="p-3 glass rounded-full hover:bg-white/10 transition-colors"
            aria-label="Siguiente proyecto"
          >
            <ChevronRight size={24} className="text-neutral-300" />
          </button>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          onSwiper={setSwiperRef}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="projects-swiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={project.id}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="h-full"
              >
                <div className="gradient-border h-full rounded-2xl overflow-hidden group hover:scale-105 transition-transform duration-300">
                  <div className="gradient-border-content h-full flex flex-col">
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center">
                        <div className="text-6xl font-bold text-white/10">
                          {project.id}
                        </div>
                      </div>
                      {project.featured && (
                        <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-xs font-semibold text-blue-400 border border-blue-400/20">
                          Destacado
                        </div>
                      )}
                    </div>

                    {/* Project Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-gradient transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-neutral-400 text-sm mb-4 flex-1">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 glass rounded-full text-xs text-neutral-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-3 py-1 glass rounded-full text-xs text-neutral-400">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Links */}
                      <div className="flex gap-3 pt-4 border-t border-white/10">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 glass rounded-lg hover:bg-white/10 transition-colors text-sm font-medium"
                          >
                            <ExternalLink size={16} />
                            Ver proyecto
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 glass rounded-lg hover:bg-white/10 transition-colors text-sm font-medium"
                          >
                            <Github size={16} />
                            Código
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Swiper Styles */}
        <style>{`
          .projects-swiper {
            padding-bottom: 60px !important;
          }
          .projects-swiper .swiper-pagination-bullet {
            background: rgba(59, 130, 246, 0.5);
            width: 12px;
            height: 12px;
          }
          .projects-swiper .swiper-pagination-bullet-active {
            background: linear-gradient(to right, #3b82f6, #a855f7);
          }
          .projects-swiper .swiper-slide {
            height: auto;
          }
        `}</style>
      </div>
    </section>
  )
}

export default Projects
