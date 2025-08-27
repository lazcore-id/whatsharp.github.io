import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Features = () => {
  const features = [
    {
      title: "Send Messages",
      description: "Send text, media, and template messages to your customers instantly",
      icon: "💬",
      badge: "Core"
    },
    {
      title: "Webhook Integration", 
      description: "Receive real-time notifications for message delivery and status updates",
      icon: "🔗",
      badge: "Real-time"
    },
    {
      title: "Contact Management",
      description: "Manage your contact lists and organize customer conversations",
      icon: "👥",
      badge: "Management"
    },
    {
      title: "Media Handling",
      description: "Send and receive images, documents, audio, and video files",
      icon: "📎",
      badge: "Media"
    },
    {
      title: "Template Messages",
      description: "Use pre-approved templates for notifications and marketing",
      icon: "📝",
      badge: "Templates"
    },
    {
      title: "Analytics & Insights",
      description: "Track message delivery, read rates, and engagement metrics",
      icon: "📊",
      badge: "Analytics"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto">
            Features
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Everything you need to build on WhatsApp
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive API gives you all the tools to create powerful WhatsApp experiences
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border">
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="text-4xl">{feature.icon}</div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;