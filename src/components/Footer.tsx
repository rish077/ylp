import { Scale, Mail, Phone, MapPin, Heart, Shield, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const onQuickLink = (id: string) => {
    // navigate to home with hash so Home can detect and scroll
    navigate(`/#${id}`);
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Law for Her", href: "/#law-for-her" },
    { label: "Our Team", href: "/#team" },
    { label: "Contact", href: "/#contact" }
  ];

  const services = [
    "Family Law Advisory",
    "IPR Services",
    "Property Disputes",
    "Consumer Protection",
    "Business Legal Support",
    "Cyber Law Advisory"
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Disclaimer", href: "#" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Your Legal Pal</h3>
                <p className="text-sm text-primary-foreground/80">Law. Simplified.</p>
              </div>
            </div>
            
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Making legal help accessible, affordable, and human. We're here to bridge the gap 
              between complex legal processes and the people who need clarity and peace of mind.
            </p>

            {/* Key Values */}
            <div className="space-y-2 mb-6">
              <div className="flex items-center space-x-2 text-primary-foreground/90">
                <Shield className="w-4 h-4 text-accent" />
                <span className="text-sm">Professional & Reliable</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/90">
                <Heart className="w-4 h-4 text-her-primary" />
                <span className="text-sm">Compassionate Support</span>
              </div>
              <div className="flex items-center space-x-2 text-primary-foreground/90">
                <Users className="w-4 h-4 text-success" />
                <span className="text-sm">Client-First Approach</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-primary-foreground/80 hover:text-white transition-colors duration-300 text-sm"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Get in Touch</h4>
            
            <div className="space-y-4 mb-6">
              <a
                href="mailto:yourlegalpal.ylp@gmail.com"
                className="flex items-center space-x-3 text-primary-foreground/80 hover:text-white transition-colors duration-300 group"
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium">Email Us</p>
                  <p className="text-xs text-primary-foreground/70">yourlegalpal.ylp@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+916387026454"
                className="flex items-center space-x-3 text-primary-foreground/80 hover:text-white transition-colors duration-300 group"
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium">Call Us</p>
                  <p className="text-xs text-primary-foreground/70">+91 6387026454</p>
                </div>
              </a>

              <a
                href="https://wa.me/916387026454"
                className="flex items-center space-x-3 text-primary-foreground/80 hover:text-white transition-colors duration-300 group"
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-medium">WhatsApp</p>
                  <p className="text-xs text-primary-foreground/70">+91 6387026454</p>
                </div>
              </a>
            </div>

            {/* Office Hours */}
            <div className="bg-white/5 rounded-lg p-4">
              <h5 className="font-semibold mb-2 text-sm">Office Hours</h5>
              <div className="space-y-1 text-xs text-primary-foreground/80">
                <p>Mon - Fri: 9:00 AM - 7:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Emergency only</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-primary-foreground/80">
              © {currentYear} Your Legal Pal. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center space-x-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm text-primary-foreground/80 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Disclaimer */}
            <div className="text-xs text-primary-foreground/60 text-center md:text-right max-w-xs">
              Professional legal services. Licensed attorneys.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;