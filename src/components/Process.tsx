import { Upload, Wand2, Sparkles } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      icon: Upload,
      title: "Upload Your Sketch",
      description: "Drop your 2D sketch - hand-drawn or digital. Any format, any style. Our AI understands them all.",
      color: "from-primary to-tertiary",
      glow: "glow-primary",
    },
    {
      number: "02",
      icon: Wand2,
      title: "AI Magic Happens",
      description: "Watch in real-time as our AI transforms your sketch into a stunning 3D model ready for animation.",
      color: "from-secondary to-success",
      glow: "glow-accent",
    },
    {
      number: "03",
      icon: Sparkles,
      title: "Refine & Animate",
      description: "Get a fully animate-able 3D model. Refine and animate using Kimiyaa DCC (Digital Content Creation) software.",
      color: "from-accent to-primary",
      glow: "glow-secondary",
    },
  ];

  return (
    <section id="product" className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-primary/10 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-full h-96 bg-gradient-to-t from-secondary/10 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 rounded-full bg-gradient-to-r from-secondary/20 to-success/20 border-2 border-secondary/40 text-secondary font-bold text-lg">
              HOW IT WORKS
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            Two Powerful Products,{" "}
            <span className="text-gradient">One Seamless Workflow</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">
            Kimiyaa Sketch to Shape + Kimiyaa DCC. From concept to completion.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative group animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`h-full p-10 rounded-3xl bg-gradient-to-br from-card/90 to-card/60 border-2 border-primary/20 hover:border-primary/60 transition-all duration-500 hover:scale-105 backdrop-blur-sm ${step.glow} shadow-xl`}>
                  <div className="text-8xl font-black text-transparent bg-gradient-to-br from-primary/20 to-tertiary/20 bg-clip-text mb-6">
                    {step.number}
                  </div>
                  
                  <div className={`mb-8 inline-flex p-6 rounded-2xl bg-gradient-to-br ${step.color} group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="w-12 h-12 text-white" />
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4 text-foreground">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Animated connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 z-20">
                    <div className="w-8 h-1 bg-gradient-to-r from-primary via-tertiary to-secondary animate-pulse"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center animate-fade-in bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl p-12 border-2 border-accent/30 backdrop-blur-sm max-w-4xl mx-auto">
          <h3 className="text-4xl font-black mb-4">
            <span className="text-gradient">Voilà!</span> Production-Ready 3D Models
          </h3>
          <p className="text-xl text-muted-foreground font-medium">
            What used to take weeks of intensive work now happens in <span className="text-accent font-bold">minutes</span>. 
            Save time, money, and unleash your creativity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Process;
