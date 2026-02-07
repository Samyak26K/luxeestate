import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from "lucide-react";
import SiteFrame from "@/components/layout/SiteFrame";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { CONTACT_INFO, CTA_LABELS } from "@/lib/constants/siteContent";
import { Button } from "@/components/ui/button";

// Form validation schema
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().max(20, "Phone must be less than 20 characters").optional(),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate with zod schema
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const firstError = result.error.errors[0];
      toast({
        title: firstError.message,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. We'll respond within 24 hours.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <SiteFrame>
      {/* Hero - Strong CTA Messaging */}
      <section className="pt-32 pb-20 bg-charcoal">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <span className="text-primary text-sm tracking-[0.3em] uppercase mb-6 block">
            Get In Touch
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
            Let's Find Your <span className="text-primary">Perfect Property</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            Whether you're buying, selling, or exploring investment opportunities, 
            our team is ready to guide you every step of the way.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            
            {/* Contact Information - Left Side */}
            <div className="lg:col-span-2 space-y-10">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
                  Contact Information
                </h2>
                <p className="text-muted-foreground">
                  Reach out through any of the channels below or fill out the form 
                  for a personalized consultation.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-5">
                  <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium mb-2">Office Address</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {CONTACT_INFO.addressLines.map((line, index) => (
                        <span key={line}>
                          {line}
                          {index < CONTACT_INFO.addressLines.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-5">
                  <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium mb-2">Phone</h3>
                    <a 
                      href={CONTACT_INFO.phoneHref}
                      className="text-muted-foreground text-sm hover:text-primary transition-colors block"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-5">
                  <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium mb-2">Email</h3>
                    <a 
                      href={CONTACT_INFO.emailPrimaryHref}
                      className="text-muted-foreground text-sm hover:text-primary transition-colors block"
                    >
                      {CONTACT_INFO.emailPrimary}
                    </a>
                    <a 
                      href={CONTACT_INFO.emailInquiriesHref}
                      className="text-muted-foreground text-sm hover:text-primary transition-colors block"
                    >
                      {CONTACT_INFO.emailInquiries}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-5">
                  <div className="w-12 h-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Clock className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="text-foreground font-medium mb-2">Office Hours</h3>
                    <p className="text-muted-foreground text-sm">
                      {CONTACT_INFO.officeHours.map((line, index) => (
                        <span key={line}>
                          {line}
                          {index < CONTACT_INFO.officeHours.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="rounded-lg overflow-hidden border border-border h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26430.393553120906!2d-118.43209796322542!3d34.08066849423255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1699999999999!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div>
            </div>

            {/* Contact Form - Right Side */}
            <div className="lg:col-span-3">
              <div className="bg-card border border-border rounded-lg p-8 md:p-10">
                <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Complete the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="text-sm text-foreground mb-2 block font-medium">
                      Full Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-secondary border border-border rounded-lg px-4 py-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                      maxLength={100}
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm text-foreground mb-2 block font-medium">
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-secondary border border-border rounded-lg px-4 py-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                        maxLength={255}
                      />
                    </div>
                    <div>
                      <label className="text-sm text-foreground mb-2 block font-medium">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-secondary border border-border rounded-lg px-4 py-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                        maxLength={20}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-sm text-foreground mb-2 block font-medium">
                      Your Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      rows={6}
                      placeholder="Tell us about your ideal residence, timeline, and preferences for a private showing..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-secondary border border-border rounded-lg px-4 py-4 text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none"
                      maxLength={1000}
                    />
                    <p className="text-muted-foreground text-xs mt-2">
                      {formData.message.length}/1000 characters
                    </p>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting}
                    className="w-full gap-3 py-4 text-base"
                  >
                    {isSubmitting ? (
                      <span>{CTA_LABELS.sendingMessage}</span>
                    ) : (
                      <>
                        <span>{CTA_LABELS.sendMessage}</span>
                        <Send size={18} />
                      </>
                    )}
                  </Button>

                  <p className="text-muted-foreground text-xs text-center">
                    By submitting this form, you agree to our privacy policy. 
                    We respect your privacy and will never share your information.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strong CTA Section */}
      <section className="section-padding bg-charcoal">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-primary text-xs tracking-[0.3em] uppercase mb-4 block font-medium">
            Ready to Get Started?
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Your Dream Property Awaits
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Schedule a private consultation with a LuxeEstate advisor and take the first step toward exceptional living.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="primary" className="gap-2">
              <a href={CONTACT_INFO.phoneHref}>
                <Phone size={18} />
                {CTA_LABELS.callNow}: {CONTACT_INFO.phone}
              </a>
            </Button>
            <Button asChild variant="secondary" className="gap-2">
              <a href={CONTACT_INFO.emailPrimaryHref}>
                {CTA_LABELS.emailUs}
                <ArrowRight size={18} />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </SiteFrame>
  );
};

export default Contact;
