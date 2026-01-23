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
                {/* Download CTA: uses the same anchor behavior as the Header "Contact" link */}
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-primary via-tertiary to-primary bg-[length:200%_100%] hover:bg-right text-white px-12 py-8 text-xl font-bold rounded-3xl shadow-2xl transition-all duration-500 hover:scale-110 glow-multi animate-pulse-glow group"
                >
                  <a href="#contact">
                    <Sparkles className="mr-2 h-6 w-6 group-hover:rotate-180 transition-transform duration-500" />
                    Download
                    <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                  </a>
                </Button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
