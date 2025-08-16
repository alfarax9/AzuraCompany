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
    { id: 'mobile', name: 'Mobile Apps', icon: Smartphone },
    { id: 'cloud', name: 'Cloud Solutions', icon: Cloud },
    { id: 'ai', name: 'AI & ML', icon: Brain },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform Modernization',
      category: 'web',
      client: 'TechMart Solutions',
      description: 'Complete overhaul of legacy e-commerce platform with modern React architecture, microservices, and cloud deployment.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'AWS', 'MongoDB'],
      duration: '8 months',
      team: '6 developers',
      results: '300% increase in conversion rates',
      status: 'completed'
    },
    {
      id: 2,
      title: 'Healthcare Data Migration',
      category: 'cloud',
      client: 'MediCare Plus',
      description: 'Secure migration of patient data to HIPAA-compliant cloud infrastructure with real-time analytics dashboard.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Azure', 'Python', 'Docker', 'PostgreSQL'],
      duration: '6 months',
      team: '4 specialists',
      results: '50% reduction in processing time',
      status: 'completed'
    },
    {
      id: 3,
      title: 'AI-Powered Customer Service Bot',
      category: 'ai',
      client: 'ServicePro Inc',
      description: 'Intelligent chatbot with natural language processing for 24/7 customer support and automated ticket resolution.',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Python', 'TensorFlow', 'NLP', 'REST API'],
      duration: '4 months',
      team: '5 AI engineers',
      results: '80% reduction in response time',
      status: 'completed'
    },
    {
      id: 4,
      title: 'Mobile Banking Application',
      category: 'mobile',
      client: 'SecureBank',
      description: 'Cross-platform mobile banking app with biometric authentication, real-time transactions, and advanced security features.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React Native', 'Node.js', 'Blockchain', 'Biometrics'],
      duration: '10 months',
      team: '8 developers',
      results: '1M+ active users',
      status: 'completed'
    },
    {
      id: 5,
      title: 'Enterprise Security Audit',
      category: 'security',
      client: 'GlobalCorp',
      description: 'Comprehensive security assessment and implementation of advanced threat detection systems across enterprise infrastructure.',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Penetration Testing', 'SIEM', 'Firewall', 'Encryption'],
      duration: '3 months',
      team: '3 security experts',
      results: '99.9% threat detection rate',
      status: 'completed'
    },
    {
      id: 6,
      title: 'Real-time Analytics Dashboard',
      category: 'web',
      client: 'DataDriven Ltd',
      description: 'Interactive dashboard for real-time business intelligence with custom visualizations and automated reporting.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Vue.js', 'D3.js', 'Python', 'ElasticSearch'],
      duration: '5 months',
      team: '4 developers',
      results: 'Real-time insights across 50+ metrics',
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-navy via-purple to-lavender bg-clip-text text-transparent">
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
                    ? 'bg-gradient-to-r from-purple to-lavender text-white shadow-lg'
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
                      <Github className="h-4 w-4" />
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with our expertise and innovative solutions.
          </p>
          <GlassButton variant="secondary" size="lg" className="text-white border-white/30">
            Get Started Today
          </GlassButton>
        </div>
      </section>
    </div>
  );
}