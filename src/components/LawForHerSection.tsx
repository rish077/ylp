import { Heart, Shield, Home, Baby, Briefcase, UserCheck, Star, Lock, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";

const LawForHerSection = () => {
  const services = [
    {
      icon: Heart,
      title: "Family & Matrimonial Support",
      description: "Compassionate guidance through divorce, maintenance, and family disputes with complete confidentiality."
    },
    {
      icon: Shield,
      title: "Safety, Protection & Abuse-related Legal Help",
      description: "Immediate support for domestic violence, harassment, and personal safety legal matters."
    },
    {
      icon: Home,
      title: "Property & Inheritance Rights for Women",
      description: "Protecting your rightful claim to ancestral property, marital assets, and inheritance."
    },
    {
      icon: Baby,
      title: "Motherhood, Adoption & Reproductive Rights",
      description: "Legal support for maternity benefits, adoption processes, and reproductive rights."
    },
    {
      icon: Briefcase,
      title: "Workplace & Financial Independence Support",
      description: "Equal pay advocacy, workplace harassment cases, and entrepreneurship legal guidance."
    }
  ];

  const whyChooseUs = [
    {
      icon: UserCheck,
      title: "Female-friendly experts",
      description: "Our team includes experienced female advocates who understand women's unique challenges."
    },
    {
      icon: Lock,
      title: "100% confidential",
      description: "Complete privacy and discretion in all communications and legal proceedings."
    },
    {
      icon: Clock,
      title: "Affordable & accessible",
      description: "Specially designed pricing and payment options to ensure legal help is within reach."
    },
    {
      icon: Heart,
      title: "Empathetic guidance",
      description: "Compassionate support that goes beyond legal advice to emotional understanding."
    }
  ];
  const isHomePage = location.pathname === "/";
  const navigate = useNavigate();
  const handleNavClick = (href: string) => {
    if (href === "/") {
      // Navigate to home page
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (isHomePage && href.startsWith("/#")) {
      // On home page, just scroll to section
      const sectionId = href.substring(2);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home and scroll to section
      navigate(href);
      setTimeout(() => {
        const sectionId = href.substring(2);
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };
   

  return (
    <section id="law-for-her" className="py-20 law-for-her relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/15 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <Heart className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Specially Designed for Women</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Law for Her: Empowering Women Through Legal Awareness, Protection & Support
            </h2>
            
            <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              We understand that women face unique legal challenges. Our specialized services provide 
              compassionate, confidential, and effective legal assistance designed specifically for women's needs.
            </p>
          </div>

          {/* Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 stagger-animation">
            {services.map((service, index) => (
              <div key={index} className="law-for-her-card group">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-her-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-her-primary/30 transition-colors">
                    <service.icon className="w-8 h-8 text-her-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose Us for Law for Her */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-3xl font-bold text-white text-center mb-12">
              Why Choose "Law for Her"?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {whyChooseUs.map((reason, index) => (
                <div key={index} className="text-center law-for-her-card">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <reason.icon className="w-6 h-6 text-black" />
                  </div>
                  <h4 className="font-bold text-blue mb-2">{reason.title}</h4>
                  <p className="text-blue/80 text-sm leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
              <h3 className="text-3xl font-bold text-white mb-4">
                You Don't Have to Face This Alone
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Take the first step towards protecting your rights and securing your future. 
                Our compassionate legal experts are here to listen, understand, and fight for you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                 onClick={() => handleNavClick("/#contact")}
                 size="lg" className="bg-white text-her-primary hover:bg-white/90 font-semibold">
                  Get Confidential Help Now
                </Button>
                {/* <Button size="lg" className="bg-white text-her-primary hover:bg-white/90 font-semibold">
                  Schedule Private Consultation
                </Button> */}
              </div>
              
              <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
                <div className="flex items-center justify-center space-x-2 text-white/80 text-sm">
                  <Lock className="w-4 h-4" />
                  <span>All consultations are completely confidential and secure</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LawForHerSection;