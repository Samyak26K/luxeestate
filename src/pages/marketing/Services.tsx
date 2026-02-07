import { Link } from "react-router-dom";
import { Building, Key, TrendingUp, Home, Paintbrush, Globe, ArrowRight, Check } from "lucide-react";
import SiteFrame from "@/components/layout/SiteFrame";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Building,
    title: "Property Sales",
    subtitle: "Maximize Your Property's Value",
    description: "Strategic marketing and expert negotiation to achieve premium prices for your luxury property. We leverage our extensive network and market expertise to position your property for success.",
    features: [
      "Comprehensive market analysis",
      "Professional photography & videography",
      "Global marketing exposure",
      "Skilled price negotiation",
      "Dedicated selling specialist",
    ],
  },
  {
    icon: Home,
    title: "Buyer Representation",
    subtitle: "Find Your Perfect Home",
    description: "Dedicated advocacy to find and secure your ideal luxury residence. From identifying properties to closing the deal, we guide you through every step with expertise and care.",
    features: [
      "Personalized property search",
      "Market insights & analysis",
      "Off-market opportunities",
      "Transaction management",
      "Due diligence support",
    ],
  },
  {
    icon: Key,
    title: "Property Management",
    subtitle: "Protect Your Investment",
    description: "Comprehensive management solutions that protect and enhance your real estate investments. We handle every detail so you can enjoy peace of mind.",
    features: [
      "Tenant screening & placement",
      "Maintenance coordination",
      "Financial reporting",
      "24/7 emergency response",
      "Regular property inspections",
    ],
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    subtitle: "Grow Your Portfolio",
    description: "Strategic insights to maximize returns on your luxury property portfolio. Our data-driven approach helps you make informed investment decisions.",
    features: [
      "Portfolio analysis",
      "Market forecasting",
      "Risk assessment",
      "Growth strategies",
      "ROI optimization",
    ],
  },
  {
    icon: Paintbrush,
    title: "Interior Design",
    subtitle: "Transform Your Space",
    description: "Transform spaces with our curated network of world-class interior designers. From staging to complete renovations, we bring your vision to life.",
    features: [
      "Design consultations",
      "Staging services",
      "Renovation management",
      "Furnishing procurement",
      "Styling & accessories",
    ],
  },
  {
    icon: Globe,
    title: "Relocation Services",
    subtitle: "Seamless Transitions",
    description: "Comprehensive support for clients moving to a new city or country. We ensure your transition is smooth and stress-free from start to finish.",
    features: [
      "Area orientation",
      "School research",
      "Community integration",
      "Settling-in assistance",
      "Local connections",
    ],
  },
];

const process = [
  {
    step: "01",
    title: "Consultation",
    description: "We begin with an in-depth conversation to understand your unique needs, preferences, and goals.",
  },
  {
    step: "02",
    title: "Strategy",
    description: "Our team develops a tailored approach, whether you're buying, selling, or investing in luxury property.",
  },
  {
    step: "03",
    title: "Execution",
    description: "We leverage our expertise, network, and resources to deliver results that exceed your expectations.",
  },
  {
    step: "04",
    title: "Success",
    description: "Your goals become reality, and we remain your trusted partner for all future real estate endeavors.",
  },
];

const Services = () => {
  return (
    <SiteFrame>
      {/* Hero */}
      <section className="pt-32 pb-24 bg-charcoal">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <span className="text-primary text-sm tracking-[0.3em] uppercase mb-6 block">
            Our Services
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight">
            Comprehensive Solutions for<br />
            <span className="text-primary">Discerning Clients</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            From acquisition to management, we provide end-to-end LuxeEstate 
            services tailored to your unique needs and aspirations.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-card border border-border rounded-lg p-8 md:p-10 hover:border-primary/50 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-14 h-14 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <service.icon className="text-primary" size={26} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-primary text-sm">{service.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Divider */}
                <div className="h-px w-full bg-border mb-6" />

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Check size={12} className="text-primary" />
                      </div>
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process - Clean Timeline */}
      <section className="section-padding bg-charcoal">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary text-xs tracking-[0.3em] uppercase mb-4 block font-medium">
              How We Work
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A refined, client-focused approach that delivers exceptional results at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative text-center md:text-left">
                {/* Step Number */}
                <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                  <span className="font-serif text-5xl text-primary/30">{item.step}</span>
                  {index < process.length - 1 && (
                    <div className="hidden md:block flex-1 h-px bg-border" />
                  )}
                </div>
                
                {/* Content */}
                <h3 className="font-serif text-xl text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-px bg-border border border-border rounded-lg overflow-hidden">
            <div className="bg-background p-10 text-center">
              <div className="font-serif text-4xl text-primary mb-3">15+</div>
              <p className="text-foreground font-medium mb-2">Years of Excellence</p>
              <p className="text-muted-foreground text-sm">Proven track record in luxury property advisory</p>
            </div>
            <div className="bg-background p-10 text-center">
              <div className="font-serif text-4xl text-primary mb-3">$2B+</div>
              <p className="text-foreground font-medium mb-2">Transaction Volume</p>
              <p className="text-muted-foreground text-sm">Total value of properties handled</p>
            </div>
            <div className="bg-background p-10 text-center">
              <div className="font-serif text-4xl text-primary mb-3">98%</div>
              <p className="text-foreground font-medium mb-2">Client Satisfaction</p>
              <p className="text-muted-foreground text-sm">Based on post-transaction surveys</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-charcoal">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-primary text-xs tracking-[0.3em] uppercase mb-4 block font-medium">
            Ready to Begin?
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Let's Discuss Your <span className="text-primary">Real Estate Goals</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Schedule a private consultation to discover how our services can be tailored to your unique needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="primary" className="gap-2">
                  <Link to="/contact">
                    Schedule Consultation
                    <ArrowRight size={18} />
                  </Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link to="/properties">Browse Properties</Link>
                </Button>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
};

export default Services;
