import { useParams, useNavigate, Link } from "react-router-dom";
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
  ArrowLeft,
  CheckCircle2,
  Phone,
  Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  const servicesData: Record<string, any> = {
    "ipr-services": {
      icon: Shield,
      title: "Intellectual Property (IPR) Services",
      description: "Protect your innovations and creative works with comprehensive IP support. In today's knowledge-driven economy, intellectual property is one of your most valuable assets.",
      color: "accent",
      detailedContent: [
        "Your intellectual property represents your creativity, innovation, and competitive advantage. Whether you're an inventor, artist, entrepreneur, or business owner, protecting your IP rights is crucial for long-term success.",
        "Our comprehensive IP services help you navigate the complex landscape of intellectual property law, ensuring your innovations and creative works are properly protected and defended."
      ],
      services: [
        {
          title: "Trademark Search & Registration",
          description: "Comprehensive trademark search reports to ensure your brand is unique and registerable. We guide you through the entire trademark registration process."
        },
        {
          title: "IP Infringement Advisory",
          description: "Expert guidance on identifying and addressing intellectual property infringement. We help protect your rights and take appropriate legal action when necessary."
        },
        {
          title: "Patent Filing Support",
          description: "Assistance with patent applications to protect your inventions and innovations. We simplify the complex patent filing process."
        },
        {
          title: "Copyright Protection",
          description: "Safeguard your creative works including literary, artistic, and musical creations with proper copyright registration and enforcement."
        }
      ],
      benefits: [
        "Protect your brand identity and reputation",
        "Prevent unauthorized use of your innovations",
        "Increase your business valuation",
        "Create licensing opportunities",
        "Gain competitive advantage in the market"
      ]
    },
    "family-law": {
      icon: Heart,
      title: "Family Law Advisory",
      description: "Compassionate legal guidance for family matters and personal relationships. We understand that family legal issues are sensitive and emotionally challenging.",
      color: "her-primary",
      detailedContent: [
        "Family matters require not just legal expertise but also empathy and understanding. Our family law practice is built on the foundation of providing compassionate, practical, and effective legal solutions.",
        "We guide you through difficult times with sensitivity while ensuring your rights and interests are protected. Our approach focuses on finding amicable solutions wherever possible while being prepared to advocate strongly for you when needed."
      ],
      services: [
        {
          title: "Divorce & Separation Guidance",
          description: "Comprehensive support through divorce proceedings, including mutual consent divorce and contested divorce matters."
        },
        {
          title: "Child Custody & Maintenance",
          description: "Protecting the best interests of children while ensuring fair custody arrangements and appropriate financial support."
        },
        {
          title: "Domestic Violence Support",
          description: "Immediate legal protection and support for victims of domestic violence, including restraining orders and safety planning."
        },
        {
          title: "Settlement Agreements",
          description: "Drafting fair and comprehensive settlement agreements for property division, alimony, and other matrimonial matters."
        }
      ],
      benefits: [
        "Compassionate and confidential service",
        "Focus on amicable resolutions",
        "Protection of your rights and interests",
        "Expert guidance through emotional times",
        "Child-focused solutions"
      ]
    },
    "property-civil": {
      icon: Home,
      title: "Property & Civil Dispute Support",
      description: "Expert assistance with property transactions and civil legal matters. Protect your property rights and resolve disputes effectively.",
      color: "success",
      detailedContent: [
        "Property matters form the backbone of personal and business wealth. Whether you're buying, selling, or involved in a property dispute, proper legal guidance is essential to protect your interests.",
        "Our property law practice covers everything from routine transactions to complex disputes, ensuring your property rights are secure and properly documented."
      ],
      services: [
        {
          title: "Property Dispute Consultation",
          description: "Expert advice on resolving property disputes including boundary issues, ownership conflicts, and possession matters."
        },
        {
          title: "Title Verification & Due Diligence",
          description: "Comprehensive title checks to ensure clear ownership before property transactions."
        },
        {
          title: "Sale Deeds & Lease Agreements",
          description: "Professional drafting and review of property sale deeds, purchase agreements, and lease contracts."
        },
        {
          title: "Partition & Succession",
          description: "Legal assistance in property partition matters and succession planning for family properties."
        }
      ],
      benefits: [
        "Secure property transactions",
        "Clear title verification",
        "Dispute prevention and resolution",
        "Proper documentation",
        "Peace of mind in property matters"
      ]
    },
    "will-succession": {
      icon: FileText,
      title: "Will, Succession & Inheritance Planning",
      description: "Secure your family's future with proper estate planning and documentation. Ensure your wishes are respected and your loved ones are protected.",
      color: "primary",
      detailedContent: [
        "Estate planning is one of the most important steps you can take to protect your family's future. A well-drafted will and proper succession planning can prevent family disputes and ensure your assets are distributed according to your wishes.",
        "We help you create comprehensive estate plans that consider all aspects of wealth transfer, tax implications, and family dynamics."
      ],
      services: [
        {
          title: "Will Drafting",
          description: "Professional drafting of legally valid wills that clearly express your wishes for asset distribution."
        },
        {
          title: "Succession Planning",
          description: "Comprehensive planning for smooth transfer of assets and business interests to the next generation."
        },
        {
          title: "Legal Heirship Certificates",
          description: "Assistance in obtaining legal heirship certificates required for claiming inheritance."
        },
        {
          title: "Estate Administration",
          description: "Guidance on probate and estate administration processes to execute wills properly."
        }
      ],
      benefits: [
        "Prevent family disputes",
        "Ensure your wishes are honored",
        "Minimize tax implications",
        "Protect vulnerable family members",
        "Peace of mind for the future"
      ]
    },
    "consumer-protection": {
      icon: Users,
      title: "Consumer Protection Service",
      description: "Stand up for your rights as a consumer with expert legal backing. Get justice for defective products, poor services, and unfair trade practices.",
      color: "warning",
      detailedContent: [
        "As a consumer, you have rights that are protected by law. When businesses fail to deliver on their promises or provide defective products and services, you deserve justice and compensation.",
        "Our consumer protection practice helps you navigate consumer courts and negotiate settlements to ensure you get what you're entitled to."
      ],
      services: [
        {
          title: "Defective Product Claims",
          description: "Legal assistance for claims related to defective or substandard products."
        },
        {
          title: "Service Deficiency Cases",
          description: "Support for cases involving poor service quality or service denial by providers."
        },
        {
          title: "Refund & Compensation",
          description: "Help in securing refunds, replacements, or compensation for consumer grievances."
        },
        {
          title: "Consumer Court Representation",
          description: "Professional representation in consumer dispute forums at district, state, and national levels."
        }
      ],
      benefits: [
        "Assert your consumer rights",
        "Get fair compensation",
        "Expert court representation",
        "Affordable legal support",
        "Quick resolution of disputes"
      ]
    },
    "contracts-agreements": {
      icon: Briefcase,
      title: "Contracts & Agreements",
      description: "Professional drafting and review of all types of legal agreements. Protect your interests with clear, enforceable contracts.",
      color: "accent-light",
      detailedContent: [
        "Contracts form the foundation of all business and personal transactions. A well-drafted agreement can prevent disputes, while a poorly written one can lead to costly litigation.",
        "We provide comprehensive contract services, from drafting to review and negotiation, ensuring your agreements are clear, legally sound, and protect your interests."
      ],
      services: [
        {
          title: "Employment Contracts",
          description: "Drafting and reviewing employment agreements, service contracts, and separation agreements."
        },
        {
          title: "Business Agreements",
          description: "Comprehensive business contracts including partnership deeds, joint venture agreements, and vendor contracts."
        },
        {
          title: "NDAs & Confidentiality",
          description: "Non-disclosure agreements and confidentiality clauses to protect sensitive information."
        },
        {
          title: "MoUs & Service Agreements",
          description: "Memoranda of Understanding and service agreements for various business relationships."
        }
      ],
      benefits: [
        "Clear and enforceable agreements",
        "Protect your business interests",
        "Prevent future disputes",
        "Professional contract review",
        "Customized to your needs"
      ]
    },
    "legal-notices": {
      icon: Scale,
      title: "Legal Notices & Documentation",
      description: "Professional legal notices and essential documentation services. Ensure your legal communications are proper, effective, and legally sound.",
      color: "primary",
      detailedContent: [
        "A well-drafted legal notice can often resolve disputes without going to court. It serves as a formal record of your grievance and your intent to take legal action if necessary.",
        "We provide comprehensive legal documentation services to ensure your legal communications are professional, accurate, and effective."
      ],
      services: [
        {
          title: "Legal Notice Drafting",
          description: "Professional drafting of legal notices for various civil and criminal matters."
        },
        {
          title: "Reply to Legal Notices",
          description: "Expert assistance in drafting appropriate responses to legal notices received."
        },
        {
          title: "Affidavits & Declarations",
          description: "Preparation of sworn affidavits and declarations for various legal purposes."
        },
        {
          title: "Legal Documentation",
          description: "Assistance with various legal documents including undertakings, indemnity bonds, and power of attorney."
        }
      ],
      benefits: [
        "Professional legal communication",
        "Often resolves issues without litigation",
        "Clear documentation of disputes",
        "Expert legal drafting",
        "Cost-effective solutions"
      ]
    },
    "banking-insurance": {
      icon: CreditCard,
      title: "Banking & Insurance Law Advisory",
      description: "Navigate complex financial and insurance legal matters with confidence. Get expert help with loan disputes, insurance claims, and financial fraud.",
      color: "success",
      detailedContent: [
        "Banking and insurance disputes can be overwhelming, especially when dealing with large institutions. Our expertise helps level the playing field and ensures you get fair treatment.",
        "We handle all aspects of banking and insurance law, from loan disputes to insurance claim denials, protecting your financial interests."
      ],
      services: [
        {
          title: "Loan Dispute Resolution",
          description: "Assistance with home loan, personal loan, and business loan disputes including foreclosure defense."
        },
        {
          title: "Insurance Claim Support",
          description: "Help in securing insurance claims that have been wrongfully denied or delayed."
        },
        {
          title: "Credit/Debit Card Fraud",
          description: "Legal support for cases of unauthorized transactions and card fraud."
        },
        {
          title: "Banking Service Issues",
          description: "Resolution of banking service problems including account freezing, unauthorized charges, and service deficiencies."
        }
      ],
      benefits: [
        "Expert financial law guidance",
        "Fight unfair denials",
        "Protect your financial rights",
        "Navigate complex regulations",
        "Get fair compensation"
      ]
    },
    "startup-business": {
      icon: GraduationCap,
      title: "Startup & Business Legal Support",
      description: "Comprehensive legal foundation for entrepreneurs and growing businesses. Build your business on solid legal ground from day one.",
      color: "accent",
      detailedContent: [
        "Starting and running a business involves numerous legal considerations. From choosing the right business structure to ensuring compliance, proper legal guidance is essential for success.",
        "We provide end-to-end legal support for startups and growing businesses, helping you navigate the complex legal landscape so you can focus on growing your business."
      ],
      services: [
        {
          title: "Business Formation",
          description: "Assistance with company incorporation, partnership registration, and choosing the right business structure."
        },
        {
          title: "Compliance Support",
          description: "Ensuring your business meets all regulatory and compliance requirements."
        },
        {
          title: "Vendor & Client Agreements",
          description: "Drafting and reviewing vendor contracts, client agreements, and service terms."
        },
        {
          title: "Trademark & IP Strategy",
          description: "Protecting your brand and intellectual property as your business grows."
        }
      ],
      benefits: [
        "Strong legal foundation",
        "Compliance peace of mind",
        "Protect your business assets",
        "Avoid costly legal mistakes",
        "Focus on growth"
      ]
    },
    "cyber-law": {
      icon: Globe,
      title: "Cyber Law Advisory",
      description: "Protection and guidance for the digital age legal challenges. Navigate online fraud, cyberbullying, and digital rights with expert legal support.",
      color: "her-primary",
      detailedContent: [
        "The digital age has brought new legal challenges. From online fraud to cyberbullying, digital crimes are increasingly common and can have serious consequences.",
        "Our cyber law practice helps you understand and protect your digital rights, providing expert guidance on all aspects of cyber law and IT Act compliance."
      ],
      services: [
        {
          title: "Online Fraud Cases",
          description: "Legal assistance for victims of online scams, phishing, and digital fraud."
        },
        {
          title: "Cyberbullying & Harassment",
          description: "Protection and legal action against online harassment and cyberbullying."
        },
        {
          title: "IT Act Advisory",
          description: "Guidance on Information Technology Act compliance and digital rights."
        },
        {
          title: "Data Privacy Issues",
          description: "Help with data breach, privacy violations, and unauthorized data usage."
        }
      ],
      benefits: [
        "Protect your digital rights",
        "Take action against cyber crimes",
        "IT Act compliance",
        "Expert digital law guidance",
        "Secure your online presence"
      ]
    },
    "employment-labour": {
      icon: UserCheck,
      title: "Employment & Labour Law Advisory",
      description: "Workplace rights and employment law guidance for employees and employers. Ensure fair treatment and legal compliance in the workplace.",
      color: "primary",
      detailedContent: [
        "Employment relationships are governed by complex laws designed to protect both employees and employers. Understanding these rights and obligations is crucial for a fair workplace.",
        "We provide comprehensive employment law services, from contract review to wrongful termination cases, ensuring workplace fairness and legal compliance."
      ],
      services: [
        {
          title: "Wrongful Termination",
          description: "Legal support for employees who have been unfairly dismissed or terminated."
        },
        {
          title: "Workplace Harassment",
          description: "Protection and legal action in cases of workplace harassment including PoSH Act compliance."
        },
        {
          title: "Employment Contract Review",
          description: "Review and negotiation of employment contracts to protect your interests."
        },
        {
          title: "Labour Law Compliance",
          description: "Helping employers ensure compliance with labour laws and regulations."
        }
      ],
      benefits: [
        "Protect employee rights",
        "Ensure fair treatment",
        "Workplace harassment protection",
        "Expert employment law guidance",
        "Labour law compliance"
      ]
    },
    "adr-services": {
      icon: Users,
      title: "Alternative Dispute Resolution (ADR)",
      description: "Resolve disputes efficiently through mediation and arbitration. Save time, money, and relationships with out-of-court dispute resolution.",
      color: "success",
      detailedContent: [
        "Not all disputes need to be resolved in court. Alternative Dispute Resolution methods like mediation and arbitration offer faster, more cost-effective, and often more satisfactory solutions.",
        "We help parties find common ground and reach mutually acceptable solutions, preserving relationships while resolving conflicts effectively."
      ],
      services: [
        {
          title: "Mediation Support",
          description: "Facilitating negotiations between parties to reach mutually acceptable solutions."
        },
        {
          title: "Arbitration Services",
          description: "Professional arbitration services for binding dispute resolution outside court."
        },
        {
          title: "Settlement Agreements",
          description: "Drafting comprehensive settlement agreements that protect all parties' interests."
        },
        {
          title: "Conciliation Services",
          description: "Assisting parties in reaching amicable resolutions through structured conciliation processes."
        }
      ],
      benefits: [
        "Faster dispute resolution",
        "Cost-effective solutions",
        "Preserve relationships",
        "Confidential proceedings",
        "Flexible and practical outcomes"
      ]
    }
  };

  const service = servicesData[serviceId || ""];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">Service Not Found</h2>
          <Button onClick={() => navigate("/")}>Return Home</Button>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/#services" className="hover:text-primary transition-colors">Services</Link>
            <span>/</span>
            <span className="text-primary">{service.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            className="mb-8 text-primary-foreground hover:bg-white/10"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <div className="max-w-4xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-lg bg-white/10 flex items-center justify-center">
                <Icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">
                {service.title}
              </h1>
            </div>
            <p className="text-xl text-primary-foreground/90">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {service.detailedContent.map((paragraph: string, index: number) => (
              <p key={index} className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.services.map((item: any, index: number) => (
                <div key={index} className="bg-background rounded-xl p-6 border border-border shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              Key Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.benefits.map((benefit: string, index: number) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-success flex-shrink-0 mt-1" />
                  <p className="text-lg text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Let us help you with your legal needs. Contact us today for a consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold"
                onClick={() => {
                  navigate("/#contact");
                  setTimeout(() => {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
              >
                Contact Us Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white text-primary hover:bg-white/90 font-semibold"
                asChild
              >
                <a href="tel:+919161108822">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-primary-foreground/90">
              <a href="tel:+919161108822" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Phone className="w-5 h-5" />
                +91 9161108822
              </a>
              <a href="mailto:yourlegalally.yla@gmail.com" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Mail className="w-5 h-5" />
                yourlegalally.yla@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;