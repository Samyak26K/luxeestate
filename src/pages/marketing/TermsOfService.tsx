import SiteFrame from "@/components/layout/SiteFrame";
import LuxeSectionHeader from "@/components/marketing/LuxeSectionHeader";
import { CONTACT_INFO, LEGAL_CONTACTS } from "@/lib/constants/siteContent";

const TermsOfService = () => {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: [
        "By accessing and using the LuxeEstate website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.",
        "If you do not agree to these terms, please do not use our services.",
        "We reserve the right to modify these terms at any time. Continued use of our services after changes constitutes acceptance of the updated terms.",
      ],
    },
    {
      title: "Services Description",
      content: [
        "LuxeEstate provides luxury property brokerage services, including property listings, buyer representation, property management, and investment advisory.",
        "Our website serves as an informational platform and does not constitute a binding offer or contract for any property.",
        "Property information, including prices and availability, is subject to change without notice and should be verified directly with our agents.",
      ],
    },
    {
      title: "User Responsibilities",
      content: [
        "You agree to provide accurate and complete information when submitting inquiries or creating an account.",
        "You are responsible for maintaining the confidentiality of your account credentials.",
        "You agree not to use our services for any unlawful purpose or in violation of any applicable regulations.",
        "You shall not attempt to interfere with the proper functioning of our website or services.",
      ],
    },
    {
      title: "Property Listings",
      content: [
        "All property listings are provided for informational purposes only and do not constitute an offer to sell.",
        "While we strive for accuracy, we do not guarantee the completeness or accuracy of listing information, including photographs, descriptions, or pricing.",
        "Square footage, room dimensions, and other measurements are approximate and should be independently verified.",
        "Property availability and pricing are subject to change without notice.",
      ],
    },
    {
      title: "Intellectual Property",
      content: [
        "All content on this website, including text, graphics, logos, images, and software, is the property of LuxeEstate or its licensors.",
        "You may not reproduce, distribute, modify, or create derivative works from our content without prior written consent.",
        "The LuxeEstate name, logo, and branding elements are registered trademarks and may not be used without authorization.",
      ],
    },
    {
      title: "Limitation of Liability",
      content: [
        "LuxeEstate and its affiliates shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.",
        "We do not guarantee uninterrupted or error-free access to our website.",
        "Our total liability for any claims shall not exceed the fees paid by you for our services, if any.",
        "Some jurisdictions do not allow limitation of liability, so these limitations may not apply to you.",
      ],
    },
    {
      title: "Dispute Resolution",
      content: [
        "Any disputes arising from these terms or your use of our services shall be governed by the laws of the State of California.",
        "You agree to first attempt to resolve any disputes through good-faith negotiation.",
        "If negotiation fails, disputes shall be resolved through binding arbitration in Los Angeles County, California.",
        "You waive any right to participate in class action lawsuits against LuxeEstate.",
      ],
    },
    {
      title: "Third-Party Links",
      content: [
        "Our website may contain links to third-party websites for your convenience.",
        "We do not endorse or assume responsibility for the content, privacy policies, or practices of third-party sites.",
        "Accessing third-party links is at your own risk, and you should review their terms before use.",
      ],
    },
    {
      title: "Termination",
      content: [
        "We reserve the right to suspend or terminate your access to our services at our sole discretion, without notice, for conduct that violates these terms.",
        "Upon termination, your right to use our services ceases immediately.",
        "Provisions of these terms that by their nature should survive termination shall remain in effect.",
      ],
    },
    {
      title: "Contact Information",
      content: [
        "For questions regarding these Terms of Service, please contact us:",
        `Email: ${LEGAL_CONTACTS.legalEmail}`,
        `Phone: ${CONTACT_INFO.phone}`,
        `Address: ${CONTACT_INFO.addressLines.slice(0, 2).join(", ")}`,
      ],
    },
  ];

  return (
    <SiteFrame>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-charcoal">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <LuxeSectionHeader
            subtitle="Legal"
            title="Terms of Service"
            description="Please read these terms carefully before using our website and services."
          />
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <p className="text-muted-foreground mb-12">
            <span className="text-foreground font-medium">Effective Date:</span> February 7, 2026
          </p>

          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h2 className="font-serif text-2xl text-foreground">
                  {index + 1}. {section.title}
                </h2>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-border hover:border-primary/50 transition-colors duration-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="luxury-divider my-16" />

          {/* Footer Note */}
          <p className="text-muted-foreground text-sm leading-relaxed">
            By using LuxeEstate's website and services, you acknowledge that you have read and understood 
            these Terms of Service and agree to be bound by them. If you have any questions, please contact 
            our legal team before proceeding.
          </p>
        </div>
      </section>
    </SiteFrame>
  );
};

export default TermsOfService;
