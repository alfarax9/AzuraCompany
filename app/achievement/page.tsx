'use client';

import { useEffect, useState } from 'react';
import { Award, Trophy, Star, Target, Users, Globe, Calendar, TrendingUp } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';

export default function Achievement() {
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    years: 0,
    awards: 0
  });

  const milestones = [
    {
      icon: Award,
      number: 10,
      label: 'Projects Completed',
      key: 'projects',
      description: 'Successfully delivered across various industries'
    },
    {
      icon: Users,
      number: 10,
      label: 'Happy Clients',
      key: 'clients',
      description: 'Long-term partnerships built on trust'
    },
    {
      icon: Calendar,
      number: 1,
      label: 'Years of Excellence',
      key: 'years',
      description: 'Decade of innovation and growth'
    },
  ];

  const awards = [
    {
      title: 'Best IT Services Company 2024',
      organization: 'TechExcellence Awards',
      year: '2024',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Innovation Leader in Cloud Solutions',
      organization: 'Cloud Computing Association',
      year: '2024',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Customer Service Excellence Award',
      organization: 'Business Excellence Institute',
      year: '2023',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      title: 'Digital Transformation Partner of the Year',
      organization: 'Enterprise Tech Awards',
      year: '2023',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const achievements = [
    {
      icon: Globe,
      title: 'Global Expansion',
      description: 'Expanded operations to 25+ countries, establishing local partnerships and support centers.',
      year: '2023'
    },
    {
      icon: TrendingUp,
      title: '300% Growth',
      description: 'Achieved remarkable 300% revenue growth over the past 2 years through strategic initiatives.',
      year: '2024'
    },
  ];

  // Counter animation effect
  useEffect(() => {
    const animateCounters = () => {
      milestones.forEach((milestone) => {
        let start = 0;
        const end = milestone.number;
        const duration = 1800;
        const increment = end / (duration / 16);

        const counter = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCounts(prev => ({ ...prev, [milestone.key]: end }));
            clearInterval(counter);
          } else {
            setCounts(prev => ({ ...prev, [milestone.key]: Math.floor(start) }));
          }
        }, 16);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('counters');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

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
            Our Achievements
          </h1>
          <p className="text-xl md:text-2xl text-navy/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            A decade of excellence, innovation, and success stories that speak to our commitment 
            to delivering exceptional IT solutions.
          </p>
        </div>
      </section>

      {/* Milestones with Counters */}
      <section id="counters" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {milestones.map((milestone, index) => (
              <GlassCard key={index} className="p-8 text-center group">
                <milestone.icon className="h-12 w-12 text-purple mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-4xl font-bold text-navy mb-2">
                  {counts[milestone.key as keyof typeof counts]}+
                </div>
                <h3 className="text-lg font-semibold text-navy mb-2">{milestone.label}</h3>
                <p className="text-sm text-navy/70">{milestone.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      {/* <section className="py-20 bg-gradient-to-r from-purple/5 to-lavender/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Awards & Recognition</h2>
            <p className="text-xl text-navy/70">Industry recognition for our excellence and innovation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <GlassCard key={index} className="overflow-hidden group">
                <div className="relative">
                  <img 
                    src={award.image} 
                    alt={award.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-purple text-white px-3 py-1 rounded-full text-sm font-medium">
                    {award.year}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-navy mb-2">{award.title}</h3>
                  <p className="text-purple font-medium">{award.organization}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section> */}

      {/* Key Achievements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Key Milestones</h2>
            <p className="text-xl text-navy/70">Major achievements that shaped our journey</p>
          </div>

          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <GlassCard key={index} className="p-8 group">
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                  <div className="flex-shrink-0">
                    <div className="p-3 bg-gradient-to-r from-purple to-lavender rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <achievement.icon className="h-8 w-8 text-navy" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-2xl font-semibold text-navy">{achievement.title}</h3>
                      <span className="text-purple font-medium">{achievement.year}</span>
                    </div>
                    <p className="text-navy/70 leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
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
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-navy/80 mb-8 max-w-2xl mx-auto">
            Join our growing list of satisfied clients and experience the Azura difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-navy text-navy rounded-full font-medium hover:bg-light transition-colors duration-300 hover:scale-105 ">
              Start Your Project
            </button>
            {/* <button className="px-8 py-4 backdrop-blur-sm bg-white/20 border border-white/30 text-navy rounded-full font-medium hover:bg-white/30 transition-colors duration-300">
              View Case Studies
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
}