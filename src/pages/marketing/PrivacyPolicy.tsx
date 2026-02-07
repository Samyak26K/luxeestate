import SiteFrame from "@/components/layout/SiteFrame";
import LuxeSectionHeader from "@/components/marketing/LuxeSectionHeader";
import { CONTACT_INFO, LEGAL_CONTACTS } from "@/lib/constants/siteContent";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "Personal information you provide directly, such as your name, email address, phone number, and mailing address when you contact us, schedule a viewing, or submit an inquiry.",
        "Property preferences and search history when you browse our listings.",
        "Technical information including IP address, browser type, device information, and cookies when you visit our website.",
        "Communication records when you interact with our team via email, phone, or our contact forms.",
      ],
    },
    {
      title: "How We Use Your Information",
      content: [
        "To respond to your inquiries and provide personalized property recommendations.",
        "To schedule property viewings and facilitate transactions.",
        "To send you relevant property listings, market updates, and promotional materials (with your consent).",
        "To improve our website functionality and user experience.",
        "To comply with legal obligations and protect our legitimate business interests.",
      ],
    },
    {
      title: "Information Sharing",
      content: [
        "We do not sell, trade, or rent your personal information to third parties.",
        "We may share information with trusted service providers who assist in our operations, such as email delivery services and CRM platforms.",
        "We may disclose information when required by law or to protect our rights and safety.",
        "In the event of a business transaction (merger, acquisition), your information may be transferred as part of business assets.",
      ],
    },
    {
      title: "Data Security",
      content: [
        "We implement industry-standard security measures to protect your personal information.",
        "All data transmission is encrypted using SSL/TLS technology.",
        "Access to personal information is restricted to authorized personnel only.",
        "We regularly review and update our security practices to address emerging threats.",
      ],
    },
    {
      title: "Your Rights",
      content: [
        "Access: You may request a copy of the personal information we hold about you.",
        "Correction: You may request correction of inaccurate or incomplete information.",
        "Deletion: You may request deletion of your personal information, subject to legal requirements.",
        "Opt-out: You may unsubscribe from marketing communications at any time.",
      ],
    },
    {
      title: "Cookies & Tracking",
      content: [
        "We use cookies to enhance your browsing experience and analyze website traffic.",
        "Essential cookies are necessary for website functionality and cannot be disabled.",
        "Analytics cookies help us understand how visitors interact with our website.",
        "You can manage cookie preferences through your browser settings.",
      ],
    },
    {
      title: "Contact Us",
      content: [
        "If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at:",
        `Email: ${LEGAL_CONTACTS.privacyEmail}`,
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
            title="Privacy Policy"
            description="Your privacy is important to us. This policy explains how we collect, use, and protect your personal information."
          />
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <p className="text-muted-foreground mb-12">
            <span className="text-foreground font-medium">Last Updated:</span> February 7, 2026
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
            This Privacy Policy is subject to change. We encourage you to review this page periodically 
            for the latest information on our privacy practices. Your continued use of our services 
            constitutes acceptance of any updates to this policy.
          </p>
        </div>
      </section>
    </SiteFrame>
  );
};

export default PrivacyPolicy;
