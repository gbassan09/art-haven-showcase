import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const carouselItems = [
  {
    id: 1,
    title: "Projeto Destaque 1",
    category: "Série Especial",
  },
  {
    id: 2,
    title: "Projeto Destaque 2",
    category: "Exposição",
  },
  {
    id: 3,
    title: "Projeto Destaque 3",
    category: "Colaboração",
  },
  {
    id: 4,
    title: "Projeto Destaque 4",
    category: "Pessoal",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const goToPrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  useEffect(() => {
    const timer = setInterval(goToNext, 5000);
    return () => clearInterval(timer);
  }, [goToNext]);

  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="flex items-end justify-between mb-12 md:mb-16">
          <div>
            <span className="text-xs font-body text-muted-foreground tracking-widest uppercase mb-4 block">
              Destaques
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
              Projetos em <span className="italic font-normal">Destaque</span>
            </h2>
          </div>
          
          {/* Controls */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrev}
              disabled={isAnimating}
              className="rounded-full border-border hover:bg-foreground hover:text-background transition-colors"
            >
              <ChevronLeft size={20} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              disabled={isAnimating}
              className="rounded-full border-border hover:bg-foreground hover:text-background transition-colors"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {carouselItems.map((item) => (
              <div
                key={item.id}
                className="w-full flex-shrink-0 px-2"
              >
                <div className="aspect-[16/9] md:aspect-[21/9] bg-muted rounded-lg overflow-hidden relative group cursor-pointer hover-scale">
                  {/* Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 border-2 border-dashed border-muted-foreground/30 rounded-full flex items-center justify-center">
                        <span className="text-muted-foreground/50 text-2xl">+</span>
                      </div>
                      <span className="text-muted-foreground/60 text-sm font-body">
                        Adicionar imagem
                      </span>
                    </div>
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-xs font-body text-primary-foreground/70 tracking-widest uppercase mb-2 block">
                      {item.category}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-display text-primary-foreground font-medium">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile controls & Indicators */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={goToPrev}
            disabled={isAnimating}
            className="md:hidden"
          >
            <ChevronLeft size={20} />
          </Button>
          
          <div className="flex items-center gap-2">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-foreground"
                    : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={goToNext}
            disabled={isAnimating}
            className="md:hidden"
          >
            <ChevronRight size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
