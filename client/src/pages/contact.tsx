import SEOHead from "@/components/seo-head";
import { Mail, Globe } from "lucide-react";
import { SiX, SiLinkedin, SiInstagram } from "react-icons/si";

export default function Contact() {
  return (
    <>
      <SEOHead
        title="Contact Beaverly | Beaverly Blog"
        description="Get in touch with Beaverly Innovative Systems. Ready to revolutionize your investment strategy?"
        url="https://blog.beaverlyai.com/contact"
      />
      
      <section className="min-h-screen py-16 px-4 sm:px-6 lg:px-8" data-testid="contact-page">
        <div className="max-w-2xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text" data-testid="contact-title">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Ready to revolutionize your investment strategy? We'd love to hear from you.
            </p>
          </div>

          <div className="bg-gray-800 rounded-xl p-8 mb-12 animate-slide-up">
            <h2 className="text-2xl font-bold mb-8 text-white" data-testid="contact-info-title">
              Contact Information
            </h2>
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-4" data-testid="email-contact">
                <Mail className="w-6 h-6 text-gray-400" />
                <a 
                  href="mailto:hello@beaverlyai.com" 
                  className="text-white hover:text-gray-300 transition-colors text-lg"
                  data-testid="email-link"
                >
                  hello@beaverlyai.com
                </a>
              </div>
              <div className="flex items-center justify-center space-x-4" data-testid="website-contact">
                <Globe className="w-6 h-6 text-gray-400" />
                <a 
                  href="https://beaverlyai.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors text-lg"
                  data-testid="website-link"
                >
                  beaverlyai.com
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-8 animate-slide-up">
            <h2 className="text-2xl font-bold mb-6 text-white" data-testid="social-title">
              Connect With Us
            </h2>
            <p className="text-gray-400 mb-8">
              Follow our journey and stay updated with the latest insights in AI-powered finance.
            </p>
            <div className="flex justify-center space-x-6" data-testid="social-links">
              <a 
                href="https://x.com/beaverlyai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow us on X"
                data-testid="x-link"
              >
                <SiX className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com/company/beaverly" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow us on LinkedIn"
                data-testid="linkedin-link"
              >
                <SiLinkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://instagram.com/beaverlyai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow us on Instagram"
                data-testid="instagram-link"
              >
                <SiInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
