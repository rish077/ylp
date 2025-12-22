import { useState } from "react";
import { Mail, Phone, MessageCircle, MapPin, Clock, Shield, Send, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import React from "react";


// Inline Instagram SVG (simple, uses currentColor)
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <circle cx="17.5" cy="6.5" r="0.5" />
  </svg>
);

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://formspree.io/f/xwveqnwn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast({
          title: "Failed to send message",
          description: "Please try again or contact us directly.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please check your connection and try again.",
        variant: "destructive"
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "yourlegalpal.ylp@gmail.com",
      action: "mailto:yourlegalpal.ylp@gmail.com",
      color: "accent"
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 6387026454",
      action: "tel:+916387026454",
      color: "success"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+91 6387026454",
      action: "https://wa.me/916387026454",
      color: "her-primary"
    },
    {
      icon: InstagramIcon,
      title: "Instagram",
      value: "@yourlegalpal",
      action: "https://www.instagram.com/your.legal.pal?igsh=N3RqaG10bjVkYTcy",
      color: "accent"
    }
  ];

  const officeHours = [
    { day: "Monday - Friday", time: "9:00 AM - 7:00 PM" },
    { day: "Saturday", time: "10:00 AM - 4:00 PM" },
    { day: "Sunday", time: "Emergency consultations only" }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      'accent': 'text-accent bg-accent/10 border-accent/20',
      'success': 'text-success bg-success/10 border-success/20',
      'her-primary': 'text-her-primary bg-her-primary/10 border-her-primary/20',
      'primary': 'text-primary bg-primary/10 border-primary/20'
    };
    return colorMap[color as keyof typeof colorMap] || 'text-primary bg-primary/10 border-primary/20';
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Let's Talk Legal – Your First Step Towards Clarity
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Have a legal question or need guidance? We're here to help. Reach out for a consultation 
              and take the first step towards resolving your legal concerns.
            </p>
            
            <div className="inline-flex items-center space-x-2 bg-success/10 rounded-full px-6 py-2">
              <Shield className="w-5 h-5 text-success" />
              <span className="text-success font-semibold">No legal jargon, no hidden costs, just real help.</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-border">
                <h3 className="text-2xl font-bold text-primary mb-6">Send us a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-primary font-medium">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-primary font-medium">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-primary font-medium">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-primary font-medium">Your Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your legal query or concern. The more details you provide, the better we can assist you."
                      rows={5}
                      required
                      className="mt-2"
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent-dark">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground flex items-center">
                    <Shield className="w-4 h-4 mr-2 text-success" />
                    All communications are confidential and protected by attorney-client privilege.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              {/* Contact Methods */}
              <div className="space-y-6 mb-8">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.action}
                    className="block service-card group cursor-pointer"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${getColorClasses(contact.color)}`}>
                        <contact.icon className="w-8 h-8" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary group-hover:text-accent transition-colors">
                          {contact.title}
                        </h4>
                        <p className="text-muted-foreground">{contact.value}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Office Hours */}
              <div className="bg-gradient-hero rounded-2xl p-8 text-white mb-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Clock className="w-6 h-6 mr-3" />
                  Office Hours
                </h3>
                <div className="space-y-3">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-white/20 last:border-b-0">
                      <span className="font-medium">{schedule.day}</span>
                      <span className="text-white/90">{schedule.time}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-white/10 rounded-lg">
                  <p className="text-sm text-white/90">
                    Emergency legal consultations available 24/7 for urgent matters.
                  </p>
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-border">
                <h4 className="font-bold text-primary mb-4">Our Response Promise</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Initial response within 2 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Detailed consultation within 24 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-her-primary rounded-full"></div>
                    <span className="text-sm text-muted-foreground">Transparent pricing before we start</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;