import Link from 'next/link';
import { ArrowRight, Star, Users, Award, Zap, Code, Smartphone, Cloud, Shield, Brain } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import GlassButton from '@/components/ui/GlassButton';

export default function Home() {
  const services = [
    { icon: Code, title: 'Web Development', description: 'Modern, responsive websites that drive results' },
    { icon: Smartphone, title: 'Mobile Apps', description: 'Native and cross-platform mobile solutions' },
    { icon: Cloud, title: 'Cloud Solutions', description: 'Scalable cloud infrastructure and migration' },
    { icon: Shield, title: 'Cybersecurity', description: 'Comprehensive security solutions and audits' },
    { icon: Brain, title: 'AI & Machine Learning', description: 'Intelligent automation and data insights' },
    { icon: Zap, title: 'Digital Transformation', description: 'End-to-end digital modernization' },
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Award },
    { number: '150+', label: 'Happy Clients', icon: Users },
    { number: '10+', label: 'Years Experience', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Zap },
  ];

  const articles = [
    {
      title: 'The Future of AI in Business Operations',
      excerpt: 'Exploring how artificial intelligence is revolutionizing modern business processes.',
      date: 'Dec 15, 2024',
      category: 'AI & Technology'
    },
    {
      title: 'Cloud Migration Best Practices',
      excerpt: 'A comprehensive guide to successfully migrating your infrastructure to the cloud.',
      date: 'Dec 10, 2024',
      category: 'Cloud Computing'
    },
    {
      title: 'Cybersecurity Trends for 2024',
      excerpt: 'Stay ahead of cyber threats with these emerging security trends and practices.',
      date: 'Dec 8, 2024',
      category: 'Security'
    },
  ];

  const caseStudies = [
    {
      title: 'E-commerce Platform Modernization',
      client: 'TechMart Solutions',
      result: '300% increase in conversion rates',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      title: 'Healthcare Data Migration',
      client: 'MediCare Plus',
      result: '50% reduction in processing time',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-lavender/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-navy/10 rounded-full blur-2xl animate-glow" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-black to-black bg-clip-text text-transparent">
            Welcome to Azura
          </h1>
          <p className="text-xl md:text-2xl text-navy/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            Empowering businesses with cutting-edge IT solutions, innovative technology services, 
            and digital transformation expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center ">
            <GlassButton size="lg" className="group font-semibold" variant="primary">
              Get Started Today
              {/* <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform " /> */}
            </GlassButton>
            <GlassButton variant="secondary" size="lg" className="font-semibold">
              View Our Work
            </GlassButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
            {stats.map((stat, index) => (
              <GlassCard key={index} className="p-6 text-center">
                <stat.icon className="h-8 w-8 text-purple mx-auto mb-3" />
                <div className="text-3xl font-bold text-navy mb-2">{stat.number}</div>
                <div className="text-sm text-navy/70">{stat.label}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Our Services</h2>
            <p className="text-xl text-navy/70 max-w-3xl mx-auto">
              We provide comprehensive IT solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <GlassCard key={index} className="p-8 group">
                <service.icon className="h-12 w-12 text-purple mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold text-navy mb-3">{service.title}</h3>
                <p className="text-navy/70 leading-relaxed">{service.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-20 bg-gradient-to-r from-purple/5 to-lavender/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Recent Articles</h2>
            <p className="text-xl text-navy/70">Stay updated with the latest in technology</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <GlassCard key={index} className="p-6 group cursor-pointer">
                <div className="text-sm text-purple font-medium mb-2">{article.category}</div>
                <h3 className="text-xl font-semibold text-navy mb-3 group-hover:text-purple transition-colors">
                  {article.title}
                </h3>
                <p className="text-navy/70 mb-4 leading-relaxed">{article.excerpt}</p>
                <div className="text-sm text-navy/50">{article.date}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight Banner */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy to-purple" />
        <div className="absolute inset-0 backdrop-blur-lg bg-white/10" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-black/80 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trust Azura for their digital transformation journey.
          </p>
          <GlassButton variant="primary" size="lg" className="text-black border-white/30 border hover:border-black">
            <Link href="/contact">Start Your Project</Link>
          </GlassButton>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Case Studies</h2>
            <p className="text-xl text-navy/70">Success stories from our clients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <GlassCard key={index} className="overflow-hidden group">
                <img 
                  src={study.image} 
                  alt={study.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6">
                  <div className="text-sm text-purple font-medium mb-2">{study.client}</div>
                  <h3 className="text-xl font-semibold text-navy mb-3">{study.title}</h3>
                  <div className="text-lg font-medium text-green-600">{study.result}</div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}