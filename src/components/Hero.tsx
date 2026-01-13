import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
// If you installed the ESM package, import it once anywhere in your app:
import "@google/model-viewer";

const PHASE_MS = 4000;     // 4s solid, 4s wireframe (50/50). Adjust as you like.
const ROT_SPEED = Math.PI / PHASE_MS;
const VIEW_MARGIN = 1.12; // 12% farther away; tweak 1.05–1.2 to taste // radians per ms -> a half-turn every phase

const Hero = () => {
  const solidRef = useRef<any>(null);
  const wireRef  = useRef<any>(null);
  const rafRef   = useRef<number | null>(null);

  const [showWire, setShowWire] = useState(false);

  useEffect(() => {
    let theta = 0;                   // continuous camera angle
    let last = performance.now();
    let phaseStart = last;

    const step = (t: number) => {
      const dt = t - last;
      last = t;

      // advance rotation continuously
      theta += ROT_SPEED * dt;       // rad
      const viewerSolid = solidRef.current;
      const viewerWire  = wireRef.current;

      // read phi/radius from one viewer (defaults if missing)
      const base = viewerSolid?.getCameraOrbit?.() ?? { theta: 0, phi: Math.PI / 2, radius: 2 };
      const radiusSafe = base.radius * VIEW_MARGIN;  // <-- extra margin
      const orbit = `${theta}rad ${base.phi}rad ${radiusSafe}m`;


      // update both, so whichever is visible stays in sync
      if (viewerSolid) viewerSolid.cameraOrbit = orbit;
      if (viewerWire)  viewerWire.cameraOrbit  = orbit;

      // handle 50/50 phase flip (no snapping)
      if (t - phaseStart >= PHASE_MS) {
        setShowWire(prev => !prev);
        phaseStart = t;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);
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


          {/* 3D Model Preview with enhanced design */}
          <div className="mt-20 relative">
            {/* Keep your top gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10 pointer-events-none"></div>

            <div className="rounded-3xl border-2 border-primary/30 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-md p-10 animate-scale-in shadow-2xl">
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-muted/40 to-background/60 border-2 border-primary/20 flex items-center justify-center relative overflow-hidden">

                {/* Your animated background grid (stays behind) */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(280_90%_65%/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(280_90%_65%/0.1)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none"></div>

                {/* When wireframe is showing, place a FULL opaque cover above everything behind (z-20) */}
                {showWire && (
                  <div
                    className="absolute inset-0 z-20"
                    // Force fully opaque background regardless of theme alpha utilities:
                    style={{ background: "hsl(var(--background))" }}
                  />
                )}

                {/* Safe inset so content never touches the edges */}
                <div className="absolute inset-0 z-30 p-4 sm:p-6 md:p-8">
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    {/* Solid model */}
                    <model-viewer
                      ref={solidRef}
                      src="/torus_knot_grey.glb"
                      camera-controls
                      shadow-intensity="0.6"
                      exposure="0.9"
                      environment-image="neutral"
                      interaction-prompt="none"
                      ar={false}
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        transition: "opacity 400ms ease",
                        opacity: showWire ? 0 : 1,
                        // optional: tiny scale cushion if your mesh is super tight
                        // transform: "scale(0.98)",
                        // transformOrigin: "center",
                      }}
                    />

                    {/* Wireframe */}
                    <model-viewer
                      ref={wireRef}
                      src="/torus_knot_wire_orange.glb"
                      camera-controls
                      shadow-intensity="0"
                      exposure="1.0"
                      environment-image="neutral"
                      interaction-prompt="none"
                      ar={false}
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        transition: "opacity 400ms ease",
                        opacity: showWire ? 1 : 0,
                        // transform: "scale(0.98)",
                        // transformOrigin: "center",
                      }}
                    />
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
