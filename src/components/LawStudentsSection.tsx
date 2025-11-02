import { GraduationCap, BookOpen, Users, FileText, Target, Star, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router-dom";

const LawStudentsSection = () => {
  const services = [
    {
      icon: Target,
      title: "CLAT Mentorship",
      description: "Personalized guidance for Common Law Admission Test preparation with expert mentors.",
      features: ["Study plans", "Mock tests", "Performance analysis"]
    },
    {
      icon: BookOpen,
      title: "Personalized Doubt Sessions",
      description: "One-on-one sessions to clear your doubts and strengthen conceptual understanding.",
      features: ["Subject-wise support", "Case law explanations", "Exam strategies"]
    },
    {
      icon: Users,
      title: "Career Guidance",
      description: "Navigate your legal career path with insights from experienced practitioners.",
      features: ["Career mapping", "Industry insights", "Networking opportunities"]
    },
    {
      icon: FileText,
      title: "CV/SOP Support",
      description: "Professional assistance in crafting compelling CVs and Statements of Purpose.",
      features: ["Document review", "Content optimization", "Application support"]
    },
    {
      icon: Star,
      title: "Research Guidance",
      description: "Support for legal research projects, papers, and academic assignments.",
      features: ["Research methodology", "Citation guidance", "Quality review"]
    },
    {
      icon: Clock,
      title: "Interview Preparation",
      description: "Mock interviews and preparation for law firm interviews and judicial clerkships.",
      features: ["Mock sessions", "Feedback & tips", "Confidence building"]
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
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-6 py-2 mb-6">
              <GraduationCap className="w-5 h-5 text-accent" />
              <span className="text-accent font-medium">For Future Legal Minds</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Law School Lounge: Nurturing Future Legal Minds
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Whether you're preparing for law school, currently studying, or planning your legal career, 
              we provide personalized guidance and mentorship to help you succeed in your legal journey.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 stagger-animation">
            {services.map((service, index) => (
              <div key={index} className="service-card group">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Success Stories & Statistics */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left: Success Statistics */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-3xl font-bold text-primary mb-6">
                Student Success Stories
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our mentorship programs have helped hundreds of law students and aspirants 
                achieve their academic and career goals. Here's what our guidance has accomplished:
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-border">
                  <div className="text-3xl font-bold text-accent mb-1">95%</div>
                  <div className="text-muted-foreground text-sm">CLAT Success Rate</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-border">
                  <div className="text-3xl font-bold text-success mb-1">200+</div>
                  <div className="text-muted-foreground text-sm">Students Mentored</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-border">
                  <div className="text-3xl font-bold text-her-primary mb-1">15+</div>
                  <div className="text-muted-foreground text-sm">Top Law Schools</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-border">
                  <div className="text-3xl font-bold text-primary mb-1">4.8/5</div>
                  <div className="text-muted-foreground text-sm">Student Rating</div>
                </div>
              </div>
            </div>

            {/* Right: Testimonial */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-border relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">"</span>
                </div>
                
                <blockquote className="text-muted-foreground italic text-lg leading-relaxed mb-6">
                  "The CLAT mentorship program at Your Legal Ally was a game-changer for me. 
                  The personalized study plan, regular doubt sessions, and mock tests helped me 
                  secure admission to my dream law school. The mentors are not just experts, 
                  but genuine guides who care about your success."
                </blockquote>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">Priya Sharma</div>
                    <div className="text-sm text-muted-foreground">NLSIU Bangalore, Class of 2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="bg-gradient-accent rounded-2xl p-8 md:p-12 text-center shadow-hero">
              <h3 className="text-3xl font-bold text-accent-foreground mb-4">
                Ready to Accelerate Your Legal Career?
              </h3>
              <p className="text-accent-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
                Join our community of aspiring legal professionals and get the guidance you need 
                to excel in your studies and build a successful legal career.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => handleNavClick("/#contact")}
                 size="lg" className="bg-white text-accent hover:bg-white/90 font-semibold">
                  Start Your Journey
                </Button>
                {/* <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  Book Free Consultation
                </Button> */}
              </div>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-accent-foreground/90 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <Target className="w-4 h-4" />
                  <span>Personalized Learning</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Users className="w-4 h-4" />
                  <span>Expert Mentors</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Star className="w-4 h-4" />
                  <span>Proven Results</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LawStudentsSection;