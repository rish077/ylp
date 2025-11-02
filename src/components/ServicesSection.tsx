import { 
  Shield, 
  Heart, 
  Home, 
  FileText, 
  Users, 
  Briefcase, 
  Scale, 
  CreditCard, 
  GraduationCap,
  Globe,
  UserCheck,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: Shield,
      title: "Intellectual Property (IPR) Services",
      description: "Protect your innovations and creative works with comprehensive IP support.",
      features: ["Trademark Search Report", "IP Infringement Advisory", "Patent Filing Support"],
      color: "accent",
      slug: "ipr-services"
    },
    {
      icon: Heart,
      title: "Family Law Advisory",
      description: "Compassionate legal guidance for family matters and personal relationships.",
      features: ["Divorce Guidance", "Child Custody", "Domestic Violence Support", "Settlement Agreements"],
      color: "her-primary",
      slug: "family-law"
    },
    {
      icon: Home,
      title: "Property & Civil Dispute Support",
      description: "Expert assistance with property transactions and civil legal matters.",
      features: ["Property Dispute Consultation", "Title Check", "Sale Deeds & Lease Agreements"],
      color: "success",
      slug: "property-civil"
    },
    {
      icon: FileText,
      title: "Will, Succession & Inheritance Planning",
      description: "Secure your family's future with proper estate planning and documentation.",
      features: ["Drafting Wills", "Succession Planning", "Legal Heirship Certificates"],
      color: "primary",
      slug: "will-succession"
    },
    {
      icon: Users,
      title: "Consumer Protection Service",
      description: "Stand up for your rights as a consumer with expert legal backing.",
      features: ["Defective Product Help", "Refund & Compensation", "Consumer Court Representation"],
      color: "warning",
      slug: "consumer-protection"
    },
    {
      icon: Briefcase,
      title: "Contracts & Agreements",
      description: "Professional drafting and review of all types of legal agreements.",
      features: ["Employment Contracts", "Service Agreements", "NDAs & MoUs"],
      color: "accent-light",
      slug: "contracts-agreements"
    },
    {
      icon: Scale,
      title: "Legal Notices & Documentation",
      description: "Professional legal notices and essential documentation services.",
      features: ["Legal Notice Drafting", "Reply to Legal Notices", "Affidavits"],
      color: "primary",
      slug: "legal-notices"
    },
    {
      icon: CreditCard,
      title: "Banking & Insurance Law Advisory",
      description: "Navigate complex financial and insurance legal matters with confidence.",
      features: ["Loan Disputes", "Insurance Claim Denial", "Credit/Debit Fraud"],
      color: "success",
      slug: "banking-insurance"
    },
    {
      icon: GraduationCap,
      title: "Startup & Business Legal Support",
      description: "Comprehensive legal foundation for entrepreneurs and growing businesses.",
      features: ["Business Formation", "Compliance Support", "Vendor Agreements"],
      color: "accent",
      slug: "startup-business"
    },
    {
      icon: Globe,
      title: "Cyber Law Advisory",
      description: "Protection and guidance for the digital age legal challenges.",
      features: ["Online Fraud", "Cyberbullying", "IT Act Advisory"],
      color: "her-primary",
      slug: "cyber-law"
    },
    {
      icon: UserCheck,
      title: "Employment & Labour Law Advisory",
      description: "Workplace rights and employment law guidance for employees and employers.",
      features: ["Wrongful Termination", "Workplace Harassment", "Employment Contracts"],
      color: "primary",
      slug: "employment-labour"
    },
    {
      icon: Users,
      title: "Alternative Dispute Resolution (ADR)",
      description: "Resolve disputes efficiently through mediation and arbitration.",
      features: ["Mediation Support", "Arbitration Clauses", "Settlement Agreements"],
      color: "success",
      slug: "adr-services"
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

  const getColorClasses = (color: string) => {
    const colorMap = {
      'accent': 'text-accent border-accent/20 bg-accent/5',
      'her-primary': 'text-her-primary border-her-primary/20 bg-her-primary/5',
      'success': 'text-success border-success/20 bg-success/5',
      'primary': 'text-primary border-primary/20 bg-primary/5',
      'warning': 'text-warning border-warning/20 bg-warning/5',
      'accent-light': 'text-accent-light border-accent/20 bg-accent/5'
    };
    return colorMap[color as keyof typeof colorMap] || 'text-primary border-primary/20 bg-primary/5';
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Comprehensive Legal Services Tailored to You
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              From personal matters to business compliance, we've got you covered with expert 
              legal guidance across all major practice areas.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
            {services.map((service, index) => (
              <Link
                key={index}
                to={`/services/${service.slug}`}
                className="service-card group cursor-pointer block"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center mb-6 ${getColorClasses(service.color)}`}>
                  <service.icon className="w-8 h-8" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <div className="flex items-center text-accent font-medium text-sm group-hover:text-accent-dark transition-colors">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in-up">
            <div className="bg-gradient-hero rounded-2xl p-8 md:p-12 text-center shadow-hero">
              <h3 className="text-3xl font-bold text-primary-foreground mb-4">
                Can't Find What You're Looking For?
              </h3>
              <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
                Every legal situation is unique. Let us know your specific needs, and our expert 
                team will provide tailored guidance just for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => handleNavClick("/#contact")}
                 size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                  Get Custom Legal Help
                </Button>
                {/* <Button variant="outline" size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                  Schedule Consultation
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;