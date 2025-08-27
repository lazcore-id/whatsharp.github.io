import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="bg-gradient-subtle py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge variant="secondary" className="w-fit">
              🚀 Now supporting WhatsApp Business API 2.0
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Connect Your Business to
                <span className="block bg-gradient-hero bg-clip-text text-transparent">
                  WhatsApp API
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Send messages, automate conversations, and build powerful WhatsApp integrations 
                with our reliable API gateway. Scale your customer communication effortlessly.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Start Free Trial
              </Button>
              <Button variant="outline-hero" size="lg" className="text-lg px-8 py-6">
                View Documentation
              </Button>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>No setup fees</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>99.9% uptime</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>24/7 support</span>
              </div>
            </div>
          </div>
          
          <div className="lg:order-1">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="WhatsApp API Gateway Integration"
                className="w-full h-auto rounded-2xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-hero opacity-10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;