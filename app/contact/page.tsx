'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';
import GlassButton from '@/components/ui/GlassButton';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    service: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      company: '',
      subject: '',
      message: '',
      service: ''
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'hello@azura.com',
      description: 'Drop us a line anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      description: '24/7 support available'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Tech Street, Silicon Valley, CA 94105',
      description: 'Our headquarters'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon - Fri: 9AM - 6PM PST',
      description: 'Weekend support available'
    }
  ];

  const services = [
    'Web Development',
    'Mobile App Development',
    'Cloud Solutions',
    'AI & Machine Learning',
    'Cybersecurity',
    'Digital Transformation',
    'Consulting Services',
    'Other'
  ];

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
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-navy/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your business with cutting-edge technology? Let's start a conversation 
            about your project and explore how we can help you achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <GlassCard key={index} className="p-6 text-center group">
                <info.icon className="h-8 w-8 text-purple mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-lg font-semibold text-navy mb-2">{info.title}</h3>
                <p className="text-navy font-medium mb-1">{info.content}</p>
                <p className="text-sm text-navy/70">{info.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <GlassCard className="p-8">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-navy mb-4">Send us a Message</h2>
                <p className="text-navy/70">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-purple" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Full Name"
                      required
                      className="w-full pl-12 pr-4 py-3 backdrop-blur-sm bg-white/20 border border-white/30 rounded-lg text-navy placeholder-navy/50 focus:outline-none focus:border-purple focus:bg-white/30 transition-all duration-300"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-purple" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email Address"
                      required
                      className="w-full pl-12 pr-4 py-3 backdrop-blur-sm bg-white/20 border border-white/30 rounded-lg text-navy placeholder-navy/50 focus:outline-none focus:border-purple focus:bg-white/30 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company (Optional)"
                    className="w-full px-4 py-3 backdrop-blur-sm bg-white/20 border border-white/30 rounded-lg text-navy placeholder-navy/50 focus:outline-none focus:border-purple focus:bg-white/30 transition-all duration-300"
                  />
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 backdrop-blur-sm bg-white/20 border border-white/30 rounded-lg text-navy focus:outline-none focus:border-purple focus:bg-white/30 transition-all duration-300"
                  >
                    <option value="">Select a Service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  required
                  className="w-full px-4 py-3 backdrop-blur-sm bg-white/20 border border-white/30 rounded-lg text-navy placeholder-navy/50 focus:outline-none focus:border-purple focus:bg-white/30 transition-all duration-300"
                />

                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-purple" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project..."
                    rows={6}
                    required
                    className="w-full pl-12 pr-4 py-3 backdrop-blur-sm bg-white/20 border border-white/30 rounded-lg text-navy placeholder-navy/50 focus:outline-none focus:border-purple focus:bg-white/30 transition-all duration-300 resize-none"
                  />
                </div>

                <GlassButton 
                  type="submit" 
                  disabled={isSubmitting}
                  size="lg" 
                  className="w-full"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </GlassButton>
              </form>
            </GlassCard>

            {/* Map & Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <GlassCard className="p-8 h-64 bg-gradient-to-br from-purple/20 to-lavender/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-purple mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-navy mb-2">Our Location</h3>
                  <p className="text-navy/70">Silicon Valley, California</p>
                  <p className="text-sm text-navy/60 mt-2">Interactive map coming soon</p>
                </div>
              </GlassCard>

              {/* Additional Contact Options */}
              <GlassCard className="p-8">
                <h3 className="text-2xl font-bold text-navy mb-6">Prefer to Talk?</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-purple" />
                    <div>
                      <p className="font-medium text-navy">Sales Inquiries</p>
                      <p className="text-navy/70">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-purple" />
                    <div>
                      <p className="font-medium text-navy">Technical Support</p>
                      <p className="text-navy/70">+1 (555) 123-4568</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-purple" />
                    <div>
                      <p className="font-medium text-navy">General Inquiries</p>
                      <p className="text-navy/70">hello@azura.com</p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-r from-purple/5 to-lavender/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-navy/70">Quick answers to common questions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'What is your typical project timeline?',
                answer: 'Project timelines vary based on complexity, but most projects range from 3-12 months. We provide detailed timelines during our initial consultation.'
              },
              {
                question: 'Do you offer ongoing support?',
                answer: 'Yes, we provide comprehensive support packages including maintenance, updates, and 24/7 technical support to ensure your systems run smoothly.'
              },
              {
                question: 'Can you work with our existing team?',
                answer: 'Absolutely! We excel at collaborating with in-house teams and can integrate seamlessly into your existing development workflows.'
              },
              {
                question: 'What industries do you specialize in?',
                answer: 'We work across various industries including healthcare, finance, e-commerce, education, and manufacturing, adapting our solutions to meet specific industry requirements.'
              }
            ].map((faq, index) => (
              <GlassCard key={index} className="p-6">
                <h3 className="text-lg font-semibold text-navy mb-3">{faq.question}</h3>
                <p className="text-navy/70 leading-relaxed">{faq.answer}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}