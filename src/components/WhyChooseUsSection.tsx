import { CheckCircle, Globe, Clock, Users, Shield, Heart, Award, Zap } from "lucide-react";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: Globe,
      title: "100% Online Process",
      description: "Access our services from anywhere, anytime. No need to visit offices or wait in queues.",
      color: "accent"
    },
    {
      icon: Shield,
      title: "Transparent & Affordable Pricing",
      description: "Clear, upfront pricing with no hidden costs. Quality legal help that doesn't break the bank.",
      color: "success"
    },
    {
      icon: Clock,
      title: "Timely & Professional Legal Advice",
      description: "Quick response times with thorough, professional guidance you can trust.",
      color: "her-primary"
    },
    {
      icon: Users,
      title: "Experienced & Friendly Legal Experts",
      description: "Our team combines years of expertise with a human touch that makes legal help approachable.",
      color: "primary"
    },
    {
      icon: Heart,
      title: "Client-First Approach",
      description: "Every decision we make prioritizes your best interests and long-term success.",
      color: "warning"
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Hundreds of successful cases and satisfied clients across all major legal practice areas.",
      color: "accent-light"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      'accent': 'text-accent bg-accent/10 border-accent/20',
      'success': 'text-success bg-success/10 border-success/20',
      'her-primary': 'text-her-primary bg-her-primary/10 border-her-primary/20',
      'primary': 'text-primary bg-primary/10 border-primary/20',
      'warning': 'text-warning bg-warning/10 border-warning/20',
      'accent-light': 'text-accent-light bg-accent/10 border-accent/20'
    };
    return colorMap[color as keyof typeof colorMap] || 'text-primary bg-primary/10 border-primary/20';
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Why Choose Your Legal Ally?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We're not just another legal service. We're your partners in navigating life's legal challenges 
              with confidence, clarity, and peace of mind.
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
            {reasons.map((reason, index) => (
              <div key={index} className="service-card group">
                <div className="flex items-start space-x-4">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0 ${getColorClasses(reason.color)}`}>
                    <reason.icon className="w-8 h-8" />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Trust Indicators */}
          <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center shadow-hero">
              <h3 className="text-3xl font-bold text-primary-foreground mb-6">
                What Our Clients Say About Us
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-foreground mb-2">4.9/5</div>
                  <div className="text-primary-foreground/90 text-sm">Client Rating</div>
                  <div className="flex justify-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-foreground mb-2">1000+</div>
                  <div className="text-primary-foreground/90 text-sm">Happy Clients</div>
                  <div className="mt-2 text-primary-foreground/80 text-xs">Across all practice areas</div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-foreground mb-2">24hrs</div>
                  <div className="text-primary-foreground/90 text-sm">Response Time</div>
                  <div className="mt-2 text-primary-foreground/80 text-xs">Average initial response</div>
                </div>
              </div>

              <blockquote className="text-primary-foreground/90 text-lg italic max-w-3xl mx-auto mb-8">
                "Your Legal Ally transformed what seemed like an impossible legal situation into a clear, 
                manageable process. Their expertise, empathy, and transparent approach gave me the confidence 
                I needed during a very difficult time."
              </blockquote>
              
              <div className="text-primary-foreground/80 text-sm">
                - Satisfied Client, Family Law Case
              </div>
            </div>
          </div>

          {/* Process Benefits */}
          <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-3xl font-bold text-primary text-center mb-12">
              Our Simple 3-Step Process
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  <span className="text-2xl font-bold text-accent">1</span>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-primary mb-3">Share Your Concern</h4>
                <p className="text-muted-foreground">
                  Tell us about your legal issue through our secure online form or direct contact.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  <span className="text-2xl font-bold text-success">2</span>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-primary mb-3">Expert Consultation</h4>
                <p className="text-muted-foreground">
                  Get personalized advice from our experienced legal experts within 24 hours.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-her-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  <span className="text-2xl font-bold text-her-primary">3</span>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-her-primary rounded-full flex items-center justify-center">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-primary mb-3">Take Action</h4>
                <p className="text-muted-foreground">
                  Receive clear guidance and actionable steps to resolve your legal matters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;