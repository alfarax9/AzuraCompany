import { Users, Target, Heart, Zap, Award, Globe } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We constantly push boundaries to deliver cutting-edge solutions that drive real business value.'
    },
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'Your success is our success. We build lasting partnerships based on trust and exceptional results.'
    },
    {
      icon: Users,
      title: 'Collaborative Approach',
      description: 'We work closely with your team to ensure seamless integration and knowledge transfer.'
    },
    {
      icon: Award,
      title: 'Excellence Standards',
      description: 'We maintain the highest quality standards in every project, from conception to delivery.'
    }
  ];

  const team = [
    {
      name: 'Iqbal Rizqi Ramadhan',
      role: 'Messi isap',
      image: '/image/iqbal.jpg',
      description: 'Experts'
    },
    {
      name: 'Muhammad Alfara Salim',
      role: 'Messi isap isap',
      image: '/image/fara.jpg',
      description: 'Expert'
    },
    {
      name: 'Akira Saskara Hartono',
      role: 'Messi isap isap',
      image: '/image/akira.jpg',
      description: 'Experts'
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-purple/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-lavender/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r  bg-clip-text text-black">
            About Messi isap isap
          </h1>
          <p className="text-xl md:text-2xl text-navy/80 mb-12 max-w-4xl mx-auto leading-relaxed">
            We are a forward-thinking IT company dedicated to transforming businesses through 
            innovative technology solutions and exceptional service delivery.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-navy mb-6">Our Mission</h2>
              <p className="text-lg text-navy/70 mb-6 leading-relaxed">
                At Azura, we believe technology should be a catalyst for growth, not a barrier. 
                Our mission is to empower businesses of all sizes with innovative IT solutions 
                that drive efficiency, enhance customer experiences, and unlock new opportunities.
              </p>
              <p className="text-lg text-navy/70 leading-relaxed">
                We combine deep technical expertise with a human-centered approach, ensuring 
                that every solution we deliver is not just technologically advanced, but also 
                practical, scalable, and aligned with your business objectives.
              </p>
            </div>
            <GlassCard className="p-8">
              <Globe className="h-16 w-16 text-purple mb-6 mx-auto" />
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-navy mb-4">Global Impact</h3>
                <p className="text-navy/70 leading-relaxed">
                  Serving clients across 25+ countries with 24/7 support and 
                  localized expertise in emerging markets.
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-purple/5 to-lavender/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Our Values</h2>
            <p className="text-xl text-navy/70">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <GlassCard key={index} className="p-8 text-center group">
                <value.icon className="h-12 w-12 text-purple mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-semibold text-navy mb-3">{value.title}</h3>
                <p className="text-navy/70 leading-relaxed">{value.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">Meet Our Team</h2>
            <p className="text-xl text-navy/70">Behind The Success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-fit mx-auto">
            {team.map((member, index) => (
              <GlassCard key={index} className="p-6 text-center group">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="text-lg font-semibold text-navy mb-1">{member.name}</h3>
                <p className="text-purple font-medium mb-2">{member.role}</p>
                <p className="text-sm text-navy/70">{member.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy to-purple" />
        <div className="absolute inset-0 backdrop-blur-lg bg-white/10" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-navy mb-6">Our Story</h2>
              <p className="text-lg text-navy/80 mb-6 leading-relaxed">
                Founded in two days a go by a team of passionate technologists, Azura began as a small 
                consulting firm with a big vision: to make enterprise-grade technology accessible 
                to businesses of all sizes.
              </p>
              <p className="text-lg text-navy/80 mb-6 leading-relaxed">
                Today, we've grown into a full-service IT company serving clients globally, 
                but we've never forgotten our roots. We still approach every project with the 
                same curiosity, dedication, and personal touch that defined our early days.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold teks-navy">2025</div>
                  <div className="teks-navy/60">Founded</div>
                </div>
                <div>
                  <div className="text-3xl font-bold teks-navy">10+</div>
                  <div className="teks-navy/60">Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold teks-navy">8</div>
                  <div className="teks-navy/60">Countries</div>
                </div>
              </div>
            </div>
            <GlassCard className="p-8">
              <Zap className="h-16 w-16 text-navy mb-6 mx-auto" />
              <div className="text-center text-navy">
                <h3 className="text-2xl font-semibold mb-4">Innovation Never Stops</h3>
                <p className="text-navy/80 leading-relaxed">
                  We invest 15% of our revenue back into R&D, ensuring we're always 
                  at the forefront of technological advancement.
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
    </div>
  );
}