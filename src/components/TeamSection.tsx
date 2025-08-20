import { Mail, Phone, Award, GraduationCap, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Palak Agarwal",
      title: "Senior Legal Advisor",
      specialization: "Family Law & Women's Rights",
      experience: "8+ Years",
      description: "Palak specializes in family law matters with a particular focus on women's rights and child custody cases. Her empathetic approach and thorough legal knowledge have helped hundreds of families navigate complex legal situations.",
      expertise: ["Family Law", "Divorce & Custody", "Women's Rights", "Domestic Violence"],
      image: "/api/placeholder/300/300"
    },
    {
      name: "Divyanshu Chaurasia",
      title: "Lead Corporate Counsel",
      specialization: "Business Law & IPR",
      experience: "10+ Years",
      description: "Divyanshu brings extensive experience in corporate law, intellectual property, and startup legal matters. He has guided numerous entrepreneurs and businesses through complex legal frameworks and compliance requirements.",
      expertise: ["Corporate Law", "IP & Trademarks", "Startup Legal", "Contract Law"],
      image: "/api/placeholder/300/300"
    },
    {
      name: "Shlok Jaiswal",
      title: "Consumer Rights Advocate",
      specialization: "Consumer Protection & Civil Law",
      experience: "6+ Years",
      description: "Shlok is passionate about consumer rights and civil litigation. His dedication to fighting for individual rights and his expertise in property disputes have earned him recognition in the legal community.",
      expertise: ["Consumer Protection", "Property Law", "Civil Litigation", "Banking Disputes"],
      image: "/api/placeholder/300/300"
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Your Trusted Legal Advisors
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Professional, approachable, and committed to your success. Meet the experienced 
              legal experts who make up the Your Legal Ally team.
            </p>
            <div className="inline-flex items-center space-x-2 bg-accent/10 rounded-full px-6 py-2">
              <Award className="w-5 h-5 text-accent" />
              <span className="text-accent font-semibold">Experience. Expertise. Ethics.</span>
            </div>
          </div>

          {/* Team Members */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 stagger-animation">
            {teamMembers.map((member, index) => (
              <div key={index} className="service-card text-center group">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-48 h-48 mx-auto rounded-full bg-gradient-accent p-1">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                      <div className="w-32 h-32 bg-muted rounded-full flex items-center justify-center">
                        <GraduationCap className="w-16 h-16 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                      {member.experience}
                    </div>
                  </div>
                </div>

                {/* Name & Title */}
                <h3 className="text-2xl font-bold text-primary mb-2">{member.name}</h3>
                <p className="text-accent font-semibold mb-1">{member.title}</p>
                <p className="text-muted-foreground text-sm mb-4">{member.specialization}</p>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {member.description}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="pt-6 border-t border-border">
                  <div className="flex justify-center space-x-4">
                    <div className="text-center">
                      <Mail className="w-5 h-5 text-muted-foreground mx-auto mb-1" />
                      <p className="text-xs text-muted-foreground">Email</p>
                    </div>
                    <div className="text-center">
                      <Phone className="w-5 h-5 text-muted-foreground mx-auto mb-1" />
                      <p className="text-xs text-muted-foreground">Consult</p>
                    </div>
                    <div className="text-center">
                      <Scale className="w-5 h-5 text-muted-foreground mx-auto mb-1" />
                      <p className="text-xs text-muted-foreground">Profile</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose Our Team */}
          <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 border border-border">
              <h3 className="text-3xl font-bold text-primary text-center mb-8">
                Why Our Team Makes the Difference
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-success" />
                  </div>
                  <h4 className="font-bold text-primary mb-2">Proven Track Record</h4>
                  <p className="text-muted-foreground text-sm">
                    Combined 20+ years of experience with successful case resolutions across all practice areas.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="font-bold text-primary mb-2">Continuous Learning</h4>
                  <p className="text-muted-foreground text-sm">
                    Regular training and updates on latest legal developments to serve you better.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-her-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Scale className="w-8 h-8 text-her-primary" />
                  </div>
                  <h4 className="font-bold text-primary mb-2">Client-First Approach</h4>
                  <p className="text-muted-foreground text-sm">
                    Every decision we make prioritizes your best interests and long-term success.
                  </p>
                </div>
              </div>

              <div className="text-center mt-8">
                <Button size="lg" className="bg-accent hover:bg-accent-dark">
                  Schedule a Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;