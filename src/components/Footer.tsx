const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">WA</span>
              </div>
              <span className="text-lg font-bold">WhatsApp Gateway</span>
            </div>
            <p className="text-background/70 max-w-xs">
              The most reliable WhatsApp API gateway for businesses of all sizes.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Product</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-background transition-colors">API Status</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Changelog</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Developers</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-background transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-background transition-colors">SDKs</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Examples</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <ul className="space-y-2 text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Status Page</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/70 text-sm">
            © 2024 WhatsApp Gateway. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-background/70 mt-4 md:mt-0">
            <a href="#" className="hover:text-background transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-background transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-background transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;