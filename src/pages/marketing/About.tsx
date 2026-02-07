import { Link } from "react-router-dom";
import { Award, Users, Target, Heart, ArrowRight } from "lucide-react";
import SiteFrame from "@/components/layout/SiteFrame";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We uphold the highest standards in every transaction, ensuring unparalleled quality and service.",
  },
  {
    icon: Users,
    title: "Relationships",
    description: "Building lasting partnerships with our clients based on trust, respect, and mutual success.",
  },
  {
    icon: Target,
    title: "Expertise",
    description: "Deep market knowledge and industry insights to guide informed real estate decisions.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "A genuine love for exceptional properties and helping clients find their perfect home.",
  },
];

const milestones = [
  { year: "2008", event: "Founded with a vision for personalized luxury service" },
  { year: "2012", event: "Expanded to Beverly Hills flagship office" },
  { year: "2016", event: "Surpassed $1 billion in total sales" },
  { year: "2020", event: "Launched exclusive global partnerships" },
  { year: "2024", event: "Celebrated 500+ luxury properties sold" },
];

const About = () => {
  return (
    <SiteFrame>
      {/* Hero - Typography Focused */}
      <section className="pt-32 pb-24 bg-charcoal">
        <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
          <span className="text-primary text-sm tracking-[0.3em] uppercase mb-6 block">
            About LuxeEstate
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 leading-tight">
            A Legacy of Trust,<br />
            <span className="text-primary">Excellence</span>, and Vision
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            For over 15 years, we have been the trusted partner for discerning clients 
            seeking not just properties, but a lifestyle defined by sophistication and excellence.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
            {/* Mission */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-px h-full bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />
              <span className="text-primary text-xs tracking-[0.3em] uppercase mb-4 block font-medium">
                Our Mission
              </span>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
                To Curate Exceptional Living Experiences
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We believe that acquiring a luxury property should be as extraordinary as 
                the homes themselves. Our mission is to provide an unparalleled level of 
                service, expertise, and discretion to every client.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We don't simply facilitate transactions—we build relationships, understand 
                aspirations, and deliver results that exceed expectations.
              </p>
            </div>

            {/* Vision */}
            <div className="relative">
              <div className="absolute -left-4 top-0 w-px h-full bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />
              <span className="text-primary text-xs tracking-[0.3em] uppercase mb-4 block font-medium">
                Our Vision
              </span>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
                Redefining the Standard of Luxury Living
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We envision a future where every interaction with LuxeEstate represents 
                the pinnacle of professionalism, innovation, and client-centric service.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our goal is to remain the most trusted name in luxury property advisory, 
                expanding our global reach while maintaining the personalized attention 
                that defines our brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story - Minimal Imagery */}
      <section className="section-padding bg-charcoal">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-primary text-xs tracking-[0.3em] uppercase mb-6 block font-medium">
            Our Story
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-10">
            Born from a Vision of Excellence
          </h2>
          
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto text-left md:text-center">
            <p>
              In 2008, Jonathan Sterling founded LuxeEstate with a singular belief: 
              that the pursuit of a luxury home deserves an experience as refined as the 
              properties themselves.
            </p>
            <p>
              What began as a boutique agency in Los Angeles has evolved into a 
              prestigious firm renowned for white-glove service, unmatched market expertise, 
              and an unwavering commitment to our clients' vision.
            </p>
            <p>
              Today, we represent the finest properties across California's most 
              coveted neighborhoods—from the hillside estates of Beverly Hills to 
              the oceanfront retreats of Malibu—serving clients who demand nothing 
              less than excellence.
            </p>
          </div>

          {/* Decorative Element */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <div className="h-px w-12 bg-primary/50" />
            <span className="text-primary font-serif text-xl">Est. 2008</span>
            <div className="h-px w-12 bg-primary/50" />
          </div>
        </div>
      </section>

      {/* Values - Strong Typography */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary text-xs tracking-[0.3em] uppercase mb-4 block font-medium">
              What Drives Us
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-background p-10 md:p-12 group hover:bg-card transition-colors duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 shrink-0 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                    <value.icon className="text-primary" size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-foreground mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline - Clean Design */}
      <section className="section-padding bg-charcoal">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-primary text-xs tracking-[0.3em] uppercase mb-4 block font-medium">
              Our Journey
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Key Milestones
            </h2>
          </div>

          <div className="space-y-0">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex items-start gap-8 py-8 border-b border-border last:border-0 group"
              >
                <span className="font-serif text-3xl md:text-4xl text-primary shrink-0 w-24">
                  {milestone.year}
                </span>
                <div className="flex-1 pt-2">
                  <p className="text-foreground text-lg group-hover:text-primary transition-colors duration-300">
                    {milestone.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 border-b border-border">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <div>
              <div className="font-serif text-4xl md:text-5xl text-primary mb-2">500+</div>
              <p className="text-muted-foreground text-sm tracking-wide">Properties Sold</p>
            </div>
            <div>
              <div className="font-serif text-4xl md:text-5xl text-primary mb-2">$2B+</div>
              <p className="text-muted-foreground text-sm tracking-wide">In Total Sales</p>
            </div>
            <div>
              <div className="font-serif text-4xl md:text-5xl text-primary mb-2">15+</div>
              <p className="text-muted-foreground text-sm tracking-wide">Years Experience</p>
            </div>
            <div>
              <div className="font-serif text-4xl md:text-5xl text-primary mb-2">98%</div>
              <p className="text-muted-foreground text-sm tracking-wide">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Experience the <span className="text-primary">LuxeEstate</span> Difference
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
            Let our dedicated team guide you to the luxury property of your dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="primary" className="gap-2">
              <Link to="/properties">
                View Properties
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button asChild variant="secondary">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
};

export default About;
