import { MessageCircle, Linkedin, Mail, Sparkles, Heart } from "lucide-react";
import { SiDiscord } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="border-t-2 border-primary/20 py-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-primary via-tertiary to-secondary rounded-2xl flex items-center justify-center rotate-6 group-hover:rotate-12 transition-transform glow-primary">
                <img
                  src="/icon.ico"
                  alt="Kimiyaa"
                  className="w-7 h-7 object-contain"
                  draggable={false}
                />
              </div>
            </div>
              <span className="text-2xl font-black">
                <span className="text-gradient">Kimiyaa</span>
                <span className="text-accent">.ai</span>
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Revolutionizing 3D animation with AI-powered tools. 
              Creating the future, one model at a time.
            </p>
            <div className="flex gap-3">
              <a href="https://discord.gg/f9UfgsJf" className="w-11 h-11 rounded-2xl bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary/50 flex items-center justify-center transition-all hover:scale-110">
                <SiDiscord className="w-5 h-5 text-primary" />
              </a>
              <a href="https://www.linkedin.com/company/treadstonestudios/?viewAsMember=true" className="w-11 h-11 rounded-2xl bg-secondary/10 hover:bg-secondary/20 border border-secondary/30 hover:border-secondary/50 flex items-center justify-center transition-all hover:scale-110">
                <Linkedin className="w-5 h-5 text-secondary" />
              </a>
              <a href="mailto:info@kimiyaa.ai" className="w-11 h-11 rounded-2xl bg-tertiary/10 hover:bg-tertiary/20 border border-tertiary/30 hover:border-tertiary/50 flex items-center justify-center transition-all hover:scale-110">
                <Mail className="w-5 h-5 text-tertiary" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-black text-lg mb-6 text-gradient">Product</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors font-medium hover:translate-x-1 inline-block">Kimiyaa AI</a></li>
              <li><a href="#" className="hover:text-primary transition-colors font-medium hover:translate-x-1 inline-block">Features</a></li>
              <li><a href="#" className="hover:text-primary transition-colors font-medium hover:translate-x-1 inline-block">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors font-medium hover:translate-x-1 inline-block">Roadmap</a></li>
              <li><a href="#" className="hover:text-primary transition-colors font-medium hover:translate-x-1 inline-block">API</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-lg mb-6 text-gradient">Company</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-secondary transition-colors font-medium hover:translate-x-1 inline-block">About Us</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors font-medium hover:translate-x-1 inline-block">Blog</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors font-medium hover:translate-x-1 inline-block">Careers</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors font-medium hover:translate-x-1 inline-block">Press Kit</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors font-medium hover:translate-x-1 inline-block">Partners</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-lg mb-6 text-gradient">Resources</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-colors font-medium hover:translate-x-1 inline-block">Documentation</a></li>
              <li><a href="#" className="hover:text-accent transition-colors font-medium hover:translate-x-1 inline-block">Tutorials</a></li>
              <li><a href="#" className="hover:text-accent transition-colors font-medium hover:translate-x-1 inline-block">Support</a></li>
              <li><a href="#" className="hover:text-accent transition-colors font-medium hover:translate-x-1 inline-block">Community</a></li>
              <li><a href="#" className="hover:text-accent transition-colors font-medium hover:translate-x-1 inline-block">Status</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t-2 border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm font-medium flex items-center gap-2">
              &copy; {new Date().getFullYear()} Kimiyaa.ai. All rights reserved. 
              Made with <Heart className="w-4 h-4 text-tertiary fill-tertiary inline animate-pulse" /> by creators, for creators.
            </p>
            <div className="flex gap-6 text-sm font-medium">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
