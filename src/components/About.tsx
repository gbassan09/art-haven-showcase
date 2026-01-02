const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image placeholder */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] bg-muted rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 border-2 border-dashed border-muted-foreground/30 rounded-full flex items-center justify-center">
                    <span className="text-muted-foreground/50 text-2xl">+</span>
                  </div>
                  <span className="text-muted-foreground/60 text-sm font-body">
                    Foto da artista
                  </span>
                </div>
              </div>
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
                Estudante de artes visuais apaixonada por explorar diferentes 
                técnicas e expressões artísticas. Meu trabalho busca capturar 
                emoções e contar histórias através de cores, formas e texturas.
              </p>
              <p className="leading-relaxed">
                Desde muito jovem, a arte sempre foi minha forma de expressão 
                favorita. Através do desenho, pintura e arte digital, busco 
                criar obras que toquem as pessoas e despertem reflexões.
              </p>
              <p className="leading-relaxed">
                Atualmente, estou desenvolvendo projetos que exploram a 
                intersecção entre tradição e contemporaneidade, sempre 
                buscando novas formas de me expressar artisticamente.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
              <div>
                <span className="text-3xl md:text-4xl font-display font-semibold text-foreground block">
                  50+
                </span>
                <span className="text-sm text-muted-foreground font-body">
                  Obras criadas
                </span>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-display font-semibold text-foreground block">
                  5
                </span>
                <span className="text-sm text-muted-foreground font-body">
                  Exposições
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
