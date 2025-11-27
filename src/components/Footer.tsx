import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Image } from "@/components/ui/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/faqs", label: "FAQs" },
    { href: "/reach-us", label: "Reach Us" },
  ];

  const verticals = [
    "Learners Global School",
    "Learners Global PU College",
    "Learners Digital",
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />,
      text: "+91 9916397939",
    },
    {
      icon: <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />,
      text: "info@learnersglobal.com",
      href: "mailto:info@learnersglobal.com",
    },
    {
      icon: <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />,
      text: "Mysuru, Karnataka, India",
    },
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/L.svg"
                alt="Learners Global Logo"
                className="h-10 w-auto"
                width={150}
              />
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed">
              Nurturing minds, shaping futures through excellence in education and holistic development.
            </p>

            {/* Social Media Icons - Add your social media links */}
            <div className="flex space-x-4 pt-2">
              {[
                { name: 'Facebook', icon: 'facebook' },
                { name: 'Twitter', icon: 'twitter' },
                { name: 'Instagram', icon: 'instagram' },
                { name: 'LinkedIn', icon: 'linkedin' },
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="text-gray-500 hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <span className="sr-only">{social.name}</span>
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-primary/10">
                    <span className="text-lg">
                      {/* You can replace this with actual social media icons */}
                      {social.icon === 'facebook' && 'f'}
                      {social.icon === 'twitter' && '𝕏'}
                      {social.icon === 'instagram' && '📸'}
                      {social.icon === 'linkedin' && 'in'}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-4 uppercase tracking-wider">
              Quick Links
            </h3>
            <nav className="space-y-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-gray-600 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Our Verticals */}
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-4 uppercase tracking-wider">
              Our Verticals
            </h3>
            <div className="space-y-3">
              {verticals.map((vertical) => (
                <p
                  key={vertical}
                  className="text-sm text-gray-600"
                >
                  {vertical}
                </p>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold text-gray-900 mb-4 uppercase tracking-wider">
              Contact Us
            </h3>
            <div className="space-y-3">
              {contactInfo.map((item, index) => {
                const content = (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="mt-0.5">{item.icon}</span>
                    <span className="text-sm text-gray-600">{item.text}</span>
                  </div>
                );

                return item.href ? (
                  <a
                    key={index}
                    href={item.href}
                    className="block hover:text-primary transition-colors"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={index} className="block">
                    {content}
                  </div>
                );
              })}
            </div>

            {/* Newsletter Signup - Optional */}
            {/* <div className="mt-6">
              <h4 className="text-sm font-medium text-gray-900 mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 text-sm border border-gray-300 rounded-l-md focus:ring-1 focus:ring-primary focus:border-primary"
                />
                <button className="bg-primary text-white px-4 py-2 text-sm font-medium rounded-r-md hover:bg-primary/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-gray-500 text-center md:text-left">
              © {currentYear} Learners Global School & PU College. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-xs text-gray-500 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs text-gray-500 hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-xs text-gray-500 hover:text-primary transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


