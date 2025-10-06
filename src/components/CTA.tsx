import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Sparkles, Zap } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 via-tertiary/5 to-secondary/5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="p-12 md:p-16 lg:p-20 rounded-[3rem] bg-gradient-to-br from-card/95 to-card/70 border-2 border-primary/30 backdrop-blur-xl animate-scale-in shadow-2xl relative overflow-hidden">
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-tertiary/10 opacity-50"></div>
            
            {/* Floating decorative elements */}
            <div className="absolute top-10 left-10 w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-tertiary opacity-20 blur-2xl animate-float"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 rounded-3xl bg-gradient-to-br from-secondary to-accent opacity-20 blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
            
            <div className="text-center relative z-10">
              <div className="inline-block mb-8">
                <div className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 border-2 border-accent/40">
                  <Zap className="w-6 h-6 text-accent animate-pulse" />
                  <span className="text-accent font-bold text-xl">LIMITED TIME OFFER</span>
                  <Sparkles className="w-6 h-6 text-primary animate-pulse" />
                </div>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-8 leading-tight">
                Ready to <span className="text-gradient">Revolutionize</span>
                <br />
                Your 3D Workflow?
              </h2>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
                Join <span className="text-primary font-bold">10,000+ creators</span> who are already using Kimiyaa.ai to transform their animation pipeline. 
                Start creating <span className="text-secondary font-bold">production-quality 3D</span> today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary via-tertiary to-primary bg-[length:200%_100%] hover:bg-right text-white px-14 py-8 text-2xl font-black rounded-3xl shadow-2xl transition-all duration-500 hover:scale-110 glow-multi animate-pulse-glow group"
                >
                  <Sparkles className="mr-3 h-7 w-7 group-hover:rotate-180 transition-transform duration-500" />
                  Get Started Free
                  <ArrowRight className="ml-3 h-7 w-7 group-hover:translate-x-2 transition-transform" />
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-3 border-secondary/60 bg-secondary/10 text-foreground hover:bg-secondary/20 hover:border-secondary px-14 py-8 text-2xl font-black rounded-3xl backdrop-blur-sm hover:scale-105 transition-all"
                >
                  <Mail className="mr-3 h-7 w-7" />
                  Talk to Sales
                </Button>
              </div>

              <div className="pt-10 border-t-2 border-primary/20">
                <p className="text-sm text-muted-foreground font-semibold mb-4">
                  Trusted by leading animation studios worldwide
                </p>
                <div className="flex flex-wrap justify-center gap-12 items-center opacity-60">
                  <span className="text-xl font-semibold">Xentrix Studios</span>
                  <span className="text-xl font-semibold">VSync Studios</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
