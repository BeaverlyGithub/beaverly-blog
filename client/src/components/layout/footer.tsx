import { Link } from "wouter";
import { SiX, SiLinkedin, SiFacebook, SiInstagram } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 mt-16" data-testid="footer">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-black font-bold text-sm">B</span>
              </div>
              <span className="text-xl font-semibold">
                Beaverly<span className="text-sm">®</span>
              </span>
            </div>
            <p className="text-gray-400">Chill — Chilla is quietly working for you.</p>
          </div>

          {/* Ecosystem */}
          <div>
            <h4 className="font-semibold mb-4" data-testid="ecosystem-title">Ecosystem</h4>
            <div className="space-y-2">
              <a 
                href="https://beaverlyai.com/chilla" 
                className="block text-gray-400 hover:text-white transition-colors"
                data-testid="footer-chilla"
              >
                Chilla
              </a>
              <a 
                href="https://beaverlyai.com/paca" 
                className="block text-gray-400 hover:text-white transition-colors"
                data-testid="footer-paca"
              >
                Paca
              </a>
              <a 
                href="https://beaverlyai.com/m-ii" 
                className="block text-gray-400 hover:text-white transition-colors"
                data-testid="footer-mii"
              >
                M-II
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4" data-testid="product-title">Product</h4>
            <div className="space-y-2">
              <a 
                href="https://beaverlyai.com#how-it-works" 
                className="block text-gray-400 hover:text-white transition-colors"
                data-testid="footer-how-to-chill"
              >
                How to Chill
              </a>
              <a 
                href="https://beaverlyai.com#pricing" 
                className="block text-gray-400 hover:text-white transition-colors"
                data-testid="footer-pricing"
              >
                Pricing
              </a>
              <Link 
                href="/contact" 
                className="block text-gray-400 hover:text-white transition-colors"
                data-testid="footer-contact"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4" data-testid="company-title">Company</h4>
            <div className="space-y-2">
              <Link 
                href="/about" 
                className="block text-gray-400 hover:text-white transition-colors"
                data-testid="footer-about"
              >
                About
              </Link>
              <a 
                href="https://beaverlyai.com/privacy" 
                className="block text-gray-400 hover:text-white transition-colors"
                data-testid="footer-privacy"
              >
                Privacy Policy
              </a>
              <a 
                href="https://beaverlyai.com/terms" 
                className="block text-gray-400 hover:text-white transition-colors"
                data-testid="footer-terms"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8" data-testid="social-links">
          <a 
            href="https://x.com/beaverlyai" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="X"
            className="text-gray-400 hover:text-white transition-colors"
            data-testid="footer-x"
          >
            <SiX className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com/company/beaverly" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-white transition-colors"
            data-testid="footer-linkedin"
          >
            <SiLinkedin className="w-6 h-6" />
          </a>
          <a 
            href="https://facebook.com/profile.php?id=61569968914920" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-gray-400 hover:text-white transition-colors"
            data-testid="footer-facebook"
          >
            <SiFacebook className="w-6 h-6" />
          </a>
          <a 
            href="https://instagram.com/beaverlyai" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-gray-400 hover:text-white transition-colors"
            data-testid="footer-instagram"
          >
            <SiInstagram className="w-6 h-6" />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center space-y-4">
          <p className="italic text-gray-400">Not just AI fintech. Chilled tech.</p>
          <p className="text-gray-400">
            &copy; 2024-2025 Beaverly<span className="text-sm">®</span> All rights reserved.
          </p>
          <p className="text-xs text-gray-500">
            Chilla™, M-II™ and Paca™ are trademarks of Beaverly<span className="text-sm">®</span> Innovative Systems Ltd.
          </p>
          <p className="text-xs text-gray-500 leading-relaxed max-w-4xl mx-auto">
            <strong>Disclaimer:</strong> Beaverly<span className="text-sm">®</span> is an AI financial technology platform and does not operate as a licensed financial advisor, broker-dealer, or banking institution. 
            We do not offer personalized investment advice, solicit securities, or guarantee any financial outcomes. 
            All trading activities are executed at the sole discretion of the user via third-party platforms. 
            Use of our automation tools, including Chilla™, involves inherent market risk, including but not limited to the loss of invested capital. 
            Past performance is not indicative of future results. Beaverly<span className="text-sm">®</span> does not hold, manage, or custody user funds at any time. 
            Information provided is for general educational purposes only and should not be interpreted as a recommendation. 
            Users are solely responsible for their financial decisions and are advised to consult licensed professionals where necessary. 
            Beaverly Innovative Systems Ltd disclaims all liability for losses or damages arising from trading activity, third-party platform failures, 
            latency, data inaccuracies, or service interruptions. Use of this service constitutes your acceptance of our Terms of Service and Privacy Policy, 
            and confirms that you are over 18 and understand the financial risks involved. Beaverly<span className="text-sm">®</span> operates under the jurisdiction of the Federal Republic of Nigeria, 
            and all disputes shall be resolved exclusively in the courts of Lagos State, Nigeria.
          </p>
        </div>
      </div>
    </footer>
  );
}
