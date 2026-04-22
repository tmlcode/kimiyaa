import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, Sparkles, Zap } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

const heroVideos = [
  {
    src: "/videos/Bottle_Modeling.mp4",
    title: "Modeling",
    // subtitle: "Clean silhouette blocking and primary form shaping.",
    accent: "from-primary/25 via-tertiary/15 to-transparent",
  },
  {
    src: "/videos/Bottle_Modeling.mp4",
    title: "Modeling",
    // subtitle: "Sharper details, smoother surfaces, and production polish.",
    accent: "from-secondary/25 via-accent/15 to-transparent",
  },
  {
    src: "/videos/Bottle_Modeling.mp4",
    title: "Modeling",
    // subtitle: "From rough concept to showcase-ready cinematic output.",
    accent: "from-accent/25 via-primary/15 to-transparent",
  },
];

export const HeroVideoCarouselSection = () => {
  const [failedSlides, setFailedSlides] = useState<Record<number, boolean>>({});
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  const syncActiveVideo = useCallback((realIndex: number) => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === realIndex) {
        video.currentTime = video.currentTime;
        video.muted = true;
        video.defaultMuted = true;
        video.loop = true;
        video.playsInline = true;

        const playPromise = video.play();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(() => {});
        }
      } else {
        video.pause();
      }
    });
  }, []);

  useEffect(() => {
    syncActiveVideo(activeIndex);
  }, [activeIndex, syncActiveVideo]);

  return (
    <div id="demo" className="relative mt-20 overflow-hidden rounded-[2rem] border border-secondary/20 bg-gradient-to-br from-secondary/14 via-card/95 to-primary/12 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.18)] backdrop-blur-sm md:mt-24 md:p-8">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-12 top-10 h-32 w-32 rounded-full bg-secondary/15 blur-3xl animate-float" />
        <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-primary/10 blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-0 left-1/3 h-28 w-28 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="relative mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-secondary/25 bg-secondary/10 px-4 py-2 text-2xl font-bold uppercase tracking-[0.26em] text-secondary/85 backdrop-blur-sm">
            <PlayCircle className="h-4 w-4 text-2xl md:text-3xl" />
            Real Workflows In Action
          </div>
          {/* <h3 className="text-2xl font-black text-foreground md:text-3xl">
            Real Workflows In Action
          </h3> */}
          {/* <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            A looping showcase of workflow moments, styled like a moving gallery wall.
          </p> */}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          {heroVideos.map((video, index) => (
            <button
              key={video.title}
              type="button"
              aria-label={`Go to ${video.title}`}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                index === activeIndex ? "w-10 bg-secondary shadow-[0_0_20px_rgba(168,85,247,0.45)]" : "w-2.5 bg-foreground/20 hover:bg-foreground/35"
              }`}
            />
          ))}
        </div>
      </div>

      <Swiper
        modules={[Autoplay]}
        className="hero-video-carousel"
        loop
        centeredSlides
        grabCursor
        watchSlidesProgress
        observer
        observeParents
        spaceBetween={24}
        slidesPerView={1.05}
        speed={950}
        autoplay={{
          delay: 3200,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          stopOnLastSlide: false,
        }}
        breakpoints={{
          640: { slidesPerView: 1.08, spaceBetween: 24 },
          1024: { slidesPerView: 1.18, spaceBetween: 28 },
          1280: { slidesPerView: 1.22, spaceBetween: 32 },
        }}
        onSwiper={(swiper) => setActiveIndex(swiper.realIndex)}
        onRealIndexChange={(swiper: SwiperType) => setActiveIndex(swiper.realIndex)}
      >
        {heroVideos.map((video, index) => {
          const isActive = index === activeIndex;

          return (
            <SwiperSlide key={`${video.title}-${index}`}>
              <div
                className={`group relative overflow-hidden rounded-[1.9rem] border border-white/10 bg-black/90 shadow-[0_20px_60px_rgba(0,0,0,0.35)] transition-all duration-700 ${
                  isActive
                    ? "scale-100 opacity-100 ring-1 ring-secondary/25"
                    : "scale-[0.94] opacity-65"
                }`}
              >
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${video.accent}`} />

                <div className="relative border-b border-white/10 bg-black/40 px-5 py-4 backdrop-blur-md md:px-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="mb-1 text-xs font-bold uppercase tracking-[0.28em] text-secondary/85">
                        Video {String(index + 1).padStart(2, "0")}
                      </p>
                      <h4 className="text-lg font-black text-white md:text-xl">
                        {video.title}
                      </h4>
                      <p className="mt-1 text-sm text-white/70 md:text-base">
                        {video.subtitle}
                      </p>
                    </div>

                    <div className={`hidden rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-white/70 backdrop-blur-sm md:block transition-all duration-500 ${isActive ? "bg-white/10" : "bg-white/5"}`}>
                      {isActive ? "Now Playing" : "In Queue"}
                    </div>
                  </div>
                </div>

                {failedSlides[index] ? (
                  <div className="relative flex aspect-video w-full items-center justify-center bg-black px-6 text-center text-sm text-white/70 md:text-base">
                    Add your video at <span className="mx-1 font-semibold text-white">public/videos/Bottle_Modeling.mp4</span> to show this carousel.
                  </div>
                ) : (
                  <div className="relative">
                    <video
                      ref={(el) => {
                        videoRefs.current[index] = el;
                      }}
                      className="block aspect-video w-full bg-black object-cover"
                      src={video.src}
                      loop
                      muted
                      playsInline
                      autoPlay
                      controls
                      preload="metadata"
                      controlsList="nodownload"
                      onLoadedData={() => {
                        if (index === activeIndex) {
                          syncActiveVideo(index);
                        }
                      }}
                      onError={() => {
                        setFailedSlides((prev) => ({ ...prev, [index]: true }));
                      }}
                    />

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-mesh opacity-40"></div>

      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute top-40 right-20 w-80 h-80 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      <div className="absolute bottom-20 left-1/4 w-72 h-72 bg-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="absolute bottom-40 right-1/3 w-64 h-64 bg-tertiary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>

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
            From <span className="text-primary font-bold">Concept</span> to <span className="text-secondary font-bold">Polished 3D Masterpieces</span>— all in one place.
            Shape, animate, and deliver using complete animation workflows inside a professional DCC—enhanced with AI where it matters.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16">
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
    </section>
  );
};

export default Hero;
