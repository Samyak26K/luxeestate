import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Building, Key, TrendingUp, Users, Star, Quote, Shield, Award, Clock, Handshake } from "lucide-react";
import SiteFrame from "@/components/layout/SiteFrame";
import LuxeSectionHeader from "@/components/marketing/LuxeSectionHeader";
import EstateCard from "@/components/property/EstateCard";
import { getFeaturedProperties } from "@/data/properties";
import { Button } from "@/components/ui/button";

const stats = [
  { value: "500+", label: "Properties Sold" },
  { value: "$2B+", label: "Total Sales Value" },
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
];

const whyChooseUs = [
  {
    icon: Shield,
    title: "Trusted Expertise",
    description: "Over 15 years guiding the most discerning clients through the luxury property market with proven results.",
  },
  {
    icon: Award,
    title: "Premium Service",
    description: "White-glove service tailored to meet the unique needs of discerning clients.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock support ensuring you never miss an opportunity.",
  },
  {
    icon: Handshake,
    title: "Exclusive Network",
    description: "Access to off-market properties and a network of high-net-worth individuals.",
  },
];

const services = [
  {
    icon: Building,
    title: "Property Sales",
    description: "Expert guidance through the entire selling process with premium marketing strategies.",
  },
  {
    icon: Key,
    title: "Property Buying",
    description: "Comprehensive property search and acquisition services tailored to your preferences.",
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    description: "Strategic investment insights to maximize your real estate portfolio returns.",
  },
  {
    icon: Users,
    title: "Consulting Services",
    description: "Professional real estate consulting for developers, investors, and institutions.",
  },
];

const testimonials = [
  {
    name: "Alexander Mitchell",
    role: "CEO, Mitchell Ventures",
    content: "LuxeEstate exceeded every expectation. Their attention to detail and market knowledge is unparalleled.",
    rating: 5,
  },
  {
    name: "Victoria Chen",
    role: "Private Investor",
    content: "The team's discretion and professionalism made selling my Beverly Hills estate a seamless experience.",
    rating: 5,
  },
  {
    name: "James Thornton",
    role: "Tech Entrepreneur",
    content: "From the first viewing to closing, LuxeEstate provided exceptional service. Highly recommended.",
    rating: 5,
  },
];

const Index = () => {
  const featuredProperties = getFeaturedProperties().slice(0, 3);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <SiteFrame>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1920"
            alt="Luxury Estate"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
          <span className="inline-block text-primary text-sm tracking-[0.3em] uppercase mb-6 animate-fade-in">
            LuxeEstate Collection
          </span>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Redefining Luxury
            <br />
            <span className="text-primary">Living</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            Discover exceptional properties that embody sophistication, elegance, 
            and the finest in architectural excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <Button asChild variant="primary">
              <Link to="/properties">Explore Properties</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-border bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center reveal opacity-0">
                <div className="font-serif text-4xl md:text-5xl text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="reveal opacity-0">
            <LuxeSectionHeader
              subtitle="Featured Listings"
              title="Exceptional Properties"
              description="Handpicked luxury estates representing the finest in architectural design and premium locations."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property, index) => (
              <div
                key={property.id}
                className="reveal opacity-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <EstateCard
                  id={property.id}
                  image={property.images[0]}
                  title={property.title}
                  location={property.location}
                  price={property.price}
                  beds={property.beds}
                  baths={property.baths}
                  sqft={property.sqft}
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12 reveal opacity-0">
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all duration-300"
            >
              <span>View All Properties</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="reveal opacity-0">
            <LuxeSectionHeader
              subtitle="Why Choose Us"
              title="Excellence in Every Detail"
              description="We combine expertise, dedication, and an exclusive network to deliver unparalleled results."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="reveal opacity-0 group p-8 border border-border rounded-lg bg-background/50 hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 mb-6 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="text-primary" size={22} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="reveal opacity-0">
            <LuxeSectionHeader
              subtitle="What We Offer"
              title="Our Services"
              description="Comprehensive LuxeEstate services tailored to the unique needs of our distinguished clientele."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="reveal opacity-0 luxury-card p-8 text-center hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <service.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-charcoal">
        <div className="max-w-7xl mx-auto">
          <div className="reveal opacity-0">
            <LuxeSectionHeader
              subtitle="Testimonials"
              title="What Our Clients Say"
              description="The trust of our clients is our greatest achievement."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="reveal opacity-0 luxury-card p-8"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Quote className="text-primary/30 mb-4" size={32} />
                <p className="text-foreground leading-relaxed mb-6">
                  "{testimonial.content}"
                </p>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
                <div>
                  <div className="font-serif text-foreground">{testimonial.name}</div>
                  <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920"
            alt="Luxury Property"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center reveal opacity-0">
          <span className="text-primary text-sm tracking-[0.2em] uppercase mb-4 block">
            Start Your Journey
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">
            Find Your Perfect <span className="text-primary">Property Today</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-10">
            Let our expert team guide you to the luxury property of your dreams. 
            Schedule a private consultation and begin your journey.
          </p>
          <Button asChild variant="primary">
            <Link to="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </SiteFrame>
  );
};

export default Index;
