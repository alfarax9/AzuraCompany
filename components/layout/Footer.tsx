import Link from 'next/link';
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-purple to-lavender opacity-90" />
      
      <div className="relative backdrop-blur-lg bg-white/5 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2 group">
                <div className="p-2 rounded-lg bg-gradient-to-r from-white/20 to-white/10 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="h-6 w-6 text-black" />
                </div>
                <span className="text-2xl font-bold text-black">Azura</span>
              </Link>
              <p className="text-light/80 leading-relaxed">
                Empowering businesses with cutting-edge IT solutions and innovative technology services.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="p-3 rounded-full backdrop-blur-sm bg-white/15 border border-black/5 text-black hover:bg-white/20 hover:scale-110 transition-all duration-300 hover:shadow-lg "
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-black">Quick Links</h3>
              <div className="space-y-2">
                {['Home', 'About', 'Achievement', 'Project', 'Contact'].map((link) => (
                  <Link
                    key={link}
                    href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                    className="block text-light/80 hover:text-black hover:translate-x-2 transition-all duration-300  hover:shadow-md "
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-black">Services</h3>
              <div className="space-y-2">
                {['Web Development', 'Mobile Apps', 'Cloud Solutions', 'AI & Machine Learning', 'Cybersecurity'].map((service) => (
                  <a
                    key={service}
                    href="#"
                    className="block text-light/80 hover:text- hover:translate-x-2 transition-all duration-300"
                  >
                    {service}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-black">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-light/80">
                  <Mail className="h-5 w-5 text-lavender" />
                  <span>hello@azura.com</span>
                </div>
                <div className="flex items-center space-x-3 text-light/80">
                  <Phone className="h-5 w-5 text-lavender" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-light/80">
                  <MapPin className="h-5 w-5 text-lavender" />
                  <span>123 Tech Street, Silicon Valley, CA</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-light/60">© 2024 Azura. All rights reserved.</p>
              <div className="flex space-x-6">
                <a href="#" className="text-light/60 hover:text-white transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="text-light/60 hover:text-white transition-colors duration-300">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}