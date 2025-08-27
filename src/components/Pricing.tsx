import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small businesses getting started",
      features: [
        "1,000 messages/month",
        "Basic webhook support", 
        "Standard support",
        "API documentation access"
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "outline-hero" as const,
      popular: false
    },
    {
      name: "Growth", 
      price: "$99",
      period: "/month",
      description: "Ideal for growing businesses with higher volume",
      features: [
        "10,000 messages/month",
        "Advanced webhooks",
        "Priority support",
        "Analytics dashboard",
        "Template management"
      ],
      buttonText: "Get Started",
      buttonVariant: "hero" as const,
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations with custom needs",
      features: [
        "Unlimited messages",
        "Custom integrations",
        "Dedicated support",
        "SLA guarantees", 
        "On-premise deployment"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline-hero" as const,
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto">
            Pricing
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Simple, transparent pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your business needs. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-glow' : 'border-border'} hover:shadow-elegant transition-all duration-300`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-hero text-primary-foreground">
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center space-y-4 pb-8">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="space-y-2">
                  <div className="flex items-baseline justify-center space-x-1">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <CardDescription className="text-base">
                    {plan.description}
                  </CardDescription>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button variant={plan.buttonVariant} className="w-full" size="lg">
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;