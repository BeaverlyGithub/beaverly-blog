import SEOHead from "@/components/seo-head";

export default function About() {
  return (
    <>
      <SEOHead
        title="About Beaverly | Beaverly Blog"
        description="Learn about Beaverly Innovative Systems and our mission to revolutionize wealth building through intelligent AI automation."
        url="https://blog.beaverlyai.com/about"
      />
      
      <section className="min-h-screen py-16 px-4 sm:px-6 lg:px-8" data-testid="about-page">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text" data-testid="about-title">
              About Beaverly
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed">
              Revolutionizing wealth building through intelligent AI automation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16 animate-slide-up">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-white" data-testid="mission-title">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                At Beaverly Innovative Systems, we believe that everyone deserves access to sophisticated financial technology. Our mission is to democratize AI-powered investing through our ecosystem of intelligent tools.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We're not just building software – we're crafting the future of personal wealth management, where artificial intelligence works tirelessly to optimize your financial outcomes.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-6 text-white" data-testid="vision-title">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                We envision a world where advanced AI technology bridges the gap between institutional-grade trading capabilities and individual investors, creating unprecedented opportunities for wealth creation.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Through continuous innovation and unwavering commitment to user success, we're building the infrastructure for the next generation of intelligent investing.
              </p>
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center text-white" data-testid="ecosystem-title">
              Our Ecosystem
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center" data-testid="chilla-product">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-xl">C</span>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">Chilla™</h3>
                <p className="text-gray-400 text-sm">AI trading assistant that monitors markets 24/7 and executes trades based on sophisticated algorithms.</p>
              </div>
              <div className="text-center" data-testid="paca-product">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-xl">P</span>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">Paca™</h3>
                <p className="text-gray-400 text-sm">Intelligent portfolio management tool that optimizes asset allocation and risk management strategies.</p>
              </div>
              <div className="text-center" data-testid="mii-product">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-black font-bold text-xl">M</span>
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">M-II™</h3>
                <p className="text-gray-400 text-sm">Market Intelligence Interface providing deep insights and analytics for informed decision-making.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold mb-6 text-white" data-testid="values-title">Our Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-800 rounded-lg p-6 text-center" data-testid="innovation-value">
                <h3 className="font-semibold text-white mb-2">Innovation</h3>
                <p className="text-gray-400 text-sm">Pushing boundaries in AI and fintech</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 text-center" data-testid="transparency-value">
                <h3 className="font-semibold text-white mb-2">Transparency</h3>
                <p className="text-gray-400 text-sm">Clear, honest communication</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 text-center" data-testid="security-value">
                <h3 className="font-semibold text-white mb-2">Security</h3>
                <p className="text-gray-400 text-sm">Protecting your financial future</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6 text-center" data-testid="excellence-value">
                <h3 className="font-semibold text-white mb-2">Excellence</h3>
                <p className="text-gray-400 text-sm">Delivering exceptional results</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
