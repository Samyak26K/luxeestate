import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Bed, Bath, Square, Check, Phone, Mail, Car, ChevronLeft, ChevronRight, CalendarDays } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import SiteFrame from "@/components/layout/SiteFrame";
import { getPropertyById, properties } from "@/data/properties";
import EstateCard from "@/components/property/EstateCard";
import { useToast } from "@/hooks/use-toast";
import { galleryImageTransition, galleryImageVariants } from "@/lib/motion";
import { CONTACT_INFO } from "@/lib/constants/siteContent";
import { Button } from "@/components/ui/button";

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const property = getPropertyById(id || "");
  const [activeImage, setActiveImage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  if (!property) {
    return (
      <SiteFrame>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-3xl text-foreground mb-4">Property Not Found</h1>
            <Link to="/properties" className="text-primary hover:underline">
              Back to Properties
            </Link>
          </div>
        </div>
      </SiteFrame>
    );
  }

  const similarProperties = properties
    .filter((p) => p.id !== property.id && p.category === property.category)
    .slice(0, 3);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Inquiry Sent!",
      description: "We'll get back to you shortly.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const nextImage = () => {
    // Wrap around to keep gallery navigation seamless.
    setActiveImage((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  const keyFeatures = [
    { icon: Bed, value: property.beds, label: "Bedrooms" },
    { icon: Bath, value: property.baths, label: "Bathrooms" },
    { icon: Square, value: property.sqft.toLocaleString(), label: "Sq Ft" },
    { icon: Car, value: "2+", label: "Parking" },
  ];

  return (
    <SiteFrame>
      {/* Header */}
      <section className="pt-28 pb-10 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 mb-8"
          >
            <ArrowLeft size={18} />
            <span className="text-sm tracking-wide">Back to Properties</span>
          </button>
          
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs tracking-[0.2em] uppercase rounded mb-4">
                {property.category}
              </span>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
                {property.title}
              </h1>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={16} className="text-primary" />
                <span>{property.address}</span>
              </div>
            </div>
            <div className="lg:text-right">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Asking Price</p>
              <span className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary">
                {property.price}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Main Image with Navigation */}
            <div className="lg:col-span-9">
              <div className="relative h-[400px] md:h-[550px] rounded-lg overflow-hidden group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImage}
                    src={property.images[activeImage]}
                    alt={property.title}
                    className="w-full h-full object-cover"
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={galleryImageVariants}
                    transition={galleryImageTransition}
                  />
                </AnimatePresence>
                
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 opacity-0 group-hover:opacity-100"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 opacity-0 group-hover:opacity-100"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-4 px-4 py-2 bg-background/80 backdrop-blur-sm rounded text-sm text-foreground">
                  {activeImage + 1} / {property.images.length}
                </div>
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="lg:col-span-3 flex lg:flex-col gap-4 overflow-x-auto lg:overflow-y-auto">
              {property.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`relative flex-shrink-0 w-28 h-20 lg:w-full lg:h-40 rounded-lg overflow-hidden transition-all duration-300 ${
                    activeImage === index
                      ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                      : "opacity-50 hover:opacity-100"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${property.title} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="section-padding pt-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-14">
              {/* Key Features */}
              <div>
                <h2 className="font-serif text-2xl text-foreground mb-8">Key Features</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {keyFeatures.map((feature, index) => (
                    <div 
                      key={index} 
                      className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors duration-300"
                    >
                      <feature.icon className="mx-auto text-primary mb-4" size={28} strokeWidth={1.5} />
                      <div className="text-foreground font-serif text-2xl mb-1">{feature.value}</div>
                      <div className="text-muted-foreground text-sm">{feature.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="font-serif text-2xl text-foreground mb-6">About This Property</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {property.description}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Built in {property.yearBuilt}, this exceptional {property.category} offers the perfect blend of luxury, 
                    comfort, and modern amenities. Located in the prestigious {property.location} area, this residence 
                    offers an elevated lifestyle with bespoke finishes and resort-inspired amenities.
                  </p>
                </div>
              </div>

              {/* Features & Amenities */}
              <div>
                <h2 className="font-serif text-2xl text-foreground mb-8">Features & Amenities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {property.features.map((feature, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-4 py-3 border-b border-border/50"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check size={16} className="text-primary" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Property Details Table */}
              <div>
                <h2 className="font-serif text-2xl text-foreground mb-8">Property Details</h2>
                <div className="bg-card border border-border rounded-lg overflow-hidden">
                  <div className="grid grid-cols-2 divide-x divide-border">
                    <div className="p-5 border-b border-border">
                      <p className="text-muted-foreground text-sm mb-1">Property Type</p>
                      <p className="text-foreground capitalize">{property.category}</p>
                    </div>
                    <div className="p-5 border-b border-border">
                      <p className="text-muted-foreground text-sm mb-1">Year Built</p>
                      <p className="text-foreground">{property.yearBuilt}</p>
                    </div>
                    <div className="p-5 border-b border-border">
                      <p className="text-muted-foreground text-sm mb-1">Listing Type</p>
                      <p className="text-foreground capitalize">{property.type === "sale" ? "For Sale" : "For Rent"}</p>
                    </div>
                    <div className="p-5 border-b border-border">
                      <p className="text-muted-foreground text-sm mb-1">Total Area</p>
                      <p className="text-foreground">{property.sqft.toLocaleString()} sq ft</p>
                    </div>
                    <div className="p-5">
                      <p className="text-muted-foreground text-sm mb-1">Location</p>
                      <p className="text-foreground">{property.location}</p>
                    </div>
                    <div className="p-5">
                      <p className="text-muted-foreground text-sm mb-1">Price per Sq Ft</p>
                      <p className="text-foreground">${Math.round(property.priceValue / property.sqft).toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - Inquiry Form */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-lg p-8 sticky top-28">
                {/* Schedule Visit CTA */}
                <div className="mb-8 p-6 bg-primary/10 rounded-lg border border-primary/20">
                  <div className="flex items-center gap-3 mb-3">
                    <CalendarDays className="text-primary" size={24} />
                    <h3 className="font-serif text-lg text-foreground">Schedule a Visit</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    Experience this property in person. Book a private viewing today.
                  </p>
                  <Button
                    type="button"
                    variant="primary"
                    className="w-full gap-2"
                    onClick={() => {
                      const formElement = document.getElementById("inquiry-form");
                      formElement?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <CalendarDays size={18} />
                    Schedule a Visit
                  </Button>
                </div>

                {/* Inquiry Form */}
                <div id="inquiry-form">
                  <h3 className="font-serif text-xl text-foreground mb-2">Inquire About This Property</h3>
                  <p className="text-muted-foreground text-sm mb-6">Fill out the form below and our team will contact you shortly.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Full Name *</label>
                      <input
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Email Address *</label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="text-sm text-muted-foreground mb-2 block">Message *</label>
                      <textarea
                        placeholder="Request a private viewing and your preferred times..."
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none"
                      />
                    </div>
                    <Button type="submit" variant="primary" className="w-full">
                      Send Inquiry
                    </Button>
                  </form>
                </div>

                {/* Contact Info */}
                <div className="mt-8 pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">Or contact us directly:</p>
                  <div className="space-y-3">
                    <a 
                      href={CONTACT_INFO.phoneHref}
                      className="flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-300"
                    >
                      <Phone size={16} className="text-primary" />
                      <span>{CONTACT_INFO.phone}</span>
                    </a>
                    <a 
                      href={CONTACT_INFO.emailInquiriesHref}
                      className="flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-300"
                    >
                      <Mail size={16} className="text-primary" />
                      <span>{CONTACT_INFO.emailInquiries}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Similar Properties */}
      {similarProperties.length > 0 && (
        <section className="section-padding bg-charcoal">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-10">
              Similar Properties You May Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {similarProperties.map((prop) => (
                <EstateCard
                  key={prop.id}
                  id={prop.id}
                  image={prop.images[0]}
                  title={prop.title}
                  location={prop.location}
                  price={prop.price}
                  beds={prop.beds}
                  baths={prop.baths}
                  sqft={prop.sqft}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </SiteFrame>
  );
};

export default PropertyDetails;
