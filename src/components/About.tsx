const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image placeholder */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] bg-muted rounded-lg overflow-hidden relative">
              <img 
                src="/about-image.png" 
                alt="Gabriely trabalhando" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary/20 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-xs font-body text-muted-foreground tracking-widest uppercase mb-4 block">
              Sobre
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-8">
              A <span className="italic font-normal">Artista</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground font-body">
              <p className="text-lg leading-relaxed">
               Estudante de Artes Visuais na Universidade Federal de Juiz de Fora (UFJF). Minha produção se constrói a partir do processo criativo, compreendido como espaço de pesquisa e elaboração poética. Pesquiso materialidade, forma, gesto, transitando entre diferentes linguagens visuais e técnicas. O processo orienta as decisões formais e conceituais das obras, articulando prática artística, reflexão e diálogo com questões contemporâneas da arte.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
              <div>
                <span className="text-3xl md:text-4xl font-display font-semibold text-foreground block">
                  15+
                </span>
                <span className="text-sm text-muted-foreground font-body">
                  Obras criadas
                </span>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-display font-semibold text-foreground block">
                  3+
                </span>
                <span className="text-sm text-muted-foreground font-body">
                  Anos de estudo
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
