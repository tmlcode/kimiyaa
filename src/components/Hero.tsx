import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated mesh background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40"></div>
      
      {/* Animated orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-40 right-20 w-80 h-80 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 right-1/3 w-64 h-64 bg-tertiary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center animate-fade-in">
          <div className="mb-8 inline-flex items-center gap-2">
            <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/20 to-tertiary/20 border-2 border-primary/30 backdrop-blur-sm">
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm font-bold text-gradient">AI-Powered 3D Animation Revolution</span>
              <Zap className="w-5 h-5 text-accent animate-pulse" />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-8 leading-tight">
            <span className="text-gradient">Transform</span>
            <br />
            <span className="text-foreground">Your Creative</span>
            <br />
            <span className="text-gradient-secondary">Vision to 3D</span>
          </h1>
          
          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-12 max-w-4xl mx-auto font-medium leading-relaxed">
            From <span className="text-primary font-bold">Sketch to Shape</span> to <span className="text-secondary font-bold">3D Masterpiece</span>. 
            Start with AI-powered generation, then refine in our professional digital content creation software. 
            Complete <span className="text-accent font-bold">animation workflows</span> - all in one place.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary via-tertiary to-primary bg-[length:200%_100%] hover:bg-right text-white px-12 py-8 text-xl font-bold rounded-3xl shadow-2xl transition-all duration-500 hover:scale-110 glow-multi animate-pulse-glow group"
            >
              <Sparkles className="mr-2 h-6 w-6 group-hover:rotate-180 transition-transform duration-500" />
              Start Creating Now
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="border-3 border-secondary/60 bg-secondary/10 text-foreground hover:bg-secondary/20 hover:border-secondary px-12 py-8 text-xl font-bold rounded-3xl backdrop-blur-sm hover:scale-105 transition-all"
            >
              Watch Demo
            </Button>
          </div>

          {/* 3D Model Preview with enhanced design */}
          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none"></div>
            <div className="rounded-3xl border-2 border-primary/30 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-md p-10 animate-scale-in shadow-2xl">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-muted/40 to-background/60 border-2 border-primary/20 flex items-center justify-center relative overflow-hidden">
                {/* Animated background grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(280_90%_65%/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(280_90%_65%/0.1)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
                
                <div className="text-center relative z-10">
                  <div className="w-80 h-80 mx-auto relative">
                    {/* Outer ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-primary/30 border-dashed animate-spin" style={{ animationDuration: '20s' }}></div>
                    
                    {/* Middle ring */}
                    <div className="absolute inset-8 rounded-full border-4 border-secondary/30 border-dashed animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
                    
                    {/* Inner circle */}
                    <div className="absolute inset-16 rounded-full bg-gradient-to-br from-primary/20 via-tertiary/20 to-secondary/20 flex items-center justify-center backdrop-blur-sm glow-multi">
                      <div className="text-8xl font-black text-gradient">3D</div>
                    </div>
                    
                    {/* Floating particles */}
                    <div className="absolute top-10 left-10 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
                    <div className="absolute top-20 right-16 w-3 h-3 bg-secondary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute bottom-16 left-20 w-5 h-5 bg-accent rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-10 right-10 w-3 h-3 bg-tertiary rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
