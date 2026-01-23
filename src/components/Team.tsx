import { Linkedin, Sparkles } from "lucide-react";
import { useState } from "react";

const teamMembers = [
  {
    name: "Karthik Raj",
    role: "Founder & CEO",
    bio: "Visionary entrepreneur driving innovation in 3D technology and AI-powered animation solutions.",
    avatar: "KR",
    image: "/team/karthik.jpg",
    gradient: "from-primary to-tertiary",
    linkedin: "https://www.linkedin.com/in/karthik-rajagopalan-b94b4713a/",
  },
  {
    name: "Alwyn Joseph P.",
    role: "Non Executive Chairman",
    bio: "Strategic advisor with expertise in business development and scaling operations.",
    avatar: "AJ",
    image: "/team/alwyn.jpeg",
    gradient: "from-tertiary to-secondary",
    linkedin: "https://www.linkedin.com/in/alwyn-joseph-premkumar-37093913/",
  },
  {
    name: "Kiran Somasundaram",
    role: "Advisor (Deep Learning | 3D Vision)",
    bio: "Deep learning expert specializing in 3D computer vision and AI model optimization.",
    avatar: "KS",
    image: "/team/kiran.jpeg",
    gradient: "from-success to-primary",
    linkedin: "https://www.linkedin.com/in/kiran-somasundaram/",
  },
  {
    name: "Arthi Rajagopalan",
    role: "Head of Branding/Marketing",
    bio: "Crafting compelling brand narratives and driving market growth strategies.",
    avatar: "AR",
    image: "/team/arthi.jpeg",
    gradient: "from-accent to-primary",
    linkedin: "https://www.linkedin.com/in/arthirajagopalan/",
  },
  {
    name: "Tarun Abhichandani",
    role: "Head of Research/Alliances",
    bio: "Leading research initiatives and strategic partnerships to advance 3D AI technology.",
    avatar: "TA",
    image: "/team/tarun_1.jpg",
    gradient: "from-secondary to-success",
    linkedin: "https://www.linkedin.com/in/tarunabhichandani/",
  },
];

function MemberAvatar({
  name,
  image,
  fallback,
  gradient,
}: {
  name: string;
  image?: string;
  fallback: string;
  gradient: string;
}) {
  const [broken, setBroken] = useState(false);

  return (
    <div className="mb-6 relative">
      {/* Gradient frame */}
      <div
        className={`w-36 h-36 mx-auto rounded-3xl bg-gradient-to-br ${gradient} p-[3px] shadow-2xl group-hover:scale-110 transition-all duration-500`}
      >
        <div className="w-full h-full rounded-[22px] overflow-hidden bg-card flex items-center justify-center">
          {!broken && image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={() => setBroken(true)}
            />
          ) : (
            <span className="text-white text-4xl font-black">{fallback}</span>
          )}
        </div>
      </div>

      {/* Decorative corners */}
      <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-lg bg-gradient-to-br ${gradient} opacity-60`} />
      <div className={`absolute -bottom-2 -left-2 w-6 h-6 rounded-lg bg-gradient-to-br ${gradient} opacity-60`} />
    </div>
  );
}


const Team = () => {
  return (
    <section id="team" className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-tertiary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-6">
            <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-tertiary/20 border-2 border-primary/40">
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-primary font-bold text-lg">THE TEAM</span>
              <Sparkles className="w-5 h-5 text-tertiary animate-pulse" />
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-6">
            Meet the <span className="text-gradient">Visionaries</span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">
            Industry veterans and AI pioneers united to revolutionize 3D animation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
          {teamMembers.slice(0, 3).map((member, index) => (
            <div
              key={index}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="h-full rounded-3xl bg-gradient-to-br from-card/90 to-card/50 border-2 border-primary/20 hover:border-primary/50 backdrop-blur-sm hover:scale-105 transition-all duration-500 p-8 shadow-xl hover:shadow-2xl relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <MemberAvatar
                  name={member.name}
                  image={member.image}
                  fallback={member.avatar}
                  gradient={member.gradient}
                />

                
                <div className="text-center relative z-10">
                  <h3 className="text-2xl font-black text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-bold mb-4 text-lg">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  
                  <div className="flex gap-3 justify-center">
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-2xl bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary/50 flex items-center justify-center transition-all hover:scale-110"
                    >
                      <Linkedin className="w-5 h-5 text-primary" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.slice(3).map((member, index) => (
            <div
              key={index}
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="h-full rounded-3xl bg-gradient-to-br from-card/90 to-card/50 border-2 border-primary/20 hover:border-primary/50 backdrop-blur-sm hover:scale-105 transition-all duration-500 p-8 shadow-xl hover:shadow-2xl relative overflow-hidden">
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <MemberAvatar
                  name={member.name}
                  image={member.image}
                  fallback={member.avatar}
                  gradient={member.gradient}
                />

                
                {/* Content */}
                <div className="text-center relative z-10">
                  <h3 className="text-2xl font-black text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-primary font-bold mb-4 text-lg">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  
                  <div className="flex gap-3 justify-center">
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-2xl bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary/50 flex items-center justify-center transition-all hover:scale-110"
                    >
                      <Linkedin className="w-5 h-5 text-primary" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Company values */}
        <div className="mt-20 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { title: "Innovation First", desc: "Pushing boundaries with cutting-edge AI" },
            { title: "User Focused", desc: "Built by creators, for creators" },
            { title: "Quality Driven", desc: "Never compromise on excellence" },
          ].map((value, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-3xl bg-gradient-to-br from-card/80 to-card/40 border-2 border-primary/20 backdrop-blur-sm animate-fade-in"
              style={{ animationDelay: `${600 + index * 100}ms` }}
            >
              <h4 className="text-2xl font-black text-gradient mb-3">
                {value.title}
              </h4>
              <p className="text-muted-foreground">
                {value.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
