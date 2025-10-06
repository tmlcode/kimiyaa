import { Button } from "@/components/ui/button";
import { Menu, Sparkles } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-primary/20">
      <div className="absolute inset-0 bg-gradient-mesh opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-primary via-tertiary to-secondary rounded-2xl flex items-center justify-center rotate-6 group-hover:rotate-12 transition-transform glow-primary">
                <Sparkles className="text-white w-6 h-6" />
              </div>
            </div>
            <span className="text-2xl font-bold">
              <span className="text-gradient">Kimiyaa</span>
              <span className="text-accent">.ai</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground/80 hover:text-primary transition-all font-semibold relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-tertiary group-hover:w-full transition-all"></span>
            </a>
            <a href="#product" className="text-foreground/80 hover:text-secondary transition-all font-semibold relative group">
              Product
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary to-success group-hover:w-full transition-all"></span>
            </a>
            <a href="#features" className="text-foreground/80 hover:text-accent transition-all font-semibold relative group">
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent to-primary group-hover:w-full transition-all"></span>
            </a>
            <a href="#contact" className="text-foreground/80 hover:text-tertiary transition-all font-semibold relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-tertiary to-secondary group-hover:w-full transition-all"></span>
            </a>
          </nav>

          <div className="flex items-center space-x-3">
            <Button 
              variant="outline" 
              className="hidden sm:inline-flex border-2 border-primary/50 bg-primary/5 text-foreground hover:bg-primary/20 hover:border-primary hover:scale-105 rounded-2xl font-semibold transition-all"
            >
              Sign In
            </Button>
            <Button 
              className="bg-gradient-to-r from-primary to-tertiary hover:from-primary/90 hover:to-tertiary/90 text-white rounded-2xl font-bold px-6 shadow-lg hover:shadow-2xl hover:scale-105 transition-all glow-primary"
            >
              Get Started
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden hover:bg-primary/10"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
