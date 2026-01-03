import { useState } from "react";
import ArtCard from "./ArtCard";
import ArtModal from "./ArtModal";

const artworks = [
  {
    id: 1,
    title: "Natureza morta",
    category: "Desenho",
    description: "Realizado por observação direta, explorando luz, sombra e volume a partir da relação entre os objetos e o olhar ao real.",
    year: "2025",
    image: "/placeholder1.png",
    technique: "Carvão sobre papel",
    dimensions: "21 × 29,7 cm",
  },
  {
    id: 2,  
    title: "Apetite Insaciável",
    category: "Escultura",
    description: "A obra é um prato de cerâmica com o fundo vazado, que rompe sua função cotidiana. Ao impossibilitar o uso, o objeto se desloca para o simbólico, evocando ausências, fragilidades e falhas nas estruturas sociais. O vazio central deixa de ser falta e se torna discurso, convidando à reflexão sobre consumo, função e o sentido dos objetos comuns.",
    year: "2025",
    image: "/placeholder2.png",
    technique: "Cerâmica",
    dimensions: "Ø 14,5 cm",
  },
  {
    id: 3,
    title: "Matriz natural",
    category: "Gravura",
    description: "Realizada a partir de folha natural, escolhida por sua textura e dimensão, a monotipia determina um registro único e irrepetível, resultante do contato direto entre a matéria orgânica e o processo de impressão",
    year: "2025",
    image: "/placeholder3.png",
    technique: "Monotipia sobre papel",
    dimensions: "21 × 29,7 cm",
  },
  {
    id: 4,
    title: "A mão.",
    category: "Gravura",
    description: "Feita em madeira, a gravura é construída a partir de múltiplos entalhes e texturas, explorando a matéria para criar uma composição abstrata, na qual profundidade e superfície se sobrepõem, e a obra se completa na interpretação de quem a observa.",
    year: "2025",
    image: "/placeholder4.png",
    technique: "Xilogravura",
    dimensions: "21 × 29,7 cm",
  },
  {
    id: 5,
    title: "Paisagem",
    category: "Desenho",
    description: "Paisagem realizada a partir da observação de uma fotografia, buscando captar as formas, a textura e a materialidade dos elementos, trazendo uma interpretação pessoal da imagem original.",
    year: "2024",
    image: "/placeholder5.png",     
    technique: "Grafite sobre papel",
    dimensions: "A definir",
  },
  {
    id: 6,
    title: "Paisagem natural",
    category: "Pintura",
    description: "Fruto de criação própria, na qual formas, cores e luz são exploradas de maneira livre para expressar a sensação do ambiente. Busco valorizar a fluidez da aquarela, permitindo transições sutis e sobreposições que transmitem uma interpretação pessoal e sensível do ambiente.",
    year: "2025",
    image: "/placeholder6.png", 
    technique: "Aquarela",
    dimensions: "29,7 × 42 cm",
  },
];

const Gallery = () => {
  const [selectedArt, setSelectedArt] = useState<typeof artworks[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (artwork: typeof artworks[0]) => {
    setSelectedArt(artwork);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedArt(null), 300);
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="max-w-2xl mb-16 md:mb-24">
          <span className="text-xs font-body text-muted-foreground tracking-widest uppercase mb-4 block">
            Portfólio
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-6">
            Galeria de <span className="italic font-normal">Obras</span>
          </h2>
          <p className="text-muted-foreground font-body text-lg">
            Uma coleção de trabalhos selecionados que atravessam diferentes momentos e linguagens visuais.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {artworks.map((artwork, index) => (
            <div
              key={artwork.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ArtCard
                id={artwork.id}
                title={artwork.title}
                category={artwork.category}
                year={artwork.year}
                imageSrc={artwork.image}
                onClick={() => openModal(artwork)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ArtModal
        artwork={selectedArt}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Gallery;
