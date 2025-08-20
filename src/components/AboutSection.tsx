import { Scale, Users, Award, Heart, Lightbulb, Shield } from "lucide-react";

const AboutSection = () => {
  const expertiseAreas = [
    { icon: Scale, title: "Intellectual Property (IPR)", color: "text-accent" },
    { icon: Heart, title: "Family & Civil Law", color: "text-her-primary" },
    { icon: Shield, title: "Contracts & Legal Drafting", color: "text-primary" },
    { icon: Users, title: "Property & Banking Disputes", color: "text-success" },
    { icon: Award, title: "Consumer Rights", color: "text-warning" },
    { icon: Lightbulb, title: "Startup & Business Compliance", color: "text-accent-light" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Redefining Legal Help for the Modern World
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              At Your Legal Ally, we believe that legal support should be accessible, reliable, and 
              human-centered. Our mission is to bridge the gap between complex legal processes and 
              the people who need clarity, guidance, and peace of mind.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left: Mission & Values */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                Our Mission
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                We're transforming how individuals, families, and businesses access legal support. 
                Through innovative online platforms and a human-first approach, we make legal 
                guidance affordable, transparent, and genuinely helpful.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-success/20 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Accessibility First</h4>
                    <p className="text-muted-foreground text-sm">
                      Legal help should never be out of reach due to complexity or cost.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Transparent Process</h4>
                    <p className="text-muted-foreground text-sm">
                      No legal jargon, no hidden costs, just clear guidance every step of the way.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-her-primary/20 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-her-primary rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Human-Centered</h4>
                    <p className="text-muted-foreground text-sm">
                      Behind every case is a person who deserves empathy, respect, and expert care.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Statistics & Trust Indicators */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-border">
                <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                  Trusted by Thousands
                </h3>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-1">1000+</div>
                    <div className="text-muted-foreground text-sm">Cases Resolved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-success mb-1">98%</div>
                    <div className="text-muted-foreground text-sm">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-her-primary mb-1">24hrs</div>
                    <div className="text-muted-foreground text-sm">Avg Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">15+</div>
                    <div className="text-muted-foreground text-sm">Legal Specialties</div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-muted-foreground text-sm italic">
                    "Experience. Expertise. Ethics."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Expertise Areas */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-3xl font-bold text-primary text-center mb-12">
              Our Key Expertise Areas
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-animation">
              {expertiseAreas.map((area, index) => (
                <div key={index} className="service-card text-center">
                  <div className="mb-4">
                    <area.icon className={`w-12 h-12 mx-auto ${area.color}`} />
                  </div>
                  <h4 className="font-semibold text-primary mb-2">{area.title}</h4>
                  <div className="w-12 h-1 bg-gradient-accent rounded-full mx-auto"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;