import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToGallery = () => {
    const element = document.querySelector("#gallery");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background - Placeholder for artist image */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background">
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      {/* Artist Image Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <div className="w-[500px] h-[600px] border-2 border-dashed border-muted-foreground/30 rounded-lg flex items-center justify-center">
          <span className="text-muted-foreground font-body text-sm">
            Imagem da artista
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto text-center px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm md:text-base font-body text-muted-foreground tracking-[0.3em] uppercase mb-6 animate-fade-in-up">
            Portfólio
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-semibold text-foreground leading-[0.9] mb-8 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            Arte &<br />
            <span className="italic font-normal">Expressão</span>
          </h1>
          <p className="text-lg md:text-xl font-body text-muted-foreground max-w-xl mx-auto mb-12 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            Explorando a beleza através de traços, cores e emoções.
            Uma jornada visual pela arte contemporânea.
          </p>
          
          <button
            onClick={scrollToGallery}
            className="group flex items-center gap-3 mx-auto text-sm font-medium text-muted-foreground hover:text-foreground transition-colors animate-fade-in-up"
            style={{ animationDelay: "300ms" }}
          >
            <span className="tracking-widest uppercase">Explorar</span>
            <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-muted-foreground/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
