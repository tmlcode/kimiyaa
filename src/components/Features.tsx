import { Clock, DollarSign, Sparkles, Zap, Award, Workflow, Unlock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: "Lightning Fast",
      description: "Reduces time drastically. Transform weeks of work into moments with instant 3D generation.",
      color: "from-primary to-tertiary",
      border: "border-primary/40",
    },
    {
      icon: DollarSign,
      title: "90% Cost Savings",
      description: "Slash production costs dramatically while maintaining premium production-quality results.",
      color: "from-secondary to-success",
      border: "border-secondary/40",
    },
    {
      icon: Sparkles,
      title: "Production Quality",
      description: "Production-ready models with professional topology. Ready for any pipeline.",
      color: "from-tertiary to-secondary",
      border: "border-tertiary/40",
    },
    {
      icon: Award,
      title: "Industry Standard",
      description: "Export to any format. Compatible with all major 3D software and pipelines.",
      color: "from-tertiary to-primary",
      border: "border-tertiary/40",
    },
    {
      icon: Zap,
      title: "Runs Offline",
      description: "Work anywhere, anytime. No internet connection required for full functionality.",
      color: "from-success to-secondary",
      border: "border-success/40",
    },
    {
      icon: Sparkles,
      title: "Always Learning",
      description: "Our AI constantly improves, delivering better results with every update.",
      color: "from-secondary to-accent",
      border: "border-secondary/40",
    },
    {
      icon: Workflow,
      title: "Precisely Matched Industry-Standard Workflow",
      description: "Seamlessly integrates with the workflows your teams already know—no retraining required.",
      color: "from-primary to-accent",
      border: "border-primary/40",
    },
    {
      icon: Unlock,
      title: "Secure Storage & Access",
      description: "Enterprise-grade security with cloud storage and seamless collaboration across your team.",
      color: "from-accent to-tertiary",
      border: "border-accent/40",
    },
  ];

  return (
    <section id="features" className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-tertiary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 border-2 border-accent/40 text-accent font-bold text-lg">
              POWERFUL FEATURES
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            Everything You Need to{" "}
            <span className="text-gradient">Create Magic</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto font-medium">
            Professional 3D animation has never been this <span className="text-accent font-bold">accessible</span>, 
            this <span className="text-secondary font-bold">fast</span>, 
            or this <span className="text-primary font-bold">powerful</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className={`h-full p-8 rounded-3xl bg-gradient-to-br from-card/90 to-card/50 border-2 ${feature.border} hover:scale-105 transition-all duration-500 backdrop-blur-sm shadow-lg hover:shadow-2xl`}>
                  <div className={`mb-6 inline-flex p-5 rounded-2xl bg-gradient-to-br ${feature.color} group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center animate-fade-in bg-gradient-to-r from-primary/10 via-tertiary/10 to-accent/10 rounded-3xl p-12 border-2 border-primary/30 backdrop-blur-sm max-w-5xl mx-auto">
          <h3 className="text-4xl font-black mb-4">
            <span className="text-gradient">Democratizing</span> Professional Content Creation
          </h3>
          <p className="text-xl text-muted-foreground font-medium max-w-3xl mx-auto">
            From Kimiyaa Sketch to Shape for rapid AI-powered modeling, to Kimiyaa DCC for complete 
            professional workflows—creative power is now in everyone's hands.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
