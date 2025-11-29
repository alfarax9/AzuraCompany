'use client';

import { useState } from 'react';
import { ExternalLink, Github, Calendar, Users, Code, Smartphone, Cloud, Shield, Brain, Zap } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import GlassButton from '@/components/ui/GlassButton';

export default function Project() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects', icon: Zap },
    { id: 'web', name: 'Web Development', icon: Code },
    // { id: 'mobile', name: 'Mobile Apps', icon: Smartphone },
    // { id: 'cloud', name: 'Cloud Solutions', icon: Cloud },
    // { id: 'ai', name: 'AI & ML', icon: Brain },
    // { id: 'security', name: 'Cybersecurity', icon: Shield },
  ];

  const projects = [
    {
      id: 1,
      title: 'Moklet.org',
      category: 'web',
      client: 'Internal Project',
      description: 'Moklet.org merupakan sebuah portal informasi yang berisikan kegiatan-kegiatan yang dilakukan oleh organisasi dan sub-organisasi di Moklet (SMK Telkom Malang).',
      image: '/image/mokletorg.jpg',
      technologies: ['Next js'],
      duration: '4 months',
      team: '8 developers',
      results: 'Portal berita bagi organisasi di SMK Telkom Malang',
      status: 'completed',
      link:'https://moklet.org'
    },
    {
      id: 2,
      title: 'E-Registration Website Antareja',
      category: 'web',
      client: 'Internal Project',
      description: 'Sistem pendaftaran online untuk peserta lkbb antareja',
      image: '/image/anterja.jpg',
      technologies: ['Next js'],
      duration: '3 months',
      team: '2 developers',
      results: 'Sistem pendaftaran online untuk peserta lkbb antareja untuk memudahkan pendaftaran',
      status: 'completed'
    },
    {
      id: 3,
      title: 'Digifest 2024',
      category: 'web',
      client: 'Internal Project',
      description: 'Digifest 2024! Aplikasi web ini dirancang untuk mengelola dan menampilkan informasi tentang kompetisi',
      image: '/image/digifest.jpg',
      technologies: ['Next js'],
      duration: '4 months',
      team: '4 Developers',
      results: 'Sukses menjadikan website pendaftaran digifest 2024 sebagai pusat informasi kompetisi',
      status: 'completed'
    },
    {
      id: 4,
      title: 'Apotik Bisma',
      category: 'web',
      client: 'HealtCare',
      description: 'Pencatatan penjualan obat dan manajemen inventaris untuk apotek modern.',
      image: '/image/apotikbisma.png',
      technologies: ['Laravel'],
      duration: '2 months',
      team: '1 developers',
      results: 'Berhasil membantu pencatatan penjualan obat dan manajemen inventaris apotek',
      status: 'completed',
      link:'https://apotikbisma.viviashop.com/login'
    },
    {
      id: 5,
      title: 'Tirai.id',
      category: 'web',
      client: 'Sales',
      description: 'Platform e-commerce dengan sistem pemesanan, transaksi, dan pembayaran untuk produk ready stock serta custom (ukuran dan warna).',
      image: '/image/tirai.jpg',
      technologies: ['Next js'],
      duration: '2 months',
      team: '8 Developers',
      results: ' Berhasil membangun platform e-commerce untuk produk ready stock serta custom (ukuran dan warna).',
      status: 'completed'
    },
    {
      id: 6,
      title: 'ViviaShop',
      category: 'web',
      client: 'Sales',
      description: 'Platform e-commerce penjualan di industri percetakan',
      image: '/image/viviashop.png',
      technologies: ['laravel'],
      duration: '5 months',
      team: '2 developers',
      results: 'Berhasil membangun platform e-commerce penjualan di industri percetakan',
      status: 'completed',
      link:'https://viviashop.com/'
    },
    {
      id: 7,
      title: 'SatwaSehat',
      category: 'web',
      client: 'Animal HealthCare',
      description: 'Platform website untuk layanan kesehatan hewan, termasuk janji temu,dan informasi perawatan.',
      image: '/image/satwasehat.png',
      technologies: ['laravel'],
      duration: '5 months',
      team: '2 developers',
      results: 'Berhasil membangun platform website untuk layanan kesehatan hewan, termasuk janji temu,dan informasi perawatan.',
      status: 'in-progress'
    },
    {
      id: 8,
      title: 'Moklet Portal',
      category: 'web',
      client: 'Internal Project',
      description: 'Platform Portal informasi seluruh kegiatan di SMK Telkom Malang.',
      image: '/image/mokletportal.png',
      technologies: ['laravel'],
      duration: '2 months',
      team: '4 developers',
      results: 'Berhasil membangun platform Portal informasi kegiatan di SMK Telkom Malang.',
      status: 'in-progress'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-purple/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-lavender/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-navy via-purple to-lavender bg-clip-text text-navy">
            Our Projects
          </h1>
          <p className="text-xl md:text-2xl text-navy/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            Explore our portfolio of successful projects that showcase our expertise across 
            various technologies and industries.
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-purple to-lavender text-nav1  shadow-lg'
                    : 'backdrop-blur-sm bg-white/20 border border-white/30 text-navy hover:bg-white/30'
                }`}
              >
                <category.icon className="h-5 w-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <GlassCard key={project.id} className="overflow-hidden group">
                <div className="relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'completed' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-yellow-500 text-white'
                    }`}>
                      {project.status === 'completed' ? 'Completed' : 'In Progress'}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="text-sm text-purple font-medium mb-2">{project.client}</div>
                  <h3 className="text-xl font-semibold text-navy mb-3 group-hover:text-purple transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-navy/70 mb-4 leading-relaxed">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-purple/10 text-purple rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4 text-purple" />
                      <span className="text-navy/70">{project.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-purple" />
                      <span className="text-navy/70">{project.team}</span>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-4 p-3 bg-green-50 rounded-lg">
                    <div className="text-sm font-medium text-green-800">{project.results}</div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <GlassButton size="sm" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Details
                    </GlassButton>
                    <button className="p-2 backdrop-blur-sm bg-white/20 border border-white/30 rounded-lg text-navy hover:bg-white/30 transition-colors duration-300">
                    </button>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="py-20 bg-gradient-to-r from-purple/5 to-lavender/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy mb-4">Project Impact</h2>
            <p className="text-xl text-navy/70">Measurable results across all our projects</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Projects Delivered', icon: Code },
              { number: '99.2%', label: 'Client Satisfaction', icon: Users },
              { number: '24/7', label: 'Support Available', icon: Shield },
              { number: '150+', label: 'Technologies Used', icon: Zap }
            ].map((stat, index) => (
              <GlassCard key={index} className="p-6 text-center">
                <stat.icon className="h-8 w-8 text-purple mx-auto mb-3" />
                <div className="text-3xl font-bold text-navy mb-2">{stat.number}</div>
                <div className="text-sm text-navy/70">{stat.label}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy to-purple" />
        <div className="absolute inset-0 backdrop-blur-lg bg-white/10" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-navy/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with our expertise and innovative solutions.
          </p>
          <GlassButton variant="secondary" size="lg" className="text-navy border-white/30 ">
            Get Started Today
          </GlassButton>
        </div>
      </section>
    </div>
  );
}