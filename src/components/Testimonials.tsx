import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Lead Animator",
    company: "",
    avatar: "SC",
    rating: 5,
    text: "Kimiyaa has completely revolutionized our workflow. What used to take our team 2-3 weeks now happens in under an hour. The topology quality is incredible!",
    gradient: "from-primary to-tertiary",
  },
  {
    name: "Marcus Rodriguez",
    role: "Independent Game Developer",
    company: "",
    avatar: "MR",
    rating: 5,
    text: "As a solo developer, I couldn't afford a 3D artist. Kimiyaa gave me the power to create film-quality models myself. It's a game changer!",
    gradient: "from-secondary to-success",
  },
  {
    name: "Emily Watson",
    role: "VFX Supervisor",
    company: "",
    avatar: "EW",
    rating: 5,
    text: "We've integrated Kimiyaa into our production pipeline and cut costs by 85%. The AI understands nuance better than I expected. Truly impressive technology.",
    gradient: "from-accent to-primary",
  },
  {
    name: "David Kim",
    role: "Animation Director",
    company: "",
    avatar: "DK",
    rating: 5,
    text: "The speed and quality are unmatched. My team can now prototype characters in real-time during client meetings. It's transformed how we work.",
    gradient: "from-tertiary to-secondary",
  },
  {
    name: "Jessica Park",
    role: "Content Creator",
    company: "",
    avatar: "JP",
    rating: 5,
    text: "I create animated content weekly and Kimiyaa is my secret weapon. Professional results without the professional price tag. Absolutely love it!",
    gradient: "from-success to-accent",
  },
  {
    name: "Alex Thompson",
    role: "Technical Art Director",
    company: "",
    avatar: "AT",
    rating: 5,
    text: "The topology generation is mind-blowing. Clean quad flow, proper edge loops - it's like having a senior modeler working 24/7. Best tool we've ever used.",
    gradient: "from-primary to-secondary",
  },
];

const Testimonials = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/10 via-transparent to-tertiary/10"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 rounded-full bg-gradient-to-r from-tertiary/20 to-primary/20 border-2 border-tertiary/40 text-tertiary font-bold text-lg flex items-center gap-2">
              <Star className="w-5 h-5 fill-current" />
              TESTIMONIALS
              <Star className="w-5 h-5 fill-current" />
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            Loved by{" "}
            <span className="text-gradient">Creators Worldwide</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">
            Join thousands of artists, studios, and creators who are transforming their workflow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-full p-8 rounded-3xl bg-gradient-to-br from-card/90 to-card/50 border-2 border-primary/20 hover:border-primary/50 backdrop-blur-sm hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl relative overflow-hidden">
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="w-20 h-20 text-primary" />
                </div>
                
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>
                
                <p className="text-foreground/90 leading-relaxed mb-6 text-lg relative z-10 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center gap-4 pt-4 border-t border-primary/20">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white text-xl font-bold shadow-lg group-hover:scale-110 transition-transform`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-primary font-semibold">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {[
            { number: "2K+", label: "Active Users" },
            { number: "2K+", label: "Models Created" },
            { number: "95%", label: "Satisfaction Rate" },
            { number: "24/7", label: "Support" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-3xl bg-gradient-to-br from-card/80 to-card/40 border-2 border-primary/20 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${600 + index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-black text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-semibold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
