import { Button } from "@/components/ui/button";
import { CheckCircle, Globe, Users, Shield, Heart } from "lucide-react";
import heroImage from "@/assets/hero-legal-consulting.jpg";

const HeroSection = () => {
  const differentiators = [
    { icon: Globe, text: "Online" },
    { icon: Users, text: "Responsive" },
    { icon: Shield, text: "Affordable" },
    { icon: Heart, text: "Human" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional legal consulting team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary/70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          {/* Main Headline */}
          <h1 className="hero-text text-4xl md:text-6xl lg:text-7xl mb-6">
            Your Legal Pal
          </h1>
          <p className="hero-text text-xl md:text-2xl mb-4 font-medium">
            Online, Affordable, and Always Within Reach
          </p>

          {/* Sub-headline */}
          <p className="text-primary-foreground/90 text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Legal help shouldn't feel distant, complicated, or expensive. We're here to change that.
          </p>

          {/* Key Differentiators */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center space-x-2 text-primary-foreground/90 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <CheckCircle className="w-5 h-5 text-success" />
              <span className="font-medium">Law. Simplified.</span>
            </div>
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 text-primary-foreground/90 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="btn-hero text-lg px-10 py-4 h-auto"
            >
              Solve Your Legal Worries
            </Button>
            <Button 
              size="lg" 
              className="btn-hero text-lg px-8 py-4 h-auto"
              onClick={() => {
                document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Learn More
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-primary-foreground/80 text-sm mb-4">
              Trusted by individuals, families, and businesses across India
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-primary-foreground/60">
              <div className="text-center min-w-[80px]">
                <div className="text-2xl font-bold text-primary-foreground">100+</div>
                <div className="text-sm whitespace-nowrap">Happy Clients</div>
              </div>
              <div className="text-center min-w-[80px]">
                <div className="text-2xl font-bold text-primary-foreground">15+</div>
                <div className="text-sm whitespace-nowrap">Practice Areas</div>
              </div>
              <div className="text-center min-w-[80px]">
                <div className="text-2xl font-bold text-primary-foreground">24/7</div>
                <div className="text-sm whitespace-nowrap">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;